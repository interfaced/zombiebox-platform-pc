/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2015-2020, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const path = require('path');
const {AbstractPlatform} = require('zombiebox');


/**
 */
class PlatformPC extends AbstractPlatform {
	/**
	 * @override
	 */
	getName() {
		return 'pc';
	}

	/**
	 * @override
	 */
	getSourcesDir() {
		return path.join(__dirname, 'lib');
	}

	/**
	 * @override
	 */
	getConfig() {
		return {
			include: [{
				name: 'Hls.js',
				inlineScripts: [
					require.resolve('hls.js').replace(/hls\.js$/, 'hls.min.js')
				],
				externs: [
					path.join(__dirname, 'externs', 'hls.js')
				]
			}]
		};
	}

	/**
	 * @override
	 */
	async buildApp(application, distDir) {
		const buildHelper = application.getBuildHelper();

		const warnings = await buildHelper.writeIndexHTML(path.join(distDir, 'index.html'));
		buildHelper.copyStaticFiles(distDir);

		return warnings;
	}

	/**
	 * @override
	 */
	async pack(application, distDir) {
		// Do nothing, index.html is good enough as PC artifact
	}
}


/**
 */
module.exports = PlatformPC;
