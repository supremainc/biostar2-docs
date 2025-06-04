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
  return "assets/js/" + ({"1057": "98725db8","114": "5a3cd577","1221": "329b7b82","1254": "1c63e954","151": "138e0e15","1514": "c56b6afc","1530": "ef9a117b","1621": "cf9206d4","1918": "edd60a97","1925": "37f0d07c","202": "82ecb0c5","2104": "d7e8eb73","2273": "3d565b9d","2491": "61ed4732","2650": "c1645870","27": "ac6468f7","2802": "23f1d5de","2947": "9bde920f","3005": "a7a95a8a","3233": "42ecb57c","3261": "847ad22e","3432": "5e95c892","3455": "0954da10","3484": "771e6e33","3494": "a4f38dec","3695": "8f1f3ab6","3745": "bb2b3c07","3809": "4133abef","390": "5347b71d","3940": "c0fbcc12","4034": "9d0b4025","4040": "d35339d9","4277": "2b958d9c","4397": "d920f39e","4550": "76242231","4813": "9d194c86","4820": "f700c88a","4969": "5f0a05a2","5039": "e2615b34","504": "bced4e4a","5082": "21922693","5112": "aba21aa0","5211": "a7bd4aaa","5230": "1a4e3797","5412": "4d83fd09","5538": "77523d2d","5870": "c10251a3","5945": "a6edefa9","606": "fd57cc51","647": "4399770d","6518": "36321d29","6563": "7b25b112","6597": "f7170e03","6823": "029f9977","6826": "b74f3db2","6946": "0a45dc6f","6972": "9002ad59","7048": "17896441","7098": "470e0e0f","7353": "75fc1a58","7365": "a7456010","7397": "5308dfd1","7566": "871bfb49","7753": "8fd673e8","7885": "69589054","7929": "8b9d34de","8005": "4edc808e","8033": "5d34c69a","8190": "98cf39d2","8266": "7b810a03","8375": "9686a783","8428": "d3d81a80","8476": "d2fb79f1","9154": "85bfd125","920": "24cef709","9208": "011ed341","9448": "8f903b9c","9502": "ed9aafd0","9505": "b86b925d","9840": "fd5d3d35","9914": "a94703ab","9983": "1f5ed054",}[chunkId] || chunkId) + "." + {"1057": "bd5b44a3","114": "e81e58f9","1221": "3be215f4","1254": "c5f60c44","151": "9c4429f3","1514": "425d56ef","1530": "910e7cae","1621": "2c65806e","1854": "c9486f1f","1918": "697f9bb0","1925": "5eb10660","202": "54593a3a","2104": "c01b4988","2273": "70fd3ca1","2491": "210537a6","2650": "e3e925b4","27": "f5f6f41e","2802": "a93dabde","2947": "4f8304a5","3005": "1be874af","3233": "a5013e11","3261": "66465f47","3432": "dbb6673b","3455": "a98ae200","3484": "d01856c6","3494": "919ef5ae","3695": "a7fcd3b1","3745": "1eacecac","3809": "c60e317c","390": "4b6f2723","3940": "c857be69","4034": "35eec4b0","4040": "dcd654f7","4277": "69ac754e","4397": "b7d846ff","4550": "76552f31","4813": "f2c0cbf4","4820": "4b5470f5","4969": "610a7276","5039": "41437721","504": "196f0d9d","5082": "c3782ccd","5112": "46cf8f42","5211": "32aa53f4","5230": "3dd44561","5412": "bcb10701","5538": "0b83948b","5870": "c17e1c6a","5945": "79edb8d8","6021": "be727d04","606": "1de7efa8","647": "d43650aa","6518": "f37ee071","6563": "bcd2eba2","6597": "570c7a5c","6613": "502bdc9f","6823": "bcb14d8d","6826": "00961b29","6946": "5ffb0ada","6972": "7530cb11","7048": "ed55f3a1","7098": "4d7da16d","7353": "042133cd","7365": "027d8443","7397": "5568c109","7566": "698f9d26","7753": "d6135146","7885": "dbec4a57","7929": "ffc7c6be","8005": "291aca53","8033": "02a0b699","8190": "4a114240","8266": "7bb7695f","8375": "81971735","8428": "f73c615b","8476": "a0759b42","8499": "5fcd3e72","8513": "1bf9fee4","9154": "2af8b028","9196": "d52147f0","920": "5ba60d6c","9208": "7845df0e","9448": "b28cbb1b","9502": "cdcb887e","9505": "0b3d03dc","9840": "a8b8f2cc","9914": "0cc0f732","9983": "96713eb7",}[chunkId] + ".js"
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
__webpack_require__.h = () => ("0d3878e99a5c8193")
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
__webpack_require__.p = "/biostar2-docs/";
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.3.12")
})();
// webpack/runtime/ChunkAssetRuntimeModule
(() => {
// Docusaurus function to get chunk asset
__webpack_require__.gca = function(chunkId) { chunkId = {"17896441":"7048","21922693":"5082","69589054":"7885","76242231":"4550","ac6468f7":"27","5a3cd577":"114","138e0e15":"151","82ecb0c5":"202","5347b71d":"390","bced4e4a":"504","fd57cc51":"606","4399770d":"647","24cef709":"920","98725db8":"1057","329b7b82":"1221","1c63e954":"1254","c56b6afc":"1514","ef9a117b":"1530","cf9206d4":"1621","edd60a97":"1918","37f0d07c":"1925","d7e8eb73":"2104","3d565b9d":"2273","61ed4732":"2491","c1645870":"2650","23f1d5de":"2802","9bde920f":"2947","a7a95a8a":"3005","42ecb57c":"3233","847ad22e":"3261","5e95c892":"3432","0954da10":"3455","771e6e33":"3484","a4f38dec":"3494","8f1f3ab6":"3695","bb2b3c07":"3745","4133abef":"3809","c0fbcc12":"3940","9d0b4025":"4034","d35339d9":"4040","2b958d9c":"4277","d920f39e":"4397","9d194c86":"4813","f700c88a":"4820","5f0a05a2":"4969","e2615b34":"5039","aba21aa0":"5112","a7bd4aaa":"5211","1a4e3797":"5230","4d83fd09":"5412","77523d2d":"5538","c10251a3":"5870","a6edefa9":"5945","36321d29":"6518","7b25b112":"6563","f7170e03":"6597","029f9977":"6823","b74f3db2":"6826","0a45dc6f":"6946","9002ad59":"6972","470e0e0f":"7098","75fc1a58":"7353","a7456010":"7365","5308dfd1":"7397","871bfb49":"7566","8fd673e8":"7753","8b9d34de":"7929","4edc808e":"8005","5d34c69a":"8033","98cf39d2":"8190","7b810a03":"8266","9686a783":"8375","d3d81a80":"8428","d2fb79f1":"8476","85bfd125":"9154","011ed341":"9208","8f903b9c":"9448","ed9aafd0":"9502","b86b925d":"9505","fd5d3d35":"9840","a94703ab":"9914","1f5ed054":"9983"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
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