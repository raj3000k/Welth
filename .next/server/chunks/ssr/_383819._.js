module.exports = {

"[project]/node_modules/dequal/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "dequal": (()=>dequal)
});
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
    for (key of iter.keys()){
        if (dequal(key, tar)) return key;
    }
}
function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!dequal(len[1], bar.get(tmp))) {
                    return false;
                }
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}}),
"[project]/node_modules/swr/dist/index/config-client-Bi4rgVRk.mjs (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "S": (()=>S)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call S() from the server but S is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/swr/dist/index/config-client-Bi4rgVRk.mjs <module evaluation>", "S");
}}),
"[project]/node_modules/swr/dist/index/config-client-Bi4rgVRk.mjs (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "S": (()=>S)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call S() from the server but S is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/swr/dist/index/config-client-Bi4rgVRk.mjs", "S");
}}),
"[project]/node_modules/swr/dist/index/config-client-Bi4rgVRk.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$config$2d$client$2d$Bi4rgVRk$2e$mjs__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/index/config-client-Bi4rgVRk.mjs (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$config$2d$client$2d$Bi4rgVRk$2e$mjs__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/swr/dist/index/config-client-Bi4rgVRk.mjs (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$config$2d$client$2d$Bi4rgVRk$2e$mjs__$28$client__proxy$29$__);
}}),
"[project]/node_modules/swr/dist/index/react-server.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "unstable_serialize": (()=>unstable_serialize)
});
;
// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const isObjectType = (value, type)=>OBJECT.prototype.toString.call(value) === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const isDate = isObjectType(arg, 'Date');
    const isRegex = isObjectType(arg, 'RegExp');
    const isPlainObject = isObjectType(arg, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
const unstable_serialize = (key)=>serialize(key)[0];
;
}}),
"[project]/node_modules/swr/dist/index/react-server.mjs [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SWRConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$config$2d$client$2d$Bi4rgVRk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["S"]),
    "unstable_serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unstable_serialize"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$config$2d$client$2d$Bi4rgVRk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/dist/index/config-client-Bi4rgVRk.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/index/react-server.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/swr/dist/_internal/constants.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "INFINITE_PREFIX": (()=>INFINITE_PREFIX)
});
const INFINITE_PREFIX = '$inf$';
;
}}),
"[project]/node_modules/swr/dist/infinite/react-server.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "unstable_serialize": (()=>unstable_serialize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/dist/_internal/constants.mjs [app-rsc] (ecmascript)");
;
// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const isObjectType = (value, type)=>OBJECT.prototype.toString.call(value) === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const isDate = isObjectType(arg, 'Date');
    const isRegex = isObjectType(arg, 'RegExp');
    const isPlainObject = isObjectType(arg, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
const getFirstPageKey = (getKey)=>{
    return serialize(getKey ? getKey(0, null) : null)[0];
};
const unstable_serialize = (getKey)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_PREFIX"] + getFirstPageKey(getKey);
};
;
}}),
"[project]/node_modules/swr/dist/index/react-server.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/index/react-server.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/swr/dist/index/react-server.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SWRConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SWRConfig"]),
    "unstable_serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["unstable_serialize"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/index/react-server.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/index/react-server.mjs [app-rsc] (ecmascript) <exports>");
}}),
"[project]/node_modules/@clerk/shared/dist/react/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ClerkInstanceContext": (()=>ClerkInstanceContext),
    "ClientContext": (()=>ClientContext),
    "OptionsContext": (()=>OptionsContext),
    "OrganizationProvider": (()=>OrganizationProvider),
    "SessionContext": (()=>SessionContext),
    "UserContext": (()=>UserContext),
    "assertContextExists": (()=>assertContextExists),
    "createContextAndHook": (()=>createContextAndHook),
    "isDeeplyEqual": (()=>isDeeplyEqual),
    "useAssertWrappedByClerkProvider": (()=>useAssertWrappedByClerkProvider),
    "useClerk": (()=>useClerk),
    "useClerkInstanceContext": (()=>useClerkInstanceContext),
    "useClientContext": (()=>useClientContext),
    "useDeepEqualMemo": (()=>useDeepEqualMemo),
    "useOptionsContext": (()=>useOptionsContext),
    "useOrganization": (()=>useOrganization),
    "useOrganizationContext": (()=>useOrganizationContext),
    "useOrganizationList": (()=>useOrganizationList),
    "useReverification": (()=>useReverification),
    "useSafeLayoutEffect": (()=>useSafeLayoutEffect),
    "useSession": (()=>useSession),
    "useSessionContext": (()=>useSessionContext),
    "useSessionList": (()=>useSessionList),
    "useUser": (()=>useUser),
    "useUserContext": (()=>useUserContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WWQWD4PM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-WWQWD4PM.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$BS4QFUKM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-BS4QFUKM.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3V6DMG3I$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-3V6DMG3I.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$5C3LHKBE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-5C3LHKBE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$X3VKQCBG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-X3VKQCBG.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
// src/react/hooks/createContextAndHook.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
// src/react/hooks/useDeepEqualMemo.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/dequal/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/index/react-server.mjs [app-rsc] (ecmascript) <exports>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/dist/infinite/react-server.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/dist/index/react-server.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function assertContextExists(contextVal, msgOrCtx) {
    if (!contextVal) {
        throw typeof msgOrCtx === "string" ? new Error(msgOrCtx) : new Error(`${msgOrCtx.displayName} not found`);
    }
}
var createContextAndHook = (displayName, options)=>{
    const { assertCtxFn = assertContextExists } = options || {};
    const Ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createContext(void 0);
    Ctx.displayName = displayName;
    const useCtx = ()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useContext(Ctx);
        assertCtxFn(ctx, `${displayName} not found`);
        return ctx.value;
    };
    const useCtxWithoutGuarantee = ()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useContext(Ctx);
        return ctx ? ctx.value : {};
    };
    return [
        Ctx,
        useCtx,
        useCtxWithoutGuarantee
    ];
};
;
// src/react/clerk-swr.ts
var clerk_swr_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__export"])(clerk_swr_exports, {
    useSWR: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["default"],
    useSWRInfinite: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__reExport"])(clerk_swr_exports, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__);
;
;
;
// src/react/contexts.tsx
var [ClerkInstanceContext, useClerkInstanceContext] = createContextAndHook("ClerkInstanceContext");
var [UserContext, useUserContext] = createContextAndHook("UserContext");
var [ClientContext, useClientContext] = createContextAndHook("ClientContext");
var [SessionContext, useSessionContext] = createContextAndHook("SessionContext");
var OptionsContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createContext({});
function useOptionsContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useContext(OptionsContext);
    if (context === void 0) {
        throw new Error("useOptions must be used within an OptionsContext");
    }
    return context;
}
var [OrganizationContextInternal, useOrganizationContext] = createContextAndHook("OrganizationContext");
var OrganizationProvider = ({ children, organization, swrConfig })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(clerk_swr_exports.SWRConfig, {
        value: swrConfig
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(OrganizationContextInternal.Provider, {
        value: {
            value: {
                organization
            }
        }
    }, children));
};
function useAssertWrappedByClerkProvider(displayNameOrFn) {
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useContext(ClerkInstanceContext);
    if (!ctx) {
        if (typeof displayNameOrFn === "function") {
            displayNameOrFn();
            return;
        }
        throw new Error(`${displayNameOrFn} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim());
    }
}
;
function getDifferentKeys(obj1, obj2) {
    const keysSet = new Set(Object.keys(obj2));
    const differentKeysObject = {};
    for (const key1 of Object.keys(obj1)){
        if (!keysSet.has(key1)) {
            differentKeysObject[key1] = obj1[key1];
        }
    }
    return differentKeysObject;
}
var useWithSafeValues = (params, defaultValues)=>{
    var _a, _b, _c;
    const shouldUseDefaults = typeof params === "boolean" && params;
    const initialPageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(shouldUseDefaults ? defaultValues.initialPage : (_a = params == null ? void 0 : params.initialPage) != null ? _a : defaultValues.initialPage);
    const pageSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(shouldUseDefaults ? defaultValues.pageSize : (_b = params == null ? void 0 : params.pageSize) != null ? _b : defaultValues.pageSize);
    const newObj = {};
    for (const key of Object.keys(defaultValues)){
        newObj[key] = shouldUseDefaults ? defaultValues[key] : (_c = params == null ? void 0 : params[key]) != null ? _c : defaultValues[key];
    }
    return {
        ...newObj,
        initialPage: initialPageRef.current,
        pageSize: pageSizeRef.current
    };
};
var cachingSWROptions = {
    dedupingInterval: 1e3 * 60,
    focusThrottleInterval: 1e3 * 60 * 2
};
var usePagesOrInfinite = (params, fetcher, config, cacheKeys)=>{
    var _a, _b, _c, _d, _e, _f, _g;
    const [paginatedPage, setPaginatedPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])((_a = params.initialPage) != null ? _a : 1);
    const initialPageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])((_b = params.initialPage) != null ? _b : 1);
    const pageSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])((_c = params.pageSize) != null ? _c : 10);
    const enabled = (_d = config.enabled) != null ? _d : true;
    const triggerInfinite = (_e = config.infinite) != null ? _e : false;
    const keepPreviousData = (_f = config.keepPreviousData) != null ? _f : false;
    const pagesCacheKey = {
        ...cacheKeys,
        ...params,
        initialPage: paginatedPage,
        pageSize: pageSizeRef.current
    };
    const { data: swrData, isValidating: swrIsValidating, isLoading: swrIsLoading, error: swrError, mutate: swrMutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["default"])(!triggerInfinite && !!fetcher && enabled ? pagesCacheKey : null, (cacheKeyParams)=>{
        const requestParams = getDifferentKeys(cacheKeyParams, cacheKeys);
        return fetcher == null ? void 0 : fetcher(requestParams);
    }, {
        keepPreviousData,
        ...cachingSWROptions
    });
    const { data: swrInfiniteData, isLoading: swrInfiniteIsLoading, isValidating: swrInfiniteIsValidating, error: swrInfiniteError, size, setSize, mutate: swrInfiniteMutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$react$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((pageIndex)=>{
        if (!triggerInfinite || !enabled) {
            return null;
        }
        return {
            ...params,
            ...cacheKeys,
            initialPage: initialPageRef.current + pageIndex,
            pageSize: pageSizeRef.current
        };
    }, (cacheKeyParams)=>{
        const requestParams = getDifferentKeys(cacheKeyParams, cacheKeys);
        return fetcher == null ? void 0 : fetcher(requestParams);
    }, cachingSWROptions);
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (triggerInfinite) {
            return size;
        }
        return paginatedPage;
    }, [
        triggerInfinite,
        size,
        paginatedPage
    ]);
    const fetchPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((numberOrgFn)=>{
        if (triggerInfinite) {
            void setSize(numberOrgFn);
            return;
        }
        return setPaginatedPage(numberOrgFn);
    }, [
        setSize
    ]);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        var _a2, _b2;
        if (triggerInfinite) {
            return (_a2 = swrInfiniteData == null ? void 0 : swrInfiniteData.map((a)=>a == null ? void 0 : a.data).flat()) != null ? _a2 : [];
        }
        return (_b2 = swrData == null ? void 0 : swrData.data) != null ? _b2 : [];
    }, [
        triggerInfinite,
        swrData,
        swrInfiniteData
    ]);
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        var _a2, _b2;
        if (triggerInfinite) {
            return ((_a2 = swrInfiniteData == null ? void 0 : swrInfiniteData[(swrInfiniteData == null ? void 0 : swrInfiniteData.length) - 1]) == null ? void 0 : _a2.total_count) || 0;
        }
        return (_b2 = swrData == null ? void 0 : swrData.total_count) != null ? _b2 : 0;
    }, [
        triggerInfinite,
        swrData,
        swrInfiniteData
    ]);
    const isLoading = triggerInfinite ? swrInfiniteIsLoading : swrIsLoading;
    const isFetching = triggerInfinite ? swrInfiniteIsValidating : swrIsValidating;
    const error = (_g = triggerInfinite ? swrInfiniteError : swrError) != null ? _g : null;
    const isError = !!error;
    const fetchNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        fetchPage((n)=>Math.max(0, n + 1));
    }, [
        fetchPage
    ]);
    const fetchPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        fetchPage((n)=>Math.max(0, n - 1));
    }, [
        fetchPage
    ]);
    const offsetCount = (initialPageRef.current - 1) * pageSizeRef.current;
    const pageCount = Math.ceil((count - offsetCount) / pageSizeRef.current);
    const hasNextPage = count - offsetCount * pageSizeRef.current > page * pageSizeRef.current;
    const hasPreviousPage = (page - 1) * pageSizeRef.current > offsetCount * pageSizeRef.current;
    const setData = triggerInfinite ? (value)=>swrInfiniteMutate(value, {
            revalidate: false
        }) : (value)=>swrMutate(value, {
            revalidate: false
        });
    const revalidate = triggerInfinite ? ()=>swrInfiniteMutate() : ()=>swrMutate();
    return {
        data,
        count,
        error,
        isLoading,
        isFetching,
        isError,
        page,
        pageCount,
        fetchPage,
        fetchNext,
        fetchPrevious,
        hasNextPage,
        hasPreviousPage,
        // Let the hook return type define this type
        revalidate,
        // Let the hook return type define this type
        setData
    };
};
// src/react/hooks/useOrganization.tsx
var undefinedPaginatedResource = {
    data: void 0,
    count: void 0,
    error: void 0,
    isLoading: false,
    isFetching: false,
    isError: false,
    page: void 0,
    pageCount: void 0,
    fetchPage: void 0,
    fetchNext: void 0,
    fetchPrevious: void 0,
    hasNextPage: false,
    hasPreviousPage: false,
    revalidate: void 0,
    setData: void 0
};
var useOrganization = (params)=>{
    var _a;
    const { domains: domainListParams, membershipRequests: membershipRequestsListParams, memberships: membersListParams, invitations: invitationsListParams } = params || {};
    useAssertWrappedByClerkProvider("useOrganization");
    const { organization } = useOrganizationContext();
    const session = useSessionContext();
    const domainSafeValues = useWithSafeValues(domainListParams, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false,
        enrollmentMode: void 0
    });
    const membershipRequestSafeValues = useWithSafeValues(membershipRequestsListParams, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const membersSafeValues = useWithSafeValues(membersListParams, {
        initialPage: 1,
        pageSize: 10,
        role: void 0,
        keepPreviousData: false,
        infinite: false,
        query: void 0
    });
    const invitationsSafeValues = useWithSafeValues(invitationsListParams, {
        initialPage: 1,
        pageSize: 10,
        status: [
            "pending"
        ],
        keepPreviousData: false,
        infinite: false
    });
    const clerk = useClerkInstanceContext();
    (_a = clerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WWQWD4PM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useOrganization"));
    const domainParams = typeof domainListParams === "undefined" ? void 0 : {
        initialPage: domainSafeValues.initialPage,
        pageSize: domainSafeValues.pageSize,
        enrollmentMode: domainSafeValues.enrollmentMode
    };
    const membershipRequestParams = typeof membershipRequestsListParams === "undefined" ? void 0 : {
        initialPage: membershipRequestSafeValues.initialPage,
        pageSize: membershipRequestSafeValues.pageSize,
        status: membershipRequestSafeValues.status
    };
    const membersParams = typeof membersListParams === "undefined" ? void 0 : {
        initialPage: membersSafeValues.initialPage,
        pageSize: membersSafeValues.pageSize,
        role: membersSafeValues.role,
        query: membersSafeValues.query
    };
    const invitationsParams = typeof invitationsListParams === "undefined" ? void 0 : {
        initialPage: invitationsSafeValues.initialPage,
        pageSize: invitationsSafeValues.pageSize,
        status: invitationsSafeValues.status
    };
    const domains = usePagesOrInfinite({
        ...domainParams
    }, organization == null ? void 0 : organization.getDomains, {
        keepPreviousData: domainSafeValues.keepPreviousData,
        infinite: domainSafeValues.infinite,
        enabled: !!domainParams
    }, {
        type: "domains",
        organizationId: organization == null ? void 0 : organization.id
    });
    const membershipRequests = usePagesOrInfinite({
        ...membershipRequestParams
    }, organization == null ? void 0 : organization.getMembershipRequests, {
        keepPreviousData: membershipRequestSafeValues.keepPreviousData,
        infinite: membershipRequestSafeValues.infinite,
        enabled: !!membershipRequestParams
    }, {
        type: "membershipRequests",
        organizationId: organization == null ? void 0 : organization.id
    });
    const memberships = usePagesOrInfinite(membersParams || {}, organization == null ? void 0 : organization.getMemberships, {
        keepPreviousData: membersSafeValues.keepPreviousData,
        infinite: membersSafeValues.infinite,
        enabled: !!membersParams
    }, {
        type: "members",
        organizationId: organization == null ? void 0 : organization.id
    });
    const invitations = usePagesOrInfinite({
        ...invitationsParams
    }, organization == null ? void 0 : organization.getInvitations, {
        keepPreviousData: invitationsSafeValues.keepPreviousData,
        infinite: invitationsSafeValues.infinite,
        enabled: !!invitationsParams
    }, {
        type: "invitations",
        organizationId: organization == null ? void 0 : organization.id
    });
    if (organization === void 0) {
        return {
            isLoaded: false,
            organization: void 0,
            membership: void 0,
            domains: undefinedPaginatedResource,
            membershipRequests: undefinedPaginatedResource,
            memberships: undefinedPaginatedResource,
            invitations: undefinedPaginatedResource
        };
    }
    if (organization === null) {
        return {
            isLoaded: true,
            organization: null,
            membership: null,
            domains: null,
            membershipRequests: null,
            memberships: null,
            invitations: null
        };
    }
    if (!clerk.loaded && organization) {
        return {
            isLoaded: true,
            organization,
            membership: void 0,
            domains: undefinedPaginatedResource,
            membershipRequests: undefinedPaginatedResource,
            memberships: undefinedPaginatedResource,
            invitations: undefinedPaginatedResource
        };
    }
    return {
        isLoaded: clerk.loaded,
        organization,
        membership: getCurrentOrganizationMembership(session.user.organizationMemberships, organization.id),
        // your membership in the current org
        domains,
        membershipRequests,
        memberships,
        invitations
    };
};
function getCurrentOrganizationMembership(organizationMemberships, activeOrganizationId) {
    return organizationMemberships.find((organizationMembership)=>organizationMembership.organization.id === activeOrganizationId);
}
// src/react/hooks/useOrganizationList.tsx
var undefinedPaginatedResource2 = {
    data: void 0,
    count: void 0,
    error: void 0,
    isLoading: false,
    isFetching: false,
    isError: false,
    page: void 0,
    pageCount: void 0,
    fetchPage: void 0,
    fetchNext: void 0,
    fetchPrevious: void 0,
    hasNextPage: false,
    hasPreviousPage: false,
    revalidate: void 0,
    setData: void 0
};
var useOrganizationList = (params)=>{
    var _a;
    const { userMemberships, userInvitations, userSuggestions } = params || {};
    useAssertWrappedByClerkProvider("useOrganizationList");
    const userMembershipsSafeValues = useWithSafeValues(userMemberships, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false
    });
    const userInvitationsSafeValues = useWithSafeValues(userInvitations, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const userSuggestionsSafeValues = useWithSafeValues(userSuggestions, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const clerk = useClerkInstanceContext();
    const user = useUserContext();
    (_a = clerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WWQWD4PM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useOrganizationList"));
    const userMembershipsParams = typeof userMemberships === "undefined" ? void 0 : {
        initialPage: userMembershipsSafeValues.initialPage,
        pageSize: userMembershipsSafeValues.pageSize
    };
    const userInvitationsParams = typeof userInvitations === "undefined" ? void 0 : {
        initialPage: userInvitationsSafeValues.initialPage,
        pageSize: userInvitationsSafeValues.pageSize,
        status: userInvitationsSafeValues.status
    };
    const userSuggestionsParams = typeof userSuggestions === "undefined" ? void 0 : {
        initialPage: userSuggestionsSafeValues.initialPage,
        pageSize: userSuggestionsSafeValues.pageSize,
        status: userSuggestionsSafeValues.status
    };
    const isClerkLoaded = !!(clerk.loaded && user);
    const memberships = usePagesOrInfinite(userMembershipsParams || {}, user == null ? void 0 : user.getOrganizationMemberships, {
        keepPreviousData: userMembershipsSafeValues.keepPreviousData,
        infinite: userMembershipsSafeValues.infinite,
        enabled: !!userMembershipsParams
    }, {
        type: "userMemberships",
        userId: user == null ? void 0 : user.id
    });
    const invitations = usePagesOrInfinite({
        ...userInvitationsParams
    }, user == null ? void 0 : user.getOrganizationInvitations, {
        keepPreviousData: userInvitationsSafeValues.keepPreviousData,
        infinite: userInvitationsSafeValues.infinite,
        enabled: !!userInvitationsParams
    }, {
        type: "userInvitations",
        userId: user == null ? void 0 : user.id
    });
    const suggestions = usePagesOrInfinite({
        ...userSuggestionsParams
    }, user == null ? void 0 : user.getOrganizationSuggestions, {
        keepPreviousData: userSuggestionsSafeValues.keepPreviousData,
        infinite: userSuggestionsSafeValues.infinite,
        enabled: !!userSuggestionsParams
    }, {
        type: "userSuggestions",
        userId: user == null ? void 0 : user.id
    });
    if (!isClerkLoaded) {
        return {
            isLoaded: false,
            createOrganization: void 0,
            setActive: void 0,
            userMemberships: undefinedPaginatedResource2,
            userInvitations: undefinedPaginatedResource2,
            userSuggestions: undefinedPaginatedResource2
        };
    }
    return {
        isLoaded: isClerkLoaded,
        setActive: clerk.setActive,
        createOrganization: clerk.createOrganization,
        userMemberships: memberships,
        userInvitations: invitations,
        userSuggestions: suggestions
    };
};
;
var useSafeLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect;
// src/react/hooks/useSession.ts
var useSession = ()=>{
    useAssertWrappedByClerkProvider("useSession");
    const session = useSessionContext();
    if (session === void 0) {
        return {
            isLoaded: false,
            isSignedIn: void 0,
            session: void 0
        };
    }
    if (session === null) {
        return {
            isLoaded: true,
            isSignedIn: false,
            session: null
        };
    }
    return {
        isLoaded: true,
        isSignedIn: true,
        session
    };
};
// src/react/hooks/useSessionList.ts
var useSessionList = ()=>{
    useAssertWrappedByClerkProvider("useSessionList");
    const isomorphicClerk = useClerkInstanceContext();
    const client = useClientContext();
    if (!client) {
        return {
            isLoaded: false,
            sessions: void 0,
            setActive: void 0
        };
    }
    return {
        isLoaded: true,
        sessions: client.sessions,
        setActive: isomorphicClerk.setActive
    };
};
// src/react/hooks/useUser.ts
function useUser() {
    useAssertWrappedByClerkProvider("useUser");
    const user = useUserContext();
    if (user === void 0) {
        return {
            isLoaded: false,
            isSignedIn: void 0,
            user: void 0
        };
    }
    if (user === null) {
        return {
            isLoaded: true,
            isSignedIn: false,
            user: null
        };
    }
    return {
        isLoaded: true,
        isSignedIn: true,
        user
    };
}
// src/react/hooks/useClerk.ts
var useClerk = ()=>{
    useAssertWrappedByClerkProvider("useClerk");
    return useClerkInstanceContext();
};
;
;
var useDeepEqualMemoize = (value)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useRef(value);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dequal"])(value, ref.current)) {
        ref.current = value;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(()=>ref.current, [
        ref.current
    ]);
};
var useDeepEqualMemo = (factory, dependencyArray)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(factory, useDeepEqualMemoize(dependencyArray));
};
var isDeeplyEqual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dequal"];
;
var CLERK_API_REVERIFICATION_ERROR_CODE = "session_reverification_required";
async function resolveResult(result) {
    try {
        const r = await result;
        if (r instanceof Response) {
            return r.json();
        }
        return r;
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3V6DMG3I$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isClerkAPIResponseError"])(e) && e.errors.find(({ code })=>code === CLERK_API_REVERIFICATION_ERROR_CODE)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$5C3LHKBE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reverificationError"])();
        }
        throw e;
    }
}
function createReverificationHandler(params) {
    function assertReverification(fetcher) {
        return async (...args)=>{
            var _a, _b;
            let result = await resolveResult(fetcher(...args));
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$5C3LHKBE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isReverificationHint"])(result)) {
                const resolvers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$BS4QFUKM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDeferredPromise"])();
                const isValidMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$X3VKQCBG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateReverificationConfig"])((_a = result.clerk_error.metadata) == null ? void 0 : _a.reverification);
                (_b = params.openUIComponent) == null ? void 0 : _b.call(params, {
                    level: isValidMetadata ? isValidMetadata().level : void 0,
                    afterVerification () {
                        resolvers.resolve(true);
                    },
                    afterVerificationCancelled () {
                        resolvers.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3V6DMG3I$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClerkRuntimeError"]("User cancelled attempted verification", {
                            code: "reverification_cancelled"
                        }));
                    }
                });
                try {
                    await resolvers.promise;
                } catch (e) {
                    if (params.onCancel) {
                        params.onCancel();
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3V6DMG3I$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isClerkRuntimeError"])(e) && e.code === "reverification_cancelled" && params.throwOnCancel) {
                        throw e;
                    }
                    return null;
                }
                result = await resolveResult(fetcher(...args));
            }
            return result;
        };
    }
    return assertReverification;
}
function useReverification(fetcher, options) {
    const { __internal_openReverification } = useClerk();
    const fetcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(fetcher);
    const optionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(options);
    const handleReverification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const handler = createReverificationHandler({
            openUIComponent: __internal_openReverification,
            ...optionsRef.current
        })(fetcherRef.current);
        return [
            handler
        ];
    }, [
        __internal_openReverification,
        fetcherRef.current,
        optionsRef.current
    ]);
    useSafeLayoutEffect(()=>{
        fetcherRef.current = fetcher;
        optionsRef.current = options;
    });
    return handleReverification;
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@clerk/clerk-react/dist/chunk-YAOP3CPI.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/errors/errorThrower.ts
__turbopack_esm__({
    "AuthContext": (()=>AuthContext),
    "AuthenticateWithRedirectCallback": (()=>AuthenticateWithRedirectCallback),
    "ClerkLoaded": (()=>ClerkLoaded),
    "ClerkLoading": (()=>ClerkLoading),
    "IsomorphicClerkContext": (()=>IsomorphicClerkContext),
    "MultisessionAppSupport": (()=>MultisessionAppSupport),
    "Protect": (()=>Protect),
    "RedirectToCreateOrganization": (()=>RedirectToCreateOrganization),
    "RedirectToOrganizationProfile": (()=>RedirectToOrganizationProfile),
    "RedirectToSignIn": (()=>RedirectToSignIn),
    "RedirectToSignUp": (()=>RedirectToSignUp),
    "RedirectToUserProfile": (()=>RedirectToUserProfile),
    "SignedIn": (()=>SignedIn),
    "SignedOut": (()=>SignedOut),
    "customLinkWrongProps": (()=>customLinkWrongProps),
    "customMenuItemsIgnoredComponent": (()=>customMenuItemsIgnoredComponent),
    "customPageWrongProps": (()=>customPageWrongProps),
    "customPagesIgnoredComponent": (()=>customPagesIgnoredComponent),
    "errorThrower": (()=>errorThrower),
    "incompatibleRoutingWithPathProvidedError": (()=>incompatibleRoutingWithPathProvidedError),
    "multipleChildrenInButtonComponent": (()=>multipleChildrenInButtonComponent),
    "multipleClerkProvidersError": (()=>multipleClerkProvidersError),
    "noPathProvidedError": (()=>noPathProvidedError),
    "organizationProfileLinkRenderedError": (()=>organizationProfileLinkRenderedError),
    "organizationProfilePageRenderedError": (()=>organizationProfilePageRenderedError),
    "setErrorThrowerOptions": (()=>setErrorThrowerOptions),
    "unsupportedNonBrowserDomainOrProxyUrlFunction": (()=>unsupportedNonBrowserDomainOrProxyUrlFunction),
    "useAuth": (()=>useAuth),
    "useDerivedAuth": (()=>useDerivedAuth),
    "useEmailLink": (()=>useEmailLink),
    "useSignIn": (()=>useSignIn),
    "useSignUp": (()=>useSignUp),
    "userButtonIgnoredComponent": (()=>userButtonIgnoredComponent),
    "userButtonMenuActionRenderedError": (()=>userButtonMenuActionRenderedError),
    "userButtonMenuItemLinkWrongProps": (()=>userButtonMenuItemLinkWrongProps),
    "userButtonMenuItemsActionWrongsProps": (()=>userButtonMenuItemsActionWrongsProps),
    "userButtonMenuItemsRenderedError": (()=>userButtonMenuItemsRenderedError),
    "userButtonMenuLinkRenderedError": (()=>userButtonMenuLinkRenderedError),
    "userProfileLinkRenderedError": (()=>userProfileLinkRenderedError),
    "userProfilePageRenderedError": (()=>userProfilePageRenderedError),
    "withClerk": (()=>withClerk)
});
// src/hooks/useSignIn.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/react/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WWQWD4PM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-WWQWD4PM.mjs [app-rsc] (ecmascript)");
// src/components/withClerk.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
// src/components/controlComponents.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$63SHXGDQ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-63SHXGDQ.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3V6DMG3I$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-3V6DMG3I.mjs [app-rsc] (ecmascript)");
// src/hooks/useAuth.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$X3VKQCBG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-X3VKQCBG.mjs [app-rsc] (ecmascript)");
;
var errorThrower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3V6DMG3I$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildErrorThrower"])({
    packageName: "@clerk/clerk-react"
});
function setErrorThrowerOptions(options) {
    errorThrower.setMessages(options).setPackageName(options);
}
;
;
;
var [AuthContext, useAuthContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContextAndHook"])("AuthContext");
;
var IsomorphicClerkContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClerkInstanceContext"];
var useIsomorphicClerkContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useClerkInstanceContext"];
// src/errors/messages.ts
var multipleClerkProvidersError = "You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.";
var multipleChildrenInButtonComponent = (name)=>`You've passed multiple children components to <${name}/>. You can only pass a single child component or text.`;
var invalidStateError = "Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support";
var unsupportedNonBrowserDomainOrProxyUrlFunction = "Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.";
var userProfilePageRenderedError = "<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.";
var userProfileLinkRenderedError = "<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.";
var organizationProfilePageRenderedError = "<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.";
var organizationProfileLinkRenderedError = "<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.";
var customPagesIgnoredComponent = (componentName)=>`<${componentName} /> can only accept <${componentName}.Page /> and <${componentName}.Link /> as its children. Any other provided component will be ignored.`;
var customPageWrongProps = (componentName)=>`Missing props. <${componentName}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`;
var customLinkWrongProps = (componentName)=>`Missing props. <${componentName}.Link /> component requires the following props: url, label and labelIcon.`;
var noPathProvidedError = (componentName)=>`The <${componentName}/> component uses path-based routing by default unless a different routing strategy is provided using the \`routing\` prop. When path-based routing is used, you need to provide the path where the component is mounted on by using the \`path\` prop. Example: <${componentName} path={'/my-path'} />`;
var incompatibleRoutingWithPathProvidedError = (componentName)=>`The \`path\` prop will only be respected when the Clerk component uses path-based routing. To resolve this error, pass \`routing='path'\` to the <${componentName}/> component, or drop the \`path\` prop to switch to hash-based routing. For more details please refer to our docs: https://clerk.com/docs`;
var userButtonIgnoredComponent = `<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored.`;
var customMenuItemsIgnoredComponent = "<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.";
var userButtonMenuItemsRenderedError = "<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.";
var userButtonMenuActionRenderedError = "<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.";
var userButtonMenuLinkRenderedError = "<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.";
var userButtonMenuItemLinkWrongProps = "Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.";
var userButtonMenuItemsActionWrongsProps = "Missing props. <UserButton.Action /> component requires the following props: label.";
;
var useAssertWrappedByClerkProvider = (source)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useAssertWrappedByClerkProvider"])(()=>{
        errorThrower.throwMissingClerkProviderError({
            source
        });
    });
};
// src/hooks/utils.ts
var clerkLoaded = (isomorphicClerk)=>{
    return new Promise((resolve)=>{
        if (isomorphicClerk.loaded) {
            resolve();
        }
        isomorphicClerk.addOnLoaded(resolve);
    });
};
var createGetToken = (isomorphicClerk)=>{
    return async (options)=>{
        await clerkLoaded(isomorphicClerk);
        if (!isomorphicClerk.session) {
            return null;
        }
        return isomorphicClerk.session.getToken(options);
    };
};
var createSignOut = (isomorphicClerk)=>{
    return async (...args)=>{
        await clerkLoaded(isomorphicClerk);
        return isomorphicClerk.signOut(...args);
    };
};
// src/hooks/useAuth.ts
var useAuth = (initialAuthState = {})=>{
    useAssertWrappedByClerkProvider("useAuth");
    const authContextFromHook = useAuthContext();
    let authContext = authContextFromHook;
    if (authContext.sessionId === void 0 && authContext.userId === void 0) {
        authContext = initialAuthState != null ? initialAuthState : {};
    }
    const { sessionId, userId, actor, orgId, orgRole, orgSlug, orgPermissions, factorVerificationAge } = authContext;
    const isomorphicClerk = useIsomorphicClerkContext();
    const getToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(createGetToken(isomorphicClerk), [
        isomorphicClerk
    ]);
    const signOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(createSignOut(isomorphicClerk), [
        isomorphicClerk
    ]);
    return useDerivedAuth({
        sessionId,
        userId,
        actor,
        orgId,
        orgSlug,
        orgRole,
        getToken,
        signOut,
        orgPermissions,
        factorVerificationAge
    });
};
function useDerivedAuth(authObject) {
    const { sessionId, userId, actor, orgId, orgSlug, orgRole, has, signOut, getToken, orgPermissions, factorVerificationAge } = authObject != null ? authObject : {};
    const derivedHas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((params)=>{
        if (has) {
            return has(params);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$X3VKQCBG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCheckAuthorization"])({
            userId,
            orgId,
            orgRole,
            orgPermissions,
            factorVerificationAge
        })(params);
    }, [
        userId,
        factorVerificationAge,
        orgId,
        orgRole,
        orgPermissions
    ]);
    if (sessionId === void 0 && userId === void 0) {
        return {
            isLoaded: false,
            isSignedIn: void 0,
            sessionId,
            userId,
            actor: void 0,
            orgId: void 0,
            orgRole: void 0,
            orgSlug: void 0,
            has: void 0,
            signOut,
            getToken
        };
    }
    if (sessionId === null && userId === null) {
        return {
            isLoaded: true,
            isSignedIn: false,
            sessionId,
            userId,
            actor: null,
            orgId: null,
            orgRole: null,
            orgSlug: null,
            has: ()=>false,
            signOut,
            getToken
        };
    }
    if (!!sessionId && !!userId && !!orgId && !!orgRole) {
        return {
            isLoaded: true,
            isSignedIn: true,
            sessionId,
            userId,
            actor: actor || null,
            orgId,
            orgRole,
            orgSlug: orgSlug || null,
            has: derivedHas,
            signOut,
            getToken
        };
    }
    if (!!sessionId && !!userId && !orgId) {
        return {
            isLoaded: true,
            isSignedIn: true,
            sessionId,
            userId,
            actor: actor || null,
            orgId: null,
            orgRole: null,
            orgSlug: null,
            has: derivedHas,
            signOut,
            getToken
        };
    }
    return errorThrower.throw(invalidStateError);
}
;
function useEmailLink(resource) {
    const { startEmailLinkFlow, cancelEmailLinkFlow } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(()=>resource.createEmailLinkFlow(), [
        resource
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        return cancelEmailLinkFlow;
    }, []);
    return {
        startEmailLinkFlow,
        cancelEmailLinkFlow
    };
}
;
;
var useSignIn = ()=>{
    var _a;
    useAssertWrappedByClerkProvider("useSignIn");
    const isomorphicClerk = useIsomorphicClerkContext();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useClientContext"])();
    (_a = isomorphicClerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WWQWD4PM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useSignIn"));
    if (!client) {
        return {
            isLoaded: false,
            signIn: void 0,
            setActive: void 0
        };
    }
    return {
        isLoaded: true,
        signIn: client.signIn,
        setActive: isomorphicClerk.setActive
    };
};
;
;
var useSignUp = ()=>{
    var _a;
    useAssertWrappedByClerkProvider("useSignUp");
    const isomorphicClerk = useIsomorphicClerkContext();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useClientContext"])();
    (_a = isomorphicClerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WWQWD4PM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useSignUp"));
    if (!client) {
        return {
            isLoaded: false,
            signUp: void 0,
            setActive: void 0
        };
    }
    return {
        isLoaded: true,
        signUp: client.signUp,
        setActive: isomorphicClerk.setActive
    };
};
;
;
;
;
;
var withClerk = (Component, displayNameOrOptions)=>{
    const passedDisplayedName = typeof displayNameOrOptions === "string" ? displayNameOrOptions : displayNameOrOptions == null ? void 0 : displayNameOrOptions.component;
    const displayName = passedDisplayedName || Component.displayName || Component.name || "Component";
    Component.displayName = displayName;
    const options = typeof displayNameOrOptions === "string" ? void 0 : displayNameOrOptions;
    const HOC = (props)=>{
        useAssertWrappedByClerkProvider(displayName || "withClerk");
        const clerk = useIsomorphicClerkContext();
        if (!clerk.loaded && !(options == null ? void 0 : options.renderWhileLoading)) {
            return null;
        }
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(Component, {
            ...props,
            component: displayName,
            clerk
        });
    };
    HOC.displayName = `withClerk(${displayName})`;
    return HOC;
};
// src/components/controlComponents.tsx
var SignedIn = ({ children })=>{
    useAssertWrappedByClerkProvider("SignedIn");
    const { userId } = useAuthContext();
    if (userId) {
        return children;
    }
    return null;
};
var SignedOut = ({ children })=>{
    useAssertWrappedByClerkProvider("SignedOut");
    const { userId } = useAuthContext();
    if (userId === null) {
        return children;
    }
    return null;
};
var ClerkLoaded = ({ children })=>{
    useAssertWrappedByClerkProvider("ClerkLoaded");
    const isomorphicClerk = useIsomorphicClerkContext();
    if (!isomorphicClerk.loaded) {
        return null;
    }
    return children;
};
var ClerkLoading = ({ children })=>{
    useAssertWrappedByClerkProvider("ClerkLoading");
    const isomorphicClerk = useIsomorphicClerkContext();
    if (isomorphicClerk.loaded) {
        return null;
    }
    return children;
};
var Protect = ({ children, fallback, ...restAuthorizedParams })=>{
    useAssertWrappedByClerkProvider("Protect");
    const { isLoaded, has, userId } = useAuth();
    if (!isLoaded) {
        return null;
    }
    const unauthorized = fallback != null ? fallback : null;
    const authorized = children;
    if (!userId) {
        return unauthorized;
    }
    if (typeof restAuthorizedParams.condition === "function") {
        if (restAuthorizedParams.condition(has)) {
            return authorized;
        }
        return unauthorized;
    }
    if (restAuthorizedParams.role || restAuthorizedParams.permission) {
        if (has(restAuthorizedParams)) {
            return authorized;
        }
        return unauthorized;
    }
    return authorized;
};
var RedirectToSignIn = withClerk(({ clerk, ...props })=>{
    const { client, session } = clerk;
    const hasActiveSessions = client.activeSessions && client.activeSessions.length > 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (session === null && hasActiveSessions) {
            void clerk.redirectToAfterSignOut();
        } else {
            void clerk.redirectToSignIn(props);
        }
    }, []);
    return null;
}, "RedirectToSignIn");
var RedirectToSignUp = withClerk(({ clerk, ...props })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        void clerk.redirectToSignUp(props);
    }, []);
    return null;
}, "RedirectToSignUp");
var RedirectToUserProfile = withClerk(({ clerk })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$63SHXGDQ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deprecated"])("RedirectToUserProfile", "Use the `redirectToUserProfile()` method instead.");
        void clerk.redirectToUserProfile();
    }, []);
    return null;
}, "RedirectToUserProfile");
var RedirectToOrganizationProfile = withClerk(({ clerk })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$63SHXGDQ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deprecated"])("RedirectToOrganizationProfile", "Use the `redirectToOrganizationProfile()` method instead.");
        void clerk.redirectToOrganizationProfile();
    }, []);
    return null;
}, "RedirectToOrganizationProfile");
var RedirectToCreateOrganization = withClerk(({ clerk })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$63SHXGDQ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deprecated"])("RedirectToCreateOrganization", "Use the `redirectToCreateOrganization()` method instead.");
        void clerk.redirectToCreateOrganization();
    }, []);
    return null;
}, "RedirectToCreateOrganization");
var AuthenticateWithRedirectCallback = withClerk(({ clerk, ...handleRedirectCallbackParams })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        void clerk.handleRedirectCallback(handleRedirectCallbackParams);
    }, []);
    return null;
}, "AuthenticateWithRedirectCallback");
var MultisessionAppSupport = ({ children })=>{
    useAssertWrappedByClerkProvider("MultisessionAppSupport");
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSessionContext"])();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, {
        key: session ? session.id : "no-users"
    }, children);
};
;
 //# sourceMappingURL=chunk-YAOP3CPI.mjs.map
}}),
"[project]/node_modules/@clerk/clerk-react/dist/chunk-YAOP3CPI.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/error.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/authorization.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/react/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/telemetry.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/deprecated.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/clerk-react/dist/chunk-YAOP3CPI.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "__privateAdd": (()=>__privateAdd),
    "__privateGet": (()=>__privateGet),
    "__privateMethod": (()=>__privateMethod),
    "__privateSet": (()=>__privateSet)
});
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
;
 //# sourceMappingURL=chunk-OANWQR3B.mjs.map
}}),
"[project]/node_modules/@clerk/shared/dist/chunk-5RDBGDIP.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/versionSelector.ts
__turbopack_esm__({
    "getMajorVersion": (()=>getMajorVersion),
    "versionSelector": (()=>versionSelector)
});
var versionSelector = (clerkJSVersion, packageVersion = "5.51.0")=>{
    if (clerkJSVersion) {
        return clerkJSVersion;
    }
    const prereleaseTag = getPrereleaseTag(packageVersion);
    if (prereleaseTag) {
        if (prereleaseTag === "snapshot") {
            return "5.51.0";
        }
        return prereleaseTag;
    }
    return getMajorVersion(packageVersion);
};
var getPrereleaseTag = (packageVersion)=>{
    var _a;
    return (_a = packageVersion.trim().replace(/^v/, "").match(/-(.+?)(\.|$)/)) == null ? void 0 : _a[1];
};
var getMajorVersion = (packageVersion)=>packageVersion.trim().replace(/^v/, "").split(".")[0];
;
 //# sourceMappingURL=chunk-5RDBGDIP.mjs.map
}}),
"[project]/node_modules/@clerk/shared/dist/chunk-5WSDK5G7.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "loadScript": (()=>loadScript)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-YNDNV4YF.mjs [app-rsc] (ecmascript)");
;
// src/loadScript.ts
var NO_DOCUMENT_ERROR = "loadScript cannot be called when document does not exist";
var NO_SRC_ERROR = "loadScript cannot be called without a src";
async function loadScript(src = "", opts) {
    const { async, defer, beforeLoad, crossOrigin, nonce } = opts || {};
    const load = ()=>{
        return new Promise((resolve, reject)=>{
            if (!src) {
                reject(new Error(NO_SRC_ERROR));
            }
            if (!document || !document.body) {
                reject(NO_DOCUMENT_ERROR);
            }
            const script = document.createElement("script");
            if (crossOrigin) script.setAttribute("crossorigin", crossOrigin);
            script.async = async || false;
            script.defer = defer || false;
            script.addEventListener("load", ()=>{
                script.remove();
                resolve(script);
            });
            script.addEventListener("error", ()=>{
                script.remove();
                reject();
            });
            script.src = src;
            script.nonce = nonce;
            beforeLoad == null ? void 0 : beforeLoad(script);
            document.body.appendChild(script);
        });
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runWithExponentialBackOff"])(load, {
        shouldRetry: (_, iterations)=>iterations < 5
    });
}
;
 //# sourceMappingURL=chunk-5WSDK5G7.mjs.map
}}),
"[project]/node_modules/@clerk/shared/dist/chunk-3COGKOUU.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildClerkJsScriptAttributes": (()=>buildClerkJsScriptAttributes),
    "clerkJsScriptUrl": (()=>clerkJsScriptUrl),
    "loadClerkJsScript": (()=>loadClerkJsScript),
    "setClerkJsLoadingErrorPackageName": (()=>setClerkJsLoadingErrorPackageName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$5RDBGDIP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-5RDBGDIP.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$5WSDK5G7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-5WSDK5G7.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3V6DMG3I$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-3V6DMG3I.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-G3VP5PJE.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
// src/loadClerkJsScript.ts
var FAILED_TO_LOAD_ERROR = "Clerk: Failed to load Clerk";
var { isDevOrStagingUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDevOrStagingUrlCache"])();
var errorThrower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3V6DMG3I$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildErrorThrower"])({
    packageName: "@clerk/shared"
});
function setClerkJsLoadingErrorPackageName(packageName) {
    errorThrower.setPackageName({
        packageName
    });
}
var loadClerkJsScript = async (opts)=>{
    const existingScript = document.querySelector("script[data-clerk-js-script]");
    if (existingScript) {
        return new Promise((resolve, reject)=>{
            existingScript.addEventListener("load", ()=>{
                resolve(existingScript);
            });
            existingScript.addEventListener("error", ()=>{
                reject(FAILED_TO_LOAD_ERROR);
            });
        });
    }
    if (!(opts == null ? void 0 : opts.publishableKey)) {
        errorThrower.throwMissingPublishableKeyError();
        return;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$5WSDK5G7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadScript"])(clerkJsScriptUrl(opts), {
        async: true,
        crossOrigin: "anonymous",
        nonce: opts.nonce,
        beforeLoad: applyClerkJsScriptAttributes(opts)
    }).catch(()=>{
        throw new Error(FAILED_TO_LOAD_ERROR);
    });
};
var clerkJsScriptUrl = (opts)=>{
    var _a, _b;
    const { clerkJSUrl, clerkJSVariant, clerkJSVersion, proxyUrl, domain, publishableKey } = opts;
    if (clerkJSUrl) {
        return clerkJSUrl;
    }
    let scriptHost = "";
    if (!!proxyUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidProxyUrl"])(proxyUrl)) {
        scriptHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["proxyUrlToAbsoluteURL"])(proxyUrl).replace(/http(s)?:\/\//, "");
    } else if (domain && !isDevOrStagingUrl(((_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)) == null ? void 0 : _a.frontendApi) || "")) {
        scriptHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addClerkPrefix"])(domain);
    } else {
        scriptHost = ((_b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)) == null ? void 0 : _b.frontendApi) || "";
    }
    const variant = clerkJSVariant ? `${clerkJSVariant.replace(/\.+$/, "")}.` : "";
    const version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$5RDBGDIP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["versionSelector"])(clerkJSVersion);
    return `https://${scriptHost}/npm/@clerk/clerk-js@${version}/dist/clerk.${variant}browser.js`;
};
var buildClerkJsScriptAttributes = (options)=>{
    const obj = {};
    if (options.publishableKey) {
        obj["data-clerk-publishable-key"] = options.publishableKey;
    }
    if (options.proxyUrl) {
        obj["data-clerk-proxy-url"] = options.proxyUrl;
    }
    if (options.domain) {
        obj["data-clerk-domain"] = options.domain;
    }
    if (options.nonce) {
        obj.nonce = options.nonce;
    }
    return obj;
};
var applyClerkJsScriptAttributes = (options)=>(script)=>{
        const attributes = buildClerkJsScriptAttributes(options);
        for(const attribute in attributes){
            script.setAttribute(attribute, attributes[attribute]);
        }
    };
;
 //# sourceMappingURL=chunk-3COGKOUU.mjs.map
}}),
"[project]/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=loadClerkJsScript.mjs.map
}}),
"[project]/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3COGKOUU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-3COGKOUU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$5RDBGDIP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-5RDBGDIP.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$5WSDK5G7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-5WSDK5G7.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-YNDNV4YF.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$BS4QFUKM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-BS4QFUKM.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3V6DMG3I$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-3V6DMG3I.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-O32JQBM6.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-G3VP5PJE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@clerk/shared/dist/chunk-CFXQSUF6.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/object.ts
__turbopack_esm__({
    "applyFunctionToObj": (()=>applyFunctionToObj),
    "filterProps": (()=>filterProps),
    "removeUndefined": (()=>removeUndefined),
    "without": (()=>without)
});
var without = (obj, ...props)=>{
    const copy = {
        ...obj
    };
    for (const prop of props){
        delete copy[prop];
    }
    return copy;
};
var removeUndefined = (obj)=>{
    return Object.entries(obj).reduce((acc, [key, value])=>{
        if (value !== void 0 && value !== null) {
            acc[key] = value;
        }
        return acc;
    }, {});
};
var applyFunctionToObj = (obj, fn)=>{
    const result = {};
    for(const key in obj){
        result[key] = fn(obj[key], key);
    }
    return result;
};
var filterProps = (obj, filter)=>{
    const result = {};
    for(const key in obj){
        if (obj[key] && filter(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
};
;
 //# sourceMappingURL=chunk-CFXQSUF6.mjs.map
}}),
"[project]/node_modules/@clerk/shared/dist/object.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=object.mjs.map
}}),
"[project]/node_modules/@clerk/shared/dist/object.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-CFXQSUF6.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$object$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/object.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@clerk/shared/dist/chunk-JNWT25N5.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/deriveState.ts
__turbopack_esm__({
    "deriveState": (()=>deriveState)
});
var deriveState = (clerkLoaded, state, initialState)=>{
    if (!clerkLoaded && initialState) {
        return deriveFromSsrInitialState(initialState);
    }
    return deriveFromClientSideState(state);
};
var deriveFromSsrInitialState = (initialState)=>{
    const userId = initialState.userId;
    const user = initialState.user;
    const sessionId = initialState.sessionId;
    const session = initialState.session;
    const organization = initialState.organization;
    const orgId = initialState.orgId;
    const orgRole = initialState.orgRole;
    const orgPermissions = initialState.orgPermissions;
    const orgSlug = initialState.orgSlug;
    const actor = initialState.actor;
    const factorVerificationAge = initialState.factorVerificationAge;
    return {
        userId,
        user,
        sessionId,
        session,
        organization,
        orgId,
        orgRole,
        orgPermissions,
        orgSlug,
        actor,
        factorVerificationAge
    };
};
var deriveFromClientSideState = (state)=>{
    var _a;
    const userId = state.user ? state.user.id : state.user;
    const user = state.user;
    const sessionId = state.session ? state.session.id : state.session;
    const session = state.session;
    const factorVerificationAge = state.session ? state.session.factorVerificationAge : null;
    const actor = session == null ? void 0 : session.actor;
    const organization = state.organization;
    const orgId = state.organization ? state.organization.id : state.organization;
    const orgSlug = organization == null ? void 0 : organization.slug;
    const membership = organization ? (_a = user == null ? void 0 : user.organizationMemberships) == null ? void 0 : _a.find((om)=>om.organization.id === orgId) : organization;
    const orgPermissions = membership ? membership.permissions : membership;
    const orgRole = membership ? membership.role : membership;
    return {
        userId,
        user,
        sessionId,
        session,
        organization,
        orgId,
        orgRole,
        orgSlug,
        orgPermissions,
        actor,
        factorVerificationAge
    };
};
;
 //# sourceMappingURL=chunk-JNWT25N5.mjs.map
}}),
"[project]/node_modules/@clerk/shared/dist/deriveState.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=deriveState.mjs.map
}}),
"[project]/node_modules/@clerk/shared/dist/deriveState.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JNWT25N5$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-JNWT25N5.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deriveState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/deriveState.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@clerk/shared/dist/chunk-LJ4R7M7R.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/browser.ts
__turbopack_esm__({
    "inBrowser": (()=>inBrowser),
    "isBrowserOnline": (()=>isBrowserOnline),
    "isValidBrowser": (()=>isValidBrowser),
    "isValidBrowserOnline": (()=>isValidBrowserOnline),
    "userAgentIsRobot": (()=>userAgentIsRobot)
});
function inBrowser() {
    return "undefined" !== "undefined";
}
var botAgents = [
    "bot",
    "spider",
    "crawl",
    "APIs-Google",
    "AdsBot",
    "Googlebot",
    "mediapartners",
    "Google Favicon",
    "FeedFetcher",
    "Google-Read-Aloud",
    "DuplexWeb-Google",
    "googleweblight",
    "bing",
    "yandex",
    "baidu",
    "duckduck",
    "yahoo",
    "ecosia",
    "ia_archiver",
    "facebook",
    "instagram",
    "pinterest",
    "reddit",
    "slack",
    "twitter",
    "whatsapp",
    "youtube",
    "semrush"
];
var botAgentRegex = new RegExp(botAgents.join("|"), "i");
function userAgentIsRobot(userAgent) {
    return !userAgent ? false : botAgentRegex.test(userAgent);
}
function isValidBrowser() {
    const navigator = inBrowser() ? ("TURBOPACK unreachable", undefined) : null;
    if ("TURBOPACK compile-time truthy", 1) {
        return false;
    }
    "TURBOPACK unreachable";
}
function isBrowserOnline() {
    var _a, _b;
    const navigator = inBrowser() ? ("TURBOPACK unreachable", undefined) : null;
    if ("TURBOPACK compile-time truthy", 1) {
        return false;
    }
    "TURBOPACK unreachable";
    const isNavigatorOnline = undefined;
    const isExperimentalConnectionOnline = undefined;
}
function isValidBrowserOnline() {
    return isBrowserOnline() && isValidBrowser();
}
;
 //# sourceMappingURL=chunk-LJ4R7M7R.mjs.map
}}),
"[project]/node_modules/@clerk/shared/dist/browser.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=browser.mjs.map
}}),
"[project]/node_modules/@clerk/shared/dist/browser.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$LJ4R7M7R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-LJ4R7M7R.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$browser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/browser.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@clerk/clerk-react/dist/index.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ClerkProvider": (()=>ClerkProvider),
    "CreateOrganization": (()=>CreateOrganization),
    "GoogleOneTap": (()=>GoogleOneTap),
    "OrganizationList": (()=>OrganizationList),
    "OrganizationProfile": (()=>OrganizationProfile),
    "OrganizationSwitcher": (()=>OrganizationSwitcher),
    "SignIn": (()=>SignIn),
    "SignInButton": (()=>SignInButton),
    "SignInWithMetamaskButton": (()=>SignInWithMetamaskButton),
    "SignOutButton": (()=>SignOutButton),
    "SignUp": (()=>SignUp),
    "SignUpButton": (()=>SignUpButton),
    "UserButton": (()=>UserButton),
    "UserProfile": (()=>UserProfile),
    "Waitlist": (()=>Waitlist)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/clerk-react/dist/chunk-YAOP3CPI.mjs [app-rsc] (ecmascript) <locals>");
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3COGKOUU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-3COGKOUU.mjs [app-rsc] (ecmascript)");
// src/utils/childrenUtils.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-dom.js [app-rsc] (ecmascript)");
// src/utils/useCustomPages.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-YNDNV4YF.mjs [app-rsc] (ecmascript)");
// src/components/ClerkHostRenderer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-CFXQSUF6.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/react/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-rsc] (ecmascript)");
// src/isomorphicClerk.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$LJ4R7M7R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-LJ4R7M7R.mjs [app-rsc] (ecmascript)");
// src/contexts/ClerkContextProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JNWT25N5$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-JNWT25N5.mjs [app-rsc] (ecmascript)");
// src/contexts/ClerkProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/chunk-G3VP5PJE.mjs [app-rsc] (ecmascript)");
;
;
// src/polyfills.ts
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
;
;
;
;
var assertSingleChild = (children)=>(name)=>{
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Children.only(children);
        } catch  {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["multipleChildrenInButtonComponent"])(name));
        }
    };
var normalizeWithDefaultValue = (children, defaultText)=>{
    if (!children) {
        children = defaultText;
    }
    if (typeof children === "string") {
        children = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("button", null, children);
    }
    return children;
};
var safeExecute = (cb)=>(...args)=>{
        if (cb && typeof cb === "function") {
            return cb(...args);
        }
    };
// src/utils/isConstructor.ts
function isConstructor(f) {
    return typeof f === "function";
}
;
var counts = /* @__PURE__ */ new Map();
function useMaxAllowedInstancesGuard(name, error, maxCount = 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const count = counts.get(name) || 0;
        if (count == maxCount) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(error);
        }
        counts.set(name, count + 1);
        return ()=>{
            counts.set(name, (counts.get(name) || 1) - 1);
        };
    }, []);
}
function withMaxAllowedInstancesGuard(WrappedComponent, name, error) {
    const displayName = WrappedComponent.displayName || WrappedComponent.name || name || "Component";
    const Hoc = (props)=>{
        useMaxAllowedInstancesGuard(name, error);
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(WrappedComponent, {
            ...props
        });
    };
    Hoc.displayName = `withMaxAllowedInstancesGuard(${displayName})`;
    return Hoc;
}
;
;
var useCustomElementPortal = (elements)=>{
    const initialState = Array(elements.length).fill(null);
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(initialState);
    return elements.map((el, index)=>({
            id: el.id,
            mount: (node)=>setNodes((prevState)=>prevState.map((n, i)=>i === index ? node : n)),
            unmount: ()=>setNodes((prevState)=>prevState.map((n, i)=>i === index ? null : n)),
            portal: ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, nodes[index] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPortal"])(el.component, nodes[index]) : null)
        }));
};
;
;
;
var isThatComponent = (v, component)=>{
    return !!v && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isValidElement(v) && (v == null ? void 0 : v.type) === component;
};
// src/utils/useCustomPages.tsx
var useUserProfileCustomPages = (children, options)=>{
    const reorderItemsLabels = [
        "account",
        "security"
    ];
    return useCustomPages({
        children,
        reorderItemsLabels,
        LinkComponent: UserProfileLink,
        PageComponent: UserProfilePage,
        MenuItemsComponent: MenuItems,
        componentName: "UserProfile"
    }, options);
};
var useOrganizationProfileCustomPages = (children, options)=>{
    const reorderItemsLabels = [
        "general",
        "members"
    ];
    return useCustomPages({
        children,
        reorderItemsLabels,
        LinkComponent: OrganizationProfileLink,
        PageComponent: OrganizationProfilePage,
        componentName: "OrganizationProfile"
    }, options);
};
var useSanitizedChildren = (children)=>{
    const sanitizedChildren = [];
    const excludedComponents = [
        OrganizationProfileLink,
        OrganizationProfilePage,
        MenuItems,
        UserProfilePage,
        UserProfileLink
    ];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        if (!excludedComponents.some((component)=>isThatComponent(child, component))) {
            sanitizedChildren.push(child);
        }
    });
    return sanitizedChildren;
};
var useCustomPages = (params, options)=>{
    const { children, LinkComponent, PageComponent, MenuItemsComponent, reorderItemsLabels, componentName } = params;
    const { allowForAnyChildren = false } = options || {};
    const validChildren = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        if (!isThatComponent(child, PageComponent) && !isThatComponent(child, LinkComponent) && !isThatComponent(child, MenuItemsComponent)) {
            if (child && !allowForAnyChildren) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customPagesIgnoredComponent"])(componentName));
            }
            return;
        }
        const { props } = child;
        const { children: children2, label, url, labelIcon } = props;
        if (isThatComponent(child, PageComponent)) {
            if (isReorderItem(props, reorderItemsLabels)) {
                validChildren.push({
                    label
                });
            } else if (isCustomPage(props)) {
                validChildren.push({
                    label,
                    labelIcon,
                    children: children2,
                    url
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customPageWrongProps"])(componentName));
                return;
            }
        }
        if (isThatComponent(child, LinkComponent)) {
            if (isExternalLink(props)) {
                validChildren.push({
                    label,
                    labelIcon,
                    url
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customLinkWrongProps"])(componentName));
                return;
            }
        }
    });
    const customPageContents = [];
    const customPageLabelIcons = [];
    const customLinkLabelIcons = [];
    validChildren.forEach((cp, index)=>{
        if (isCustomPage(cp)) {
            customPageContents.push({
                component: cp.children,
                id: index
            });
            customPageLabelIcons.push({
                component: cp.labelIcon,
                id: index
            });
            return;
        }
        if (isExternalLink(cp)) {
            customLinkLabelIcons.push({
                component: cp.labelIcon,
                id: index
            });
        }
    });
    const customPageContentsPortals = useCustomElementPortal(customPageContents);
    const customPageLabelIconsPortals = useCustomElementPortal(customPageLabelIcons);
    const customLinkLabelIconsPortals = useCustomElementPortal(customLinkLabelIcons);
    const customPages = [];
    const customPagesPortals = [];
    validChildren.forEach((cp, index)=>{
        if (isReorderItem(cp, reorderItemsLabels)) {
            customPages.push({
                label: cp.label
            });
            return;
        }
        if (isCustomPage(cp)) {
            const { portal: contentPortal, mount, unmount } = customPageContentsPortals.find((p)=>p.id === index);
            const { portal: labelPortal, mount: mountIcon, unmount: unmountIcon } = customPageLabelIconsPortals.find((p)=>p.id === index);
            customPages.push({
                label: cp.label,
                url: cp.url,
                mount,
                unmount,
                mountIcon,
                unmountIcon
            });
            customPagesPortals.push(contentPortal);
            customPagesPortals.push(labelPortal);
            return;
        }
        if (isExternalLink(cp)) {
            const { portal: labelPortal, mount: mountIcon, unmount: unmountIcon } = customLinkLabelIconsPortals.find((p)=>p.id === index);
            customPages.push({
                label: cp.label,
                url: cp.url,
                mountIcon,
                unmountIcon
            });
            customPagesPortals.push(labelPortal);
            return;
        }
    });
    return {
        customPages,
        customPagesPortals
    };
};
var isReorderItem = (childProps, validItems)=>{
    const { children, label, url, labelIcon } = childProps;
    return !children && !url && !labelIcon && validItems.some((v)=>v === label);
};
var isCustomPage = (childProps)=>{
    const { children, label, url, labelIcon } = childProps;
    return !!children && !!url && !!labelIcon && !!label;
};
var isExternalLink = (childProps)=>{
    const { children, label, url, labelIcon } = childProps;
    return !children && !!url && !!labelIcon && !!label;
};
;
;
var useUserButtonCustomMenuItems = (children)=>{
    const reorderItemsLabels = [
        "manageAccount",
        "signOut"
    ];
    return useCustomMenuItems({
        children,
        reorderItemsLabels,
        MenuItemsComponent: MenuItems,
        MenuActionComponent: MenuAction,
        MenuLinkComponent: MenuLink,
        UserProfileLinkComponent: UserProfileLink,
        UserProfilePageComponent: UserProfilePage
    });
};
var useCustomMenuItems = ({ children, MenuItemsComponent, MenuActionComponent, MenuLinkComponent, UserProfileLinkComponent, UserProfilePageComponent, reorderItemsLabels })=>{
    const validChildren = [];
    const customMenuItems = [];
    const customMenuItemsPortals = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        if (!isThatComponent(child, MenuItemsComponent) && !isThatComponent(child, UserProfileLinkComponent) && !isThatComponent(child, UserProfilePageComponent)) {
            if (child) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonIgnoredComponent"]);
            }
            return;
        }
        if (isThatComponent(child, UserProfileLinkComponent) || isThatComponent(child, UserProfilePageComponent)) {
            return;
        }
        const { props } = child;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Children.forEach(props.children, (child2)=>{
            if (!isThatComponent(child2, MenuActionComponent) && !isThatComponent(child2, MenuLinkComponent)) {
                if (child2) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customMenuItemsIgnoredComponent"]);
                }
                return;
            }
            const { props: props2 } = child2;
            const { label, labelIcon, href, onClick, open } = props2;
            if (isThatComponent(child2, MenuActionComponent)) {
                if (isReorderItem2(props2, reorderItemsLabels)) {
                    validChildren.push({
                        label
                    });
                } else if (isCustomMenuItem(props2)) {
                    const baseItem = {
                        label,
                        labelIcon
                    };
                    if (onClick !== void 0) {
                        validChildren.push({
                            ...baseItem,
                            onClick
                        });
                    } else if (open !== void 0) {
                        validChildren.push({
                            ...baseItem,
                            open: open.startsWith("/") ? open : `/${open}`
                        });
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])("Custom menu item must have either onClick or open property");
                        return;
                    }
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuItemsActionWrongsProps"]);
                    return;
                }
            }
            if (isThatComponent(child2, MenuLinkComponent)) {
                if (isExternalLink2(props2)) {
                    validChildren.push({
                        label,
                        labelIcon,
                        href
                    });
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuItemLinkWrongProps"]);
                    return;
                }
            }
        });
    });
    const customMenuItemLabelIcons = [];
    const customLinkLabelIcons = [];
    validChildren.forEach((mi, index)=>{
        if (isCustomMenuItem(mi)) {
            customMenuItemLabelIcons.push({
                component: mi.labelIcon,
                id: index
            });
        }
        if (isExternalLink2(mi)) {
            customLinkLabelIcons.push({
                component: mi.labelIcon,
                id: index
            });
        }
    });
    const customMenuItemLabelIconsPortals = useCustomElementPortal(customMenuItemLabelIcons);
    const customLinkLabelIconsPortals = useCustomElementPortal(customLinkLabelIcons);
    validChildren.forEach((mi, index)=>{
        if (isReorderItem2(mi, reorderItemsLabels)) {
            customMenuItems.push({
                label: mi.label
            });
        }
        if (isCustomMenuItem(mi)) {
            const { portal: iconPortal, mount: mountIcon, unmount: unmountIcon } = customMenuItemLabelIconsPortals.find((p)=>p.id === index);
            const menuItem = {
                label: mi.label,
                mountIcon,
                unmountIcon
            };
            if ("onClick" in mi) {
                menuItem.onClick = mi.onClick;
            } else if ("open" in mi) {
                menuItem.open = mi.open;
            }
            customMenuItems.push(menuItem);
            customMenuItemsPortals.push(iconPortal);
        }
        if (isExternalLink2(mi)) {
            const { portal: iconPortal, mount: mountIcon, unmount: unmountIcon } = customLinkLabelIconsPortals.find((p)=>p.id === index);
            customMenuItems.push({
                label: mi.label,
                href: mi.href,
                mountIcon,
                unmountIcon
            });
            customMenuItemsPortals.push(iconPortal);
        }
    });
    return {
        customMenuItems,
        customMenuItemsPortals
    };
};
var isReorderItem2 = (childProps, validItems)=>{
    const { children, label, onClick, labelIcon } = childProps;
    return !children && !onClick && !labelIcon && validItems.some((v)=>v === label);
};
var isCustomMenuItem = (childProps)=>{
    const { label, labelIcon, onClick, open } = childProps;
    return !!labelIcon && !!label && (typeof onClick === "function" || typeof open === "string");
};
var isExternalLink2 = (childProps)=>{
    const { label, href, labelIcon } = childProps;
    return !!href && !!labelIcon && !!label;
};
;
function waitForElementChildren(options) {
    const { root = document == null ? void 0 : document.body, selector, timeout = 0 } = options;
    return new Promise((resolve, reject)=>{
        if (!root) {
            reject(new Error("No root element provided"));
            return;
        }
        let elementToWatch = root;
        if (selector) {
            elementToWatch = root == null ? void 0 : root.querySelector(selector);
        }
        const isElementAlreadyPresent = (elementToWatch == null ? void 0 : elementToWatch.childElementCount) && elementToWatch.childElementCount > 0;
        if (isElementAlreadyPresent) {
            resolve();
            return;
        }
        const observer = new MutationObserver((mutationsList)=>{
            for (const mutation of mutationsList){
                if (mutation.type === "childList") {
                    if (!elementToWatch && selector) {
                        elementToWatch = root == null ? void 0 : root.querySelector(selector);
                    }
                    if ((elementToWatch == null ? void 0 : elementToWatch.childElementCount) && elementToWatch.childElementCount > 0) {
                        observer.disconnect();
                        resolve();
                        return;
                    }
                }
            }
        });
        observer.observe(root, {
            childList: true,
            subtree: true
        });
        if (timeout > 0) {
            setTimeout(()=>{
                observer.disconnect();
                reject(new Error(`Timeout waiting for element children`));
            }, timeout);
        }
    });
}
function useWaitForComponentMount(component) {
    const watcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("rendering");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!component) {
            throw new Error("Clerk: no component name provided, unable to detect mount.");
        }
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        component
    ]);
    return status;
}
;
;
;
var isMountProps = (props)=>{
    return "mount" in props;
};
var isOpenProps = (props)=>{
    return "open" in props;
};
var ClerkHostRenderer = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].PureComponent {
    constructor(){
        super(...arguments);
        this.rootRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createRef();
    }
    componentDidUpdate(_prevProps) {
        var _a, _b, _c, _d;
        if (!isMountProps(_prevProps) || !isMountProps(this.props)) {
            return;
        }
        const prevProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["without"])(_prevProps.props, "customPages", "children");
        const newProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["without"])(this.props.props, "customPages", "children");
        const customPagesChanged = ((_a = prevProps.customPages) == null ? void 0 : _a.length) !== ((_b = newProps.customPages) == null ? void 0 : _b.length);
        const customMenuItemsChanged = ((_c = prevProps.customMenuItems) == null ? void 0 : _c.length) !== ((_d = newProps.customMenuItems) == null ? void 0 : _d.length);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDeeplyEqual"])(prevProps, newProps) || customPagesChanged || customMenuItemsChanged) {
            if (this.rootRef.current) {
                this.props.updateProps({
                    node: this.rootRef.current,
                    props: this.props.props
                });
            }
        }
    }
    componentDidMount() {
        if (this.rootRef.current) {
            if (isMountProps(this.props)) {
                this.props.mount(this.rootRef.current, this.props.props);
            }
            if (isOpenProps(this.props)) {
                this.props.open(this.props.props);
            }
        }
    }
    componentWillUnmount() {
        if (this.rootRef.current) {
            if (isMountProps(this.props)) {
                this.props.unmount(this.rootRef.current);
            }
            if (isOpenProps(this.props)) {
                this.props.close();
            }
        }
    }
    render() {
        const { hideRootHtmlElement = false } = this.props;
        const rootAttributes = {
            ref: this.rootRef,
            ...this.props.rootProps,
            ...this.props.component && {
                "data-clerk-component": this.props.component
            }
        };
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, !hideRootHtmlElement && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ...rootAttributes
        }), this.props.children);
    }
};
// src/components/uiComponents.tsx
var CustomPortalsRenderer = (props)=>{
    var _a, _b;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, (_a = props == null ? void 0 : props.customPagesPortals) == null ? void 0 : _a.map((portal, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(portal, {
            key: index
        })), (_b = props == null ? void 0 : props.customMenuItemsPortals) == null ? void 0 : _b.map((portal, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(portal, {
            key: index
        })));
};
var SignIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountSignIn,
        unmount: clerk.unmountSignIn,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "SignIn",
    renderWhileLoading: true
});
var SignUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountSignUp,
        unmount: clerk.unmountSignUp,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "SignUp",
    renderWhileLoading: true
});
function UserProfilePage({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userProfilePageRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function UserProfileLink({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userProfileLinkRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
var _UserProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useUserProfileCustomPages(props.children);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountUserProfile,
        unmount: clerk.unmountUserProfile,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            customPages
        },
        rootProps: rendererRootProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        customPagesPortals
    })));
}, {
    component: "UserProfile",
    renderWhileLoading: true
});
var UserProfile = Object.assign(_UserProfile, {
    Page: UserProfilePage,
    Link: UserProfileLink
});
var UserButtonContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])({
    mount: ()=>{},
    unmount: ()=>{},
    updateProps: ()=>{}
});
var _UserButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useUserProfileCustomPages(props.children, {
        allowForAnyChildren: !!props.__experimental_asProvider
    });
    const userProfileProps = Object.assign(props.userProfileProps || {}, {
        customPages
    });
    const { customMenuItems, customMenuItemsPortals } = useUserButtonCustomMenuItems(props.children);
    const sanitizedChildren = useSanitizedChildren(props.children);
    const passableProps = {
        mount: clerk.mountUserButton,
        unmount: clerk.unmountUserButton,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            userProfileProps,
            customMenuItems
        }
    };
    const portalProps = {
        customPagesPortals,
        customMenuItemsPortals
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(UserButtonContext.Provider, {
        value: passableProps
    }, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        ...passableProps,
        hideRootHtmlElement: !!props.__experimental_asProvider,
        rootProps: rendererRootProps
    }, props.__experimental_asProvider ? sanitizedChildren : null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        ...portalProps
    })));
}, {
    component: "UserButton",
    renderWhileLoading: true
});
function MenuItems({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuItemsRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function MenuAction({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuActionRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function MenuLink({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuLinkRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function UserButtonOutlet(outletProps) {
    const providerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])(UserButtonContext);
    const portalProps = {
        ...providerProps,
        props: {
            ...providerProps.props,
            ...outletProps
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        ...portalProps
    });
}
var UserButton = Object.assign(_UserButton, {
    UserProfilePage,
    UserProfileLink,
    MenuItems,
    Action: MenuAction,
    Link: MenuLink,
    __experimental_Outlet: UserButtonOutlet
});
function OrganizationProfilePage({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["organizationProfilePageRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function OrganizationProfileLink({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YNDNV4YF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["organizationProfileLinkRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
var _OrganizationProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useOrganizationProfileCustomPages(props.children);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountOrganizationProfile,
        unmount: clerk.unmountOrganizationProfile,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            customPages
        },
        rootProps: rendererRootProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        customPagesPortals
    })));
}, {
    component: "OrganizationProfile",
    renderWhileLoading: true
});
var OrganizationProfile = Object.assign(_OrganizationProfile, {
    Page: OrganizationProfilePage,
    Link: OrganizationProfileLink
});
var CreateOrganization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountCreateOrganization,
        unmount: clerk.unmountCreateOrganization,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "CreateOrganization",
    renderWhileLoading: true
});
var OrganizationSwitcherContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])({
    mount: ()=>{},
    unmount: ()=>{},
    updateProps: ()=>{}
});
var _OrganizationSwitcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useOrganizationProfileCustomPages(props.children, {
        allowForAnyChildren: !!props.__experimental_asProvider
    });
    const organizationProfileProps = Object.assign(props.organizationProfileProps || {}, {
        customPages
    });
    const sanitizedChildren = useSanitizedChildren(props.children);
    const passableProps = {
        mount: clerk.mountOrganizationSwitcher,
        unmount: clerk.unmountOrganizationSwitcher,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            organizationProfileProps
        },
        rootProps: rendererRootProps,
        component
    };
    clerk.__experimental_prefetchOrganizationSwitcher();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(OrganizationSwitcherContext.Provider, {
        value: passableProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        ...passableProps,
        hideRootHtmlElement: !!props.__experimental_asProvider
    }, props.__experimental_asProvider ? sanitizedChildren : null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        customPagesPortals
    }))));
}, {
    component: "OrganizationSwitcher",
    renderWhileLoading: true
});
function OrganizationSwitcherOutlet(outletProps) {
    const providerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])(OrganizationSwitcherContext);
    const portalProps = {
        ...providerProps,
        props: {
            ...providerProps.props,
            ...outletProps
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        ...portalProps
    });
}
var OrganizationSwitcher = Object.assign(_OrganizationSwitcher, {
    OrganizationProfilePage,
    OrganizationProfileLink,
    __experimental_Outlet: OrganizationSwitcherOutlet
});
var OrganizationList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountOrganizationList,
        unmount: clerk.unmountOrganizationList,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "OrganizationList",
    renderWhileLoading: true
});
var GoogleOneTap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        open: clerk.openGoogleOneTap,
        close: clerk.closeGoogleOneTap,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "GoogleOneTap",
    renderWhileLoading: true
});
var Waitlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountWaitlist,
        unmount: clerk.unmountWaitlist,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "Waitlist",
    renderWhileLoading: true
});
;
var SignInButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { signUpFallbackRedirectUrl, forceRedirectUrl, fallbackRedirectUrl, signUpForceRedirectUrl, mode, initialValues, withSignUp, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign in");
    const child = assertSingleChild(children)("SignInButton");
    const clickHandler = ()=>{
        const opts = {
            forceRedirectUrl,
            fallbackRedirectUrl,
            signUpFallbackRedirectUrl,
            signUpForceRedirectUrl,
            initialValues,
            withSignUp
        };
        if (mode === "modal") {
            return clerk.openSignIn(opts);
        }
        return clerk.redirectToSignIn({
            ...opts,
            signInFallbackRedirectUrl: fallbackRedirectUrl,
            signInForceRedirectUrl: forceRedirectUrl
        });
    };
    const wrappedChildClickHandler = async (e)=>{
        if (child && typeof child === "object" && "props" in child) {
            await safeExecute(child.props.onClick)(e);
        }
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignInButton",
    renderWhileLoading: true
});
;
var SignUpButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { fallbackRedirectUrl, forceRedirectUrl, signInFallbackRedirectUrl, signInForceRedirectUrl, mode, unsafeMetadata, initialValues, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign up");
    const child = assertSingleChild(children)("SignUpButton");
    const clickHandler = ()=>{
        const opts = {
            fallbackRedirectUrl,
            forceRedirectUrl,
            signInFallbackRedirectUrl,
            signInForceRedirectUrl,
            unsafeMetadata,
            initialValues
        };
        if (mode === "modal") {
            return clerk.openSignUp(opts);
        }
        return clerk.redirectToSignUp({
            ...opts,
            signUpFallbackRedirectUrl: fallbackRedirectUrl,
            signUpForceRedirectUrl: forceRedirectUrl
        });
    };
    const wrappedChildClickHandler = async (e)=>{
        if (child && typeof child === "object" && "props" in child) {
            await safeExecute(child.props.onClick)(e);
        }
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignUpButton",
    renderWhileLoading: true
});
;
var SignOutButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { redirectUrl = "/", signOutOptions, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign out");
    const child = assertSingleChild(children)("SignOutButton");
    const clickHandler = ()=>clerk.signOut({
            redirectUrl,
            ...signOutOptions
        });
    const wrappedChildClickHandler = async (e)=>{
        await safeExecute(child.props.onClick)(e);
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignOutButton",
    renderWhileLoading: true
});
;
var SignInWithMetamaskButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { redirectUrl, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign in with Metamask");
    const child = assertSingleChild(children)("SignInWithMetamaskButton");
    const clickHandler = async ()=>{
        async function authenticate() {
            await clerk.authenticateWithMetamask({
                redirectUrl: redirectUrl || void 0
            });
        }
        void authenticate();
    };
    const wrappedChildClickHandler = async (e)=>{
        await safeExecute(child.props.onClick)(e);
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignInWithMetamask",
    renderWhileLoading: true
});
;
;
;
;
;
;
;
;
if (typeof globalThis.__BUILD_DISABLE_RHC__ === "undefined") {
    globalThis.__BUILD_DISABLE_RHC__ = false;
}
var SDK_METADATA = {
    name: "@clerk/clerk-react",
    version: "5.22.11",
    environment: ("TURBOPACK compile-time value", "development")
};
var _loaded, _domain, _proxyUrl, _publishableKey, _instance, _IsomorphicClerk_instances, waitForClerkJS_fn;
var _IsomorphicClerk = class _IsomorphicClerk {
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _IsomorphicClerk_instances);
        this.clerkjs = null;
        this.preopenOneTap = null;
        this.preopenUserVerification = null;
        this.preopenSignIn = null;
        this.preopenSignUp = null;
        this.preopenUserProfile = null;
        this.preopenOrganizationProfile = null;
        this.preopenCreateOrganization = null;
        this.preOpenWaitlist = null;
        this.premountSignInNodes = /* @__PURE__ */ new Map();
        this.premountSignUpNodes = /* @__PURE__ */ new Map();
        this.premountUserProfileNodes = /* @__PURE__ */ new Map();
        this.premountUserButtonNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationProfileNodes = /* @__PURE__ */ new Map();
        this.premountCreateOrganizationNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationSwitcherNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationListNodes = /* @__PURE__ */ new Map();
        this.premountMethodCalls = /* @__PURE__ */ new Map();
        this.premountWaitlistNodes = /* @__PURE__ */ new Map();
        // A separate Map of `addListener` method calls to handle multiple listeners.
        this.premountAddListenerCalls = /* @__PURE__ */ new Map();
        this.loadedListeners = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _loaded, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _domain);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _proxyUrl);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _publishableKey);
        this.buildSignInUrl = (opts)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildSignInUrl(opts)) || "";
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildSignInUrl", callback);
            }
        };
        this.buildSignUpUrl = (opts)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildSignUpUrl(opts)) || "";
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildSignUpUrl", callback);
            }
        };
        this.buildAfterSignInUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignInUrl()) || "";
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterSignInUrl", callback);
            }
        };
        this.buildAfterSignUpUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignUpUrl()) || "";
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterSignUpUrl", callback);
            }
        };
        this.buildAfterSignOutUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignOutUrl()) || "";
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterSignOutUrl", callback);
            }
        };
        this.buildAfterMultiSessionSingleSignOutUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterMultiSessionSingleSignOutUrl()) || "";
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterMultiSessionSingleSignOutUrl", callback);
            }
        };
        this.buildUserProfileUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildUserProfileUrl()) || "";
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildUserProfileUrl", callback);
            }
        };
        this.buildCreateOrganizationUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildCreateOrganizationUrl()) || "";
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildCreateOrganizationUrl", callback);
            }
        };
        this.buildOrganizationProfileUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildOrganizationProfileUrl()) || "";
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildOrganizationProfileUrl", callback);
            }
        };
        this.buildWaitlistUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildWaitlistUrl()) || "";
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildWaitlistUrl", callback);
            }
        };
        this.buildUrlWithAuth = (to)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildUrlWithAuth(to)) || "";
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildUrlWithAuth", callback);
            }
        };
        this.handleUnauthenticated = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.handleUnauthenticated();
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                void callback();
            } else {
                this.premountMethodCalls.set("handleUnauthenticated", callback);
            }
        };
        this.addOnLoaded = (cb)=>{
            this.loadedListeners.push(cb);
            if (this.loaded) {
                this.emitLoaded();
            }
        };
        this.emitLoaded = ()=>{
            this.loadedListeners.forEach((cb)=>cb());
            this.loadedListeners = [];
        };
        this.hydrateClerkJS = (clerkjs)=>{
            if (!clerkjs) {
                throw new Error("Failed to hydrate latest Clerk JS");
            }
            this.clerkjs = clerkjs;
            this.premountMethodCalls.forEach((cb)=>cb());
            this.premountAddListenerCalls.forEach((listenerHandlers, listener)=>{
                listenerHandlers.nativeUnsubscribe = clerkjs.addListener(listener);
            });
            if (this.preopenSignIn !== null) {
                clerkjs.openSignIn(this.preopenSignIn);
            }
            if (this.preopenSignUp !== null) {
                clerkjs.openSignUp(this.preopenSignUp);
            }
            if (this.preopenUserProfile !== null) {
                clerkjs.openUserProfile(this.preopenUserProfile);
            }
            if (this.preopenUserVerification !== null) {
                clerkjs.__internal_openReverification(this.preopenUserVerification);
            }
            if (this.preopenOneTap !== null) {
                clerkjs.openGoogleOneTap(this.preopenOneTap);
            }
            if (this.preopenOrganizationProfile !== null) {
                clerkjs.openOrganizationProfile(this.preopenOrganizationProfile);
            }
            if (this.preopenCreateOrganization !== null) {
                clerkjs.openCreateOrganization(this.preopenCreateOrganization);
            }
            if (this.preOpenWaitlist !== null) {
                clerkjs.openWaitlist(this.preOpenWaitlist);
            }
            this.premountSignInNodes.forEach((props, node)=>{
                clerkjs.mountSignIn(node, props);
            });
            this.premountSignUpNodes.forEach((props, node)=>{
                clerkjs.mountSignUp(node, props);
            });
            this.premountUserProfileNodes.forEach((props, node)=>{
                clerkjs.mountUserProfile(node, props);
            });
            this.premountUserButtonNodes.forEach((props, node)=>{
                clerkjs.mountUserButton(node, props);
            });
            this.premountOrganizationListNodes.forEach((props, node)=>{
                clerkjs.mountOrganizationList(node, props);
            });
            this.premountWaitlistNodes.forEach((props, node)=>{
                clerkjs.mountWaitlist(node, props);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateSet"])(this, _loaded, true);
            this.emitLoaded();
            return this.clerkjs;
        };
        this.__unstable__updateProps = async (props)=>{
            const clerkjs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _IsomorphicClerk_instances, waitForClerkJS_fn).call(this);
            if (clerkjs && "__unstable__updateProps" in clerkjs) {
                return clerkjs.__unstable__updateProps(props);
            }
        };
        /**
     * `setActive` can be used to set the active session and/or organization.
     */ this.setActive = ({ session, organization, beforeEmit, redirectUrl })=>{
            if (this.clerkjs) {
                return this.clerkjs.setActive({
                    session,
                    organization,
                    beforeEmit,
                    redirectUrl
                });
            } else {
                return Promise.reject();
            }
        };
        this.openSignIn = (props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.openSignIn(props);
            } else {
                this.preopenSignIn = props;
            }
        };
        this.closeSignIn = ()=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.closeSignIn();
            } else {
                this.preopenSignIn = null;
            }
        };
        this.__internal_openReverification = (props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.__internal_openReverification(props);
            } else {
                this.preopenUserVerification = props;
            }
        };
        this.__internal_closeReverification = ()=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.__internal_closeReverification();
            } else {
                this.preopenUserVerification = null;
            }
        };
        this.openGoogleOneTap = (props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.openGoogleOneTap(props);
            } else {
                this.preopenOneTap = props;
            }
        };
        this.closeGoogleOneTap = ()=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.closeGoogleOneTap();
            } else {
                this.preopenOneTap = null;
            }
        };
        this.openUserProfile = (props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.openUserProfile(props);
            } else {
                this.preopenUserProfile = props;
            }
        };
        this.closeUserProfile = ()=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.closeUserProfile();
            } else {
                this.preopenUserProfile = null;
            }
        };
        this.openOrganizationProfile = (props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.openOrganizationProfile(props);
            } else {
                this.preopenOrganizationProfile = props;
            }
        };
        this.closeOrganizationProfile = ()=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.closeOrganizationProfile();
            } else {
                this.preopenOrganizationProfile = null;
            }
        };
        this.openCreateOrganization = (props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.openCreateOrganization(props);
            } else {
                this.preopenCreateOrganization = props;
            }
        };
        this.closeCreateOrganization = ()=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.closeCreateOrganization();
            } else {
                this.preopenCreateOrganization = null;
            }
        };
        this.openWaitlist = (props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.openWaitlist(props);
            } else {
                this.preOpenWaitlist = props;
            }
        };
        this.closeWaitlist = ()=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.closeWaitlist();
            } else {
                this.preOpenWaitlist = null;
            }
        };
        this.openSignUp = (props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.openSignUp(props);
            } else {
                this.preopenSignUp = props;
            }
        };
        this.closeSignUp = ()=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.closeSignUp();
            } else {
                this.preopenSignUp = null;
            }
        };
        this.mountSignIn = (node, props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.mountSignIn(node, props);
            } else {
                this.premountSignInNodes.set(node, props);
            }
        };
        this.unmountSignIn = (node)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.unmountSignIn(node);
            } else {
                this.premountSignInNodes.delete(node);
            }
        };
        this.mountSignUp = (node, props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.mountSignUp(node, props);
            } else {
                this.premountSignUpNodes.set(node, props);
            }
        };
        this.unmountSignUp = (node)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.unmountSignUp(node);
            } else {
                this.premountSignUpNodes.delete(node);
            }
        };
        this.mountUserProfile = (node, props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.mountUserProfile(node, props);
            } else {
                this.premountUserProfileNodes.set(node, props);
            }
        };
        this.unmountUserProfile = (node)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.unmountUserProfile(node);
            } else {
                this.premountUserProfileNodes.delete(node);
            }
        };
        this.mountOrganizationProfile = (node, props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.mountOrganizationProfile(node, props);
            } else {
                this.premountOrganizationProfileNodes.set(node, props);
            }
        };
        this.unmountOrganizationProfile = (node)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.unmountOrganizationProfile(node);
            } else {
                this.premountOrganizationProfileNodes.delete(node);
            }
        };
        this.mountCreateOrganization = (node, props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.mountCreateOrganization(node, props);
            } else {
                this.premountCreateOrganizationNodes.set(node, props);
            }
        };
        this.unmountCreateOrganization = (node)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.unmountCreateOrganization(node);
            } else {
                this.premountCreateOrganizationNodes.delete(node);
            }
        };
        this.mountOrganizationSwitcher = (node, props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.mountOrganizationSwitcher(node, props);
            } else {
                this.premountOrganizationSwitcherNodes.set(node, props);
            }
        };
        this.unmountOrganizationSwitcher = (node)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.unmountOrganizationSwitcher(node);
            } else {
                this.premountOrganizationSwitcherNodes.delete(node);
            }
        };
        this.__experimental_prefetchOrganizationSwitcher = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.__experimental_prefetchOrganizationSwitcher();
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                void callback();
            } else {
                this.premountMethodCalls.set("__experimental_prefetchOrganizationSwitcher", callback);
            }
        };
        this.mountOrganizationList = (node, props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.mountOrganizationList(node, props);
            } else {
                this.premountOrganizationListNodes.set(node, props);
            }
        };
        this.unmountOrganizationList = (node)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.unmountOrganizationList(node);
            } else {
                this.premountOrganizationListNodes.delete(node);
            }
        };
        this.mountUserButton = (node, userButtonProps)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.mountUserButton(node, userButtonProps);
            } else {
                this.premountUserButtonNodes.set(node, userButtonProps);
            }
        };
        this.unmountUserButton = (node)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.unmountUserButton(node);
            } else {
                this.premountUserButtonNodes.delete(node);
            }
        };
        this.mountWaitlist = (node, props)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.mountWaitlist(node, props);
            } else {
                this.premountWaitlistNodes.set(node, props);
            }
        };
        this.unmountWaitlist = (node)=>{
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                this.clerkjs.unmountWaitlist(node);
            } else {
                this.premountWaitlistNodes.delete(node);
            }
        };
        this.addListener = (listener)=>{
            if (this.clerkjs) {
                return this.clerkjs.addListener(listener);
            } else {
                const unsubscribe = ()=>{
                    var _a;
                    const listenerHandlers = this.premountAddListenerCalls.get(listener);
                    if (listenerHandlers) {
                        (_a = listenerHandlers.nativeUnsubscribe) == null ? void 0 : _a.call(listenerHandlers);
                        this.premountAddListenerCalls.delete(listener);
                    }
                };
                this.premountAddListenerCalls.set(listener, {
                    unsubscribe,
                    nativeUnsubscribe: void 0
                });
                return unsubscribe;
            }
        };
        this.navigate = (to)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.navigate(to);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                void callback();
            } else {
                this.premountMethodCalls.set("navigate", callback);
            }
        };
        this.redirectWithAuth = async (...args)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectWithAuth(...args);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectWithAuth", callback);
                return;
            }
        };
        this.redirectToSignIn = async (opts)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToSignIn(opts);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToSignIn", callback);
                return;
            }
        };
        this.redirectToSignUp = async (opts)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToSignUp(opts);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToSignUp", callback);
                return;
            }
        };
        this.redirectToUserProfile = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToUserProfile();
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToUserProfile", callback);
                return;
            }
        };
        this.redirectToAfterSignUp = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignUp();
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToAfterSignUp", callback);
            }
        };
        this.redirectToAfterSignIn = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignIn();
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                callback();
            } else {
                this.premountMethodCalls.set("redirectToAfterSignIn", callback);
            }
        };
        this.redirectToAfterSignOut = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignOut();
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                callback();
            } else {
                this.premountMethodCalls.set("redirectToAfterSignOut", callback);
            }
        };
        this.redirectToOrganizationProfile = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToOrganizationProfile();
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToOrganizationProfile", callback);
                return;
            }
        };
        this.redirectToCreateOrganization = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToCreateOrganization();
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToCreateOrganization", callback);
                return;
            }
        };
        this.redirectToWaitlist = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToWaitlist();
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToWaitlist", callback);
                return;
            }
        };
        this.handleRedirectCallback = (params)=>{
            var _a;
            const callback = ()=>{
                var _a2;
                return (_a2 = this.clerkjs) == null ? void 0 : _a2.handleRedirectCallback(params);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                void ((_a = callback()) == null ? void 0 : _a.catch(()=>{}));
            } else {
                this.premountMethodCalls.set("handleRedirectCallback", callback);
            }
        };
        this.handleGoogleOneTapCallback = (signInOrUp, params)=>{
            var _a;
            const callback = ()=>{
                var _a2;
                return (_a2 = this.clerkjs) == null ? void 0 : _a2.handleGoogleOneTapCallback(signInOrUp, params);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                void ((_a = callback()) == null ? void 0 : _a.catch(()=>{}));
            } else {
                this.premountMethodCalls.set("handleGoogleOneTapCallback", callback);
            }
        };
        this.handleEmailLinkVerification = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.handleEmailLinkVerification(params);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("handleEmailLinkVerification", callback);
            }
        };
        this.authenticateWithMetamask = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithMetamask(params);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithMetamask", callback);
            }
        };
        this.authenticateWithCoinbaseWallet = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithCoinbaseWallet(params);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithCoinbaseWallet", callback);
            }
        };
        this.authenticateWithOKXWallet = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithOKXWallet(params);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithOKXWallet", callback);
            }
        };
        this.authenticateWithWeb3 = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithWeb3(params);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithWeb3", callback);
            }
        };
        this.authenticateWithGoogleOneTap = async (params)=>{
            const clerkjs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _IsomorphicClerk_instances, waitForClerkJS_fn).call(this);
            return clerkjs.authenticateWithGoogleOneTap(params);
        };
        this.createOrganization = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.createOrganization(params);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("createOrganization", callback);
            }
        };
        this.getOrganization = async (organizationId)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.getOrganization(organizationId);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("getOrganization", callback);
            }
        };
        this.joinWaitlist = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.joinWaitlist(params);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("joinWaitlist", callback);
            }
        };
        this.signOut = async (signOutCallbackOrOptions, options)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.signOut(signOutCallbackOrOptions, options);
            };
            if (this.clerkjs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
                return callback();
            } else {
                this.premountMethodCalls.set("signOut", callback);
            }
        };
        const { Clerk = null, publishableKey } = options || {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateSet"])(this, _publishableKey, publishableKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateSet"])(this, _proxyUrl, options == null ? void 0 : options.proxyUrl);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateSet"])(this, _domain, options == null ? void 0 : options.domain);
        this.options = options;
        this.Clerk = Clerk;
        this.mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$LJ4R7M7R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inBrowser"])() ? "browser" : "server";
        if (!this.options.sdkMetadata) {
            this.options.sdkMetadata = SDK_METADATA;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey)) {
            void this.loadClerkJS();
        }
    }
    get publishableKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey);
    }
    get loaded() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded);
    }
    static getOrCreateInstance(options) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$LJ4R7M7R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inBrowser"])() || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance) || options.Clerk && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance).Clerk !== options.Clerk || // Allow hot swapping PKs on the client
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance).publishableKey !== options.publishableKey) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateSet"])(this, _instance, new _IsomorphicClerk(options));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance);
    }
    static clearInstance() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateSet"])(this, _instance, null);
    }
    get domain() {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _domain) === "function") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unsupportedNonBrowserDomainOrProxyUrlFunction"]);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _domain) || "";
    }
    get proxyUrl() {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _proxyUrl) === "function") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unsupportedNonBrowserDomainOrProxyUrlFunction"]);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _proxyUrl) || "";
    }
    __internal_getOption(key) {
        var _a;
        return (_a = this.clerkjs) == null ? void 0 : _a.__internal_getOption(key);
    }
    get sdkMetadata() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.sdkMetadata) || this.options.sdkMetadata || void 0;
    }
    get instanceType() {
        var _a;
        return (_a = this.clerkjs) == null ? void 0 : _a.instanceType;
    }
    get frontendApi() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.frontendApi) || "";
    }
    get isStandardBrowser() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.isStandardBrowser) || this.options.standardBrowser || false;
    }
    get isSatellite() {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        if (typeof this.options.isSatellite === "function") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unsupportedNonBrowserDomainOrProxyUrlFunction"]);
        }
        return false;
    }
    async loadClerkJS() {
        var _a;
        if (this.mode !== "browser" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _loaded)) {
            return;
        }
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        try {
            if (this.Clerk) {
                let c;
                if (isConstructor(this.Clerk)) {
                    c = new this.Clerk((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey), {
                        proxyUrl: this.proxyUrl,
                        domain: this.domain
                    });
                    await c.load(this.options);
                } else {
                    c = this.Clerk;
                    if (!c.loaded) {
                        await c.load(this.options);
                    }
                }
                global.Clerk = c;
            } else if (!__BUILD_DISABLE_RHC__) {
                if (!global.Clerk) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3COGKOUU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadClerkJsScript"])({
                        ...this.options,
                        publishableKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey),
                        proxyUrl: this.proxyUrl,
                        domain: this.domain,
                        nonce: this.options.nonce
                    });
                }
                if (!global.Clerk) {
                    throw new Error("Failed to download latest ClerkJS. Contact support@clerk.com.");
                }
                await global.Clerk.load(this.options);
            }
            if ((_a = global.Clerk) == null ? void 0 : _a.loaded) {
                return this.hydrateClerkJS(global.Clerk);
            }
            return;
        } catch (err) {
            const error = err;
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            } else {
                throw err;
            }
            return;
        }
    }
    get version() {
        var _a;
        return (_a = this.clerkjs) == null ? void 0 : _a.version;
    }
    get client() {
        if (this.clerkjs) {
            return this.clerkjs.client;
        } else {
            return void 0;
        }
    }
    get session() {
        if (this.clerkjs) {
            return this.clerkjs.session;
        } else {
            return void 0;
        }
    }
    get user() {
        if (this.clerkjs) {
            return this.clerkjs.user;
        } else {
            return void 0;
        }
    }
    get organization() {
        if (this.clerkjs) {
            return this.clerkjs.organization;
        } else {
            return void 0;
        }
    }
    get telemetry() {
        if (this.clerkjs) {
            return this.clerkjs.telemetry;
        } else {
            return void 0;
        }
    }
    get __unstable__environment() {
        if (this.clerkjs) {
            return this.clerkjs.__unstable__environment;
        } else {
            return void 0;
        }
    }
    __unstable__setEnvironment(...args) {
        if (this.clerkjs && "__unstable__setEnvironment" in this.clerkjs) {
            this.clerkjs.__unstable__setEnvironment(args);
        } else {
            return void 0;
        }
    }
};
_loaded = new WeakMap();
_domain = new WeakMap();
_proxyUrl = new WeakMap();
_publishableKey = new WeakMap();
_instance = new WeakMap();
_IsomorphicClerk_instances = new WeakSet();
waitForClerkJS_fn = function() {
    return new Promise((resolve)=>{
        this.addOnLoaded(()=>resolve(this.clerkjs));
    });
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__privateAdd"])(_IsomorphicClerk, _instance);
var IsomorphicClerk = _IsomorphicClerk;
// src/contexts/ClerkContextProvider.tsx
function ClerkContextProvider(props) {
    const { isomorphicClerkOptions, initialState, children } = props;
    const { isomorphicClerk: clerk, loaded: clerkLoaded } = useLoadedIsomorphicClerk(isomorphicClerkOptions);
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useState({
        client: clerk.client,
        session: clerk.session,
        user: clerk.user,
        organization: clerk.organization
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        return clerk.addListener((e)=>setState({
                ...e
            }));
    }, []);
    const derivedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JNWT25N5$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deriveState"])(clerkLoaded, state, initialState);
    const clerkCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            value: clerk
        }), [
        clerkLoaded
    ]);
    const clientCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            value: state.client
        }), [
        state.client
    ]);
    const { sessionId, session, userId, user, orgId, actor, organization, orgRole, orgSlug, orgPermissions, factorVerificationAge } = derivedState;
    const authCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const value = {
            sessionId,
            userId,
            actor,
            orgId,
            orgRole,
            orgSlug,
            orgPermissions,
            factorVerificationAge
        };
        return {
            value
        };
    }, [
        sessionId,
        userId,
        actor,
        orgId,
        orgRole,
        orgSlug,
        factorVerificationAge
    ]);
    const sessionCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            value: session
        }), [
        sessionId,
        session
    ]);
    const userCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            value: user
        }), [
        userId,
        user
    ]);
    const organizationCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const value = {
            organization
        };
        return {
            value
        };
    }, [
        orgId,
        organization
    ]);
    return(// @ts-expect-error value passed is of type IsomorphicClerk where the context expects LoadedClerk
    /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IsomorphicClerkContext"].Provider, {
        value: clerkCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientContext"].Provider, {
        value: clientCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SessionContext"].Provider, {
        value: sessionCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrganizationProvider"], {
        ...organizationCtx.value
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AuthContext"].Provider, {
        value: authCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserContext"].Provider, {
        value: userCtx
    }, children)))))));
}
var useLoadedIsomorphicClerk = (options)=>{
    const [loaded, setLoaded] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useState(false);
    const isomorphicClerk = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(()=>IsomorphicClerk.getOrCreateInstance(options), []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        void isomorphicClerk.__unstable__updateProps({
            appearance: options.appearance
        });
    }, [
        options.appearance
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        void isomorphicClerk.__unstable__updateProps({
            options
        });
    }, [
        options.localization
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        isomorphicClerk.addOnLoaded(()=>setLoaded(true));
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        return ()=>{
            IsomorphicClerk.clearInstance();
            setLoaded(false);
        };
    }, []);
    return {
        isomorphicClerk,
        loaded
    };
};
// src/contexts/ClerkProvider.tsx
function ClerkProviderBase(props) {
    const { initialState, children, __internal_bypassMissingPublishableKey, ...restIsomorphicClerkOptions } = props;
    const { publishableKey = "", Clerk: userInitialisedClerk } = restIsomorphicClerkOptions;
    if (!userInitialisedClerk && !__internal_bypassMissingPublishableKey) {
        if (!publishableKey) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throwMissingPublishableKeyError();
        } else if (publishableKey && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPublishableKey"])(publishableKey)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throwInvalidPublishableKeyError({
                key: publishableKey
            });
        }
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(ClerkContextProvider, {
        initialState,
        isomorphicClerkOptions: restIsomorphicClerkOptions
    }, children);
}
var ClerkProvider = withMaxAllowedInstancesGuard(ClerkProviderBase, "ClerkProvider", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["multipleClerkProvidersError"]);
ClerkProvider.displayName = "ClerkProvider";
// src/index.ts
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setErrorThrowerOptions"])({
    packageName: "@clerk/clerk-react"
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3COGKOUU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setClerkJsLoadingErrorPackageName"])("@clerk/clerk-react");
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@clerk/clerk-react/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$YAOP3CPI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/clerk-react/dist/chunk-YAOP3CPI.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/utils/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-dom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$object$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/object.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/react/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/keys.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deriveState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/deriveState.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$browser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/browser.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/clerk-react/dist/index.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(auth)/sign-in/[[...sign-n]]/page { METADATA_0 => \"[project]/app/favicon.ico.mjs { IMAGE => \\\"[project]/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "__next_app__": (()=>__next_app__),
    "pages": (()=>pages),
    "routeModule": (()=>routeModule),
    "tree": (()=>tree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__('[project]/app/favicon.ico.mjs { IMAGE => "[project]/app/favicon.ico [app-rsc] (static)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "(auth)",
            {
                "children": [
                    "sign-in",
                    {
                        "children": [
                            "[[...sign-n]]",
                            {
                                "children": [
                                    "__PAGE__",
                                    {},
                                    {
                                        metadata: {},
                                        "page": [
                                            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                                            "[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx"
                                        ]
                                    }
                                ]
                            },
                            {
                                metadata: {}
                            }
                        ]
                    },
                    {
                        metadata: {}
                    }
                ]
            },
            {
                metadata: {}
            }
        ]
    },
    {
        metadata: {
            icon: [
                async (props)=>[
                        {
                            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("//", props.params, "favicon.ico") + `?${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].src.split("/").splice(-1)[0]}`,
                            sizes: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].width}x${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].height}`,
                            type: `image/x-icon`
                        }
                    ]
            ]
        },
        "layout": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/app/layout.js"
        ],
        "not-found": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/next/dist/client/components/not-found-error.js"
        ],
        "forbidden": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/next/dist/client/components/forbidden-error.js"
        ],
        "unauthorized": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/next/dist/client/components/unauthorized-error.js"
        ]
    }
];
const pages = [
    "[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx"
];
;
;
const __next_app_require__ = __turbopack_require__;
const __next_app_load_chunk__ = __turbopack_load__;
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_PAGE,
        page: "/(auth)/sign-in/[[...sign-n]]/page",
        pathname: "/sign-in/[[...sign-n]]",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
}); //# sourceMappingURL=app-page.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(auth)/sign-in/[[...sign-n]]/page { METADATA_0 => \"[project]/app/favicon.ico.mjs { IMAGE => \\\"[project]/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__('[project]/app/favicon.ico.mjs { IMAGE => "[project]/app/favicon.ico [app-rsc] (static)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_import__("[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(auth)/sign-in/[[...sign-n]]/page { METADATA_0 => "[project]/app/favicon.ico.mjs { IMAGE => \\"[project]/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(auth)/sign-in/[[...sign-n]]/page { METADATA_0 => \"[project]/app/favicon.ico.mjs { IMAGE => \\\"[project]/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(auth)/sign-in/[[...sign-n]]/page { METADATA_0 => "[project]/app/favicon.ico.mjs { IMAGE => \\"[project]/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(auth)/sign-in/[[...sign-n]]/page { METADATA_0 => \"[project]/app/favicon.ico.mjs { IMAGE => \\\"[project]/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GlobalError"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(auth)/sign-in/[[...sign-n]]/page { METADATA_0 => "[project]/app/favicon.ico.mjs { IMAGE => \\"[project]/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(auth)/sign-in/[[...sign-n]]/page { METADATA_0 => "[project]/app/favicon.ico.mjs { IMAGE => \\"[project]/app/favicon.ico [app-rsc] (static)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/app/(auth)/sign-in/[[...sign-n]]/page.jsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <exports>');
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b":"invalidateCacheAction"} */ __turbopack_esm__({
    "invalidateCacheAction": (()=>invalidateCacheAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function invalidateCacheAction() {
    void (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete(`__clerk_invalidate_cache_cookie_${Date.now()}`);
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ invalidateCacheAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(invalidateCacheAction, "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b", null);
}}),
"[project]/.next-internal/server/app/(auth)/sign-in/[[...sign-n]]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
}}),
"[project]/.next-internal/server/app/(auth)/sign-in/[[...sign-n]]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(auth)/sign-in/[[...sign-n]]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(auth)/sign-in/[[...sign-n]]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateCacheAction"]),
    "7f40cfbd078047d27a88386f3487a0d2ffecdbb010": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteKeylessAction"]),
    "7fc68a6a9a5af732c89679efdbfc7867e2bca50904": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncKeylessConfigAction"]),
    "7fe1eaf53a02fd4e431f40acb556bb244590bea70a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrReadKeylessAction"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(auth)/sign-in/[[...sign-n]]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(auth)/sign-in/[[...sign-n]]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b"]),
    "7f40cfbd078047d27a88386f3487a0d2ffecdbb010": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7f40cfbd078047d27a88386f3487a0d2ffecdbb010"]),
    "7fc68a6a9a5af732c89679efdbfc7867e2bca50904": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7fc68a6a9a5af732c89679efdbfc7867e2bca50904"]),
    "7fe1eaf53a02fd4e431f40acb556bb244590bea70a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7fe1eaf53a02fd4e431f40acb556bb244590bea70a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(auth)/sign-in/[[...sign-n]]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$sign$2d$in$2f5b5b2e2e2e$sign$2d$n$5d5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(auth)/sign-in/[[...sign-n]]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <exports>');
}}),

};

//# sourceMappingURL=_383819._.js.map