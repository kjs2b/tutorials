var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is from the component.'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  onButtonClick(e) {
    e.preventDefault();
    var nameRef = this.refs.name;

    var name = nameRef.value;
    nameRef.value = '';

    if(typeof name === 'string' && name.length > 0) {

      this.setState({
        name: name
      });

      alert(name);
    }
  },

  render: function () {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <p>{this.props.message + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type='text' ref='name' />
          <button>Set Name</button>
        </form>
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
