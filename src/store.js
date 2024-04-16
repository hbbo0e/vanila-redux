import { createStore } from 'redux'

const ADD = "ADD";
const DELETE = "DELETE";

// actionCreator 는 const 혹은 function 원하는 것으로 하면 된다. --> 그럼 둘의 차이는?

const addToDo = text => {
    return {
        type: ADD,
        text
    }
}
// addToDo, deleteToDo 에 export 를 지워서 객체 형태로 만들어 가지고 올 것 (함수로 가지고 오면 안 되나봐)

const deleteToDo = id => {
    return {
        type: DELETE,
        id: parseInt(id)
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD: 
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id );
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;