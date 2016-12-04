/*
 * This file is part of the ZombieBox package.
 *
 * Copyright (c) 2011-2016, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
goog.provide('zb.device.platforms.pc.Device');
goog.require('zb.device.Device');
goog.require('zb.device.IDevice');
goog.require('zb.device.platforms.common.HTML5Video');
goog.require('zb.device.platforms.common.LocalStorage');
goog.require('zb.device.platforms.pc.Info');
goog.require('zb.device.platforms.pc.Input');



/**
 * @implements {zb.device.IDevice}
 */
zb.device.platforms.pc.Device = class extends zb.device.Device {
	/**
	 * @param {HTMLElement} videoContainer
	 */
	constructor(videoContainer) {
		super();


		/**
		 * @type {HTMLElement}
		 * @protected
		 */
		this._videoContainer = videoContainer;


		/**
		 * @type {zb.device.platforms.pc.Info}
		 */
		this.info;


		/**
		 * @type {zb.device.platforms.common.LocalStorage}
		 */
		this.storage;


		/**
		 * @type {zb.device.platforms.pc.Input}
		 */
		this.input;
	}

	/**
	 * @override
	 */
	init() {
		this.info = new zb.device.platforms.pc.Info();
		this.input = new zb.device.platforms.pc.Input();
		this.storage = new zb.device.platforms.common.LocalStorage();
		this._fireEvent(this.EVENT_READY);
	}

	/**
	 * @override
	 */
	createVideo() {
		return new zb.device.platforms.common.HTML5Video(this._videoContainer);
	}

	/**
	 * @override
	 */
	hasOSDAlphaBlendingFeature() {
		return true;
	}

	/**
	 * @override
	 */
	getMAC() {
		return '1f:ac:ed:1f:ac:ed';
	}

	/**
	 * @override
	 */
	getIP() {
		return '127.0.0.1';
	}

	/**
	 * @return {boolean}
	 */
	static detect() {
		return true; // Assume that PC is default platform and is called in the least time
	}
};
