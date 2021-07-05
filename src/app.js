const App = {
  subtitle: 'Put your life in the hands of a computer',
  options: ['one','two'],
  getOptions(){}
};
let count =0;
const user = {
    name: "Barath G D Krishnan",
    age: 27,
    location: "Chennai, TN, India"
};
var templateTwo =( 
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
// const onFormSubmit = (e) =>{};
var appRoot = document.getElementById('app');
const renderForm = () =>{
  var template = (
    <div>
      <h1>Indecision App</h1>
      {App.subtitle && <p>{App.subtitle}</p>}
      {App.options.length>0 ? 
      <div>
        <p>Here are your options</p>
        <button onClick={()=>{
          alert(App.options[Math.floor(Math.random()*App.options.length)]);          
          renderForm();
        }} name='resetAll'>What should I do</button>
        <button onClick={()=>{
          count = 0;
          App.options = [];
          renderForm();
        }} name='resetAll'>Reset All</button>
          <ol>
            {App.options.map((option) => <li key={App.options.indexOf(option)}>{option}</li>)}
          </ol>
      </div>:<p>No options</p>}
      <form onSubmit = {(e)=>{
        e.preventDefault();
        const option = e.target.elements.option.value;
        if(option){
          count++;
          App.options.push(option);
          e.target.elements.option.value = null;
        }
        renderForm();
      }}>
        <input type='text' name='option'/>
        <button>Add options</button>
        
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}
renderForm();