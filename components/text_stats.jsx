var React = require('react');

var TextStats = React.createClass({

  getInitialState: function() {
    return {
      style: {
        fontFamily: '',
        fontSize:   '0',
        maxWidth:   '0px'
      },
      width: '0px',
      text: ''
    };
  },

  onChange: function(event) {
    var style = this.state.style,
      name = event.target.name,
      value = event.target.value;

    if (name === 'font-family') style.fontFamily = value;
    if (name === 'size-input')  style.fontSize = value;
    if (name === 'width-input') style.maxWidth = value;
    if (name === 'text-input') this.setState({text: value});

    this.setState({style: style}, function(){
      var textDisplay = React.findDOMNode(this.refs.textDisplay);
      this.setState({width: textDisplay.offsetWidth + 'px'});
    });


  },

  render: function() {
    var fonts = this.props.fonts || [];
    var fontsList = fonts.map(function(fontName){
      return <option value={fontName}>{fontName}</option>;
    });

    var fontsSelector = <select name='font-family' onChange={this.onChange}>{fontsList}</select>
    var sizeInput     = <input name="size-input" type="text" onChange={this.onChange} />;
    var widthInput    = <input name="width-input" type="text" onChange={this.onChange} />;
    var textInput     = <textarea name="text-input" onChange={this.onChange} />;
    var textDisplay   = <div style={this.state.style}><span ref="textDisplay">{this.state.text}</span></div>;

    var calculatedWidth = this.state.width;
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
        {textDisplay}

      </form>
    );
  }

});

module.exports = TextStats;
