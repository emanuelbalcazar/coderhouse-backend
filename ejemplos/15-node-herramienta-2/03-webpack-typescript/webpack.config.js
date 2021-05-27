const path = require('path');

module.exports = {
    // modo de construccion
    mode: 'production',
    // archivo de entrada
    entry: './src/index.ts',
    // objetivo
    target: "node",
    // directorio de salida
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    // como se resuelven los modulos
    resolve: {
        extensions: ['.ts', '.js']
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};