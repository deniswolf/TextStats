var React = require('react');

var TextStats = React.createClass({

  render: function() {
    var fonts = this.props.fonts || [];
    var fontsDom = fonts.map(function(fontName){
      return <option value={fontName}>{fontName}</option>;
    });

    return (
      <form>
        <select>{fontsDom}</select>
      </form>
    );
  }

});

module.exports = TextStats;
