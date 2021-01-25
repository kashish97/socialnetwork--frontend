import React from "react";

export default function Post({item}){
    return (
        <div className="row">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    )
}