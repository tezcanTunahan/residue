import "./auth.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import {signup,signin} from "../../actions/auth"

function Auth(){

    const dispatch =  useDispatch()
    const history = useHistory()

    const initialState = {firstName: "", lastName: "", email: "", password: ""}

    const [isSignUp,setIsSignUP] = useState(false)
    const [formData,setFormData] = useState(initialState)

    function handleSubmit(e){
        e.preventDefault()
        if(isSignUp){
            dispatch(signup(formData,history))
        }else{
            dispatch(signin(formData,history))
        }
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const switchMode = () =>{
        setIsSignUP(!isSignUp)
    }

        return(
        <div className="auth-container">
            <h1>{isSignUp ? "Sign Up": "Sign In"}</h1>

            <form className="auth-form" onSubmit={handleSubmit} >

                {isSignUp && (<>
                    <input type="text" name="firstName" placeholder="first name" onChange={handleChange} />
                    <input type="text" name="lastName" placeholder="last name" onChange={handleChange} />
                    </>
                )}
                <input type="email" name="email" placeholder="email" onChange={handleChange} />
                <input type="password" name="password" placeholder="password" onChange={handleChange} />
                <button className="auth-btn" type="submit" >{isSignUp ? "Sign Up": "Sign In"}</button>
                <button className="auth-btn" type="button" onClick={switchMode} >{isSignUp ? "Already have a acocunt? Sign in": "Don't have a account? Sign up"}</button>
            </form>

        </div>
    )
}

export default Auth