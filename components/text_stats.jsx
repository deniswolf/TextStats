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
      lines: 1,
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
      var textDisplay = React.findDOMNode(this.refs.textDisplay),
          width = textDisplay.offsetWidth + 'px',
          lines = textDisplay.getClientRects().length;
      this.setState({width: width, lines: lines});
    });


  },

  wrapWithLabel: function(label, el, inputLabel){
    var inputGroup;
    if (inputLabel){
      inputGroup = <div className="form-group">
        <label className="col-sm-2 control-label">{label}</label>
        <div className="col-sm-10">
          <div className="input-group">
            {el}
            <div className="input-group-addon">{inputLabel}</div>
          </div>
        </div>
        </div>;
    } else {
      inputGroup = <div className="form-group">
          <label className="col-sm-2 control-label">{label}</label>
          <div className="col-sm-10">{el}</div>
        </div>;

    }
    return inputGroup;
  },

  render: function() {
    var fonts = this.props.fonts || [];
    var fontsList = fonts.map(function(fontName){
      return <option value={fontName}>{fontName}</option>;
    });

    var fontsSelector = <select name='font-family' onChange={this.onChange} className="form-control">
      {fontsList}
    </select>;
    var sizeInput     = <input name="size-input"   type="number" onChange={this.onChange} className="form-control"/>;
    var widthInput    = <input name="width-input"  type="number" onChange={this.onChange} className="form-control"/>;
    var textInput     = <textarea name="text-input" onChange={this.onChange} className="form-control"/>;
    var textDisplay   = <div style={this.state.style}><span ref="textDisplay">{this.state.text}</span></div>;

    var calculatedWidth = this.state.width;
    var calculatedLines = this.state.lines;

    var className = "form-horizontal";

    return (

        <form className={className}>
          {this.wrapWithLabel('Font',fontsSelector)}
          {this.wrapWithLabel('Font size',sizeInput,'px')}
          {this.wrapWithLabel('Max width',widthInput,'px')}
          {this.wrapWithLabel('Text',textInput)}
          <div id="results">
            <p>WIDTH: {calculatedWidth}</p>
            <p>LINES: {calculatedLines}</p>
          </div>
          {textDisplay}
        </form>


    );
  }

});

module.exports = TextStats;
