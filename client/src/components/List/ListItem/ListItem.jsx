import "./listItem.css"
import {useDispatch} from "react-redux"
import {deletePost} from "../../../actions/posts"
import moment from "moment"


function ListItem({post}){
    
    const user = JSON.parse(localStorage.getItem("profile"))


    const dispatch = useDispatch()

    function deltePost(){
        dispatch(deletePost(post._id))
    }

    return(
        <div className="listItem-container">
            {post.selectedFile && <img className="list-img" src={post.selectedFile} alt="" />}
            <h2 className="margin title">{post.title} </h2>
            <p className="margin">{post.message} </p>
            <hr />
            <p className="margin">Creator: {post.name} </p>
            <p className="margin">{moment(post.createdAt).fromNow()}</p>
             {user?.result?._id === post.creator && <button className="margin list-btn" onClick={deltePost}>delete post</button> }
        </div>
    )
}

export default ListItem