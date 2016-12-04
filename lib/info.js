/*
 * This file is part of the ZombieBox package.
 *
 * Copyright (c) 2011-2016, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
goog.provide('zb.device.platforms.pc.Info');
goog.require('zb.device.IInfo');
goog.require('zb.device.Info');



/**
 * @implements {zb.device.IInfo}
 */
zb.device.platforms.pc.Info = class extends zb.device.Info {
	/**
	 * @override
	 */
	type() {
		return 'pc';
	}
};
