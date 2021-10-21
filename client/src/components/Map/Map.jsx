import "./map.css"
import { useState } from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';
import {useSelector} from "react-redux"
import "mapbox-gl/dist/mapbox-gl.css"

function Map({setClickCoordinate,clickCoordinate}){
  
    const getPosts = useSelector((state) => state.posts)



    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 0,
        longitude: 0,
        zoom: 13
      });
      const [currentCoordinater,setCurrentCordinates] = useState({lat:0,lng:0})
        
      navigator.geolocation.getCurrentPosition(pos => {
          setViewport({
            ...viewport,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          })
          setCurrentCordinates({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
              })
        });

      function clickHandle(e){
        setClickCoordinate({lng: e.lngLat[0] ,lat: e.lngLat[1]})
      }

    return (
      <div className="map">
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        onClick={clickHandle}
        >
        <Marker className="color-currentPlace" latitude={currentCoordinater.lat} longitude={currentCoordinater.lng} offsetLeft={-20} offsetTop={-10}>
        <div><i className="fas fa-street-view"></i></div>
       </Marker> 
       <Marker className="color-selectedPlace" latitude={clickCoordinate.lat} longitude={clickCoordinate.lng} offsetLeft={-20} offsetTop={-10}>
        <div><i className="fas fa-street-view"></i></div>
       </Marker> 
    
       {getPosts.map(post => {
        return <Popup
          key={post._id}
          latitude={post.lat}
          longitude={post.lng}
          closeButton={false}
          closeOnClick={false}
          anchor="bottom" >
          <div>
            <div className="mapItem-container">
            {post.selectedFile && <img className="map-img" src={post.selectedFile} alt="" />}
            <p className="margin title">{post.title} </p>
        </div>
          </div>
        </Popup>

       }) }
        </ReactMapGL>
     

      </div>
  
    )
}

export default Map