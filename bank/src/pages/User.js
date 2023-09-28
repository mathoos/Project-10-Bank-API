import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setUser} from "../utilities/Slice";
import { getUserProfile } from "../utilities/Server";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Account from "../components/Account";
import './Home.css';

const User = () => {

    const token = useSelector((state)=>state.user.token) // On extraie la valeur du token à partir du store
    const dispatch = useDispatch()


    useEffect(() => {
        // Effectuer ici la récupération des données de l'utilisateur
        getUserProfile(token)
            .then((user) => {
                console.log(user);
                dispatch(setUser(user.body));
            })
            .catch((error) => {
                console.error(error);
            });
    }, [token, dispatch]);



    

    return (
        <main className="main bg-dark">
            <Navbar />
            <Header />
            <Account />
        </main>
    )
}
export default User