var React = require('react'),
    TextStats = require('./text_stats.jsx');

var App = React.createClass({

  render: function() {
    return (
      <TextStats />
    );
  }

});

React.render(<App />, document.body);
