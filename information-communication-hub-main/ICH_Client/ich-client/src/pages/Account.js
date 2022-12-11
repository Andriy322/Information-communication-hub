import React, { Component } from "react";
import { AssistanceView } from "../components/AssistanceView";
import { RequestsView } from "../components/RequestsView";
import { PersonalInfoView } from "../components/PersonalInfoView";
import { GetAllUsersForAdmin, UpdateAssistanceData } from "../ServerApi";



export class Account extends Component {
    constructor(props) {
        super(props)

        this.state = {
            assistanceTypes: {
                legal: props.hasLegal,
                medical: false,
                social: false,
                employment: false
            },
            currentUserId: this.props.userId,
            selectedOption: (props.isAdmin ? 1 : 2),
            requests: [],
        }

        this.onUpdateRequestSelected = this.onUpdateRequestSelected.bind(this)
        this.onUpdateAssistanceSelected = this.onUpdateAssistanceSelected.bind(this)
        this.onBackSelected = this.onBackSelected.bind(this)
    }

    fetchUserAssistanceData(userId) {
        //implement GET request to server
    }

    async fetchAllUsersDataList() {
        let users = await GetAllUsersForAdmin()

        console.log(users)

        let requests = []

        users.forEach(user => {
            requests.push({
                initials: user.refugee.nameSurname,
                userId: user.refugee.id,
                assistance: {
                    legal: user.assistanceData.legal,
                    medical: user.assistanceData.medical,
                    social: user.assistanceData.social,
                    employment: user.assistanceData.employment
                }
            })
        });

        this.setState({
            requests: requests
        })


    }

    onUpdateRequestSelected(request) {
        this.setState({
            selectedOption: 2,
            assistanceTypes: request.assistance,
            currentUserId: request.userId
        })
    }

    async onUpdateAssistanceSelected(data) {
        data.userId = this.state.currentUserId

        let responce = await UpdateAssistanceData(data);

        if (responce.status === 400) {
            alert("Failed to change assistance")
            return false
        }
        //else if (responce.status !== undefined) {
            //alert("Failed to change assistance. Server error")
          //  return false
      //  } 
        else {
            alert("Types of assistance were successfully changed")
            if (this.props.isAdmin) {
                this.setState({
                    selectedOption: 1
                })
            } else {
                this.props.assistanceUpdated(responce)
                this.setState({
                    assistanceTypes: data.assistance
                })
            }
        }
    }

    onBackSelected() {
        if (this.state.selectedOption === 2 && this.props.isAdmin) {
            this.setState({
                selectedOption: 1
            })
        }
    }

    componentDidMount() {
        if (this.props.isAdmin) {
            this.fetchAllUsersDataList()
        }

    }


    render() {
        return (
            <div className="container">
                <h6 className="text-left home-Title">Home - My Account </h6>
                <div className="container rounded App-form ">
                    <div className="row">
                        <div className="col-3 pt-3 pb-3">
                            <PersonalInfoView
                                userInfo={this.props.userInfo}
                                isAdmin={this.props.isAdmin}
                                selectedOption={this.state.selectedOption}
                            />
                        </div>
                        <div className="col-9 pt-3 pb-3">
                            <OptionsView
                                isAdmin={this.props.isAdmin}
                                requests={this.state.requests}
                                assistanceTypes={this.state.assistanceTypes}
                                selectedOption={this.state.selectedOption}
                                onUpdateRequestSelected={this.onUpdateRequestSelected}
                                onBackSelected={this.onBackSelected}
                                onUpdateAssistanceSelected={this.onUpdateAssistanceSelected}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function OptionsView(props) {
    if (props.isAdmin && props.selectedOption === 1) {
        return (
            <RequestsView
                requests={props.requests}
                onUpdateRequestSelected={props.onUpdateRequestSelected}
            />
        )
    } else {
        return (
            <AssistanceView
                assistanceTypes={props.assistanceTypes}
                onBackSelected={props.onBackSelected}
                onUpdateAssistanceSelected={props.onUpdateAssistanceSelected}
            />
        )
    }

}

