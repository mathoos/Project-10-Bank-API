import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { loginUser } from "../utilities/Server";

import {setToken} from "../utilities/Slice"

import './Home.css'

function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [rememberMe, setRememberMe] = useState(false); // État pour se souvenir de l'utilisateur

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()




    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginUser(email, password); // On récupère la réponse obtenue dans loginUser
        
            if (response.status === 200) { // Si la réponse est valide
                const token = response.body.token; // On extraie le token
                // Stocker le token dans le store
                    dispatch(setToken(token));
                if (rememberMe) {
                    // Stocker le token dans le localStorage
                    localStorage.setItem('authToken', token);
                } 
            
                navigate("/user"); // On dirige l'utilisateur vers sa page
            } 
            

            else {
                setMessage("L'authentification a échouée."); // Sinon on indique un message d'erreur
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
                        <input type='checkbox' id='remember-me' checked={rememberMe} onChange={handleRememberMeChange}/>
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