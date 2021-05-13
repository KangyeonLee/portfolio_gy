import react from 'react'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

import Header from './header/header'
import Home from './contents/home'
import About from './contents/about'
import SubPage from './contents/subpage'
import Footer from './footer/footer'


export default function Layout(){
    return (
        <Router>
            <div>
                <Header></Header>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/project/:id" component={SubPage}/>
                <Route exact path="/" component={Home}/>
                <hr/>
                <Footer></Footer>
            </div>
        </Router>
    )
}