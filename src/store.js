import { createStore } from 'redux'

const ADD = "ADD";
const DELETE = "DELETE";

// actionCreator 는 const 혹은 function 원하는 것으로 하면 된다. --> 그럼 둘의 차이는?

export const addToDo = text => {
    return {
        type: ADD,
        text
    }
}

export const deleteToDo = id => {
    return {
        type: DELETE,
        id
    }
}

const reducer = (state = ["hi"], action) => {
    switch (action.type) {
        case ADD: 
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter(toDo => toDo !== action.id );
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;

store.getState()