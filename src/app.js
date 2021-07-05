import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.scss'
import 'normalize.css/normalize.css'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const xhr = new XMLHttpRequest();
// const url = 'http://localhost:8080/';

// xhr.open('GET', url);
// xhr.onreadystatechange = someHandler;
// xhr.send();
// axios
//     .get(
//         'http://localhost:8080/findallpersons/'
//     ).then(
//         (res) => {
//             console.log("Data value",res.data);
//         }
//     );

// class OldClass{
//     constructor(){
//         this.name = 'Barath';
//         this.oldGreeting = this.oldGreeting.bind(this);
//     }

//     oldGreeting(){
//         return `My name is ${this.name}`; 
//     }
// }

// const array = ['apple', 'orange','banana']

// const old = new OldClass();
// const getOldGreeting = old.oldGreeting;
// console.log(getOldGreeting());

// //-----------------------------------------------------

// class NewClass{
    
//     name = 'G D Krishnan';
//     newGreeting = () => {
//         return `My surname is ${this.name}`; 
//     }
// }

// const murmur = new NewClass();
// const getNewGreeting = murmur.newGreeting;
// console.log(getNewGreeting());
// //---------------------------------------------------------