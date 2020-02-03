/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2015-2020, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import HTML5Video from 'zb/device/common/HTML5-video';
import {State} from 'zb/device/interfaces/i-video';
import Rect from 'zb/geometry/rect';


/**
 */
export default class Html5HlsVideo extends HTML5Video {
	/**
	 * @param {Rect} rect
	 */
	constructor(rect) {
		super(rect);

		/**
		 * @type {?Hls}
		 * @protected
		 */
		this._hls = null;

		this._onHlsEventBound = this._onHlsEvent.bind(this);
	}

	/**
	 * @override
	 */
	play(url, startFrom) {
		if (!url.endsWith('.m3u8')) {
			return super.play(url, startFrom);
		}

		this._startTime = startFrom || NaN;
		this._initVideoObject(url);

		this._setState(State.LOADING);

		this._hls.loadSource(url);
	}

	/**
	 * @override
	 */
	getUrl() {
		if (this._hls) {
			return this._hls.url;
		}
		return super.getUrl();
	}

	/**
	 * @override
	 */
	destroy() {
		if (this._hls) {
			this._hls.destroy();
			this._hls = null;
		}

		super.destroy();
	}

	/**
	 * @override
	 */
	_initVideoObject(url) {
		if (!url.endsWith('.m3u8')) {
			return super._initVideoObject(url);
		}

		this._removeVideoObject();

		this._video = this._createVideoObject();

		this._hls = new Hls();
		this._hls.attachMedia(this._video);

		this._container.appendChild(this._video);
		this._viewport.setVideoObject(this._video);

		this._initEvents();
	}

	/**
	 * @override
	 */
	_removeVideoObject() {
		super._removeVideoObject();

		if (this._hls) {
			this._hls.destroy();
			this._hls = null;
		}
	}

	/**
	 * @override
	 */
	_initEvents() {
		if (this._hls) {
			Object.values(HlsEvent).forEach((eventName) => this._hls.on(eventName, this._onHlsEventBound));
		}
		super._initEvents();
	}

	/**
	 * @override
	 */
	_destroyEvents() {
		if (this._hls) {
			Object.values(HlsEvent).forEach((eventName) => this._hls.off(eventName, this._onHlsEventBound));
		}
		super._destroyEvents();
	}

	/**
	 * @param {string} event
	 * @param {HlsEventData} data
	 * @protected
	 */
	_onHlsEvent(event, data) {
		switch (event) {
			case HlsEvent.MANIFEST_PARSED:
				this._video.play();
				break;
			case HlsEvent.ERROR:
				this._onHlsError(data);
				break;
		}
	}

	/**
	 * @param {HlsEventData} errorObject
	 * @protected
	 */
	_onHlsError(errorObject) {
		if (!errorObject.fatal) {
			return;
		}

		const message = [
			'HLS error:',
			errorObject.type,
			errorObject.details,
			errorObject.reason
		].filter(Boolean).join(' ');

		this._fireError(message);
	}
}


/**
 * @enum {string}
 */
const HlsEvent = {
	MANIFEST_PARSED: Hls.Events.MANIFEST_PARSED,
	ERROR: Hls.Events.ERROR
};
