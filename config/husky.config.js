module.exports = {
	hooks: {
		'pre-commit':
			'lint-staged --no-stash -c ./config/lint-staged.config.js',
	},
};
