import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
	isFullscreen: false,
	showNav: true,
	showPanel: true,
	panelPosition: 'bottom',
	enableShortcuts: true,
	isToolshown: true,
	selectedPanel: undefined,
	initialActive: 'sidebar',
	sidebar: {
		showRoots: true,
		collapsedRoots: ['other'],
	},
	theme,
});
