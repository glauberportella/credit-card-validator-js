const path = require('path');

module.exports = {
    entry: [
        './src/moip/creditcard/AmexCreditCard.ts',
        './src/moip/creditcard/Brands.ts',
        './src/moip/creditcard/DinersCreditCard.ts',
        './src/moip/creditcard/EloCreditCard.ts',
        './src/moip/creditcard/HipercardCreditCard.ts',
        './src/moip/creditcard/HiperCreditCard.ts',
        './src/moip/creditcard/MasterCreditCard.ts',
        './src/moip/creditcard/VisaCreditCard.ts',
        './src/moip/validators/CreditCard.ts'
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'credit-card-validator.js',
        path: path.resolve(__dirname, 'dist')
    }
};