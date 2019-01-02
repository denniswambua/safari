import React, {Component} from "react";
import PropTypes from "prop-types";
import Screen from "./Screen";

class Screens extends Component{
      
    static propTypes = {
        screens: PropTypes.object.isRequired,
        language: PropTypes.string.isRequired
    }

    state ={
        language: this.props.language
    };


    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.language!==prevState.language){
            return {language : nextProps.language};
        }else return null;
    }

    generateComponent(screens){
        let items = [];
        for (var sc in screens) {
            if (screens.hasOwnProperty(sc)) {
                items.push(<Screen key={sc} name={sc} screen={screens[sc]} language={this.state.language}/>);
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