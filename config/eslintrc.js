const alias = require('./alias.js');

module.exports = {
	ignorePatterns: [
		'src/static/**',
		'src/stories/reactstrap/**',
		'src/libs/**',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
	},
	env: {
		browser: true,
	},
	extends: ['eslint:recommended', 'airbnb', 'prettier', 'prettier/react'],
	plugins: ['react', 'import', 'prettier'],
	settings: {
		'import/resolver': {
			'babel-module': {
				alias,
			},
		},
	},
	rules: {
		'react/jsx-props-no-spreading': 0,
		'react/require-default-props': 0,
		'react/forbid-prop-types': [2, { forbid: ['any'] }],
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'consistent-return': 0,
		// only storybook
		'import/no-extraneous-dependencies': [0, 'naver'],
	},
};
