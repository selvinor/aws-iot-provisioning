/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function mkdir(e){const r=require("fs");return new Promise((o,n)=>r.mkdir(e,r=>r&&"EEXIST"!==r.code?n(r):o(e)))}Error.stackTraceLimit=100,process.on("SIGPIPE",()=>{console.error(new Error("Unexpected SIGPIPE"))}),exports.injectNodeModuleLookupPath=function(e){if(!e)throw new Error("Missing injectPath");const r=require("module"),o=require("path").join(__dirname,"../node_modules"),n=r._resolveLookupPaths;r._resolveLookupPaths=function(r,t,i){const s=n(r,t,i),c=i?s:s[1];for(let r=0,n=c.length;r<n;r++)if(c[r]===o){c.splice(r,0,e);break}return s}},exports.enableASARSupport=function(e){const r=require("module"),o=require("path");let n=e;n||(n=o.join(__dirname,"../node_modules"));const t=n+".asar",i=r._resolveLookupPaths;r._resolveLookupPaths=function(e,r,o){const s=i(e,r,o),c=o?s:s[1];for(let e=0,r=c.length;e<r;e++)if(c[e]===n){c.splice(e,0,t);break}return s}},exports.uriFromPath=function(e){let r=require("path").resolve(e).replace(/\\/g,"/");r.length>0&&"/"!==r.charAt(0)&&(r="/"+r);let o
;return(o="win32"===process.platform&&r.startsWith("//")?encodeURI("file:"+r):encodeURI("file://"+r)).replace(/#/g,"%23")},exports.readFile=function(e){const r=require("fs");return new Promise(function(o,n){r.readFile(e,"utf8",function(e,r){e?n(e):o(r)})})},exports.writeFile=function(e,r){const o=require("fs");return new Promise(function(n,t){o.writeFile(e,r,"utf8",function(e){e?t(e):n()})})},exports.mkdirp=function e(r){const o=require("path");return mkdir(r).then(null,n=>{if(n&&"ENOENT"===n.code){const n=o.dirname(r);if(n!==r)return e(n).then(()=>mkdir(r))}throw n})},exports.setupNLS=function(){const e=require("path");let r={availableLanguages:{}};if(process.env.VSCODE_NLS_CONFIG)try{r=JSON.parse(process.env.VSCODE_NLS_CONFIG)}catch(e){}if(r._resolvedLanguagePackCoreLocation){const o=Object.create(null);r.loadBundle=function(n,t,i){let s=o[n];if(s)return void i(void 0,s);const c=e.join(r._resolvedLanguagePackCoreLocation,n.replace(/\//g,"!")+".nls.json");exports.readFile(c).then(function(e){
let r=JSON.parse(e);o[n]=r,i(void 0,r)}).catch(e=>{try{r._corruptedFile&&exports.writeFile(r._corruptedFile,"corrupted").catch(function(e){console.error(e)})}finally{i(e,void 0)}})}}return r},exports.configurePortable=function(){function e(){return process.env.VSCODE_DEV?t:"darwin"===process.platform?o.dirname(o.dirname(o.dirname(t))):o.dirname(o.dirname(t))}const r=require("../product.json"),o=require("path"),n=require("fs"),t=o.dirname(__dirname),i=function(){if(process.env.VSCODE_PORTABLE)return process.env.VSCODE_PORTABLE;if("win32"===process.platform||"linux"===process.platform)return o.join(e(),"data");const n=r.portable||`${r.applicationName}-portable-data`;return o.join(o.dirname(e()),n)}(),s=!("target"in r)&&n.existsSync(i),c=o.join(i,"tmp"),a=s&&n.existsSync(c);return s?process.env.VSCODE_PORTABLE=i:delete process.env.VSCODE_PORTABLE,a&&(process.env["win32"===process.platform?"TEMP":"TMPDIR"]=c),{portableDataPath:i,isPortable:s}},exports.avoidMonkeyPatchFromAppInsights=function(){
process.env.APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL=!0,global.diagnosticsSource={}};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8e0f348413f4f616c23a88ae30030efa85811973/core/bootstrap.js.map
