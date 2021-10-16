const path = require('path')
const withSass = require('@zeit/next-sass');

const withTM = require("next-transpile-modules")([
    "three",
    "react-three-fiber",
    "drei",
]);

module.exports = withTM({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: {
            loader: "file-loader",
            },
        });
    
        return config;
    },
});

module.exports = withSass({
    /* bydefault config  option Read For More Optios
    here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
    cssModules: true
});

module.exports = {
/* Add Your Scss File Folder Path Here */
    sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
};