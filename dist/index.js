"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=i(function(w,v){
var p=require('@stdlib/stats-strided-svarianceyc/dist').ndarray,x=require('@stdlib/math-base-special-sqrtf/dist');function j(e,r,a,s,f){return x(p(e,r,a,s,f))}v.exports=j
});var q=i(function(z,n){
var m=require('@stdlib/strided-base-stride2offset/dist'),l=t();function R(e,r,a,s){return l(e,r,a,s,m(e,s))}n.exports=R
});var d=i(function(A,y){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),E=t();_(c,"ndarray",E);y.exports=c
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=d(),u,o=b(O(__dirname,"./native.js"));g(o)?u=h:u=o;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
