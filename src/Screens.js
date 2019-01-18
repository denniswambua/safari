import React, {Component} from "react";
import PropTypes from "prop-types";
import Screen from "./Screen";
import { connect } from 'react-redux';

class Screens extends Component{

    static propTypes = {
        screens: PropTypes.object.isRequired,
        language: PropTypes.string.isRequired
    }

    generateComponent(){
        let items = [];
        var screens = this.props.screens
        for (var sc in screens) {
            if (this.props.screens.hasOwnProperty(sc)) {
                items.push(<Screen key={sc} name={sc} language={this.props.language}
                            screen={screens[sc]}/>);
            }
        }
        return items;
    }

    render(){
        return this.generateComponent()
    }
}


const mapStateToProps = state => ({
    screens: state.screens,
    language: state.language
});

  
export default connect(mapStateToProps)(Screens);