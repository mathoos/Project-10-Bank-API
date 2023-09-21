import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {setUser} from "../utilities/Slice"
import {useNavigate} from "react-router-dom"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Account from "../components/Account"

import { getUserProfile } from "../utilities/Server";

import './Home.css'

const User = () => {

    const token = useSelector((state)=>state.user.token) // On extraie la valeur du token à partir du store

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        if (token === null) {
          navigate("/login");
        }
      
        getUserProfile(token)
          .then((user) => {
            console.log(user);
            dispatch(setUser(user.body));
          })
          .catch((error) => {
            console.error(error);
          });
      }, [token, dispatch, navigate]);

    return (
        <main className="main bg-dark">
            <Navbar />
            <Header />
            <Account />
        </main>
    )
}
export default User