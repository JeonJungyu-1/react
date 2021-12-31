const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client', './WordRelay.jsx'], // WorldRelay.jsx는 생략가능/client.jsx에서 불러왔기 때문에.
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/, 
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), // __dirname:현재폴더경로
        filename: 'app.js'
    }, //출력
};