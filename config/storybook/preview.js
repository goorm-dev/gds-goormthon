import React from 'react';
import { themes } from '@storybook/theming';

import { DocsContainer } from '@storybook/addon-docs';

export const parameters = {
	docs: {
		container: ({ children, context }) => {
			return (
				<DocsContainer
					context={{
						...context,
						parameters: {
							...context?.parameters,
							docs: {
								theme: themes.normal,
							},
						},
					}}
				>
					{children}
				</DocsContainer>
			);
		},
	},
	options: {
		storySort: {
			order: [
				'README',
				'CHANGELOG',

				'foundations',
				['Colors', 'Icons'],

				'layout',
				'components',
				'components-docs-only',
			],
		},
	},
	previewTabs: {
		canvas: {
			hidden: true,
		},
	},
};

export const decorators = [
	(Story) => {
		console.log(themes);
		return <Story />;
	},
];
