import "./app.css"
import Header from "./components/Header/Header"
import { BrowserRouter,Switch,Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Auth from "./components/Auth/Auth"



function App(){
    
    return (
        <BrowserRouter>
            <Header/>
            
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/auth">
                    <Auth/>
                </Route>
            </Switch>

            
        </BrowserRouter>
    )
}

export default App