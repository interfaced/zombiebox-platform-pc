/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2015-2021, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import StatefulHtml5Video, {StartPositionState} from 'zb/device/common/stateful-html5-video';
import {ResolutionInfoItem} from 'zb/device/resolutions';
import {State, PrepareOption, MediaType} from 'zb/device/interfaces/i-stateful-video';
import {node} from 'zb/html';


/**
 */
export default class StatefulHtml5HlsVideo extends StatefulHtml5Video {
	/**
	 * @param {ResolutionInfoItem} panelResolution
	 * @param {ResolutionInfoItem} appResolution
	 */
	constructor(panelResolution, appResolution) {
		super(panelResolution, appResolution);

		/**
		 * @type {Hls}
		 * @protected
		 */
		this._hls = null;
	}

	/**
	 * @override
	 */
	destroy() {
		if (!this._hls) {
			return super.destroy();
		}

		this._stateMachine.abortPendingTransition();
		this._stateMachine.startTransitionTo(State.DESTROYED);

		this._destroyDOM();
		this._hls.destroy();
		this._hls = null;

		this._stateMachine.setState(State.DESTROYED);
	}

	/**
	 * @override
	 */
	prepare(url, options = {}) {
		if (
			!options.hasOwnProperty(PrepareOption.TYPE) ||
			options[PrepareOption.TYPE] !== MediaType.HLS
		) {
			return super.prepare(url, options);
		}

		this._stateMachine.startTransitionTo(State.LOADING);

		// We don't actually need source element, but have to keep it not to break parent implementation
		this._sourceElement = /** @type {HTMLSourceElement} */ (node('source'));
		this._videoElement.appendChild(this._sourceElement);

		const config = {
			liveDurationInfinity: true
		};

		if (options.hasOwnProperty(PrepareOption.START_POSITION)) {
			config.startPosition = options[PrepareOption.START_POSITION] / 1000;
			this._startPositionState = StartPositionState.REQUESTED;
		}

		this._createHlsObject(config);

		this._hls.loadSource(url);

		this._stateMachine.setState(State.LOADING);
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
	_reapplyStartPosition() {
		// startPosition option seems to be working well enough
		if (this._hls) {
			return;
		}
		return super._reapplyStartPosition();
	}

	/**
	 * @param {HlsConfig} config
	 * @protected
	 */
	_createHlsObject(config) {
		this._hls = new Hls(config);
		this._hls.on(Hls.Events.ERROR, (event, data) => this._onHlsEvent(event, data));

		this._hls.attachMedia(this._videoElement);
	}

	/**
	 * @param {string} event
	 * @param {HlsEventData} data
	 * @protected
	 */
	_onHlsEvent(event, data) {
		this._fireEvent(this.EVENT_DEBUG_MESSAGE, `hls ${event}`);

		switch (event) {
			case Hls.Events.ERROR:
				this._onHlsError(data);
				break;
		}
	}

	/**
	 * @param {HlsEventData} errorObject
	 * @protected
	 */
	_onHlsError(errorObject) {
		const message = [
			'HLS error:',
			errorObject.type,
			errorObject.details,
			errorObject.reason
		].filter(Boolean).join(' ');

		if (errorObject.fatal) {
			this._onError(new Error(message));
		} else {
			this._fireEvent(this.EVENT_DEBUG_MESSAGE, `Non-fatal ${message}`);
		}
	}
}
