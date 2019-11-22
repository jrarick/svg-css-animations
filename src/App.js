import React from 'react';
import { useRoutes, useRedirect } from 'hookrouter';
import './App.css';

import routes from './router';

function App() {
    const routeResult = useRoutes(routes);
    useRedirect('/', 'svganimation');

    return (
        <div className="App">
            {routeResult}
        </div>
    );
}

export default App;
