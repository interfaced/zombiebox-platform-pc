/*
 * This file is part of the ZombieBox package.
 *
 * Copyright (c) 2015-2019, Interfaced
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
		return {};
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
}


/**
 */
module.exports = PlatformPC;
