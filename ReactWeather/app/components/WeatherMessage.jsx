var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    return (
      <div>
        <p>The weather is ___ in _____</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;