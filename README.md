# eslint-config-clc
ES Lint Config

To add this file to your own project, setup your project's `package.json` to include
the following (note that you should the most up-to-date versions of each):
```js
  "devDependencies": {
    "eslint": "^6.6.0",
    "eslint-config-clc": "git://github.com/CLCInc/eslint-config-clc.git",
    "eslint-config-prettier": "^6.5.0",
    "eslint-plugin-prettier": "^3.1.1",
    "prettier": "^1.19.1"
  }
```
and then in your project's root folder, create a `.eslintrc` file containing the following:
```js
{
  "extends": "eslint-config-clc"
}
```

Perform an `npm install` and now IDEs such as WebStorm will be able to find the `.eslintrc`
and give you responsive feedback!
