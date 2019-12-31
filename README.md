# eslint-config-clc

Shareable eslint configuration.

To add this file to your own project, setup your project's `package.json` to include
the following (note that you should use up-to-date versions of each dependency):
```js
  "devDependencies": {
    "@clc_inc/eslint-config-clc": "^2.0.0",
    "eslint": "^6.6.0",
    "eslint-config-prettier": "^6.5.0",
    "eslint-plugin-prettier": "^3.1.1"
  }
```
and then in your project's root folder, create a `.eslintrc` file containing the following:
```js
{
  "extends": "@clc_inc/eslint-config-clc"
}
```

Perform an `npm install` and now IDEs such as WebStorm and VSCode should be able to find the `.eslintrc`
and give you responsive feedback!
