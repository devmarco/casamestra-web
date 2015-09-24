const React     = require('react/addons');
const Search    = React.createFactory(require('./../../client/app/search/components/search'));
const reactRender = React.renderToString(Search({data: []}));

const components = {
	search: {
		get: data => {
			return reactRender;
		},
	},
};

module.exports = components;
