jest.dontMock('../components/text_stats.jsx');

var React = require('react/addons'),
	TextStats = require('../components/text_stats.jsx'),
	TestUtils = React.addons.TestUtils;


describe('UI', function() {

	it('has a form', function() {
		var element = TestUtils.renderIntoDocument( < TextStats /> );
		var formEl = TestUtils.scryRenderedDOMComponentsWithTag(element, 'form')[0];
		expect(formEl).toBeDefined();
	});

});

describe('Configuration', function(){
	it('accepts a list of fonts', function(){
		var element = TestUtils.renderIntoDocument( < TextStats fonts={['a','b','c']} /> );
		var fontsList = TestUtils.scryRenderedDOMComponentsWithTag(element, 'option');
		expect(fontsList.length).toEqual(3);
	});
});
