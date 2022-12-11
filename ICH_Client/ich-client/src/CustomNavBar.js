import React, { Component } from "react"
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"
import { Home } from "./pages/Home"
import { Account } from "./pages/Account"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import {LegalAssistance} from "./pages/LegalAssistance"
import { CheckAccessToAssistance } from "./ServerApi"


export class CustomNavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userToken: "",
            userInfo: {  
                initials: "No name",
            },
            userId: "",
            isAdmin: false,
            isLogined: false,
            hasLegal: false,
        }

        this.legalAssistanceChanged = this.legalAssistanceChanged.bind(this)
        this.userLogin = this.userLogin.bind(this)
        this.userLogout = this.userLogout.bind(this)
        this.userRegister = this.userRegister.bind(this)
        this.assistanceUpdated = this.assistanceUpdated.bind(this)
    }

    legalAssistanceChanged(value) {
        if (this.state.hasLegal === value) return
        this.setState({
            hasLegal: value
        })
    }

    async assistanceUpdated(responce){
        console.log(responce)
        
        if(this.state.isAdmin){
            return;
        }
        
        let hasUserLegal = await CheckAccessToAssistance({
            userToken: responce.userToken,
            userId: responce.userId, 
            assistanceType: "legal",
        })
        
        this.setState({
            userToken: responce.userToken,
            hasLegal: hasUserLegal.on
        })
    }

    async userLogin(responce) {
        console.log(responce)
        
        let hasUserLegal = await CheckAccessToAssistance({
            userToken: responce.userToken,
            userId: responce.userId, 
            assistanceType: "legal",
        })

        this.setState({
            isLogined: true,
            isAdmin: responce.isAdmin,
            userInfo: {
                initials: responce.userInit
            },
            userId: responce.userId,
            userToken: responce.userToken,
            hasLegal: hasUserLegal.on
        })
    }

    userRegister(responce) {
        console.log(responce)

        this.setState({
            isLogined: true,
            isAdmin: responce.userType === 1,
            userInfo: {
                initials: responce.nameSurname,  
            },
            userId: responce.id,
            userToken: responce.userToken,
            hasLegal: false
        })
    }

    userLogout() {
        this.setState({
            isLogined: false,
            isAdmin: false,
            userInfo: {},
            userToken: ""
        })
    }

    render() {
        return (
            <div >
                <BrowserRouter>
                    <div className="App container">
                        <nav className='navbar navbar-expand-sm App-navbar navbar-dark'>
                            <div className='navbar-brand align-items-center m-1'>
                                <NavLink className="text-primary" to="/">
                                    <h4 className="font-weight-bold">ICH</h4>
                                </NavLink>
                            </div>
                            <MenuLinks
                                isLogined={this.state.isLogined}
                                hasLegal={this.state.hasLegal}
                                userLogin={this.userLogin}
                            />
                        </nav>
                        <br />

                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/account' element={<Account
                                userInfo={this.state.userInfo}
                                isAdmin={this.state.isAdmin}
                                hasLegal={this.state.hasLegal}
                                userToken={this.state.userToken}
                                userId={this.state.userId}
                                legalAssistanceChanged={this.legalAssistanceChanged}
                                assistanceUpdated={this.assistanceUpdated}
                            />}></Route>
                            <Route path='/signup' element={<Signup 
                                userId={this.state.userId}
                                userRegister={this.userRegister}
                                assistanceUpdated={this.assistanceUpdated}
                            />}></Route>
                            <Route path='/signin' element={<Login 
                                isLogined={this.state.isLogined}
                                userLogout={this.userLogout}
                                userLogin={this.userLogin } 
                            />}></Route>
                            <Route path='/legal' element={<LegalAssistance />}></Route>
                        </Routes>

                    </div>
                </BrowserRouter>
                <br />
            </div>
        )
    }
}

function MenuLinks(props) {
    if (!props.isLogined) {
        return (
            <ul className='navbar-nav align-items-center justify-content-end ml-auto'>
                <li className='nav-item m-1'>
                    <NavLink className="text-primary" to="/signup">
                        Sign up |
                    </NavLink>
                </li>
                <li className='nav-item m-1'>
                    <NavLink className="text-primary" to="/signin">
                        Sign in 
                    </NavLink>
                </li>

                <li className="nav-item m-1">
                    <img className="form-control-lg " src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar"></img>
                </li>
            </ul>
        )
    } else if (props.isLogined && !props.hasLegal) {
        return (
            <ul className='navbar-nav align-items-center justify-content-end ml-auto'>
                <li className='nav-item m-1'>
                    <NavLink className="text-primary" to="/signin">
                        Sign out |
                    </NavLink>
                </li>
                <li className='nav-item m-1'>
                    <NavLink className="text-primary" to="/account">
                        Account
                    </NavLink>
                </li>
                <li className="nav-item m-1">
                    <NavLink to="/account">
                        <img className="form-control-lg " src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar"></img>
                    </NavLink>
                </li>
            </ul>
        )
    } else {
        return(
        <ul className='navbar-nav align-items-center justify-content-end ml-auto'>
            <li className='nav-item m-1'>
                <NavLink className="text-primary" to="/signin">
                    Sign out |
                </NavLink>
            </li>
            <li className='nav-item m-1'>
                <NavLink className="text-primary" to="/legal">
                    Legal Assistance |
                </NavLink>
            </li>
            <li className='nav-item m-1'>
                <NavLink className="text-primary" to="/account">
                    Account
                </NavLink>
            </li>
            <li className="nav-item m-1">
                <NavLink to="/account">
                    <img className="form-control-lg " src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar"></img>
                </NavLink>
            </li>
        </ul>)
    }
}

