import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setUser} from "../utilities/Slice";
import { getUserProfile } from "../utilities/Server";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Account from "../components/Account";
import './Home.css';

const User = () => {

    const token = useSelector((state)=>state.user.token) // On extraie la valeur du token à partir du store
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if (!token) { // Si le token n'est pas sauvegardé dans le localStorage
            navigate("/"); // On est redirigé sur la page d'accueil 
        } 
        else { // Sinon on récupère les données de l'utilisateur  
            getUserProfile(token)
                .then((user) => {
                    console.log(user);
                    dispatch(setUser(user.body));
                })
                .catch((error) => {
                    console.error(error);
            });
        }
    }, [token, dispatch, navigate]);


    return (
        <main className="body">
            <Navbar/>
            <div className="main bg-dark">
                <Header/>
                <Account/>
            </div>        
            <Footer/>
        </main>
    )
}


export default User