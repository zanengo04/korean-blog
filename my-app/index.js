require('ignore-styles')
require('@babel/register')({
    ignore: [/(node_module)/],
    preset: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')