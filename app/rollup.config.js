import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import html2 from 'rollup-plugin-html2';
import replace from '@rollup/plugin-replace';


const production = !process.env.ROLLUP_WATCH;

const basePath = production ? '/minty' : '/'
const apiBasePath = production ? 'https://minty-importer-api.herokuapp.com' : 'http://localhost:9000'


function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function(result, key) {
    result[key] = mapFn(object[key])
    return result
  }, {})
}


const envKeys = (obj) => objectMap(obj, JSON.stringify)

export default {
	input: 'src/main.ts',
	output: {
		
		sourcemap: !production,
		format: 'iife',
		name: 'app',
		dir: 'dist'
	},
	plugins: [
		replace({
			preventAssignment: true,
			delimiters: ['process.env.', ''],
			values: envKeys({
				BASE_PATH: basePath,
				API_BASE_URL: apiBasePath,
			})
		}),
		svelte({
			preprocess: sveltePreprocess({ sourceMap: !production }),
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css', emitOnEveryBuild: true }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production
		}),

		html2({
			title: 'Minty',
			onlinePath: basePath,
			template: 'public/index.html',
			favicon: 'public/favicon.png',
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		// !production && livereload('public'),
		!production && livereload('dist'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
