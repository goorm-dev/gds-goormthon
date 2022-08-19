const path = require('path');

const alias = require('../alias.js');

module.exports = async ({ config, mode }) => {
	config.resolve.alias = {
		...config.resolve.alias,
		...alias,
	};

	config.module.rules[0].use[0].options.plugins.push(
		'@babel/plugin-transform-modules-commonjs',
	);

	config.module.rules.push({
		test: /stories\/.*\.(jsx|js)$/,
		loaders: [require.resolve('@storybook/source-loader')],
		enforce: 'pre',
	});

	config.module.rules.push({
		test: /\.scss$/,
		use: [
			'style-loader',
			{ loader: 'css-loader', options: { modules: true } },
			'sass-loader',
		],
	});

	config.module.rules.push({
		test: /\.(png|jpg|gif|svg)$/,
		use: [
			{
				loader: 'url-loader',
				options: {
					limit: 10240,
				},
			},
		],
	});

	return config;
};
