import React, { Component } from "react";
import PropTypes from "prop-types";
import { throws } from "assert";


const proxyurl = "http://localhost:8080/";

class DataProvider extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    partner: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };

  state = {
      data: [],
      loaded: false,
      placeholder: "Loading...",
      partner: this.props.partner,
      product: this.props.product

  };

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.partner!==prevState.partner){
        return {
            partner : nextProps.partner,
            loaded: false,
            placeholder: "Loading...",
        };
    }if (nextProps.product!==prevState.product) {
        return {
            product : nextProps.product,
            loaded: false,
            placeholder: "Loading...",
        };
    } else {
        return null;
    }
  }

  fetchData(){
    var url = proxyurl + this.props.endpoint + "/journey/" + "/" + this.state.partner + "/" + this.state.product + "?type=populated"
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json()
      })
      .then(data => {
        if (typeof data === "object"){
          this.setState({ data: data, loaded: true})
        }
      })
      .catch(() => this.setState({ placeholder: "Something went wrong" }));

  }

  componentDidMount() {
    return this.fetchData()
  }

  componentDidUpdate(){
    if (!this.state.loaded){
      return this.fetchData()
    }
    //
  }

  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? this.props.render(data) : <p>{placeholder}</p>;
  }
}
export default DataProvider;