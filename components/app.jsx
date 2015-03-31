var React = require('react'),
    TextStats = require('./text_stats.jsx');

var App = React.createClass({

  render: function() {
    return (
      <TextStats fonts={['monospace', 'sans-serif', 'serif', 'Tangerine', 'Droid Serif']}/>
    );
  }

});

React.render(<App />, document.getElementById('app'));
