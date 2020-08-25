module.exports = {
    extends: 'eslint-config-airbnb-base',
    env: {
        es6: true,
        browser: true,
        node: true,
        jasmine: true
    },
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        'import/no-unresolved': 0,
        'class-methods-use-this': 0,
        'global-require': 'warn',
        'max-len': ['warn', { 'code': 100, 'ignoreComments': true, 'ignoreRegExpLiterals': true }],
        'no-use-before-define': ['error', { 'functions': false, 'classes': true }],
        indent: [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        radix: [
            'error',
            'as-needed'
        ],
        'comma-dangle': [
            'error',
            'never'
        ],
        'eol-last': [
            'error',
            'never'
        ],
        'arrow-parens': [
            'error',
            'always'
        ],
        'no-underscore-dangle': [
            'error',
            {
                allow: [
                    '_id',
                    '_get',
                    '_set',
                    '_has',
                    '_map'
                ]
            }
        ],
        'no-param-reassign': [
            'error',
            {
                props: false
            }
        ],
        'no-return-assign': [
            'error',
            'except-parens'
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                'devDependencies': true
            }
        ],
        'prefer-destructuring': [
            'error',
            {
                'array': false,
                'object': true
            }
        ],
        'object-curly-newline': [
            'error',
            {
                'ObjectPattern': {
                    'minProperties': 6
                }
            }
        ]
    }
};