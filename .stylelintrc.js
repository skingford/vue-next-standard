/*
 * @Author: kingford
 * @Date: 2021-06-14 22:23:09
 * @LastEditTime: 2021-08-04 16:10:03
 */
module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
        ],
      },
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'color-no-invalid-hex': true,
    'color-hex-length': 'long',
    'color-hex-case': 'lower',
    'declaration-colon-newline-after': null,
    'declaration-block-trailing-semicolon': null,
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always-single-line',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['PingFangSC'],
      },
    ],

    'length-zero-no-unit': true,
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'deep'],
      },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'unit-whitelist': ['em', 'rem', '%', 's', 'px', 'deg', 'vh', 'vw'],
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'no-empty-source': null,
    'named-grid-areas-no-invalid': null,
    'no-descending-specificity': null,
    'no-descending-specificity': null,
    'unicode-bom': 'never',
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
