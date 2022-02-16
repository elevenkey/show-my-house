/**
 * @reference https://commitlint.js.org/#/
 */
 module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'wip', 'style', 'refactor', 'docs', 'build', 'ci', 'test', 'perf', 'chore', 'revert']]
  }
}