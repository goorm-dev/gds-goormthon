const path = require('path');
// jsconfig.json 도 함께 수정할 것
module.exports = {
	_components: path.resolve(__dirname, '../src/components/'),
	_hooks: path.resolve(__dirname, '../src/hooks/'),
	_constants: path.resolve(__dirname, '../src/constants/'),
	_utils: path.resolve(__dirname, '../src/utils/'),
	'_libs/reactstrap': path.resolve(__dirname, '../src/libs/reactstrap/'),
};
