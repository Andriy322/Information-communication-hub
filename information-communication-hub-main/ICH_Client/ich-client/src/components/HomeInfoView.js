import React, { Component } from "react";
import "../App.css"

export class HomeInfoView extends Component {
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-7 pt-4 text-left App-line">
                    <div className="col-4 ">
                        <img className="App-home-pic  " src="patron.jpg" alt="dog patron"></img>
                    </div>
                        <h2 className="font-weight-bold">Information&Communication Hub</h2>
                        <div className="p-1 App-description">
                            <p>The eSupport platform is aimed to provide a variety of assistance types to Ukrainian
                                refugees online.</p>
                            <p> Affected by the war people can get the following assistance types
                                conviniently using this service:</p>
                            <p>
                                <ul>
                                <li>Legal assistance</li>
                                <li>Medical assistance</li>
                                <li>Employment assistance</li>
                                <li>Social assistance</li>
                                </ul>
                                
                            </p>

                        </div>

                    </div>
                   

                </div>
             
              
                <div className="row d-flex justify-content-center ">
                    <div className="col-3">
                        <button className="btn btn-primary rounded border-light App-button our-button" onClick={this.OnContinueClick}>
                            Learn More
                        </button>
                    </div>
                </div>
                <br />

            </div>
        )
    }
}