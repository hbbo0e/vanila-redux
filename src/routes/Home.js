import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }){

    console.log("----- toDos -----", toDos)
    // console.log("----- rest -----", rest)
    console.log("----- addToDo -----", addToDo)

    const [ text, setText ] = useState("")
    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        addToDo(text)
        setText("");
        console.log("----- text -----", text);
    }

    return (
        <>
            <h1> To Do </h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button> Add </button>
            </form>
            <ul>
                { toDos.map(toDo => <ToDo {...toDo} key={toDo.id} />)}
            </ul>
        </>
    )
}

function mapStateToProps(state){
    console.log("----- state -----", state);
    return { toDos: state };
}

function mapDispatchToProps(dispatch){
    console.log("----- dispatch -----", dispatch);
    return { 
        addToDo: (text) => dispatch(add(text))
     }
}
// dispatch 는 store.dispatch 와 거의 유사하다.

export default connect(mapStateToProps, mapDispatchToProps) (Home);
// connect 로 mapStateToProps 함수랑 Home 컴포넌트를 연결시켜준다.
// connect 가 useSelector() 이랑 비슷한 느낌 => store 의 state 를 가지고 오는 거 