# Change log

## 2.3.2 (04.03.2020)
* Support ZombieBox 2.7 (improve start position handling)

## 2.3.2 (05.02.2020)
* Fix runtime exception in compiled version.

## 2.3.1 (03.02.2020)
* Add externs to published files

## 2.3.0 (03.02.2020)
* HLS support was added to both `HTML5Video` and `StatefultHtml5Video` with the help of [Hls.js](https://github.com/video-dev/hls.js/).
* Support ZombieBox 2.6.0

## 2.2.0 (28.12.2019)

Identical to `2.2.0-alpha.3`. Changes listed are since last stable release (`2.1.0`)

* Add `IStatefulVideo` implementation.
* Implement `getPanelResolution` and `getOSDResolution` in `Info`
* Implemented `Device.isUHD8KSupported`

## 2.2.0-alpha.3 (16.12.2019)
* Updated `Viewport` to always deal in app coordinates 
* Implement `getPanelResolution` and `getOSDResolution` in `Info`

## 2.2.0-alpha.2 (12.12.2019)

* Implemented `Device.isUHD8KSupported`

## 2.2.0-alpha.1 (20.11.2019)

* `StatefulVideo` introduced with ZombieBox 2.3.0

## 2.1.0 (23.07.2019)

Implemented platform specific video container for compatibility with ZombieBox 2.1.0

## 2.0.0 (03.06.2019)

Platform synced with ZombieBox 2.0.0; No major changes

## 2.0.0-alpha.3 (24.04.2019)

Platform synced with ZombieBox 2.0.0-alpha.5 

## 2.0.0-alpha.2 (21.03.2019)

* zb-platform-test was updated to 2.0

## 2.0.0-alpha.1

Platform code migrated to ECMAScript modules.

## v0.2.0

### Features
* **#5049** Added factory method `zb.device.platforms.pc.factory.createDevice` for create Device instances. All global dependencies now located in factory method.
* **#5049** All *.es6 files renamed to *.js
