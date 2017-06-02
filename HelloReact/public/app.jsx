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

    if(name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref='name' />
        <button>Set Name</button>
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
    };
  },
  handleNewName(name) {
    this.setState({ name: name });
  },

  render: function () {
    return (
      <div>
        <GreeterMessage name={this.state.name} message={this.props.message}/>
        <GreeterForm onNewName={this.handleNewName}/>
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
