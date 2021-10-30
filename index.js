/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2015-2021, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import path from 'path';
import {AbstractPlatform, utils} from 'zombiebox';


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
		return utils.resolve(import.meta.url, 'lib');
	}

	/**
	 * @override
	 */
	getConfig() {
		return {
			include: [{
				name: 'Hls.js',
				inlineScripts: [
					utils.resolveNPMModule(import.meta.url, 'hls.js').replace(/hls\.js$/, 'hls.min.js')
				],
				externs: [
					(new URL('externs/hls.js', import.meta.url)).pathname
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
export default PlatformPC;
