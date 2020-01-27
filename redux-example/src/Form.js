import React from "react";
import { connect } from "react-redux";
import { updateName } from "./action"; // import the action creator

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  // method called inputHandler that updates state
  // based on input
  // how does { [event.target.name]: event.target.value } work?
  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // method called formSubmitHandler to submit form
  // gets props from state (store)
  // this.state.name is the payload
  formSubmitHandler = e => {
    e.preventDefault();
    this.props.updateName(this.state.name);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputHandler}
          />
          <button type="submit">Click Here!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

// gives Form a prop named updateName
export default connect(
  mapStateToProps,
  { updateName }
)(Form);
