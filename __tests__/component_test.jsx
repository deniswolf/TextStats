jest.dontMock('../components/text_stats.jsx');

var React = require('react/addons'),
	TextStats = require('../components/text_stats.jsx'),
	TestUtils = React.addons.TestUtils,
	element = TestUtils.renderIntoDocument( < TextStats /> );

describe('UI', function() {

	it('has a form', function() {
		var formEl = TestUtils.scryRenderedDOMComponentsWithTag(element, 'form')[0];
		expect(formEl).toBeDefined();
	});

});
