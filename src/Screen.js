import React, {Component} from "react";
import Draggable from 'react-draggable';
import PropTypes from "prop-types";

import Next from "./Next";
import Msg from "./Msg"
import { throws } from "assert";

class Screen extends Component{
    constructor(props) {
        super(props);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
      }

    static propTypes = {
        screen: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired
    }

    state = {
        language: this.props.language,
        screenName: this.props.name,
        screenLabel: this.props.screen.label,
        screenMsg: this.props.screen.msg,
        screenNext: this.props.screen.next
    };

    handleLanguageChange(e) {
        this.setState({language: e.target.value});
    }


    render(){
        const lang = this.state.language
        return (
            <Draggable
                axis="x"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
                bounds="parent">
                <div className="screen is-small">
                    <strong className="handle">{this.state.screenName}</strong>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input is-small" type="text" placeholder="" value={this.state.screenName}/>
                    </div>
                    </div>
                    <div className="field">
                        <label className="label">Label</label>
                        <div className="control">
                            <input className="input is-small" type="text" placeholder="" value={this.state.screenLabel}/>
                    </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <Msg msg={this.state.screenMsg} language={this.state.language} 
                            handleLanguageChange={this.handleLanguageChange.bind(this)}/>
                    </div>
                    <Next nextOptions={this.state.screenNext}/>
                </div>
            </Draggable>
        )
    }
}

export default Screen;