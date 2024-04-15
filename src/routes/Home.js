import React, { useState } from "react";
import { connect } from "react-redux";

function Home(toDos){

    console.log(toDos)

    const [ text, setText ] = useState("")
    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        setText("");
        console.log(text);
    }

    return (
        <>
            <h1> To Do </h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button> Add </button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </>
    )
}

function mapStateToProps(state){
    console.log(state);
    return { toDos: state };
}

export default connect(mapStateToProps) (Home);
// connect 로 mapStateToProps 함수랑 Home 컴포넌트를 연결시켜준다.