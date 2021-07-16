/*
 * @Author: kingford
 * @Date: 2021-06-14 22:23:09
 * @LastEditTime: 2021-07-16 12:46:07
 */
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'color-no-invalid-hex': true,
    'rule-empty-line-before': null,
    'color-hex-length': 'long',
    'color-hex-case': 'lower',
    'unit-whitelist': ['em', 'rem', '%', 's', 'px', 'deg', 'vh', 'vw'],
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'declaration-colon-newline-after': null,
    'at-rule-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['PingFangSC'],
      },
    ],
  },
};
