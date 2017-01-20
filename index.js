'use strict';

module.exports = {
    // http://eslint.org/docs/rules/

    "ecmaFeatures": {
        "arrowFunctions": true,           // enable binary literals
        "blockBindings": true,                     // enable let and const (aka block bindings)
        "classes": true,                 // enable default function parameters
        "generators": true,                        // enable generators
        "objectLiteralComputedProperties": true,   // enable computed object literal property names
        "objectLiteralShorthandMethods": true,     // enable object literal shorthand methods
        "objectLiteralShorthandProperties": true,  // enable object literal shorthand properties
        "templateStrings": true,                   // enable template strings
        "jsx": false                                // enable JSX
    },

    "env": {
        "es6": true,
        "browser": true,     // browser global variables.
        "node": true,        // Node.js global variables and Node.js-specific rules.
        "commonjs": true,         // defines require() and define() as global variables as per the amd spec.
        "mocha": true,       // adds all of the Mocha testing global variables.
        "jquery": true      // jquery global variables.
    },

    "globals": {
        // e.g. "angular": true
    },

    "plugins": [
        // e.g. "react" (must run `npm install eslint-plugin-react` first)
    ],

    "rules": {
        ////////// Possible Errors //////////

        "comma-dangle": [2, "never"],         // disallow trailing commas in object literals
        "no-cond-assign": 2,          // disallow assignment in conditional expressions
        "no-console": 0,              // disallow use of console (off by default in the node environment)
        "no-constant-condition": 0,   // disallow use of constant expressions in conditions
        "no-control-regex": 0,        // disallow control characters in regular expressions
        "no-debugger": 0,             // disallow use of debugger
        "no-dupe-keys": 2,            // disallow duplicate keys when creating object literals
        "no-dupe-args": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,                // disallow empty statements
        "no-empty-character-class": 0,          // disallow the use of empty character classes in regular expressions
        "no-ex-assign": 2,            // disallow assigning to the exception in a catch block
        "no-extra-boolean-cast": 0,   // disallow double-negation boolean casts in a boolean context
        "no-extra-parens": 0,         // disallow unnecessary parentheses (off by default)
        "no-extra-semi": 0,           // disallow unnecessary semicolons
        "no-func-assign": 2,          // disallow overwriting functions written as function declarations
        "no-inner-declarations": 2,   // disallow function or variable declarations in nested blocks
        "no-invalid-regexp": 2,       // disallow invalid regular expression strings in the RegExp constructor
        "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
        "no-negated-in-lhs": 2,       // disallow negation of the left operand of an in expression
        "no-obj-calls": 2,            // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-regex-spaces": 2,         // disallow multiple spaces in a regular expression literal
        "no-sparse-arrays": 0,        // disallow sparse arrays
        "no-unreachable": 2,          // disallow unreachable statements after a return, throw, continue, or break statement
        "use-isnan": 2,               // disallow comparisons with the value NaN
        "valid-jsdoc": 0,             // Ensure JSDoc comments are valid (off by default)
        "valid-typeof": 2,            // Ensure that the results of typeof are compared against a valid string


        ////////// Best Practices //////////

        "block-scoped-var": 0,      // treat var statements as if they were block scoped (off by default)
        "complexity": 0,            // specify the maximum cyclomatic complexity allowed in a program (off by default)
        "consistent-return": 0,     // require return statements to either always or never specify values
        "curly": [2, "all"],        // specify curly brace conventions for all control statements
        "default-case": 0,          // require default case in switch statements (off by default)
        "dot-location": [2, "property"],
        "dot-notation": 0,          // encourages use of dot notation whenever possible
        "eqeqeq": 2,                // require the use of === and !==
        "guard-for-in": 0,          // make sure for-in loops have an if statement (off by default)
        "no-alert": 0,              // disallow the use of alert, confirm, and prompt
        "no-caller": 2,             // disallow use of arguments.caller or arguments.callee
        "no-case-declarations": 2,
        "no-div-regex": 0,          // disallow division operators explicitly at beginning of regular expression (off by default)
        "no-else-return": 2,        // disallow else after a return in an if (off by default)
        "no-eq-null": 0,            // disallow comparisons to null without a type-checking operator (off by default)
        "no-eval": 0,               // disallow use of eval()
        "no-extend-native": 2,      // disallow adding to native types
        "no-extra-bind": 0,         // disallow unnecessary function binding
        "no-fallthrough": 0,        // disallow fallthrough of case statements
        "no-floating-decimal": 0,   // disallow the use of leading or trailing decimal points in numeric literals (off by default)
        "no-implied-eval": 2,       // disallow use of eval()-like methods
        "no-invalid-this": 2,
        "no-iterator": 0,           // disallow usage of __iterator__ property
        "no-labels": 2,             // disallow use of labeled statements
        "no-lone-blocks": 2,        // disallow unnecessary nested blocks
        "no-loop-func": 0,          // disallow creation of functions within loops
        "no-multi-spaces": 0,       // disallow use of multiple spaces
        "no-multi-str": 2,          // disallow use of multiline strings
        "no-native-reassign": 0,    // disallow reassignments of native objects
        "no-new": 0,                // disallow use of new operator when not part of the assignment or comparison
        "no-new-func": 2,           // disallow use of new operator for Function object
        "no-new-wrappers": 2,       // disallows creating new instances of String, Number, and Boolean
        "no-octal": 0,              // disallow use of octal literals
        "no-octal-escape": 0,       // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-process-env": 0,        // disallow use of process.env (off by default)
        "no-proto": 0,              // disallow usage of __proto__ property
        "no-redeclare": 2,          // disallow declaring the same variable more then once
        "no-return-assign": 0,      // disallow use of assignment in return statement
        "no-script-url": 0,         // disallow use of javascript: urls.
        "no-self-compare": 2,       // disallow comparisons where both sides are exactly the same (off by default)
        "no-sequences": 2,          // disallow use of comma operator
        "no-unused-expressions": 2, // disallow usage of expressions in statement position
        "no-useless-concat": 2,
        "no-void": 0,               // disallow use of void operator (off by default)
        "no-warning-comments": 0,   // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
        "no-with": 0,               // disallow use of the with statement
        "radix": 2,                 // require use of the second argument for parseInt() (off by default)
        "vars-on-top": 0,           // requires to declare all vars on top of their containing scope (off by default)
        "wrap-iife": 0,             // require immediate function invocation to be wrapped in parentheses (off by default)
        "yoda": 2,                  // require or disallow Yoda conditions


        ////////// Strict Mode //////////

        "strict": 0,          // controls location of Use Strict Directives


        ////////// Variables //////////

        "no-catch-shadow": 2,             // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        "no-delete-var": 2,               // disallow deletion of variables
        "no-label-var": 2,                // disallow labels that share a name with a variable
        "no-shadow": 2,                   // disallow declaration of variables already declared in the outer scope
        "no-shadow-restricted-names": 2,  // disallow shadowing of names such as arguments
        "no-undef": 2,                    // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undef-init": 1,               // disallow use of undefined when initializing variables
        "no-undefined": 0,                // disallow use of undefined variable (off by default)
        "no-unused-vars": 2,              // disallow declaration of variables that are not used in the code
        "no-use-before-define": 2,        // disallow use of variables before they are defined


        ////////// Node.js //////////

        "callback-return": 2,
        "handle-callback-err": 0,   // enforces error handling in callbacks (off by default) (on by default in the node environment)
        "no-mixed-requires": 0,     // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
        "no-new-require": 2,        // disallow use of new operator with the require function (off by default) (on by default in the node environment)
        "no-path-concat": 2,        // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
        "no-process-exit": 0,       // disallow process.exit() (on by default in the node environment)
        "no-restricted-modules": 0, // restrict usage of specified node modules (off by default)
        "no-sync": 0,               // disallow use of synchronous methods (off by default)


        ////////// Stylistic Issues //////////

        "block-spacing": 2,
        "brace-style": [2, "1tbs", { "allowSingleLine": true }],               // enforce one true brace style (off by default)
        "camelcase": 1,                 // require camel case names
        "comma-spacing": 0,             // enforce spacing before and after comma
        "comma-style": [2, "last"],               // enforce one true comma style (off by default)
        "consistent-this": 0,           // enforces consistent naming when capturing the current execution context (off by default)
        "eol-last": 0,                  // enforce newline at the end of file, with no multiple empty lines
        "func-names": 0,                // require function expressions to have a name (off by default)
        "func-style": 0,                // enforces use of function declarations or expressions (off by default)
        "key-spacing": [                // enforces spacing between keys and values in object literal properties
            "error",
            {
                "align": "value"
            }
        ],
        "indent": [2, 4, {"SwitchCase": 1}],
        "max-nested-callbacks": 0,      // specify the maximum depth callbacks can be nested (off by default)
        "new-cap": 0,                   // require a capital letter for constructors
        "new-parens": 2,                // disallow the omission of parentheses when invoking a constructor with no arguments
        "no-array-constructor": 2,      // disallow use of the Array constructor
        "no-inline-comments": 0,        // disallow comments inline after code (off by default)
        "no-lonely-if": 2,              // disallow if as the only statement in an else block (off by default)
        "no-mixed-spaces-and-tabs": 2,  // disallow mixed spaces and tabs for indentation
        "no-multiple-empty-lines": 0,   // disallow multiple empty lines (off by default)
        "no-nested-ternary": 0,         // disallow nested ternary expressions (off by default)
        "no-new-object": 0,             // disallow use of the Object constructor
        "no-space-before-semi": 0,      // disallow space before semicolon
        "no-spaced-func": 2,            // disallow space between function identifier and application
        "no-ternary": 0,                // disallow the use of ternary operators (off by default)
        "no-trailing-spaces": 0,        // disallow trailing whitespace at the end of lines
        "no-underscore-dangle": 0,      // disallow dangling underscores in identifiers
        "no-unneeded-ternary": 2,
        "no-wrap-func": 0,              // disallow wrapping of non-IIFE statements in parens
        "one-var": 0,                   // allow just one var statement per function (off by default)
        "operator-assignment": 0,       // require assignment operator shorthand where possible or prohibit it entirely (off by default)
        "padded-blocks": 0,             // enforce padding within blocks (off by default)
        "quote-props": 0,               // require quotes around object literal property names (off by default)
        "quotes": [2, "single", "avoid-escape"],                    // specify whether double or single quotes should be used
        "semi": [2, "always"],                      // require or disallow use of semicolons instead of ASI
        "sort-vars": 0,                 // sort variables within the same declaration block (off by default)
        "space-before-function-paren": [2, "never"], // require a space after function names (off by default)
        "space-after-keywords": 0,      // require a space after certain keywords (off by default)
        "space-before-blocks": 0,       // require or disallow space before blocks (off by default)
        "space-in-parens": 0,           // require or disallow spaces inside parentheses (off by default)
        "space-infix-ops": 2,           // require spaces around operators
        "keyword-spacing": 2,   // require a space after return, throw, and case
        "space-unary-ops": 0,           // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
        "spaced-line-comment": 0,       // require or disallow a space immediately following the // in a line comment (off by default)
        "wrap-regex": 0,                // require regex literals to be wrapped in parentheses (off by default)


        ////////// ECMAScript 6 //////////
        "arrow-body-style": [2, "as-needed"],
        "arrow-parens": [2, "always"],
        "arrow-spacing": [2, {"before": true, "after": true}],
        "no-const-assign": 2,
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "prefer-template": 2,
        "prefer-const": 1
    }
};
