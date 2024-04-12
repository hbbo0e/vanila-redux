import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Detail from '../routes/Detail';
import Home from '../routes/Home';

function App(){
    return( 
        <Router>
        <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="/:id" exact Component={Detail}></Route>
        </Routes>
    </Router>
    )
}

export default App;