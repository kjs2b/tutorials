var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Jen';
var message = 'Take me to your leader';

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
