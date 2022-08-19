module.exports = {
	addons: [
		{
			name: '@storybook/addon-docs',
			options: {
				configureJSX: true,
				babelOptions: {},
				sourceLoaderOptions: null,
				transcludeMarkdown: true,
			},
		},
		'@storybook/addon-controls',
		'@storybook/addon-actions',
		'@storybook/addon-options',
		'@storybook/addon-viewport',
		'@storybook/addon-storysource',
		'@storybook/addon-measure',
		'@storybook/addon-outline',
	],
	stories: ['../../src/stories/**/*.(js|jsx|mdx)'],
};
