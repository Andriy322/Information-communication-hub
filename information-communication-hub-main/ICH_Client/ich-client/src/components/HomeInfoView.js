import React, { Component } from "react";
import "../App.css"

export class HomeInfoView extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7 pt-4 text-left App-line">
                        <h2 className="font-weight-bold">Information&Communication Hub</h2>
                        <div className="p-1 App-description">
                            <p>The ICH platform is aimed to provide a variety of assistance types to Ukrainian
                                refugees online. Affected by the war people can get the following assistance types
                                conviniently using this service.</p>
                            <p>
                                <div>-legal assistance</div>
                                <div>-medical assistance</div>
                                <div>-employment assistance</div>
                                <div>-social assistance</div>
                            </p>

                        </div>

                    </div>
                    <div className="col-4">
                        <img className="App-home-pic" src="illustration.png" alt="ICH"></img>
                    </div>

                </div>
             
                <hr className="App-hr" />
                <div className="row d-flex justify-content-center ">
                    <div className="col-3">
                        <button className="btn btn-primary rounded border-light App-button" onClick={this.OnContinueClick}>
                            Learn More <i className="arrow right arrow-white"></i>
                        </button>
                    </div>
                </div>
                <br />

            </div>
        )
    }
}