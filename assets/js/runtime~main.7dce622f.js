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
          return "assets/js/" + ({"1057": "98725db8","114": "5a3cd577","1221": "329b7b82","1254": "1c63e954","151": "138e0e15","1514": "c56b6afc","1621": "cf9206d4","1925": "37f0d07c","2104": "d7e8eb73","2273": "3d565b9d","2491": "61ed4732","2650": "c1645870","27": "ac6468f7","2802": "23f1d5de","2947": "9bde920f","3005": "a7a95a8a","3233": "42ecb57c","3261": "847ad22e","3432": "5e95c892","3455": "0954da10","3484": "771e6e33","3494": "a4f38dec","3695": "8f1f3ab6","3745": "bb2b3c07","3809": "4133abef","390": "5347b71d","3940": "c0fbcc12","4034": "9d0b4025","4040": "d35339d9","4277": "2b958d9c","4397": "d920f39e","4550": "76242231","4820": "f700c88a","4969": "5f0a05a2","5039": "e2615b34","504": "bced4e4a","5082": "21922693","5112": "aba21aa0","5211": "a7bd4aaa","5230": "1a4e3797","5538": "77523d2d","5870": "c10251a3","5945": "a6edefa9","606": "fd57cc51","647": "4399770d","6518": "36321d29","6563": "7b25b112","6597": "f7170e03","6826": "b74f3db2","6946": "0a45dc6f","6972": "9002ad59","7048": "17896441","7098": "470e0e0f","7353": "75fc1a58","7753": "8fd673e8","7885": "69589054","7929": "8b9d34de","8005": "4edc808e","8190": "98cf39d2","8266": "7b810a03","8375": "9686a783","8428": "d3d81a80","8476": "d2fb79f1","9154": "85bfd125","920": "24cef709","9208": "011ed341","9448": "8f903b9c","9502": "ed9aafd0","9505": "b86b925d","9840": "fd5d3d35","9914": "a94703ab","9983": "1f5ed054",}[chunkId] || chunkId) + "." + {"1057": "42086613","114": "fc511895","1221": "96a9b45a","1254": "556440c9","151": "861efdbb","1514": "bf366fec","1621": "de3b7e1d","1925": "41a968e0","2104": "4bd2d206","2273": "ccc0ffa9","2491": "fe871f46","2650": "ea6ce635","27": "2a180534","2802": "e303856d","2947": "1550c413","3005": "64aad6f1","3233": "3a6f3036","3261": "ab5d1c7b","3432": "00b2c2f6","3455": "cfa410c9","3484": "645045a2","3494": "ebaf49cd","3695": "fdac3183","3745": "4888b045","3809": "aa648fc3","3853": "4ef85965","390": "f68a2f17","3940": "6b8351d6","4034": "a19915d8","4040": "6c27f2fe","4277": "308c9caa","4298": "bde8b36f","4397": "5c605919","4550": "9668105f","4820": "7b6f0ae3","4969": "694bf8d9","5039": "d73254d8","504": "dd3d7f76","5082": "7759dcd1","5112": "d68642ae","5211": "4734c460","5230": "1e23331c","5393": "c9a8f8c4","5538": "bcdc7dee","5870": "cba9b46e","5945": "a2ecd8c0","6021": "b0b71bde","606": "f89da05c","647": "65e5f5fb","6518": "f29b3195","6563": "a747088c","6597": "61e79f5f","6826": "759fa10c","6946": "751d8f0f","6972": "211d9b77","7048": "66cb7ac7","7098": "a2396413","7353": "e51d2489","7753": "dbbefc76","7885": "0d348919","7929": "ffea1227","8005": "0b3abe64","8190": "b8524130","8266": "12ad7dea","8375": "7083dbb2","8428": "4116c142","8476": "36664e9f","8513": "1adaaffa","9154": "1a04e693","920": "89b396e1","9208": "5ceca7c6","9448": "65a2bacc","9502": "c1a97647","9505": "6f87394b","9840": "f019f2bd","9914": "bf850e7b","9983": "d65d6a4c",}[chunkId] + ".js";
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
	return "ad890bd79a51203d";
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
__webpack_require__.p = "/biostar2-docs/";

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
__webpack_require__.gca = function(chunkId) { chunkId = {"17896441":"7048","21922693":"5082","69589054":"7885","76242231":"4550","ac6468f7":"27","5a3cd577":"114","138e0e15":"151","5347b71d":"390","bced4e4a":"504","fd57cc51":"606","4399770d":"647","24cef709":"920","98725db8":"1057","329b7b82":"1221","1c63e954":"1254","c56b6afc":"1514","cf9206d4":"1621","37f0d07c":"1925","d7e8eb73":"2104","3d565b9d":"2273","61ed4732":"2491","c1645870":"2650","23f1d5de":"2802","9bde920f":"2947","a7a95a8a":"3005","42ecb57c":"3233","847ad22e":"3261","5e95c892":"3432","0954da10":"3455","771e6e33":"3484","a4f38dec":"3494","8f1f3ab6":"3695","bb2b3c07":"3745","4133abef":"3809","c0fbcc12":"3940","9d0b4025":"4034","d35339d9":"4040","2b958d9c":"4277","d920f39e":"4397","f700c88a":"4820","5f0a05a2":"4969","e2615b34":"5039","aba21aa0":"5112","a7bd4aaa":"5211","1a4e3797":"5230","77523d2d":"5538","c10251a3":"5870","a6edefa9":"5945","36321d29":"6518","7b25b112":"6563","f7170e03":"6597","b74f3db2":"6826","0a45dc6f":"6946","9002ad59":"6972","470e0e0f":"7098","75fc1a58":"7353","8fd673e8":"7753","8b9d34de":"7929","4edc808e":"8005","98cf39d2":"8190","7b810a03":"8266","9686a783":"8375","d3d81a80":"8428","d2fb79f1":"8476","85bfd125":"9154","011ed341":"9208","8f903b9c":"9448","ed9aafd0":"9502","b86b925d":"9505","fd5d3d35":"9840","a94703ab":"9914","1f5ed054":"9983"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
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