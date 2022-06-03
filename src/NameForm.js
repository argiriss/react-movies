import React from 'react';

class NameForm extends React.Component {
  state = {
    firstName: '',
    surName: '',
  };

  handleChangeFirstName = event => {
    this.setState({ firstName: event.target.value });
  };
  handleChangeSurName = event => {
    this.setState({ surName: event.target.value });
  };

  handleSubmit = event => {
    alert(`A firstName was submitted: ${this.state.firstName}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChangeFirstName} />
        </label>
        <label>
          Surname:
          <input type="text" name="surName" value={this.state.surName} onChange={this.handleChangeSurName} />
        </label>
        <button type="button" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default NameForm;
