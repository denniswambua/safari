import React, {Component} from "react";
import PropTypes from "prop-types";

class NextOptions extends Component{
    static propTypes = {
        nextOptions: PropTypes.object.isRequired
    }

    state = {
        nextOptions: this.props.nextOptions
    }

    generateContent(input, screen){
        return (
            <div className="columns" key={input + screen}>
                <div className="column">
                    <div className="control">
                        <input className="input is-small" type="text" placeholder="" value={input}
                            onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="column">
                    <div className="control">
                        <input className="input is-small" type="text" placeholder="" value={screen}
                            onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        )
    }

    handleChange = (e) => {
        //this.setState({nextOptions: e.target.value});
    }

    generateComponent(nextOptions){
        
        let items = [];    
        for (var prop in nextOptions) {
            if (nextOptions.hasOwnProperty(prop)){
                items.push(this.generateContent(prop, nextOptions[prop])); 
            }
        }
        return items;
    }

    render(){
        const nextOptions = this.state.nextOptions 
        if(Object.keys(nextOptions).length === 0 && nextOptions.constructor === Object){
            return <p>Quit Screen</p>          
        }else{ 
            return this.generateComponent(nextOptions)
    
  ;
        }
    }
}

export default NextOptions