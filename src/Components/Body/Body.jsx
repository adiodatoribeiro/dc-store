import "./Body.css"
import Tenis from "../../assets/tenis.png"

function Body () {
    return (
        <>
            <section 
            className="corpo">
                    <div className="form">
                        <div className="Title">
                            <h3>Crie sua conta</h3>
                            <p>Já possui uma conta? Entra<a href=""> aqui</a></p>
                        </div>
                        <div className="Inputs">
                            <label htmlFor="">Login</label>
                            <input type="text" id="" placeholder="insira seu login ou email" />
                        </div>
                        <div className="Inputs">
                            <label htmlFor="">Senha</label>
                            <input type="text" id="" placeholder="digite sua senha" />
                            <a id="esqueci" href="">Esqueci minha senha</a>
                        </div>
                        <div>
                            <button id="acessar">Acessar conta</button>
                        </div>
                        <div className="icons">
                            <p>Ou faça login como</p>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div>
                        <img className="shoes" src={Tenis} alt="" />
                    </div>
            </section>
        </>
        
      );
}
 
export default Body;