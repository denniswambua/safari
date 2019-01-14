import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { changeLanguage } from "./actions";

import Screens from "./Screens";


class Form extends Component{

    static propTypes = {
        initial_screen: PropTypes.string.isRequired,
        languages: PropTypes.array.isRequired,
        partner: PropTypes.string.isRequired,
        product: PropTypes.string.isRequired
    }


    handleLanguageChange = (e) =>  {
        this.props.changeLanguage({ "language": e.target.value });
    }

    handleInitialScreenChange = (e) => {
        // this.setState({initial_screen: e.target.value});
    }

    handlePartnerChange = (e) => {
        // this.setState({partner: e.target.value});
    }

    handleProductChange = (e) => {
        // this.setState({product: e.target.value});
    }
    

    createLanguageItems() {
        let items = [];         
        this.props.languages.forEach(function(lang){
            items.push(<option key={lang} value={lang}>{lang}</option>);   
        });
        return items;
    }  

    render(){
        var message = "";
        if (JSON.stringify(this.props.partner) === JSON.stringify({})){
            message = <p>Nothing to show</p>
        }else{
            message = (
                <div className="container">
                    <div className="field">
                        <label className="label">Initial Screen</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="" value={this.props.initial_screen}
                            onChange={this.handleInitialScreenChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Partner</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="" value={this.props.partner}
                            onChange={this.handlePartnerChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Product</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="" value={this.props.product}
                            onChange={this.handleProductChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Languages</label>
                        <div className="control">
                            <div className="select">
                                <select onChange={this.handleLanguageChange}>
                                {this.createLanguageItems()}</select>
                            </div>
                        </div>
                    </div>
                    <h2 className="subtitle">Screens</h2>
                    <div className="box" >
                        <Screens />
                    </div>
                    
                </div>
            )
            }

        return message
    }
}

const mapStateToProps = state => ({
    partner: state.partner,
    product: state.product,
    initial_screen: state.initial_screen,
    languages: state.languages
});

function mapDispatchToProps(dispatch) {
    return {
      changeLanguage: payload => dispatch(changeLanguage(payload))
    };
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Form);