import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { APILogin } from "../utilities/Server"
import { selectIsLogged, selectUserName, selectLogFailed } from "../utilities/Slice"

function SignIn() {

    const userName = useSelector(selectUserName)
    const isLogged = useSelector(selectIsLogged)
    const logFailed = useSelector(selectLogFailed)

    const [authentication, setAuthentication] = useState({
        email: userName ? userName : "",
        password: "",
    })

    function submitHandler(e) {
        e.preventDefault()
        dispatch(APILogin(authentication))
    }

    const dispatch = useDispatch()


    return (
        <main className='main bg-dark'>
            {isLogged && <Navigate to='/user' replace={true} />}
                <section className='sign-in-content'>
                    <i className='fa fa-user-circle sign-in-icon'></i>
                    <h1>Sign In</h1>           

                    <form onSubmit={submitHandler}>
                        <div className='input-wrapper'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' id='username' value={authentication.email} onChange={(e) =>
                                setAuthentication({ ...authentication, email: e.target.value })
                            }/>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' value={authentication.password} onChange={(e) =>
                                setAuthentication({ ...authentication, password: e.target.value })
                            }/>
                        </div>
                        <div className='input-remember'>
                            <input type='checkbox' id='remember-me'/>
                            <label htmlFor='remember-me'>Remember me</label>
                        </div>
                        <button type='submit' className='sign-in-button'>Sign In</button>
                    </form>

                    {/* On rajoute une div si les identifiants ne sont pas corrects */}
                    {logFailed && <div>Log failed</div>}
                </section>
        </main>
    )
}

export default SignIn