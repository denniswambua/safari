import React, { Component } from "react";
import PropTypes from "prop-types";

class DataProvider extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };
  state = {
      data: [],
      loaded: false,
      placeholder: "Loading..."
    };
  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return {
          "initial_screen": "test",
          "languages": ["en", "sw"],
          "screens": {
            "AboutRepaymentFullCollection": {
              "label": "Loan About Repayment Full Collection",
              "msg": {
                "en": "If your loan is overdue, we may auto deduct money from your Tigo Pesa account to repay your loan, either on a specific date or when you do a deposit.\n0. Back",
                "sw": "Kama marejesho yatachelewa, tunaweza kukata pesa kwenye akaunti yako ya Tigo Pesa kurejesha mkopo, katika tarehe maalum au ukiweka pesa.\n0. Rudi"
              },
              "next": {
                "0": "AboutMenu"
              }
            },
            "AboutBiggerLoan": {
              "label": "Loan About Bigger Loan",
              "msg": "Pay your {product_name} loan on time, everytime and keep using your {mm_platform} account and you may qualify for bigger loans in future.\n0. Back",
              "next": {
                "0": "AboutMenu"
              }
            },
          }};
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }
  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? this.props.render(data) : <p>{placeholder}</p>;
  }
}
export default DataProvider;