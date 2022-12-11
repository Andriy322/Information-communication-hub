import React, { Component } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom'

export function RegistrationLayout(props) {
    const navigate = useNavigate();

    const routeChange = (path) =>{ 
        navigate(path);
    }

    return (
        <RegistrationForm 
            onRouteChange={routeChange}
            onSubmitButton={props.onSubmitButton}
        />
    )
}


class RegistrationForm extends Component {

    constructor(props){
        super(props);
        
        this.state ={
            isFirstPage : true
        }

        this.initials = ""
        this.city = ""
        this.password = ""
        this.assistance = {
            legal: false,
            medical: false,
            social: false,
            employment: false
        }
        this.OnContinueClick = this.OnContinueClick.bind(this)
    }

    async OnContinueClick(e){
        e.preventDefault()
        let data ={}

        if (this.state.isFirstPage){
            if(this.city === "" || this.password === "" || this.initials === ""){
                alert("You must fill in all details")
            } else {
                data = {
                    initials: this.initials,
                    city: this.city,
                    password: this.password,
                    isFirstPage: true
                }

                let ok = await this.props.onSubmitButton(data)
                if (ok){
                    this.setState({
                        isFirstPage: false
                      });
                }
            }   
        }else {
            data ={
                assistance: this.assistance,
                isFirstPage: false
            }

            let ok = await this.props.onSubmitButton(data)
            if (ok) this.props.onRouteChange("/")
        }  
    }

    render() {
        if (this.state.isFirstPage) {
            return (
                <form>
                    <br />
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="numberCircle col-1">
                                    <span className="largeNumerCircle">1</span>
                                    <small>/4</small>
                                </div>
                                <label className="col-10" htmlFor="userInitials">Enter your name and surname</label>
                            </div>
                        </div>
                        <div>
                            <input type="text" className="form-control App-input" id="userInitials" placeholder="Name Surname" 
                                onChange={evt => { this.initials = evt.target.value}}/>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="numberCircle col-1">
                                    <span className="largeNumerCircle">2</span>
                                    <small>/4</small>
                                </div>
                                <label className="col-10" htmlFor="city">Enter the city you are currently in</label>
                            </div>
                        </div>
                        <div>
                            <input type="text" className="form-control App-input" id="city" placeholder="Type your city or choose"
                                onChange={evt => { this.city = evt.target.value}} />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="numberCircle col-1">
                                    <span className="largeNumerCircle">3</span>
                                    <small>/4</small>
                                </div>
                                <label className="col-10" htmlFor="password">Enter your password</label>
                            </div>
                        </div>
                        <div>
                            <input type="password" className="form-control App-input" id="password" placeholder="#########"
                                onChange={evt => { this.password = evt.target.value}} />
                        </div>
                    </div>
                    <hr className="App-hr" />
                    <div className="row d-flex justify-content-center">
                        <div className="col-3">
                            <button className="btn btn-light rounded border-primary App-button"
                                onClick={(e)=>{
                                    e.preventDefault();
                                   
                                    window.location.href= "http://localhost:3000/"
                                }}>
                            <i className="arrow left arrow-blue"></i> Go Back 
                            </button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-primary rounded border-light App-button" onClick={this.OnContinueClick}>
                                Continue <i className="arrow right arrow-white"></i>
                            </button>
                        </div>
                    </div>
                    <br />
                </form>

            )
        } else {
            return (
                <form>
                    <br />
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="numberCircle col-1">
                                    <span className="largeNumerCircle">4</span>
                                    <small>/4</small>
                                </div>
                                <div className="col-10">
                                    <label  >Select the types of assistance you need:</label>
                                    <div className="row p-2">
                                        <div className="col-4"></div>
                                        <div className="d-flex align-items-start flex-column">
                                            <div className="form-check p-1">
                                                <input className="form-check-input " type="checkbox" value="" id="legal" 
                                                    onChange={(e)=> {this.assistance.legal = e.target.checked} } />
                                                <label className="form-check-label" htmlFor="legal">
                                                    Legal Assistance
                                                </label>
                                            </div>
                                            <div className="form-check p-1">
                                                <input className="form-check-input" type="checkbox" value="" id="medical"
                                                    onChange={(e)=> {this.assistance.medical = e.target.checked} } />
                                                <label className="form-check-label" htmlFor="medical">
                                                    Medical Assistance
                                                </label>
                                            </div>
                                            <div className="form-check p-1">
                                                <input className="form-check-input" type="checkbox" value="" id="social"
                                                    onChange={(e)=> {this.social.legal = e.target.checked} } />
                                                <label className="form-check-label" htmlFor="social">
                                                    Social Assistance
                                                </label>
                                            </div>
                                            <div className="form-check p-1">
                                                <input className="form-check-input" type="checkbox" value="" id="employment" 
                                                    onChange={(e)=> {this.assistance.employment = e.target.checked} }/>
                                                <label className="form-check-label" htmlFor="employment">
                                                    Employment Assistance
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="App-hr" />
                    <div className="row d-flex justify-content-center">
                        <div className="col-3">
                            <button className="btn btn-light rounded border-primary App-button">
                            <i className="arrow left arrow-blue"></i> Go Back 
                            </button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-primary rounded border-light App-button" onClick={this.OnContinueClick}>
                                Continue <i className="arrow right arrow-white"></i>
                            </button>
                        </div>
                    </div>
                    <br />
                </form>
            )

        }

    }
}