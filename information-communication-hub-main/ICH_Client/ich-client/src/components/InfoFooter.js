import React, { Component } from "react";
import '../App.css';

export class InfoFooter extends Component {
    render() {
        return (
            <div>
                <footer className="bd-footer py-4 py-md-5 mt-5 App-footer">
                    <div className="container py-4 py-md-5 px-4 px-md-3">
                        <div className="row">

                            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                                <h5><a href="#" className="text-dark">Learn more</a></h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-dark">Our Hub</a></li>
                                    <li className="mb-2"><a href="#" className="text-dark">Q&A Community</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-2 mb-3">
                                <h5><a href="#" className="text-dark">About</a></h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-dark">About Us</a></li>
                                    <li className="mb-2"><a href="#" className="text-dark">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-2 mb-3">
                                <h5><a href="#" className="text-dark" >Policies</a></h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-dark">Privacy Statements</a></li>
                                    <li className="mb-2"><a href="#" className="text-dark">Cookie Policy</a></li>
                                    <li className="mb-2"><a href="#" className="text-dark">Terms of Service</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-2 mb-3">
                                <h5><a href="#" className="text-dark">Need Help?</a></h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-dark">Help Center</a></li>
                                </ul>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="row">
                            <div className="col-6 col-lg-4 offset-lg-1 mb-3">
                            © 2022 Information&Communication hub, Inc.<br/> All Rights Reserved.
                            </div>
                            <div className="col-6 col-lg-3 offset-lg-4 mb-3">
                                <img alt="facebook" className="form-control-lg" src="https://cdn-icons-png.flaticon.com/512/665/665209.png"></img>
                                <img alt="mail" className="form-control-lg" src="https://cdn-icons-png.flaticon.com/512/3178/3178165.png"></img>
                                <img alt="linkedin" className="form-control-lg" src="https://cdn-icons-png.flaticon.com/512/665/665212.png"></img>
                            </div>
                        
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}