import React from "react";

// connect??
import { connect } from "react-redux";

const Headline = props => {
  return <h1>Hello: {props.nombre} </h1>;
};

// create mapStateToProps, setting our props
// (which is what this function returns)
// is given state and returning an object

// nombre is a prop passed into HeadLine
// state.name is the state (value) for name
const mapStateToProps = state => {
  return { nombre: state.name };
};

// export default connect(mapStateToProps)(component)
export default connect(mapStateToProps)(Headline);
