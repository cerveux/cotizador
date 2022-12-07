import "./Header.css"
import logo from "../../assets/Logo Fondo Oscuro.png"
 import { BoolHook } from "../../hooks/BoolHook.js"
/*import { useState } from "react"
import { opcionesApp } from "../../utils/opcionesApp" */
import { Link } from "react-router-dom"
import Modal from "../Modal/Modal"


function Header() {

    /* const [pais, setPais] = BoolHook(true);
    const { paises } = opcionesApp();
    const [activa, setActiva] = useState(0) */
    const login = JSON.parse(window.localStorage.getItem("login")).logged || false;

    const [isOpenError, openModalError] = BoolHook(false); //Hook que maneja la muesta y la desaparicion del modal

    const logOut = ()=>{

        window.localStorage.setItem("login", JSON.stringify({user: "", idbase: "", logged: false}))
        openModalError()


    }

    return (
        <>
            {/*  <header>
                <div className="header-container container">
                    <Link to="/"><img className="header-logo" src={logo} alt="app logo" /></Link>

                    
                    <img className="flag" src={paises[activa].bandera} alt={paises[activa].texto}
                        onClick={() => setPais()} />
                        <Link className="menu" to="/configuracion">configuracion</Link>

                </div>


            </header>
            <div className="container-paises container">
                <div className="container tarjeta-paises" style={{ opacity: pais && "0", pointerEvents: pais && "none" }}>

                    {paises.map(({ bandera, texto }, index) => {
                        return (
                            <div className="flag-container" key={index}>
                                <img className="flag" src={bandera}
                                    alt={texto}
                                    onClick={() => {
                                        setActiva(index);
                                        setPais();
                                    }} />
                            </div>
                        )

                    })}



                </div>

            </div> */}
            {/* <header> */}





            <header>


                <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: "#e1a325" }}>
                    <div className="container-fluid">
                        <Link to="/"><img className="header-logo ms-5" src={logo} alt="app logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto me-5">
                                <Link className="nav-link inter"

                                
                                style={ {pointerEvents: !login &&  "none"}}
                                onClick={logOut} to="/">Log Out</Link>
                                <Link className="nav-link active inter" to="/configuracion">Configuración</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Modal isOpen={isOpenError} closeModal={openModalError}>
                        <div className="card text-center" style={{ width: " 18rem", backgroundColor: "black" }} >
                            <div className="card-body ">
                                <h5 className="card-title">
                                    <div className="wrapper">
                                        <div className="wrapper-wrong">

                                        </div>
                                    </div>
                                </h5>
                                <h6 className="card-subtitle mb-3">Cerraste seción con éxito, te esperamos nuevamente</h6>

                                <div className="d-grid gap-2">
                                    <button className="btn" onClick={() => openModalError()} >Cerrar</button>
                                </div>

                            </div>
                        </div>
                    </Modal>

            </header>


        </>
    );
}

export default Header;