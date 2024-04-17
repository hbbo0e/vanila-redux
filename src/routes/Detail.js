import React, { useState } from "react";
import { connect } from "react-redux";

function Detail(toDo){
    return (
        <>
            <h1> {toDo?.text} </h1>
            <h5> Created at: {toDo?.id} </h5>
        </>
    )
}

function mapStateToProps(state, ownProps){
    console.log(state);
    console.log(ownProps);
    
    const{
        match: {
            params: {id},
        },
    } = ownProps;

    return { toDos: state.find((todo) => todo.jd === parseInt(id))};
}

export default connect(mapStateToProps) (Detail);