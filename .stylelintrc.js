/*
 * @Author: kingford
 * @Date: 2021-06-14 22:23:09
 * @LastEditTime: 2021-06-14 22:23:25
 */
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'color-no-invalid-hex': true,
    'rule-empty-line-before': null,
    'color-hex-length': 'long',
    'color-hex-case': 'lower',
    'unit-whitelist': ['em', 'rem', '%', 's', 'px'],
    'declaration-colon-newline-after': null,
  },
}
