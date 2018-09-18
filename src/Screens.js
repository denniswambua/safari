import React, {Component} from "react";
import Draggable from 'react-draggable';

import Next from "./Next";

class Screen extends Component{

    // static propTypes = {
    //     screen: PropTypes.object.isRequired
    // }

    state = {
        screenName: "InvalidYear",
        screenLabel: "Invalid Year",
        screenMsg: "Invalid year\nReply 1 to continue",
        screenNext: {
            "1": "Continue",
            "2": "Back"
        }
    };


    render(){
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
                    <strong className="handle">Screen</strong>
                    <div className="field">
                        <label className="label">Screen Label</label>
                        <div className="control">
                            <input className="input is-small" type="text" placeholder="" value={this.state.screenLabel}/>
                    </div>
                    </div>
                    <div className="field">
                        <label className="label">Screen Name</label>
                        <div className="control">
                            <input className="input is-small" type="text" placeholder="" value={this.state.screenName}/>
                    </div>
                    </div>
                    <div className="field">
                        <label className="label">Screen Message</label>
                        <div className="control">
                            <textarea className="textarea is-small" type="text" placeholder="" value={this.state.screenMsg}/>
                    </div>
                    </div>
                    <Next nextOptions={this.state.screenNext}/>
                </div>
            </Draggable>
        )
    }
}

export default Screen;