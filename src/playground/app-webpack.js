import React from 'react';
import ReactDOM from 'react-dom';

// const l = React.createElement('p',{},'I am an react element created with ES5');

// ReactDOM.render(l,document.getElementById('app'));

const jsx = <div>
                <p>I'm a jsx component written in es6, compiled by babel thru webpack !</p>
                <p>this is configured on the files webpack config & <b>.babelrc</b> </p>
            </div>

ReactDOM.render(jsx,document.getElementById('app'));