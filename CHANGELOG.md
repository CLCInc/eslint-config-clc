## [2.1.2](https://github.com/CLCInc/eslint-config-clc/compare/v2.1.1...v2.1.2) (2025-04-16)


### Bug Fixes

* DEV-3602 Support Context in Circle CI ([#12](https://github.com/CLCInc/eslint-config-clc/issues/12)) ([8a6d893](https://github.com/CLCInc/eslint-config-clc/commit/8a6d8933b3b909c0977a2ff74392c830ffa4ec2a))

## [2.1.1](https://github.com/CLCInc/eslint-config-clc/compare/v2.1.0...v2.1.1) (2023-02-03)


### Bug Fixes

* whitespace change to trigger test of circleci and npm publish ([#9](https://github.com/CLCInc/eslint-config-clc/issues/9)) ([26c80ba](https://github.com/CLCInc/eslint-config-clc/commit/26c80bada2ae24f18465347203bc81268574d113))

# [2.1.0](https://github.com/CLCInc/eslint-config-clc/compare/v2.0.0...v2.1.0) (2022-02-17)


### Features

* whitespace change to trigger version bump ([#8](https://github.com/CLCInc/eslint-config-clc/issues/8)) ([25ef3e3](https://github.com/CLCInc/eslint-config-clc/commit/25ef3e39e1b8cec50010130a31c69521d507ec11))

# [2.0.0](https://github.com/CLCInc/eslint-config-clc/compare/v1.0.2...v2.0.0) (2020-01-03)


### Features

* publish package to npm on push to master ([#5](https://github.com/CLCInc/eslint-config-clc/issues/5)) ([f7953e3](https://github.com/CLCInc/eslint-config-clc/commit/f7953e3851710bae443a9ee13e7977f193de2fc6))


### BREAKING CHANGES

* This release changes the name of the npm package to include the CLC scope: @clc_inc/eslint-config-clc. Projects that pull in this version will need to update the 'package.json' and '.eslintrc' with the new name. See the `README.md` file in this repo for instructions.

DEV-469
