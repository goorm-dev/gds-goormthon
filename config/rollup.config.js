import alias from '@rollup/plugin-alias';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import summary from 'rollup-plugin-summary';
import json from '@rollup/plugin-json';

const globby = require('globby');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');

const pkg = require('../package.json');
const aliasConf = require('./alias.js');

const extensions = ['.js', '.jsx'];

const input = {
	index: 'src/index.js',
};
(() => {
	const paths = globby.sync(['src/components/**/index.jsx']);
	paths.forEach((path) => {
		const pathSplited = path.split('/');
		const key =
			pathSplited[2] === 'icons' || pathSplited[2] === 'iconsExtension'
				? pathSplited[3]
				: pathSplited[2];
		input[key] = path;
	});
})();

const plugins = [
	peerDepsExternal(),
	nodeResolve({ extensions }),
	alias({
		resolve: extensions,
		entries: Object.keys(aliasConf).map((key) => ({
			find: key,
			replacement: aliasConf[key],
		})),
	}),
	json(),
	postcss({
		extensions: ['.scss', '.css'],
		plugins: [
			postcssFlexbugsFixes,
			postcssPresetEnv({
				autoprefixer: {
					flexbox: 'no-2009',
				},
			}),
		],
		extract: pkg.style,
		modules: {
			generateScopedName: '[hash:base64]',
		},
		minimize: true,
	}),
	commonjs({ include: 'node_modules/**' }),
	babel({
		babelHelpers: 'runtime',
		babelrc: false,
		presets: ['@babel/preset-env', '@babel/preset-react'],
		plugins: ['@babel/plugin-transform-runtime'],
		exclude: 'node_modules/**',
	}),
	terser(),
	summary(),
];

const config = [
	// new lib
	...['es', 'cjs'].map((format) => {
		return {
			input: 'src/index.new.js',
			output: [
				{
					dir: format,
					format,
					preserveModules: true,
					exports: format === 'cjs' ? 'named' : 'auto',
				},
			],
			external: [/@babel\/runtime/],
			plugins,
		};
	}),
];

export default config;
