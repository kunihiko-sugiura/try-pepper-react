const {
	FuseBox,
    // SVGPlugin,
    // CSSPlugin,
    // CSSModules,
    // SassPlugin,
    BabelPlugin,
    QuantumPlugin,
    WebIndexPlugin,
    /*
		** Sparky is a Task-Runner like Gulp
		http://fuse-box.org/page/sparky#sparky
    */
    Sparky
} = require('fuse-box');
const argv = require('yargs').argv;
const isProduction = argv.variant === 'prod';

process.env.NODE_ENV = isProduction ?  'production' : 'development';

const fuse = new FuseBox({
	homeDir: 'src/js',
	output: 'html/$name.js',
    // sourceMaps: false,
	// cache: ! isProduction,
	plugins: [
	    // SVGPlugin(),
	    BabelPlugin(),
        // [ ".scss", SassPlugin({ outputStyle: 'compressed' }), CSSModules(), CSSPlugin()],

        // [SassPlugin({ outputStyle: 'compressed' }), CSSPlugin({
        //     group: "bundle.css",
        //     outFile: './html/css/bundle.css'
        // })],

        // [SassPlugin({ outputStyle: 'compressed' }), CSSPlugin({
        //     group: "bundle.css",
        //     outFile: './html/css/bundle.css'
        // })],
	    WebIndexPlugin({
	    	template: './src/index.html'
	    }),
        // isProduction && QuantumPlugin({
	    //     removeExportsInterop: false,
	    //     uglify: true
	    // })
	]
});

const app = fuse
    .bundle('app')
    .target("browser")
    .shim({
        jquery: {
            source: 	"src/lib/jquery/jquery.min.js",
            exports: 	"jQuery"
        },
        // qisession: {
        //     source: 	"src/libs/qimessaging/2/qimessaging.js",
        //     exports: 	"QiSession"
        // }
    })
    .instructions(`>app.js`);

fuse.dev({
    open : true,
});

( ! isProduction ) && app.watch().hmr();

fuse.run();
