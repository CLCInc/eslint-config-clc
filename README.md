# eslint-config-clc
ES Lint Config

To add this file to your own project, setup your project's `package.json` to include
the following:
```js
  "devDependencies": {
    "eslint": "^3.7.1", // note, you should just use whatever is most up-to-date
    "eslint-config-clc": "git://github.com/CLCInc/eslint-config-clc.git"
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
