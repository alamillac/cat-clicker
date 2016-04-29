import React from 'react';
import {render} from 'react-dom';
import ClickCatCounter from './ClickCatCounter.jsx';

class App extends React.Component {
    render () {
        return (
                <div>
                    <h1>Click cat counter</h1>
                    <ClickCatCounter />
                </div>
        );
    }
}

render(<App/>, document.getElementById('app'));