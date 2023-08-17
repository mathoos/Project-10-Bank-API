import { Link } from 'react-router-dom'

import logo from '../img/argentBankLogo.png'

function Header(){
    return(
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo" href="./index.html">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to="/signin" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Header;

