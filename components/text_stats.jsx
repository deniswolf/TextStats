var React = require('react');

var TextStats = React.createClass({
  onChange: function(event) {
      console.log(event.target.value);
    },
  render: function() {
    var fonts = this.props.fonts || [];
    var fontsList = fonts.map(function(fontName){
      return <option value={fontName}>{fontName}</option>;
    });

    var fontsSelector = <select onChange={this.onChange}>{fontsList}</select>
    var sizeInput  = <input name="size-input" type="text" onChange={this.onChange} />;
    var widthInput = <input name="width-input" type="text" onChange={this.onChange} />;
    var textInput  = <textarea name="text-input" onChange={this.onChange} />;

    var calculatedWidth = '';
    var calculatedLines = '';

    return (
      <form>
        {fontsSelector}
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
