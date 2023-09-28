import Logo from "../img/argentBankLogo.png"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import {setToken, setUser} from "../utilities/Slice"


const Navbar = () =>{

    // J'extraie la propriété user de l'état global du store qui contient les informations sur l'utilisateur connecté
    const user = useSelector((state)=>state.user.user)
    console.log(user)

    const dispatch = useDispatch()

    // Je réinitialise les données de l'utilisateur à null
    const logOut = () => {   
        localStorage.removeItem('authToken'); // On supprime le token du localStorage
        // On réinitialise le store
        dispatch(setUser(null));
        dispatch(setToken(null));
    };

    return(   
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {user ? 
                    (user &&
                        <div>
                            <Link className="main-nav-item" to='/user'>
                                <i className="fa fa-user-circle"></i>
                                {user.firstName}
                            </Link>
                            <Link className="main-nav-item" to='/' onClick={logOut}>
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </Link>
                        </div>
                    )
                    :(
                        <Link className="main-nav-item" to='/login'>
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    )
                }
            </div>
        </nav>      
    )
}
export default Navbar