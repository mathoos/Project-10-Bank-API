import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setUser} from "../utilities/Slice";
import { updateUserProfile } from "../utilities/Server";


const Header = () => {

    // On accède aux données de l'utilisateur à partir du store pour les mettre à jour
    const user = useSelector(state => state.user.user)
    const token = useSelector((state)=>state.user.token)

    const [isEditMode, setIsEditMode] = useState(false)
    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [hasFirstName, setHasFirstName] = useState(false)
    const [hasLastName, setHasLastName] = useState(false)

    const dispatch = useDispatch()

    const changeName = (e) => {
        if(e.target.id === "firstname"){
            setUserFirstName(e.target.value) // La valeur correspond à la saisie de l'utilisateur
            setHasFirstName(true) // On défini l'état à true car le champ est rempli

        } 
        else if (e.target.id === "lastname"){
            setUserLastName(e.target.value)
            setHasLastName(true)
        }
    }

    const saveName = async (e) => {
        e.preventDefault();
        if (hasFirstName === true && hasLastName === true) { // Si les champs sont remplis
            const updateSuccess = await updateUserProfile(token, userFirstName, userLastName); // On appelle updateUserProfile 
        
            if (updateSuccess) { // Si la mise à jour est réussie
                // on met à jour les nouvelles informations de user
                dispatch(setUser({...user, firstName: userFirstName, lastName: userLastName,})); 
                setIsEditMode(false); // on désactive le mode édition
            } 
            else {
                console.log("La mise à jour a échoué"); // Sinon on affiche un message d'erreur
            }
        }
    }

    
    if(isEditMode === false) {
        return (
            <div className="header">
                {user && (<h1>Welcome back<br/>{user.firstName} {user.lastName}!</h1>)}
                <button className="edit-button" onClick={() => setIsEditMode(true)}>Edit Name</button>
            </div>
        )
    } 
    
    else {
        return (
            <div className="header">
                <form>
                    <label htmlFor="firstname">
                        <input type="text" id="firstname" placeholder={user.firstName} onChange={changeName}/>
                    </label>
                    <label htmlFor="lastname">
                        <input type="text" id="lastname" placeholder={user.lastName} onChange={changeName}/>
                    </label>  
                </form>
                <div className="edit-button-container">
                    <button className="edit-button" onClick={saveName}>Save Name</button>
                    <button className="cancel-button" onClick={() => setIsEditMode(false)}>Cancel</button>
                </div>
            </div>
        )
    }
}


export default Header

