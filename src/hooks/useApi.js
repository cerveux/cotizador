import { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs-react"



export function useApi(initialValue = "638407eb2aac88001c4e0ceb") {
  const [valores, setValores] = useState(null);
  /* const someOtherPlaintextPassword = 'C8-64-FT-MERN';
  const saltRounds = 10; */


  /* https://c8-64-ft-mern-production.up.railway.app/api/login?user=admin&password=admin */
  const url = `https://c8-64-ft-mern-production.up.railway.app/api/`;

  const fetchValores = () => {
    

    axios.get(`${url}content/${initialValue}`).then((resp) => {
      // Se obtiene la data y se carga al estado al key correspondiente
      setValores({
            shablon: [(resp.data.shablon_nuevo + resp.data.shablon_bajada + resp.data.shablon_grabado), (resp.data.shablon_usado + resp.data.shablon_borrado + resp.data.shablon_bajada + resp.data.shablon_grabado)],
            rendimiento: [[resp.data.logo_claro, resp.data.central_claro, resp.data.full_claro], [resp.data.logo_oscuro, resp.data.central_oscuro, resp.data.full_oscuro]],
            colores: [[resp.data.agua_fc, resp.data.plastisol, resp.data.relieve, resp.data.foil, resp.data.glitter, 0, resp.data.dyp], [resp.data.agua_fo, resp.data.plastisol, resp.data.relieve, resp.data.foil, resp.data.glitter, resp.data.corrosion, resp.data.dyp]]
      });
    }).catch(err => console.log(err));
  };

  const login = (user, pass)=>{
    console.log(`username: ${user} password: ${pass}`);

    axios.get(`${url}users`).then((resp) => {
      
      const index = resp.data.findIndex((cuenta => cuenta.user === user ));
      const usuario = (resp.data[index]);
      console.log(usuario);

      if(index >= 0){
        console.log("usuario encontrado");

        bcrypt.compare(pass, usuario.password, (err, isMatch)=>{
          if(err){
            throw err
          }else if(!isMatch){
            console.log("Password doesnt match");
          }else{
            console.log("Password Matches");
            window.localStorage.setItem("login", JSON.stringify({user: usuario.user, idbase: usuario.idbase, logged: true}))

            window.location.replace("/configuracion");
          }
        }) 

      } else{
        console.log("Nombre de usuario incorrecto");
      }
     
      
    })
  }

  return [valores, fetchValores, login];
}

