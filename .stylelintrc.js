/*
 * @Author: kingford
 * @Date: 2021-06-14 22:23:09
 * @LastEditTime: 2021-07-16 14:28:51
 */
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'color-no-invalid-hex': true,
    'color-hex-length': 'long',
    'color-hex-case': 'lower',
    'declaration-colon-newline-after': null,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['PingFangSC'],
      },
    ],
    'length-zero-no-unit': true,
    'rule-empty-line-before': null,
    'unit-whitelist': ['em', 'rem', '%', 's', 'px', 'deg', 'vh', 'vw'],
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
  },
};
