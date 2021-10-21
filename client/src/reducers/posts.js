const reducers =  (posts = [],action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload
        case "CREATE":
            return [...posts, action.payload]
        case "DELETE":
            return posts.filter(post => action.payload !== post._id)
        default:
            return posts
    }
}

export default reducers