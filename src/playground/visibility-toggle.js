class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            show : false
        }
    }

    toggle(){
        this.setState(
            (prevState)=>{
                return {
                    show : !prevState.show
                }
            }
        );
    }

    render(){

        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.show?"Show Details":"Hide Details"}</button>
                {this.state.show && <p>These are the details</p>}
            </div>
        );

    }


}


ReactDOM.render(<VisibilityToggle />,document.getElementById("app"));








// let show = false;
// const toggle = () =>{
//     show = !show;
//     render();
// }
// render();
// function render(){
//     var templateVisibility =( 
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle} >{show? 'hide details':'show details'}</button>
//             {show && <p>These are the details.</p>}
//         </div>
//     );
//     ReactDOM.render(templateVisibility,document.getElementById('app'));
// }
