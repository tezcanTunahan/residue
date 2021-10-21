import "./list.css"
import { useEffect } from "react"
import {useDispatch,useSelector} from "react-redux"
import {getPost} from "../../actions/posts"
import ListItem from "./ListItem/ListItem"

function List(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPost())
    },[dispatch])

    const getPosts = useSelector((state) => state.posts)
    
    return (
        <div className="list-container">
            <h1 className="list-h1">Residue</h1>
            {getPosts.map(post => <ListItem post={post} key={post._id} /> )}
        </div>
    )
}

export default List