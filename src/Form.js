import React, {Component} from "react";
import PropTypes from "prop-types";

import Screen from "./Screens";


class Form extends Component{

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    state ={
        initial_screen: this.props.data.initial_screen,
        languages: this.props.data.languages,
    };


    createLanguageItems(languages) {
        let items = [];         
        languages.forEach(function(lang){
            items.push(<option key={lang} value={lang}>{lang}</option>);   
        });
        return items;
    }  

    render(){
        var message = "";
        if (JSON.stringify(this.props.data) === JSON.stringify({})){
            message = <p>Nothing to show</p>
        }else{
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
                    <div className="box" ><Screen /></div>
                    
                </div>
            )
            }

        return message
    }
}

export default Form;