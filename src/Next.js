import React, {Component} from "react";
import PropTypes from "prop-types";

class nextOptions extends Component{
    static propTypes = {
        nextOptions: PropTypes.object.isRequired
    }

    generateContent(input, screen){
        return (
            <div className="columns">
                <div className="column">
                    <div className="control">
                        <input className="input is-small" type="text" placeholder="" value={input}/>
                    </div>
                </div>
                <div className="column">
                    <div className="control">
                        <input className="input is-small" type="text" placeholder="" value={screen}/>
                    </div>
                </div>
            </div>
        )
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
        const nextOptions = this.props.nextOptions 
        if(Object.keys(nextOptions).length === 0 && nextOptions.constructor === Object){
            return <p>Quit Screen</p>          
        }else{ 
            return this.generateComponent(nextOptions)
    
  ;
        }
    }
}

export default nextOptions