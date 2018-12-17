import React, {Component} from "react";
import PropTypes from "prop-types";

class Msg extends Component{
    constructor(props) {
        super(props);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
      }
    static propTypes = {
        msg: PropTypes.object.isRequired,
        language: PropTypes.string.isRequired
    }

    state = {
        language: this.props.language,
        msg: (typeof this.props.msg === "object")? this.props.msg[this.props.language]:this.props.msg
    }

    handleLanguageChange(e) {
        this.setState({language: e.target.value});
        console.log(e)
    }

    render(){
        return  (
            <div className="control">
                <textarea className="textarea is-small" type="text" placeholder="" value={this.state.msg}/>
            </div>
        )
    }
}

export default Msg