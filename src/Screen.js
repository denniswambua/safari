import React, {Component} from "react";
import Draggable from 'react-draggable';
import PropTypes from "prop-types";


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

export default Screen;