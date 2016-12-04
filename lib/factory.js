goog.provide('zb.device.platforms.pc.factory.createDevice');
goog.require('zb.device.platforms.pc.Device');


/**
 * @return {?zb.device.platforms.pc.Device}
 */
zb.device.platforms.pc.factory.createDevice = () => {
	const isPCPlatform = zb.device.platforms.pc.Device.detect();

	if (isPCPlatform) {
		const videoContainer = app.getVideoContainer();
		return new zb.device.platforms.pc.Device(videoContainer);
	}

	return null;
};
