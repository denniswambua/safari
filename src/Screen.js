import React, {Component} from "react";
import Draggable from 'react-draggable';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { updateScreen } from "./actions"


class Screen extends Component{

    static propTypes = {
        screen: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired
    }

    state = {
        language: this.props.language,
        name: this.props.name,
        label: this.props.screen.label,
        msg: this.props.screen.msg,
        next: this.props.screen.next
    };

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.language!==prevState.language){
            return {language : nextProps.language};
        }else return null;
    }

    generateNextContent(input, screen){
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
        
    }

    generateNextComponent(){
        if(Object.keys(this.state.next).length === 0 && this.state.next === Object){
            return <p>Quit Screen</p>          
        }else{ 
            let items = [];    
            for (var prop in this.state.next) {
                if (this.state.next.hasOwnProperty(prop)){
                    items.push(this.generateNextContent(prop, this.state.next[prop])); 
                }
            }
            return items;
        }
    }

    handleMsgChange = (e) => {
        var update_text = e.target.value;
        var temp_msg = this.state.msg;

        if (typeof this.state.msg === "object"){
            temp_msg[this.state.language] = update_text
        }else{
            temp_msg = update_text
        }
        this.setState({msg: temp_msg});
    }

    generateMsgComponent(){
        var text = (typeof this.state.msg === "object")? this.state.msg[this.state.language]:this.state.msg
        return  (
            <div className="control">
                <textarea className="textarea is-small" type="text" placeholder="" value={text}
                    onChange={this.handleMsgChange}/>
            </div>
        )
    }

    handleLabelChange = (e) => {
        this.setState({label: e.target.value});
    }

    handleUpdateScreen = (e) => {
        this.props.updateScreen(this.state);
    }


    render(){
        return (
            <Draggable
                axis="both"
                handle=".handle"
                grid={[5, 5]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
                bounds="parent">
                <div className="screen">
                    <div className="buttons is-right">
                        <a className="button is-link is-small is-outlined" onClick={this.handleUpdateScreen}>
                            <strong>Update</strong>
                        </a>
                    </div>
                    <strong className="handle">{this.state.name}</strong>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label">Label</label>
                        </div>
                        <div className="field-body">
                            <input className="input is-small" type="text" placeholder="" value={this.state.label}
                                onChange={this.handleLabelChange}/>
                    </div>
                    </div>
                    <div className="field">
                        {this.generateMsgComponent()}
                    </div>
                    <div className="field">
                        {this.generateNextComponent()}
                    </div>
                </div>
            </Draggable>
        )
    }
}

export default connect(NaN,{ updateScreen })(Screen);
