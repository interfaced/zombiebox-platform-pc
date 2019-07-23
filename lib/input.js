/*
 * This file is part of the ZombieBox package.
 *
 * Copyright (c) 2015-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractInput from 'zb/device/abstract-input';
import UnsupportedFeature from 'zb/device/errors/unsupported-feature';
import Keys from 'zb/device/input/keys';


/**
 */
export default class Input extends AbstractInput {
	/**
	 */
	constructor() {
		super();

		/**
		 * @type {Array<number>}
		 * @protected
		 */
		this._serviceKeys = [
			112, 113, 114, 115, 116, 117, 118
		];
	}

	/**
	 * @override
	 */
	isPointingDeviceSupported() {
		return true;
	}

	/**
	 * @override
	 */
	enablePointingDevice() {
		throw new UnsupportedFeature('Pointing device enabling');
	}

	/**
	 * @override
	 */
	disablePointingDevice() {
		throw new UnsupportedFeature('Pointing device disabling');
	}

	/**
	 * @override
	 */
	eventToKeyCode(e) {
		if (-1 !== this._serviceKeys.indexOf(e.keyCode)) {
			e.preventDefault();
		}

		return super.eventToKeyCode(e);
	}

	/**
	 * @override
	 */
	_createKeysMap() {
		const map = {};

		map[37] = Keys.LEFT;
		map[38] = Keys.UP;
		map[39] = Keys.RIGHT;
		map[40] = Keys.DOWN;

		map[48] = Keys.DIGIT_0;
		map[49] = Keys.DIGIT_1;
		map[50] = Keys.DIGIT_2;
		map[51] = Keys.DIGIT_3;
		map[52] = Keys.DIGIT_4;
		map[53] = Keys.DIGIT_5;
		map[54] = Keys.DIGIT_6;
		map[55] = Keys.DIGIT_7;
		map[56] = Keys.DIGIT_8;
		map[57] = Keys.DIGIT_9;

		map[19] = Keys.PAUSE; // "Pause"

		map[27] = Keys.BACK; // "Esc"
		map[13] = Keys.ENTER;
		map[73] = Keys.INFO; // "i"
		map[84] = Keys.TOOLS; // "t"
		map[192] = Keys.MENU; // "`"
		map[8] = Keys.BACKSPACE;

		map[112] = Keys.RED; // "F1"
		map[113] = Keys.GREEN; // "F2"
		map[114] = Keys.YELLOW; // "F3"
		map[115] = Keys.BLUE; // "F4"
		map[116] = Keys.VOLUME_DOWN; // "F5"
		map[117] = Keys.VOLUME_UP; // "F6"
		map[118] = Keys.MUTE; // "F7"

		map[33] = Keys.PAGE_UP;
		map[34] = Keys.PAGE_DOWN;

		return map;
	}
}
