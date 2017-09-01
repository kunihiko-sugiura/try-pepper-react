const {
	FuseBox,
    SVGPlugin,
    CSSPlugin,
    CSSModules,
    SassPlugin,
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

const fuse = FuseBox.init({
	homeDir: 'src/js',
	output: 'html/$name.js',
    // sourceMaps: ! isProduction,
    sourceMaps: false,
	cache: ! isProduction,
	plugins: [
	    SVGPlugin(),
	    // CSSPlugin(),
	    BabelPlugin(),
        // [SassPlugin(), CSSModules({ outputStyle: 'compressed' }), CSSPlugin()],

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
	    isProduction && QuantumPlugin({
	        removeExportsInterop: false,
	        uglify: true
	    })
	]
});


const app = fuse.bundle('app')
    .shim({
        jquery: {
            source: 	"html/lib/jquery/jquery.min.js",
            exports: 	"jQuery"
        },
        qisession: {
            source: 	"html/libs/qimessaging/2/qimessaging.js",
            exports: 	"QiSession"
        }
    })
    .instructions(`>index.js`);

(! isProduction) && app.watch().hmr();

// ** Dev Server
fuse.dev();

fuse.run();

