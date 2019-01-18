import React, {Component} from "react";
import PropTypes from "prop-types";

class Msg extends Component{

    static propTypes = {
        msg: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
          ]),
        language: PropTypes.string.isRequired
    }

    state = {
        language: this.props.language,
        msg: (typeof this.props.msg === "object")? this.props.msg[this.props.language]:this.props.msg
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.language!==prevState.language){
            return {
                language : nextProps.language,
                msg: (typeof nextProps.msg === "object")? nextProps.msg[nextProps.language]:nextProps.msg
            };
        }else return null;
    }
    
    handleMsgChange = (e) => {
        if(typeof this.state.msg === "object"){
            var tempMsg = {} 
            tempMsg[this.state.language] = e.target.value
            this.setState({msg: tempMsg});
        }else{
            this.setState({msg: e.target.value});
        }
    }

    render(){
        return  (
            <div className="control">
                <textarea className="textarea is-small" type="text" placeholder="" value={this.state.msg}
                    onChange={this.handleMsgChange}/>
            </div>
        )
    }
}

export default Msg