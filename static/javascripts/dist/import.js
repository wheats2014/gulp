/**
 * gulp - 追忆那远去的游侠气息
 * @version v0.0.1
 * @link http://www.wheats.me
 * @license 随便用
 */
!function e(n,r,t){function o(i,a){if(!r[i]){if(!n[i]){var f="function"==typeof require&&require;if(!a&&f)return f(i,!0);if(u)return u(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[i]={exports:{}};n[i][0].call(l.exports,function(e){var r=n[i][1][e];return o(r||e)},l,l.exports,e,n,r,t)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(e,n,r){"use strict";(0,e("./module.js").add)(3,5)},{"./module.js":2}],2:[function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){console.log("x + y: "+(e+n))}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}();r.add=o;!function(){function e(){t(this,e)}u(e,[{key:"hello",value:function(){console.log("a")}}])}();r.name="wheats",r.age=10,r.sex="男",r.nnn="wheats"},{}]},{},[1]);