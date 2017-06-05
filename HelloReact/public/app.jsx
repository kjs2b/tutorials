var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value
    var message = this.refs.message.value
    var updates = {};

    if(name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if(message.length > 0) {
      this.refs.message.value = '';
      updates.message = message
    }
    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref='name' placeholder='Enter name' />
        <br/>
        <textarea ref='message' placeholder='Enter message' />
        <br/>
        <button>Submit</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is from the component.'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },

  render: function () {
    return (
      <div>
        <GreeterMessage name={this.state.name} message={this.state.message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = 'Kevin';
var message = 'Take me to your leader';

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
