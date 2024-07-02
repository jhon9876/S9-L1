import { Component } from "react";

class MyFirstClass extends Component{
    
    render(){
        console.log(this)
        return (
            
            <img src={this.props.SourceImage} alt={this.props.AltText} />
        )
    }
}

export default MyFirstClass