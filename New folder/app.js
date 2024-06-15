import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieDetail from './MovieDetail';

const App = () => {
    return (
        <Router>
            <div>
                <Route path="/movie/:id" component={MovieDetail} />
            </div>
        </Router>
    );
};

export default App;
