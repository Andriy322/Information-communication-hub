import React, { useState } from "react";
import "./App.css"

export function Cat() {
    const [url, setUrl] = useState('')

    function fetch_data() {
        fetch("https://api.thecatapi.com/v1/images/search").then(res=>{
            if (res.ok){
                return res.json;
            }
            throw new Error("Cat request failed");
        }, networkError =>console.log(networkError.message)
        ).then(jsonRes=>{
            setUrl(jsonRes[0].url)
        })
    }

    fetch_data()

    return(
        <div>
            <img className="form-control-lg " src={url} alt="avatar"></img>
        </div>
    )


}

