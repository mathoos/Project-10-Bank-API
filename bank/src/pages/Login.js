import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { loginUser } from "../utilities/Server";

import {setToken} from "../utilities/Slice"

import './Home.css'

function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const token = useSelector((state)=>state.user.token) // On extraie la valeur du token à partir du store

    const dispatch = useDispatch()

    const navigate = useNavigate()
    
    useEffect(() => {
        if(token !== null) { //Si un token existe, on redirige l'utilisateur vers la page /user 
            navigate('/user') // Sûrement pour le remember me local Storage
        }
    })


    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginUser(email, password); // On récupère la réponse obtenue dans loginUser
        
            if (response.status === 200) { // Si la réponse est valide
                const token = response.body.token; // On extraie le token
                dispatch(setToken(token)); // On le stocke dans le store
                navigate("/user"); // On dirige l'utilisateur vers sa page
            } 

            else {
                setMessage("Invalid email or password"); // Sinon on indique un message d'erreur
            }
        } 

        catch (error) {
            console.log(error);
        }
    };


    return (
        <main className='main bg-dark'>
            <section className='sign-in-content'>
                <i className='fa fa-user-circle sign-in-icon'></i>
                <h1>Sign In</h1>           

                <form onSubmit={handleSubmit}>
                    <div className='input-wrapper'>
                        <label htmlFor='email'>Username</label>
                        <input type='text' id='email' onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='input-remember'>
                        <input type='checkbox' id='remember-me'/>
                        <label htmlFor='remember-me'>Remember me</label>
                    </div>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                    <button type='submit' className='sign-in-button'>Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default SignIn