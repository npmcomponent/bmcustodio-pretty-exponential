# pretty-exponential

[![Build Status](https://travis-ci.org/bmcustodio/pretty-exponential.png?branch=master)](https://travis-ci.org/bmcustodio/pretty-exponential)
[![Coverage Status](https://coveralls.io/repos/bmcustodio/pretty-exponential/badge.png?branch=master)](https://coveralls.io/r/bmcustodio/pretty-exponential?branch=master)
[![NPM version](https://badge.fury.io/js/pretty-exponential.png)](http://badge.fury.io/js/pretty-exponential)

[`Number.prototype.toExponential`](http://goo.gl/pcx1Tl) made beautiful: `-1.243e+21` ⇒ `-1.243×10²¹`


## Install

Download [manually](https://github.com/bmcustodio/pretty-exponential/releases) or with a package manager.

#### [npm](https://npmjs.org/package/to-single-quotes)

```
npm install pretty-exponential
```

#### [Bower](http://bower.io)

```
bower install pretty-exponential
```

#### [Component](https://github.com/component/component)

```
component install bmcustodio/pretty-exponential
```


## Example

##### Node.js

```js
var prettyExponential = require('pretty-exponential');
```

##### Bower

```html
<script src="bower_components/pretty-exponential/pretty-exponential.js"></script>
```

##### Component

```html
<script src="components/bmcustodio-pretty-exponential/pretty-exponential.js"></script>
```


##### Usage

```js
prettyExponential(0.031245); //=> '3.1245×10⁻²'
```

```js
prettyExponential(0.031245, 3); //=> '3.124×10⁻²'
```


## License

MIT © [Bruno M. Custódio](http://brunomcustodio.com)
