import "./home.css"
import Form from "../Form/Form" 
import Map from "../Map/Map"
import List from "../List/List"
import { useState } from "react"


function Home(){

    const [clickCoordinate,setClickCoordinate] = useState({lat: 0, lng: 0})


    return(
        <>
        <div className="form-map">
            <Form clickCoordinate={clickCoordinate} />
            <Map setClickCoordinate={setClickCoordinate} clickCoordinate={clickCoordinate} />
         </div>
         <List/>
         </>
    )
}

export default Home