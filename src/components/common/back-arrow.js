import React from "react";
import {withRouter} from "react-router-dom";


function BackArrow({history}){
    return (
        <i className="fas fa-long-arrow-alt-left" onClick={() => history.goBack()}></i>
    )
}

export default withRouter(BackArrow);