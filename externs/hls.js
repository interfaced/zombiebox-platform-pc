/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2015-2020, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// Minimal necessary subset of Hls.js API externs
// See https://github.com/video-dev/hls.js/blob/master/docs/API.md
// Hls.js version: 0.13.1

/**
 */
var Hls = class { // var is intentional to declare it as global object property
	/**
	 * @param {HlsConfig=} config
	 */
	constructor(config) {
		/**
		 * @type {HTMLVideoElement|undefined}
		 */
		this.media;

		/**
		 * @type {string}
		 */
		this.url;
	}

	/**
	 * @param {HTMLVideoElement} element
	 */
	attachMedia(element) {}

	/**
	 */
	detachMedia() {}

	/**
	 * @param {string} url
	 */
	loadSource(url) {}

	/**
	 */
	destroy() {}

	/**
	 * @param {number} startPosition
	 */
	startLoad(startPosition) {}

	/**
	 */
	stopLoad() {}

	/**
	 * @param {string} event
	 * @param {function(string, HlsEventData)} callback
	 */
	on(event, callback) {}

	/**
	 * @param {string} event
	 * @param {function(string, HlsEventData)} callback
	 */
	off(event, callback) {}

	/**
	 * @param {string} event
	 * @param {function(string, HlsEventData)} callback
	 */
	once(event, callback) {}

	/**
	 * @return {boolean}
	 */
	static isSupported() {}
};


/**
 * @typedef {{
 *     startPosition: (number|undefined),
 *     liveDurationInfinity: (boolean|undefined)
 * }}
 */
let HlsConfig;

/**
 * @typedef {{
 *     type: string,
 *     details: string,
 *     fatal: boolean,
 * }}
 */
let HlsEventData;

// Actual values of constant don't matter in externs, for simplicity they are left as empty strings.

/**
 * @type {Object<string, string>}
 */
Hls.Events = {
	MEDIA_ATTACHING: '',
	MEDIA_ATTACHED: '',
	MEDIA_DETACHING: '',
	MEDIA_DETACHED: '',
	BUFFER_RESET: '',
	BUFFER_CODECS: '',
	BUFFER_CREATED: '',
	BUFFER_APPENDING: '',
	BUFFER_APPENDED: '',
	BUFFER_EOS: '',
	BUFFER_FLUSHING: '',
	BUFFER_FLUSHED: '',
	MANIFEST_LOADING: '',
	MANIFEST_LOADED: '',
	MANIFEST_PARSED: '',
	LEVEL_SWITCHING: '',
	LEVEL_SWITCHED: '',
	LEVEL_LOADING: '',
	LEVEL_LOADED: '',
	LEVEL_UPDATED: '',
	LEVEL_PTS_UPDATED: '',
	AUDIO_TRACKS_UPDATED: '',
	AUDIO_TRACK_SWITCHING: '',
	AUDIO_TRACK_SWITCHED: '',
	AUDIO_TRACK_LOADING: '',
	AUDIO_TRACK_LOADED: '',
	SUBTITLE_TRACKS_UPDATED: '',
	SUBTITLE_TRACK_SWITCH: '',
	SUBTITLE_TRACK_LOADING: '',
	SUBTITLE_TRACK_LOADED: '',
	SUBTITLE_FRAG_PROCESSED: '',
	INIT_PTS_FOUND: '',
	FRAG_LOADING: '',
	FRAG_LOAD_PROGRESS: '',
	FRAG_LOAD_EMERGENCY_ABORTED: '',
	FRAG_LOADED: '',
	FRAG_DECRYPTED: '',
	FRAG_PARSING_INIT_SEGMENT: '',
	FRAG_PARSING_USERDATA: '',
	FRAG_PARSING_METADATA: '',
	FRAG_PARSING_DATA: '',
	FRAG_PARSED: '',
	FRAG_BUFFERED: '',
	FRAG_CHANGED: '',
	FPS_DROP: '',
	FPS_DROP_LEVEL_CAPPING: '',
	ERROR: '',
	DESTROYING: '',
	KEY_LOADING: '',
	KEY_LOADED: '',
	STREAM_STATE_TRANSITION: ''
};

/**
 * @type {Object<string, string>}
 */
Hls.ErrorTypes = {
	NETWORK_ERROR: '',
	MEDIA_ERROR: '',
	OTHER_ERROR: ''
};

/**
 * @type {Object<string, string>}
 */
Hls.ErrorDetails = {
	MANIFEST_LOAD_ERROR: '',
	MANIFEST_LOAD_TIMEOUT: '',
	MANIFEST_PARSING_ERROR: '',
	LEVEL_LOAD_ERROR: '',
	LEVEL_LOAD_TIMEOUT: '',
	AUDIO_TRACK_LOAD_ERROR: '',
	AUDIO_TRACK_LOAD_TIMEOUT: '',
	FRAG_LOAD_ERROR: '',
	FRAG_LOAD_TIMEOUT: '',
	KEY_LOAD_ERROR: '',
	KEY_LOAD_TIMEOUT: '',
	MANIFEST_INCOMPATIBLE_CODECS_ERROR: '',
	FRAG_DECRYPT_ERROR: '',
	FRAG_PARSING_ERROR: '',
	BUFFER_ADD_CODEC_ERROR: '',
	BUFFER_APPEND_ERROR: '',
	BUFFER_APPENDING_ERROR: '',
	BUFFER_STALLED_ERROR: '',
	BUFFER_FULL_ERROR: '',
	BUFFER_SEEK_OVER_HOLE: '',
	BUFFER_NUDGE_ON_STALL: '',
	REMUX_ALLOC_ERROR: '',
	LEVEL_SWITCH_ERROR: '',
	INTERNAL_EXCEPTION: ''
};
