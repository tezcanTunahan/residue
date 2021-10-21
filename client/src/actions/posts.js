import * as api from "../api/index"

export const getPost = () => async (dispatch) => {

    try {
        const {data} = await api.fetchPosts        
        const action = {type: "FETCH_ALL", payload: data}
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}
export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)
        const action = {type: "CREATE", payload: data}
        dispatch(action)
    } catch (error) {
        
    }
}
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({type: "DELETE", payload: id})
    } catch (error) {
        console.log(error)   
    }
}