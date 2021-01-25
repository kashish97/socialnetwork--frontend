import React from "react";
import Login from "../components/Login";

class HomeContainer extends React.Component {

    componentDidMount(){

       

    }

    render(){
        if(localStorage.getItem("user")!=null){
            return;    
        }

        return (
            <Login>

            </Login>
        )
        
    }
}

export default HomeContainer;