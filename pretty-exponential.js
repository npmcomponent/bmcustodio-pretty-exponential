/*!
 *  pretty-exponential 1.0.0 (https://github.com/bmcustodio/pretty-exponential)
 *  Copyright 2014 Bruno M. Custódio
 *  MIT License
 */
(function(){var c={"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"};var b=/(\-?\d(?:\.\d+)?)e\+?(\-?\d+)/;var a=function(h,f){var j=Number(h).toExponential(f).match(b);if(!j){throw new TypeError("Non-numerical or non-finite value found")}var e=j[1],d=j[2];if(parseInt(d,10)===0){return e}var i="";for(var g=0;g<d.length;g+=1){i+=c[d[g]]}return e+"×10"+i};if(typeof module!=="undefined"){module.exports=a}else{window.prettyExponential=a}}());