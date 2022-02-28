const fabric = require('@umijs/fabric');

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  plugins: [...fabric.default.plugins, 'react-hooks'],
};
