(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);

// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/create_fake_namespace_object
(() => {
var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
  __webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach((key) => { def[key] = () => (value[key]) });
	}
	def['default'] = () => (value);
	__webpack_require__.d(ns, def);
	return ns;
};
})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/ensure_chunk
(() => {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = (chunkId) => {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce((promises, key) => {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};
})();
// webpack/runtime/esm_module_decorator
(() => {
__webpack_require__.hmd = (module) => {
  module = Object.create(module);
  if (!module.children) module.children = [];
  Object.defineProperty(module, 'exports', {
      enumerable: true,
      set: () => {
          throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
      }
  });
  return module;
};
})();
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.u = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "assets/js/" + ({"1069": "fb7fc25d","1199": "80b601b3","151": "138e0e15","1553": "1deca8b7","1570": "b5c20607","175": "c727cc7b","1805": "830b40bb","1873": "70bfd4e8","1918": "edd60a97","1919": "76d2606a","2043": "80c89947","2116": "69da05d4","2123": "9bd3041f","2199": "b5b3e37b","2212": "5d6cde95","2229": "a2b2d524","2308": "c125c272","2364": "986fcd3c","2374": "0ab78278","2455": "c34588c1","2606": "b9ac637d","2732": "d04ec8ad","2905": "d0070183","2947": "44b7a0c0","3093": "092c32d3","3432": "5e95c892","3671": "6148ec90","3706": "aa4af078","3762": "9c5dffbf","3948": "ceb6713e","3952": "89ff097c","4500": "bc1a2790","4605": "58a1c2b9","4733": "533e231f","4846": "10087596","4850": "4b374cb0","5112": "aba21aa0","5126": "926d4dc7","5205": "1d0abbe8","5211": "a7bd4aaa","5230": "1a4e3797","5647": "5518cd1d","5689": "62fa8aa4","6262": "2510fb83","660": "450f52ad","6687": "3cf22537","6767": "3179504a","6950": "1bf61c02","7026": "1c45a332","7048": "17896441","7087": "b2d70ba7","7258": "0069a404","7351": "052bd3b6","7365": "a7456010","7394": "9fe3680c","7397": "5308dfd1","7413": "565ee0ad","77": "5c0ccdb7","7717": "02751dd0","7847": "8847613a","8033": "5d34c69a","805": "22f32fa9","8119": "cf5521b5","8226": "f8cc440d","8260": "04b7312d","8402": "750433da","8498": "df379f10","854": "ae1c4358","8680": "8ec9172d","8792": "216bef97","8994": "d9dab780","906": "5ec07ba0","9079": "70aac116","9201": "d4007db6","9268": "d6ed9b8e","9285": "40575fab","939": "dfa9b1fe","9622": "03f347e4","9659": "fc9363d2","9717": "53ac7d2d","9815": "e8365100","9914": "a94703ab",}[chunkId] || chunkId) + "." + {"1069": "a2728c80","1199": "ace1fb4d","151": "9c4429f3","1553": "817e9636","1570": "63d142bd","175": "77f603da","1805": "ed36c378","1854": "75dc7935","1873": "6a3ebe4c","1918": "09e2d99f","1919": "79c8727d","2043": "e7bf255f","2116": "05b0aba7","2123": "fc8595ab","2199": "f50d99a6","2212": "2c1c2584","2229": "6eabb2ae","2308": "232945dd","2364": "023e19ec","2374": "6065bf73","2455": "f5395e0b","2606": "e6d599b7","2732": "9ae20a05","2905": "66f06f34","2947": "2b8c8a8b","3093": "1dde4011","3432": "dbb6673b","3671": "9fb2d70e","3706": "aecb63da","3762": "4c7efdd6","3948": "4fb0ae8b","3952": "020e84cb","4500": "1b2ba23d","4605": "b66bb7af","4733": "f34c5792","4846": "9f431613","4850": "f34bd9bf","5112": "46cf8f42","5126": "30b52890","5205": "6883d9df","5211": "32aa53f4","5230": "3dd44561","5647": "3795670f","5689": "1e95006c","6021": "60afbf7f","6262": "929b004a","660": "de56dec6","6613": "502bdc9f","6687": "a1469234","6767": "04de203c","6950": "78ccfc95","7026": "1dd9850e","7048": "ed55f3a1","7087": "a5666238","7258": "e5c344de","7351": "7ce8d41e","7365": "027d8443","7394": "39449dc1","7397": "5568c109","7413": "6a624533","77": "7efdb6f6","7717": "0caa20c9","7847": "1185f621","8033": "02a0b699","805": "399ff31b","8119": "de255b9c","8226": "a092f553","8260": "9f5673e6","8402": "16f55c99","8498": "53f0ed16","8499": "5fcd3e72","8513": "1bf9fee4","854": "2f08713e","8680": "b9c26cea","8792": "3ccd542b","8994": "0e06ffc5","906": "738036fa","9079": "54ff363c","9196": "d52147f0","9201": "442c57a0","9268": "ccabdb58","9285": "b09f62e2","939": "5923cf6a","9622": "85f112d0","9659": "aea8a6bb","9717": "699a8420","9815": "3bd464f0","9914": "0cc0f732",}[chunkId] + ".js"
}
})();
// webpack/runtime/get mini-css chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.miniCssF = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "" + chunkId + ".css"
}
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("7ec13127f19543fa")
})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (() => {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var dataWebpackPrefix = "BioStar2-Docs:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		
    script = document.createElement('script');
    
		script.charset = 'utf-8';
		script.timeout = 120;
		if (__webpack_require__.nc) {
			script.setAttribute("nonce", __webpack_require__.nc);
		}
		script.setAttribute("data-webpack", dataWebpackPrefix + key);
		
		script.src = url;
		
    
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = (result, chunkIds, fn, priority) => {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var chunkIds = deferred[i][0];
var fn = deferred[i][1];
var priority = deferred[i][2];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "/biostar2-docs/en/";
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.3.12")
})();
// webpack/runtime/ChunkAssetRuntimeModule
(() => {
// Docusaurus function to get chunk asset
__webpack_require__.gca = function(chunkId) { chunkId = {"10087596":"4846","17896441":"7048","5c0ccdb7":"77","138e0e15":"151","c727cc7b":"175","450f52ad":"660","22f32fa9":"805","ae1c4358":"854","5ec07ba0":"906","dfa9b1fe":"939","fb7fc25d":"1069","80b601b3":"1199","1deca8b7":"1553","b5c20607":"1570","830b40bb":"1805","70bfd4e8":"1873","edd60a97":"1918","76d2606a":"1919","80c89947":"2043","69da05d4":"2116","9bd3041f":"2123","b5b3e37b":"2199","5d6cde95":"2212","a2b2d524":"2229","c125c272":"2308","986fcd3c":"2364","0ab78278":"2374","c34588c1":"2455","b9ac637d":"2606","d04ec8ad":"2732","d0070183":"2905","44b7a0c0":"2947","092c32d3":"3093","5e95c892":"3432","6148ec90":"3671","aa4af078":"3706","9c5dffbf":"3762","ceb6713e":"3948","89ff097c":"3952","bc1a2790":"4500","58a1c2b9":"4605","533e231f":"4733","4b374cb0":"4850","aba21aa0":"5112","926d4dc7":"5126","1d0abbe8":"5205","a7bd4aaa":"5211","1a4e3797":"5230","5518cd1d":"5647","62fa8aa4":"5689","2510fb83":"6262","3cf22537":"6687","3179504a":"6767","1bf61c02":"6950","1c45a332":"7026","b2d70ba7":"7087","0069a404":"7258","052bd3b6":"7351","a7456010":"7365","9fe3680c":"7394","5308dfd1":"7397","565ee0ad":"7413","02751dd0":"7717","8847613a":"7847","5d34c69a":"8033","cf5521b5":"8119","f8cc440d":"8226","04b7312d":"8260","750433da":"8402","df379f10":"8498","8ec9172d":"8680","216bef97":"8792","d9dab780":"8994","70aac116":"9079","d4007db6":"9201","d6ed9b8e":"9268","40575fab":"9285","03f347e4":"9622","fc9363d2":"9659","53ac7d2d":"9717","e8365100":"9815","a94703ab":"9914"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
})();
// webpack/runtime/jsonp_chunk_loading
(() => {
__webpack_require__.b = document.baseURI || self.location.href;

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"2580": 0,"6212": 0,};
      
        __webpack_require__.f.j = function (chunkId, promises) {
          // JSONP chunk loading for javascript
var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
	? installedChunks[chunkId]
	: undefined;
if (installedChunkData !== 0) {
	// 0 means "already installed".

	// a Promise means "currently loading".
	if (installedChunkData) {
		promises.push(installedChunkData[2]);
	} else {
		if (!/^(2580|6212)$/.test(chunkId)) {
			// setup Promise in chunk cache
			var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
			promises.push((installedChunkData[2] = promise));

			// start chunk loading
			var url = __webpack_require__.p + __webpack_require__.u(chunkId);
			// create error before stack unwound to get useful stacktrace later
			var error = new Error();
			var loadingEnded = function (event) {
				if (__webpack_require__.o(installedChunks, chunkId)) {
					installedChunkData = installedChunks[chunkId];
					if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
					if (installedChunkData) {
						var errorType =
							event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						error.message =
							'Loading chunk ' +
							chunkId +
							' failed.\n(' +
							errorType +
							': ' +
							realSrc +
							')';
						error.name = 'ChunkLoadError';
						error.type = errorType;
						error.request = realSrc;
						installedChunkData[1](error);
					}
				}
			};
			__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
		} else installedChunks[chunkId] = 0;

	}
}

        }
        __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
// install a JSONP callback for chunk loading
var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
	var chunkIds = data[0];
var moreModules = data[1];
var runtime = data[2];
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

})();
/************************************************************************/
})()
;