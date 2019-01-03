import React, {Component} from "react";
import Draggable from 'react-draggable';
import PropTypes from "prop-types";

import Next from "./Next";
import Msg from "./Msg"

class Screen extends Component{

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

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.language!==prevState.language){
            return {language : nextProps.language};
        }else return null;
    }

    handleNameChange(e) {
        this.setState({screenName: e.target.value});
    }

    handleLabelChange(e) {
        this.setState({screenLabel: e.target.value});
    }


    render(){
        return (
            <Draggable
                axis="both"
                handle=".handle"
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
                            <input className="input is-small" type="text" placeholder="" value={this.state.screenName}
                              onChange={this.handleNameChange}/>
                    </div>
                    </div>
                    <div className="field">
                        <label className="label">Label</label>
                        <div className="control">
                            <input className="input is-small" type="text" placeholder="" value={this.state.screenLabel}
                                onChange={this.handleLabelChange}/>
                    </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <Msg msg={this.state.screenMsg} language={this.state.language} />
                    </div>
                    <Next nextOptions={this.state.screenNext}/>
                </div>
            </Draggable>
        )
    }
}

export default Screen;