//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        main: './app/entry.js',
        todo: './app/todo-list/todo-list.js',
        reducer: './app/reducer/reducer.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components', 'app'],
        plugins: [
            //new CommonsChunkPlugin("commons.chunk.js")
        ]
    }
};