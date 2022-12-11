

function GetRequests() {
    return [
        {
            initials: "Huchko Olena",
            assistance: {
                legal: true,
                medical: true,
                social: true,
                employment: false
            }
        },
        {
            initials: "Bertash Kateryna",
            assistance: {
                legal: false,
                medical: false,
                social: true,
                employment: true
            }
        },
        {
            initials: "Frolova Anastasiia",
            assistance: {
                legal: false,
                medical: true,
                social: false,
                employment: false
            }
        },
        {
            initials: "Nosulich Anastasiia",
            assistance: {
                legal: true,
                medical: false,
                social: false,
                employment: false
            }
        }
    ]
}

function GetUsers(){
    return[{
        initials: "Huchko Olena",
        isAdmin: true,
        password: "1111",
        token: ""
    },
    {
        initials: "Katiia",
        isAdmin: false,
        password: "1111",
        token: "legal"
    },
    {
        initials: "Nastiia",
        isAdmin: false,
        password: "1111"
    },
    ]
}


function ValidateUser(user){
    let allUsers = GetUsers()

    const foundUser = allUsers.find(us => us.initials === user.initials)
    if (foundUser !== undefined){
        if (foundUser.password === user.password){
            return {
                result: "success",
                msg: "Registration is successfull",
                initials: foundUser.initials,
                isAdmin: foundUser.isAdmin,
                token: foundUser.token

            }
        } else {
            return{
                result: "failed",
                msg: "Password is incorrect"
            }
        }
    }
    else return{
        result: "failed",
        msg: "No such a user"
    }
}

function isUserAdmin(user){
    if(user.initials === "Olena Huchko") return true
    return false
}

function HasAccessToLegalAssistance(token){
    if (token === "legal") return true
    return false
}

function CreateUser(data){
    //
    // save user
    //
    // generate token
    let token = data.assistance.legal? "legal" : ""

    return {
        result: "success",
        msg: "Registration is successfull",
        initials: data.initials,
        isAdmin: false,
        token: token

    }

}

export {
    GetRequests,
    ValidateUser,
    isUserAdmin,
    HasAccessToLegalAssistance,
    CreateUser
}
