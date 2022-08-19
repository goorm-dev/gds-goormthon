const linter = (filenames) =>
	`eslint -c ./config/eslintrc.js --ext .js --ext .jsx --resolve-plugins-relative-to . ${filenames.join(
		' '
	)}`;

module.exports = {
	'src/**/*.js?(x)': linter,
};