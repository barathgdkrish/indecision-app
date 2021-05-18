let show = false;
const toggle = () =>{
    show = !show;
    render();
}
render();
function render(){
    var templateVisibility =( 
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle} >{show? 'hide details':'show details'}</button>
            {show && <p>These are the details.</p>}
        </div>
    );
    ReactDOM.render(templateVisibility,document.getElementById('app'));
}
