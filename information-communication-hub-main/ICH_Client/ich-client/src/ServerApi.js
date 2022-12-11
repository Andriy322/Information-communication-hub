import { variables } from "./Variables";

async function GetAllUsersForAdmin(){
    const responce = await fetch(variables.API_URL + "Refugees/GetRefugees")
    
    return responce.json()
    
}

async function LoginUser(data){
    const responce = await fetch( variables.API_URL + "Refugees/Login", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userInit: data.initials,
            password: data.password
        })
    } )
    if (responce.ok)
        return responce.json();
    else
        return responce
}


async function RegisterUser(data){
    const responce = await fetch( variables.API_URL + "Refugees/PostRefugee", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nameSurname: data.initials,
            password: data.password,
            city: data.city,
        })
    } )
    if (responce.ok)
        return responce.json();
    else
        return responce
}

async function UpdateAssistanceData(data){
    const responce = await fetch( variables.API_URL + "Refugees/ChangeAssistance", {
        method: "put",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            assistanse: data.assistance, 
            userId: data.userId
        })
    } )
    if (responce.ok)
        return responce.json();
    else
        return responce
}

async function CheckAccessToAssistance(data){
    let token = data.userToken
    if(token === null) {
        return {
            on: false
        }
    }

    token = token.replace(/\//g, "%2F")
    token = token.replace(/=/g, "%3D")

    const responce = await fetch( encodeURI(variables.API_URL + 
        "Refugees/ServiceOn/" + data.userId.toString() + "/" + 
        data.assistanceType + "/" + token))

    return responce.json()
}

export{
    GetAllUsersForAdmin,
    LoginUser,
    RegisterUser,
    UpdateAssistanceData,
    CheckAccessToAssistance,

}