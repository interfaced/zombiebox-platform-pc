/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2015-2020, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractInput from 'zb/device/abstract-input';
import UnsupportedFeature from 'zb/device/errors/unsupported-feature';
import Key from 'zb/device/input/key';


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

		map[37] = Key.LEFT;
		map[38] = Key.UP;
		map[39] = Key.RIGHT;
		map[40] = Key.DOWN;

		map[48] = Key.DIGIT_0;
		map[49] = Key.DIGIT_1;
		map[50] = Key.DIGIT_2;
		map[51] = Key.DIGIT_3;
		map[52] = Key.DIGIT_4;
		map[53] = Key.DIGIT_5;
		map[54] = Key.DIGIT_6;
		map[55] = Key.DIGIT_7;
		map[56] = Key.DIGIT_8;
		map[57] = Key.DIGIT_9;

		map[19] = Key.PAUSE; // "Pause"

		map[27] = Key.BACK; // "Esc"
		map[13] = Key.ENTER;
		map[73] = Key.INFO; // "i"
		map[84] = Key.TOOLS; // "t"
		map[192] = Key.MENU; // "`"
		map[8] = Key.BACKSPACE;

		map[112] = Key.RED; // "F1"
		map[113] = Key.GREEN; // "F2"
		map[114] = Key.YELLOW; // "F3"
		map[115] = Key.BLUE; // "F4"
		map[116] = Key.VOLUME_DOWN; // "F5"
		map[117] = Key.VOLUME_UP; // "F6"
		map[118] = Key.MUTE; // "F7"

		map[33] = Key.PAGE_UP;
		map[34] = Key.PAGE_DOWN;

		return map;
	}
}
