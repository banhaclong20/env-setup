import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import logo from '../assets/React_logo.png';

class App extends Component {
    render() {
        return (
            <div>
                <img src={logo} />
                <h1>@banhaclong20</h1>
            </div>
        );
    }
}

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector('#root'));