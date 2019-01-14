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

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleLabelChange(e) {
        this.setState({label: e.target.value});
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
                    <strong className="handle">{this.state.name}</strong>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input is-small" type="text" placeholder="" value={this.state.name}
                              onChange={this.handleNameChange}/>
                    </div>
                    </div>
                    <div className="field">
                        <label className="label">Label</label>
                        <div className="control">
                            <input className="input is-small" type="text" placeholder="" value={this.state.label}
                                onChange={this.handleLabelChange}/>
                    </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <Msg msg={this.state.msg} language={this.state.language} />
                    </div>
                    <Next nextOptions={this.state.next}/>
                </div>
            </Draggable>
        )
    }
}

export default Screen;