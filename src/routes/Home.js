import React, { useState } from "react";
import { connect } from "react-redux";

function Home(){

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
            <ul></ul>
        </>
    )
}

function getCurrentState(){

}

export default connect(getCurrentState) (Home);
// connect 로 getCurrentState 함수랑 Home 컴포넌트를 연결시켜준다.