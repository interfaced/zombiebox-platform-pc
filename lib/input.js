/*
 * This file is part of the ZombieBox package.
 *
 * Copyright (c) 2011-2016, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
goog.provide('zb.device.platforms.pc.Input');
goog.require('zb.device.IInput');
goog.require('zb.device.Input');



/**
 * @implements {zb.device.IInput}
 */
zb.device.platforms.pc.Input = class extends zb.device.Input {
	constructor() {
		super();

		const keys = zb.device.input.Keys;
		this._map[37] = keys.LEFT;
		this._map[38] = keys.UP;
		this._map[39] = keys.RIGHT;
		this._map[40] = keys.DOWN;

		this._map[48] = keys.DIGIT_0;
		this._map[49] = keys.DIGIT_1;
		this._map[50] = keys.DIGIT_2;
		this._map[51] = keys.DIGIT_3;
		this._map[52] = keys.DIGIT_4;
		this._map[53] = keys.DIGIT_5;
		this._map[54] = keys.DIGIT_6;
		this._map[55] = keys.DIGIT_7;
		this._map[56] = keys.DIGIT_8;
		this._map[57] = keys.DIGIT_9;

		this._map[19] = keys.PAUSE; // pause

		this._map[27] = keys.BACK; // esc
		this._map[13] = keys.ENTER;
		this._map[73] = keys.INFO; // i
		this._map[84] = keys.TOOLS; // t
		this._map[192] = keys.MENU; // `
		this._map[8] = keys.BACKSPACE;

		this._map[112] = keys.RED; // F1
		this._map[113] = keys.GREEN; // F2
		this._map[114] = keys.YELLOW; // F3
		this._map[115] = keys.BLUE; // F4
		this._map[116] = keys.VOLUME_DOWN; // F5
		this._map[117] = keys.VOLUME_UP; // F6
		this._map[118] = keys.MUTE; // F7

		this._map[33] = keys.PAGE_UP;
		this._map[34] = keys.PAGE_DOWN;

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
	eventToKeyCode(e) {
		if (-1 != this._serviceKeys.indexOf(e.keyCode)) {
			e.preventDefault();
		}
		return super.eventToKeyCode(e);
	}

	/**
	 * @override
	 */
	isPointingDeviceSupported() {
		return true;
	}
};
