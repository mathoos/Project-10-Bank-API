import {useSelector} from "react-redux"


const Header = () => {
    const user = useSelector(state => state.user.user)
    
    return (
        <div className="header">
            {user && (<h1>Welcome back<br/>{user.firstName} {user.lastName}!</h1>)} 
        </div>
    )

}
export default Header

