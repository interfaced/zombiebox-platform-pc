/*
 * This file is part of the ZombieBox package.
 *
 * Copyright (c) 2015-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Device from './device';


/**
 * @return {?Device}
 */
export default function create() {
	const isPCPlatform = Device.detect();

	if (isPCPlatform) {
		return new Device();
	}

	return null;
}
