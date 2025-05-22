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
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




})();
// webpack/runtime/create_fake_namespace_object
(() => {
var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__ };
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
		Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return  value[key]; } });
	}
	def['default'] = function() { return value };
	__webpack_require__.d(ns, def);
	return ns;
};
})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
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
__webpack_require__.e = function (chunkId) {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce(function (promises, key) {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};

})();
// webpack/runtime/esm_module_decorator
(() => {
__webpack_require__.hmd = function (module) {
    module = Object.create(module);
    if (!module.children) module.children = [];
    Object.defineProperty(module, 'exports', {
        enumerable: true,
        set: function () {
            throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
        }
    });
    return module;
};
})();
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
        __webpack_require__.u = function (chunkId) {
          // return url for filenames not based on template
          
          // return url for filenames based on template
          return "assets/js/" + ({"1069": "fb7fc25d","1199": "80b601b3","151": "138e0e15","1553": "1deca8b7","1570": "b5c20607","175": "c727cc7b","1805": "830b40bb","1873": "70bfd4e8","1919": "76d2606a","2043": "80c89947","2116": "69da05d4","2123": "9bd3041f","2199": "b5b3e37b","2212": "5d6cde95","2229": "a2b2d524","2308": "c125c272","2364": "986fcd3c","2374": "0ab78278","2455": "c34588c1","2606": "b9ac637d","2732": "d04ec8ad","2905": "d0070183","2947": "44b7a0c0","3093": "092c32d3","3432": "5e95c892","3671": "6148ec90","3706": "aa4af078","3762": "9c5dffbf","3952": "89ff097c","4500": "bc1a2790","4605": "58a1c2b9","4733": "533e231f","4846": "10087596","4850": "4b374cb0","5112": "aba21aa0","5126": "926d4dc7","5205": "1d0abbe8","5211": "a7bd4aaa","5230": "1a4e3797","5412": "4d83fd09","5647": "5518cd1d","5689": "62fa8aa4","6262": "2510fb83","660": "450f52ad","6767": "3179504a","6823": "029f9977","6950": "1bf61c02","7048": "17896441","7087": "b2d70ba7","7258": "0069a404","7351": "052bd3b6","7365": "a7456010","7394": "9fe3680c","7397": "5308dfd1","7413": "565ee0ad","7566": "871bfb49","77": "5c0ccdb7","7717": "02751dd0","7847": "8847613a","8033": "5d34c69a","805": "22f32fa9","8119": "cf5521b5","8226": "f8cc440d","8260": "04b7312d","8402": "750433da","8498": "df379f10","854": "ae1c4358","8680": "8ec9172d","8792": "216bef97","8994": "d9dab780","906": "5ec07ba0","9079": "70aac116","9201": "d4007db6","9268": "d6ed9b8e","9285": "40575fab","939": "dfa9b1fe","9659": "fc9363d2","9717": "53ac7d2d","9815": "e8365100","9914": "a94703ab",}[chunkId] || chunkId) + "." + {"1069": "6e0fba86","1199": "3b1f163a","151": "861efdbb","1553": "adf71c9d","1570": "d5fcb8c4","175": "66b59e81","1805": "f94265aa","1873": "be8fd540","1919": "cc18041a","2043": "33fe3dee","2116": "0216e9be","2123": "47d7718a","2199": "3d12bf2e","2212": "d1634267","2229": "523cbb8d","2308": "1e3ee175","2364": "f4d9aa38","2374": "7df6bf8b","2455": "4e7090d5","2606": "a5172aef","2626": "16329712","2732": "55be5a54","2905": "fffd71ed","2947": "2fd04f41","3093": "b0c881f9","3432": "00b2c2f6","3671": "fd455acf","3706": "d4de7fd9","3762": "a784c89f","3853": "4ef85965","3952": "0ef47201","4298": "ca07940b","4500": "4bd1650f","4605": "329ff3b2","4733": "6658b7d0","4846": "450b43a8","4850": "a6bed223","5112": "d68642ae","5126": "a11a9973","5205": "ccdaa66e","5211": "4734c460","5230": "1e23331c","5412": "8287da58","5647": "6219133e","5689": "e6ba6128","6021": "b0b71bde","6262": "efe20945","660": "5ed1f6e3","6767": "31bbfb97","6823": "57879514","6950": "52181d8e","7048": "2d1fba0b","7087": "ee176995","7258": "b9e9e4bd","7351": "2261251d","7365": "08c0203f","7394": "7137521d","7397": "2fc2cb0d","7413": "a572f13d","7566": "304cfb14","77": "2715f67c","7717": "c04ae525","7847": "f2a12092","8033": "e09123f1","805": "d390f684","8119": "aa320bf1","8226": "a4c43476","8260": "3f97cf1e","8402": "e38ea3a5","8498": "1c16c34f","8513": "1adaaffa","854": "9a15d94d","8680": "112e7423","8792": "07950e96","8994": "be6539a0","906": "245318a5","9079": "4f4ae981","9201": "7aa6c9cc","9268": "e5ef3b80","9285": "4b1811f1","939": "d7622afc","9659": "2fe3ecb9","9717": "f9cb5e42","9815": "9ed11dc7","9914": "bf850e7b",}[chunkId] + ".js";
        };
      
})();
// webpack/runtime/get mini-css chunk filename
(() => {
// This function allow to reference chunks
        __webpack_require__.miniCssF = function (chunkId) {
          // return url for filenames not based on template
          
          // return url for filenames based on template
          return "" + chunkId + ".css";
        };
      
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = function () {
	return "cac2f37322e23046";
};

})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (function () {
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
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

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
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = function (result, chunkIds, fn, priority) {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var chunkIds = deferred[i][0],
			fn = deferred[i][1],
			priority = deferred[i][2];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every(function (key) {
					return __webpack_require__.O[key](chunkIds[j]);
				})
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
__webpack_require__.rv = function () {
	return "1.2.0-alpha.0";
};

})();
// webpack/runtime/ChunkAssetRuntimeModule
(() => {
// Docusaurus function to get chunk asset
__webpack_require__.gca = function(chunkId) { chunkId = {"10087596":"4846","17896441":"7048","5c0ccdb7":"77","138e0e15":"151","c727cc7b":"175","450f52ad":"660","22f32fa9":"805","ae1c4358":"854","5ec07ba0":"906","dfa9b1fe":"939","fb7fc25d":"1069","80b601b3":"1199","1deca8b7":"1553","b5c20607":"1570","830b40bb":"1805","70bfd4e8":"1873","76d2606a":"1919","80c89947":"2043","69da05d4":"2116","9bd3041f":"2123","b5b3e37b":"2199","5d6cde95":"2212","a2b2d524":"2229","c125c272":"2308","986fcd3c":"2364","0ab78278":"2374","c34588c1":"2455","b9ac637d":"2606","d04ec8ad":"2732","d0070183":"2905","44b7a0c0":"2947","092c32d3":"3093","5e95c892":"3432","6148ec90":"3671","aa4af078":"3706","9c5dffbf":"3762","89ff097c":"3952","bc1a2790":"4500","58a1c2b9":"4605","533e231f":"4733","4b374cb0":"4850","aba21aa0":"5112","926d4dc7":"5126","1d0abbe8":"5205","a7bd4aaa":"5211","1a4e3797":"5230","4d83fd09":"5412","5518cd1d":"5647","62fa8aa4":"5689","2510fb83":"6262","3179504a":"6767","029f9977":"6823","1bf61c02":"6950","b2d70ba7":"7087","0069a404":"7258","052bd3b6":"7351","a7456010":"7365","9fe3680c":"7394","5308dfd1":"7397","565ee0ad":"7413","871bfb49":"7566","02751dd0":"7717","8847613a":"7847","5d34c69a":"8033","cf5521b5":"8119","f8cc440d":"8226","04b7312d":"8260","750433da":"8402","df379f10":"8498","8ec9172d":"8680","216bef97":"8792","d9dab780":"8994","70aac116":"9079","d4007db6":"9201","d6ed9b8e":"9268","40575fab":"9285","fc9363d2":"9659","53ac7d2d":"9717","e8365100":"9815","a94703ab":"9914"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
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
			var promise = new Promise(function (resolve, reject) {
				installedChunkData = installedChunks[chunkId] = [resolve, reject];
			});
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
        __webpack_require__.O.j = function (chunkId) {
	return installedChunks[chunkId] === 0;
};
// install a JSONP callback for chunk loading
var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
	var chunkIds = data[0];
	var moreModules = data[1];
	var runtime = data[2];
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId,
		chunkId,
		i = 0;
	if (chunkIds.some(function (id) { return installedChunks[id] !== 0 })) {
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
chunkLoadingGlobal.push = webpackJsonpCallback.bind(
	null,
	chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
);

})();
/************************************************************************/
})()
;