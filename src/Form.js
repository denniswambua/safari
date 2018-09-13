import React, {Component} from "react";
import PropTypes from "prop-types";

import Screens from "./Screens";


class Form extends Component{

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    state ={
        initial_screen: "",
        languages: []
    };


    createLanguageItems(languages) {
        let items = [];         
        for (let i = 0; i <= languages.length; i++) {             
             items.push(<option key={i} value={languages[i]}>{languages[i]}</option>);   
        }
        return items;
    }  

    render(){
        var message = "";
        if (JSON.stringify(this.props.data) === JSON.stringify({})){
            message = <p>Nothing to show</p>
        }else{
            this.state.initial_screen = this.props.data.initial_screen
            this.state.languages = this.props.data.languages
            message = (
                <div>
                    <div className="field">
                        <label className="label">Initial Screen</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="" value={this.state.initial_screen}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Languages</label>
                        <div className="control">
                            <div className="select">
                                <select>{this.createLanguageItems(this.state.languages)}</select>
                            </div>
                        </div>
                    </div>
                    <h2 className="subtitle">Screens</h2>
                    <div className="box"><Screens /></div>
                    
                </div>
            )
            }

        return message
    }
}

export default Form;