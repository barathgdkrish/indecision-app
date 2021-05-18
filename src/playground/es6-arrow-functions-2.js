import '/playground/myCss.css';
const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy); 
    }    

};
let count = 0;
var appRoot = document.getElementById('app');
function renderCounterApp(){  
    var template =( 
        <div>
        <h1>This is a counter: {count}</h1>
        <button onClick={()=>{++count;renderCounterApp();console.log('+1, Count: ',count);}}>+1</button>
        <button onClick={()=>{--count;renderCounterApp();console.log('-1, Count: ',count);}}>-1</button>
        <button onClick={()=>{count = 0;renderCounterApp();console.log('Count:',count);}}>reset</button>
        </div>
    );
  ReactDOM.render(template, appRoot);
}
renderCounterApp();
