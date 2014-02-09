# pretty-exponential [![Build Status](https://travis-ci.org/bmcustodio/pretty-exponential.png?branch=master)](http://travis-ci.org/bmcustodio/pretty-exponential)

> `Number.prototype.toExponential` made beautiful: `-1.243e+31` => `-1.243×10³¹`


## Install

Download [manually](https://github.com/bmcustodio/pretty-exponential/releases) or with a package manager.

#### [npm](https://npmjs.org/package/to-single-quotes)

```
npm install --save pretty-exponential
```

#### [Bower](http://bower.io)

```
bower install --save pretty-exponential
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

##### Usage

```js
prettyExponential(0.031245); //=> '3.1245×10⁻²'
```


## License

MIT © [Bruno M. Custódio](http://brunomcustodio.com)