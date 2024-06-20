import { resolve } from 'path';

export const mode = 'development';
export const entry = './src/index.js';
export const output = {
    filename: 'root-config.js',
    path: resolve(__dirname, 'dist'),
    publicPath: 'dist/',
};
export const devServer = {
    contentBase: './',
    historyApiFallback: true,
    port: 3000, // Or any port you prefer
};
