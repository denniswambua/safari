import React, {Component} from "react";
import PropTypes from "prop-types";
import Screen from "./Screen";

class Screens extends Component{
    constructor(props) {
        super(props);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
      }
      
    static propTypes = {
        screens: PropTypes.object.isRequired,
        language: PropTypes.string.isRequired
    }

    state ={
        language: this.props.language
    };

    handleLanguageChange(e) {
        this.setState({language: e.target.value});
    }

    generateComponent(screens){
        let items = [];
        for (var sc in screens) {
            if (screens.hasOwnProperty(sc)) {
                items.push(<Screen name={sc} screen={screens[sc]} language={this.state.language}
                    handleLanguageChange={this.handleLanguageChange.bind(this)}/>);
            }
        }
        return items;
    }

    render(){
        const screens = this.props.screens
        return this.generateComponent(screens)
    }
}

export default Screens