var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is from the component.'
    };
  },

  onButtonClick(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    alert(name);
  },

  render: function () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
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
