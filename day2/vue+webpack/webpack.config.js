const path = require("path");
module.exports = {
    mode: "development",
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.html$/,
                use:'html-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader:"style-loader"
                    },{
                        loader:"css-loader"
                    },{
                        loader:"sass-loader"
                    }
                ],
            }
        ]
    }
}