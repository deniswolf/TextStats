var React = require('react');

var TextStats = React.createClass({

  render: function() {
    var fonts = this.props.fonts || [];
    var fontsDom = fonts.map(function(fontName){
      return <option value={fontName}>{fontName}</option>;
    });
    var sizeInput  = <input name="size-input" type="text"/>;
    var widthInput = <input name="width-input" type="text"/>;
    var textInput  = <textarea name="text-input"/>;
    var calculatedWidth = '';
    var calculatedLines = '';

    return (
      <form>
        <select>{fontsDom}</select>
        {sizeInput}
        {widthInput}
        {textInput}
        <div id="results">
          WIDTH: {calculatedWidth}
          LINES: {calculatedLines}
        </div>
      </form>
    );
  }

});

module.exports = TextStats;
