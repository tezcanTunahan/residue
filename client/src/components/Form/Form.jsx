import "./form.css"
import {  useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import {createPost} from "../../actions/posts"
import unlockImg from "../../img/unlock.svg"

 function Form({clickCoordinate}){

    var latitude
    var longitude

    const user = JSON.parse(localStorage.getItem("profile"))

    navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude
            longitude = position.coords.longitude
      })

    const [data,setData] = useState({title:"",message:"",lat: latitude, lng: longitude, selectedFile: ""})
    const dispatch = useDispatch()

    navigator.geolocation.getCurrentPosition((position) => {
        setData({...data,lat: position.coords.latitude, lng: position.coords.longitude});
    });

    useEffect(()=>{
        setData({...data,lat: clickCoordinate.lat, lng: clickCoordinate.lng})
    },[clickCoordinate])
    
    function submitHandler(e){
        e.preventDefault()
        dispatch(createPost({...data,name: user?.result?.name }))
        setData({title: "",message:"",selectedFile: "",lat: data.lat,lng: data.lng})
    }



  


     return(
         <div className="form-container">
            {user ? (
             <form className="form" onSubmit={submitHandler}>
                <h1>Form</h1>
                <p>It use your current locatin as a default. Click the map to change your save location</p>
                <input type="text" name="title" placeholder="title" value={data.title} onChange={e => setData({...data, title: e.target.value })} required="required"/>
                <input type="text" name="message" placeholder="message" value={data.message} onChange={e => setData({...data, message: e.target.value })} required="required"/>
                <input type="text" name="img" placeholder="Img url" value={data.selectedFile} onChange={e => setData({...data, selectedFile: e.target.value })} />
            
                <button className="submit-btn">submit</button> 

             </form>) : <div className="unlock-container">
                <h1>Sign in to create post</h1>
                <img className="unlock-img" src={unlockImg} alt="" />
             </div>
            }
         </div>
        
     )
 }

 export default Form