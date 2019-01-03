import React, {Component} from "react";
import PropTypes from "prop-types";

import DataProvider from "./DataProvider";
import Form from "./Form";
import { throws } from "assert";

const hermes = "http://localhost:9300";

class Nav extends Component{

    state = {
        partner: "hubtel-gh",
        product: "survey",
    }

    handlePartnerChange = (e) => {
        this.setState({partner: e.target.value});
    }

    handleProductChange= (e) =>  {
        this.setState({product: e.target.value});
    }


    render() {
        return (
            <div className="section">
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                <div className="navbar-brand ">
                    <span className="icon is-large">
                        <i className="fas fa-home fa-2x"></i>
                    </span>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <input className="input is-rounded" type="text" placeholder="partner" defaultValue="" 
                                onBlur={this.handlePartnerChange}/>
                        </div>

                        <div className="navbar-item">
                            <input className="input is-rounded" type="text" placeholder="product" defaultValue=""
                                onBlur={this.handleProductChange}/>
                        </div>
                        <div className="navbar-item">
                            <label className="checkbox">
                                <input type="checkbox" defaultValue=""
                                    onBlur={this.handleProductChange}/>
                                Populated?
                            </label>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-link">
                                    <strong>Export</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <DataProvider endpoint={hermes} partner={this.state.partner} product={this.state.product} 
                 render={data => <Form data={data} />} />
            </div>
            
        )
        
    }

}

export default Nav;