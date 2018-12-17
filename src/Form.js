import React, {Component} from "react";
import PropTypes from "prop-types";

import Screens from "./Screens";


class Form extends Component{
    constructor(props) {
        super(props);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
      }

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    state ={
        initial_screen: this.props.data.initial_screen,
        screens: this.props.data.screens,
        language: this.props.data.languages[0]
    };

    handleLanguageChange(e) {
        this.setState({language: e.target.value});
    }
    

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
                                <select onChange={this.handleLanguageChange} value={this.state.language}>
                                {this.createLanguageItems(this.props.data.languages)}</select>
                            </div>
                        </div>
                    </div>
                    <h2 className="subtitle">Screens</h2>
                    <div className="box" ><Screens screens={this.state.screens} language={this.state.language}
                        handleLanguageChange={this.handleLanguageChange.bind(this)}/></div>
                    
                </div>
            )
            }

        return message
    }
}

export default Form;