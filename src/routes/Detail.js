import React, { useState } from "react";

function Detail(){

    const [ text, setText ] = useState("")
    function onChange(e){
        setText(e.target.value);
    }

    return (
        <>
            <h1> To Do </h1>
            <form>
                <input type="text" value={text} onChange={onChange}/>
                <button> Add </button>
            </form> 
            <ul></ul>
        </>
    )
}

export default Detail;