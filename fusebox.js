const {
	FuseBox,
    EnvPlugin,
    // CopyPlugin,
    BabelPlugin,
    QuantumPlugin,
    WebIndexPlugin,
    // SVGPlugin,
    // CSSPlugin,
    // CSSModules,
    // SassPlugin,
    /*
		** Sparky is a Task-Runner like Gulp
		http://fuse-box.org/page/sparky#sparky
    */
    Sparky
} = require('fuse-box');
const argv = require('yargs').argv;
const isProduction = argv.variant === 'prod';

const fuse = new FuseBox({
	homeDir: 'tablet/js',
	output: './pepper/html/$name.js',
    cache: ! isProduction,
	plugins: [
	    BabelPlugin(),
        EnvPlugin({ NODE_ENV: isProduction ?  'production' : 'development' }),
	    WebIndexPlugin({
	    	template: './tablet/index.html'
	    }),
        isProduction && QuantumPlugin({
	        removeExportsInterop: false,
	        uglify: true
	    })
	]
});

const app = fuse
    .bundle('app')
    .target("browser")
    .instructions(`>app.js`);
// fuse.dev({
//     open : true,
// });
// ( ! isProduction ) && app.watch().hmr();

fuse.run();
