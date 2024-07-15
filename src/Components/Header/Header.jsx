import LogoDC from "../../assets/imgdc.png"
import "./Header.css"

function Header () {
    return(
        <>
            <div className="cabecalho">
                <img src={LogoDC} alt="" />
                <h1>Digital Store</h1>
            </div>
        </>
        
    )
}

export default Header;