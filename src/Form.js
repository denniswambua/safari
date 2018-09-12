import React from "react";
import PropTypes from "prop-types";

const Form = ({ data }) =>
JSON.stringify(data) === JSON.stringify({}) ?(
    <p>Nothing to show</p>
) : (
    <p>Something to show</p>
);

Form.PropTypes = {
    data: PropTypes.object.isRequired
};

export default Form;