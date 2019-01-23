import React, {Component} from "react";
import { connect } from 'react-redux';
import Form from "./Form";
import { getData } from "./actions"
import Popup from 'reactjs-popup'



class Nav extends Component{

    state = {
        partner: "hubtel-gh",
        product: "survey",
        populated: false

    }

    handlePartnerChange = (e) => {
        this.setState({partner: e.target.value})
    }

    handleProductChange = (e) =>  {
        this.setState({product: e.target.value})
    }

    handlePopulatedChange = (e) => {
        this.setState({populated: e.target.checked})
    }

    handleOnClick = (e) => {
        this.props.getData(this.state);
    }

    exportJourney(){
        var journey = localStorage.getItem("journey")
        return journey
    }

    componentDidMount() {
        this.props.getData(this.state);
    }
    

    render() {
        return (
            <div className="section">
            <nav className="navbar is-primary"  aria-label="main navigation">
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
                                <input type="checkbox" defaultValue="" onChange={this.handlePopulatedChange}/>
                                Populated?
                            </label>
                        </div>
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-link" onClick={this.handleOnClick}>
                                    <strong>Fetch</strong>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Popup trigger={<button className="button is-link">Export</button>} modal closeOnDocumentClick>
                                    <div className="box"><pre>{this.exportJourney()}</pre></div>
                                </Popup>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
                <Form />
            </div>
            
        )
        
    }

}

export default connect(
    NaN,
    { getData }
  )(Nav);

