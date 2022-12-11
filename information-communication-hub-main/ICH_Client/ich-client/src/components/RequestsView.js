import React, { Component } from "react";
import "../App.css"

export class RequestsView extends Component {

    render() {
        return (
            <div className="container pt-3 pb-3">
                <div >
                    <SearchField />
                </div>
                <div>
                    <RequestsTable 
                        requests={this.props.requests}
                        onUpdateRequestSelected={this.props.onUpdateRequestSelected} 
                    />
                    <br />
                </div>
            </div>
        )
    }
}


function SearchField(props) {
    return (
        <div className="input-group row">
            <div className="form-outline col-10">
                <input type="search" id="form1" className="form-control" placeholder="Name Surname" />
            </div>
            <button type="button" className="btn btn-light btn-outline-primary App-search-btn col-2">
                Search
            </button>
        </div>
    )
}

function RequestsTable(props) {
    return (
        <table className="table">
            <TableHead />
            <TableBody 
                requests={props.requests}
                onUpdateRequestSelected={props.onUpdateRequestSelected}
             />
        </table>

    )
}

function TableHead() {
    return (
        <thead>
            <th>Assistance:</th>
            <th>Legal</th>
            <th>Medical</th>
            <th>Social</th>
            <th>Employment</th>
            <th></th>
        </thead>
    )
}

function TableBody(props) {
    return (
        <tbody>
            {props.requests.map(request => 
                <TableRow 
                    request={request} 
                    onUpdateRequestSelected={props.onUpdateRequestSelected} 
                />)}
        </tbody>
    )
}

function TableRow(props) {
    return (
        <tr>
            <td>{props.request.initials}</td>
            <td><SelectedOption value={props.request.assistance.legal}/> </td>
            <td><SelectedOption value={props.request.assistance.medical}/> </td>
            <td><SelectedOption value={props.request.assistance.social}/> </td>
            <td><SelectedOption value={props.request.assistance.employment}/> </td>
            <td>
                <UpdateButton 
                    onUpdateRequestSelected={props.onUpdateRequestSelected} 
                    request={props.request}/>
            </td>
        </tr>
    )

}

function SelectedOption(props){
    if (props.value ){
        return (
            <img className="App-option-img" src="https://cdn-icons-png.flaticon.com/512/748/748113.png" alt="Selected"/>
        )
    } else {
        return (
            <img className="App-option-img" src="https://cdn-icons-png.flaticon.com/512/2801/2801932.png" alt="Not selected"/>
        )
    }
}

function UpdateButton(props) {
    return (
        <button className="btn btn-info" onClick={()=> props.onUpdateRequestSelected(props.request)}>
            Update Info
        </button>
    )
}