# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start the app
Ensure you have node.js, npm, nvm (in case of some unsupported packages use nvm to downgrade Node version) 

My versions: NodeJs:v18.12.1, npm:8.19.3

In the project directory run this command to install all needed packages in package.json:

### `npm install`

Then you can start the app:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## API for back-end implementation

1. Request for auth: {
    userInit: "",
    password: "",
}
Response: {
    userToken: "",
    isAdmin: 
    userInit: "",
    userId: ""
}
or error {
    errorStatus: "",
    errorMsg: "",
}

2. Check for Legal assistance request {
    userToken: "",
    type: "legal",
    userId: ""
}
Responce:{
    on: "",
    type: "legal"
    userId: ""
}

3. Registration request {
    userInitials: "",
    city: "",
    password: "",
}

Responce: {
    status: ""
    userId: ""
}

4. Change assistance request: {
    assistanse: {
        legal: true,
        social: false,
        medical: true,
        employment: false
    }
    userId: ""
}

Responce {
    userToken: "",
    userId: ""
}

5. Get Admin request {
}

Responce {
    users [
        {
        },
    ]
}



