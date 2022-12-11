import React, { Component } from "react";
import "../App.css"

export class AssistanceView extends Component {
    constructor(props){
        super(props)

        this.state={
            tempAssistance: props.assistanceTypes
        }

        this.onCheckChange = this.onCheckChange.bind(this)
    }

    onCheckChange(e, id){
        let isChecked = e.target.checked;
        var assistance = this.state.tempAssistance
        assistance[id] = isChecked

        this.setState({
            tempAssistance: assistance
        })
    }

    render() {
        return (
            <div>
                <div className="container App-checkbox-view pt-3 pb-3">
                    <div className="d-flex justify-content-start">
                        <h6>Update types of assistance you would like to get</h6>
                    </div>
                    <div className="d-flex align-items-start flex-column container">
                        <AssistanceCheckInput id="legal" label="Legal Assistance" value={this.props.assistanceTypes.legal}  onCheckChange={this.onCheckChange}/>
                        <AssistanceCheckInput id="medical" label="Medical Assistance" value={this.props.assistanceTypes.medical} onCheckChange={this.onCheckChange}/>
                        <AssistanceCheckInput id="social" label="Social Assistance" value={this.props.assistanceTypes.social} onCheckChange={this.onCheckChange}/>
                        <AssistanceCheckInput id="employment" label="Employment Assistance" value={this.props.assistanceTypes.employment} onCheckChange={this.onCheckChange}/>
                    </div>
                </div>
                <div>
                    <hr className="App-hr" />
                    <div className="row d-flex justify-content-center">
                        <div className="col-4">
                            <button className="btn btn-light rounded border-primary App-button" 
                                onClick={this.props.onBackSelected}>
                                Back
                            </button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary rounded border-light App-button" 
                            onClick={()=> {
                                    var request ={
                                        assistance: this.state.tempAssistance
                                    }
                                    this.props.onUpdateAssistanceSelected(request) 
                                }}>
                                Update
                            </button>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}

function AssistanceCheckInput(props) {
    return (
        <div className="form-check p-2">
            <input className="form-check-input" type="checkbox" 
                defaultChecked={props.value} id={props.id} 
                onChange={(e)=>props.onCheckChange(e, props.id)}/>
            <label className="form-check-label" htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    )
}

