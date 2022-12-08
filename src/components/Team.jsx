import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import gabriel from "../assets/Team/gabriel.jpeg"
import nicolas from "../assets/Team/nicolas.jpeg"
import diego from "../assets/Team/diego.jpg"
import facundo from "../assets/Team/Facundo.jpg"
import "./Team.css"

function Team() {
    return (
        <>
            <Header />
            <div className="team-container container">
            <h2 className="team-title mt-5 ">Team C8-64-FT-MERN</h2>

                <div className="cards-container">


                <div className="card team-card" style={{ width: "18rem" }}>
                    <img src={facundo} className="card-img-top" alt="Foto del participante"  />
                    <div className="card-body">
                        <h5 className="card-title nombre">Facundo Cali</h5>
                        <p className="card-text funcion">Back-End</p>
                        <ul className="list-group list-group-flush">
                            <li class="list-group-item prueba-card"><a className="prueba-card" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/facundo-cali-903b61210">LinkedIn</a></li>
                            <li className="list-group-item prueba-card"><a className="prueba-card" target="_blank" rel="noreferrer" href="https://github.com/Facundo-cali">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <div className="card team-card" style={{ width: "18rem" }}>
                    <img src={gabriel} className="card-img-top" alt="Foto del participante" />
                    <div className="card-body">
                        <h5 className="card-title nombre">Gabriel Mancilla Ducuara</h5>
                        <p className="card-text funcion">Back-End</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item prueba-card"><a className="prueba-card" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriel-mancilla-ducuara-37b337212/">LinkedIn</a></li>
                            <li className="list-group-item prueba-card"><a className="prueba-card" target="_blank" rel="noreferrer" href="https://github.com/gaboducuara">GitHub</a></li>
                            <li className="list-group-item prueba-card"></li>
                        </ul>

                    </div>
                </div>

                

                <div className="card team-card" style={{ width: "18rem" }}>
                    <img src={diego} className="card-img-top" alt="Foto del participante"  />
                    <div className="card-body">
                        <h5 className="card-title nombre">Diego Guzmán</h5>
                        <p className="card-text funcion">Front-End</p>
                        <ul className="list-group list-group-flush prueba-card">
                            <li className="list-group-item prueba-card"><a className="prueba-card" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/diego-guzm%C3%A1n-cerveux/">LinkedIn</a></li>
                            <li className="list-group-item prueba-card"><a className="prueba-card" target="_blank" rel="noreferrer" href="https://github.com/cerveux">GitHub</a></li>
                            <li className="list-group-item prueba-card"><a className="prueba-card" target="_blank" rel="noreferrer" href="https://cerveux.vercel.app/">Portfolio</a></li>
                        </ul>

                    </div>
                </div>

                <div className="card team-card" style={{ width: "18rem" }}>
                    <img src={nicolas} className="card-img-top" alt="Foto del participante"  />
                    <div className="card-body">
                        <h5 className="card-title nombre">Nicolás Cadel</h5>
                        <p className="card-text funcion">UX/UI</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item prueba-card"><a className="prueba-card" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nicolas-cadel-2874741ba">LinkedIn</a></li>
                            <li className="list-group-item prueba-card"><a className="prueba-card" target="_blank" rel="noreferrer" href="https://github.com/MagiciGitHub">GitHub</a></li>
                            <li className="list-group-item prueba-card"><a className="prueba-card" target="_blank" rel="noreferrer" href="https://www.behance.net/nicolascadel">Behance</a></li>
                        </ul>

                    </div>
                </div>

                


                </div>
                

            </div>
            <Footer />
        </>
    );
}

export default Team;