import react from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './header/header'
import Home from './contents/home'
import About from './contents/about'
import Footer from './footer/footer'


export default function Layout(){
    return (
        <Router>
            <div>
                <Header></Header>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <hr/>
                <Footer></Footer>
            </div>
        </Router>
    )
}