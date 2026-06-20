var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/matter-js/build/matter.js
var require_matter = __commonJS({
  "node_modules/matter-js/build/matter.js"(exports, module) {
    (/* @__PURE__ */ __name((function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define("Matter", [], factory);
      else if (typeof exports === "object")
        exports["Matter"] = factory();
      else
        root["Matter"] = factory();
    }), "webpackUniversalModuleDefinition"))(exports, function() {
      return (
        /******/
        (function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __name(__webpack_require__, "__webpack_require__");
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, { enumerable: true, get: getter });
            }
          };
          __webpack_require__.r = function(exports2) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
          __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = /* @__PURE__ */ Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", { enumerable: true, value });
            if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
            return ns;
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              /* @__PURE__ */ __name(function getDefault() {
                return module2["default"];
              }, "getDefault")
            ) : (
              /******/
              /* @__PURE__ */ __name(function getModuleExports() {
                return module2;
              }, "getModuleExports")
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = 20);
        })([
          /* 0 */
          /***/
          (function(module2, exports2) {
            var Common = {};
            module2.exports = Common;
            (function() {
              Common._baseDelta = 1e3 / 60;
              Common._nextId = 0;
              Common._seed = 0;
              Common._nowStartTime = +/* @__PURE__ */ new Date();
              Common._warnedOnce = {};
              Common._decomp = null;
              Common.extend = function(obj, deep) {
                var argsStart, args, deepClone;
                if (typeof deep === "boolean") {
                  argsStart = 2;
                  deepClone = deep;
                } else {
                  argsStart = 1;
                  deepClone = true;
                }
                for (var i = argsStart; i < arguments.length; i++) {
                  var source = arguments[i];
                  if (source) {
                    for (var prop in source) {
                      if (deepClone && source[prop] && source[prop].constructor === Object) {
                        if (!obj[prop] || obj[prop].constructor === Object) {
                          obj[prop] = obj[prop] || {};
                          Common.extend(obj[prop], deepClone, source[prop]);
                        } else {
                          obj[prop] = source[prop];
                        }
                      } else {
                        obj[prop] = source[prop];
                      }
                    }
                  }
                }
                return obj;
              };
              Common.clone = function(obj, deep) {
                return Common.extend({}, deep, obj);
              };
              Common.keys = function(obj) {
                if (Object.keys)
                  return Object.keys(obj);
                var keys = [];
                for (var key in obj)
                  keys.push(key);
                return keys;
              };
              Common.values = function(obj) {
                var values = [];
                if (Object.keys) {
                  var keys = Object.keys(obj);
                  for (var i = 0; i < keys.length; i++) {
                    values.push(obj[keys[i]]);
                  }
                  return values;
                }
                for (var key in obj)
                  values.push(obj[key]);
                return values;
              };
              Common.get = function(obj, path, begin, end) {
                path = path.split(".").slice(begin, end);
                for (var i = 0; i < path.length; i += 1) {
                  obj = obj[path[i]];
                }
                return obj;
              };
              Common.set = function(obj, path, val, begin, end) {
                var parts = path.split(".").slice(begin, end);
                Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
                return val;
              };
              Common.shuffle = function(array) {
                for (var i = array.length - 1; i > 0; i--) {
                  var j = Math.floor(Common.random() * (i + 1));
                  var temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
                }
                return array;
              };
              Common.choose = function(choices) {
                return choices[Math.floor(Common.random() * choices.length)];
              };
              Common.isElement = function(obj) {
                if (typeof HTMLElement !== "undefined") {
                  return obj instanceof HTMLElement;
                }
                return !!(obj && obj.nodeType && obj.nodeName);
              };
              Common.isArray = function(obj) {
                return Object.prototype.toString.call(obj) === "[object Array]";
              };
              Common.isFunction = function(obj) {
                return typeof obj === "function";
              };
              Common.isPlainObject = function(obj) {
                return typeof obj === "object" && obj.constructor === Object;
              };
              Common.isString = function(obj) {
                return toString.call(obj) === "[object String]";
              };
              Common.clamp = function(value, min2, max2) {
                if (value < min2)
                  return min2;
                if (value > max2)
                  return max2;
                return value;
              };
              Common.sign = function(value) {
                return value < 0 ? -1 : 1;
              };
              Common.now = function() {
                if (typeof window !== "undefined" && window.performance) {
                  if (window.performance.now) {
                    return window.performance.now();
                  } else if (window.performance.webkitNow) {
                    return window.performance.webkitNow();
                  }
                }
                if (Date.now) {
                  return Date.now();
                }
                return /* @__PURE__ */ new Date() - Common._nowStartTime;
              };
              Common.random = function(min2, max2) {
                min2 = typeof min2 !== "undefined" ? min2 : 0;
                max2 = typeof max2 !== "undefined" ? max2 : 1;
                return min2 + _seededRandom() * (max2 - min2);
              };
              var _seededRandom = /* @__PURE__ */ __name(function() {
                Common._seed = (Common._seed * 9301 + 49297) % 233280;
                return Common._seed / 233280;
              }, "_seededRandom");
              Common.colorToNumber = function(colorString) {
                colorString = colorString.replace("#", "");
                if (colorString.length == 3) {
                  colorString = colorString.charAt(0) + colorString.charAt(0) + colorString.charAt(1) + colorString.charAt(1) + colorString.charAt(2) + colorString.charAt(2);
                }
                return parseInt(colorString, 16);
              };
              Common.logLevel = 1;
              Common.log = function() {
                if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
                  console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
                }
              };
              Common.info = function() {
                if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
                  console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
                }
              };
              Common.warn = function() {
                if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
                  console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
                }
              };
              Common.warnOnce = function() {
                var message = Array.prototype.slice.call(arguments).join(" ");
                if (!Common._warnedOnce[message]) {
                  Common.warn(message);
                  Common._warnedOnce[message] = true;
                }
              };
              Common.deprecated = function(obj, prop, warning) {
                obj[prop] = Common.chain(function() {
                  Common.warnOnce("\u{1F505} deprecated \u{1F505}", warning);
                }, obj[prop]);
              };
              Common.nextId = function() {
                return Common._nextId++;
              };
              Common.indexOf = function(haystack, needle) {
                if (haystack.indexOf)
                  return haystack.indexOf(needle);
                for (var i = 0; i < haystack.length; i++) {
                  if (haystack[i] === needle)
                    return i;
                }
                return -1;
              };
              Common.map = function(list, func) {
                if (list.map) {
                  return list.map(func);
                }
                var mapped = [];
                for (var i = 0; i < list.length; i += 1) {
                  mapped.push(func(list[i]));
                }
                return mapped;
              };
              Common.topologicalSort = function(graph) {
                var result = [], visited = [], temp = [];
                for (var node in graph) {
                  if (!visited[node] && !temp[node]) {
                    Common._topologicalSort(node, visited, temp, graph, result);
                  }
                }
                return result;
              };
              Common._topologicalSort = function(node, visited, temp, graph, result) {
                var neighbors = graph[node] || [];
                temp[node] = true;
                for (var i = 0; i < neighbors.length; i += 1) {
                  var neighbor = neighbors[i];
                  if (temp[neighbor]) {
                    continue;
                  }
                  if (!visited[neighbor]) {
                    Common._topologicalSort(neighbor, visited, temp, graph, result);
                  }
                }
                temp[node] = false;
                visited[node] = true;
                result.push(node);
              };
              Common.chain = function() {
                var funcs = [];
                for (var i = 0; i < arguments.length; i += 1) {
                  var func = arguments[i];
                  if (func._chained) {
                    funcs.push.apply(funcs, func._chained);
                  } else {
                    funcs.push(func);
                  }
                }
                var chain = /* @__PURE__ */ __name(function() {
                  var lastResult, args = new Array(arguments.length);
                  for (var i2 = 0, l = arguments.length; i2 < l; i2++) {
                    args[i2] = arguments[i2];
                  }
                  for (i2 = 0; i2 < funcs.length; i2 += 1) {
                    var result = funcs[i2].apply(lastResult, args);
                    if (typeof result !== "undefined") {
                      lastResult = result;
                    }
                  }
                  return lastResult;
                }, "chain");
                chain._chained = funcs;
                return chain;
              };
              Common.chainPathBefore = function(base, path, func) {
                return Common.set(base, path, Common.chain(
                  func,
                  Common.get(base, path)
                ));
              };
              Common.chainPathAfter = function(base, path, func) {
                return Common.set(base, path, Common.chain(
                  Common.get(base, path),
                  func
                ));
              };
              Common.setDecomp = function(decomp) {
                Common._decomp = decomp;
              };
              Common.getDecomp = function() {
                var decomp = Common._decomp;
                try {
                  if (!decomp && typeof window !== "undefined") {
                    decomp = window.decomp;
                  }
                  if (!decomp && typeof global !== "undefined") {
                    decomp = global.decomp;
                  }
                } catch (e) {
                  decomp = null;
                }
                return decomp;
              };
            })();
          }),
          /* 1 */
          /***/
          (function(module2, exports2) {
            var Bounds = {};
            module2.exports = Bounds;
            (function() {
              Bounds.create = function(vertices) {
                var bounds = {
                  min: { x: 0, y: 0 },
                  max: { x: 0, y: 0 }
                };
                if (vertices)
                  Bounds.update(bounds, vertices);
                return bounds;
              };
              Bounds.update = function(bounds, vertices, velocity) {
                bounds.min.x = Infinity;
                bounds.max.x = -Infinity;
                bounds.min.y = Infinity;
                bounds.max.y = -Infinity;
                for (var i = 0; i < vertices.length; i++) {
                  var vertex = vertices[i];
                  if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
                  if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
                  if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
                  if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
                }
                if (velocity) {
                  if (velocity.x > 0) {
                    bounds.max.x += velocity.x;
                  } else {
                    bounds.min.x += velocity.x;
                  }
                  if (velocity.y > 0) {
                    bounds.max.y += velocity.y;
                  } else {
                    bounds.min.y += velocity.y;
                  }
                }
              };
              Bounds.contains = function(bounds, point) {
                return point.x >= bounds.min.x && point.x <= bounds.max.x && point.y >= bounds.min.y && point.y <= bounds.max.y;
              };
              Bounds.overlaps = function(boundsA, boundsB) {
                return boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y;
              };
              Bounds.translate = function(bounds, vector) {
                bounds.min.x += vector.x;
                bounds.max.x += vector.x;
                bounds.min.y += vector.y;
                bounds.max.y += vector.y;
              };
              Bounds.shift = function(bounds, position) {
                var deltaX = bounds.max.x - bounds.min.x, deltaY = bounds.max.y - bounds.min.y;
                bounds.min.x = position.x;
                bounds.max.x = position.x + deltaX;
                bounds.min.y = position.y;
                bounds.max.y = position.y + deltaY;
              };
            })();
          }),
          /* 2 */
          /***/
          (function(module2, exports2) {
            var Vector = {};
            module2.exports = Vector;
            (function() {
              Vector.create = function(x, y) {
                return { x: x || 0, y: y || 0 };
              };
              Vector.clone = function(vector) {
                return { x: vector.x, y: vector.y };
              };
              Vector.magnitude = function(vector) {
                return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
              };
              Vector.magnitudeSquared = function(vector) {
                return vector.x * vector.x + vector.y * vector.y;
              };
              Vector.rotate = function(vector, angle, output) {
                var cos = Math.cos(angle), sin = Math.sin(angle);
                if (!output) output = {};
                var x = vector.x * cos - vector.y * sin;
                output.y = vector.x * sin + vector.y * cos;
                output.x = x;
                return output;
              };
              Vector.rotateAbout = function(vector, angle, point, output) {
                var cos = Math.cos(angle), sin = Math.sin(angle);
                if (!output) output = {};
                var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
                output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
                output.x = x;
                return output;
              };
              Vector.normalise = function(vector) {
                var magnitude = Vector.magnitude(vector);
                if (magnitude === 0)
                  return { x: 0, y: 0 };
                return { x: vector.x / magnitude, y: vector.y / magnitude };
              };
              Vector.dot = function(vectorA, vectorB) {
                return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
              };
              Vector.cross = function(vectorA, vectorB) {
                return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
              };
              Vector.cross3 = function(vectorA, vectorB, vectorC) {
                return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
              };
              Vector.add = function(vectorA, vectorB, output) {
                if (!output) output = {};
                output.x = vectorA.x + vectorB.x;
                output.y = vectorA.y + vectorB.y;
                return output;
              };
              Vector.sub = function(vectorA, vectorB, output) {
                if (!output) output = {};
                output.x = vectorA.x - vectorB.x;
                output.y = vectorA.y - vectorB.y;
                return output;
              };
              Vector.mult = function(vector, scalar) {
                return { x: vector.x * scalar, y: vector.y * scalar };
              };
              Vector.div = function(vector, scalar) {
                return { x: vector.x / scalar, y: vector.y / scalar };
              };
              Vector.perp = function(vector, negate) {
                negate = negate === true ? -1 : 1;
                return { x: negate * -vector.y, y: negate * vector.x };
              };
              Vector.neg = function(vector) {
                return { x: -vector.x, y: -vector.y };
              };
              Vector.angle = function(vectorA, vectorB) {
                return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
              };
              Vector._temp = [
                Vector.create(),
                Vector.create(),
                Vector.create(),
                Vector.create(),
                Vector.create(),
                Vector.create()
              ];
            })();
          }),
          /* 3 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Vertices = {};
            module2.exports = Vertices;
            var Vector = __webpack_require__(2);
            var Common = __webpack_require__(0);
            (function() {
              Vertices.create = function(points, body) {
                var vertices = [];
                for (var i = 0; i < points.length; i++) {
                  var point = points[i], vertex = {
                    x: point.x,
                    y: point.y,
                    index: i,
                    body,
                    isInternal: false
                  };
                  vertices.push(vertex);
                }
                return vertices;
              };
              Vertices.fromPath = function(path, body) {
                var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, points = [];
                path.replace(pathPattern, function(match, x, y) {
                  points.push({ x: parseFloat(x), y: parseFloat(y) });
                });
                return Vertices.create(points, body);
              };
              Vertices.centre = function(vertices) {
                var area = Vertices.area(vertices, true), centre = { x: 0, y: 0 }, cross, temp, j;
                for (var i = 0; i < vertices.length; i++) {
                  j = (i + 1) % vertices.length;
                  cross = Vector.cross(vertices[i], vertices[j]);
                  temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
                  centre = Vector.add(centre, temp);
                }
                return Vector.div(centre, 6 * area);
              };
              Vertices.mean = function(vertices) {
                var average = { x: 0, y: 0 };
                for (var i = 0; i < vertices.length; i++) {
                  average.x += vertices[i].x;
                  average.y += vertices[i].y;
                }
                return Vector.div(average, vertices.length);
              };
              Vertices.area = function(vertices, signed) {
                var area = 0, j = vertices.length - 1;
                for (var i = 0; i < vertices.length; i++) {
                  area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
                  j = i;
                }
                if (signed)
                  return area / 2;
                return Math.abs(area) / 2;
              };
              Vertices.inertia = function(vertices, mass) {
                var numerator = 0, denominator = 0, v = vertices, cross, j;
                for (var n = 0; n < v.length; n++) {
                  j = (n + 1) % v.length;
                  cross = Math.abs(Vector.cross(v[j], v[n]));
                  numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
                  denominator += cross;
                }
                return mass / 6 * (numerator / denominator);
              };
              Vertices.translate = function(vertices, vector, scalar) {
                scalar = typeof scalar !== "undefined" ? scalar : 1;
                var verticesLength = vertices.length, translateX = vector.x * scalar, translateY = vector.y * scalar, i;
                for (i = 0; i < verticesLength; i++) {
                  vertices[i].x += translateX;
                  vertices[i].y += translateY;
                }
                return vertices;
              };
              Vertices.rotate = function(vertices, angle, point) {
                if (angle === 0)
                  return;
                var cos = Math.cos(angle), sin = Math.sin(angle), pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex, dx, dy, i;
                for (i = 0; i < verticesLength; i++) {
                  vertex = vertices[i];
                  dx = vertex.x - pointX;
                  dy = vertex.y - pointY;
                  vertex.x = pointX + (dx * cos - dy * sin);
                  vertex.y = pointY + (dx * sin + dy * cos);
                }
                return vertices;
              };
              Vertices.contains = function(vertices, point) {
                var pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex = vertices[verticesLength - 1], nextVertex;
                for (var i = 0; i < verticesLength; i++) {
                  nextVertex = vertices[i];
                  if ((pointX - vertex.x) * (nextVertex.y - vertex.y) + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
                    return false;
                  }
                  vertex = nextVertex;
                }
                return true;
              };
              Vertices.scale = function(vertices, scaleX, scaleY, point) {
                if (scaleX === 1 && scaleY === 1)
                  return vertices;
                point = point || Vertices.centre(vertices);
                var vertex, delta;
                for (var i = 0; i < vertices.length; i++) {
                  vertex = vertices[i];
                  delta = Vector.sub(vertex, point);
                  vertices[i].x = point.x + delta.x * scaleX;
                  vertices[i].y = point.y + delta.y * scaleY;
                }
                return vertices;
              };
              Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
                if (typeof radius === "number") {
                  radius = [radius];
                } else {
                  radius = radius || [8];
                }
                quality = typeof quality !== "undefined" ? quality : -1;
                qualityMin = qualityMin || 2;
                qualityMax = qualityMax || 14;
                var newVertices = [];
                for (var i = 0; i < vertices.length; i++) {
                  var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1], vertex = vertices[i], nextVertex = vertices[(i + 1) % vertices.length], currentRadius = radius[i < radius.length ? i : radius.length - 1];
                  if (currentRadius === 0) {
                    newVertices.push(vertex);
                    continue;
                  }
                  var prevNormal = Vector.normalise({
                    x: vertex.y - prevVertex.y,
                    y: prevVertex.x - vertex.x
                  });
                  var nextNormal = Vector.normalise({
                    x: nextVertex.y - vertex.y,
                    y: vertex.x - nextVertex.x
                  });
                  var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)), radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius), midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)), scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));
                  var precision = quality;
                  if (quality === -1) {
                    precision = Math.pow(currentRadius, 0.32) * 1.75;
                  }
                  precision = Common.clamp(precision, qualityMin, qualityMax);
                  if (precision % 2 === 1)
                    precision += 1;
                  var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)), theta = alpha / precision;
                  for (var j = 0; j < precision; j++) {
                    newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
                  }
                }
                return newVertices;
              };
              Vertices.clockwiseSort = function(vertices) {
                var centre = Vertices.mean(vertices);
                vertices.sort(function(vertexA, vertexB) {
                  return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
                });
                return vertices;
              };
              Vertices.isConvex = function(vertices) {
                var flag = 0, n = vertices.length, i, j, k, z;
                if (n < 3)
                  return null;
                for (i = 0; i < n; i++) {
                  j = (i + 1) % n;
                  k = (i + 2) % n;
                  z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
                  z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);
                  if (z < 0) {
                    flag |= 1;
                  } else if (z > 0) {
                    flag |= 2;
                  }
                  if (flag === 3) {
                    return false;
                  }
                }
                if (flag !== 0) {
                  return true;
                } else {
                  return null;
                }
              };
              Vertices.hull = function(vertices) {
                var upper = [], lower = [], vertex, i;
                vertices = vertices.slice(0);
                vertices.sort(function(vertexA, vertexB) {
                  var dx = vertexA.x - vertexB.x;
                  return dx !== 0 ? dx : vertexA.y - vertexB.y;
                });
                for (i = 0; i < vertices.length; i += 1) {
                  vertex = vertices[i];
                  while (lower.length >= 2 && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                    lower.pop();
                  }
                  lower.push(vertex);
                }
                for (i = vertices.length - 1; i >= 0; i -= 1) {
                  vertex = vertices[i];
                  while (upper.length >= 2 && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                    upper.pop();
                  }
                  upper.push(vertex);
                }
                upper.pop();
                lower.pop();
                return upper.concat(lower);
              };
            })();
          }),
          /* 4 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Body = {};
            module2.exports = Body;
            var Vertices = __webpack_require__(3);
            var Vector = __webpack_require__(2);
            var Sleeping = __webpack_require__(7);
            var Common = __webpack_require__(0);
            var Bounds = __webpack_require__(1);
            var Axes = __webpack_require__(11);
            (function() {
              Body._timeCorrection = true;
              Body._inertiaScale = 4;
              Body._nextCollidingGroupId = 1;
              Body._nextNonCollidingGroupId = -1;
              Body._nextCategory = 1;
              Body._baseDelta = 1e3 / 60;
              Body.create = function(options) {
                var defaults = {
                  id: Common.nextId(),
                  type: "body",
                  label: "Body",
                  parts: [],
                  plugin: {},
                  angle: 0,
                  vertices: Vertices.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                  position: { x: 0, y: 0 },
                  force: { x: 0, y: 0 },
                  torque: 0,
                  positionImpulse: { x: 0, y: 0 },
                  constraintImpulse: { x: 0, y: 0, angle: 0 },
                  totalContacts: 0,
                  speed: 0,
                  angularSpeed: 0,
                  velocity: { x: 0, y: 0 },
                  angularVelocity: 0,
                  isSensor: false,
                  isStatic: false,
                  isSleeping: false,
                  motion: 0,
                  sleepThreshold: 60,
                  density: 1e-3,
                  restitution: 0,
                  friction: 0.1,
                  frictionStatic: 0.5,
                  frictionAir: 0.01,
                  collisionFilter: {
                    category: 1,
                    mask: 4294967295,
                    group: 0
                  },
                  slop: 0.05,
                  timeScale: 1,
                  render: {
                    visible: true,
                    opacity: 1,
                    strokeStyle: null,
                    fillStyle: null,
                    lineWidth: null,
                    sprite: {
                      xScale: 1,
                      yScale: 1,
                      xOffset: 0,
                      yOffset: 0
                    }
                  },
                  events: null,
                  bounds: null,
                  chamfer: null,
                  circleRadius: 0,
                  positionPrev: null,
                  anglePrev: 0,
                  parent: null,
                  axes: null,
                  area: 0,
                  mass: 0,
                  inertia: 0,
                  deltaTime: 1e3 / 60,
                  _original: null
                };
                var body = Common.extend(defaults, options);
                _initProperties(body, options);
                return body;
              };
              Body.nextGroup = function(isNonColliding) {
                if (isNonColliding)
                  return Body._nextNonCollidingGroupId--;
                return Body._nextCollidingGroupId++;
              };
              Body.nextCategory = function() {
                Body._nextCategory = Body._nextCategory << 1;
                return Body._nextCategory;
              };
              var _initProperties = /* @__PURE__ */ __name(function(body, options) {
                options = options || {};
                Body.set(body, {
                  bounds: body.bounds || Bounds.create(body.vertices),
                  positionPrev: body.positionPrev || Vector.clone(body.position),
                  anglePrev: body.anglePrev || body.angle,
                  vertices: body.vertices,
                  parts: body.parts || [body],
                  isStatic: body.isStatic,
                  isSleeping: body.isSleeping,
                  parent: body.parent || body
                });
                Vertices.rotate(body.vertices, body.angle, body.position);
                Axes.rotate(body.axes, body.angle);
                Bounds.update(body.bounds, body.vertices, body.velocity);
                Body.set(body, {
                  axes: options.axes || body.axes,
                  area: options.area || body.area,
                  mass: options.mass || body.mass,
                  inertia: options.inertia || body.inertia
                });
                var defaultFillStyle = body.isStatic ? "#14151f" : Common.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), defaultStrokeStyle = body.isStatic ? "#555" : "#ccc", defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
                body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
                body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
                body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
                body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
                body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
              }, "_initProperties");
              Body.set = function(body, settings, value) {
                var property;
                if (typeof settings === "string") {
                  property = settings;
                  settings = {};
                  settings[property] = value;
                }
                for (property in settings) {
                  if (!Object.prototype.hasOwnProperty.call(settings, property))
                    continue;
                  value = settings[property];
                  switch (property) {
                    case "isStatic":
                      Body.setStatic(body, value);
                      break;
                    case "isSleeping":
                      Sleeping.set(body, value);
                      break;
                    case "mass":
                      Body.setMass(body, value);
                      break;
                    case "density":
                      Body.setDensity(body, value);
                      break;
                    case "inertia":
                      Body.setInertia(body, value);
                      break;
                    case "vertices":
                      Body.setVertices(body, value);
                      break;
                    case "position":
                      Body.setPosition(body, value);
                      break;
                    case "angle":
                      Body.setAngle(body, value);
                      break;
                    case "velocity":
                      Body.setVelocity(body, value);
                      break;
                    case "angularVelocity":
                      Body.setAngularVelocity(body, value);
                      break;
                    case "speed":
                      Body.setSpeed(body, value);
                      break;
                    case "angularSpeed":
                      Body.setAngularSpeed(body, value);
                      break;
                    case "parts":
                      Body.setParts(body, value);
                      break;
                    case "centre":
                      Body.setCentre(body, value);
                      break;
                    default:
                      body[property] = value;
                  }
                }
              };
              Body.setStatic = function(body, isStatic) {
                for (var i = 0; i < body.parts.length; i++) {
                  var part = body.parts[i];
                  if (isStatic) {
                    if (!part.isStatic) {
                      part._original = {
                        restitution: part.restitution,
                        friction: part.friction,
                        mass: part.mass,
                        inertia: part.inertia,
                        density: part.density,
                        inverseMass: part.inverseMass,
                        inverseInertia: part.inverseInertia
                      };
                    }
                    part.restitution = 0;
                    part.friction = 1;
                    part.mass = part.inertia = part.density = Infinity;
                    part.inverseMass = part.inverseInertia = 0;
                    part.positionPrev.x = part.position.x;
                    part.positionPrev.y = part.position.y;
                    part.anglePrev = part.angle;
                    part.angularVelocity = 0;
                    part.speed = 0;
                    part.angularSpeed = 0;
                    part.motion = 0;
                  } else if (part._original) {
                    part.restitution = part._original.restitution;
                    part.friction = part._original.friction;
                    part.mass = part._original.mass;
                    part.inertia = part._original.inertia;
                    part.density = part._original.density;
                    part.inverseMass = part._original.inverseMass;
                    part.inverseInertia = part._original.inverseInertia;
                    part._original = null;
                  }
                  part.isStatic = isStatic;
                }
              };
              Body.setMass = function(body, mass) {
                var moment = body.inertia / (body.mass / 6);
                body.inertia = moment * (mass / 6);
                body.inverseInertia = 1 / body.inertia;
                body.mass = mass;
                body.inverseMass = 1 / body.mass;
                body.density = body.mass / body.area;
              };
              Body.setDensity = function(body, density) {
                Body.setMass(body, density * body.area);
                body.density = density;
              };
              Body.setInertia = function(body, inertia) {
                body.inertia = inertia;
                body.inverseInertia = 1 / body.inertia;
              };
              Body.setVertices = function(body, vertices) {
                if (vertices[0].body === body) {
                  body.vertices = vertices;
                } else {
                  body.vertices = Vertices.create(vertices, body);
                }
                body.axes = Axes.fromVertices(body.vertices);
                body.area = Vertices.area(body.vertices);
                Body.setMass(body, body.density * body.area);
                var centre = Vertices.centre(body.vertices);
                Vertices.translate(body.vertices, centre, -1);
                Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));
                Vertices.translate(body.vertices, body.position);
                Bounds.update(body.bounds, body.vertices, body.velocity);
              };
              Body.setParts = function(body, parts, autoHull) {
                var i;
                parts = parts.slice(0);
                body.parts.length = 0;
                body.parts.push(body);
                body.parent = body;
                for (i = 0; i < parts.length; i++) {
                  var part = parts[i];
                  if (part !== body) {
                    part.parent = body;
                    body.parts.push(part);
                  }
                }
                if (body.parts.length === 1)
                  return;
                autoHull = typeof autoHull !== "undefined" ? autoHull : true;
                if (autoHull) {
                  var vertices = [];
                  for (i = 0; i < parts.length; i++) {
                    vertices = vertices.concat(parts[i].vertices);
                  }
                  Vertices.clockwiseSort(vertices);
                  var hull = Vertices.hull(vertices), hullCentre = Vertices.centre(hull);
                  Body.setVertices(body, hull);
                  Vertices.translate(body.vertices, hullCentre);
                }
                var total = Body._totalProperties(body);
                body.area = total.area;
                body.parent = body;
                body.position.x = total.centre.x;
                body.position.y = total.centre.y;
                body.positionPrev.x = total.centre.x;
                body.positionPrev.y = total.centre.y;
                Body.setMass(body, total.mass);
                Body.setInertia(body, total.inertia);
                Body.setPosition(body, total.centre);
              };
              Body.setCentre = function(body, centre, relative) {
                if (!relative) {
                  body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
                  body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
                  body.position.x = centre.x;
                  body.position.y = centre.y;
                } else {
                  body.positionPrev.x += centre.x;
                  body.positionPrev.y += centre.y;
                  body.position.x += centre.x;
                  body.position.y += centre.y;
                }
              };
              Body.setPosition = function(body, position, updateVelocity) {
                var delta = Vector.sub(position, body.position);
                if (updateVelocity) {
                  body.positionPrev.x = body.position.x;
                  body.positionPrev.y = body.position.y;
                  body.velocity.x = delta.x;
                  body.velocity.y = delta.y;
                  body.speed = Vector.magnitude(delta);
                } else {
                  body.positionPrev.x += delta.x;
                  body.positionPrev.y += delta.y;
                }
                for (var i = 0; i < body.parts.length; i++) {
                  var part = body.parts[i];
                  part.position.x += delta.x;
                  part.position.y += delta.y;
                  Vertices.translate(part.vertices, delta);
                  Bounds.update(part.bounds, part.vertices, body.velocity);
                }
              };
              Body.setAngle = function(body, angle, updateVelocity) {
                var delta = angle - body.angle;
                if (updateVelocity) {
                  body.anglePrev = body.angle;
                  body.angularVelocity = delta;
                  body.angularSpeed = Math.abs(delta);
                } else {
                  body.anglePrev += delta;
                }
                for (var i = 0; i < body.parts.length; i++) {
                  var part = body.parts[i];
                  part.angle += delta;
                  Vertices.rotate(part.vertices, delta, body.position);
                  Axes.rotate(part.axes, delta);
                  Bounds.update(part.bounds, part.vertices, body.velocity);
                  if (i > 0) {
                    Vector.rotateAbout(part.position, delta, body.position, part.position);
                  }
                }
              };
              Body.setVelocity = function(body, velocity) {
                var timeScale = body.deltaTime / Body._baseDelta;
                body.positionPrev.x = body.position.x - velocity.x * timeScale;
                body.positionPrev.y = body.position.y - velocity.y * timeScale;
                body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
                body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
                body.speed = Vector.magnitude(body.velocity);
              };
              Body.getVelocity = function(body) {
                var timeScale = Body._baseDelta / body.deltaTime;
                return {
                  x: (body.position.x - body.positionPrev.x) * timeScale,
                  y: (body.position.y - body.positionPrev.y) * timeScale
                };
              };
              Body.getSpeed = function(body) {
                return Vector.magnitude(Body.getVelocity(body));
              };
              Body.setSpeed = function(body, speed) {
                Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
              };
              Body.setAngularVelocity = function(body, velocity) {
                var timeScale = body.deltaTime / Body._baseDelta;
                body.anglePrev = body.angle - velocity * timeScale;
                body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
                body.angularSpeed = Math.abs(body.angularVelocity);
              };
              Body.getAngularVelocity = function(body) {
                return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
              };
              Body.getAngularSpeed = function(body) {
                return Math.abs(Body.getAngularVelocity(body));
              };
              Body.setAngularSpeed = function(body, speed) {
                Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
              };
              Body.translate = function(body, translation, updateVelocity) {
                Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
              };
              Body.rotate = function(body, rotation, point, updateVelocity) {
                if (!point) {
                  Body.setAngle(body, body.angle + rotation, updateVelocity);
                } else {
                  var cos = Math.cos(rotation), sin = Math.sin(rotation), dx = body.position.x - point.x, dy = body.position.y - point.y;
                  Body.setPosition(body, {
                    x: point.x + (dx * cos - dy * sin),
                    y: point.y + (dx * sin + dy * cos)
                  }, updateVelocity);
                  Body.setAngle(body, body.angle + rotation, updateVelocity);
                }
              };
              Body.scale = function(body, scaleX, scaleY, point) {
                var totalArea = 0, totalInertia = 0;
                point = point || body.position;
                for (var i = 0; i < body.parts.length; i++) {
                  var part = body.parts[i];
                  Vertices.scale(part.vertices, scaleX, scaleY, point);
                  part.axes = Axes.fromVertices(part.vertices);
                  part.area = Vertices.area(part.vertices);
                  Body.setMass(part, body.density * part.area);
                  Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
                  Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
                  Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });
                  if (i > 0) {
                    totalArea += part.area;
                    totalInertia += part.inertia;
                  }
                  part.position.x = point.x + (part.position.x - point.x) * scaleX;
                  part.position.y = point.y + (part.position.y - point.y) * scaleY;
                  Bounds.update(part.bounds, part.vertices, body.velocity);
                }
                if (body.parts.length > 1) {
                  body.area = totalArea;
                  if (!body.isStatic) {
                    Body.setMass(body, body.density * totalArea);
                    Body.setInertia(body, totalInertia);
                  }
                }
                if (body.circleRadius) {
                  if (scaleX === scaleY) {
                    body.circleRadius *= scaleX;
                  } else {
                    body.circleRadius = null;
                  }
                }
              };
              Body.update = function(body, deltaTime) {
                deltaTime = (typeof deltaTime !== "undefined" ? deltaTime : 1e3 / 60) * body.timeScale;
                var deltaTimeSquared = deltaTime * deltaTime, correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;
                var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta), velocityPrevX = (body.position.x - body.positionPrev.x) * correction, velocityPrevY = (body.position.y - body.positionPrev.y) * correction;
                body.velocity.x = velocityPrevX * frictionAir + body.force.x / body.mass * deltaTimeSquared;
                body.velocity.y = velocityPrevY * frictionAir + body.force.y / body.mass * deltaTimeSquared;
                body.positionPrev.x = body.position.x;
                body.positionPrev.y = body.position.y;
                body.position.x += body.velocity.x;
                body.position.y += body.velocity.y;
                body.deltaTime = deltaTime;
                body.angularVelocity = (body.angle - body.anglePrev) * frictionAir * correction + body.torque / body.inertia * deltaTimeSquared;
                body.anglePrev = body.angle;
                body.angle += body.angularVelocity;
                for (var i = 0; i < body.parts.length; i++) {
                  var part = body.parts[i];
                  Vertices.translate(part.vertices, body.velocity);
                  if (i > 0) {
                    part.position.x += body.velocity.x;
                    part.position.y += body.velocity.y;
                  }
                  if (body.angularVelocity !== 0) {
                    Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                    Axes.rotate(part.axes, body.angularVelocity);
                    if (i > 0) {
                      Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                    }
                  }
                  Bounds.update(part.bounds, part.vertices, body.velocity);
                }
              };
              Body.updateVelocities = function(body) {
                var timeScale = Body._baseDelta / body.deltaTime, bodyVelocity = body.velocity;
                bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
                bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
                body.speed = Math.sqrt(bodyVelocity.x * bodyVelocity.x + bodyVelocity.y * bodyVelocity.y);
                body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
                body.angularSpeed = Math.abs(body.angularVelocity);
              };
              Body.applyForce = function(body, position, force) {
                var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
                body.force.x += force.x;
                body.force.y += force.y;
                body.torque += offset.x * force.y - offset.y * force.x;
              };
              Body._totalProperties = function(body) {
                var properties = {
                  mass: 0,
                  area: 0,
                  inertia: 0,
                  centre: { x: 0, y: 0 }
                };
                for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
                  var part = body.parts[i], mass = part.mass !== Infinity ? part.mass : 1;
                  properties.mass += mass;
                  properties.area += part.area;
                  properties.inertia += part.inertia;
                  properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
                }
                properties.centre = Vector.div(properties.centre, properties.mass);
                return properties;
              };
            })();
          }),
          /* 5 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Events = {};
            module2.exports = Events;
            var Common = __webpack_require__(0);
            (function() {
              Events.on = function(object, eventNames, callback) {
                var names = eventNames.split(" "), name;
                for (var i = 0; i < names.length; i++) {
                  name = names[i];
                  object.events = object.events || {};
                  object.events[name] = object.events[name] || [];
                  object.events[name].push(callback);
                }
                return callback;
              };
              Events.off = function(object, eventNames, callback) {
                if (!eventNames) {
                  object.events = {};
                  return;
                }
                if (typeof eventNames === "function") {
                  callback = eventNames;
                  eventNames = Common.keys(object.events).join(" ");
                }
                var names = eventNames.split(" ");
                for (var i = 0; i < names.length; i++) {
                  var callbacks = object.events[names[i]], newCallbacks = [];
                  if (callback && callbacks) {
                    for (var j = 0; j < callbacks.length; j++) {
                      if (callbacks[j] !== callback)
                        newCallbacks.push(callbacks[j]);
                    }
                  }
                  object.events[names[i]] = newCallbacks;
                }
              };
              Events.trigger = function(object, eventNames, event) {
                var names, name, callbacks, eventClone;
                var events = object.events;
                if (events && Common.keys(events).length > 0) {
                  if (!event)
                    event = {};
                  names = eventNames.split(" ");
                  for (var i = 0; i < names.length; i++) {
                    name = names[i];
                    callbacks = events[name];
                    if (callbacks) {
                      eventClone = Common.clone(event, false);
                      eventClone.name = name;
                      eventClone.source = object;
                      for (var j = 0; j < callbacks.length; j++) {
                        callbacks[j].apply(object, [eventClone]);
                      }
                    }
                  }
                }
              };
            })();
          }),
          /* 6 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Composite = {};
            module2.exports = Composite;
            var Events = __webpack_require__(5);
            var Common = __webpack_require__(0);
            var Bounds = __webpack_require__(1);
            var Body = __webpack_require__(4);
            (function() {
              Composite.create = function(options) {
                return Common.extend({
                  id: Common.nextId(),
                  type: "composite",
                  parent: null,
                  isModified: false,
                  bodies: [],
                  constraints: [],
                  composites: [],
                  label: "Composite",
                  plugin: {},
                  cache: {
                    allBodies: null,
                    allConstraints: null,
                    allComposites: null
                  }
                }, options);
              };
              Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
                composite.isModified = isModified;
                if (isModified && composite.cache) {
                  composite.cache.allBodies = null;
                  composite.cache.allConstraints = null;
                  composite.cache.allComposites = null;
                }
                if (updateParents && composite.parent) {
                  Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
                }
                if (updateChildren) {
                  for (var i = 0; i < composite.composites.length; i++) {
                    var childComposite = composite.composites[i];
                    Composite.setModified(childComposite, isModified, updateParents, updateChildren);
                  }
                }
              };
              Composite.add = function(composite, object) {
                var objects = [].concat(object);
                Events.trigger(composite, "beforeAdd", { object });
                for (var i = 0; i < objects.length; i++) {
                  var obj = objects[i];
                  switch (obj.type) {
                    case "body":
                      if (obj.parent !== obj) {
                        Common.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                        break;
                      }
                      Composite.addBody(composite, obj);
                      break;
                    case "constraint":
                      Composite.addConstraint(composite, obj);
                      break;
                    case "composite":
                      Composite.addComposite(composite, obj);
                      break;
                    case "mouseConstraint":
                      Composite.addConstraint(composite, obj.constraint);
                      break;
                  }
                }
                Events.trigger(composite, "afterAdd", { object });
                return composite;
              };
              Composite.remove = function(composite, object, deep) {
                var objects = [].concat(object);
                Events.trigger(composite, "beforeRemove", { object });
                for (var i = 0; i < objects.length; i++) {
                  var obj = objects[i];
                  switch (obj.type) {
                    case "body":
                      Composite.removeBody(composite, obj, deep);
                      break;
                    case "constraint":
                      Composite.removeConstraint(composite, obj, deep);
                      break;
                    case "composite":
                      Composite.removeComposite(composite, obj, deep);
                      break;
                    case "mouseConstraint":
                      Composite.removeConstraint(composite, obj.constraint);
                      break;
                  }
                }
                Events.trigger(composite, "afterRemove", { object });
                return composite;
              };
              Composite.addComposite = function(compositeA, compositeB) {
                compositeA.composites.push(compositeB);
                compositeB.parent = compositeA;
                Composite.setModified(compositeA, true, true, false);
                return compositeA;
              };
              Composite.removeComposite = function(compositeA, compositeB, deep) {
                var position = Common.indexOf(compositeA.composites, compositeB);
                if (position !== -1) {
                  var bodies = Composite.allBodies(compositeB);
                  Composite.removeCompositeAt(compositeA, position);
                  for (var i = 0; i < bodies.length; i++) {
                    bodies[i].sleepCounter = 0;
                  }
                }
                if (deep) {
                  for (var i = 0; i < compositeA.composites.length; i++) {
                    Composite.removeComposite(compositeA.composites[i], compositeB, true);
                  }
                }
                return compositeA;
              };
              Composite.removeCompositeAt = function(composite, position) {
                composite.composites.splice(position, 1);
                Composite.setModified(composite, true, true, false);
                return composite;
              };
              Composite.addBody = function(composite, body) {
                composite.bodies.push(body);
                Composite.setModified(composite, true, true, false);
                return composite;
              };
              Composite.removeBody = function(composite, body, deep) {
                var position = Common.indexOf(composite.bodies, body);
                if (position !== -1) {
                  Composite.removeBodyAt(composite, position);
                  body.sleepCounter = 0;
                }
                if (deep) {
                  for (var i = 0; i < composite.composites.length; i++) {
                    Composite.removeBody(composite.composites[i], body, true);
                  }
                }
                return composite;
              };
              Composite.removeBodyAt = function(composite, position) {
                composite.bodies.splice(position, 1);
                Composite.setModified(composite, true, true, false);
                return composite;
              };
              Composite.addConstraint = function(composite, constraint) {
                composite.constraints.push(constraint);
                Composite.setModified(composite, true, true, false);
                return composite;
              };
              Composite.removeConstraint = function(composite, constraint, deep) {
                var position = Common.indexOf(composite.constraints, constraint);
                if (position !== -1) {
                  Composite.removeConstraintAt(composite, position);
                }
                if (deep) {
                  for (var i = 0; i < composite.composites.length; i++) {
                    Composite.removeConstraint(composite.composites[i], constraint, true);
                  }
                }
                return composite;
              };
              Composite.removeConstraintAt = function(composite, position) {
                composite.constraints.splice(position, 1);
                Composite.setModified(composite, true, true, false);
                return composite;
              };
              Composite.clear = function(composite, keepStatic, deep) {
                if (deep) {
                  for (var i = 0; i < composite.composites.length; i++) {
                    Composite.clear(composite.composites[i], keepStatic, true);
                  }
                }
                if (keepStatic) {
                  composite.bodies = composite.bodies.filter(function(body) {
                    return body.isStatic;
                  });
                } else {
                  composite.bodies.length = 0;
                }
                composite.constraints.length = 0;
                composite.composites.length = 0;
                Composite.setModified(composite, true, true, false);
                return composite;
              };
              Composite.allBodies = function(composite) {
                if (composite.cache && composite.cache.allBodies) {
                  return composite.cache.allBodies;
                }
                var bodies = [].concat(composite.bodies);
                for (var i = 0; i < composite.composites.length; i++)
                  bodies = bodies.concat(Composite.allBodies(composite.composites[i]));
                if (composite.cache) {
                  composite.cache.allBodies = bodies;
                }
                return bodies;
              };
              Composite.allConstraints = function(composite) {
                if (composite.cache && composite.cache.allConstraints) {
                  return composite.cache.allConstraints;
                }
                var constraints = [].concat(composite.constraints);
                for (var i = 0; i < composite.composites.length; i++)
                  constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));
                if (composite.cache) {
                  composite.cache.allConstraints = constraints;
                }
                return constraints;
              };
              Composite.allComposites = function(composite) {
                if (composite.cache && composite.cache.allComposites) {
                  return composite.cache.allComposites;
                }
                var composites = [].concat(composite.composites);
                for (var i = 0; i < composite.composites.length; i++)
                  composites = composites.concat(Composite.allComposites(composite.composites[i]));
                if (composite.cache) {
                  composite.cache.allComposites = composites;
                }
                return composites;
              };
              Composite.get = function(composite, id, type) {
                var objects, object;
                switch (type) {
                  case "body":
                    objects = Composite.allBodies(composite);
                    break;
                  case "constraint":
                    objects = Composite.allConstraints(composite);
                    break;
                  case "composite":
                    objects = Composite.allComposites(composite).concat(composite);
                    break;
                }
                if (!objects)
                  return null;
                object = objects.filter(function(object2) {
                  return object2.id.toString() === id.toString();
                });
                return object.length === 0 ? null : object[0];
              };
              Composite.move = function(compositeA, objects, compositeB) {
                Composite.remove(compositeA, objects);
                Composite.add(compositeB, objects);
                return compositeA;
              };
              Composite.rebase = function(composite) {
                var objects = Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));
                for (var i = 0; i < objects.length; i++) {
                  objects[i].id = Common.nextId();
                }
                return composite;
              };
              Composite.translate = function(composite, translation, recursive) {
                var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                for (var i = 0; i < bodies.length; i++) {
                  Body.translate(bodies[i], translation);
                }
                return composite;
              };
              Composite.rotate = function(composite, rotation, point, recursive) {
                var cos = Math.cos(rotation), sin = Math.sin(rotation), bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                for (var i = 0; i < bodies.length; i++) {
                  var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                  Body.setPosition(body, {
                    x: point.x + (dx * cos - dy * sin),
                    y: point.y + (dx * sin + dy * cos)
                  });
                  Body.rotate(body, rotation);
                }
                return composite;
              };
              Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
                var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                for (var i = 0; i < bodies.length; i++) {
                  var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                  Body.setPosition(body, {
                    x: point.x + dx * scaleX,
                    y: point.y + dy * scaleY
                  });
                  Body.scale(body, scaleX, scaleY);
                }
                return composite;
              };
              Composite.bounds = function(composite) {
                var bodies = Composite.allBodies(composite), vertices = [];
                for (var i = 0; i < bodies.length; i += 1) {
                  var body = bodies[i];
                  vertices.push(body.bounds.min, body.bounds.max);
                }
                return Bounds.create(vertices);
              };
            })();
          }),
          /* 7 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Sleeping = {};
            module2.exports = Sleeping;
            var Body = __webpack_require__(4);
            var Events = __webpack_require__(5);
            var Common = __webpack_require__(0);
            (function() {
              Sleeping._motionWakeThreshold = 0.18;
              Sleeping._motionSleepThreshold = 0.08;
              Sleeping._minBias = 0.9;
              Sleeping.update = function(bodies, delta) {
                var timeScale = delta / Common._baseDelta, motionSleepThreshold = Sleeping._motionSleepThreshold;
                for (var i = 0; i < bodies.length; i++) {
                  var body = bodies[i], speed = Body.getSpeed(body), angularSpeed = Body.getAngularSpeed(body), motion = speed * speed + angularSpeed * angularSpeed;
                  if (body.force.x !== 0 || body.force.y !== 0) {
                    Sleeping.set(body, false);
                    continue;
                  }
                  var minMotion = Math.min(body.motion, motion), maxMotion = Math.max(body.motion, motion);
                  body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
                  if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
                    body.sleepCounter += 1;
                    if (body.sleepCounter >= body.sleepThreshold / timeScale) {
                      Sleeping.set(body, true);
                    }
                  } else if (body.sleepCounter > 0) {
                    body.sleepCounter -= 1;
                  }
                }
              };
              Sleeping.afterCollisions = function(pairs) {
                var motionSleepThreshold = Sleeping._motionSleepThreshold;
                for (var i = 0; i < pairs.length; i++) {
                  var pair = pairs[i];
                  if (!pair.isActive)
                    continue;
                  var collision = pair.collision, bodyA = collision.bodyA.parent, bodyB = collision.bodyB.parent;
                  if (bodyA.isSleeping && bodyB.isSleeping || bodyA.isStatic || bodyB.isStatic)
                    continue;
                  if (bodyA.isSleeping || bodyB.isSleeping) {
                    var sleepingBody = bodyA.isSleeping && !bodyA.isStatic ? bodyA : bodyB, movingBody = sleepingBody === bodyA ? bodyB : bodyA;
                    if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) {
                      Sleeping.set(sleepingBody, false);
                    }
                  }
                }
              };
              Sleeping.set = function(body, isSleeping) {
                var wasSleeping = body.isSleeping;
                if (isSleeping) {
                  body.isSleeping = true;
                  body.sleepCounter = body.sleepThreshold;
                  body.positionImpulse.x = 0;
                  body.positionImpulse.y = 0;
                  body.positionPrev.x = body.position.x;
                  body.positionPrev.y = body.position.y;
                  body.anglePrev = body.angle;
                  body.speed = 0;
                  body.angularSpeed = 0;
                  body.motion = 0;
                  if (!wasSleeping) {
                    Events.trigger(body, "sleepStart");
                  }
                } else {
                  body.isSleeping = false;
                  body.sleepCounter = 0;
                  if (wasSleeping) {
                    Events.trigger(body, "sleepEnd");
                  }
                }
              };
            })();
          }),
          /* 8 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Collision = {};
            module2.exports = Collision;
            var Vertices = __webpack_require__(3);
            var Pair = __webpack_require__(9);
            (function() {
              var _supports = [];
              var _overlapAB = {
                overlap: 0,
                axis: null
              };
              var _overlapBA = {
                overlap: 0,
                axis: null
              };
              Collision.create = function(bodyA, bodyB) {
                return {
                  pair: null,
                  collided: false,
                  bodyA,
                  bodyB,
                  parentA: bodyA.parent,
                  parentB: bodyB.parent,
                  depth: 0,
                  normal: { x: 0, y: 0 },
                  tangent: { x: 0, y: 0 },
                  penetration: { x: 0, y: 0 },
                  supports: [null, null],
                  supportCount: 0
                };
              };
              Collision.collides = function(bodyA, bodyB, pairs) {
                Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);
                if (_overlapAB.overlap <= 0) {
                  return null;
                }
                Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);
                if (_overlapBA.overlap <= 0) {
                  return null;
                }
                var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)], collision;
                if (!pair) {
                  collision = Collision.create(bodyA, bodyB);
                  collision.collided = true;
                  collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
                  collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
                  collision.parentA = collision.bodyA.parent;
                  collision.parentB = collision.bodyB.parent;
                } else {
                  collision = pair.collision;
                }
                bodyA = collision.bodyA;
                bodyB = collision.bodyB;
                var minOverlap;
                if (_overlapAB.overlap < _overlapBA.overlap) {
                  minOverlap = _overlapAB;
                } else {
                  minOverlap = _overlapBA;
                }
                var normal = collision.normal, tangent = collision.tangent, penetration = collision.penetration, supports = collision.supports, depth = minOverlap.overlap, minAxis = minOverlap.axis, normalX = minAxis.x, normalY = minAxis.y, deltaX = bodyB.position.x - bodyA.position.x, deltaY = bodyB.position.y - bodyA.position.y;
                if (normalX * deltaX + normalY * deltaY >= 0) {
                  normalX = -normalX;
                  normalY = -normalY;
                }
                normal.x = normalX;
                normal.y = normalY;
                tangent.x = -normalY;
                tangent.y = normalX;
                penetration.x = normalX * depth;
                penetration.y = normalY * depth;
                collision.depth = depth;
                var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1), supportCount = 0;
                if (Vertices.contains(bodyA.vertices, supportsB[0])) {
                  supports[supportCount++] = supportsB[0];
                }
                if (Vertices.contains(bodyA.vertices, supportsB[1])) {
                  supports[supportCount++] = supportsB[1];
                }
                if (supportCount < 2) {
                  var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);
                  if (Vertices.contains(bodyB.vertices, supportsA[0])) {
                    supports[supportCount++] = supportsA[0];
                  }
                  if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
                    supports[supportCount++] = supportsA[1];
                  }
                }
                if (supportCount === 0) {
                  supports[supportCount++] = supportsB[0];
                }
                collision.supportCount = supportCount;
                return collision;
              };
              Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
                var verticesALength = verticesA.length, verticesBLength = verticesB.length, verticesAX = verticesA[0].x, verticesAY = verticesA[0].y, verticesBX = verticesB[0].x, verticesBY = verticesB[0].y, axesLength = axes.length, overlapMin = Number.MAX_VALUE, overlapAxisNumber = 0, overlap, overlapAB, overlapBA, dot, i, j;
                for (i = 0; i < axesLength; i++) {
                  var axis = axes[i], axisX = axis.x, axisY = axis.y, minA = verticesAX * axisX + verticesAY * axisY, minB = verticesBX * axisX + verticesBY * axisY, maxA = minA, maxB = minB;
                  for (j = 1; j < verticesALength; j += 1) {
                    dot = verticesA[j].x * axisX + verticesA[j].y * axisY;
                    if (dot > maxA) {
                      maxA = dot;
                    } else if (dot < minA) {
                      minA = dot;
                    }
                  }
                  for (j = 1; j < verticesBLength; j += 1) {
                    dot = verticesB[j].x * axisX + verticesB[j].y * axisY;
                    if (dot > maxB) {
                      maxB = dot;
                    } else if (dot < minB) {
                      minB = dot;
                    }
                  }
                  overlapAB = maxA - minB;
                  overlapBA = maxB - minA;
                  overlap = overlapAB < overlapBA ? overlapAB : overlapBA;
                  if (overlap < overlapMin) {
                    overlapMin = overlap;
                    overlapAxisNumber = i;
                    if (overlap <= 0) {
                      break;
                    }
                  }
                }
                result.axis = axes[overlapAxisNumber];
                result.overlap = overlapMin;
              };
              Collision._findSupports = function(bodyA, bodyB, normal, direction) {
                var vertices = bodyB.vertices, verticesLength = vertices.length, bodyAPositionX = bodyA.position.x, bodyAPositionY = bodyA.position.y, normalX = normal.x * direction, normalY = normal.y * direction, vertexA = vertices[0], vertexB = vertexA, nearestDistance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y), vertexC, distance, j;
                for (j = 1; j < verticesLength; j += 1) {
                  vertexB = vertices[j];
                  distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);
                  if (distance < nearestDistance) {
                    nearestDistance = distance;
                    vertexA = vertexB;
                  }
                }
                vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
                nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);
                vertexB = vertices[(vertexA.index + 1) % verticesLength];
                if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
                  _supports[0] = vertexA;
                  _supports[1] = vertexB;
                  return _supports;
                }
                _supports[0] = vertexA;
                _supports[1] = vertexC;
                return _supports;
              };
            })();
          }),
          /* 9 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Pair = {};
            module2.exports = Pair;
            var Contact = __webpack_require__(16);
            (function() {
              Pair.create = function(collision, timestamp) {
                var bodyA = collision.bodyA, bodyB = collision.bodyB;
                var pair = {
                  id: Pair.id(bodyA, bodyB),
                  bodyA,
                  bodyB,
                  collision,
                  contacts: [Contact.create(), Contact.create()],
                  contactCount: 0,
                  separation: 0,
                  isActive: true,
                  isSensor: bodyA.isSensor || bodyB.isSensor,
                  timeCreated: timestamp,
                  timeUpdated: timestamp,
                  inverseMass: 0,
                  friction: 0,
                  frictionStatic: 0,
                  restitution: 0,
                  slop: 0
                };
                Pair.update(pair, collision, timestamp);
                return pair;
              };
              Pair.update = function(pair, collision, timestamp) {
                var supports = collision.supports, supportCount = collision.supportCount, contacts = pair.contacts, parentA = collision.parentA, parentB = collision.parentB;
                pair.isActive = true;
                pair.timeUpdated = timestamp;
                pair.collision = collision;
                pair.separation = collision.depth;
                pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
                pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
                pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
                pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
                pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;
                pair.contactCount = supportCount;
                collision.pair = pair;
                var supportA = supports[0], contactA = contacts[0], supportB = supports[1], contactB = contacts[1];
                if (contactB.vertex === supportA || contactA.vertex === supportB) {
                  contacts[1] = contactA;
                  contacts[0] = contactA = contactB;
                  contactB = contacts[1];
                }
                contactA.vertex = supportA;
                contactB.vertex = supportB;
              };
              Pair.setActive = function(pair, isActive, timestamp) {
                if (isActive) {
                  pair.isActive = true;
                  pair.timeUpdated = timestamp;
                } else {
                  pair.isActive = false;
                  pair.contactCount = 0;
                }
              };
              Pair.id = function(bodyA, bodyB) {
                return bodyA.id < bodyB.id ? bodyA.id.toString(36) + ":" + bodyB.id.toString(36) : bodyB.id.toString(36) + ":" + bodyA.id.toString(36);
              };
            })();
          }),
          /* 10 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Constraint = {};
            module2.exports = Constraint;
            var Vertices = __webpack_require__(3);
            var Vector = __webpack_require__(2);
            var Sleeping = __webpack_require__(7);
            var Bounds = __webpack_require__(1);
            var Axes = __webpack_require__(11);
            var Common = __webpack_require__(0);
            (function() {
              Constraint._warming = 0.4;
              Constraint._torqueDampen = 1;
              Constraint._minLength = 1e-6;
              Constraint.create = function(options) {
                var constraint = options;
                if (constraint.bodyA && !constraint.pointA)
                  constraint.pointA = { x: 0, y: 0 };
                if (constraint.bodyB && !constraint.pointB)
                  constraint.pointB = { x: 0, y: 0 };
                var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA, initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB, length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
                constraint.length = typeof constraint.length !== "undefined" ? constraint.length : length;
                constraint.id = constraint.id || Common.nextId();
                constraint.label = constraint.label || "Constraint";
                constraint.type = "constraint";
                constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
                constraint.damping = constraint.damping || 0;
                constraint.angularStiffness = constraint.angularStiffness || 0;
                constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
                constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
                constraint.plugin = {};
                var render = {
                  visible: true,
                  lineWidth: 2,
                  strokeStyle: "#ffffff",
                  type: "line",
                  anchors: true
                };
                if (constraint.length === 0 && constraint.stiffness > 0.1) {
                  render.type = "pin";
                  render.anchors = false;
                } else if (constraint.stiffness < 0.9) {
                  render.type = "spring";
                }
                constraint.render = Common.extend(render, constraint.render);
                return constraint;
              };
              Constraint.preSolveAll = function(bodies) {
                for (var i = 0; i < bodies.length; i += 1) {
                  var body = bodies[i], impulse = body.constraintImpulse;
                  if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                    continue;
                  }
                  body.position.x += impulse.x;
                  body.position.y += impulse.y;
                  body.angle += impulse.angle;
                }
              };
              Constraint.solveAll = function(constraints, delta) {
                var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);
                for (var i = 0; i < constraints.length; i += 1) {
                  var constraint = constraints[i], fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic, fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                  if (fixedA || fixedB) {
                    Constraint.solve(constraints[i], timeScale);
                  }
                }
                for (i = 0; i < constraints.length; i += 1) {
                  constraint = constraints[i];
                  fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic;
                  fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                  if (!fixedA && !fixedB) {
                    Constraint.solve(constraints[i], timeScale);
                  }
                }
              };
              Constraint.solve = function(constraint, timeScale) {
                var bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointA = constraint.pointA, pointB = constraint.pointB;
                if (!bodyA && !bodyB)
                  return;
                if (bodyA && !bodyA.isStatic) {
                  Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
                  constraint.angleA = bodyA.angle;
                }
                if (bodyB && !bodyB.isStatic) {
                  Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
                  constraint.angleB = bodyB.angle;
                }
                var pointAWorld = pointA, pointBWorld = pointB;
                if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
                if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);
                if (!pointAWorld || !pointBWorld)
                  return;
                var delta = Vector.sub(pointAWorld, pointBWorld), currentLength = Vector.magnitude(delta);
                if (currentLength < Constraint._minLength) {
                  currentLength = Constraint._minLength;
                }
                var difference = (currentLength - constraint.length) / currentLength, isRigid = constraint.stiffness >= 1 || constraint.length === 0, stiffness = isRigid ? constraint.stiffness * timeScale : constraint.stiffness * timeScale * timeScale, damping = constraint.damping * timeScale, force = Vector.mult(delta, difference * stiffness), massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0), inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0), resistanceTotal = massTotal + inertiaTotal, torque, share, normal, normalVelocity, relativeVelocity;
                if (damping > 0) {
                  var zero = Vector.create();
                  normal = Vector.div(delta, currentLength);
                  relativeVelocity = Vector.sub(
                    bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
                    bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
                  );
                  normalVelocity = Vector.dot(normal, relativeVelocity);
                }
                if (bodyA && !bodyA.isStatic) {
                  share = bodyA.inverseMass / massTotal;
                  bodyA.constraintImpulse.x -= force.x * share;
                  bodyA.constraintImpulse.y -= force.y * share;
                  bodyA.position.x -= force.x * share;
                  bodyA.position.y -= force.y * share;
                  if (damping > 0) {
                    bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
                    bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
                  }
                  torque = Vector.cross(pointA, force) / resistanceTotal * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
                  bodyA.constraintImpulse.angle -= torque;
                  bodyA.angle -= torque;
                }
                if (bodyB && !bodyB.isStatic) {
                  share = bodyB.inverseMass / massTotal;
                  bodyB.constraintImpulse.x += force.x * share;
                  bodyB.constraintImpulse.y += force.y * share;
                  bodyB.position.x += force.x * share;
                  bodyB.position.y += force.y * share;
                  if (damping > 0) {
                    bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
                    bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
                  }
                  torque = Vector.cross(pointB, force) / resistanceTotal * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
                  bodyB.constraintImpulse.angle += torque;
                  bodyB.angle += torque;
                }
              };
              Constraint.postSolveAll = function(bodies) {
                for (var i = 0; i < bodies.length; i++) {
                  var body = bodies[i], impulse = body.constraintImpulse;
                  if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                    continue;
                  }
                  Sleeping.set(body, false);
                  for (var j = 0; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    Vertices.translate(part.vertices, impulse);
                    if (j > 0) {
                      part.position.x += impulse.x;
                      part.position.y += impulse.y;
                    }
                    if (impulse.angle !== 0) {
                      Vertices.rotate(part.vertices, impulse.angle, body.position);
                      Axes.rotate(part.axes, impulse.angle);
                      if (j > 0) {
                        Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                      }
                    }
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                  }
                  impulse.angle *= Constraint._warming;
                  impulse.x *= Constraint._warming;
                  impulse.y *= Constraint._warming;
                }
              };
              Constraint.pointAWorld = function(constraint) {
                return {
                  x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0),
                  y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0)
                };
              };
              Constraint.pointBWorld = function(constraint) {
                return {
                  x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0),
                  y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0)
                };
              };
              Constraint.currentLength = function(constraint) {
                var pointAX = (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0);
                var pointAY = (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0);
                var pointBX = (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0);
                var pointBY = (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0);
                var deltaX = pointAX - pointBX;
                var deltaY = pointAY - pointBY;
                return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
              };
            })();
          }),
          /* 11 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Axes = {};
            module2.exports = Axes;
            var Vector = __webpack_require__(2);
            var Common = __webpack_require__(0);
            (function() {
              Axes.fromVertices = function(vertices) {
                var axes = {};
                for (var i = 0; i < vertices.length; i++) {
                  var j = (i + 1) % vertices.length, normal = Vector.normalise({
                    x: vertices[j].y - vertices[i].y,
                    y: vertices[i].x - vertices[j].x
                  }), gradient = normal.y === 0 ? Infinity : normal.x / normal.y;
                  gradient = gradient.toFixed(3).toString();
                  axes[gradient] = normal;
                }
                return Common.values(axes);
              };
              Axes.rotate = function(axes, angle) {
                if (angle === 0)
                  return;
                var cos = Math.cos(angle), sin = Math.sin(angle);
                for (var i = 0; i < axes.length; i++) {
                  var axis = axes[i], xx;
                  xx = axis.x * cos - axis.y * sin;
                  axis.y = axis.x * sin + axis.y * cos;
                  axis.x = xx;
                }
              };
            })();
          }),
          /* 12 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Bodies = {};
            module2.exports = Bodies;
            var Vertices = __webpack_require__(3);
            var Common = __webpack_require__(0);
            var Body = __webpack_require__(4);
            var Bounds = __webpack_require__(1);
            var Vector = __webpack_require__(2);
            (function() {
              Bodies.rectangle = function(x, y, width, height, options) {
                options = options || {};
                var rectangle = {
                  label: "Rectangle Body",
                  position: { x, y },
                  vertices: Vertices.fromPath("L 0 0 L " + width + " 0 L " + width + " " + height + " L 0 " + height)
                };
                if (options.chamfer) {
                  var chamfer = options.chamfer;
                  rectangle.vertices = Vertices.chamfer(
                    rectangle.vertices,
                    chamfer.radius,
                    chamfer.quality,
                    chamfer.qualityMin,
                    chamfer.qualityMax
                  );
                  delete options.chamfer;
                }
                return Body.create(Common.extend({}, rectangle, options));
              };
              Bodies.trapezoid = function(x, y, width, height, slope, options) {
                options = options || {};
                if (slope >= 1) {
                  Common.warn("Bodies.trapezoid: slope parameter must be < 1.");
                }
                slope *= 0.5;
                var roof = (1 - slope * 2) * width;
                var x1 = width * slope, x2 = x1 + roof, x3 = x2 + x1, verticesPath;
                if (slope < 0.5) {
                  verticesPath = "L 0 0 L " + x1 + " " + -height + " L " + x2 + " " + -height + " L " + x3 + " 0";
                } else {
                  verticesPath = "L 0 0 L " + x2 + " " + -height + " L " + x3 + " 0";
                }
                var trapezoid = {
                  label: "Trapezoid Body",
                  position: { x, y },
                  vertices: Vertices.fromPath(verticesPath)
                };
                if (options.chamfer) {
                  var chamfer = options.chamfer;
                  trapezoid.vertices = Vertices.chamfer(
                    trapezoid.vertices,
                    chamfer.radius,
                    chamfer.quality,
                    chamfer.qualityMin,
                    chamfer.qualityMax
                  );
                  delete options.chamfer;
                }
                return Body.create(Common.extend({}, trapezoid, options));
              };
              Bodies.circle = function(x, y, radius, options, maxSides) {
                options = options || {};
                var circle = {
                  label: "Circle Body",
                  circleRadius: radius
                };
                maxSides = maxSides || 25;
                var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));
                if (sides % 2 === 1)
                  sides += 1;
                return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
              };
              Bodies.polygon = function(x, y, sides, radius, options) {
                options = options || {};
                if (sides < 3)
                  return Bodies.circle(x, y, radius, options);
                var theta = 2 * Math.PI / sides, path = "", offset = theta * 0.5;
                for (var i = 0; i < sides; i += 1) {
                  var angle = offset + i * theta, xx = Math.cos(angle) * radius, yy = Math.sin(angle) * radius;
                  path += "L " + xx.toFixed(3) + " " + yy.toFixed(3) + " ";
                }
                var polygon = {
                  label: "Polygon Body",
                  position: { x, y },
                  vertices: Vertices.fromPath(path)
                };
                if (options.chamfer) {
                  var chamfer = options.chamfer;
                  polygon.vertices = Vertices.chamfer(
                    polygon.vertices,
                    chamfer.radius,
                    chamfer.quality,
                    chamfer.qualityMin,
                    chamfer.qualityMax
                  );
                  delete options.chamfer;
                }
                return Body.create(Common.extend({}, polygon, options));
              };
              Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
                var decomp = Common.getDecomp(), canDecomp, body, parts, isConvex, isConcave, vertices, i, j, k, v, z;
                canDecomp = Boolean(decomp && decomp.quickDecomp);
                options = options || {};
                parts = [];
                flagInternal = typeof flagInternal !== "undefined" ? flagInternal : false;
                removeCollinear = typeof removeCollinear !== "undefined" ? removeCollinear : 0.01;
                minimumArea = typeof minimumArea !== "undefined" ? minimumArea : 10;
                removeDuplicatePoints = typeof removeDuplicatePoints !== "undefined" ? removeDuplicatePoints : 0.01;
                if (!Common.isArray(vertexSets[0])) {
                  vertexSets = [vertexSets];
                }
                for (v = 0; v < vertexSets.length; v += 1) {
                  vertices = vertexSets[v];
                  isConvex = Vertices.isConvex(vertices);
                  isConcave = !isConvex;
                  if (isConcave && !canDecomp) {
                    Common.warnOnce(
                      "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                    );
                  }
                  if (isConvex || !canDecomp) {
                    if (isConvex) {
                      vertices = Vertices.clockwiseSort(vertices);
                    } else {
                      vertices = Vertices.hull(vertices);
                    }
                    parts.push({
                      position: { x, y },
                      vertices
                    });
                  } else {
                    var concave = vertices.map(function(vertex) {
                      return [vertex.x, vertex.y];
                    });
                    decomp.makeCCW(concave);
                    if (removeCollinear !== false)
                      decomp.removeCollinearPoints(concave, removeCollinear);
                    if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
                      decomp.removeDuplicatePoints(concave, removeDuplicatePoints);
                    var decomposed = decomp.quickDecomp(concave);
                    for (i = 0; i < decomposed.length; i++) {
                      var chunk = decomposed[i];
                      var chunkVertices = chunk.map(function(vertices2) {
                        return {
                          x: vertices2[0],
                          y: vertices2[1]
                        };
                      });
                      if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                        continue;
                      parts.push({
                        position: Vertices.centre(chunkVertices),
                        vertices: chunkVertices
                      });
                    }
                  }
                }
                for (i = 0; i < parts.length; i++) {
                  parts[i] = Body.create(Common.extend(parts[i], options));
                }
                if (flagInternal) {
                  var coincident_max_dist = 5;
                  for (i = 0; i < parts.length; i++) {
                    var partA = parts[i];
                    for (j = i + 1; j < parts.length; j++) {
                      var partB = parts[j];
                      if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                        var pav = partA.vertices, pbv = partB.vertices;
                        for (k = 0; k < partA.vertices.length; k++) {
                          for (z = 0; z < partB.vertices.length; z++) {
                            var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])), db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));
                            if (da < coincident_max_dist && db < coincident_max_dist) {
                              pav[k].isInternal = true;
                              pbv[z].isInternal = true;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (parts.length > 1) {
                  body = Body.create(Common.extend({ parts: parts.slice(0) }, options));
                  Body.setPosition(body, { x, y });
                  return body;
                } else {
                  return parts[0];
                }
              };
            })();
          }),
          /* 13 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Detector = {};
            module2.exports = Detector;
            var Common = __webpack_require__(0);
            var Collision = __webpack_require__(8);
            (function() {
              Detector.create = function(options) {
                var defaults = {
                  bodies: [],
                  collisions: [],
                  pairs: null
                };
                return Common.extend(defaults, options);
              };
              Detector.setBodies = function(detector, bodies) {
                detector.bodies = bodies.slice(0);
              };
              Detector.clear = function(detector) {
                detector.bodies = [];
                detector.collisions = [];
              };
              Detector.collisions = function(detector) {
                var pairs = detector.pairs, bodies = detector.bodies, bodiesLength = bodies.length, canCollide = Detector.canCollide, collides = Collision.collides, collisions = detector.collisions, collisionIndex = 0, i, j;
                bodies.sort(Detector._compareBoundsX);
                for (i = 0; i < bodiesLength; i++) {
                  var bodyA = bodies[i], boundsA = bodyA.bounds, boundXMax = bodyA.bounds.max.x, boundYMax = bodyA.bounds.max.y, boundYMin = bodyA.bounds.min.y, bodyAStatic = bodyA.isStatic || bodyA.isSleeping, partsALength = bodyA.parts.length, partsASingle = partsALength === 1;
                  for (j = i + 1; j < bodiesLength; j++) {
                    var bodyB = bodies[j], boundsB = bodyB.bounds;
                    if (boundsB.min.x > boundXMax) {
                      break;
                    }
                    if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
                      continue;
                    }
                    if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
                      continue;
                    }
                    if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
                      continue;
                    }
                    var partsBLength = bodyB.parts.length;
                    if (partsASingle && partsBLength === 1) {
                      var collision = collides(bodyA, bodyB, pairs);
                      if (collision) {
                        collisions[collisionIndex++] = collision;
                      }
                    } else {
                      var partsAStart = partsALength > 1 ? 1 : 0, partsBStart = partsBLength > 1 ? 1 : 0;
                      for (var k = partsAStart; k < partsALength; k++) {
                        var partA = bodyA.parts[k], boundsA = partA.bounds;
                        for (var z = partsBStart; z < partsBLength; z++) {
                          var partB = bodyB.parts[z], boundsB = partB.bounds;
                          if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
                            continue;
                          }
                          var collision = collides(partA, partB, pairs);
                          if (collision) {
                            collisions[collisionIndex++] = collision;
                          }
                        }
                      }
                    }
                  }
                }
                if (collisions.length !== collisionIndex) {
                  collisions.length = collisionIndex;
                }
                return collisions;
              };
              Detector.canCollide = function(filterA, filterB) {
                if (filterA.group === filterB.group && filterA.group !== 0)
                  return filterA.group > 0;
                return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
              };
              Detector._compareBoundsX = function(bodyA, bodyB) {
                return bodyA.bounds.min.x - bodyB.bounds.min.x;
              };
            })();
          }),
          /* 14 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Mouse = {};
            module2.exports = Mouse;
            var Common = __webpack_require__(0);
            (function() {
              Mouse.create = function(element) {
                var mouse = {};
                if (!element) {
                  Common.log("Mouse.create: element was undefined, defaulting to document.body", "warn");
                }
                mouse.element = element || document.body;
                mouse.absolute = { x: 0, y: 0 };
                mouse.position = { x: 0, y: 0 };
                mouse.mousedownPosition = { x: 0, y: 0 };
                mouse.mouseupPosition = { x: 0, y: 0 };
                mouse.offset = { x: 0, y: 0 };
                mouse.scale = { x: 1, y: 1 };
                mouse.wheelDelta = 0;
                mouse.button = -1;
                mouse.pixelRatio = parseInt(mouse.element.getAttribute("data-pixel-ratio"), 10) || 1;
                mouse.sourceEvents = {
                  mousemove: null,
                  mousedown: null,
                  mouseup: null,
                  mousewheel: null
                };
                mouse.mousemove = function(event) {
                  var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                  if (touches) {
                    mouse.button = 0;
                    event.preventDefault();
                  }
                  mouse.absolute.x = position.x;
                  mouse.absolute.y = position.y;
                  mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                  mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                  mouse.sourceEvents.mousemove = event;
                };
                mouse.mousedown = function(event) {
                  var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                  if (touches) {
                    mouse.button = 0;
                    event.preventDefault();
                  } else {
                    mouse.button = event.button;
                  }
                  mouse.absolute.x = position.x;
                  mouse.absolute.y = position.y;
                  mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                  mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                  mouse.mousedownPosition.x = mouse.position.x;
                  mouse.mousedownPosition.y = mouse.position.y;
                  mouse.sourceEvents.mousedown = event;
                };
                mouse.mouseup = function(event) {
                  var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                  if (touches) {
                    event.preventDefault();
                  }
                  mouse.button = -1;
                  mouse.absolute.x = position.x;
                  mouse.absolute.y = position.y;
                  mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                  mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                  mouse.mouseupPosition.x = mouse.position.x;
                  mouse.mouseupPosition.y = mouse.position.y;
                  mouse.sourceEvents.mouseup = event;
                };
                mouse.mousewheel = function(event) {
                  mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
                  event.preventDefault();
                  mouse.sourceEvents.mousewheel = event;
                };
                Mouse.setElement(mouse, mouse.element);
                return mouse;
              };
              Mouse.setElement = function(mouse, element) {
                mouse.element = element;
                element.addEventListener("mousemove", mouse.mousemove, { passive: true });
                element.addEventListener("mousedown", mouse.mousedown, { passive: true });
                element.addEventListener("mouseup", mouse.mouseup, { passive: true });
                element.addEventListener("wheel", mouse.mousewheel, { passive: false });
                element.addEventListener("touchmove", mouse.mousemove, { passive: false });
                element.addEventListener("touchstart", mouse.mousedown, { passive: false });
                element.addEventListener("touchend", mouse.mouseup, { passive: false });
              };
              Mouse.clearSourceEvents = function(mouse) {
                mouse.sourceEvents.mousemove = null;
                mouse.sourceEvents.mousedown = null;
                mouse.sourceEvents.mouseup = null;
                mouse.sourceEvents.mousewheel = null;
                mouse.wheelDelta = 0;
              };
              Mouse.setOffset = function(mouse, offset) {
                mouse.offset.x = offset.x;
                mouse.offset.y = offset.y;
                mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
              };
              Mouse.setScale = function(mouse, scale) {
                mouse.scale.x = scale.x;
                mouse.scale.y = scale.y;
                mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
              };
              Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
                var elementBounds = element.getBoundingClientRect(), rootNode = document.documentElement || document.body.parentNode || document.body, scrollX = window.pageXOffset !== void 0 ? window.pageXOffset : rootNode.scrollLeft, scrollY = window.pageYOffset !== void 0 ? window.pageYOffset : rootNode.scrollTop, touches = event.changedTouches, x, y;
                if (touches) {
                  x = touches[0].pageX - elementBounds.left - scrollX;
                  y = touches[0].pageY - elementBounds.top - scrollY;
                } else {
                  x = event.pageX - elementBounds.left - scrollX;
                  y = event.pageY - elementBounds.top - scrollY;
                }
                return {
                  x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
                  y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
                };
              };
            })();
          }),
          /* 15 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Plugin = {};
            module2.exports = Plugin;
            var Common = __webpack_require__(0);
            (function() {
              Plugin._registry = {};
              Plugin.register = function(plugin) {
                if (!Plugin.isPlugin(plugin)) {
                  Common.warn("Plugin.register:", Plugin.toString(plugin), "does not implement all required fields.");
                }
                if (plugin.name in Plugin._registry) {
                  var registered = Plugin._registry[plugin.name], pluginVersion = Plugin.versionParse(plugin.version).number, registeredVersion = Plugin.versionParse(registered.version).number;
                  if (pluginVersion > registeredVersion) {
                    Common.warn("Plugin.register:", Plugin.toString(registered), "was upgraded to", Plugin.toString(plugin));
                    Plugin._registry[plugin.name] = plugin;
                  } else if (pluginVersion < registeredVersion) {
                    Common.warn("Plugin.register:", Plugin.toString(registered), "can not be downgraded to", Plugin.toString(plugin));
                  } else if (plugin !== registered) {
                    Common.warn("Plugin.register:", Plugin.toString(plugin), "is already registered to different plugin object");
                  }
                } else {
                  Plugin._registry[plugin.name] = plugin;
                }
                return plugin;
              };
              Plugin.resolve = function(dependency) {
                return Plugin._registry[Plugin.dependencyParse(dependency).name];
              };
              Plugin.toString = function(plugin) {
                return typeof plugin === "string" ? plugin : (plugin.name || "anonymous") + "@" + (plugin.version || plugin.range || "0.0.0");
              };
              Plugin.isPlugin = function(obj) {
                return obj && obj.name && obj.version && obj.install;
              };
              Plugin.isUsed = function(module3, name) {
                return module3.used.indexOf(name) > -1;
              };
              Plugin.isFor = function(plugin, module3) {
                var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
                return !plugin.for || module3.name === parsed.name && Plugin.versionSatisfies(module3.version, parsed.range);
              };
              Plugin.use = function(module3, plugins) {
                module3.uses = (module3.uses || []).concat(plugins || []);
                if (module3.uses.length === 0) {
                  Common.warn("Plugin.use:", Plugin.toString(module3), "does not specify any dependencies to install.");
                  return;
                }
                var dependencies = Plugin.dependencies(module3), sortedDependencies = Common.topologicalSort(dependencies), status = [];
                for (var i = 0; i < sortedDependencies.length; i += 1) {
                  if (sortedDependencies[i] === module3.name) {
                    continue;
                  }
                  var plugin = Plugin.resolve(sortedDependencies[i]);
                  if (!plugin) {
                    status.push("\u274C " + sortedDependencies[i]);
                    continue;
                  }
                  if (Plugin.isUsed(module3, plugin.name)) {
                    continue;
                  }
                  if (!Plugin.isFor(plugin, module3)) {
                    Common.warn("Plugin.use:", Plugin.toString(plugin), "is for", plugin.for, "but installed on", Plugin.toString(module3) + ".");
                    plugin._warned = true;
                  }
                  if (plugin.install) {
                    plugin.install(module3);
                  } else {
                    Common.warn("Plugin.use:", Plugin.toString(plugin), "does not specify an install function.");
                    plugin._warned = true;
                  }
                  if (plugin._warned) {
                    status.push("\u{1F536} " + Plugin.toString(plugin));
                    delete plugin._warned;
                  } else {
                    status.push("\u2705 " + Plugin.toString(plugin));
                  }
                  module3.used.push(plugin.name);
                }
                if (status.length > 0) {
                  Common.info(status.join("  "));
                }
              };
              Plugin.dependencies = function(module3, tracked) {
                var parsedBase = Plugin.dependencyParse(module3), name = parsedBase.name;
                tracked = tracked || {};
                if (name in tracked) {
                  return;
                }
                module3 = Plugin.resolve(module3) || module3;
                tracked[name] = Common.map(module3.uses || [], function(dependency) {
                  if (Plugin.isPlugin(dependency)) {
                    Plugin.register(dependency);
                  }
                  var parsed = Plugin.dependencyParse(dependency), resolved = Plugin.resolve(dependency);
                  if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                    Common.warn(
                      "Plugin.dependencies:",
                      Plugin.toString(resolved),
                      "does not satisfy",
                      Plugin.toString(parsed),
                      "used by",
                      Plugin.toString(parsedBase) + "."
                    );
                    resolved._warned = true;
                    module3._warned = true;
                  } else if (!resolved) {
                    Common.warn(
                      "Plugin.dependencies:",
                      Plugin.toString(dependency),
                      "used by",
                      Plugin.toString(parsedBase),
                      "could not be resolved."
                    );
                    module3._warned = true;
                  }
                  return parsed.name;
                });
                for (var i = 0; i < tracked[name].length; i += 1) {
                  Plugin.dependencies(tracked[name][i], tracked);
                }
                return tracked;
              };
              Plugin.dependencyParse = function(dependency) {
                if (Common.isString(dependency)) {
                  var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                  if (!pattern.test(dependency)) {
                    Common.warn("Plugin.dependencyParse:", dependency, "is not a valid dependency string.");
                  }
                  return {
                    name: dependency.split("@")[0],
                    range: dependency.split("@")[1] || "*"
                  };
                }
                return {
                  name: dependency.name,
                  range: dependency.range || dependency.version
                };
              };
              Plugin.versionParse = function(range) {
                var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                if (!pattern.test(range)) {
                  Common.warn("Plugin.versionParse:", range, "is not a valid version or range.");
                }
                var parts = pattern.exec(range);
                var major = Number(parts[4]);
                var minor = Number(parts[5]);
                var patch = Number(parts[6]);
                return {
                  isRange: Boolean(parts[1] || parts[2]),
                  version: parts[3],
                  range,
                  operator: parts[1] || parts[2] || "",
                  major,
                  minor,
                  patch,
                  parts: [major, minor, patch],
                  prerelease: parts[7],
                  number: major * 1e8 + minor * 1e4 + patch
                };
              };
              Plugin.versionSatisfies = function(version, range) {
                range = range || "*";
                var r = Plugin.versionParse(range), v = Plugin.versionParse(version);
                if (r.isRange) {
                  if (r.operator === "*" || version === "*") {
                    return true;
                  }
                  if (r.operator === ">") {
                    return v.number > r.number;
                  }
                  if (r.operator === ">=") {
                    return v.number >= r.number;
                  }
                  if (r.operator === "~") {
                    return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
                  }
                  if (r.operator === "^") {
                    if (r.major > 0) {
                      return v.major === r.major && v.number >= r.number;
                    }
                    if (r.minor > 0) {
                      return v.minor === r.minor && v.patch >= r.patch;
                    }
                    return v.patch === r.patch;
                  }
                }
                return version === range || version === "*";
              };
            })();
          }),
          /* 16 */
          /***/
          (function(module2, exports2) {
            var Contact = {};
            module2.exports = Contact;
            (function() {
              Contact.create = function(vertex) {
                return {
                  vertex,
                  normalImpulse: 0,
                  tangentImpulse: 0
                };
              };
            })();
          }),
          /* 17 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Engine = {};
            module2.exports = Engine;
            var Sleeping = __webpack_require__(7);
            var Resolver = __webpack_require__(18);
            var Detector = __webpack_require__(13);
            var Pairs = __webpack_require__(19);
            var Events = __webpack_require__(5);
            var Composite = __webpack_require__(6);
            var Constraint = __webpack_require__(10);
            var Common = __webpack_require__(0);
            var Body = __webpack_require__(4);
            (function() {
              Engine._deltaMax = 1e3 / 60;
              Engine.create = function(options) {
                options = options || {};
                var defaults = {
                  positionIterations: 6,
                  velocityIterations: 4,
                  constraintIterations: 2,
                  enableSleeping: false,
                  events: [],
                  plugin: {},
                  gravity: {
                    x: 0,
                    y: 1,
                    scale: 1e-3
                  },
                  timing: {
                    timestamp: 0,
                    timeScale: 1,
                    lastDelta: 0,
                    lastElapsed: 0,
                    lastUpdatesPerFrame: 0
                  }
                };
                var engine = Common.extend(defaults, options);
                engine.world = options.world || Composite.create({ label: "World" });
                engine.pairs = options.pairs || Pairs.create();
                engine.detector = options.detector || Detector.create();
                engine.detector.pairs = engine.pairs;
                engine.grid = { buckets: [] };
                engine.world.gravity = engine.gravity;
                engine.broadphase = engine.grid;
                engine.metrics = {};
                return engine;
              };
              Engine.update = function(engine, delta) {
                var startTime = Common.now();
                var world = engine.world, detector = engine.detector, pairs = engine.pairs, timing = engine.timing, timestamp = timing.timestamp, i;
                if (delta > Engine._deltaMax) {
                  Common.warnOnce(
                    "Matter.Engine.update: delta argument is recommended to be less than or equal to",
                    Engine._deltaMax.toFixed(3),
                    "ms."
                  );
                }
                delta = typeof delta !== "undefined" ? delta : Common._baseDelta;
                delta *= timing.timeScale;
                timing.timestamp += delta;
                timing.lastDelta = delta;
                var event = {
                  timestamp: timing.timestamp,
                  delta
                };
                Events.trigger(engine, "beforeUpdate", event);
                var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world);
                if (world.isModified) {
                  Detector.setBodies(detector, allBodies);
                  Composite.setModified(world, false, false, true);
                }
                if (engine.enableSleeping)
                  Sleeping.update(allBodies, delta);
                Engine._bodiesApplyGravity(allBodies, engine.gravity);
                if (delta > 0) {
                  Engine._bodiesUpdate(allBodies, delta);
                }
                Events.trigger(engine, "beforeSolve", event);
                Constraint.preSolveAll(allBodies);
                for (i = 0; i < engine.constraintIterations; i++) {
                  Constraint.solveAll(allConstraints, delta);
                }
                Constraint.postSolveAll(allBodies);
                var collisions = Detector.collisions(detector);
                Pairs.update(pairs, collisions, timestamp);
                if (engine.enableSleeping)
                  Sleeping.afterCollisions(pairs.list);
                if (pairs.collisionStart.length > 0) {
                  Events.trigger(engine, "collisionStart", {
                    pairs: pairs.collisionStart,
                    timestamp: timing.timestamp,
                    delta
                  });
                }
                var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
                Resolver.preSolvePosition(pairs.list);
                for (i = 0; i < engine.positionIterations; i++) {
                  Resolver.solvePosition(pairs.list, delta, positionDamping);
                }
                Resolver.postSolvePosition(allBodies);
                Constraint.preSolveAll(allBodies);
                for (i = 0; i < engine.constraintIterations; i++) {
                  Constraint.solveAll(allConstraints, delta);
                }
                Constraint.postSolveAll(allBodies);
                Resolver.preSolveVelocity(pairs.list);
                for (i = 0; i < engine.velocityIterations; i++) {
                  Resolver.solveVelocity(pairs.list, delta);
                }
                Engine._bodiesUpdateVelocities(allBodies);
                if (pairs.collisionActive.length > 0) {
                  Events.trigger(engine, "collisionActive", {
                    pairs: pairs.collisionActive,
                    timestamp: timing.timestamp,
                    delta
                  });
                }
                if (pairs.collisionEnd.length > 0) {
                  Events.trigger(engine, "collisionEnd", {
                    pairs: pairs.collisionEnd,
                    timestamp: timing.timestamp,
                    delta
                  });
                }
                Engine._bodiesClearForces(allBodies);
                Events.trigger(engine, "afterUpdate", event);
                engine.timing.lastElapsed = Common.now() - startTime;
                return engine;
              };
              Engine.merge = function(engineA, engineB) {
                Common.extend(engineA, engineB);
                if (engineB.world) {
                  engineA.world = engineB.world;
                  Engine.clear(engineA);
                  var bodies = Composite.allBodies(engineA.world);
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i];
                    Sleeping.set(body, false);
                    body.id = Common.nextId();
                  }
                }
              };
              Engine.clear = function(engine) {
                Pairs.clear(engine.pairs);
                Detector.clear(engine.detector);
              };
              Engine._bodiesClearForces = function(bodies) {
                var bodiesLength = bodies.length;
                for (var i = 0; i < bodiesLength; i++) {
                  var body = bodies[i];
                  body.force.x = 0;
                  body.force.y = 0;
                  body.torque = 0;
                }
              };
              Engine._bodiesApplyGravity = function(bodies, gravity) {
                var gravityScale = typeof gravity.scale !== "undefined" ? gravity.scale : 1e-3, bodiesLength = bodies.length;
                if (gravity.x === 0 && gravity.y === 0 || gravityScale === 0) {
                  return;
                }
                for (var i = 0; i < bodiesLength; i++) {
                  var body = bodies[i];
                  if (body.isStatic || body.isSleeping)
                    continue;
                  body.force.y += body.mass * gravity.y * gravityScale;
                  body.force.x += body.mass * gravity.x * gravityScale;
                }
              };
              Engine._bodiesUpdate = function(bodies, delta) {
                var bodiesLength = bodies.length;
                for (var i = 0; i < bodiesLength; i++) {
                  var body = bodies[i];
                  if (body.isStatic || body.isSleeping)
                    continue;
                  Body.update(body, delta);
                }
              };
              Engine._bodiesUpdateVelocities = function(bodies) {
                var bodiesLength = bodies.length;
                for (var i = 0; i < bodiesLength; i++) {
                  Body.updateVelocities(bodies[i]);
                }
              };
            })();
          }),
          /* 18 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Resolver = {};
            module2.exports = Resolver;
            var Vertices = __webpack_require__(3);
            var Common = __webpack_require__(0);
            var Bounds = __webpack_require__(1);
            (function() {
              Resolver._restingThresh = 2;
              Resolver._restingThreshTangent = Math.sqrt(6);
              Resolver._positionDampen = 0.9;
              Resolver._positionWarming = 0.8;
              Resolver._frictionNormalMultiplier = 5;
              Resolver._frictionMaxStatic = Number.MAX_VALUE;
              Resolver.preSolvePosition = function(pairs) {
                var i, pair, contactCount, pairsLength = pairs.length;
                for (i = 0; i < pairsLength; i++) {
                  pair = pairs[i];
                  if (!pair.isActive)
                    continue;
                  contactCount = pair.contactCount;
                  pair.collision.parentA.totalContacts += contactCount;
                  pair.collision.parentB.totalContacts += contactCount;
                }
              };
              Resolver.solvePosition = function(pairs, delta, damping) {
                var i, pair, collision, bodyA, bodyB, normal, contactShare, positionImpulse, positionDampen = Resolver._positionDampen * (damping || 1), slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1), pairsLength = pairs.length;
                for (i = 0; i < pairsLength; i++) {
                  pair = pairs[i];
                  if (!pair.isActive || pair.isSensor)
                    continue;
                  collision = pair.collision;
                  bodyA = collision.parentA;
                  bodyB = collision.parentB;
                  normal = collision.normal;
                  pair.separation = collision.depth + normal.x * (bodyB.positionImpulse.x - bodyA.positionImpulse.x) + normal.y * (bodyB.positionImpulse.y - bodyA.positionImpulse.y);
                }
                for (i = 0; i < pairsLength; i++) {
                  pair = pairs[i];
                  if (!pair.isActive || pair.isSensor)
                    continue;
                  collision = pair.collision;
                  bodyA = collision.parentA;
                  bodyB = collision.parentB;
                  normal = collision.normal;
                  positionImpulse = pair.separation - pair.slop * slopDampen;
                  if (bodyA.isStatic || bodyB.isStatic)
                    positionImpulse *= 2;
                  if (!(bodyA.isStatic || bodyA.isSleeping)) {
                    contactShare = positionDampen / bodyA.totalContacts;
                    bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                    bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
                  }
                  if (!(bodyB.isStatic || bodyB.isSleeping)) {
                    contactShare = positionDampen / bodyB.totalContacts;
                    bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                    bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
                  }
                }
              };
              Resolver.postSolvePosition = function(bodies) {
                var positionWarming = Resolver._positionWarming, bodiesLength = bodies.length, verticesTranslate = Vertices.translate, boundsUpdate = Bounds.update;
                for (var i = 0; i < bodiesLength; i++) {
                  var body = bodies[i], positionImpulse = body.positionImpulse, positionImpulseX = positionImpulse.x, positionImpulseY = positionImpulse.y, velocity = body.velocity;
                  body.totalContacts = 0;
                  if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                    for (var j = 0; j < body.parts.length; j++) {
                      var part = body.parts[j];
                      verticesTranslate(part.vertices, positionImpulse);
                      boundsUpdate(part.bounds, part.vertices, velocity);
                      part.position.x += positionImpulseX;
                      part.position.y += positionImpulseY;
                    }
                    body.positionPrev.x += positionImpulseX;
                    body.positionPrev.y += positionImpulseY;
                    if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                      positionImpulse.x = 0;
                      positionImpulse.y = 0;
                    } else {
                      positionImpulse.x *= positionWarming;
                      positionImpulse.y *= positionWarming;
                    }
                  }
                }
              };
              Resolver.preSolveVelocity = function(pairs) {
                var pairsLength = pairs.length, i, j;
                for (i = 0; i < pairsLength; i++) {
                  var pair = pairs[i];
                  if (!pair.isActive || pair.isSensor)
                    continue;
                  var contacts = pair.contacts, contactCount = pair.contactCount, collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normal = collision.normal, tangent = collision.tangent;
                  for (j = 0; j < contactCount; j++) {
                    var contact = contacts[j], contactVertex = contact.vertex, normalImpulse = contact.normalImpulse, tangentImpulse = contact.tangentImpulse;
                    if (normalImpulse !== 0 || tangentImpulse !== 0) {
                      var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse, impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                      if (!(bodyA.isStatic || bodyA.isSleeping)) {
                        bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                        bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                        bodyA.anglePrev += bodyA.inverseInertia * ((contactVertex.x - bodyA.position.x) * impulseY - (contactVertex.y - bodyA.position.y) * impulseX);
                      }
                      if (!(bodyB.isStatic || bodyB.isSleeping)) {
                        bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                        bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                        bodyB.anglePrev -= bodyB.inverseInertia * ((contactVertex.x - bodyB.position.x) * impulseY - (contactVertex.y - bodyB.position.y) * impulseX);
                      }
                    }
                  }
                }
              };
              Resolver.solveVelocity = function(pairs, delta) {
                var timeScale = delta / Common._baseDelta, timeScaleSquared = timeScale * timeScale, timeScaleCubed = timeScaleSquared * timeScale, restingThresh = -Resolver._restingThresh * timeScale, restingThreshTangent = Resolver._restingThreshTangent, frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale, frictionMaxStatic = Resolver._frictionMaxStatic, pairsLength = pairs.length, tangentImpulse, maxFriction, i, j;
                for (i = 0; i < pairsLength; i++) {
                  var pair = pairs[i];
                  if (!pair.isActive || pair.isSensor)
                    continue;
                  var collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normalX = collision.normal.x, normalY = collision.normal.y, tangentX = collision.tangent.x, tangentY = collision.tangent.y, inverseMassTotal = pair.inverseMass, friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier, contacts = pair.contacts, contactCount = pair.contactCount, contactShare = 1 / contactCount;
                  var bodyAVelocityX = bodyA.position.x - bodyA.positionPrev.x, bodyAVelocityY = bodyA.position.y - bodyA.positionPrev.y, bodyAAngularVelocity = bodyA.angle - bodyA.anglePrev, bodyBVelocityX = bodyB.position.x - bodyB.positionPrev.x, bodyBVelocityY = bodyB.position.y - bodyB.positionPrev.y, bodyBAngularVelocity = bodyB.angle - bodyB.anglePrev;
                  for (j = 0; j < contactCount; j++) {
                    var contact = contacts[j], contactVertex = contact.vertex;
                    var offsetAX = contactVertex.x - bodyA.position.x, offsetAY = contactVertex.y - bodyA.position.y, offsetBX = contactVertex.x - bodyB.position.x, offsetBY = contactVertex.y - bodyB.position.y;
                    var velocityPointAX = bodyAVelocityX - offsetAY * bodyAAngularVelocity, velocityPointAY = bodyAVelocityY + offsetAX * bodyAAngularVelocity, velocityPointBX = bodyBVelocityX - offsetBY * bodyBAngularVelocity, velocityPointBY = bodyBVelocityY + offsetBX * bodyBAngularVelocity;
                    var relativeVelocityX = velocityPointAX - velocityPointBX, relativeVelocityY = velocityPointAY - velocityPointBY;
                    var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY, tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;
                    var normalOverlap = pair.separation + normalVelocity;
                    var normalForce = Math.min(normalOverlap, 1);
                    normalForce = normalOverlap < 0 ? 0 : normalForce;
                    var frictionLimit = normalForce * friction;
                    if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
                      maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
                      tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
                      if (tangentImpulse < -maxFriction) {
                        tangentImpulse = -maxFriction;
                      } else if (tangentImpulse > maxFriction) {
                        tangentImpulse = maxFriction;
                      }
                    } else {
                      tangentImpulse = tangentVelocity;
                      maxFriction = frictionMaxStatic;
                    }
                    var oAcN = offsetAX * normalY - offsetAY * normalX, oBcN = offsetBX * normalY - offsetBY * normalX, share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);
                    var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                    tangentImpulse *= share;
                    if (normalVelocity < restingThresh) {
                      contact.normalImpulse = 0;
                    } else {
                      var contactNormalImpulse = contact.normalImpulse;
                      contact.normalImpulse += normalImpulse;
                      if (contact.normalImpulse > 0) contact.normalImpulse = 0;
                      normalImpulse = contact.normalImpulse - contactNormalImpulse;
                    }
                    if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) {
                      contact.tangentImpulse = 0;
                    } else {
                      var contactTangentImpulse = contact.tangentImpulse;
                      contact.tangentImpulse += tangentImpulse;
                      if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
                      if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
                      tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                    }
                    var impulseX = normalX * normalImpulse + tangentX * tangentImpulse, impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                      bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                      bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                      bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                    }
                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                      bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                      bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                      bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                    }
                  }
                }
              };
            })();
          }),
          /* 19 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Pairs = {};
            module2.exports = Pairs;
            var Pair = __webpack_require__(9);
            var Common = __webpack_require__(0);
            (function() {
              Pairs.create = function(options) {
                return Common.extend({
                  table: {},
                  list: [],
                  collisionStart: [],
                  collisionActive: [],
                  collisionEnd: []
                }, options);
              };
              Pairs.update = function(pairs, collisions, timestamp) {
                var pairUpdate = Pair.update, pairCreate = Pair.create, pairSetActive = Pair.setActive, pairsTable = pairs.table, pairsList = pairs.list, pairsListLength = pairsList.length, pairsListIndex = pairsListLength, collisionStart = pairs.collisionStart, collisionEnd = pairs.collisionEnd, collisionActive = pairs.collisionActive, collisionsLength = collisions.length, collisionStartIndex = 0, collisionEndIndex = 0, collisionActiveIndex = 0, collision, pair, i;
                for (i = 0; i < collisionsLength; i++) {
                  collision = collisions[i];
                  pair = collision.pair;
                  if (pair) {
                    if (pair.isActive) {
                      collisionActive[collisionActiveIndex++] = pair;
                    }
                    pairUpdate(pair, collision, timestamp);
                  } else {
                    pair = pairCreate(collision, timestamp);
                    pairsTable[pair.id] = pair;
                    collisionStart[collisionStartIndex++] = pair;
                    pairsList[pairsListIndex++] = pair;
                  }
                }
                pairsListIndex = 0;
                pairsListLength = pairsList.length;
                for (i = 0; i < pairsListLength; i++) {
                  pair = pairsList[i];
                  if (pair.timeUpdated >= timestamp) {
                    pairsList[pairsListIndex++] = pair;
                  } else {
                    pairSetActive(pair, false, timestamp);
                    if (pair.collision.bodyA.sleepCounter > 0 && pair.collision.bodyB.sleepCounter > 0) {
                      pairsList[pairsListIndex++] = pair;
                    } else {
                      collisionEnd[collisionEndIndex++] = pair;
                      delete pairsTable[pair.id];
                    }
                  }
                }
                if (pairsList.length !== pairsListIndex) {
                  pairsList.length = pairsListIndex;
                }
                if (collisionStart.length !== collisionStartIndex) {
                  collisionStart.length = collisionStartIndex;
                }
                if (collisionEnd.length !== collisionEndIndex) {
                  collisionEnd.length = collisionEndIndex;
                }
                if (collisionActive.length !== collisionActiveIndex) {
                  collisionActive.length = collisionActiveIndex;
                }
              };
              Pairs.clear = function(pairs) {
                pairs.table = {};
                pairs.list.length = 0;
                pairs.collisionStart.length = 0;
                pairs.collisionActive.length = 0;
                pairs.collisionEnd.length = 0;
                return pairs;
              };
            })();
          }),
          /* 20 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Matter4 = module2.exports = __webpack_require__(21);
            Matter4.Axes = __webpack_require__(11);
            Matter4.Bodies = __webpack_require__(12);
            Matter4.Body = __webpack_require__(4);
            Matter4.Bounds = __webpack_require__(1);
            Matter4.Collision = __webpack_require__(8);
            Matter4.Common = __webpack_require__(0);
            Matter4.Composite = __webpack_require__(6);
            Matter4.Composites = __webpack_require__(22);
            Matter4.Constraint = __webpack_require__(10);
            Matter4.Contact = __webpack_require__(16);
            Matter4.Detector = __webpack_require__(13);
            Matter4.Engine = __webpack_require__(17);
            Matter4.Events = __webpack_require__(5);
            Matter4.Grid = __webpack_require__(23);
            Matter4.Mouse = __webpack_require__(14);
            Matter4.MouseConstraint = __webpack_require__(24);
            Matter4.Pair = __webpack_require__(9);
            Matter4.Pairs = __webpack_require__(19);
            Matter4.Plugin = __webpack_require__(15);
            Matter4.Query = __webpack_require__(25);
            Matter4.Render = __webpack_require__(26);
            Matter4.Resolver = __webpack_require__(18);
            Matter4.Runner = __webpack_require__(27);
            Matter4.SAT = __webpack_require__(28);
            Matter4.Sleeping = __webpack_require__(7);
            Matter4.Svg = __webpack_require__(29);
            Matter4.Vector = __webpack_require__(2);
            Matter4.Vertices = __webpack_require__(3);
            Matter4.World = __webpack_require__(30);
            Matter4.Engine.run = Matter4.Runner.run;
            Matter4.Common.deprecated(Matter4.Engine, "run", "Engine.run \u27A4 use Matter.Runner.run(engine) instead");
          }),
          /* 21 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Matter4 = {};
            module2.exports = Matter4;
            var Plugin = __webpack_require__(15);
            var Common = __webpack_require__(0);
            (function() {
              Matter4.name = "matter-js";
              Matter4.version = true ? "0.20.0" : void 0;
              Matter4.uses = [];
              Matter4.used = [];
              Matter4.use = function() {
                Plugin.use(Matter4, Array.prototype.slice.call(arguments));
              };
              Matter4.before = function(path, func) {
                path = path.replace(/^Matter./, "");
                return Common.chainPathBefore(Matter4, path, func);
              };
              Matter4.after = function(path, func) {
                path = path.replace(/^Matter./, "");
                return Common.chainPathAfter(Matter4, path, func);
              };
            })();
          }),
          /* 22 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Composites = {};
            module2.exports = Composites;
            var Composite = __webpack_require__(6);
            var Constraint = __webpack_require__(10);
            var Common = __webpack_require__(0);
            var Body = __webpack_require__(4);
            var Bodies = __webpack_require__(12);
            var deprecated = Common.deprecated;
            (function() {
              Composites.stack = function(x, y, columns, rows, columnGap, rowGap, callback) {
                var stack = Composite.create({ label: "Stack" }), currentX = x, currentY = y, lastBody, i = 0;
                for (var row = 0; row < rows; row++) {
                  var maxHeight = 0;
                  for (var column = 0; column < columns; column++) {
                    var body = callback(currentX, currentY, column, row, lastBody, i);
                    if (body) {
                      var bodyHeight = body.bounds.max.y - body.bounds.min.y, bodyWidth = body.bounds.max.x - body.bounds.min.x;
                      if (bodyHeight > maxHeight)
                        maxHeight = bodyHeight;
                      Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });
                      currentX = body.bounds.max.x + columnGap;
                      Composite.addBody(stack, body);
                      lastBody = body;
                      i += 1;
                    } else {
                      currentX += columnGap;
                    }
                  }
                  currentY += maxHeight + rowGap;
                  currentX = x;
                }
                return stack;
              };
              Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
                var bodies = composite.bodies;
                for (var i = 1; i < bodies.length; i++) {
                  var bodyA = bodies[i - 1], bodyB = bodies[i], bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y, bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y, bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
                  var defaults = {
                    bodyA,
                    pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                    bodyB,
                    pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
                  };
                  var constraint = Common.extend(defaults, options);
                  Composite.addConstraint(composite, Constraint.create(constraint));
                }
                composite.label += " Chain";
                return composite;
              };
              Composites.mesh = function(composite, columns, rows, crossBrace, options) {
                var bodies = composite.bodies, row, col, bodyA, bodyB, bodyC;
                for (row = 0; row < rows; row++) {
                  for (col = 1; col < columns; col++) {
                    bodyA = bodies[col - 1 + row * columns];
                    bodyB = bodies[col + row * columns];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));
                  }
                  if (row > 0) {
                    for (col = 0; col < columns; col++) {
                      bodyA = bodies[col + (row - 1) * columns];
                      bodyB = bodies[col + row * columns];
                      Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));
                      if (crossBrace && col > 0) {
                        bodyC = bodies[col - 1 + (row - 1) * columns];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));
                      }
                      if (crossBrace && col < columns - 1) {
                        bodyC = bodies[col + 1 + (row - 1) * columns];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));
                      }
                    }
                  }
                }
                composite.label += " Mesh";
                return composite;
              };
              Composites.pyramid = function(x, y, columns, rows, columnGap, rowGap, callback) {
                return Composites.stack(x, y, columns, rows, columnGap, rowGap, function(stackX, stackY, column, row, lastBody, i) {
                  var actualRows = Math.min(rows, Math.ceil(columns / 2)), lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
                  if (row > actualRows)
                    return;
                  row = actualRows - row;
                  var start = row, end = columns - 1 - row;
                  if (column < start || column > end)
                    return;
                  if (i === 1) {
                    Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
                  }
                  var xOffset = lastBody ? column * lastBodyWidth : 0;
                  return callback(x + xOffset + column * columnGap, stackY, column, row, lastBody, i);
                });
              };
              Composites.newtonsCradle = function(x, y, number, size, length) {
                var newtonsCradle = Composite.create({ label: "Newtons Cradle" });
                for (var i = 0; i < number; i++) {
                  var separation = 1.9, circle = Bodies.circle(
                    x + i * (size * separation),
                    y + length,
                    size,
                    { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 1e-4, slop: 1 }
                  ), constraint = Constraint.create({ pointA: { x: x + i * (size * separation), y }, bodyB: circle });
                  Composite.addBody(newtonsCradle, circle);
                  Composite.addConstraint(newtonsCradle, constraint);
                }
                return newtonsCradle;
              };
              deprecated(Composites, "newtonsCradle", "Composites.newtonsCradle \u27A4 moved to newtonsCradle example");
              Composites.car = function(x, y, width, height, wheelSize) {
                var group = Body.nextGroup(true), wheelBase = 20, wheelAOffset = -width * 0.5 + wheelBase, wheelBOffset = width * 0.5 - wheelBase, wheelYOffset = 0;
                var car = Composite.create({ label: "Car" }), body = Bodies.rectangle(x, y, width, height, {
                  collisionFilter: {
                    group
                  },
                  chamfer: {
                    radius: height * 0.5
                  },
                  density: 2e-4
                });
                var wheelA = Bodies.circle(x + wheelAOffset, y + wheelYOffset, wheelSize, {
                  collisionFilter: {
                    group
                  },
                  friction: 0.8
                });
                var wheelB = Bodies.circle(x + wheelBOffset, y + wheelYOffset, wheelSize, {
                  collisionFilter: {
                    group
                  },
                  friction: 0.8
                });
                var axelA = Constraint.create({
                  bodyB: body,
                  pointB: { x: wheelAOffset, y: wheelYOffset },
                  bodyA: wheelA,
                  stiffness: 1,
                  length: 0
                });
                var axelB = Constraint.create({
                  bodyB: body,
                  pointB: { x: wheelBOffset, y: wheelYOffset },
                  bodyA: wheelB,
                  stiffness: 1,
                  length: 0
                });
                Composite.addBody(car, body);
                Composite.addBody(car, wheelA);
                Composite.addBody(car, wheelB);
                Composite.addConstraint(car, axelA);
                Composite.addConstraint(car, axelB);
                return car;
              };
              deprecated(Composites, "car", "Composites.car \u27A4 moved to car example");
              Composites.softBody = function(x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
                particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
                constraintOptions = Common.extend({ stiffness: 0.2, render: { type: "line", anchors: false } }, constraintOptions);
                var softBody = Composites.stack(x, y, columns, rows, columnGap, rowGap, function(stackX, stackY) {
                  return Bodies.circle(stackX, stackY, particleRadius, particleOptions);
                });
                Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);
                softBody.label = "Soft Body";
                return softBody;
              };
              deprecated(Composites, "softBody", "Composites.softBody \u27A4 moved to softBody and cloth examples");
            })();
          }),
          /* 23 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Grid = {};
            module2.exports = Grid;
            var Pair = __webpack_require__(9);
            var Common = __webpack_require__(0);
            var deprecated = Common.deprecated;
            (function() {
              Grid.create = function(options) {
                var defaults = {
                  buckets: {},
                  pairs: {},
                  pairsList: [],
                  bucketWidth: 48,
                  bucketHeight: 48
                };
                return Common.extend(defaults, options);
              };
              Grid.update = function(grid, bodies, engine, forceUpdate) {
                var i, col, row, world = engine.world, buckets = grid.buckets, bucket, bucketId, gridChanged = false;
                for (i = 0; i < bodies.length; i++) {
                  var body = bodies[i];
                  if (body.isSleeping && !forceUpdate)
                    continue;
                  if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
                    continue;
                  var newRegion = Grid._getRegion(grid, body);
                  if (!body.region || newRegion.id !== body.region.id || forceUpdate) {
                    if (!body.region || forceUpdate)
                      body.region = newRegion;
                    var union = Grid._regionUnion(newRegion, body.region);
                    for (col = union.startCol; col <= union.endCol; col++) {
                      for (row = union.startRow; row <= union.endRow; row++) {
                        bucketId = Grid._getBucketId(col, row);
                        bucket = buckets[bucketId];
                        var isInsideNewRegion = col >= newRegion.startCol && col <= newRegion.endCol && row >= newRegion.startRow && row <= newRegion.endRow;
                        var isInsideOldRegion = col >= body.region.startCol && col <= body.region.endCol && row >= body.region.startRow && row <= body.region.endRow;
                        if (!isInsideNewRegion && isInsideOldRegion) {
                          if (isInsideOldRegion) {
                            if (bucket)
                              Grid._bucketRemoveBody(grid, bucket, body);
                          }
                        }
                        if (body.region === newRegion || isInsideNewRegion && !isInsideOldRegion || forceUpdate) {
                          if (!bucket)
                            bucket = Grid._createBucket(buckets, bucketId);
                          Grid._bucketAddBody(grid, bucket, body);
                        }
                      }
                    }
                    body.region = newRegion;
                    gridChanged = true;
                  }
                }
                if (gridChanged)
                  grid.pairsList = Grid._createActivePairsList(grid);
              };
              deprecated(Grid, "update", "Grid.update \u27A4 replaced by Matter.Detector");
              Grid.clear = function(grid) {
                grid.buckets = {};
                grid.pairs = {};
                grid.pairsList = [];
              };
              deprecated(Grid, "clear", "Grid.clear \u27A4 replaced by Matter.Detector");
              Grid._regionUnion = function(regionA, regionB) {
                var startCol = Math.min(regionA.startCol, regionB.startCol), endCol = Math.max(regionA.endCol, regionB.endCol), startRow = Math.min(regionA.startRow, regionB.startRow), endRow = Math.max(regionA.endRow, regionB.endRow);
                return Grid._createRegion(startCol, endCol, startRow, endRow);
              };
              Grid._getRegion = function(grid, body) {
                var bounds = body.bounds, startCol = Math.floor(bounds.min.x / grid.bucketWidth), endCol = Math.floor(bounds.max.x / grid.bucketWidth), startRow = Math.floor(bounds.min.y / grid.bucketHeight), endRow = Math.floor(bounds.max.y / grid.bucketHeight);
                return Grid._createRegion(startCol, endCol, startRow, endRow);
              };
              Grid._createRegion = function(startCol, endCol, startRow, endRow) {
                return {
                  id: startCol + "," + endCol + "," + startRow + "," + endRow,
                  startCol,
                  endCol,
                  startRow,
                  endRow
                };
              };
              Grid._getBucketId = function(column, row) {
                return "C" + column + "R" + row;
              };
              Grid._createBucket = function(buckets, bucketId) {
                var bucket = buckets[bucketId] = [];
                return bucket;
              };
              Grid._bucketAddBody = function(grid, bucket, body) {
                var gridPairs = grid.pairs, pairId = Pair.id, bucketLength = bucket.length, i;
                for (i = 0; i < bucketLength; i++) {
                  var bodyB = bucket[i];
                  if (body.id === bodyB.id || body.isStatic && bodyB.isStatic)
                    continue;
                  var id = pairId(body, bodyB), pair = gridPairs[id];
                  if (pair) {
                    pair[2] += 1;
                  } else {
                    gridPairs[id] = [body, bodyB, 1];
                  }
                }
                bucket.push(body);
              };
              Grid._bucketRemoveBody = function(grid, bucket, body) {
                var gridPairs = grid.pairs, pairId = Pair.id, i;
                bucket.splice(Common.indexOf(bucket, body), 1);
                var bucketLength = bucket.length;
                for (i = 0; i < bucketLength; i++) {
                  var pair = gridPairs[pairId(body, bucket[i])];
                  if (pair)
                    pair[2] -= 1;
                }
              };
              Grid._createActivePairsList = function(grid) {
                var pair, gridPairs = grid.pairs, pairKeys = Common.keys(gridPairs), pairKeysLength = pairKeys.length, pairs = [], k;
                for (k = 0; k < pairKeysLength; k++) {
                  pair = gridPairs[pairKeys[k]];
                  if (pair[2] > 0) {
                    pairs.push(pair);
                  } else {
                    delete gridPairs[pairKeys[k]];
                  }
                }
                return pairs;
              };
            })();
          }),
          /* 24 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var MouseConstraint = {};
            module2.exports = MouseConstraint;
            var Vertices = __webpack_require__(3);
            var Sleeping = __webpack_require__(7);
            var Mouse = __webpack_require__(14);
            var Events = __webpack_require__(5);
            var Detector = __webpack_require__(13);
            var Constraint = __webpack_require__(10);
            var Composite = __webpack_require__(6);
            var Common = __webpack_require__(0);
            var Bounds = __webpack_require__(1);
            (function() {
              MouseConstraint.create = function(engine, options) {
                var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);
                if (!mouse) {
                  if (engine && engine.render && engine.render.canvas) {
                    mouse = Mouse.create(engine.render.canvas);
                  } else if (options && options.element) {
                    mouse = Mouse.create(options.element);
                  } else {
                    mouse = Mouse.create();
                    Common.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected");
                  }
                }
                var constraint = Constraint.create({
                  label: "Mouse Constraint",
                  pointA: mouse.position,
                  pointB: { x: 0, y: 0 },
                  length: 0.01,
                  stiffness: 0.1,
                  angularStiffness: 1,
                  render: {
                    strokeStyle: "#90EE90",
                    lineWidth: 3
                  }
                });
                var defaults = {
                  type: "mouseConstraint",
                  mouse,
                  element: null,
                  body: null,
                  constraint,
                  collisionFilter: {
                    category: 1,
                    mask: 4294967295,
                    group: 0
                  }
                };
                var mouseConstraint = Common.extend(defaults, options);
                Events.on(engine, "beforeUpdate", function() {
                  var allBodies = Composite.allBodies(engine.world);
                  MouseConstraint.update(mouseConstraint, allBodies);
                  MouseConstraint._triggerEvents(mouseConstraint);
                });
                return mouseConstraint;
              };
              MouseConstraint.update = function(mouseConstraint, bodies) {
                var mouse = mouseConstraint.mouse, constraint = mouseConstraint.constraint, body = mouseConstraint.body;
                if (mouse.button === 0) {
                  if (!constraint.bodyB) {
                    for (var i = 0; i < bodies.length; i++) {
                      body = bodies[i];
                      if (Bounds.contains(body.bounds, mouse.position) && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                        for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                          var part = body.parts[j];
                          if (Vertices.contains(part.vertices, mouse.position)) {
                            constraint.pointA = mouse.position;
                            constraint.bodyB = mouseConstraint.body = body;
                            constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                            constraint.angleB = body.angle;
                            Sleeping.set(body, false);
                            Events.trigger(mouseConstraint, "startdrag", { mouse, body });
                            break;
                          }
                        }
                      }
                    }
                  } else {
                    Sleeping.set(constraint.bodyB, false);
                    constraint.pointA = mouse.position;
                  }
                } else {
                  constraint.bodyB = mouseConstraint.body = null;
                  constraint.pointB = null;
                  if (body)
                    Events.trigger(mouseConstraint, "enddrag", { mouse, body });
                }
              };
              MouseConstraint._triggerEvents = function(mouseConstraint) {
                var mouse = mouseConstraint.mouse, mouseEvents = mouse.sourceEvents;
                if (mouseEvents.mousemove)
                  Events.trigger(mouseConstraint, "mousemove", { mouse });
                if (mouseEvents.mousedown)
                  Events.trigger(mouseConstraint, "mousedown", { mouse });
                if (mouseEvents.mouseup)
                  Events.trigger(mouseConstraint, "mouseup", { mouse });
                Mouse.clearSourceEvents(mouse);
              };
            })();
          }),
          /* 25 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Query = {};
            module2.exports = Query;
            var Vector = __webpack_require__(2);
            var Collision = __webpack_require__(8);
            var Bounds = __webpack_require__(1);
            var Bodies = __webpack_require__(12);
            var Vertices = __webpack_require__(3);
            (function() {
              Query.collides = function(body, bodies) {
                var collisions = [], bodiesLength = bodies.length, bounds = body.bounds, collides = Collision.collides, overlaps = Bounds.overlaps;
                for (var i = 0; i < bodiesLength; i++) {
                  var bodyA = bodies[i], partsALength = bodyA.parts.length, partsAStart = partsALength === 1 ? 0 : 1;
                  if (overlaps(bodyA.bounds, bounds)) {
                    for (var j = partsAStart; j < partsALength; j++) {
                      var part = bodyA.parts[j];
                      if (overlaps(part.bounds, bounds)) {
                        var collision = collides(part, body);
                        if (collision) {
                          collisions.push(collision);
                          break;
                        }
                      }
                    }
                  }
                }
                return collisions;
              };
              Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
                rayWidth = rayWidth || 1e-100;
                var rayAngle = Vector.angle(startPoint, endPoint), rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)), rayX = (endPoint.x + startPoint.x) * 0.5, rayY = (endPoint.y + startPoint.y) * 0.5, ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }), collisions = Query.collides(ray, bodies);
                for (var i = 0; i < collisions.length; i += 1) {
                  var collision = collisions[i];
                  collision.body = collision.bodyB = collision.bodyA;
                }
                return collisions;
              };
              Query.region = function(bodies, bounds, outside) {
                var result = [];
                for (var i = 0; i < bodies.length; i++) {
                  var body = bodies[i], overlaps = Bounds.overlaps(body.bounds, bounds);
                  if (overlaps && !outside || !overlaps && outside)
                    result.push(body);
                }
                return result;
              };
              Query.point = function(bodies, point) {
                var result = [];
                for (var i = 0; i < bodies.length; i++) {
                  var body = bodies[i];
                  if (Bounds.contains(body.bounds, point)) {
                    for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                      var part = body.parts[j];
                      if (Bounds.contains(part.bounds, point) && Vertices.contains(part.vertices, point)) {
                        result.push(body);
                        break;
                      }
                    }
                  }
                }
                return result;
              };
            })();
          }),
          /* 26 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Render = {};
            module2.exports = Render;
            var Body = __webpack_require__(4);
            var Common = __webpack_require__(0);
            var Composite = __webpack_require__(6);
            var Bounds = __webpack_require__(1);
            var Events = __webpack_require__(5);
            var Vector = __webpack_require__(2);
            var Mouse = __webpack_require__(14);
            (function() {
              var _requestAnimationFrame, _cancelAnimationFrame;
              if (typeof window !== "undefined") {
                _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                  window.setTimeout(function() {
                    callback(Common.now());
                  }, 1e3 / 60);
                };
                _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
              }
              Render._goodFps = 30;
              Render._goodDelta = 1e3 / 60;
              Render.create = function(options) {
                var defaults = {
                  engine: null,
                  element: null,
                  canvas: null,
                  mouse: null,
                  frameRequestId: null,
                  timing: {
                    historySize: 60,
                    delta: 0,
                    deltaHistory: [],
                    lastTime: 0,
                    lastTimestamp: 0,
                    lastElapsed: 0,
                    timestampElapsed: 0,
                    timestampElapsedHistory: [],
                    engineDeltaHistory: [],
                    engineElapsedHistory: [],
                    engineUpdatesHistory: [],
                    elapsedHistory: []
                  },
                  options: {
                    width: 800,
                    height: 600,
                    pixelRatio: 1,
                    background: "#14151f",
                    wireframeBackground: "#14151f",
                    wireframeStrokeStyle: "#bbb",
                    hasBounds: !!options.bounds,
                    enabled: true,
                    wireframes: true,
                    showSleeping: true,
                    showDebug: false,
                    showStats: false,
                    showPerformance: false,
                    showBounds: false,
                    showVelocity: false,
                    showCollisions: false,
                    showSeparations: false,
                    showAxes: false,
                    showPositions: false,
                    showAngleIndicator: false,
                    showIds: false,
                    showVertexNumbers: false,
                    showConvexHulls: false,
                    showInternalEdges: false,
                    showMousePosition: false
                  }
                };
                var render = Common.extend(defaults, options);
                if (render.canvas) {
                  render.canvas.width = render.options.width || render.canvas.width;
                  render.canvas.height = render.options.height || render.canvas.height;
                }
                render.mouse = options.mouse;
                render.engine = options.engine;
                render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
                render.context = render.canvas.getContext("2d");
                render.textures = {};
                render.bounds = render.bounds || {
                  min: {
                    x: 0,
                    y: 0
                  },
                  max: {
                    x: render.canvas.width,
                    y: render.canvas.height
                  }
                };
                render.controller = Render;
                render.options.showBroadphase = false;
                if (render.options.pixelRatio !== 1) {
                  Render.setPixelRatio(render, render.options.pixelRatio);
                }
                if (Common.isElement(render.element)) {
                  render.element.appendChild(render.canvas);
                }
                return render;
              };
              Render.run = function(render) {
                (/* @__PURE__ */ __name((function loop(time) {
                  render.frameRequestId = _requestAnimationFrame(loop);
                  _updateTiming(render, time);
                  Render.world(render, time);
                  render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                  if (render.options.showStats || render.options.showDebug) {
                    Render.stats(render, render.context, time);
                  }
                  if (render.options.showPerformance || render.options.showDebug) {
                    Render.performance(render, render.context, time);
                  }
                  render.context.setTransform(1, 0, 0, 1, 0, 0);
                }), "loop"))();
              };
              Render.stop = function(render) {
                _cancelAnimationFrame(render.frameRequestId);
              };
              Render.setPixelRatio = function(render, pixelRatio) {
                var options = render.options, canvas = render.canvas;
                if (pixelRatio === "auto") {
                  pixelRatio = _getPixelRatio(canvas);
                }
                options.pixelRatio = pixelRatio;
                canvas.setAttribute("data-pixel-ratio", pixelRatio);
                canvas.width = options.width * pixelRatio;
                canvas.height = options.height * pixelRatio;
                canvas.style.width = options.width + "px";
                canvas.style.height = options.height + "px";
              };
              Render.setSize = function(render, width, height) {
                render.options.width = width;
                render.options.height = height;
                render.bounds.max.x = render.bounds.min.x + width;
                render.bounds.max.y = render.bounds.min.y + height;
                if (render.options.pixelRatio !== 1) {
                  Render.setPixelRatio(render, render.options.pixelRatio);
                } else {
                  render.canvas.width = width;
                  render.canvas.height = height;
                }
              };
              Render.lookAt = function(render, objects, padding, center) {
                center = typeof center !== "undefined" ? center : true;
                objects = Common.isArray(objects) ? objects : [objects];
                padding = padding || {
                  x: 0,
                  y: 0
                };
                var bounds = {
                  min: { x: Infinity, y: Infinity },
                  max: { x: -Infinity, y: -Infinity }
                };
                for (var i = 0; i < objects.length; i += 1) {
                  var object = objects[i], min2 = object.bounds ? object.bounds.min : object.min || object.position || object, max2 = object.bounds ? object.bounds.max : object.max || object.position || object;
                  if (min2 && max2) {
                    if (min2.x < bounds.min.x)
                      bounds.min.x = min2.x;
                    if (max2.x > bounds.max.x)
                      bounds.max.x = max2.x;
                    if (min2.y < bounds.min.y)
                      bounds.min.y = min2.y;
                    if (max2.y > bounds.max.y)
                      bounds.max.y = max2.y;
                  }
                }
                var width = bounds.max.x - bounds.min.x + 2 * padding.x, height = bounds.max.y - bounds.min.y + 2 * padding.y, viewHeight = render.canvas.height, viewWidth = render.canvas.width, outerRatio = viewWidth / viewHeight, innerRatio = width / height, scaleX = 1, scaleY = 1;
                if (innerRatio > outerRatio) {
                  scaleY = innerRatio / outerRatio;
                } else {
                  scaleX = outerRatio / innerRatio;
                }
                render.options.hasBounds = true;
                render.bounds.min.x = bounds.min.x;
                render.bounds.max.x = bounds.min.x + width * scaleX;
                render.bounds.min.y = bounds.min.y;
                render.bounds.max.y = bounds.min.y + height * scaleY;
                if (center) {
                  render.bounds.min.x += width * 0.5 - width * scaleX * 0.5;
                  render.bounds.max.x += width * 0.5 - width * scaleX * 0.5;
                  render.bounds.min.y += height * 0.5 - height * scaleY * 0.5;
                  render.bounds.max.y += height * 0.5 - height * scaleY * 0.5;
                }
                render.bounds.min.x -= padding.x;
                render.bounds.max.x -= padding.x;
                render.bounds.min.y -= padding.y;
                render.bounds.max.y -= padding.y;
                if (render.mouse) {
                  Mouse.setScale(render.mouse, {
                    x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                    y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
                  });
                  Mouse.setOffset(render.mouse, render.bounds.min);
                }
              };
              Render.startViewTransform = function(render) {
                var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                render.context.setTransform(
                  render.options.pixelRatio / boundsScaleX,
                  0,
                  0,
                  render.options.pixelRatio / boundsScaleY,
                  0,
                  0
                );
                render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
              };
              Render.endViewTransform = function(render) {
                render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
              };
              Render.world = function(render, time) {
                var startTime = Common.now(), engine = render.engine, world = engine.world, canvas = render.canvas, context = render.context, options = render.options, timing = render.timing;
                var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world), background2 = options.wireframes ? options.wireframeBackground : options.background, bodies = [], constraints = [], i;
                var event = {
                  timestamp: engine.timing.timestamp
                };
                Events.trigger(render, "beforeRender", event);
                if (render.currentBackground !== background2)
                  _applyBackground(render, background2);
                context.globalCompositeOperation = "source-in";
                context.fillStyle = "transparent";
                context.fillRect(0, 0, canvas.width, canvas.height);
                context.globalCompositeOperation = "source-over";
                if (options.hasBounds) {
                  for (i = 0; i < allBodies.length; i++) {
                    var body = allBodies[i];
                    if (Bounds.overlaps(body.bounds, render.bounds))
                      bodies.push(body);
                  }
                  for (i = 0; i < allConstraints.length; i++) {
                    var constraint = allConstraints[i], bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;
                    if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                    if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);
                    if (!pointAWorld || !pointBWorld)
                      continue;
                    if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                      constraints.push(constraint);
                  }
                  Render.startViewTransform(render);
                  if (render.mouse) {
                    Mouse.setScale(render.mouse, {
                      x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                      y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                    });
                    Mouse.setOffset(render.mouse, render.bounds.min);
                  }
                } else {
                  constraints = allConstraints;
                  bodies = allBodies;
                  if (render.options.pixelRatio !== 1) {
                    render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                  }
                }
                if (!options.wireframes || engine.enableSleeping && options.showSleeping) {
                  Render.bodies(render, bodies, context);
                } else {
                  if (options.showConvexHulls)
                    Render.bodyConvexHulls(render, bodies, context);
                  Render.bodyWireframes(render, bodies, context);
                }
                if (options.showBounds)
                  Render.bodyBounds(render, bodies, context);
                if (options.showAxes || options.showAngleIndicator)
                  Render.bodyAxes(render, bodies, context);
                if (options.showPositions)
                  Render.bodyPositions(render, bodies, context);
                if (options.showVelocity)
                  Render.bodyVelocity(render, bodies, context);
                if (options.showIds)
                  Render.bodyIds(render, bodies, context);
                if (options.showSeparations)
                  Render.separations(render, engine.pairs.list, context);
                if (options.showCollisions)
                  Render.collisions(render, engine.pairs.list, context);
                if (options.showVertexNumbers)
                  Render.vertexNumbers(render, bodies, context);
                if (options.showMousePosition)
                  Render.mousePosition(render, render.mouse, context);
                Render.constraints(constraints, context);
                if (options.hasBounds) {
                  Render.endViewTransform(render);
                }
                Events.trigger(render, "afterRender", event);
                timing.lastElapsed = Common.now() - startTime;
              };
              Render.stats = function(render, context, time) {
                var engine = render.engine, world = engine.world, bodies = Composite.allBodies(world), parts = 0, width = 55, height = 44, x = 0, y = 0;
                for (var i = 0; i < bodies.length; i += 1) {
                  parts += bodies[i].parts.length;
                }
                var sections = {
                  "Part": parts,
                  "Body": bodies.length,
                  "Cons": Composite.allConstraints(world).length,
                  "Comp": Composite.allComposites(world).length,
                  "Pair": engine.pairs.list.length
                };
                context.fillStyle = "#0e0f19";
                context.fillRect(x, y, width * 5.5, height);
                context.font = "12px Arial";
                context.textBaseline = "top";
                context.textAlign = "right";
                for (var key in sections) {
                  var section = sections[key];
                  context.fillStyle = "#aaa";
                  context.fillText(key, x + width, y + 8);
                  context.fillStyle = "#eee";
                  context.fillText(section, x + width, y + 26);
                  x += width;
                }
              };
              Render.performance = function(render, context) {
                var engine = render.engine, timing = render.timing, deltaHistory = timing.deltaHistory, elapsedHistory = timing.elapsedHistory, timestampElapsedHistory = timing.timestampElapsedHistory, engineDeltaHistory = timing.engineDeltaHistory, engineUpdatesHistory = timing.engineUpdatesHistory, engineElapsedHistory = timing.engineElapsedHistory, lastEngineUpdatesPerFrame = engine.timing.lastUpdatesPerFrame, lastEngineDelta = engine.timing.lastDelta;
                var deltaMean = _mean(deltaHistory), elapsedMean = _mean(elapsedHistory), engineDeltaMean = _mean(engineDeltaHistory), engineUpdatesMean = _mean(engineUpdatesHistory), engineElapsedMean = _mean(engineElapsedHistory), timestampElapsedMean = _mean(timestampElapsedHistory), rateMean = timestampElapsedMean / deltaMean || 0, neededUpdatesPerFrame = Math.round(deltaMean / lastEngineDelta), fps2 = 1e3 / deltaMean || 0;
                var graphHeight = 4, gap = 12, width = 60, height = 34, x = 10, y = 69;
                context.fillStyle = "#0e0f19";
                context.fillRect(0, 50, gap * 5 + width * 6 + 22, height);
                Render.status(
                  context,
                  x,
                  y,
                  width,
                  graphHeight,
                  deltaHistory.length,
                  Math.round(fps2) + " fps",
                  fps2 / Render._goodFps,
                  function(i) {
                    return deltaHistory[i] / deltaMean - 1;
                  }
                );
                Render.status(
                  context,
                  x + gap + width,
                  y,
                  width,
                  graphHeight,
                  engineDeltaHistory.length,
                  lastEngineDelta.toFixed(2) + " dt",
                  Render._goodDelta / lastEngineDelta,
                  function(i) {
                    return engineDeltaHistory[i] / engineDeltaMean - 1;
                  }
                );
                Render.status(
                  context,
                  x + (gap + width) * 2,
                  y,
                  width,
                  graphHeight,
                  engineUpdatesHistory.length,
                  lastEngineUpdatesPerFrame + " upf",
                  Math.pow(Common.clamp(engineUpdatesMean / neededUpdatesPerFrame || 1, 0, 1), 4),
                  function(i) {
                    return engineUpdatesHistory[i] / engineUpdatesMean - 1;
                  }
                );
                Render.status(
                  context,
                  x + (gap + width) * 3,
                  y,
                  width,
                  graphHeight,
                  engineElapsedHistory.length,
                  engineElapsedMean.toFixed(2) + " ut",
                  1 - lastEngineUpdatesPerFrame * engineElapsedMean / Render._goodFps,
                  function(i) {
                    return engineElapsedHistory[i] / engineElapsedMean - 1;
                  }
                );
                Render.status(
                  context,
                  x + (gap + width) * 4,
                  y,
                  width,
                  graphHeight,
                  elapsedHistory.length,
                  elapsedMean.toFixed(2) + " rt",
                  1 - elapsedMean / Render._goodFps,
                  function(i) {
                    return elapsedHistory[i] / elapsedMean - 1;
                  }
                );
                Render.status(
                  context,
                  x + (gap + width) * 5,
                  y,
                  width,
                  graphHeight,
                  timestampElapsedHistory.length,
                  rateMean.toFixed(2) + " x",
                  rateMean * rateMean * rateMean,
                  function(i) {
                    return (timestampElapsedHistory[i] / deltaHistory[i] / rateMean || 0) - 1;
                  }
                );
              };
              Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
                context.strokeStyle = "#888";
                context.fillStyle = "#444";
                context.lineWidth = 1;
                context.fillRect(x, y + 7, width, 1);
                context.beginPath();
                context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
                for (var i = 0; i < width; i += 1) {
                  context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
                }
                context.stroke();
                context.fillStyle = "hsl(" + Common.clamp(25 + 95 * indicator, 0, 120) + ",100%,60%)";
                context.fillRect(x, y - 7, 4, 4);
                context.font = "12px Arial";
                context.textBaseline = "middle";
                context.textAlign = "right";
                context.fillStyle = "#eee";
                context.fillText(label, x + width, y - 5);
              };
              Render.constraints = function(constraints, context) {
                var c = context;
                for (var i = 0; i < constraints.length; i++) {
                  var constraint = constraints[i];
                  if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                    continue;
                  var bodyA = constraint.bodyA, bodyB = constraint.bodyB, start, end;
                  if (bodyA) {
                    start = Vector.add(bodyA.position, constraint.pointA);
                  } else {
                    start = constraint.pointA;
                  }
                  if (constraint.render.type === "pin") {
                    c.beginPath();
                    c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                    c.closePath();
                  } else {
                    if (bodyB) {
                      end = Vector.add(bodyB.position, constraint.pointB);
                    } else {
                      end = constraint.pointB;
                    }
                    c.beginPath();
                    c.moveTo(start.x, start.y);
                    if (constraint.render.type === "spring") {
                      var delta = Vector.sub(end, start), normal = Vector.perp(Vector.normalise(delta)), coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)), offset;
                      for (var j = 1; j < coils; j += 1) {
                        offset = j % 2 === 0 ? 1 : -1;
                        c.lineTo(
                          start.x + delta.x * (j / coils) + normal.x * offset * 4,
                          start.y + delta.y * (j / coils) + normal.y * offset * 4
                        );
                      }
                    }
                    c.lineTo(end.x, end.y);
                  }
                  if (constraint.render.lineWidth) {
                    c.lineWidth = constraint.render.lineWidth;
                    c.strokeStyle = constraint.render.strokeStyle;
                    c.stroke();
                  }
                  if (constraint.render.anchors) {
                    c.fillStyle = constraint.render.strokeStyle;
                    c.beginPath();
                    c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                    c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                    c.closePath();
                    c.fill();
                  }
                }
              };
              Render.bodies = function(render, bodies, context) {
                var c = context, engine = render.engine, options = render.options, showInternalEdges = options.showInternalEdges || !options.wireframes, body, part, i, k;
                for (i = 0; i < bodies.length; i++) {
                  body = bodies[i];
                  if (!body.render.visible)
                    continue;
                  for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                    part = body.parts[k];
                    if (!part.render.visible)
                      continue;
                    if (options.showSleeping && body.isSleeping) {
                      c.globalAlpha = 0.5 * part.render.opacity;
                    } else if (part.render.opacity !== 1) {
                      c.globalAlpha = part.render.opacity;
                    }
                    if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                      var sprite2 = part.render.sprite, texture = _getTexture(render, sprite2.texture);
                      c.translate(part.position.x, part.position.y);
                      c.rotate(part.angle);
                      c.drawImage(
                        texture,
                        texture.width * -sprite2.xOffset * sprite2.xScale,
                        texture.height * -sprite2.yOffset * sprite2.yScale,
                        texture.width * sprite2.xScale,
                        texture.height * sprite2.yScale
                      );
                      c.rotate(-part.angle);
                      c.translate(-part.position.x, -part.position.y);
                    } else {
                      if (part.circleRadius) {
                        c.beginPath();
                        c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                      } else {
                        c.beginPath();
                        c.moveTo(part.vertices[0].x, part.vertices[0].y);
                        for (var j = 1; j < part.vertices.length; j++) {
                          if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                            c.lineTo(part.vertices[j].x, part.vertices[j].y);
                          } else {
                            c.moveTo(part.vertices[j].x, part.vertices[j].y);
                          }
                          if (part.vertices[j].isInternal && !showInternalEdges) {
                            c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                          }
                        }
                        c.lineTo(part.vertices[0].x, part.vertices[0].y);
                        c.closePath();
                      }
                      if (!options.wireframes) {
                        c.fillStyle = part.render.fillStyle;
                        if (part.render.lineWidth) {
                          c.lineWidth = part.render.lineWidth;
                          c.strokeStyle = part.render.strokeStyle;
                          c.stroke();
                        }
                        c.fill();
                      } else {
                        c.lineWidth = 1;
                        c.strokeStyle = render.options.wireframeStrokeStyle;
                        c.stroke();
                      }
                    }
                    c.globalAlpha = 1;
                  }
                }
              };
              Render.bodyWireframes = function(render, bodies, context) {
                var c = context, showInternalEdges = render.options.showInternalEdges, body, part, i, j, k;
                c.beginPath();
                for (i = 0; i < bodies.length; i++) {
                  body = bodies[i];
                  if (!body.render.visible)
                    continue;
                  for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                    part = body.parts[k];
                    c.moveTo(part.vertices[0].x, part.vertices[0].y);
                    for (j = 1; j < part.vertices.length; j++) {
                      if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
                      } else {
                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
                      }
                      if (part.vertices[j].isInternal && !showInternalEdges) {
                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                      }
                    }
                    c.lineTo(part.vertices[0].x, part.vertices[0].y);
                  }
                }
                c.lineWidth = 1;
                c.strokeStyle = render.options.wireframeStrokeStyle;
                c.stroke();
              };
              Render.bodyConvexHulls = function(render, bodies, context) {
                var c = context, body, part, i, j, k;
                c.beginPath();
                for (i = 0; i < bodies.length; i++) {
                  body = bodies[i];
                  if (!body.render.visible || body.parts.length === 1)
                    continue;
                  c.moveTo(body.vertices[0].x, body.vertices[0].y);
                  for (j = 1; j < body.vertices.length; j++) {
                    c.lineTo(body.vertices[j].x, body.vertices[j].y);
                  }
                  c.lineTo(body.vertices[0].x, body.vertices[0].y);
                }
                c.lineWidth = 1;
                c.strokeStyle = "rgba(255,255,255,0.2)";
                c.stroke();
              };
              Render.vertexNumbers = function(render, bodies, context) {
                var c = context, i, j, k;
                for (i = 0; i < bodies.length; i++) {
                  var parts = bodies[i].parts;
                  for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                    var part = parts[k];
                    for (j = 0; j < part.vertices.length; j++) {
                      c.fillStyle = "rgba(255,255,255,0.2)";
                      c.fillText(i + "_" + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                    }
                  }
                }
              };
              Render.mousePosition = function(render, mouse, context) {
                var c = context;
                c.fillStyle = "rgba(255,255,255,0.8)";
                c.fillText(mouse.position.x + "  " + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
              };
              Render.bodyBounds = function(render, bodies, context) {
                var c = context, engine = render.engine, options = render.options;
                c.beginPath();
                for (var i = 0; i < bodies.length; i++) {
                  var body = bodies[i];
                  if (body.render.visible) {
                    var parts = bodies[i].parts;
                    for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                      var part = parts[j];
                      c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                    }
                  }
                }
                if (options.wireframes) {
                  c.strokeStyle = "rgba(255,255,255,0.08)";
                } else {
                  c.strokeStyle = "rgba(0,0,0,0.1)";
                }
                c.lineWidth = 1;
                c.stroke();
              };
              Render.bodyAxes = function(render, bodies, context) {
                var c = context, engine = render.engine, options = render.options, part, i, j, k;
                c.beginPath();
                for (i = 0; i < bodies.length; i++) {
                  var body = bodies[i], parts = body.parts;
                  if (!body.render.visible)
                    continue;
                  if (options.showAxes) {
                    for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                      part = parts[j];
                      for (k = 0; k < part.axes.length; k++) {
                        var axis = part.axes[k];
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                      }
                    }
                  } else {
                    for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                      part = parts[j];
                      for (k = 0; k < part.axes.length; k++) {
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo(
                          (part.vertices[0].x + part.vertices[part.vertices.length - 1].x) / 2,
                          (part.vertices[0].y + part.vertices[part.vertices.length - 1].y) / 2
                        );
                      }
                    }
                  }
                }
                if (options.wireframes) {
                  c.strokeStyle = "indianred";
                  c.lineWidth = 1;
                } else {
                  c.strokeStyle = "rgba(255, 255, 255, 0.4)";
                  c.globalCompositeOperation = "overlay";
                  c.lineWidth = 2;
                }
                c.stroke();
                c.globalCompositeOperation = "source-over";
              };
              Render.bodyPositions = function(render, bodies, context) {
                var c = context, engine = render.engine, options = render.options, body, part, i, k;
                c.beginPath();
                for (i = 0; i < bodies.length; i++) {
                  body = bodies[i];
                  if (!body.render.visible)
                    continue;
                  for (k = 0; k < body.parts.length; k++) {
                    part = body.parts[k];
                    c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                    c.closePath();
                  }
                }
                if (options.wireframes) {
                  c.fillStyle = "indianred";
                } else {
                  c.fillStyle = "rgba(0,0,0,0.5)";
                }
                c.fill();
                c.beginPath();
                for (i = 0; i < bodies.length; i++) {
                  body = bodies[i];
                  if (body.render.visible) {
                    c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                    c.closePath();
                  }
                }
                c.fillStyle = "rgba(255,165,0,0.8)";
                c.fill();
              };
              Render.bodyVelocity = function(render, bodies, context) {
                var c = context;
                c.beginPath();
                for (var i = 0; i < bodies.length; i++) {
                  var body = bodies[i];
                  if (!body.render.visible)
                    continue;
                  var velocity = Body.getVelocity(body);
                  c.moveTo(body.position.x, body.position.y);
                  c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
                }
                c.lineWidth = 3;
                c.strokeStyle = "cornflowerblue";
                c.stroke();
              };
              Render.bodyIds = function(render, bodies, context) {
                var c = context, i, j;
                for (i = 0; i < bodies.length; i++) {
                  if (!bodies[i].render.visible)
                    continue;
                  var parts = bodies[i].parts;
                  for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    var part = parts[j];
                    c.font = "12px Arial";
                    c.fillStyle = "rgba(255,255,255,0.5)";
                    c.fillText(part.id, part.position.x + 10, part.position.y - 10);
                  }
                }
              };
              Render.collisions = function(render, pairs, context) {
                var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
                c.beginPath();
                for (i = 0; i < pairs.length; i++) {
                  pair = pairs[i];
                  if (!pair.isActive)
                    continue;
                  collision = pair.collision;
                  for (j = 0; j < pair.contactCount; j++) {
                    var contact = pair.contacts[j], vertex = contact.vertex;
                    c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
                  }
                }
                if (options.wireframes) {
                  c.fillStyle = "rgba(255,255,255,0.7)";
                } else {
                  c.fillStyle = "orange";
                }
                c.fill();
                c.beginPath();
                for (i = 0; i < pairs.length; i++) {
                  pair = pairs[i];
                  if (!pair.isActive)
                    continue;
                  collision = pair.collision;
                  if (pair.contactCount > 0) {
                    var normalPosX = pair.contacts[0].vertex.x, normalPosY = pair.contacts[0].vertex.y;
                    if (pair.contactCount === 2) {
                      normalPosX = (pair.contacts[0].vertex.x + pair.contacts[1].vertex.x) / 2;
                      normalPosY = (pair.contacts[0].vertex.y + pair.contacts[1].vertex.y) / 2;
                    }
                    if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                      c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                    } else {
                      c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                    }
                    c.lineTo(normalPosX, normalPosY);
                  }
                }
                if (options.wireframes) {
                  c.strokeStyle = "rgba(255,165,0,0.7)";
                } else {
                  c.strokeStyle = "orange";
                }
                c.lineWidth = 1;
                c.stroke();
              };
              Render.separations = function(render, pairs, context) {
                var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
                c.beginPath();
                for (i = 0; i < pairs.length; i++) {
                  pair = pairs[i];
                  if (!pair.isActive)
                    continue;
                  collision = pair.collision;
                  bodyA = collision.bodyA;
                  bodyB = collision.bodyB;
                  var k = 1;
                  if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
                  if (bodyB.isStatic) k = 0;
                  c.moveTo(bodyB.position.x, bodyB.position.y);
                  c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);
                  k = 1;
                  if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
                  if (bodyA.isStatic) k = 0;
                  c.moveTo(bodyA.position.x, bodyA.position.y);
                  c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
                }
                if (options.wireframes) {
                  c.strokeStyle = "rgba(255,165,0,0.5)";
                } else {
                  c.strokeStyle = "orange";
                }
                c.stroke();
              };
              Render.inspector = function(inspector, context) {
                var engine = inspector.engine, selected = inspector.selected, render = inspector.render, options = render.options, bounds;
                if (options.hasBounds) {
                  var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                  context.scale(1 / boundsScaleX, 1 / boundsScaleY);
                  context.translate(-render.bounds.min.x, -render.bounds.min.y);
                }
                for (var i = 0; i < selected.length; i++) {
                  var item = selected[i].data;
                  context.translate(0.5, 0.5);
                  context.lineWidth = 1;
                  context.strokeStyle = "rgba(255,165,0,0.9)";
                  context.setLineDash([1, 2]);
                  switch (item.type) {
                    case "body":
                      bounds = item.bounds;
                      context.beginPath();
                      context.rect(
                        Math.floor(bounds.min.x - 3),
                        Math.floor(bounds.min.y - 3),
                        Math.floor(bounds.max.x - bounds.min.x + 6),
                        Math.floor(bounds.max.y - bounds.min.y + 6)
                      );
                      context.closePath();
                      context.stroke();
                      break;
                    case "constraint":
                      var point = item.pointA;
                      if (item.bodyA)
                        point = item.pointB;
                      context.beginPath();
                      context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                      context.closePath();
                      context.stroke();
                      break;
                  }
                  context.setLineDash([]);
                  context.translate(-0.5, -0.5);
                }
                if (inspector.selectStart !== null) {
                  context.translate(0.5, 0.5);
                  context.lineWidth = 1;
                  context.strokeStyle = "rgba(255,165,0,0.6)";
                  context.fillStyle = "rgba(255,165,0,0.1)";
                  bounds = inspector.selectBounds;
                  context.beginPath();
                  context.rect(
                    Math.floor(bounds.min.x),
                    Math.floor(bounds.min.y),
                    Math.floor(bounds.max.x - bounds.min.x),
                    Math.floor(bounds.max.y - bounds.min.y)
                  );
                  context.closePath();
                  context.stroke();
                  context.fill();
                  context.translate(-0.5, -0.5);
                }
                if (options.hasBounds)
                  context.setTransform(1, 0, 0, 1, 0, 0);
              };
              var _updateTiming = /* @__PURE__ */ __name(function(render, time) {
                var engine = render.engine, timing = render.timing, historySize = timing.historySize, timestamp = engine.timing.timestamp;
                timing.delta = time - timing.lastTime || Render._goodDelta;
                timing.lastTime = time;
                timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
                timing.lastTimestamp = timestamp;
                timing.deltaHistory.unshift(timing.delta);
                timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);
                timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
                timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);
                timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
                timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);
                timing.engineUpdatesHistory.unshift(engine.timing.lastUpdatesPerFrame);
                timing.engineUpdatesHistory.length = Math.min(timing.engineUpdatesHistory.length, historySize);
                timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
                timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);
                timing.elapsedHistory.unshift(timing.lastElapsed);
                timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
              }, "_updateTiming");
              var _mean = /* @__PURE__ */ __name(function(values) {
                var result = 0;
                for (var i = 0; i < values.length; i += 1) {
                  result += values[i];
                }
                return result / values.length || 0;
              }, "_mean");
              var _createCanvas = /* @__PURE__ */ __name(function(width, height) {
                var canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                canvas.oncontextmenu = function() {
                  return false;
                };
                canvas.onselectstart = function() {
                  return false;
                };
                return canvas;
              }, "_createCanvas");
              var _getPixelRatio = /* @__PURE__ */ __name(function(canvas) {
                var context = canvas.getContext("2d"), devicePixelRatio = window.devicePixelRatio || 1, backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
                return devicePixelRatio / backingStorePixelRatio;
              }, "_getPixelRatio");
              var _getTexture = /* @__PURE__ */ __name(function(render, imagePath) {
                var image = render.textures[imagePath];
                if (image)
                  return image;
                image = render.textures[imagePath] = new Image();
                image.src = imagePath;
                return image;
              }, "_getTexture");
              var _applyBackground = /* @__PURE__ */ __name(function(render, background2) {
                var cssBackground = background2;
                if (/(jpg|gif|png)$/.test(background2))
                  cssBackground = "url(" + background2 + ")";
                render.canvas.style.background = cssBackground;
                render.canvas.style.backgroundSize = "contain";
                render.currentBackground = background2;
              }, "_applyBackground");
            })();
          }),
          /* 27 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Runner = {};
            module2.exports = Runner;
            var Events = __webpack_require__(5);
            var Engine = __webpack_require__(17);
            var Common = __webpack_require__(0);
            (function() {
              Runner._maxFrameDelta = 1e3 / 15;
              Runner._frameDeltaFallback = 1e3 / 60;
              Runner._timeBufferMargin = 1.5;
              Runner._elapsedNextEstimate = 1;
              Runner._smoothingLowerBound = 0.1;
              Runner._smoothingUpperBound = 0.9;
              Runner.create = function(options) {
                var defaults = {
                  delta: 1e3 / 60,
                  frameDelta: null,
                  frameDeltaSmoothing: true,
                  frameDeltaSnapping: true,
                  frameDeltaHistory: [],
                  frameDeltaHistorySize: 100,
                  frameRequestId: null,
                  timeBuffer: 0,
                  timeLastTick: null,
                  maxUpdates: null,
                  maxFrameTime: 1e3 / 30,
                  lastUpdatesDeferred: 0,
                  enabled: true
                };
                var runner = Common.extend(defaults, options);
                runner.fps = 0;
                return runner;
              };
              Runner.run = function(runner, engine) {
                runner.timeBuffer = Runner._frameDeltaFallback;
                (/* @__PURE__ */ __name((function onFrame(time) {
                  runner.frameRequestId = Runner._onNextFrame(runner, onFrame);
                  if (time && runner.enabled) {
                    Runner.tick(runner, engine, time);
                  }
                }), "onFrame"))();
                return runner;
              };
              Runner.tick = function(runner, engine, time) {
                var tickStartTime = Common.now(), engineDelta = runner.delta, updateCount = 0;
                var frameDelta = time - runner.timeLastTick;
                if (!frameDelta || !runner.timeLastTick || frameDelta > Math.max(Runner._maxFrameDelta, runner.maxFrameTime)) {
                  frameDelta = runner.frameDelta || Runner._frameDeltaFallback;
                }
                if (runner.frameDeltaSmoothing) {
                  runner.frameDeltaHistory.push(frameDelta);
                  runner.frameDeltaHistory = runner.frameDeltaHistory.slice(-runner.frameDeltaHistorySize);
                  var deltaHistorySorted = runner.frameDeltaHistory.slice(0).sort();
                  var deltaHistoryWindow = runner.frameDeltaHistory.slice(
                    deltaHistorySorted.length * Runner._smoothingLowerBound,
                    deltaHistorySorted.length * Runner._smoothingUpperBound
                  );
                  var frameDeltaSmoothed = _mean(deltaHistoryWindow);
                  frameDelta = frameDeltaSmoothed || frameDelta;
                }
                if (runner.frameDeltaSnapping) {
                  frameDelta = 1e3 / Math.round(1e3 / frameDelta);
                }
                runner.frameDelta = frameDelta;
                runner.timeLastTick = time;
                runner.timeBuffer += runner.frameDelta;
                runner.timeBuffer = Common.clamp(
                  runner.timeBuffer,
                  0,
                  runner.frameDelta + engineDelta * Runner._timeBufferMargin
                );
                runner.lastUpdatesDeferred = 0;
                var maxUpdates = runner.maxUpdates || Math.ceil(runner.maxFrameTime / engineDelta);
                var event = {
                  timestamp: engine.timing.timestamp
                };
                Events.trigger(runner, "beforeTick", event);
                Events.trigger(runner, "tick", event);
                var updateStartTime = Common.now();
                while (engineDelta > 0 && runner.timeBuffer >= engineDelta * Runner._timeBufferMargin) {
                  Events.trigger(runner, "beforeUpdate", event);
                  Engine.update(engine, engineDelta);
                  Events.trigger(runner, "afterUpdate", event);
                  runner.timeBuffer -= engineDelta;
                  updateCount += 1;
                  var elapsedTimeTotal = Common.now() - tickStartTime, elapsedTimeUpdates = Common.now() - updateStartTime, elapsedNextEstimate = elapsedTimeTotal + Runner._elapsedNextEstimate * elapsedTimeUpdates / updateCount;
                  if (updateCount >= maxUpdates || elapsedNextEstimate > runner.maxFrameTime) {
                    runner.lastUpdatesDeferred = Math.round(Math.max(0, runner.timeBuffer / engineDelta - Runner._timeBufferMargin));
                    break;
                  }
                }
                engine.timing.lastUpdatesPerFrame = updateCount;
                Events.trigger(runner, "afterTick", event);
                if (runner.frameDeltaHistory.length >= 100) {
                  if (runner.lastUpdatesDeferred && Math.round(runner.frameDelta / engineDelta) > maxUpdates) {
                    Common.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs.");
                  } else if (runner.lastUpdatesDeferred) {
                    Common.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs.");
                  }
                  if (typeof runner.isFixed !== "undefined") {
                    Common.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs.");
                  }
                  if (runner.deltaMin || runner.deltaMax) {
                    Common.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.");
                  }
                  if (runner.fps !== 0) {
                    Common.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs.");
                  }
                }
              };
              Runner.stop = function(runner) {
                Runner._cancelNextFrame(runner);
              };
              Runner._onNextFrame = function(runner, callback) {
                if (typeof window !== "undefined" && window.requestAnimationFrame) {
                  runner.frameRequestId = window.requestAnimationFrame(callback);
                } else {
                  throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");
                }
                return runner.frameRequestId;
              };
              Runner._cancelNextFrame = function(runner) {
                if (typeof window !== "undefined" && window.cancelAnimationFrame) {
                  window.cancelAnimationFrame(runner.frameRequestId);
                } else {
                  throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.");
                }
              };
              var _mean = /* @__PURE__ */ __name(function(values) {
                var result = 0, valuesLength = values.length;
                for (var i = 0; i < valuesLength; i += 1) {
                  result += values[i];
                }
                return result / valuesLength || 0;
              }, "_mean");
            })();
          }),
          /* 28 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var SAT = {};
            module2.exports = SAT;
            var Collision = __webpack_require__(8);
            var Common = __webpack_require__(0);
            var deprecated = Common.deprecated;
            (function() {
              SAT.collides = function(bodyA, bodyB) {
                return Collision.collides(bodyA, bodyB);
              };
              deprecated(SAT, "collides", "SAT.collides \u27A4 replaced by Collision.collides");
            })();
          }),
          /* 29 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var Svg = {};
            module2.exports = Svg;
            var Bounds = __webpack_require__(1);
            var Common = __webpack_require__(0);
            (function() {
              Svg.pathToVertices = function(path, sampleLength) {
                if (typeof window !== "undefined" && !("SVGPathSeg" in window)) {
                  Common.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                }
                var i, il, total, point, segment, segments, segmentsQueue, lastSegment, lastPoint, segmentIndex, points = [], lx, ly, length = 0, x = 0, y = 0;
                sampleLength = sampleLength || 15;
                var addPoint = /* @__PURE__ */ __name(function(px, py, pathSegType) {
                  var isRelative = pathSegType % 2 === 1 && pathSegType > 1;
                  if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                    if (lastPoint && isRelative) {
                      lx = lastPoint.x;
                      ly = lastPoint.y;
                    } else {
                      lx = 0;
                      ly = 0;
                    }
                    var point2 = {
                      x: lx + px,
                      y: ly + py
                    };
                    if (isRelative || !lastPoint) {
                      lastPoint = point2;
                    }
                    points.push(point2);
                    x = lx + px;
                    y = ly + py;
                  }
                }, "addPoint");
                var addSegmentPoint = /* @__PURE__ */ __name(function(segment2) {
                  var segType = segment2.pathSegTypeAsLetter.toUpperCase();
                  if (segType === "Z")
                    return;
                  switch (segType) {
                    case "M":
                    case "L":
                    case "T":
                    case "C":
                    case "S":
                    case "Q":
                      x = segment2.x;
                      y = segment2.y;
                      break;
                    case "H":
                      x = segment2.x;
                      break;
                    case "V":
                      y = segment2.y;
                      break;
                  }
                  addPoint(x, y, segment2.pathSegType);
                }, "addSegmentPoint");
                Svg._svgPathToAbsolute(path);
                total = path.getTotalLength();
                segments = [];
                for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
                  segments.push(path.pathSegList.getItem(i));
                segmentsQueue = segments.concat();
                while (length < total) {
                  segmentIndex = path.getPathSegAtLength(length);
                  segment = segments[segmentIndex];
                  if (segment != lastSegment) {
                    while (segmentsQueue.length && segmentsQueue[0] != segment)
                      addSegmentPoint(segmentsQueue.shift());
                    lastSegment = segment;
                  }
                  switch (segment.pathSegTypeAsLetter.toUpperCase()) {
                    case "C":
                    case "T":
                    case "S":
                    case "Q":
                    case "A":
                      point = path.getPointAtLength(length);
                      addPoint(point.x, point.y, 0);
                      break;
                  }
                  length += sampleLength;
                }
                for (i = 0, il = segmentsQueue.length; i < il; ++i)
                  addSegmentPoint(segmentsQueue[i]);
                return points;
              };
              Svg._svgPathToAbsolute = function(path) {
                var x0, y0, x1, y1, x2, y2, segs = path.pathSegList, x = 0, y = 0, len = segs.numberOfItems;
                for (var i = 0; i < len; ++i) {
                  var seg = segs.getItem(i), segType = seg.pathSegTypeAsLetter;
                  if (/[MLHVCSQTA]/.test(segType)) {
                    if ("x" in seg) x = seg.x;
                    if ("y" in seg) y = seg.y;
                  } else {
                    if ("x1" in seg) x1 = x + seg.x1;
                    if ("x2" in seg) x2 = x + seg.x2;
                    if ("y1" in seg) y1 = y + seg.y1;
                    if ("y2" in seg) y2 = y + seg.y2;
                    if ("x" in seg) x += seg.x;
                    if ("y" in seg) y += seg.y;
                    switch (segType) {
                      case "m":
                        segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                        break;
                      case "l":
                        segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                        break;
                      case "h":
                        segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                        break;
                      case "v":
                        segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                        break;
                      case "c":
                        segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                        break;
                      case "s":
                        segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                        break;
                      case "q":
                        segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                        break;
                      case "t":
                        segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                        break;
                      case "a":
                        segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                        break;
                      case "z":
                      case "Z":
                        x = x0;
                        y = y0;
                        break;
                    }
                  }
                  if (segType == "M" || segType == "m") {
                    x0 = x;
                    y0 = y;
                  }
                }
              };
            })();
          }),
          /* 30 */
          /***/
          (function(module2, exports2, __webpack_require__) {
            var World = {};
            module2.exports = World;
            var Composite = __webpack_require__(6);
            var Common = __webpack_require__(0);
            (function() {
              World.create = Composite.create;
              World.add = Composite.add;
              World.remove = Composite.remove;
              World.clear = Composite.clear;
              World.addComposite = Composite.addComposite;
              World.addBody = Composite.addBody;
              World.addConstraint = Composite.addConstraint;
            })();
          })
          /******/
        ])
      );
    });
  }
});

// packages/engine/dist/core/game_event.js
var EVENT_TYPE;
(function(EVENT_TYPE2) {
  EVENT_TYPE2["none"] = "NONE";
  EVENT_TYPE2["create"] = "CREATE";
  EVENT_TYPE2["destroy"] = "DESTROY";
  EVENT_TYPE2["step_begin"] = "STEP_BEGIN";
  EVENT_TYPE2["step"] = "STEP";
  EVENT_TYPE2["step_end"] = "STEP_END";
  EVENT_TYPE2["collision"] = "COLLISION";
  EVENT_TYPE2["keyboard"] = "KEYBOARD";
  EVENT_TYPE2["mouse"] = "MOUSE";
  EVENT_TYPE2["other"] = "OTHER";
  EVENT_TYPE2["async"] = "ASYNC";
  EVENT_TYPE2["draw_begin"] = "DRAW_BEGIN";
  EVENT_TYPE2["draw"] = "DRAW";
  EVENT_TYPE2["draw_end"] = "DRAW_END";
  EVENT_TYPE2["draw_gui"] = "DRAW_GUI";
})(EVENT_TYPE || (EVENT_TYPE = {}));
var game_event = class {
  static {
    __name(this, "game_event");
  }
  /**
   * Creates a new game event.
   * @param event - The function to call when the event fires
   * @param type - The event type category
   */
  constructor(event = () => {
  }, type = EVENT_TYPE.none) {
    this.event = () => {
    };
    this.type = EVENT_TYPE.none;
    this.event = event;
    this.type = type;
  }
  /**
   * Executes the event function.
   */
  run() {
    this.event();
  }
};

// packages/engine/dist/core/resource.js
var resource = class _resource {
  static {
    __name(this, "resource");
  }
  /**
   * Increments and returns the next available resource ID.
   * @returns The next unique resource ID
   */
  incrementID() {
    return _resource.gid++;
  }
  constructor() {
    this.id = this.incrementID();
    this.name = this.constructor.name;
    _resource.all.set(this.id, this);
  }
  static removeByID(id) {
    _resource.all.delete(id);
  }
  static findByID(id) {
    return _resource.all.get(id);
  }
};
resource.gid = 0;
resource.all = /* @__PURE__ */ new Map();

// packages/engine/dist/physics/physics_world.js
var import_matter_js = __toESM(require_matter(), 1);
var _engine = null;
var _world = null;
var _px_per_m = 64;
var _on_collision_start = null;
var _on_collision_end = null;
function physics_world_create(gx = 0, gy = 0.1, px_per_metre = 64) {
  if (_engine) {
    import_matter_js.default.Engine.clear(_engine);
  }
  _px_per_m = px_per_metre;
  _engine = import_matter_js.default.Engine.create();
  _world = _engine.world;
  _engine.gravity.x = gx;
  _engine.gravity.y = gy;
  import_matter_js.default.Events.on(_engine, "collisionStart", (event) => {
    if (!_on_collision_start)
      return;
    for (const pair of event.pairs) {
      _on_collision_start(pair.bodyA, pair.bodyB);
    }
  });
  import_matter_js.default.Events.on(_engine, "collisionEnd", (event) => {
    if (!_on_collision_end)
      return;
    for (const pair of event.pairs) {
      _on_collision_end(pair.bodyA, pair.bodyB);
    }
  });
}
__name(physics_world_create, "physics_world_create");
function physics_world_step(delta_ms = 1e3 / 60) {
  if (!_engine)
    return;
  import_matter_js.default.Engine.update(_engine, delta_ms);
}
__name(physics_world_step, "physics_world_step");
function physics_world_gravity(gx, gy) {
  if (!_engine)
    return;
  _engine.gravity.x = gx;
  _engine.gravity.y = gy;
}
__name(physics_world_gravity, "physics_world_gravity");
function physics_world_destroy() {
  if (!_engine)
    return;
  import_matter_js.default.Engine.clear(_engine);
  _engine = null;
  _world = null;
}
__name(physics_world_destroy, "physics_world_destroy");
function physics_world_on_collision_start(cb) {
  _on_collision_start = cb;
}
__name(physics_world_on_collision_start, "physics_world_on_collision_start");
function physics_world_on_collision_end(cb) {
  _on_collision_end = cb;
}
__name(physics_world_on_collision_end, "physics_world_on_collision_end");
function physics_world_get_engine() {
  return _engine;
}
__name(physics_world_get_engine, "physics_world_get_engine");
function physics_get_scale() {
  return _px_per_m;
}
__name(physics_get_scale, "physics_get_scale");
function _get_world() {
  return _world;
}
__name(_get_world, "_get_world");

// packages/engine/dist/core/room.js
var room = class _room2 extends resource {
  static {
    __name(this, "room");
  }
  constructor() {
    super();
    this.room_width = 640;
    this.room_height = 480;
    this.room_caption = `Room ${this.id}`;
    this.room_speed = 60;
    this.room_persistent = false;
    this.physics_world = false;
    this.physics_gravity_x = 0;
    this.physics_gravity_y = 0;
    this.room_previous = 0;
    this.room_next = 0;
    this.creation_code = null;
    this.background_visible = [];
    this.background_foreground = [];
    this.background_index = [];
    this.background_x = [];
    this.background_y = [];
    this.background_htiled = [];
    this.background_vtiled = [];
    this.background_hspeed = [];
    this.background_vspeed = [];
    this.background_color = [];
    this.background_stretch = [];
    this.background_show_color = true;
    this.background_solid_color = 0;
    this._bg_scroll_x = [];
    this._bg_scroll_y = [];
    this.view_enabled = false;
    this.view_current = 0;
    this.view_visible = [];
    this.view_xview = [];
    this.view_yview = [];
    this.view_wview = [];
    this.view_hview = [];
    this.view_xport = [];
    this.view_yport = [];
    this.view_wport = [];
    this.view_hport = [];
    this.view_hborder = [];
    this.view_vborder = [];
    this.view_hspeed = [];
    this.view_vspeed = [];
    this.view_object = [];
    this.tiles = [];
    this.all = /* @__PURE__ */ new Map();
    this.builder = null;
    this.built = false;
  }
  // =========================================================================
  // Room Navigation
  // =========================================================================
  /**
   * Transitions to the specified room.
   * @param target - The room to go to (ID or room reference)
   */
  room_goto(target) {
    if (typeof target === "number") {
      const potential = resource.findByID(target);
      if (typeof potential === "undefined") {
        console.error(`ID ${target} does not exist.`);
        return;
      }
      if (!(potential instanceof _room2)) {
        console.error(`ID ${target} is not a room.`);
        return;
      }
      game_loop.change_room(potential);
      return;
    }
    game_loop.change_room(target);
  }
  /**
   * Transitions to the previous room in the room order.
   */
  room_goto_previous() {
    this.room_goto(this.room_previous);
  }
  /**
   * Transitions to the next room in the room order.
   */
  room_goto_next() {
    this.room_goto(this.room_next);
  }
  /**
   * Restarts the current room, resetting all non-persistent instances.
   */
  room_restart() {
    this.room_goto(this);
  }
  // =========================================================================
  // Room Queries
  // =========================================================================
  /**
   * Checks if a room with the given ID exists.
   * @param id - The room ID to check
   * @returns True if the room exists
   */
  room_exists(id) {
    const res = resource.findByID(id);
    if (typeof res === "undefined") {
      return false;
    }
    if (!(res instanceof _room2)) {
      return false;
    }
    return true;
  }
  // =========================================================================
  // Instance Management
  // =========================================================================
  /**
   * Adds an instance to the room at design time (before room starts).
   * @param x - X position for the instance
   * @param y - Y position for the instance
   * @param obj - The instance to add
   */
  room_instance_add(x, y, obj) {
    obj.x = x;
    obj.y = y;
    obj.xstart = x;
    obj.ystart = y;
    this.all.set(obj.id, obj);
  }
  /**
   * Adds an instance to this room at runtime.
   * @param inst - The instance to add
   */
  instance_add(inst) {
    this.all.set(inst.id, inst);
  }
  /**
   * Removes an instance from this room by ID.
   * @param id - The instance ID to remove
   * @returns True if the instance was found and removed
   */
  instance_remove(id) {
    return this.all.delete(id);
  }
  /**
   * Gets an instance from this room by ID.
   * @param id - The instance ID to find
   * @returns The instance, or undefined if not found
   */
  instance_get(id) {
    return this.all.get(id);
  }
  /**
   * Gets all instances in this room.
   * @returns Array of all instances
   */
  instance_get_all() {
    return Array.from(this.all.values());
  }
  /**
   * Gets the number of instances in this room.
   * @returns The instance count
   */
  instance_count() {
    return this.all.size;
  }
  /**
   * Removes all instances from the room's design-time instance list.
   */
  room_instance_clear() {
    this.all.clear();
  }
  /**
   * Registers all instances in this room with the game loop.
   * Called when entering a room to set up event handlers.
   */
  register_all_instances() {
    for (const inst of this.all.values()) {
      inst.register_events();
      game_loop.register(EVENT_TYPE.create, inst.on_create.bind(inst));
    }
  }
  /**
   * Tears down the room's live contents (instances + tiles + scroll offsets) so the
   * builder can repopulate it cleanly. Destroyed silently — no Destroy events fire.
   */
  reset_contents() {
    for (const inst of this.all.values()) {
      inst.dispose_for_rebuild();
      resource.removeByID(inst.id);
    }
    this.all.clear();
    this.tiles = [];
    this._bg_scroll_x = [];
    this._bg_scroll_y = [];
  }
  /**
   * Prepares the room when it becomes the active room.
   *   - Persistent + already built → keep the saved live state, just re-hook event
   *     handlers (Create events do NOT fire again).
   *   - Otherwise → rebuild fresh from the definition (Create events queued by the builder).
   */
  build_for_entry() {
    if (this.room_persistent && this.built) {
      for (const inst of this.all.values())
        inst.register_events();
      return;
    }
    this.reset_contents();
    this.built = true;
    if (this.physics_world)
      physics_world_create(this.physics_gravity_x, this.physics_gravity_y);
    this.builder?.();
  }
  // =========================================================================
  // Tile Management
  // =========================================================================
  /**
   * Adds a tile to the room at design time.
   * @param x - X position for the tile
   * @param y - Y position for the tile
   * @param background - Background resource containing the tile
   * @param left - Left offset in the background
   * @param top - Top offset in the background
   * @param width - Width of the tile
   * @param height - Height of the tile
   * @param depth - Drawing depth of the tile
   * @returns The unique ID of the created tile
   */
  room_tile_add(x, y, background2, left, top, width, height, depth) {
    return this.tile_add(background2, left, top, width, height, x, y, depth);
  }
  /**
   * Adds a tile to the room at design time, with extended options.
   * @param x - X position for the tile
   * @param y - Y position for the tile
   * @param background - Background resource containing the tile
   * @param left - Left offset in the background
   * @param top - Top offset in the background
   * @param width - Width of the tile
   * @param height - Height of the tile
   * @param depth - Drawing depth of the tile
   * @param xscale - Horizontal scale factor
   * @param yscale - Vertical scale factor
   * @param alpha - Transparency (0-1)
   * @returns The unique ID of the created tile
   */
  room_tile_add_ext(x, y, background2, left, top, width, height, depth, xscale, yscale, alpha) {
    const id = _room2.next_tile_id++;
    this.tiles.push({
      id,
      x,
      y,
      background: background2,
      left,
      top,
      width,
      height,
      depth,
      xscale,
      yscale,
      alpha,
      visible: true
    });
    return id;
  }
  /**
   * Removes all tiles from the room's design-time tile list.
   */
  room_tile_clear() {
    this.tiles = [];
  }
  /**
   * Adds a tile at runtime and returns its unique ID.
   * @param background - Background resource containing the tile
   * @param left - Left offset in the background
   * @param top - Top offset in the background
   * @param width - Width of the tile
   * @param height - Height of the tile
   * @param x - X position in the room
   * @param y - Y position in the room
   * @param depth - Drawing depth
   * @returns The unique ID of the created tile
   */
  /**
   * Returns the room's tile list (used by the renderer to draw tile layers).
   * @returns The array of tiles in this room
   */
  get_tiles() {
    return this.tiles;
  }
  tile_add(background2, left, top, width, height, x, y, depth) {
    const id = _room2.next_tile_id++;
    this.tiles.push({
      id,
      x,
      y,
      background: background2,
      left,
      top,
      width,
      height,
      depth,
      xscale: 1,
      yscale: 1,
      alpha: 1,
      visible: true
    });
    return id;
  }
  /**
   * Deletes a tile by its ID.
   * @param id - The tile ID to delete
   * @returns True if the tile was found and deleted
   */
  tile_delete(id) {
    const index = this.tiles.findIndex((t) => t.id === id);
    if (index === -1)
      return false;
    this.tiles.splice(index, 1);
    return true;
  }
  /**
   * Checks if a tile with the given ID exists.
   * @param id - The tile ID to check
   * @returns True if the tile exists
   */
  tile_exists(id) {
    return this.tiles.some((t) => t.id === id);
  }
  /**
   * Gets the X position of a tile.
   * @param id - The tile ID
   * @returns The X position, or 0 if not found
   */
  tile_get_x(id) {
    return this.tiles.find((t) => t.id === id)?.x ?? 0;
  }
  /**
   * Gets the Y position of a tile.
   * @param id - The tile ID
   * @returns The Y position, or 0 if not found
   */
  tile_get_y(id) {
    return this.tiles.find((t) => t.id === id)?.y ?? 0;
  }
  /**
   * Gets the depth of a tile.
   * @param id - The tile ID
   * @returns The depth, or 0 if not found
   */
  tile_get_depth(id) {
    return this.tiles.find((t) => t.id === id)?.depth ?? 0;
  }
  /**
   * Gets the visibility of a tile.
   * @param id - The tile ID
   * @returns True if visible, false if not found or hidden
   */
  tile_get_visible(id) {
    return this.tiles.find((t) => t.id === id)?.visible ?? false;
  }
  /**
   * Sets the position of a tile.
   * @param id - The tile ID
   * @param x - New X position
   * @param y - New Y position
   */
  tile_set_position(id, x, y) {
    const tile = this.tiles.find((t) => t.id === id);
    if (tile) {
      tile.x = x;
      tile.y = y;
    }
  }
  /**
   * Sets the depth of a tile.
   * @param id - The tile ID
   * @param depth - New depth value
   */
  tile_set_depth(id, depth) {
    const tile = this.tiles.find((t) => t.id === id);
    if (tile)
      tile.depth = depth;
  }
  /**
   * Sets the visibility of a tile.
   * @param id - The tile ID
   * @param visible - Whether the tile should be visible
   */
  tile_set_visible(id, visible) {
    const tile = this.tiles.find((t) => t.id === id);
    if (tile)
      tile.visible = visible;
  }
  /**
   * Sets the scale of a tile.
   * @param id - The tile ID
   * @param xscale - Horizontal scale factor
   * @param yscale - Vertical scale factor
   */
  tile_set_scale(id, xscale, yscale) {
    const tile = this.tiles.find((t) => t.id === id);
    if (tile) {
      tile.xscale = xscale;
      tile.yscale = yscale;
    }
  }
  /**
   * Sets the alpha (transparency) of a tile.
   * @param id - The tile ID
   * @param alpha - Alpha value (0-1)
   */
  tile_set_alpha(id, alpha) {
    const tile = this.tiles.find((t) => t.id === id);
    if (tile)
      tile.alpha = alpha;
  }
  /**
   * Sets the background region of a tile.
   * @param id - The tile ID
   * @param background - Background resource ID
   * @param left - Left offset in the background
   * @param top - Top offset in the background
   * @param width - Width of the tile region
   * @param height - Height of the tile region
   */
  tile_set_background(id, background2, left, top, width, height) {
    const tile = this.tiles.find((t) => t.id === id);
    if (tile) {
      tile.background = background2;
      tile.left = left;
      tile.top = top;
      tile.width = width;
      tile.height = height;
    }
  }
  /**
   * Deletes all tiles at a specific depth.
   * @param depth - The depth to clear
   */
  tile_layer_delete(depth) {
    this.tiles = this.tiles.filter((t) => t.depth !== depth);
  }
  /**
   * Shifts all tiles at a specific depth by the given amount.
   * @param depth - The depth layer to shift
   * @param x - Horizontal shift amount
   * @param y - Vertical shift amount
   */
  tile_layer_shift(depth, x, y) {
    this.tiles.filter((t) => t.depth === depth).forEach((t) => {
      t.x += x;
      t.y += y;
    });
  }
  /**
   * Finds a tile at the given position and depth.
   * @param x - X position to check
   * @param y - Y position to check
   * @param depth - Depth to check
   * @returns The tile ID, or -1 if not found
   */
  tile_layer_find(x, y, depth) {
    const tile = this.tiles.find((t) => t.depth === depth && x >= t.x && x < t.x + t.width * t.xscale && y >= t.y && y < t.y + t.height * t.yscale);
    return tile?.id ?? -1;
  }
  // =========================================================================
  // Background Management
  // =========================================================================
  /**
   * Sets the background for a specific layer in this room.
   * @param index - Background layer index (0-7)
   * @param visible - Whether the background is visible
   * @param foreground - Whether it draws in front of instances
   * @param background - Background resource ID
   * @param x - X offset
   * @param y - Y offset
   * @param htiled - Whether to tile horizontally
   * @param vtiled - Whether to tile vertically
   * @param hspeed - Horizontal scroll speed
   * @param vspeed - Vertical scroll speed
   */
  room_set_background(index, visible, foreground, background2, x, y, htiled, vtiled, hspeed, vspeed) {
    this.background_visible[index] = visible;
    this.background_foreground[index] = foreground;
    this.background_index[index] = background2;
    this.background_x[index] = x;
    this.background_y[index] = y;
    this.background_htiled[index] = htiled;
    this.background_vtiled[index] = vtiled;
    this.background_hspeed[index] = hspeed;
    this.background_vspeed[index] = vspeed;
  }
  /**
   * Sets the background color for a specific layer.
   * @param index - Background layer index
   * @param color - The color value
   */
  room_set_background_color(index, color) {
    this.background_color[index] = color;
  }
  // =========================================================================
  // View Management
  // =========================================================================
  /**
   * Configures a view for this room (design-time).
   * @param index - View index
   * @param visible - Whether the view is enabled
   * @param xview - X position of the view in the room
   * @param yview - Y position of the view in the room
   * @param wview - Width of the view in the room
   * @param hview - Height of the view in the room
   * @param xport - X position of the viewport on screen
   * @param yport - Y position of the viewport on screen
   * @param wport - Width of the viewport on screen
   * @param hport - Height of the viewport on screen
   * @param hborder - Horizontal border for object following
   * @param vborder - Vertical border for object following
   * @param hspeed - Max horizontal speed when following
   * @param vspeed - Max vertical speed when following
   * @param target - Object instance to follow (-1 for none)
   */
  room_set_view(index, visible, xview, yview, wview, hview, xport, yport, wport, hport, hborder, vborder, hspeed, vspeed, target) {
    this.view_visible[index] = visible;
    this.view_xview[index] = xview;
    this.view_yview[index] = yview;
    this.view_wview[index] = wview;
    this.view_hview[index] = hview;
    this.view_xport[index] = xport;
    this.view_yport[index] = yport;
    this.view_wport[index] = wport;
    this.view_hport[index] = hport;
    this.view_hborder[index] = hborder;
    this.view_vborder[index] = vborder;
    this.view_hspeed[index] = hspeed;
    this.view_vspeed[index] = vspeed;
    this.view_object[index] = target;
  }
  /**
   * Enables or disables the view system for this room.
   * @param enabled - Whether views are enabled
   */
  room_set_view_enabled(enabled) {
    this.view_enabled = enabled;
  }
  // =========================================================================
  // Runtime View Functions
  // =========================================================================
  /**
   * Gets the X position of a view in room coordinates.
   * @param index - View index
   * @returns The X position of the view
   */
  view_get_xview(index) {
    return this.view_xview[index] ?? 0;
  }
  /**
   * Gets the Y position of a view in room coordinates.
   * @param index - View index
   * @returns The Y position of the view
   */
  view_get_yview(index) {
    return this.view_yview[index] ?? 0;
  }
  /**
   * Gets the width of a view.
   * @param index - View index
   * @returns The width of the view
   */
  view_get_wview(index) {
    return this.view_wview[index] ?? 0;
  }
  /**
   * Gets the height of a view.
   * @param index - View index
   * @returns The height of the view
   */
  view_get_hview(index) {
    return this.view_hview[index] ?? 0;
  }
  /**
   * Sets the position of a view at runtime.
   * @param index - View index
   * @param x - New X position
   * @param y - New Y position
   */
  view_set_position(index, x, y) {
    this.view_xview[index] = x;
    this.view_yview[index] = y;
  }
  /**
   * Sets the size of a view at runtime.
   * @param index - View index
   * @param w - New width
   * @param h - New height
   */
  view_set_size(index, w, h) {
    this.view_wview[index] = w;
    this.view_hview[index] = h;
  }
  /**
   * Sets the viewport position on screen.
   * @param index - View index
   * @param x - X position on screen
   * @param y - Y position on screen
   */
  view_set_port_position(index, x, y) {
    this.view_xport[index] = x;
    this.view_yport[index] = y;
  }
  /**
   * Sets the viewport size on screen.
   * @param index - View index
   * @param w - Width on screen
   * @param h - Height on screen
   */
  view_set_port_size(index, w, h) {
    this.view_wport[index] = w;
    this.view_hport[index] = h;
  }
  /**
   * Sets the object for a view to follow.
   * @param index - View index
   * @param obj - Instance ID to follow (-1 for none)
   */
  view_set_object(index, obj) {
    this.view_object[index] = obj;
  }
  /**
   * Sets the border area for view following.
   * @param index - View index
   * @param hborder - Horizontal border in pixels
   * @param vborder - Vertical border in pixels
   */
  view_set_border(index, hborder, vborder) {
    this.view_hborder[index] = hborder;
    this.view_vborder[index] = vborder;
  }
  /**
   * Sets the maximum speed for view following.
   * @param index - View index
   * @param hspeed - Max horizontal speed
   * @param vspeed - Max vertical speed
   */
  view_set_speed(index, hspeed, vspeed) {
    this.view_hspeed[index] = hspeed;
    this.view_vspeed[index] = vspeed;
  }
  /**
   * Converts a screen X coordinate to room coordinates for a specific view.
   * @param index - View index
   * @param x - Screen X coordinate
   * @returns Room X coordinate
   */
  view_screen_to_room_x(index, x) {
    const xport = this.view_xport[index] ?? 0;
    const wport = this.view_wport[index] ?? 1;
    const xview = this.view_xview[index] ?? 0;
    const wview = this.view_wview[index] ?? 1;
    return xview + (x - xport) / wport * wview;
  }
  /**
   * Converts a screen Y coordinate to room coordinates for a specific view.
   * @param index - View index
   * @param y - Screen Y coordinate
   * @returns Room Y coordinate
   */
  view_screen_to_room_y(index, y) {
    const yport = this.view_yport[index] ?? 0;
    const hport = this.view_hport[index] ?? 1;
    const yview = this.view_yview[index] ?? 0;
    const hview = this.view_hview[index] ?? 1;
    return yview + (y - yport) / hport * hview;
  }
  /**
   * Converts a room X coordinate to screen coordinates for a specific view.
   * @param index - View index
   * @param x - Room X coordinate
   * @returns Screen X coordinate
   */
  view_room_to_screen_x(index, x) {
    const xport = this.view_xport[index] ?? 0;
    const wport = this.view_wport[index] ?? 1;
    const xview = this.view_xview[index] ?? 0;
    const wview = this.view_wview[index] ?? 1;
    return xport + (x - xview) / wview * wport;
  }
  /**
   * Converts a room Y coordinate to screen coordinates for a specific view.
   * @param index - View index
   * @param y - Room Y coordinate
   * @returns Screen Y coordinate
   */
  view_room_to_screen_y(index, y) {
    const yport = this.view_yport[index] ?? 0;
    const hport = this.view_hport[index] ?? 1;
    const yview = this.view_yview[index] ?? 0;
    const hview = this.view_hview[index] ?? 1;
    return yport + (y - yview) / hview * hport;
  }
};
room.next_tile_id = 0;
var _room_names = /* @__PURE__ */ new Map();
function room_register_name(name, rm) {
  _room_names.set(name, rm);
}
__name(room_register_name, "room_register_name");
function room_get(name) {
  return _room_names.get(name);
}
__name(room_get, "room_get");
function _resolve_room(target) {
  if (typeof target === "string")
    return _room_names.get(target) ?? null;
  if (typeof target === "number") {
    const r = resource.findByID(target);
    return r instanceof room ? r : null;
  }
  return target instanceof room ? target : null;
}
__name(_resolve_room, "_resolve_room");
function room_goto(target) {
  const rm = _resolve_room(target);
  if (!rm) {
    console.error("[room_goto] unknown room:", target);
    return;
  }
  game_loop.change_room(rm);
}
__name(room_goto, "room_goto");
function room_restart() {
  if (game_loop.room)
    game_loop.change_room(game_loop.room);
}
__name(room_restart, "room_restart");
function room_goto_next() {
  if (game_loop.room)
    room_goto(game_loop.room.room_next);
}
__name(room_goto_next, "room_goto_next");
function room_goto_previous() {
  if (game_loop.room)
    room_goto(game_loop.room.room_previous);
}
__name(room_goto_previous, "room_goto_previous");
function room_exists(target) {
  return _resolve_room(target) !== null;
}
__name(room_exists, "room_exists");
function room_get_name(target) {
  const rm = target === void 0 ? game_loop.room : _resolve_room(target);
  if (!rm)
    return "";
  for (const [name, r] of _room_names)
    if (r === rm)
      return name;
  return "";
}
__name(room_get_name, "room_get_name");

// packages/engine/dist/input/keyboard.js
var vk_nokey = 0;
var vk_anykey = 1;
var vk_backspace = 8;
var vk_tab = 9;
var vk_enter = 13;
var vk_shift = 16;
var vk_control = 17;
var vk_alt = 18;
var vk_pause = 19;
var vk_escape = 27;
var vk_space = 32;
var vk_pageup = 33;
var vk_pagedown = 34;
var vk_end = 35;
var vk_home = 36;
var vk_left = 37;
var vk_up = 38;
var vk_right = 39;
var vk_down = 40;
var vk_insert = 45;
var vk_delete = 46;
var vk_f1 = 112;
var vk_f2 = 113;
var vk_f3 = 114;
var vk_f4 = 115;
var vk_f5 = 116;
var vk_f6 = 117;
var vk_f7 = 118;
var vk_f8 = 119;
var vk_f9 = 120;
var vk_f10 = 121;
var vk_f11 = 122;
var vk_f12 = 123;
var vk_numpad0 = 96;
var vk_numpad1 = 97;
var vk_numpad2 = 98;
var vk_numpad3 = 99;
var vk_numpad4 = 100;
var vk_numpad5 = 101;
var vk_numpad6 = 102;
var vk_numpad7 = 103;
var vk_numpad8 = 104;
var vk_numpad9 = 105;
var vk_multiply = 106;
var vk_add = 107;
var vk_subtract = 109;
var vk_decimal = 110;
var vk_divide = 111;
var vk_printscreen = 44;
var keyboard_manager = class {
  static {
    __name(this, "keyboard_manager");
  }
  /**
   * Attaches keyboard listeners to the window.
   * Called once by input_manager.init().
   */
  static attach() {
    if (this._attached)
      return;
    window.addEventListener("keydown", this._on_keydown);
    window.addEventListener("keyup", this._on_keyup);
    window.addEventListener("keypress", this._on_keypress);
    this._attached = true;
  }
  /**
   * Detaches keyboard listeners from the window.
   */
  static detach() {
    if (!this._attached)
      return;
    window.removeEventListener("keydown", this._on_keydown);
    window.removeEventListener("keyup", this._on_keyup);
    window.removeEventListener("keypress", this._on_keypress);
    this._attached = false;
  }
  static _handle_down(e) {
    const code = this._map(e.keyCode);
    if (!this._held.has(code)) {
      this._pressed.add(code);
      this.keyboard_lastkey = this.keyboard_key;
      this.keyboard_key = code;
    }
    this._held.add(code);
  }
  static _handle_up(e) {
    const code = this._map(e.keyCode);
    this._held.delete(code);
    this._released.add(code);
  }
  static _handle_press(e) {
    if (e.key.length === 1) {
      this.keyboard_lastchar = e.key;
      this.keyboard_string += e.key;
    }
  }
  static _map(code) {
    return this._key_map.get(code) ?? code;
  }
  /**
   * Clears the pressed and released sets at the end of each step.
   * Called by the game loop after all events have fired.
   */
  static end_step() {
    this._pressed.clear();
    this._released.clear();
  }
  /** Returns true if the key is currently held down. */
  static check(key) {
    if (key === vk_anykey)
      return this._held.size > 0;
    if (key === vk_nokey)
      return this._held.size === 0;
    return this._held.has(key);
  }
  /** Returns true if the key was pressed this step. */
  static check_pressed(key) {
    if (key === vk_anykey)
      return this._pressed.size > 0;
    if (key === vk_nokey)
      return false;
    return this._pressed.has(key);
  }
  /** Returns true if the key was released this step. */
  static check_released(key) {
    if (key === vk_anykey)
      return this._released.size > 0;
    if (key === vk_nokey)
      return false;
    return this._released.has(key);
  }
  /** Clears the held/pressed/released state for a specific key. */
  static clear(key) {
    this._held.delete(key);
    this._pressed.delete(key);
    this._released.delete(key);
  }
  /** Clears all keyboard state (held + pressed + released). */
  static clear_all() {
    this._held.clear();
    this._pressed.clear();
    this._released.clear();
  }
  /** Simulates pressing a key. */
  static key_press(key) {
    if (!this._held.has(key))
      this._pressed.add(key);
    this._held.add(key);
    this.keyboard_lastkey = this.keyboard_key;
    this.keyboard_key = key;
  }
  /** Simulates releasing a key. */
  static key_release(key) {
    this._held.delete(key);
    this._released.add(key);
  }
  /** Remaps key1 to behave as key2. */
  static set_map(key1, key2) {
    this._key_map.set(key1, key2);
  }
  /** Returns the mapped key code for a given input code. */
  static get_map(key) {
    return this._key_map.get(key) ?? key;
  }
  /** Clears all key remappings. */
  static unset_map() {
    this._key_map.clear();
  }
};
keyboard_manager._held = /* @__PURE__ */ new Set();
keyboard_manager._pressed = /* @__PURE__ */ new Set();
keyboard_manager._released = /* @__PURE__ */ new Set();
keyboard_manager._key_map = /* @__PURE__ */ new Map();
keyboard_manager.keyboard_key = vk_nokey;
keyboard_manager.keyboard_lastkey = vk_nokey;
keyboard_manager.keyboard_lastchar = "";
keyboard_manager.keyboard_string = "";
keyboard_manager._attached = false;
keyboard_manager._on_keydown = (e) => keyboard_manager._handle_down(e);
keyboard_manager._on_keyup = (e) => keyboard_manager._handle_up(e);
keyboard_manager._on_keypress = (e) => keyboard_manager._handle_press(e);
function keyboard_check(key) {
  return keyboard_manager.check(key);
}
__name(keyboard_check, "keyboard_check");
function keyboard_check_pressed(key) {
  return keyboard_manager.check_pressed(key);
}
__name(keyboard_check_pressed, "keyboard_check_pressed");
function keyboard_check_released(key) {
  return keyboard_manager.check_released(key);
}
__name(keyboard_check_released, "keyboard_check_released");
function keyboard_check_direct(key) {
  return keyboard_manager.check(key);
}
__name(keyboard_check_direct, "keyboard_check_direct");
function keyboard_clear(key) {
  keyboard_manager.clear(key);
}
__name(keyboard_clear, "keyboard_clear");
function keyboard_key_press(key) {
  keyboard_manager.key_press(key);
}
__name(keyboard_key_press, "keyboard_key_press");
function keyboard_key_release(key) {
  keyboard_manager.key_release(key);
}
__name(keyboard_key_release, "keyboard_key_release");
function keyboard_set_map(key1, key2) {
  keyboard_manager.set_map(key1, key2);
}
__name(keyboard_set_map, "keyboard_set_map");
function keyboard_get_map(key) {
  return keyboard_manager.get_map(key);
}
__name(keyboard_get_map, "keyboard_get_map");
function keyboard_unset_map() {
  keyboard_manager.unset_map();
}
__name(keyboard_unset_map, "keyboard_unset_map");

// packages/engine/dist/input/mouse.js
var mb_none = 0;
var mb_left = 1;
var mb_right = 2;
var mb_middle = 3;
var mb_any = 4;
var mouse_x = 0;
var mouse_y = 0;
var mouse_manager = class {
  static {
    __name(this, "mouse_manager");
  }
  /**
   * Attaches mouse listeners to a canvas element.
   * @param canvas - The game canvas
   */
  static attach(canvas) {
    if (this._attached)
      return;
    this._canvas = canvas;
    canvas.addEventListener("mousedown", this._on_mousedown);
    canvas.addEventListener("mouseup", this._on_mouseup);
    canvas.addEventListener("mousemove", this._on_mousemove);
    canvas.addEventListener("wheel", this._on_wheel, { passive: true });
    canvas.addEventListener("contextmenu", this._on_contextmenu);
    this._attached = true;
  }
  /**
   * Detaches mouse listeners from the canvas.
   */
  static detach() {
    if (!this._attached || !this._canvas)
      return;
    this._canvas.removeEventListener("mousedown", this._on_mousedown);
    this._canvas.removeEventListener("mouseup", this._on_mouseup);
    this._canvas.removeEventListener("mousemove", this._on_mousemove);
    this._canvas.removeEventListener("wheel", this._on_wheel);
    this._canvas.removeEventListener("contextmenu", this._on_contextmenu);
    this._attached = false;
    this._canvas = null;
  }
  static _get_button(e) {
    switch (e.button) {
      case 0:
        return mb_left;
      case 1:
        return mb_middle;
      case 2:
        return mb_right;
      default:
        return mb_none;
    }
  }
  static _handle_down(e) {
    const btn = this._get_button(e);
    if (btn === mb_none)
      return;
    if (!this._held.has(btn))
      this._pressed.add(btn);
    this._held.add(btn);
    this.mouse_lastbutton = this.mouse_button;
    this.mouse_button = btn;
    this._update_position(e);
  }
  static _handle_up(e) {
    const btn = this._get_button(e);
    if (btn === mb_none)
      return;
    this._held.delete(btn);
    this._released.add(btn);
    if (this._held.size === 0)
      this.mouse_button = mb_none;
    this._update_position(e);
  }
  static _handle_move(e) {
    this._update_position(e);
  }
  static _handle_wheel(e) {
    if (e.deltaY < 0)
      this._wheel_up = true;
    else
      this._wheel_down = true;
  }
  static _update_position(e) {
    if (!this._canvas)
      return;
    const rect = this._canvas.getBoundingClientRect();
    const scaleX = this._canvas.width / rect.width;
    const scaleY = this._canvas.height / rect.height;
    this.window_x = (e.clientX - rect.left) * scaleX;
    this.window_y = (e.clientY - rect.top) * scaleY;
  }
  /**
   * Updates room-space mouse coordinates using the current view offset.
   * Called once per step by the game loop before keyboard/mouse events fire.
   * @param view_x - Current view X offset in the room
   * @param view_y - Current view Y offset in the room
   */
  static update_room_position(view_x, view_y) {
    this.mouse_x = this.window_x + view_x;
    this.mouse_y = this.window_y + view_y;
    mouse_x = this.mouse_x;
    mouse_y = this.mouse_y;
  }
  /** Clears pressed/released state and wheel flags at the end of each step. */
  static end_step() {
    this._pressed.clear();
    this._released.clear();
    this._wheel_up = false;
    this._wheel_down = false;
  }
  /** Returns true if button is held. */
  static check(btn) {
    if (btn === mb_any)
      return this._held.size > 0;
    if (btn === mb_none)
      return this._held.size === 0;
    return this._held.has(btn);
  }
  /** Returns true if button was pressed this step. */
  static check_pressed(btn) {
    if (btn === mb_any)
      return this._pressed.size > 0;
    if (btn === mb_none)
      return false;
    return this._pressed.has(btn);
  }
  /** Returns true if button was released this step. */
  static check_released(btn) {
    if (btn === mb_any)
      return this._released.size > 0;
    if (btn === mb_none)
      return false;
    return this._released.has(btn);
  }
  /** Clears state for a specific button. */
  static clear(btn) {
    this._held.delete(btn);
    this._pressed.delete(btn);
    this._released.delete(btn);
  }
  /** Clears all mouse button + wheel state. */
  static clear_all() {
    this._held.clear();
    this._pressed.clear();
    this._released.clear();
    this._wheel_up = false;
    this._wheel_down = false;
    this.mouse_button = mb_none;
  }
  /** Returns true if the wheel scrolled up this step. */
  static wheel_up() {
    return this._wheel_up;
  }
  /** Returns true if the wheel scrolled down this step. */
  static wheel_down() {
    return this._wheel_down;
  }
};
mouse_manager._held = /* @__PURE__ */ new Set();
mouse_manager._pressed = /* @__PURE__ */ new Set();
mouse_manager._released = /* @__PURE__ */ new Set();
mouse_manager._canvas = null;
mouse_manager.window_x = 0;
mouse_manager.window_y = 0;
mouse_manager.mouse_x = 0;
mouse_manager.mouse_y = 0;
mouse_manager.mouse_button = mb_none;
mouse_manager.mouse_lastbutton = mb_none;
mouse_manager._wheel_up = false;
mouse_manager._wheel_down = false;
mouse_manager._attached = false;
mouse_manager._on_mousedown = (e) => mouse_manager._handle_down(e);
mouse_manager._on_mouseup = (e) => mouse_manager._handle_up(e);
mouse_manager._on_mousemove = (e) => mouse_manager._handle_move(e);
mouse_manager._on_wheel = (e) => mouse_manager._handle_wheel(e);
mouse_manager._on_contextmenu = (e) => e.preventDefault();
function mouse_check_button(button) {
  return mouse_manager.check(button);
}
__name(mouse_check_button, "mouse_check_button");
function mouse_check_button_pressed(button) {
  return mouse_manager.check_pressed(button);
}
__name(mouse_check_button_pressed, "mouse_check_button_pressed");
function mouse_check_button_released(button) {
  return mouse_manager.check_released(button);
}
__name(mouse_check_button_released, "mouse_check_button_released");
function mouse_clear(button) {
  mouse_manager.clear(button);
}
__name(mouse_clear, "mouse_clear");
function mouse_wheel_up() {
  return mouse_manager.wheel_up();
}
__name(mouse_wheel_up, "mouse_wheel_up");
function mouse_wheel_down() {
  return mouse_manager.wheel_down();
}
__name(mouse_wheel_down, "mouse_wheel_down");
function window_mouse_get_x() {
  return mouse_manager.window_x;
}
__name(window_mouse_get_x, "window_mouse_get_x");
function window_mouse_get_y() {
  return mouse_manager.window_y;
}
__name(window_mouse_get_y, "window_mouse_get_y");
function window_mouse_set(_x, _y) {
}
__name(window_mouse_set, "window_mouse_set");

// packages/engine/dist/input/gamepad.js
var gp_face1 = 0;
var gp_face2 = 1;
var gp_face3 = 2;
var gp_face4 = 3;
var gp_shoulderl = 4;
var gp_shoulderr = 5;
var gp_shoulderlb = 6;
var gp_shoulderrb = 7;
var gp_select = 8;
var gp_start = 9;
var gp_stickl = 10;
var gp_stickr = 11;
var gp_padu = 12;
var gp_padd = 13;
var gp_padl = 14;
var gp_padr = 15;
var gp_axislh = 0;
var gp_axislv = 1;
var gp_axisrh = 2;
var gp_axisrv = 3;
var BUTTON_THRESHOLD = 0.5;
var gamepad_manager = class {
  static {
    __name(this, "gamepad_manager");
  }
  /**
   * Polls the Gamepad API and refreshes all state snapshots.
   * Must be called every step before gamepad functions are queried.
   */
  static poll() {
    if (!navigator.getGamepads)
      return;
    const pads = navigator.getGamepads();
    for (let i = 0; i < pads.length; i++) {
      const pad = pads[i];
      const prev = this._states.get(i);
      if (!pad) {
        if (prev)
          prev.connected = false;
        continue;
      }
      const buttons_held = pad.buttons.map((b) => b.pressed || b.value > BUTTON_THRESHOLD);
      const axes = Array.from(pad.axes);
      if (!prev) {
        this._states.set(i, {
          buttons_held,
          buttons_prev: new Array(buttons_held.length).fill(false),
          axes,
          connected: true,
          id: pad.id
        });
      } else {
        prev.buttons_prev = prev.buttons_held;
        prev.buttons_held = buttons_held;
        prev.axes = axes;
        prev.connected = true;
        prev.id = pad.id;
      }
    }
  }
  /** Returns true if the Gamepad API is supported by the browser. */
  static is_supported() {
    return typeof navigator.getGamepads === "function";
  }
  /** Returns true if device index `device` is connected. */
  static is_connected(device) {
    return this._states.get(device)?.connected ?? false;
  }
  /** Returns the number of connected gamepad slots (may include gaps). */
  static get_device_count() {
    return this._states.size;
  }
  /** Returns the device description string (controller name). */
  static get_description(device) {
    return this._states.get(device)?.id ?? "";
  }
  /** Returns the number of axes on device. */
  static axis_count(device) {
    return this._states.get(device)?.axes.length ?? 0;
  }
  /**
   * Returns the current value of an axis (-1 to 1, dead zone not applied).
   * @param device - Gamepad index
   * @param axis - Axis index (use gp_axis* constants)
   */
  static axis_value(device, axis) {
    const state = this._states.get(device);
    if (!state?.connected)
      return 0;
    return state.axes[axis] ?? 0;
  }
  /** Returns the number of buttons on device. */
  static button_count(device) {
    return this._states.get(device)?.buttons_held.length ?? 0;
  }
  /** Returns true if button is currently held. */
  static button_check(device, button) {
    const state = this._states.get(device);
    if (!state?.connected)
      return false;
    return state.buttons_held[button] ?? false;
  }
  /** Returns true if button was pressed this step (was up last step, down now). */
  static button_check_pressed(device, button) {
    const state = this._states.get(device);
    if (!state?.connected)
      return false;
    return (state.buttons_held[button] ?? false) && !(state.buttons_prev[button] ?? false);
  }
  /** Returns true if button was released this step. */
  static button_check_released(device, button) {
    const state = this._states.get(device);
    if (!state?.connected)
      return false;
    return !(state.buttons_held[button] ?? false) && (state.buttons_prev[button] ?? false);
  }
  /**
   * Returns the analog button value (0 to 1) for triggers or 0/1 for digital buttons.
   * @param device - Gamepad index
   * @param button - Button index
   */
  static button_value(device, button) {
    if (!navigator.getGamepads)
      return 0;
    const pad = navigator.getGamepads()[device];
    if (!pad)
      return 0;
    return pad.buttons[button]?.value ?? 0;
  }
  /**
   * Sets controller vibration (rumble).
   * @param device - Gamepad index
   * @param left - Left motor strength (0–1)
   * @param right - Right motor strength (0–1)
   */
  static set_vibration(device, left, right) {
    if (!navigator.getGamepads)
      return;
    const pad = navigator.getGamepads()[device];
    if (!pad)
      return;
    if (typeof pad.vibrationActuator?.playEffect === "function") {
      pad.vibrationActuator.playEffect("dual-rumble", {
        startDelay: 0,
        duration: 100,
        weakMagnitude: right,
        strongMagnitude: left
      });
    }
  }
};
gamepad_manager._states = /* @__PURE__ */ new Map();
function gamepad_is_supported() {
  return gamepad_manager.is_supported();
}
__name(gamepad_is_supported, "gamepad_is_supported");
function gamepad_is_connected(device) {
  return gamepad_manager.is_connected(device);
}
__name(gamepad_is_connected, "gamepad_is_connected");
function gamepad_get_device_count() {
  return gamepad_manager.get_device_count();
}
__name(gamepad_get_device_count, "gamepad_get_device_count");
function gamepad_get_description(device) {
  return gamepad_manager.get_description(device);
}
__name(gamepad_get_description, "gamepad_get_description");
function gamepad_axis_count(device) {
  return gamepad_manager.axis_count(device);
}
__name(gamepad_axis_count, "gamepad_axis_count");
function gamepad_axis_value(device, axis) {
  return gamepad_manager.axis_value(device, axis);
}
__name(gamepad_axis_value, "gamepad_axis_value");
function gamepad_button_count(device) {
  return gamepad_manager.button_count(device);
}
__name(gamepad_button_count, "gamepad_button_count");
function gamepad_button_check(device, button) {
  return gamepad_manager.button_check(device, button);
}
__name(gamepad_button_check, "gamepad_button_check");
function gamepad_button_check_pressed(device, button) {
  return gamepad_manager.button_check_pressed(device, button);
}
__name(gamepad_button_check_pressed, "gamepad_button_check_pressed");
function gamepad_button_check_released(device, button) {
  return gamepad_manager.button_check_released(device, button);
}
__name(gamepad_button_check_released, "gamepad_button_check_released");
function gamepad_button_value(device, button) {
  return gamepad_manager.button_value(device, button);
}
__name(gamepad_button_value, "gamepad_button_value");
function gamepad_set_vibration(device, left, right) {
  gamepad_manager.set_vibration(device, left, right);
}
__name(gamepad_set_vibration, "gamepad_set_vibration");

// packages/engine/dist/input/touch.js
var MAX_TOUCH_POINTS = 11;
function make_touch_point() {
  return { x: 0, y: 0, held: false, pressed: false, released: false };
}
__name(make_touch_point, "make_touch_point");
var touch_manager = class {
  static {
    __name(this, "touch_manager");
  }
  /**
   * Attaches touch listeners to a canvas element.
   * @param canvas - The canvas receiving touch events
   */
  static attach(canvas) {
    if (this._attached)
      return;
    this._canvas = canvas;
    canvas.addEventListener("touchstart", this._on_start, { passive: false });
    canvas.addEventListener("touchend", this._on_end, { passive: false });
    canvas.addEventListener("touchmove", this._on_move, { passive: false });
    canvas.addEventListener("touchcancel", this._on_cancel, { passive: false });
    this._attached = true;
  }
  /**
   * Detaches touch listeners from the canvas.
   */
  static detach() {
    if (!this._attached || !this._canvas)
      return;
    this._canvas.removeEventListener("touchstart", this._on_start);
    this._canvas.removeEventListener("touchend", this._on_end);
    this._canvas.removeEventListener("touchmove", this._on_move);
    this._canvas.removeEventListener("touchcancel", this._on_cancel);
    this._attached = false;
    this._canvas = null;
  }
  /**
   * Converts a browser Touch to canvas-local coordinates.
   */
  static _to_canvas(touch) {
    if (!this._canvas)
      return { x: touch.clientX, y: touch.clientY };
    const rect = this._canvas.getBoundingClientRect();
    const sx = this._canvas.width / rect.width;
    const sy = this._canvas.height / rect.height;
    return {
      x: (touch.clientX - rect.left) * sx,
      y: (touch.clientY - rect.top) * sy
    };
  }
  static _alloc_slot(id) {
    if (this._id_to_slot.has(id))
      return this._id_to_slot.get(id);
    const used = new Set(this._id_to_slot.values());
    for (let i = 0; i < MAX_TOUCH_POINTS; i++) {
      if (!used.has(i)) {
        this._id_to_slot.set(id, i);
        return i;
      }
    }
    return -1;
  }
  static _free_slot(id) {
    const slot = this._id_to_slot.get(id) ?? -1;
    this._id_to_slot.delete(id);
    return slot;
  }
  static _handle_start(e) {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i];
      if (!t)
        continue;
      const slot = this._alloc_slot(t.identifier);
      if (slot < 0)
        continue;
      const pos = this._to_canvas(t);
      const pt = this._points[slot];
      pt.x = pos.x;
      pt.y = pos.y;
      pt.held = true;
      pt.pressed = true;
    }
  }
  static _handle_end(e) {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i];
      if (!t)
        continue;
      const slot = this._free_slot(t.identifier);
      if (slot < 0)
        continue;
      const pos = this._to_canvas(t);
      const pt = this._points[slot];
      pt.x = pos.x;
      pt.y = pos.y;
      pt.held = false;
      pt.released = true;
    }
  }
  static _handle_move(e) {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i];
      if (!t)
        continue;
      const slot = this._id_to_slot.get(t.identifier) ?? -1;
      if (slot < 0)
        continue;
      const pos = this._to_canvas(t);
      const pt = this._points[slot];
      pt.x = pos.x;
      pt.y = pos.y;
    }
  }
  static _handle_cancel(e) {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i];
      if (!t)
        continue;
      const slot = this._free_slot(t.identifier);
      if (slot < 0)
        continue;
      const pt = this._points[slot];
      pt.held = false;
      pt.released = true;
    }
  }
  /**
   * Clears per-step pressed/released flags.
   * Called by input_manager at the end of each step.
   */
  static end_step() {
    for (const pt of this._points) {
      pt.pressed = false;
      pt.released = false;
    }
  }
  // -------------------------------------------------------------------------
  // Query API (device = finger slot 0..MAX_TOUCH_POINTS-1)
  // -------------------------------------------------------------------------
  /** Returns true if a touch point is currently active. */
  static is_held(device) {
    return this._points[device]?.held ?? false;
  }
  /** Returns true if a touch point became active this step. */
  static is_pressed(device) {
    return this._points[device]?.pressed ?? false;
  }
  /** Returns true if a touch point was lifted this step. */
  static is_released(device) {
    return this._points[device]?.released ?? false;
  }
  /** Returns the canvas-space X coordinate of a touch device. */
  static get_x(device) {
    return this._points[device]?.x ?? -1;
  }
  /** Returns the canvas-space Y coordinate of a touch device. */
  static get_y(device) {
    return this._points[device]?.y ?? -1;
  }
  /** Returns the number of currently active touch points. */
  static get_count() {
    return this._points.filter((p) => p.held).length;
  }
};
touch_manager._points = Array.from({ length: MAX_TOUCH_POINTS }, make_touch_point);
touch_manager._canvas = null;
touch_manager._attached = false;
touch_manager._on_start = (e) => {
  e.preventDefault();
  touch_manager._handle_start(e);
};
touch_manager._on_end = (e) => {
  e.preventDefault();
  touch_manager._handle_end(e);
};
touch_manager._on_move = (e) => {
  e.preventDefault();
  touch_manager._handle_move(e);
};
touch_manager._on_cancel = (e) => {
  e.preventDefault();
  touch_manager._handle_cancel(e);
};
touch_manager._id_to_slot = /* @__PURE__ */ new Map();
function device_mouse_check_button(device, button) {
  return touch_manager.is_held(device);
}
__name(device_mouse_check_button, "device_mouse_check_button");
function device_mouse_check_button_pressed(device, button) {
  return touch_manager.is_pressed(device);
}
__name(device_mouse_check_button_pressed, "device_mouse_check_button_pressed");
function device_mouse_check_button_released(device, button) {
  return touch_manager.is_released(device);
}
__name(device_mouse_check_button_released, "device_mouse_check_button_released");
function device_mouse_x(device) {
  return touch_manager.get_x(device);
}
__name(device_mouse_x, "device_mouse_x");
function device_mouse_y(device) {
  return touch_manager.get_y(device);
}
__name(device_mouse_y, "device_mouse_y");
function device_get_touch_count() {
  return touch_manager.get_count();
}
__name(device_get_touch_count, "device_get_touch_count");

// packages/engine/dist/core/game_state.js
var _score = 0;
var _lives = 3;
var _health = 100;
var _lives_armed = true;
var _health_armed = true;
function get_score() {
  return _score;
}
__name(get_score, "get_score");
function set_score(value) {
  _score = value;
}
__name(set_score, "set_score");
function get_lives() {
  return _lives;
}
__name(get_lives, "get_lives");
function set_lives(value) {
  _lives = value;
}
__name(set_lives, "set_lives");
function get_health() {
  return _health;
}
__name(get_health, "get_health");
function set_health(value) {
  _health = value;
}
__name(set_health, "set_health");
function _consume_no_more_lives() {
  if (_lives <= 0 && _lives_armed) {
    _lives_armed = false;
    return true;
  }
  if (_lives > 0)
    _lives_armed = true;
  return false;
}
__name(_consume_no_more_lives, "_consume_no_more_lives");
function _consume_no_more_health() {
  if (_health <= 0 && _health_armed) {
    _health_armed = false;
    return true;
  }
  if (_health > 0)
    _health_armed = true;
  return false;
}
__name(_consume_no_more_health, "_consume_no_more_health");
function _reset_game_state() {
  _score = 0;
  _lives = 3;
  _health = 100;
  _lives_armed = true;
  _health_armed = true;
}
__name(_reset_game_state, "_reset_game_state");

// packages/engine/dist/core/game_loop.js
var _begin_frame = null;
var _end_frame = null;
var _draw_room = null;
var MAX_CATCHUP_MS = 250;
function set_frame_hooks(begin, end) {
  _begin_frame = begin;
  _end_frame = end;
}
__name(set_frame_hooks, "set_frame_hooks");
function set_room_render_hook(fn) {
  _draw_room = fn;
}
__name(set_room_render_hook, "set_room_render_hook");
var game_loop = class {
  static {
    __name(this, "game_loop");
  }
  /**
   * Attaches input systems to the given canvas.
   * Must be called before start() if mouse or touch input is needed.
   * @param canvas - The game canvas element
   */
  static init_input(canvas) {
    this._canvas = canvas;
    keyboard_manager.attach();
    mouse_manager.attach(canvas);
    touch_manager.attach(canvas);
  }
  /**
   * Starts the game loop.
   * Initializes timing values and begins the requestAnimationFrame cycle.
   */
  static start(room2) {
    if (room2) {
      this.room = room2;
      this.room_first = room2.id;
    }
    if (this.room)
      this.room.build_for_entry();
    this._pending_game_start = true;
    this._pending_room_start = true;
    this._stopped = false;
    this.last_delta = performance.now();
    requestAnimationFrame(this.tick.bind(this));
  }
  /**
   * Main loop tick called every frame by requestAnimationFrame.
   * Handles timing, runs fixed timestep updates, and draws once per frame.
   * @param current - The current timestamp provided by requestAnimationFrame
   */
  static tick(current) {
    if (this._stopped)
      return;
    this.room_delta = current - this.last_delta;
    this.last_delta = current;
    this.accumulator += Math.min(this.room_delta, MAX_CATCHUP_MS);
    this.delta_time_us = this.room_delta * 1e3;
    this.fps_real = this.room_delta > 0 ? Math.round(1e3 / this.room_delta) : 0;
    this._fps_accum += this.room_delta;
    this._fps_frames += 1;
    if (this._fps_accum >= 1e3) {
      this.fps = this._fps_frames;
      this._fps_frames = 0;
      this._fps_accum -= 1e3;
    }
    const frameTime = 1e3 / this.room_speed;
    while (this.accumulator >= frameTime) {
      this.update();
      this.accumulator -= frameTime;
    }
    this.draw();
    requestAnimationFrame(this.tick.bind(this));
  }
  /**
   * Refreshes the room-space mouse position (`mouse_x` / `mouse_y`) from the active view's offset,
   * so they're current before any Step event reads them. No views → the offset is (0, 0), i.e. the
   * room and window share coordinates.
   */
  static _refresh_mouse_room_position() {
    let vx = 0, vy = 0;
    const rm = this.room;
    if (rm && rm.view_enabled) {
      for (let i = 0; i < rm.view_visible.length; i++) {
        if (rm.view_visible[i]) {
          vx = rm.view_xview[i] ?? 0;
          vy = rm.view_yview[i] ?? 0;
          break;
        }
      }
    }
    mouse_manager.update_room_position(vx, vy);
  }
  /**
   * Runs all update events in GMS order.
   * Create and destroy events run once and are cleared after execution.
   * Input polling happens before events; end_step clears edge-trigger state after.
   */
  static update() {
    gamepad_manager.poll();
    this._refresh_mouse_room_position();
    const createEvents = [...this.update_events.get(EVENT_TYPE.create) ?? []];
    this.update_events.set(EVENT_TYPE.create, []);
    createEvents.forEach((e) => e.run());
    if (this._pending_game_start) {
      this._pending_game_start = false;
      this._dispatch_lifecycle("on_game_start");
    }
    if (this._pending_room_start) {
      this._pending_room_start = false;
      if (this.room?.creation_code)
        this.room.creation_code();
      this._dispatch_lifecycle("on_room_start");
    }
    this.update_events.get(EVENT_TYPE.step_begin)?.forEach((e) => e.run());
    this.update_events.get(EVENT_TYPE.step)?.forEach((e) => e.run());
    this._step_physics();
    this.update_events.get(EVENT_TYPE.step_end)?.forEach((e) => e.run());
    if (_consume_no_more_lives())
      this._dispatch_lifecycle("on_no_more_lives");
    if (_consume_no_more_health())
      this._dispatch_lifecycle("on_no_more_health");
    this.update_events.get(EVENT_TYPE.collision)?.forEach((e) => e.run());
    this.update_events.get(EVENT_TYPE.keyboard)?.forEach((e) => e.run());
    this.update_events.get(EVENT_TYPE.mouse)?.forEach((e) => e.run());
    this.update_events.get(EVENT_TYPE.other)?.forEach((e) => e.run());
    this.update_events.get(EVENT_TYPE.async)?.forEach((e) => e.run());
    const destroyEvents = [...this.update_events.get(EVENT_TYPE.destroy) ?? []];
    this.update_events.set(EVENT_TYPE.destroy, []);
    destroyEvents.forEach((e) => e.run());
    keyboard_manager.end_step();
    mouse_manager.end_step();
    touch_manager.end_step();
  }
  /**
   * Advances the physics world (if one exists) and syncs physics instances.
   * Runs between Step and End Step, matching GMS ordering. No-op for non-physics games.
   */
  static _step_physics() {
    if (!physics_world_get_engine() || !this.room)
      return;
    const instances = this.room.instance_get_all();
    for (const inst of instances)
      inst.phy_ensure_body();
    physics_world_step();
    for (const inst of instances)
      if (inst.active)
        inst.phy_sync_from_body();
  }
  /**
   * Runs all draw events in GMS order.
   * Called once per frame after all updates have completed.
   * begin_frame clears the canvas; end_frame flushes the batch.
   */
  static draw() {
    _begin_frame?.();
    const run_instances = /* @__PURE__ */ __name(() => {
      const rm = this.room;
      if (!rm)
        return;
      const insts = rm.instance_get_all().filter((i) => i.active && i.visible).sort((a, b) => b.depth - a.depth);
      for (const i of insts)
        i.run_draw_begin();
      for (const i of insts)
        i.run_draw();
      for (const i of insts)
        i.run_draw_end();
    }, "run_instances");
    if (_draw_room && this.room) {
      _draw_room(this.room, run_instances);
    } else {
      run_instances();
    }
    this.draw_events.get(EVENT_TYPE.draw_gui)?.forEach((e) => e.run());
    _end_frame?.();
  }
  /**
   * Registers a function to be called for a specific event type.
   * @param event - The event type to register for
   * @param func - The function to call when the event fires
   */
  static register(event, func) {
    const targetMap = event === EVENT_TYPE.draw_begin || event === EVENT_TYPE.draw || event === EVENT_TYPE.draw_end || event === EVENT_TYPE.draw_gui ? this.draw_events : this.update_events;
    const existing = targetMap.get(event) ?? [];
    existing.push(new game_event(func, event));
    targetMap.set(event, existing);
  }
  /**
   * Unregisters a function from a specific event type.
   * @param event - The event type to unregister from
   * @param func - The function to remove
   */
  static unregister(event, func) {
    const targetMap = event === EVENT_TYPE.draw_begin || event === EVENT_TYPE.draw || event === EVENT_TYPE.draw_end || event === EVENT_TYPE.draw_gui ? this.draw_events : this.update_events;
    const existing = targetMap.get(event) ?? [];
    const filtered = existing.filter((e) => e.event !== func);
    targetMap.set(event, filtered);
  }
  /**
   * Transitions to a new room, clearing current events and loading the new room's state.
   * @param room - The room to transition to
   */
  static change_room(room2) {
    this._dispatch_lifecycle("on_room_end");
    const leaving = this.room;
    if (leaving && leaving !== room2 && !leaving.room_persistent) {
      leaving.reset_contents();
      leaving.built = false;
    }
    this.update_events.clear();
    this.draw_events.clear();
    this.room = room2;
    this.room_speed = room2.room_speed;
    room2.build_for_entry();
    this._pending_room_start = true;
  }
  /**
   * Ends the game: fires the Game End event for all instances, then halts the loop.
   */
  static end() {
    this._dispatch_lifecycle("on_game_end");
    this._stopped = true;
  }
  /**
   * Restarts the game by returning to the first room.
   */
  static restart() {
    _reset_game_state();
    const first = resource.findByID(this.room_first);
    if (first instanceof room) {
      first.built = false;
      this.change_room(first);
    }
  }
  /**
   * Calls a lifecycle event method on every active instance in the current room.
   * @param method - Name of the lifecycle method to invoke
   */
  static _dispatch_lifecycle(method) {
    if (!this.room)
      return;
    for (const inst of this.room.instance_get_all()) {
      if (inst.active)
        inst[method]();
    }
  }
};
game_loop.room_speed = 60;
game_loop.room_delta = 0;
game_loop.last_delta = 0;
game_loop.accumulator = 0;
game_loop.fps = 0;
game_loop.fps_real = 0;
game_loop.delta_time_us = 0;
game_loop._fps_frames = 0;
game_loop._fps_accum = 0;
game_loop.room = null;
game_loop.room_first = -1;
game_loop.room_last = 0;
game_loop._canvas = null;
game_loop._pending_game_start = false;
game_loop._pending_room_start = false;
game_loop._stopped = false;
game_loop.update_events = /* @__PURE__ */ new Map();
game_loop.draw_events = /* @__PURE__ */ new Map();
function game_end() {
  game_loop.end();
}
__name(game_end, "game_end");
function game_restart() {
  game_loop.restart();
}
__name(game_restart, "game_restart");

// packages/engine/dist/core/system.js
var _now = /* @__PURE__ */ __name(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "_now");
var _start = _now();
function fps() {
  return game_loop.fps;
}
__name(fps, "fps");
function fps_real() {
  return game_loop.fps_real;
}
__name(fps_real, "fps_real");
function delta_time() {
  return game_loop.delta_time_us;
}
__name(delta_time, "delta_time");
function get_timer() {
  return Math.floor((_now() - _start) * 1e3);
}
__name(get_timer, "get_timer");
function current_time() {
  return Math.floor(_now() - _start);
}
__name(current_time, "current_time");
function show_debug_message(message) {
  console.log(typeof message === "string" ? message : String(message));
}
__name(show_debug_message, "show_debug_message");
function set_application_title(title) {
  if (typeof document !== "undefined")
    document.title = title;
}
__name(set_application_title, "set_application_title");
function show_message(message) {
  const s = String(message);
  if (typeof window !== "undefined" && typeof window.alert === "function")
    window.alert(s);
  else
    console.log("[show_message]", s);
}
__name(show_message, "show_message");
function show_question(message) {
  if (typeof window !== "undefined" && typeof window.confirm === "function")
    return window.confirm(String(message));
  return false;
}
__name(show_question, "show_question");
function get_string(message, default_value = "") {
  if (typeof window !== "undefined" && typeof window.prompt === "function") {
    return window.prompt(String(message), default_value) ?? default_value;
  }
  return default_value;
}
__name(get_string, "get_string");
function get_integer(message, default_value = 0) {
  if (typeof window !== "undefined" && typeof window.prompt === "function") {
    const r = window.prompt(String(message), String(default_value));
    if (r === null)
      return default_value;
    const n = parseFloat(r);
    return Number.isNaN(n) ? default_value : n;
  }
  return default_value;
}
__name(get_integer, "get_integer");

// packages/engine/dist/utils/datetime.js
var _d = /* @__PURE__ */ __name((dt) => new Date(dt), "_d");
function date_current_datetime() {
  return Date.now();
}
__name(date_current_datetime, "date_current_datetime");
function date_create_datetime(year, month, day, hour, minute, second) {
  return new Date(year, month - 1, day, hour, minute, second).getTime();
}
__name(date_create_datetime, "date_create_datetime");
function date_create_date(year, month, day) {
  return new Date(year, month - 1, day).getTime();
}
__name(date_create_date, "date_create_date");
function date_get_year(dt) {
  return _d(dt).getFullYear();
}
__name(date_get_year, "date_get_year");
function date_get_month(dt) {
  return _d(dt).getMonth() + 1;
}
__name(date_get_month, "date_get_month");
function date_get_day(dt) {
  return _d(dt).getDate();
}
__name(date_get_day, "date_get_day");
function date_get_hour(dt) {
  return _d(dt).getHours();
}
__name(date_get_hour, "date_get_hour");
function date_get_minute(dt) {
  return _d(dt).getMinutes();
}
__name(date_get_minute, "date_get_minute");
function date_get_second(dt) {
  return _d(dt).getSeconds();
}
__name(date_get_second, "date_get_second");
function date_get_weekday(dt) {
  return _d(dt).getDay();
}
__name(date_get_weekday, "date_get_weekday");
function date_get_day_of_year(dt) {
  const d = _d(dt);
  const start = new Date(d.getFullYear(), 0, 0).getTime();
  return Math.floor((d.getTime() - start) / 864e5);
}
__name(date_get_day_of_year, "date_get_day_of_year");
function current_year() {
  return (/* @__PURE__ */ new Date()).getFullYear();
}
__name(current_year, "current_year");
function current_month() {
  return (/* @__PURE__ */ new Date()).getMonth() + 1;
}
__name(current_month, "current_month");
function current_day() {
  return (/* @__PURE__ */ new Date()).getDate();
}
__name(current_day, "current_day");
function current_hour() {
  return (/* @__PURE__ */ new Date()).getHours();
}
__name(current_hour, "current_hour");
function current_minute() {
  return (/* @__PURE__ */ new Date()).getMinutes();
}
__name(current_minute, "current_minute");
function current_second() {
  return (/* @__PURE__ */ new Date()).getSeconds();
}
__name(current_second, "current_second");
function current_weekday() {
  return (/* @__PURE__ */ new Date()).getDay();
}
__name(current_weekday, "current_weekday");
function date_inc_year(dt, amount) {
  const d = _d(dt);
  d.setFullYear(d.getFullYear() + amount);
  return d.getTime();
}
__name(date_inc_year, "date_inc_year");
function date_inc_month(dt, amount) {
  const d = _d(dt);
  d.setMonth(d.getMonth() + amount);
  return d.getTime();
}
__name(date_inc_month, "date_inc_month");
function date_inc_week(dt, amount) {
  return dt + amount * 7 * 864e5;
}
__name(date_inc_week, "date_inc_week");
function date_inc_day(dt, amount) {
  return dt + amount * 864e5;
}
__name(date_inc_day, "date_inc_day");
function date_inc_hour(dt, amount) {
  return dt + amount * 36e5;
}
__name(date_inc_hour, "date_inc_hour");
function date_inc_minute(dt, amount) {
  return dt + amount * 6e4;
}
__name(date_inc_minute, "date_inc_minute");
function date_inc_second(dt, amount) {
  return dt + amount * 1e3;
}
__name(date_inc_second, "date_inc_second");
function date_compare_datetime(dt1, dt2) {
  return dt1 < dt2 ? -1 : dt1 > dt2 ? 1 : 0;
}
__name(date_compare_datetime, "date_compare_datetime");
function date_second_span(dt1, dt2) {
  return Math.abs(dt2 - dt1) / 1e3;
}
__name(date_second_span, "date_second_span");
function date_minute_span(dt1, dt2) {
  return Math.abs(dt2 - dt1) / 6e4;
}
__name(date_minute_span, "date_minute_span");
function date_hour_span(dt1, dt2) {
  return Math.abs(dt2 - dt1) / 36e5;
}
__name(date_hour_span, "date_hour_span");
function date_day_span(dt1, dt2) {
  return Math.abs(dt2 - dt1) / 864e5;
}
__name(date_day_span, "date_day_span");
function date_days_in_month(dt) {
  const d = _d(dt);
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}
__name(date_days_in_month, "date_days_in_month");
function date_leap_year(dt) {
  const y = _d(dt).getFullYear();
  return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
}
__name(date_leap_year, "date_leap_year");
function date_days_in_year(dt) {
  return date_leap_year(dt) ? 366 : 365;
}
__name(date_days_in_year, "date_days_in_year");
function date_datetime_string(dt) {
  return _d(dt).toLocaleString();
}
__name(date_datetime_string, "date_datetime_string");
function date_date_string(dt) {
  return _d(dt).toLocaleDateString();
}
__name(date_date_string, "date_date_string");
function date_time_string(dt) {
  return _d(dt).toLocaleTimeString();
}
__name(date_time_string, "date_time_string");

// packages/engine/dist/collision/collision.js
var MASK_RECT = 0;
var MASK_CIRCLE = 1;
var MASK_ELLIPSE = 2;
function get_bbox(inst, x, y) {
  const px = x ?? inst.x;
  const py = y ?? inst.y;
  if (inst.mask_manual) {
    const sx2 = inst.image_xscale;
    const sy2 = inst.image_yscale;
    const x1 = px + inst.mask_off_left * sx2, x2 = px + inst.mask_off_right * sx2;
    const y1 = py + inst.mask_off_top * sy2, y2 = py + inst.mask_off_bottom * sy2;
    return {
      left: Math.min(x1, x2),
      top: Math.min(y1, y2),
      right: Math.max(x1, x2),
      bottom: Math.max(y1, y2)
    };
  }
  const sprite2 = get_sprite_for_instance(inst);
  if (!sprite2) {
    return { left: px, top: py, right: px + 1, bottom: py + 1 };
  }
  const sx = inst.image_xscale;
  const sy = inst.image_yscale;
  const ox = sprite2.xoffset * sx;
  const oy = sprite2.yoffset * sy;
  const has_mask = sprite2.mask_left >= 0;
  const ml = has_mask ? sprite2.mask_left : 0;
  const mt = has_mask ? sprite2.mask_top : 0;
  const mr = has_mask ? sprite2.mask_right : sprite2.width;
  const mb = has_mask ? sprite2.mask_bottom : sprite2.height;
  return {
    left: px - ox + ml * sx,
    top: py - oy + mt * sy,
    right: px - ox + mr * sx,
    bottom: py - oy + mb * sy
  };
}
__name(get_bbox, "get_bbox");
function update_bbox(inst) {
  const bbox = get_bbox(inst);
  inst.bbox_left = bbox.left;
  inst.bbox_top = bbox.top;
  inst.bbox_right = bbox.right;
  inst.bbox_bottom = bbox.bottom;
}
__name(update_bbox, "update_bbox");
function get_sprite_for_instance(inst) {
  const idx = inst.mask_index >= 0 ? inst.mask_index : inst.sprite_index;
  if (idx < 0)
    return null;
  const res = resource.findByID(idx);
  if (res && "frames" in res && "width" in res && "xoffset" in res && Array.isArray(res.frames)) {
    return res;
  }
  return null;
}
__name(get_sprite_for_instance, "get_sprite_for_instance");
function bbox_overlap(a_left, a_top, a_right, a_bottom, b_left, b_top, b_right, b_bottom) {
  return a_left < b_right && a_right > b_left && a_top < b_bottom && a_bottom > b_top;
}
__name(bbox_overlap, "bbox_overlap");
function instances_collide(a, ax, ay, b) {
  if (a === b)
    return false;
  if (!b.active)
    return false;
  const bbox_a = get_bbox(a, ax, ay);
  const bbox_b = get_bbox(b);
  return bbox_overlap(bbox_a.left, bbox_a.top, bbox_a.right, bbox_a.bottom, bbox_b.left, bbox_b.top, bbox_b.right, bbox_b.bottom);
}
__name(instances_collide, "instances_collide");
function point_in_instance(px, py, b) {
  if (!b.active)
    return false;
  const bbox = get_bbox(b);
  return px >= bbox.left && px < bbox.right && py >= bbox.top && py < bbox.bottom;
}
__name(point_in_instance, "point_in_instance");
function rect_in_instance(rx1, ry1, rx2, ry2, b) {
  if (!b.active)
    return false;
  const bbox = get_bbox(b);
  return bbox_overlap(rx1, ry1, rx2, ry2, bbox.left, bbox.top, bbox.right, bbox.bottom);
}
__name(rect_in_instance, "rect_in_instance");
function circle_in_instance(cx, cy, cr, b) {
  if (!b.active)
    return false;
  const bbox = get_bbox(b);
  const nearest_x = Math.max(bbox.left, Math.min(cx, bbox.right));
  const nearest_y = Math.max(bbox.top, Math.min(cy, bbox.bottom));
  const dx = cx - nearest_x;
  const dy = cy - nearest_y;
  return dx * dx + dy * dy < cr * cr;
}
__name(circle_in_instance, "circle_in_instance");
function line_in_instance(x1, y1, x2, y2, b) {
  if (!b.active)
    return false;
  const bbox = get_bbox(b);
  return seg_intersects_aabb(x1, y1, x2, y2, bbox.left, bbox.top, bbox.right, bbox.bottom);
}
__name(line_in_instance, "line_in_instance");
function seg_intersects_aabb(x1, y1, x2, y2, left, top, right, bottom) {
  if (x1 >= left && x1 <= right && y1 >= top && y1 <= bottom || x2 >= left && x2 <= right && y2 >= top && y2 <= bottom)
    return true;
  const dx = x2 - x1;
  const dy = y2 - y1;
  let t0 = 0, t1 = 1;
  const clip = /* @__PURE__ */ __name((p, q) => {
    if (p === 0)
      return q >= 0;
    const r = q / p;
    if (p < 0) {
      if (r > t1)
        return false;
      if (r > t0)
        t0 = r;
    } else {
      if (r < t0)
        return false;
      if (r < t1)
        t1 = r;
    }
    return true;
  }, "clip");
  if (!clip(-dx, x1 - left))
    return false;
  if (!clip(dx, right - x1))
    return false;
  if (!clip(-dy, y1 - top))
    return false;
  if (!clip(dy, bottom - y1))
    return false;
  return t0 <= t1;
}
__name(seg_intersects_aabb, "seg_intersects_aabb");

// packages/engine/dist/core/path.js
var path_kind_linear = 0;
var path_kind_smooth = 1;
var _paths = /* @__PURE__ */ new Map();
var _next_path_id = 1;
function _make_path() {
  return { points: [], closed: false, kind: path_kind_linear, precision: 8 };
}
__name(_make_path, "_make_path");
function _catmull_rom(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;
  return 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}
__name(_catmull_rom, "_catmull_rom");
function _eval_path(path, t) {
  const pts = path.points;
  const n = pts.length;
  if (n === 0)
    return { x: 0, y: 0, speed: 1 };
  if (n === 1) {
    const p = pts[0];
    return { x: p.x, y: p.y, speed: p.speed };
  }
  if (path.closed) {
    t = (t % 1 + 1) % 1;
  } else {
    t = Math.max(0, Math.min(1, t));
  }
  const seg_count = path.closed ? n : n - 1;
  const seg_t = t * seg_count;
  const seg_i = Math.min(Math.floor(seg_t), seg_count - 1);
  const local_t = seg_t - seg_i;
  if (path.kind === path_kind_linear) {
    const a = pts[seg_i];
    const b = pts[(seg_i + 1) % n];
    return {
      x: a.x + (b.x - a.x) * local_t,
      y: a.y + (b.y - a.y) * local_t,
      speed: a.speed + (b.speed - a.speed) * local_t
    };
  }
  const wrap2 = /* @__PURE__ */ __name((i) => (i % n + n) % n, "wrap");
  const p0 = pts[path.closed ? wrap2(seg_i - 1) : Math.max(seg_i - 1, 0)];
  const p1 = pts[seg_i];
  const p2 = pts[(seg_i + 1) % n];
  const p3 = pts[path.closed ? wrap2(seg_i + 2) : Math.min(seg_i + 2, n - 1)];
  return {
    x: _catmull_rom(p0.x, p1.x, p2.x, p3.x, local_t),
    y: _catmull_rom(p0.y, p1.y, p2.y, p3.y, local_t),
    speed: _catmull_rom(p0.speed, p1.speed, p2.speed, p3.speed, local_t)
  };
}
__name(_eval_path, "_eval_path");
function _compute_length(path) {
  const steps = path.points.length * path.precision;
  if (steps < 2)
    return 0;
  let len = 0;
  let prev = _eval_path(path, 0);
  for (let i = 1; i <= steps; i++) {
    const curr = _eval_path(path, i / steps);
    const dx = curr.x - prev.x;
    const dy = curr.y - prev.y;
    len += Math.sqrt(dx * dx + dy * dy);
    prev = curr;
  }
  return len;
}
__name(_compute_length, "_compute_length");
var path_action_stop = 0;
var path_action_restart = 1;
var path_action_continue = 2;
var path_action_reverse = 3;
function path_create() {
  const id = _next_path_id++;
  _paths.set(id, _make_path());
  return id;
}
__name(path_create, "path_create");
function path_delete(path_id) {
  _paths.delete(path_id);
}
__name(path_delete, "path_delete");
function path_exists(path_id) {
  return _paths.has(path_id);
}
__name(path_exists, "path_exists");
function path_add_point(path_id, x, y, speed = 1) {
  _paths.get(path_id)?.points.push({ x, y, speed });
}
__name(path_add_point, "path_add_point");
function path_clear_points(path_id) {
  const p = _paths.get(path_id);
  if (p)
    p.points = [];
}
__name(path_clear_points, "path_clear_points");
function path_get_number(path_id) {
  return _paths.get(path_id)?.points.length ?? 0;
}
__name(path_get_number, "path_get_number");
function path_get_x(path_id, t) {
  const p = _paths.get(path_id);
  return p ? _eval_path(p, t).x : 0;
}
__name(path_get_x, "path_get_x");
function path_get_y(path_id, t) {
  const p = _paths.get(path_id);
  return p ? _eval_path(p, t).y : 0;
}
__name(path_get_y, "path_get_y");
function path_get_speed(path_id, t) {
  const p = _paths.get(path_id);
  return p ? _eval_path(p, t).speed : 1;
}
__name(path_get_speed, "path_get_speed");
function path_get_length(path_id) {
  const p = _paths.get(path_id);
  return p ? _compute_length(p) : 0;
}
__name(path_get_length, "path_get_length");
function path_get_point_x(path_id, n) {
  return _paths.get(path_id)?.points[n]?.x ?? 0;
}
__name(path_get_point_x, "path_get_point_x");
function path_get_point_y(path_id, n) {
  return _paths.get(path_id)?.points[n]?.y ?? 0;
}
__name(path_get_point_y, "path_get_point_y");
function path_get_point_speed(path_id, n) {
  return _paths.get(path_id)?.points[n]?.speed ?? 1;
}
__name(path_get_point_speed, "path_get_point_speed");
function path_set_closed(path_id, closed) {
  const p = _paths.get(path_id);
  if (p)
    p.closed = closed;
}
__name(path_set_closed, "path_set_closed");
function path_set_kind(path_id, kind) {
  const p = _paths.get(path_id);
  if (p)
    p.kind = kind;
}
__name(path_set_kind, "path_set_kind");
function path_set_precision(path_id, precision) {
  const p = _paths.get(path_id);
  if (p)
    p.precision = Math.max(1, precision);
}
__name(path_set_precision, "path_set_precision");
function path_flip(path_id) {
  const p = _paths.get(path_id);
  if (!p || p.points.length === 0)
    return;
  const min_x = Math.min(...p.points.map((pt) => pt.x));
  const max_x = Math.max(...p.points.map((pt) => pt.x));
  const cx = (min_x + max_x) / 2;
  for (const pt of p.points)
    pt.x = 2 * cx - pt.x;
}
__name(path_flip, "path_flip");
function path_mirror(path_id) {
  const p = _paths.get(path_id);
  if (!p || p.points.length === 0)
    return;
  const min_y = Math.min(...p.points.map((pt) => pt.y));
  const max_y = Math.max(...p.points.map((pt) => pt.y));
  const cy = (min_y + max_y) / 2;
  for (const pt of p.points)
    pt.y = 2 * cy - pt.y;
}
__name(path_mirror, "path_mirror");
function path_reverse(path_id) {
  _paths.get(path_id)?.points.reverse();
}
__name(path_reverse, "path_reverse");
var _path_names = /* @__PURE__ */ new Map();
function path_register_name(name, id) {
  _path_names.set(name, id);
}
__name(path_register_name, "path_register_name");
function path_get_index(name) {
  return _path_names.get(name) ?? -1;
}
__name(path_get_index, "path_get_index");

// packages/engine/dist/core/motion_planning.js
var _grids = /* @__PURE__ */ new Map();
var _next_grid_id = 1;
function _idx(g, h, v) {
  return v * g.hcells + h;
}
__name(_idx, "_idx");
function _cell_at(g, room_x, room_y) {
  const h = Math.floor((room_x - g.left) / g.cellwidth);
  const v = Math.floor((room_y - g.top) / g.cellheight);
  if (h < 0 || v < 0 || h >= g.hcells || v >= g.vcells)
    return null;
  return { h, v };
}
__name(_cell_at, "_cell_at");
function _cell_center(g, h, v) {
  return { x: g.left + (h + 0.5) * g.cellwidth, y: g.top + (v + 0.5) * g.cellheight };
}
__name(_cell_center, "_cell_center");
function mp_grid_create(left, top, hcells, vcells, cellwidth, cellheight) {
  const id = _next_grid_id++;
  _grids.set(id, { left, top, hcells, vcells, cellwidth, cellheight, cells: new Uint8Array(hcells * vcells) });
  return id;
}
__name(mp_grid_create, "mp_grid_create");
function mp_grid_destroy(grid_id) {
  _grids.delete(grid_id);
}
__name(mp_grid_destroy, "mp_grid_destroy");
function mp_grid_clear_all(grid_id) {
  _grids.get(grid_id)?.cells.fill(0);
}
__name(mp_grid_clear_all, "mp_grid_clear_all");
function mp_grid_clear_cell(grid_id, h, v) {
  const g = _grids.get(grid_id);
  if (g && h >= 0 && v >= 0 && h < g.hcells && v < g.vcells)
    g.cells[_idx(g, h, v)] = 0;
}
__name(mp_grid_clear_cell, "mp_grid_clear_cell");
function mp_grid_add_cell(grid_id, h, v) {
  const g = _grids.get(grid_id);
  if (g && h >= 0 && v >= 0 && h < g.hcells && v < g.vcells)
    g.cells[_idx(g, h, v)] = 1;
}
__name(mp_grid_add_cell, "mp_grid_add_cell");
function mp_grid_get_cell(grid_id, h, v) {
  const g = _grids.get(grid_id);
  if (!g || h < 0 || v < 0 || h >= g.hcells || v >= g.vcells)
    return -1;
  return g.cells[_idx(g, h, v)] ? -1 : 0;
}
__name(mp_grid_get_cell, "mp_grid_get_cell");
function _rect_cells(g, x1, y1, x2, y2, value) {
  const h1 = Math.max(0, Math.floor((Math.min(x1, x2) - g.left) / g.cellwidth));
  const v1 = Math.max(0, Math.floor((Math.min(y1, y2) - g.top) / g.cellheight));
  const h2 = Math.min(g.hcells - 1, Math.floor((Math.max(x1, x2) - g.left) / g.cellwidth));
  const v2 = Math.min(g.vcells - 1, Math.floor((Math.max(y1, y2) - g.top) / g.cellheight));
  for (let v = v1; v <= v2; v++)
    for (let h = h1; h <= h2; h++)
      g.cells[_idx(g, h, v)] = value;
}
__name(_rect_cells, "_rect_cells");
function mp_grid_add_rectangle(grid_id, x1, y1, x2, y2) {
  const g = _grids.get(grid_id);
  if (g)
    _rect_cells(g, x1, y1, x2, y2, 1);
}
__name(mp_grid_add_rectangle, "mp_grid_add_rectangle");
function mp_grid_clear_rectangle(grid_id, x1, y1, x2, y2) {
  const g = _grids.get(grid_id);
  if (g)
    _rect_cells(g, x1, y1, x2, y2, 0);
}
__name(mp_grid_clear_rectangle, "mp_grid_clear_rectangle");
function mp_grid_add_instances(grid_id, obj, _prec = false) {
  const g = _grids.get(grid_id);
  const room2 = game_loop.room;
  if (!g || !room2)
    return;
  for (const inst of room2.instance_get_all()) {
    if (!object_match(inst, obj) || !inst.active)
      continue;
    _rect_cells(g, inst.bbox_left, inst.bbox_top, inst.bbox_right, inst.bbox_bottom, 1);
  }
}
__name(mp_grid_add_instances, "mp_grid_add_instances");
function mp_grid_path(grid_id, path_id, xstart, ystart, xgoal, ygoal, allowdiag) {
  const g = _grids.get(grid_id);
  if (!g)
    return false;
  const start = _cell_at(g, xstart, ystart);
  const goal = _cell_at(g, xgoal, ygoal);
  if (!start || !goal)
    return false;
  if (g.cells[_idx(g, goal.h, goal.v)])
    return false;
  const W = g.hcells, H = g.vcells;
  const node = /* @__PURE__ */ __name((h, v) => v * W + h, "node");
  const start_n = node(start.h, start.v);
  const goal_n = node(goal.h, goal.v);
  const came = /* @__PURE__ */ new Map();
  const gcost = /* @__PURE__ */ new Map([[start_n, 0]]);
  const open = /* @__PURE__ */ new Set([start_n]);
  const hx = /* @__PURE__ */ __name((n2) => {
    const h = n2 % W, v = (n2 - h) / W;
    return Math.hypot(h - goal.h, v - goal.v);
  }, "hx");
  const neigh = allowdiag ? [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, Math.SQRT2], [1, -1, Math.SQRT2], [-1, 1, Math.SQRT2], [-1, -1, Math.SQRT2]] : [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1]];
  while (open.size > 0) {
    let cur = -1, best = Infinity;
    for (const n2 of open) {
      const f = (gcost.get(n2) ?? Infinity) + hx(n2);
      if (f < best) {
        best = f;
        cur = n2;
      }
    }
    if (cur === goal_n)
      break;
    open.delete(cur);
    const ch = cur % W, cv = (cur - ch) / W;
    for (const [dh, dv, cost] of neigh) {
      const nh = ch + dh, nv = cv + dv;
      if (nh < 0 || nv < 0 || nh >= W || nv >= H)
        continue;
      if (g.cells[_idx(g, nh, nv)])
        continue;
      const nn = node(nh, nv);
      const tentative = (gcost.get(cur) ?? Infinity) + cost;
      if (tentative < (gcost.get(nn) ?? Infinity)) {
        came.set(nn, cur);
        gcost.set(nn, tentative);
        open.add(nn);
      }
    }
  }
  if (!came.has(goal_n) && start_n !== goal_n)
    return false;
  const cells = [];
  let n = goal_n;
  cells.push(n);
  while (n !== start_n) {
    const p = came.get(n);
    if (p === void 0)
      break;
    n = p;
    cells.push(n);
  }
  cells.reverse();
  path_clear_points(path_id);
  for (const c of cells) {
    const h = c % W, v = (c - h) / W;
    const ctr = _cell_center(g, h, v);
    path_add_point(path_id, ctr.x, ctr.y, 1);
  }
  return true;
}
__name(mp_grid_path, "mp_grid_path");
var _potential = { maxrot: 180, rotstep: 15 };
function mp_potential_settings(maxrot, rotstep, _ahead = 0, _onspot = true) {
  _potential.maxrot = Math.max(0, maxrot);
  _potential.rotstep = Math.max(1, rotstep);
}
__name(mp_potential_settings, "mp_potential_settings");
function _mp_potential_settings() {
  return _potential;
}
__name(_mp_potential_settings, "_mp_potential_settings");

// packages/engine/dist/math/random.js
var _seed = 0;
function _mulberry32() {
  _seed |= 0;
  _seed = _seed + 1831565813 | 0;
  let t = Math.imul(_seed ^ _seed >>> 15, 1 | _seed);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
__name(_mulberry32, "_mulberry32");
function random_set_seed(seed) {
  _seed = seed >>> 0;
}
__name(random_set_seed, "random_set_seed");
function random_get_seed() {
  return _seed >>> 0;
}
__name(random_get_seed, "random_get_seed");
function randomize() {
  _seed = (Date.now() ^ Math.random() * 4294967295) >>> 0;
}
__name(randomize, "randomize");
function random(n) {
  return _mulberry32() * n;
}
__name(random, "random");
function irandom(n) {
  return Math.floor(_mulberry32() * (n + 1));
}
__name(irandom, "irandom");
function random_range(lo, hi) {
  return lo + _mulberry32() * (hi - lo);
}
__name(random_range, "random_range");
function irandom_range(lo, hi) {
  return Math.floor(lo + _mulberry32() * (hi - lo + 1));
}
__name(irandom_range, "irandom_range");
function choose(...values) {
  if (values.length === 0)
    return void 0;
  return values[Math.floor(_mulberry32() * values.length)];
}
__name(choose, "choose");
function array_shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(_mulberry32() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}
__name(array_shuffle, "array_shuffle");
function array_random(arr) {
  if (arr.length === 0)
    return void 0;
  return arr[Math.floor(_mulberry32() * arr.length)];
}
__name(array_random, "array_random");
function random_native() {
  return Math.random();
}
__name(random_native, "random_native");

// packages/engine/dist/physics/physics_body.js
var import_matter_js2 = __toESM(require_matter(), 1);
var FIXTURE_SHAPE_RECT = 0;
var FIXTURE_SHAPE_CIRCLE = 1;
var FIXTURE_SHAPE_POLYGON = 2;
var _fixtures = /* @__PURE__ */ new Map();
var _next_fixture_id = 1;
function _make_default_fixture() {
  return {
    shape: FIXTURE_SHAPE_RECT,
    w: 16,
    h: 16,
    verts: [],
    density: 1e-3,
    restitution: 0,
    friction: 0.1,
    is_sensor: false
  };
}
__name(_make_default_fixture, "_make_default_fixture");
var _bodies = /* @__PURE__ */ new Map();
var _next_body_id = 1;
function physics_fixture_create() {
  const id = _next_fixture_id++;
  _fixtures.set(id, _make_default_fixture());
  return id;
}
__name(physics_fixture_create, "physics_fixture_create");
function physics_fixture_set_box(fixture_id, w, h) {
  const f = _fixtures.get(fixture_id);
  if (!f)
    return;
  f.shape = FIXTURE_SHAPE_RECT;
  f.w = w;
  f.h = h;
}
__name(physics_fixture_set_box, "physics_fixture_set_box");
function physics_fixture_set_circle(fixture_id, radius) {
  const f = _fixtures.get(fixture_id);
  if (!f)
    return;
  f.shape = FIXTURE_SHAPE_CIRCLE;
  f.w = radius;
}
__name(physics_fixture_set_circle, "physics_fixture_set_circle");
function physics_fixture_set_polygon(fixture_id, verts) {
  const f = _fixtures.get(fixture_id);
  if (!f)
    return;
  f.shape = FIXTURE_SHAPE_POLYGON;
  f.verts = verts.map((v) => ({ x: v.x, y: v.y }));
}
__name(physics_fixture_set_polygon, "physics_fixture_set_polygon");
function physics_fixture_set_density(fixture_id, density) {
  const f = _fixtures.get(fixture_id);
  if (f)
    f.density = density;
}
__name(physics_fixture_set_density, "physics_fixture_set_density");
function physics_fixture_set_restitution(fixture_id, restitution) {
  const f = _fixtures.get(fixture_id);
  if (f)
    f.restitution = Math.max(0, Math.min(1, restitution));
}
__name(physics_fixture_set_restitution, "physics_fixture_set_restitution");
function physics_fixture_set_friction(fixture_id, friction) {
  const f = _fixtures.get(fixture_id);
  if (f)
    f.friction = Math.max(0, friction);
}
__name(physics_fixture_set_friction, "physics_fixture_set_friction");
function physics_fixture_set_sensor(fixture_id, is_sensor) {
  const f = _fixtures.get(fixture_id);
  if (f)
    f.is_sensor = is_sensor;
}
__name(physics_fixture_set_sensor, "physics_fixture_set_sensor");
function physics_fixture_bind(fixture_id, x, y, is_static = false) {
  const world = _get_world();
  if (!world)
    return -1;
  const f = _fixtures.get(fixture_id);
  if (!f)
    return -1;
  let body;
  switch (f.shape) {
    case FIXTURE_SHAPE_CIRCLE:
      body = import_matter_js2.default.Bodies.circle(x, y, f.w, {
        density: f.density,
        restitution: f.restitution,
        friction: f.friction,
        isStatic: is_static,
        isSensor: f.is_sensor
      });
      break;
    case FIXTURE_SHAPE_POLYGON:
      body = import_matter_js2.default.Bodies.fromVertices(x, y, [f.verts], {
        density: f.density,
        restitution: f.restitution,
        friction: f.friction,
        isStatic: is_static,
        isSensor: f.is_sensor
      });
      break;
    default:
      body = import_matter_js2.default.Bodies.rectangle(x, y, f.w, f.h, {
        density: f.density,
        restitution: f.restitution,
        friction: f.friction,
        isStatic: is_static,
        isSensor: f.is_sensor
      });
  }
  import_matter_js2.default.World.add(world, body);
  const id = _next_body_id++;
  _bodies.set(id, body);
  body._sw_id = id;
  return id;
}
__name(physics_fixture_bind, "physics_fixture_bind");
function physics_fixture_delete(fixture_id) {
  _fixtures.delete(fixture_id);
}
__name(physics_fixture_delete, "physics_fixture_delete");
function physics_body_destroy(body_id) {
  const world = _get_world();
  const body = _bodies.get(body_id);
  if (!body)
    return;
  if (world)
    import_matter_js2.default.World.remove(world, body);
  _bodies.delete(body_id);
}
__name(physics_body_destroy, "physics_body_destroy");
function physics_body_apply_force(body_id, fx, fy) {
  const body = _bodies.get(body_id);
  if (!body)
    return;
  import_matter_js2.default.Body.applyForce(body, body.position, { x: fx, y: fy });
}
__name(physics_body_apply_force, "physics_body_apply_force");
function physics_body_apply_impulse(body_id, ix, iy) {
  const body = _bodies.get(body_id);
  if (!body)
    return;
  const inv_mass = body.mass > 0 ? 1 / body.mass : 0;
  import_matter_js2.default.Body.setVelocity(body, {
    x: body.velocity.x + ix * inv_mass,
    y: body.velocity.y + iy * inv_mass
  });
}
__name(physics_body_apply_impulse, "physics_body_apply_impulse");
function physics_body_apply_force_at(body_id, px, py, fx, fy) {
  const body = _bodies.get(body_id);
  if (body)
    import_matter_js2.default.Body.applyForce(body, { x: px, y: py }, { x: fx, y: fy });
}
__name(physics_body_apply_force_at, "physics_body_apply_force_at");
function physics_body_apply_torque(body_id, torque) {
  const body = _bodies.get(body_id);
  if (body)
    body.torque += torque;
}
__name(physics_body_apply_torque, "physics_body_apply_torque");
function physics_body_set_velocity(body_id, vx, vy) {
  const body = _bodies.get(body_id);
  if (!body)
    return;
  import_matter_js2.default.Body.setVelocity(body, { x: vx, y: vy });
}
__name(physics_body_set_velocity, "physics_body_set_velocity");
function physics_body_set_position(body_id, x, y) {
  const body = _bodies.get(body_id);
  if (!body)
    return;
  import_matter_js2.default.Body.setPosition(body, { x, y });
}
__name(physics_body_set_position, "physics_body_set_position");
function physics_body_set_angular_velocity(body_id, omega) {
  const body = _bodies.get(body_id);
  if (!body)
    return;
  import_matter_js2.default.Body.setAngularVelocity(body, omega);
}
__name(physics_body_set_angular_velocity, "physics_body_set_angular_velocity");
function physics_body_set_angle(body_id, angle_rad) {
  const body = _bodies.get(body_id);
  if (!body)
    return;
  import_matter_js2.default.Body.setAngle(body, angle_rad);
}
__name(physics_body_set_angle, "physics_body_set_angle");
function physics_body_get_x(body_id) {
  return _bodies.get(body_id)?.position.x ?? 0;
}
__name(physics_body_get_x, "physics_body_get_x");
function physics_body_get_y(body_id) {
  return _bodies.get(body_id)?.position.y ?? 0;
}
__name(physics_body_get_y, "physics_body_get_y");
function physics_body_get_angle(body_id) {
  const body = _bodies.get(body_id);
  if (!body)
    return 0;
  return body.angle * 180 / Math.PI;
}
__name(physics_body_get_angle, "physics_body_get_angle");
function physics_body_get_vx(body_id) {
  return _bodies.get(body_id)?.velocity.x ?? 0;
}
__name(physics_body_get_vx, "physics_body_get_vx");
function physics_body_get_vy(body_id) {
  return _bodies.get(body_id)?.velocity.y ?? 0;
}
__name(physics_body_get_vy, "physics_body_get_vy");
function physics_body_get_angular_velocity(body_id) {
  return _bodies.get(body_id)?.angularVelocity ?? 0;
}
__name(physics_body_get_angular_velocity, "physics_body_get_angular_velocity");
function physics_body_set_static(body_id, is_static) {
  const body = _bodies.get(body_id);
  if (!body)
    return;
  import_matter_js2.default.Body.setStatic(body, is_static);
}
__name(physics_body_set_static, "physics_body_set_static");
function physics_body_exists(body_id) {
  return _bodies.has(body_id);
}
__name(physics_body_exists, "physics_body_exists");
function physics_body_get_raw(body_id) {
  return _bodies.get(body_id);
}
__name(physics_body_get_raw, "physics_body_get_raw");

// packages/engine/dist/core/instance.js
var ALARM_COUNT = 12;
var _renderer_draw_sprite_ext = null;
function set_draw_sprite_ext(fn) {
  _renderer_draw_sprite_ext = fn;
}
__name(set_draw_sprite_ext, "set_draw_sprite_ext");
function object_match(inst, obj) {
  const ctor = inst.constructor;
  if (inst instanceof obj)
    return true;
  const is_ancestor_of = obj.is_ancestor_of;
  return typeof is_ancestor_of === "function" && is_ancestor_of.call(obj, ctor);
}
__name(object_match, "object_match");
var instance = class _instance extends resource {
  static {
    __name(this, "instance");
  }
  /**
   * Creates a new instance in the specified room.
   * @param room - The room this instance will belong to
   */
  constructor(room2) {
    super();
    this.x = 0;
    this.y = 0;
    this.xprevious = 0;
    this.yprevious = 0;
    this.xstart = 0;
    this.ystart = 0;
    this.hspeed = 0;
    this.vspeed = 0;
    this.speed = 0;
    this.direction = 0;
    this.friction = 0;
    this.gravity = 0;
    this.gravity_direction = 270;
    this.sprite_index = -1;
    this.image_index = 0;
    this.image_speed = 1;
    this.image_xscale = 1;
    this.image_yscale = 1;
    this.image_angle = 0;
    this.image_alpha = 1;
    this.image_blend = 16777215;
    this.depth = 0;
    this.visible = true;
    this.mask_index = -1;
    this.solid = false;
    this.persistent = false;
    this.active = true;
    this.alarm = new Array(ALARM_COUNT).fill(-1);
    this._destroyed = false;
    this.bbox_left = 0;
    this.bbox_top = 0;
    this.bbox_right = 0;
    this.bbox_bottom = 0;
    this.mask_manual = false;
    this.mask_off_left = 0;
    this.mask_off_top = 0;
    this.mask_off_right = 0;
    this.mask_off_bottom = 0;
    this.phy_body_id = -1;
    this._phy_wants = false;
    this._phy_shape = "box";
    this._phy_density = 0.5;
    this._phy_restitution = 0.1;
    this._phy_friction = 0.2;
    this._phy_sensor = false;
    this._phy_off_x = 0;
    this._phy_off_y = 0;
    this._mp_dir = NaN;
    this.path_index = -1;
    this.path_position = 0;
    this.path_positionprevious = 0;
    this.path_speed = 0;
    this.path_scale = 1;
    this.path_orientation = 0;
    this.path_endaction = 0;
    this._path_off_x = 0;
    this._path_off_y = 0;
    this._bound_step_begin = () => {
    };
    this._bound_step = () => {
    };
    this._bound_step_end = () => {
    };
    this._bound_draw_gui = () => {
    };
    this.room = room2;
    this._bound_step_begin = this.on_step_begin.bind(this);
    this._bound_step = this.internal_step.bind(this);
    this._bound_step_end = this.on_step_end.bind(this);
    this._bound_draw_gui = this.on_draw_gui.bind(this);
  }
  // =========================================================================
  // Lifecycle
  // =========================================================================
  /**
   * Creates a new instance of an object at the specified position.
   * @param x - X position for the new instance
   * @param y - Y position for the new instance
   * @param obj - The object class to instantiate
   * @returns The newly created instance
   */
  static instance_create(x, y, obj) {
    const currentRoom = game_loop.room;
    const inst = new obj(currentRoom);
    inst.x = x;
    inst.y = y;
    inst.xstart = x;
    inst.ystart = y;
    inst.xprevious = x;
    inst.yprevious = y;
    currentRoom.instance_add(inst);
    inst.register_events();
    game_loop.register(EVENT_TYPE.create, inst.on_create.bind(inst));
    return inst;
  }
  /**
   * Creates a new instance at the specified position with an explicit depth.
   * @param x - X position
   * @param y - Y position
   * @param depth - Drawing depth
   * @param obj - The object class to instantiate
   * @returns The newly created instance
   */
  static instance_create_depth(x, y, depth, obj) {
    const inst = _instance.instance_create(x, y, obj);
    inst.depth = depth;
    return inst;
  }
  /**
   * Releases this instance's external resources (physics body) without firing a Destroy
   * event — used when a room is silently rebuilt (e.g. re-entering a non-persistent room).
   */
  dispose_for_rebuild() {
    if (this.phy_body_id >= 0) {
      physics_body_destroy(this.phy_body_id);
      this.phy_body_id = -1;
    }
  }
  /**
   * Destroys this instance, removing it from the room.
   * Queues the destroy event to run at the end of the current step.
   */
  instance_destroy() {
    if (this._destroyed)
      return;
    this._destroyed = true;
    if (this.phy_body_id >= 0) {
      physics_body_destroy(this.phy_body_id);
      this.phy_body_id = -1;
    }
    game_loop.register(EVENT_TYPE.destroy, this.on_destroy.bind(this));
    this.unregister_events();
    this.room.instance_remove(this.id);
    resource.removeByID(this.id);
  }
  /**
   * Destroys an instance by its numeric ID.
   * @param id - ID of the instance to destroy
   */
  static instance_destroy_id(id) {
    const inst = _instance.instance_find(id);
    if (inst)
      inst.instance_destroy();
  }
  /**
   * Registers this instance's event handlers with the game loop.
   */
  register_events() {
    game_loop.register(EVENT_TYPE.step_begin, this._bound_step_begin);
    game_loop.register(EVENT_TYPE.step, this._bound_step);
    game_loop.register(EVENT_TYPE.step_end, this._bound_step_end);
    game_loop.register(EVENT_TYPE.draw_gui, this._bound_draw_gui);
  }
  /**
   * Unregisters this instance's event handlers from the game loop.
   */
  unregister_events() {
    game_loop.unregister(EVENT_TYPE.step_begin, this._bound_step_begin);
    game_loop.unregister(EVENT_TYPE.step, this._bound_step);
    game_loop.unregister(EVENT_TYPE.step_end, this._bound_step_end);
    game_loop.unregister(EVENT_TYPE.draw_gui, this._bound_draw_gui);
  }
  /**
   * Internal step: alarms, input events, physics, animation, bbox, collision
   * events, then on_step(). Bails out early if an event destroys the instance.
   */
  internal_step() {
    if (!this.active || this._destroyed)
      return;
    this.xprevious = this.x;
    this.yprevious = this.y;
    this._process_alarms();
    if (this._destroyed)
      return;
    this._process_input_events();
    if (this._destroyed)
      return;
    if (this.gravity !== 0) {
      const grav_rad = this.gravity_direction * (Math.PI / 180);
      this.hspeed += Math.cos(grav_rad) * this.gravity;
      this.vspeed -= Math.sin(grav_rad) * this.gravity;
    }
    if (this.friction !== 0 && (this.hspeed !== 0 || this.vspeed !== 0)) {
      const currentSpeed = Math.sqrt(this.hspeed * this.hspeed + this.vspeed * this.vspeed);
      const newSpeed = Math.max(0, currentSpeed - this.friction);
      if (currentSpeed > 0) {
        const ratio = newSpeed / currentSpeed;
        this.hspeed *= ratio;
        this.vspeed *= ratio;
      }
    }
    this.speed = Math.sqrt(this.hspeed * this.hspeed + this.vspeed * this.vspeed);
    if (this.hspeed !== 0 || this.vspeed !== 0) {
      this.direction = Math.atan2(-this.vspeed, this.hspeed) * (180 / Math.PI);
      if (this.direction < 0)
        this.direction += 360;
    }
    this.x += this.hspeed;
    this.y += this.vspeed;
    if (this.path_index >= 0) {
      this._advance_path();
      if (this._destroyed)
        return;
    }
    this._advance_animation();
    update_bbox(this);
    this._process_collisions();
    if (this._destroyed)
      return;
    this._process_boundary_events();
    if (this._destroyed)
      return;
    this.on_step();
  }
  /** Decrements active alarms; fires on_alarm(i) when one reaches zero. */
  _process_alarms() {
    for (let i = 0; i < ALARM_COUNT; i++) {
      const a = this.alarm[i] ?? -1;
      if (a > 0) {
        const next = a - 1;
        this.alarm[i] = next;
        if (next === 0) {
          this.alarm[i] = -1;
          this.on_alarm(i);
        }
        if (this._destroyed)
          return;
      }
    }
  }
  /** Fires keyboard and mouse-over-instance events for this step. */
  _process_input_events() {
    if (keyboard_check_pressed(vk_anykey)) {
      this.on_key_press();
      if (this._destroyed)
        return;
    }
    if (keyboard_check_released(vk_anykey)) {
      this.on_key_release();
      if (this._destroyed)
        return;
    }
    if (keyboard_check(vk_anykey)) {
      this.on_key_held();
      if (this._destroyed)
        return;
    }
    const mx = window_mouse_get_x();
    const my = window_mouse_get_y();
    if (point_in_instance(mx, my, this)) {
      if (mouse_check_button_pressed(mb_left)) {
        this.on_mouse_left_press();
        if (this._destroyed)
          return;
      }
      if (mouse_check_button_released(mb_left)) {
        this.on_mouse_left_release();
        if (this._destroyed)
          return;
      }
      if (mouse_check_button_pressed(mb_right)) {
        this.on_mouse_right_press();
      }
    }
  }
  /** Advances the sprite animation, firing on_animation_end() on each loop. */
  _advance_animation() {
    if (this.image_speed === 0 || this.sprite_index < 0)
      return;
    const spr = resource.findByID(this.sprite_index);
    const frame_count = spr && "frames" in spr ? spr.frames.length : 1;
    if (frame_count <= 0)
      return;
    const prev = this.image_index;
    this.image_index = (this.image_index + this.image_speed) % frame_count;
    if (this.image_index < 0)
      this.image_index += frame_count;
    const looped = this.image_speed > 0 ? this.image_index < prev : this.image_index > prev;
    if (looped)
      this.on_animation_end();
  }
  /** Fires on_collision(other) for each instance this one overlaps (collision-event objects only). */
  _process_collisions() {
    if (this.on_collision === _instance.prototype.on_collision)
      return;
    for (const other of this.room.instance_get_all()) {
      if (other === this || !other.active)
        continue;
      if (instances_collide(this, this.x, this.y, other)) {
        this.on_collision(other);
        if (this._destroyed)
          return;
      }
    }
  }
  /**
   * Internal draw: skips hidden instances, then calls on_draw().
   * If on_draw() has not been overridden, draws the current sprite automatically.
   */
  /**
   * Runs the main Draw event (skips hidden/inactive instances).
   * Called by the game loop in depth order — not registered as an event.
   */
  run_draw() {
    if (!this.visible || !this.active)
      return;
    this.on_draw();
  }
  /** Runs the Draw Begin event (skips hidden/inactive instances). */
  run_draw_begin() {
    if (!this.visible || !this.active)
      return;
    this.on_draw_begin();
  }
  /** Runs the Draw End event (skips hidden/inactive instances). */
  run_draw_end() {
    if (!this.visible || !this.active)
      return;
    this.on_draw_end();
  }
  // =========================================================================
  // Instance queries (static)
  // =========================================================================
  /**
   * Checks if an instance with the given ID exists.
   * @param id - The instance ID to check
   * @returns True if the instance exists
   */
  static instance_exists(id) {
    const res = resource.findByID(id);
    if (res === void 0)
      return false;
    return res instanceof _instance;
  }
  /**
   * Finds an instance by its ID.
   * @param id - The instance ID to find
   * @returns The instance, or undefined if not found
   */
  static instance_find(id) {
    const res = resource.findByID(id);
    if (res instanceof _instance)
      return res;
    return void 0;
  }
  /**
   * Returns the number of active instances of a given object class in the current room.
   * @param obj - Object class to count
   * @returns Instance count
   */
  static instance_number(obj) {
    const rm = game_loop.room;
    if (!rm)
      return 0;
    let count = 0;
    for (const inst of rm.instance_get_all()) {
      if (object_match(inst, obj) && inst.active)
        count++;
    }
    return count;
  }
  /**
   * Finds the nth instance of a given object class in the current room (0-indexed).
   * @param obj - Object class to search for
   * @param n - Zero-based index
   * @returns The instance, or undefined if not found
   */
  static instance_find_nth(obj, n) {
    const rm = game_loop.room;
    if (!rm)
      return void 0;
    let i = 0;
    for (const inst of rm.instance_get_all()) {
      if (object_match(inst, obj) && inst.active) {
        if (i === n)
          return inst;
        i++;
      }
    }
    return void 0;
  }
  /**
   * Finds the first instance of a given object class at a specific position.
   * @param x - X position to test
   * @param y - Y position to test
   * @param obj - Object class to check
   * @returns The instance at that position, or undefined
   */
  static instance_position(x, y, obj) {
    const rm = game_loop.room;
    if (!rm)
      return void 0;
    for (const inst of rm.instance_get_all()) {
      if (object_match(inst, obj) && inst.active && point_in_instance(x, y, inst)) {
        return inst;
      }
    }
    return void 0;
  }
  /**
   * Returns the nearest instance of obj to a given point.
   * @param x - Reference X
   * @param y - Reference Y
   * @param obj - Object class to search
   * @returns Nearest instance, or undefined if none exist
   */
  static instance_nearest(x, y, obj) {
    const rm = game_loop.room;
    if (!rm)
      return void 0;
    let nearest;
    let min_dist = Infinity;
    for (const inst of rm.instance_get_all()) {
      if (object_match(inst, obj) && inst.active) {
        const dx = inst.x - x;
        const dy = inst.y - y;
        const d = dx * dx + dy * dy;
        if (d < min_dist) {
          min_dist = d;
          nearest = inst;
        }
      }
    }
    return nearest;
  }
  /**
   * Returns the furthest instance of obj from a given point.
   * @param x - Reference X
   * @param y - Reference Y
   * @param obj - Object class to search
   * @returns Furthest instance, or undefined if none exist
   */
  static instance_furthest(x, y, obj) {
    const rm = game_loop.room;
    if (!rm)
      return void 0;
    let furthest;
    let max_dist = -1;
    for (const inst of rm.instance_get_all()) {
      if (object_match(inst, obj) && inst.active) {
        const dx = inst.x - x;
        const dy = inst.y - y;
        const d = dx * dx + dy * dy;
        if (d > max_dist) {
          max_dist = d;
          furthest = inst;
        }
      }
    }
    return furthest;
  }
  /**
   * Deactivates all instances (optionally excluding self).
   * Deactivated instances are skipped in step and draw.
   * @param not_me - If true, this instance is excluded from deactivation
   */
  instance_deactivate_all(not_me = false) {
    const rm = game_loop.room;
    if (!rm)
      return;
    for (const inst of rm.instance_get_all()) {
      if (not_me && inst === this)
        continue;
      inst.active = false;
    }
  }
  /**
   * Deactivates all instances of a specific object class.
   * @param obj - Object class to deactivate
   */
  static instance_deactivate_object(obj) {
    const rm = game_loop.room;
    if (!rm)
      return;
    for (const inst of rm.instance_get_all()) {
      if (object_match(inst, obj))
        inst.active = false;
    }
  }
  /**
   * Activates all instances in the current room.
   */
  static instance_activate_all() {
    const rm = game_loop.room;
    if (!rm)
      return;
    for (const inst of rm.instance_get_all()) {
      inst.active = true;
    }
  }
  /**
   * Activates all instances of a specific object class.
   * @param obj - Object class to activate
   */
  static instance_activate_object(obj) {
    const rm = game_loop.room;
    if (!rm)
      return;
    for (const inst of rm.instance_get_all()) {
      if (object_match(inst, obj))
        inst.active = true;
    }
  }
  /**
   * True if the instance's bounding box overlaps the given region.
   * @param inst - Instance to test
   * @param l - Region left
   * @param t - Region top
   * @param r - Region right
   * @param b - Region bottom
   */
  static _bbox_in_region(inst, l, t, r, b) {
    update_bbox(inst);
    return inst.bbox_right >= l && inst.bbox_left <= r && inst.bbox_bottom >= t && inst.bbox_top <= b;
  }
  /**
   * Deactivates instances within (or outside) a rectangular region.
   * @param left - Region left
   * @param top - Region top
   * @param width - Region width
   * @param height - Region height
   * @param inside - Deactivate instances overlapping the region (true) or those not overlapping it (false)
   * @param not_me - If true, this instance is excluded
   */
  instance_deactivate_region(left, top, width, height, inside = true, not_me = false) {
    const rm = game_loop.room;
    if (!rm)
      return;
    const r = left + width, b = top + height;
    for (const inst of rm.instance_get_all()) {
      if (not_me && inst === this)
        continue;
      if (_instance._bbox_in_region(inst, left, top, r, b) === inside)
        inst.active = false;
    }
  }
  /**
   * Activates instances within (or outside) a rectangular region.
   * @param left - Region left
   * @param top - Region top
   * @param width - Region width
   * @param height - Region height
   * @param inside - Activate instances overlapping the region (true) or those not overlapping it (false)
   */
  static instance_activate_region(left, top, width, height, inside = true) {
    const rm = game_loop.room;
    if (!rm)
      return;
    const r = left + width, b = top + height;
    for (const inst of rm.instance_get_all()) {
      if (_instance._bbox_in_region(inst, left, top, r, b) === inside)
        inst.active = true;
    }
  }
  // =========================================================================
  // Collision methods (instance-level)
  // =========================================================================
  /**
   * Checks if this instance would collide with any instance of obj at position (x, y).
   * Does not move the instance.
   * @param x - X position to test
   * @param y - Y position to test
   * @param obj - Object class to check against
   * @returns True if a collision would occur
   */
  place_meeting(x, y, obj) {
    const rm = game_loop.room;
    if (!rm)
      return false;
    for (const other of rm.instance_get_all()) {
      if (other === this)
        continue;
      if (!object_match(other, obj))
        continue;
      if (!other.active)
        continue;
      if (instances_collide(this, x, y, other))
        return true;
    }
    return false;
  }
  /**
   * Checks if position (x, y) is free of solid instances.
   * @param x - X position to test
   * @param y - Y position to test
   * @returns True if no solid instances occupy that position
   */
  place_free(x, y) {
    const rm = game_loop.room;
    if (!rm)
      return true;
    for (const other of rm.instance_get_all()) {
      if (other === this)
        continue;
      if (!other.solid || !other.active)
        continue;
      if (instances_collide(this, x, y, other))
        return false;
    }
    return true;
  }
  /**
   * Checks if position (x, y) is completely empty (no instances of any kind).
   * @param x - X position to test
   * @param y - Y position to test
   * @returns True if no instances occupy that position
   */
  place_empty(x, y) {
    const rm = game_loop.room;
    if (!rm)
      return true;
    for (const other of rm.instance_get_all()) {
      if (other === this)
        continue;
      if (!other.active)
        continue;
      if (instances_collide(this, x, y, other))
        return false;
    }
    return true;
  }
  /**
   * Like place_meeting, but returns the first instance collided with at (x, y),
   * or undefined if none.
   * @param x - X position to test
   * @param y - Y position to test
   * @param obj - Object class to check against (pass the base `instance` for "all")
   */
  instance_place(x, y, obj) {
    const rm = game_loop.room;
    if (!rm)
      return void 0;
    for (const other of rm.instance_get_all()) {
      if (other === this || !other.active)
        continue;
      if (!object_match(other, obj))
        continue;
      if (instances_collide(this, x, y, other))
        return other;
    }
    return void 0;
  }
  // =========================================================================
  // Collision mask (manual)
  // =========================================================================
  /**
   * Sets a manual rectangular collision mask, as offsets from the instance
   * origin (x, y). Use this for spriteless objects so collision functions work.
   * @param left - Left offset from x
   * @param top - Top offset from y
   * @param right - Right offset from x
   * @param bottom - Bottom offset from y
   */
  mask_set_rectangle(left, top, right, bottom) {
    this.mask_manual = true;
    this.mask_off_left = left;
    this.mask_off_top = top;
    this.mask_off_right = right;
    this.mask_off_bottom = bottom;
    update_bbox(this);
  }
  /**
   * Convenience: sets a manual width×height mask with its top-left at the origin.
   * @param width - Mask width
   * @param height - Mask height
   */
  mask_set_size(width, height) {
    this.mask_set_rectangle(0, 0, width, height);
  }
  /** Removes the manual mask, reverting to the sprite/mask_index-derived bbox. */
  mask_clear() {
    this.mask_manual = false;
    update_bbox(this);
  }
  // =========================================================================
  // Physics (matter.js body binding)
  // =========================================================================
  /**
   * Marks this instance as physics-enabled (called from `gm_object` when the object
   * declares `static physics = true`). The matter.js body is created lazily on the
   * first physics step, so x/y and any collision mask are already in place. A density
   * of ≤ 0 makes the body static (immovable) — e.g. for floors and walls.
   * @param shape - 'box' or 'circle'
   * @param density - Mass density; ≤ 0 ⇒ static body
   * @param restitution - Bounciness, 0–1
   * @param friction - Surface friction
   * @param sensor - True = detects overlaps without a physical response
   */
  phy_request(shape, density, restitution, friction, sensor) {
    this._phy_wants = true;
    this._phy_shape = shape;
    this._phy_density = density;
    this._phy_restitution = restitution;
    this._phy_friction = friction;
    this._phy_sensor = sensor;
  }
  /**
   * Creates the matter.js body if this instance wants physics, has none yet, and a
   * physics world exists. Called by the game loop each step (a no-op once bound).
   */
  phy_ensure_body() {
    if (!this._phy_wants || this.phy_body_id >= 0)
      return;
    if (!physics_world_get_engine())
      return;
    update_bbox(this);
    const { w, h } = this._phy_extent();
    const { ox, oy } = this._phy_origin_offset();
    this._phy_off_x = ox;
    this._phy_off_y = oy;
    const fix = physics_fixture_create();
    if (this._phy_shape === "circle")
      physics_fixture_set_circle(fix, Math.max(w, h) / 2);
    else
      physics_fixture_set_box(fix, w, h);
    physics_fixture_set_density(fix, Math.max(0, this._phy_density));
    physics_fixture_set_restitution(fix, this._phy_restitution);
    physics_fixture_set_friction(fix, this._phy_friction);
    physics_fixture_set_sensor(fix, this._phy_sensor);
    const rad = -this.image_angle * Math.PI / 180;
    const cos = Math.cos(rad), sin = Math.sin(rad);
    this.phy_body_id = physics_fixture_bind(fix, this.x + (cos * ox - sin * oy), this.y + (sin * ox + cos * oy), this._phy_density <= 0);
    if (this.image_angle !== 0)
      physics_body_set_angle(this.phy_body_id, rad);
    physics_fixture_delete(fix);
  }
  /** Syncs x/y/image_angle from the physics body. Called by the loop after stepping. */
  phy_sync_from_body() {
    if (this.phy_body_id < 0)
      return;
    const cx = physics_body_get_x(this.phy_body_id);
    const cy = physics_body_get_y(this.phy_body_id);
    const deg = physics_body_get_angle(this.phy_body_id);
    const rad = deg * Math.PI / 180;
    const cos = Math.cos(rad), sin = Math.sin(rad);
    this.x = cx - (cos * this._phy_off_x - sin * this._phy_off_y);
    this.y = cy - (sin * this._phy_off_x + cos * this._phy_off_y);
    this.image_angle = -deg;
  }
  /** The body's pixel extent: manual mask, else sprite bbox, else a 32×32 default. */
  _phy_extent() {
    if (this.mask_manual) {
      const w = (this.mask_off_right - this.mask_off_left) * Math.abs(this.image_xscale);
      const h = (this.mask_off_bottom - this.mask_off_top) * Math.abs(this.image_yscale);
      if (w > 0 && h > 0)
        return { w, h };
    }
    const bw = this.bbox_right - this.bbox_left;
    const bh = this.bbox_bottom - this.bbox_top;
    if (bw > 0 && bh > 0)
      return { w: bw, h: bh };
    return { w: 32, h: 32 };
  }
  /**
   * Offset from the instance origin (x,y) to the centre of the collision mask, in room pixels.
   * Zero when the origin already sits at the mask centre (e.g. a centred sprite origin). Manual
   * masks are stored as offsets from the origin; the sprite bbox is in world space, so subtract x/y.
   */
  _phy_origin_offset() {
    if (this.mask_manual) {
      return {
        ox: (this.mask_off_left + this.mask_off_right) / 2 * this.image_xscale,
        oy: (this.mask_off_top + this.mask_off_bottom) / 2 * this.image_yscale
      };
    }
    const bw = this.bbox_right - this.bbox_left;
    const bh = this.bbox_bottom - this.bbox_top;
    if (bw > 0 && bh > 0) {
      return {
        ox: (this.bbox_left + this.bbox_right) / 2 - this.x,
        oy: (this.bbox_top + this.bbox_bottom) / 2 - this.y
      };
    }
    return { ox: 0, oy: 0 };
  }
  /** Applies a continuous force at the body's centre (pixel-space units). */
  phy_apply_force(fx, fy) {
    if (this.phy_body_id >= 0)
      physics_body_apply_force(this.phy_body_id, fx, fy);
  }
  /** Applies an instantaneous impulse at the body's centre. */
  phy_apply_impulse(fx, fy) {
    if (this.phy_body_id >= 0)
      physics_body_apply_impulse(this.phy_body_id, fx, fy);
  }
  /** Teleports the instance so its origin lands at (x, y), moving the body centre to match. */
  phy_set_position(x, y) {
    if (this.phy_body_id >= 0) {
      const rad = physics_body_get_angle(this.phy_body_id) * Math.PI / 180;
      const cos = Math.cos(rad), sin = Math.sin(rad);
      physics_body_set_position(this.phy_body_id, x + (cos * this._phy_off_x - sin * this._phy_off_y), y + (sin * this._phy_off_x + cos * this._phy_off_y));
    }
    this.x = x;
    this.y = y;
  }
  /** Horizontal velocity of the physics body (pixels/step). */
  get phy_speed_x() {
    return this.phy_body_id >= 0 ? physics_body_get_vx(this.phy_body_id) : 0;
  }
  set phy_speed_x(v) {
    if (this.phy_body_id >= 0)
      physics_body_set_velocity(this.phy_body_id, v, physics_body_get_vy(this.phy_body_id));
  }
  /** Vertical velocity of the physics body (pixels/step). */
  get phy_speed_y() {
    return this.phy_body_id >= 0 ? physics_body_get_vy(this.phy_body_id) : 0;
  }
  set phy_speed_y(v) {
    if (this.phy_body_id >= 0)
      physics_body_set_velocity(this.phy_body_id, physics_body_get_vx(this.phy_body_id), v);
  }
  /**
   * Moves the instance by the given amount, stopping when it hits a solid.
   * @param hspd - Horizontal movement
   * @param vspd - Vertical movement
   * @returns True if the movement was blocked by a solid
   */
  move_contact_solid(hspd, vspd) {
    const target_x = this.x + hspd;
    const target_y = this.y + vspd;
    if (this.place_free(target_x, target_y)) {
      this.x = target_x;
      this.y = target_y;
      return false;
    }
    return true;
  }
  /**
   * Wraps the instance around the room edges.
   * @param hor - Wrap horizontally
   * @param vert - Wrap vertically
   * @param margin - Extra margin (pixels outside room edge before wrapping)
   */
  move_wrap(hor, vert, margin = 0) {
    const rm = game_loop.room;
    if (!rm)
      return;
    const bbox_w = this.bbox_right - this.bbox_left;
    const bbox_h = this.bbox_bottom - this.bbox_top;
    if (hor) {
      if (this.x + bbox_w < -margin)
        this.x = rm.room_width + margin;
      else if (this.x - bbox_w > rm.room_width + margin)
        this.x = -margin;
    }
    if (vert) {
      if (this.y + bbox_h < -margin)
        this.y = rm.room_height + margin;
      else if (this.y - bbox_h > rm.room_height + margin)
        this.y = -margin;
    }
  }
  /**
   * Returns the shortest distance from this instance to any instance of obj.
   * @param obj - Object class to measure distance to
   * @returns Distance in pixels, or Infinity if no instance found
   */
  distance_to_object(obj) {
    const rm = game_loop.room;
    if (!rm)
      return Infinity;
    let min_dist = Infinity;
    for (const inst of rm.instance_get_all()) {
      if (inst === this || !inst.active)
        continue;
      if (!object_match(inst, obj))
        continue;
      const dx = inst.x - this.x;
      const dy = inst.y - this.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < min_dist)
        min_dist = d;
    }
    return min_dist;
  }
  // =========================================================================
  // Movement
  // =========================================================================
  /**
   * Sets the instance's motion using speed and direction.
   * @param dir - Direction in degrees (0 = right, counter-clockwise)
   * @param spd - Speed in pixels per step
   */
  motion_set(dir, spd) {
    this.direction = dir;
    this.speed = spd;
    const rad = dir * (Math.PI / 180);
    this.hspeed = Math.cos(rad) * spd;
    this.vspeed = -Math.sin(rad) * spd;
  }
  /**
   * Adds motion to the instance's current movement.
   * @param dir - Direction in degrees
   * @param spd - Speed to add
   */
  motion_add(dir, spd) {
    const rad = dir * (Math.PI / 180);
    this.hspeed += Math.cos(rad) * spd;
    this.vspeed += -Math.sin(rad) * spd;
    this.speed = Math.sqrt(this.hspeed * this.hspeed + this.vspeed * this.vspeed);
    if (this.hspeed !== 0 || this.vspeed !== 0) {
      this.direction = Math.atan2(-this.vspeed, this.hspeed) * (180 / Math.PI);
      if (this.direction < 0)
        this.direction += 360;
    }
  }
  /**
   * Moves the instance toward a point at the given speed.
   * @param x - Target X position
   * @param y - Target Y position
   * @param spd - Speed to move at
   */
  move_towards_point(x, y, spd) {
    const dir = Math.atan2(-(y - this.y), x - this.x) * (180 / Math.PI);
    this.motion_set(dir < 0 ? dir + 360 : dir, spd);
  }
  /**
   * Returns the distance from this instance's bounding box to a point.
   * Returns 0 if the point lies inside the bounding box.
   * @param x - Point X
   * @param y - Point Y
   */
  distance_to_point(x, y) {
    update_bbox(this);
    const dx = Math.max(this.bbox_left - x, 0, x - this.bbox_right);
    const dy = Math.max(this.bbox_top - y, 0, y - this.bbox_bottom);
    return Math.sqrt(dx * dx + dy * dy);
  }
  /**
   * Snaps the instance position to a grid.
   * @param hsnap - Horizontal grid size (ignored if ≤ 0)
   * @param vsnap - Vertical grid size (ignored if ≤ 0)
   */
  move_snap(hsnap, vsnap) {
    if (hsnap > 0)
      this.x = Math.round(this.x / hsnap) * hsnap;
    if (vsnap > 0)
      this.y = Math.round(this.y / vsnap) * vsnap;
  }
  /**
   * True if the instance position is aligned to the given grid.
   * @param hsnap - Horizontal grid size
   * @param vsnap - Vertical grid size
   */
  place_snapped(hsnap, vsnap) {
    const hok = hsnap <= 0 || this.x % hsnap === 0;
    const vok = vsnap <= 0 || this.y % vsnap === 0;
    return hok && vok;
  }
  /**
   * Moves the instance to a random, grid-snapped, collision-free position in
   * the room (tries a number of times before giving up).
   * @param hsnap - Horizontal grid size (use 1 for any pixel)
   * @param vsnap - Vertical grid size
   */
  move_random(hsnap, vsnap) {
    const rm = game_loop.room;
    if (!rm)
      return;
    const hs = hsnap > 0 ? hsnap : 1;
    const vs = vsnap > 0 ? vsnap : 1;
    const hcells = Math.max(1, Math.floor(rm.room_width / hs));
    const vcells = Math.max(1, Math.floor(rm.room_height / vs));
    for (let tries = 0; tries < 1e3; tries++) {
      const nx = irandom_range(0, hcells - 1) * hs;
      const ny = irandom_range(0, vcells - 1) * vs;
      if (this.place_free(nx, ny)) {
        this.x = nx;
        this.y = ny;
        return;
      }
    }
  }
  /**
   * Like move_contact_solid but treats all instances as obstacles.
   * @param hspd - Horizontal movement
   * @param vspd - Vertical movement
   * @returns True if the movement was blocked
   */
  move_contact_all(hspd, vspd) {
    const tx = this.x + hspd, ty = this.y + vspd;
    if (this.place_empty(tx, ty)) {
      this.x = tx;
      this.y = ty;
      return false;
    }
    return true;
  }
  /**
   * Steps the instance in the given direction until it is no longer colliding
   * with a solid (up to its bounding-box size in steps).
   * @param hspd - Horizontal step
   * @param vspd - Vertical step
   */
  move_outside_solid(hspd, vspd) {
    this._move_outside(hspd, vspd, false);
  }
  /** As move_outside_solid but treats all instances as obstacles. */
  move_outside_all(hspd, vspd) {
    this._move_outside(hspd, vspd, true);
  }
  /** Steps in (hspd,vspd) until the position is free (or a step cap is hit). */
  _move_outside(hspd, vspd, all) {
    const free = /* @__PURE__ */ __name((x, y) => all ? this.place_empty(x, y) : this.place_free(x, y), "free");
    const step = Math.hypot(hspd, vspd);
    if (step < 1e-9)
      return;
    const max_steps = 1e3;
    for (let i = 0; i < max_steps; i++) {
      if (free(this.x, this.y))
        return;
      this.x += hspd;
      this.y += vspd;
    }
  }
  /**
   * Bounces the instance off solid instances by reflecting its hspeed/vspeed.
   * @param advanced - Reserved for slanted-wall handling (currently axis-aligned reflection)
   */
  move_bounce_solid(advanced = false) {
    this._move_bounce(advanced, false);
  }
  /** As move_bounce_solid but bounces off all instances. */
  move_bounce_all(advanced = false) {
    this._move_bounce(advanced, true);
  }
  /** Axis-aligned bounce: flips the blocked velocity component(s). */
  _move_bounce(_advanced, all) {
    const free = /* @__PURE__ */ __name((x, y) => all ? this.place_empty(x, y) : this.place_free(x, y), "free");
    const nx = this.x + this.hspeed, ny = this.y + this.vspeed;
    if (free(nx, ny))
      return;
    const blocked_h = !free(this.x + this.hspeed, this.y);
    const blocked_v = !free(this.x, this.y + this.vspeed);
    if (blocked_h)
      this.hspeed = -this.hspeed;
    if (blocked_v)
      this.vspeed = -this.vspeed;
    if (!blocked_h && !blocked_v) {
      this.hspeed = -this.hspeed;
      this.vspeed = -this.vspeed;
    }
    this.speed = Math.hypot(this.hspeed, this.vspeed);
    if (this.hspeed !== 0 || this.vspeed !== 0) {
      this.direction = Math.atan2(-this.vspeed, this.hspeed) * (180 / Math.PI);
      if (this.direction < 0)
        this.direction += 360;
    }
  }
  // =========================================================================
  // Motion planning steppers (GMS mp_*_step)
  // =========================================================================
  /** True if (x,y) is clear: `checkall` ⇒ no instances at all, else no solids. */
  _mp_free(x, y, checkall) {
    return checkall ? this.place_empty(x, y) : this.place_free(x, y);
  }
  /**
   * Moves up to `stepsize` straight toward (x, y), stopping if the step is blocked.
   * @param checkall - True = treat all instances as obstacles; false = only solids
   * @returns True once the instance is at the target
   */
  mp_linear_step(x, y, stepsize, checkall) {
    const dx = x - this.x, dy = y - this.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 1e-6)
      return true;
    const step = Math.min(stepsize, dist);
    const nx = this.x + dx / dist * step;
    const ny = this.y + dy / dist * step;
    if (this._mp_free(nx, ny, checkall)) {
      this.x = nx;
      this.y = ny;
    }
    return Math.hypot(x - this.x, y - this.y) < 1e-6;
  }
  /** Like `mp_linear_step`, but only instances of `obj` block the move. */
  mp_linear_step_object(x, y, stepsize, obj) {
    const dx = x - this.x, dy = y - this.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 1e-6)
      return true;
    const step = Math.min(stepsize, dist);
    const nx = this.x + dx / dist * step;
    const ny = this.y + dy / dist * step;
    if (!this.place_meeting(nx, ny, obj)) {
      this.x = nx;
      this.y = ny;
    }
    return Math.hypot(x - this.x, y - this.y) < 1e-6;
  }
  /**
   * Steps `stepsize` toward (x, y) while steering around obstacles (potential field).
   * Sweeps outward from the direct heading (see `mp_potential_settings`) for a free step.
   * @returns True once near the target
   */
  mp_potential_step(x, y, stepsize, checkall) {
    return this._mp_potential(x, y, stepsize, (nx, ny) => this._mp_free(nx, ny, checkall));
  }
  /** Like `mp_potential_step`, but only instances of `obj` block the move. */
  mp_potential_step_object(x, y, stepsize, obj) {
    return this._mp_potential(x, y, stepsize, (nx, ny) => !this.place_meeting(nx, ny, obj));
  }
  _mp_potential(x, y, stepsize, is_free) {
    const dx = x - this.x, dy = y - this.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 1e-6)
      return true;
    const step = Math.min(stepsize, dist);
    const { maxrot, rotstep } = _mp_potential_settings();
    const rstep = rotstep * (Math.PI / 180);
    const max_rad = maxrot * (Math.PI / 180);
    const desired = Math.atan2(dy, dx);
    let dir = Number.isNaN(this._mp_dir) ? desired : this._mp_dir;
    const free_at = /* @__PURE__ */ __name((d) => is_free(this.x + Math.cos(d) * step, this.y + Math.sin(d) * step), "free_at");
    const want = this._approach_angle(dir, desired, rstep);
    if (free_at(want)) {
      dir = want;
    } else {
      let found = false;
      for (let a = rstep; a <= max_rad + 1e-6 && !found; a += rstep) {
        for (const sgn of [1, -1]) {
          if (free_at(dir + sgn * a)) {
            dir += sgn * a;
            found = true;
            break;
          }
        }
      }
      if (!found) {
        this._mp_dir = dir;
        return false;
      }
    }
    this._mp_dir = dir;
    this.x += Math.cos(dir) * step;
    this.y += Math.sin(dir) * step;
    this.direction = (-dir * 180 / Math.PI % 360 + 360) % 360;
    return Math.hypot(x - this.x, y - this.y) < stepsize;
  }
  /** Rotates `from` toward `to` by at most `max_step` radians, the short way. */
  _approach_angle(from, to, max_step) {
    let diff = to - from;
    while (diff > Math.PI)
      diff -= 2 * Math.PI;
    while (diff < -Math.PI)
      diff += 2 * Math.PI;
    if (Math.abs(diff) <= max_step)
      return to;
    return from + Math.sign(diff) * max_step;
  }
  // =========================================================================
  // Path following (GMS path_start / path_end + the Path End event)
  // =========================================================================
  /**
   * Makes this instance follow a path.
   * @param path_id - The path resource to follow
   * @param speed - Pixels per step along the path
   * @param endaction - `path_action_*` (stop / restart / continue / reverse)
   * @param absolute - True = the path's own coordinates; false = offset so it starts at the instance
   */
  path_start(path_id, speed, endaction = path_action_stop, absolute = true) {
    if (!path_exists(path_id))
      return;
    this.path_index = path_id;
    this.path_speed = speed;
    this.path_endaction = endaction;
    this.path_position = 0;
    this.path_positionprevious = 0;
    const sx = path_get_x(path_id, 0) * this.path_scale;
    const sy = path_get_y(path_id, 0) * this.path_scale;
    if (absolute) {
      this._path_off_x = 0;
      this._path_off_y = 0;
      this.x = sx;
      this.y = sy;
    } else {
      this._path_off_x = this.x - sx;
      this._path_off_y = this.y - sy;
    }
  }
  /** Stops following the current path (does not fire the Path End event). */
  path_end() {
    this.path_index = -1;
    this.path_speed = 0;
  }
  /** Advances along the current path by `path_speed`, applying the end action and firing on_path_end. */
  _advance_path() {
    const path = this.path_index;
    const len = path_get_length(path);
    if (len <= 0) {
      this.path_end();
      return;
    }
    this.path_positionprevious = this.path_position;
    this.path_position += this.path_speed / len;
    let ended = false;
    if (this.path_position >= 1) {
      ended = true;
      switch (this.path_endaction) {
        case path_action_restart:
          this.path_position = (this.path_position % 1 + 1) % 1;
          break;
        case path_action_continue:
          this.path_position = (this.path_position % 1 + 1) % 1;
          this._path_off_x = this.x - path_get_x(path, this.path_position) * this.path_scale;
          this._path_off_y = this.y - path_get_y(path, this.path_position) * this.path_scale;
          break;
        case path_action_reverse:
          this.path_speed = -Math.abs(this.path_speed);
          this.path_position = 1;
          break;
        default:
          this.path_position = 1;
      }
    } else if (this.path_position <= 0 && this.path_speed < 0) {
      ended = true;
      switch (this.path_endaction) {
        case path_action_restart:
          this.path_position = (this.path_position % 1 + 1) % 1;
          break;
        case path_action_reverse:
          this.path_speed = Math.abs(this.path_speed);
          this.path_position = 0;
          break;
        default:
          this.path_position = 0;
      }
    }
    const t = Math.max(0, Math.min(1, this.path_position));
    this.x = path_get_x(path, t) * this.path_scale + this._path_off_x;
    this.y = path_get_y(path, t) * this.path_scale + this._path_off_y;
    if (ended) {
      if (this.path_endaction === path_action_stop)
        this.path_end();
      this.on_path_end();
    }
  }
  /** Read-only: the number of sub-images (frames) of the current sprite (GMS `image_number`). */
  get image_number() {
    const s = resource.findByID(this.sprite_index);
    return s && Array.isArray(s.frames) ? s.frames.length : 0;
  }
  /**
   * Calculates the distance to a point.
   * @param x - Target X position
   * @param y - Target Y position
   * @returns Distance in pixels
   */
  point_distance(x, y) {
    const dx = x - this.x;
    const dy = y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  /**
   * Calculates the direction toward a point.
   * @param x - Target X position
   * @param y - Target Y position
   * @returns Direction in degrees (0 = right, counter-clockwise)
   */
  point_direction(x, y) {
    const dir = Math.atan2(-(y - this.y), x - this.x) * (180 / Math.PI);
    return dir < 0 ? dir + 360 : dir;
  }
  // =========================================================================
  // Drawing helpers
  // =========================================================================
  /**
   * Draws this instance's current sprite at its position with all image_ properties.
   * Call this from on_draw() or it will be called automatically if on_draw() is not overridden.
   */
  draw_self() {
    if (this.sprite_index < 0 || !_renderer_draw_sprite_ext)
      return;
    const spr = resource.findByID(this.sprite_index);
    if (!spr || !("frames" in spr))
      return;
    _renderer_draw_sprite_ext(spr, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
  }
  // =========================================================================
  // Events (Override in subclasses)
  // =========================================================================
  /** Called once when the instance is created. */
  on_create() {
  }
  /** Called once when the instance is destroyed. */
  on_destroy() {
  }
  /** Called at the start of each step. */
  on_step_begin() {
  }
  /** Called every step (main update logic). Override this in subclasses. */
  on_step() {
  }
  /** Called at the end of each step. */
  on_step_end() {
  }
  /**
   * Called every frame to draw the instance.
   * Default implementation calls draw_self() to draw sprite_index at (x, y).
   * Override to customize drawing behaviour.
   */
  on_draw() {
    this.draw_self();
  }
  /** Called before the main Draw event (world space). Override to draw underlays. */
  on_draw_begin() {
  }
  /** Called after the main Draw event (world space). Override to draw overlays. */
  on_draw_end() {
  }
  /** Called every frame to draw GUI elements (fixed to the screen, not the room). */
  on_draw_gui() {
  }
  // ── Alarm ────────────────────────────────────────────────────────────────
  /** Called when alarm[index] counts down to zero. */
  on_alarm(_index) {
  }
  // ── Keyboard (generic — check specific keys with keyboard_check* inside) ──
  /** Called the step any key is pressed. */
  on_key_press() {
  }
  /** Called the step any key is released. */
  on_key_release() {
  }
  /** Called every step any key is held down. */
  on_key_held() {
  }
  // ── Mouse (fired only while the pointer is over this instance) ────────────
  /** Called when the left mouse button is pressed over this instance. */
  on_mouse_left_press() {
  }
  /** Called when the left mouse button is released over this instance. */
  on_mouse_left_release() {
  }
  /** Called when the right mouse button is pressed over this instance. */
  on_mouse_right_press() {
  }
  // ── Collision ─────────────────────────────────────────────────────────────
  /** Called for each other instance this one overlaps this step. */
  on_collision(_other) {
  }
  // ── Room / Game lifecycle ────────────────────────────────────────────────
  /** Called when the room this instance is in starts. */
  on_room_start() {
  }
  /** Called when the room this instance is in ends (before leaving it). */
  on_room_end() {
  }
  /** Called once when the game starts, for instances present in the first room. */
  on_game_start() {
  }
  /** Called once when the game ends. */
  on_game_end() {
  }
  // ── Other ─────────────────────────────────────────────────────────────────
  /** Called when the sprite animation completes a loop. */
  on_animation_end() {
  }
  /** Called when path following ends. */
  on_path_end() {
  }
  /** Called each step while the instance's bbox is entirely outside the room. */
  on_outside_room() {
  }
  /** Called each step while the instance's bbox crosses a room edge. */
  on_intersect_boundary() {
  }
  /** A user-defined event (0–15), triggered by `event_user(index)`. */
  on_user(index) {
    void index;
  }
  /** Called once when `lives` transitions to ≤ 0. */
  on_no_more_lives() {
  }
  /** Called once when `health` transitions to ≤ 0. */
  on_no_more_health() {
  }
  /** Triggers this instance's user event `index` (0–15) → `on_user(index)`. */
  event_user(index) {
    if (index >= 0 && index <= 15)
      this.on_user(index);
  }
  /** Fires the Outside Room / Intersect Boundary events when the bbox leaves/crosses the room. */
  _process_boundary_events() {
    const rm = this.room;
    if (!rm)
      return;
    const outside = this.bbox_right < 0 || this.bbox_left > rm.room_width || this.bbox_bottom < 0 || this.bbox_top > rm.room_height;
    if (outside) {
      this.on_outside_room();
      if (this._destroyed)
        return;
    } else if (this.bbox_left < 0 || this.bbox_top < 0 || this.bbox_right > rm.room_width || this.bbox_bottom > rm.room_height) {
      this.on_intersect_boundary();
    }
  }
};
function with_object(obj, callback) {
  if (Array.isArray(obj)) {
    for (const inst of obj) {
      if (inst.active)
        callback(inst);
    }
    return;
  }
  const rm = game_loop.room;
  if (!rm)
    return;
  for (const inst of rm.instance_get_all()) {
    if (object_match(inst, obj) && inst.active) {
      callback(inst);
    }
  }
}
__name(with_object, "with_object");
function collision_point(x, y, obj) {
  const rm = game_loop.room;
  if (!rm)
    return void 0;
  for (const inst of rm.instance_get_all()) {
    if (object_match(inst, obj) && inst.active && point_in_instance(x, y, inst))
      return inst;
  }
  return void 0;
}
__name(collision_point, "collision_point");
function position_meeting(x, y, obj) {
  return collision_point(x, y, obj) !== void 0;
}
__name(position_meeting, "position_meeting");
function position_destroy(x, y) {
  const rm = game_loop.room;
  if (!rm)
    return;
  for (const inst of rm.instance_get_all()) {
    if (inst.active && point_in_instance(x, y, inst))
      inst.instance_destroy();
  }
}
__name(position_destroy, "position_destroy");
function collision_rectangle(x1, y1, x2, y2, obj) {
  const rm = game_loop.room;
  if (!rm)
    return void 0;
  for (const inst of rm.instance_get_all()) {
    if (object_match(inst, obj) && inst.active && rect_in_instance(x1, y1, x2, y2, inst))
      return inst;
  }
  return void 0;
}
__name(collision_rectangle, "collision_rectangle");
function collision_circle(x, y, radius, obj) {
  const rm = game_loop.room;
  if (!rm)
    return void 0;
  for (const inst of rm.instance_get_all()) {
    if (object_match(inst, obj) && inst.active && circle_in_instance(x, y, radius, inst))
      return inst;
  }
  return void 0;
}
__name(collision_circle, "collision_circle");
function collision_line(x1, y1, x2, y2, obj) {
  const rm = game_loop.room;
  if (!rm)
    return void 0;
  for (const inst of rm.instance_get_all()) {
    if (object_match(inst, obj) && inst.active && line_in_instance(x1, y1, x2, y2, inst))
      return inst;
  }
  return void 0;
}
__name(collision_line, "collision_line");
function _instances_of(obj) {
  const rm = game_loop.room;
  if (!rm)
    return [];
  return rm.instance_get_all().filter((i) => i.active && object_match(i, obj));
}
__name(_instances_of, "_instances_of");
function instance_number(obj) {
  return _instances_of(obj).length;
}
__name(instance_number, "instance_number");
function instance_exists(obj) {
  const rm = game_loop.room;
  return !!rm && rm.instance_get_all().some((i) => i.active && object_match(i, obj));
}
__name(instance_exists, "instance_exists");
function instance_find(obj, n) {
  return _instances_of(obj)[n];
}
__name(instance_find, "instance_find");
function instance_nearest(x, y, obj) {
  let best;
  let best_d = Infinity;
  for (const i of _instances_of(obj)) {
    const dx = i.x - x, dy = i.y - y, d = dx * dx + dy * dy;
    if (d < best_d) {
      best_d = d;
      best = i;
    }
  }
  return best;
}
__name(instance_nearest, "instance_nearest");
function instance_furthest(x, y, obj) {
  let best;
  let best_d = -1;
  for (const i of _instances_of(obj)) {
    const dx = i.x - x, dy = i.y - y, d = dx * dx + dy * dy;
    if (d > best_d) {
      best_d = d;
      best = i;
    }
  }
  return best;
}
__name(instance_furthest, "instance_furthest");
function instance_create(x, y, obj) {
  return instance.instance_create(x, y, obj);
}
__name(instance_create, "instance_create");
function instance_destroy(inst) {
  inst.instance_destroy();
}
__name(instance_destroy, "instance_destroy");

// packages/engine/dist/core/tiles.js
function _room() {
  return game_loop.room;
}
__name(_room, "_room");
function tile_add(background2, left, top, width, height, x, y, depth) {
  return _room()?.tile_add(background2, left, top, width, height, x, y, depth) ?? -1;
}
__name(tile_add, "tile_add");
function tile_delete(tile_id) {
  return _room()?.tile_delete(tile_id) ?? false;
}
__name(tile_delete, "tile_delete");
function tile_exists(tile_id) {
  return _room()?.tile_exists(tile_id) ?? false;
}
__name(tile_exists, "tile_exists");
function tile_get_x(tile_id) {
  return _room()?.tile_get_x(tile_id) ?? 0;
}
__name(tile_get_x, "tile_get_x");
function tile_get_y(tile_id) {
  return _room()?.tile_get_y(tile_id) ?? 0;
}
__name(tile_get_y, "tile_get_y");
function tile_get_depth(tile_id) {
  return _room()?.tile_get_depth(tile_id) ?? 0;
}
__name(tile_get_depth, "tile_get_depth");
function tile_get_visible(tile_id) {
  return _room()?.tile_get_visible(tile_id) ?? false;
}
__name(tile_get_visible, "tile_get_visible");
function tile_set_position(tile_id, x, y) {
  _room()?.tile_set_position(tile_id, x, y);
}
__name(tile_set_position, "tile_set_position");
function tile_set_depth(tile_id, depth) {
  _room()?.tile_set_depth(tile_id, depth);
}
__name(tile_set_depth, "tile_set_depth");
function tile_set_visible(tile_id, visible) {
  _room()?.tile_set_visible(tile_id, visible);
}
__name(tile_set_visible, "tile_set_visible");
function tile_set_scale(tile_id, xscale, yscale) {
  _room()?.tile_set_scale(tile_id, xscale, yscale);
}
__name(tile_set_scale, "tile_set_scale");
function tile_set_alpha(tile_id, alpha) {
  _room()?.tile_set_alpha(tile_id, alpha);
}
__name(tile_set_alpha, "tile_set_alpha");
function tile_set_background(tile_id, background2, left, top, width, height) {
  _room()?.tile_set_background(tile_id, background2, left, top, width, height);
}
__name(tile_set_background, "tile_set_background");
function tile_layer_delete(depth) {
  _room()?.tile_layer_delete(depth);
}
__name(tile_layer_delete, "tile_layer_delete");
function tile_layer_shift(depth, x, y) {
  _room()?.tile_layer_shift(depth, x, y);
}
__name(tile_layer_shift, "tile_layer_shift");
function tile_layer_find(x, y, depth) {
  return _room()?.tile_layer_find(x, y, depth) ?? -1;
}
__name(tile_layer_find, "tile_layer_find");

// packages/engine/dist/drawing/shader.js
var DEFAULT_VERTEX_SHADER = (
  /*glsl*/
  `#version 300 es
layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texcoord;
layout(location = 2) in vec4 a_color;

uniform mat4 u_projection;

out vec2 v_texcoord;
out vec4 v_color;

void main() {
    gl_Position = u_projection * vec4(a_position, 0.0, 1.0);
    v_texcoord = a_texcoord;
    v_color = a_color;
}`
);
var DEFAULT_FRAGMENT_SHADER = (
  /*glsl*/
  `#version 300 es
precision mediump float;

in vec2 v_texcoord;
in vec4 v_color;

uniform sampler2D u_texture;

out vec4 fragColor;

void main() {
    fragColor = texture(u_texture, v_texcoord) * v_color;
}`
);
function compile_shader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader)
    throw new Error("Failed to create shader object");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`Shader compile error: ${info}`);
  }
  return shader;
}
__name(compile_shader, "compile_shader");
function create_program(gl, vs_source, fs_source) {
  const vs = compile_shader(gl, gl.VERTEX_SHADER, vs_source);
  const fs = compile_shader(gl, gl.FRAGMENT_SHADER, fs_source);
  const program = gl.createProgram();
  if (!program)
    throw new Error("Failed to create shader program");
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(`Program link error: ${info}`);
  }
  return program;
}
__name(create_program, "create_program");
var shader_program = class {
  static {
    __name(this, "shader_program");
  }
  constructor(gl, vs_source, fs_source) {
    this.uniform_cache = /* @__PURE__ */ new Map();
    this.gl = gl;
    this.program = create_program(gl, vs_source, fs_source);
  }
  /**
   * Gets and caches a uniform location by name.
   * @param name - Uniform variable name in GLSL
   * @returns WebGLUniformLocation or null if not found
   */
  get_uniform(name) {
    if (!this.uniform_cache.has(name)) {
      this.uniform_cache.set(name, this.gl.getUniformLocation(this.program, name));
    }
    return this.uniform_cache.get(name);
  }
  /**
   * Frees the shader program's GPU resources.
   */
  destroy() {
    this.gl.deleteProgram(this.program);
    this.uniform_cache.clear();
  }
};

// packages/engine/dist/drawing/batch_renderer.js
var FLOATS_PER_VERTEX = 8;
var VERTS_PER_QUAD = 6;
var FLOATS_PER_QUAD = FLOATS_PER_VERTEX * VERTS_PER_QUAD;
var MAX_QUADS = 8192;
var batch_renderer = class {
  static {
    __name(this, "batch_renderer");
  }
  constructor(gl) {
    this.quad_count = 0;
    this.current_texture = null;
    this.gl = gl;
    this.vertices = new Float32Array(MAX_QUADS * FLOATS_PER_QUAD);
    const vao = gl.createVertexArray();
    if (!vao)
      throw new Error("Failed to create VAO");
    this.vao = vao;
    const vbo = gl.createBuffer();
    if (!vbo)
      throw new Error("Failed to create VBO");
    this.vbo = vbo;
    const STRIDE = FLOATS_PER_VERTEX * 4;
    gl.bindVertexArray(this.vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices.byteLength, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, STRIDE, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, STRIDE, 8);
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 4, gl.FLOAT, false, STRIDE, 16);
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  }
  /**
   * Pushes one axis-aligned quad into the batch.
   * Flushes the batch if the texture changes or the buffer is full.
   *
   * @param x - Left edge
   * @param y - Top edge
   * @param w - Width
   * @param h - Height
   * @param u0 - Left UV coordinate
   * @param v0 - Top UV coordinate
   * @param u1 - Right UV coordinate
   * @param v1 - Bottom UV coordinate
   * @param r - Red (0–1)
   * @param g - Green (0–1)
   * @param b - Blue (0–1)
   * @param a - Alpha (0–1)
   * @param texture - WebGL texture to sample
   */
  add_quad(x, y, w, h, u0, v0, u1, v1, r, g, b, a, texture) {
    if (this.current_texture !== null && this.current_texture !== texture) {
      this.flush();
    }
    this.current_texture = texture;
    if (this.quad_count >= MAX_QUADS) {
      this.flush();
    }
    const base = this.quad_count * FLOATS_PER_QUAD;
    const verts = this.vertices;
    verts[base + 0] = x;
    verts[base + 1] = y;
    verts[base + 2] = u0;
    verts[base + 3] = v0;
    verts[base + 4] = r;
    verts[base + 5] = g;
    verts[base + 6] = b;
    verts[base + 7] = a;
    verts[base + 8] = x;
    verts[base + 9] = y + h;
    verts[base + 10] = u0;
    verts[base + 11] = v1;
    verts[base + 12] = r;
    verts[base + 13] = g;
    verts[base + 14] = b;
    verts[base + 15] = a;
    verts[base + 16] = x + w;
    verts[base + 17] = y;
    verts[base + 18] = u1;
    verts[base + 19] = v0;
    verts[base + 20] = r;
    verts[base + 21] = g;
    verts[base + 22] = b;
    verts[base + 23] = a;
    verts[base + 24] = x + w;
    verts[base + 25] = y;
    verts[base + 26] = u1;
    verts[base + 27] = v0;
    verts[base + 28] = r;
    verts[base + 29] = g;
    verts[base + 30] = b;
    verts[base + 31] = a;
    verts[base + 32] = x;
    verts[base + 33] = y + h;
    verts[base + 34] = u0;
    verts[base + 35] = v1;
    verts[base + 36] = r;
    verts[base + 37] = g;
    verts[base + 38] = b;
    verts[base + 39] = a;
    verts[base + 40] = x + w;
    verts[base + 41] = y + h;
    verts[base + 42] = u1;
    verts[base + 43] = v1;
    verts[base + 44] = r;
    verts[base + 45] = g;
    verts[base + 46] = b;
    verts[base + 47] = a;
    this.quad_count++;
  }
  /**
   * Pushes a rotated/scaled quad into the batch.
   * Used for draw_sprite_ext with rotation and scale.
   *
   * @param cx - Center X
   * @param cy - Center Y
   * @param w - Width before scaling
   * @param h - Height before scaling
   * @param ox - Origin X offset from center
   * @param oy - Origin Y offset from center
   * @param xscale - Horizontal scale
   * @param yscale - Vertical scale
   * @param angle_deg - Rotation in degrees (counter-clockwise)
   * @param u0 - Left UV
   * @param v0 - Top UV
   * @param u1 - Right UV
   * @param v1 - Bottom UV
   * @param r - Red (0–1)
   * @param g - Green (0–1)
   * @param b - Blue (0–1)
   * @param a - Alpha (0–1)
   * @param texture - WebGL texture
   */
  add_quad_transformed(cx, cy, w, h, ox, oy, xscale, yscale, angle_deg, u0, v0, u1, v1, r, g, b, a, texture) {
    if (this.current_texture !== null && this.current_texture !== texture) {
      this.flush();
    }
    this.current_texture = texture;
    if (this.quad_count >= MAX_QUADS) {
      this.flush();
    }
    const rad = -angle_deg * (Math.PI / 180);
    const cos_a = Math.cos(rad);
    const sin_a = Math.sin(rad);
    const hw = w * xscale;
    const hh = h * yscale;
    const lx = -ox * xscale;
    const ty = -oy * yscale;
    const rx = lx + hw;
    const by = ty + hh;
    const transform = /* @__PURE__ */ __name((lx2, ly) => {
      return [
        cx + lx2 * cos_a - ly * sin_a,
        cy + lx2 * sin_a + ly * cos_a
      ];
    }, "transform");
    const [tl_x, tl_y] = transform(lx, ty);
    const [tr_x, tr_y] = transform(rx, ty);
    const [bl_x, bl_y] = transform(lx, by);
    const [br_x, br_y] = transform(rx, by);
    const base = this.quad_count * FLOATS_PER_QUAD;
    const verts = this.vertices;
    const write = /* @__PURE__ */ __name((off, px, py, u, v) => {
      verts[off + 0] = px;
      verts[off + 1] = py;
      verts[off + 2] = u;
      verts[off + 3] = v;
      verts[off + 4] = r;
      verts[off + 5] = g;
      verts[off + 6] = b;
      verts[off + 7] = a;
    }, "write");
    write(base + 0, tl_x, tl_y, u0, v0);
    write(base + 8, bl_x, bl_y, u0, v1);
    write(base + 16, tr_x, tr_y, u1, v0);
    write(base + 24, tr_x, tr_y, u1, v0);
    write(base + 32, bl_x, bl_y, u0, v1);
    write(base + 40, br_x, br_y, u1, v1);
    this.quad_count++;
  }
  /**
   * Adds a quad from explicit local-space destination corners (relative to a pivot) under a shared
   * rotation. Used by tiled / 9-slice sprite drawing, where each cell has its own rect + UV but they
   * share the instance pivot and angle. cos_a/sin_a use the same sign convention as
   * add_quad_transformed (i.e. computed from rad = -angle_deg · π/180).
   */
  add_quad_local(cx, cy, lx0, ly0, lx1, ly1, cos_a, sin_a, u0, v0, u1, v1, r, g, b, a, texture) {
    if (this.current_texture !== null && this.current_texture !== texture) {
      this.flush();
    }
    this.current_texture = texture;
    if (this.quad_count >= MAX_QUADS) {
      this.flush();
    }
    const tf = /* @__PURE__ */ __name((lx, ly) => [cx + lx * cos_a - ly * sin_a, cy + lx * sin_a + ly * cos_a], "tf");
    const [tl_x, tl_y] = tf(lx0, ly0);
    const [tr_x, tr_y] = tf(lx1, ly0);
    const [bl_x, bl_y] = tf(lx0, ly1);
    const [br_x, br_y] = tf(lx1, ly1);
    const base = this.quad_count * FLOATS_PER_QUAD;
    const verts = this.vertices;
    const write = /* @__PURE__ */ __name((off, px, py, u, v) => {
      verts[off + 0] = px;
      verts[off + 1] = py;
      verts[off + 2] = u;
      verts[off + 3] = v;
      verts[off + 4] = r;
      verts[off + 5] = g;
      verts[off + 6] = b;
      verts[off + 7] = a;
    }, "write");
    write(base + 0, tl_x, tl_y, u0, v0);
    write(base + 8, bl_x, bl_y, u0, v1);
    write(base + 16, tr_x, tr_y, u1, v0);
    write(base + 24, tr_x, tr_y, u1, v0);
    write(base + 32, bl_x, bl_y, u0, v1);
    write(base + 40, br_x, br_y, u1, v1);
    this.quad_count++;
  }
  /**
   * Flushes accumulated quads to the GPU with a single draw call.
   * Resets the batch state after drawing.
   */
  flush() {
    if (this.quad_count === 0)
      return;
    const gl = this.gl;
    gl.bindVertexArray(this.vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices.subarray(0, this.quad_count * FLOATS_PER_QUAD));
    if (this.current_texture) {
      gl.bindTexture(gl.TEXTURE_2D, this.current_texture);
    }
    gl.drawArrays(gl.TRIANGLES, 0, this.quad_count * VERTS_PER_QUAD);
    gl.bindVertexArray(null);
    this.quad_count = 0;
    this.current_texture = null;
  }
  /**
   * Frees the VAO and VBO GPU resources.
   */
  destroy() {
    this.gl.deleteVertexArray(this.vao);
    this.gl.deleteBuffer(this.vbo);
  }
};

// packages/engine/dist/drawing/texture_manager.js
var texture_manager = class {
  static {
    __name(this, "texture_manager");
  }
  constructor(gl) {
    this.textures = /* @__PURE__ */ new Map();
    this.gl = gl;
    this.white_pixel = this.create_white_pixel();
  }
  /**
   * Creates the 1x1 white pixel texture used when drawing solid-colored shapes.
   * @returns WebGLTexture handle
   */
  create_white_pixel() {
    const gl = this.gl;
    const tex = gl.createTexture();
    if (!tex)
      throw new Error("Failed to create white pixel texture");
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 255]));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);
    return tex;
  }
  /**
   * Loads a texture from a URL and caches it by URL.
   * @param url - Image URL
   * @param smooth - Use LINEAR filtering (true) or NEAREST for pixel art (false)
   * @returns Promise resolving to the texture entry
   */
  load(url, smooth = false) {
    if (this.textures.has(url)) {
      return Promise.resolve(this.textures.get(url));
    }
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const entry = this.from_image(img, smooth);
        this.textures.set(url, entry);
        resolve(entry);
      };
      img.onerror = () => reject(new Error(`Failed to load texture: ${url}`));
      img.src = url;
    });
  }
  /**
   * Creates a texture from an already-loaded HTMLImageElement.
   * @param img - Source image element
   * @param smooth - Use LINEAR filtering (true) or NEAREST for pixel art (false)
   * @returns texture_entry
   */
  from_image(img, smooth = false) {
    const gl = this.gl;
    const filter = smooth ? gl.LINEAR : gl.NEAREST;
    const tex = gl.createTexture();
    if (!tex)
      throw new Error("Failed to create texture");
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);
    return { texture: tex, width: img.width, height: img.height };
  }
  /**
   * Creates a texture from a raw HTMLCanvasElement (used for text rendering).
   * @param canvas - Source canvas element
   * @param smooth - Use LINEAR filtering (true) or NEAREST (false)
   * @returns texture_entry
   */
  from_canvas(canvas, smooth = true) {
    const gl = this.gl;
    const filter = smooth ? gl.LINEAR : gl.NEAREST;
    const tex = gl.createTexture();
    if (!tex)
      throw new Error("Failed to create texture from canvas");
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);
    return { texture: tex, width: canvas.width, height: canvas.height };
  }
  /**
   * Frees a texture from GPU memory and removes it from the cache.
   * @param url - URL key used when loading
   */
  free(url) {
    const entry = this.textures.get(url);
    if (entry) {
      this.gl.deleteTexture(entry.texture);
      this.textures.delete(url);
    }
  }
  /**
   * Frees a raw WebGLTexture directly (used by font_renderer cache cleanup).
   * @param texture - The GPU texture handle to delete
   */
  free_texture(texture) {
    this.gl.deleteTexture(texture);
  }
  /**
   * Frees all tracked textures and the white pixel texture.
   */
  destroy() {
    for (const entry of this.textures.values()) {
      this.gl.deleteTexture(entry.texture);
    }
    this.textures.clear();
    this.gl.deleteTexture(this.white_pixel);
  }
};

// packages/engine/dist/drawing/font.js
var font_resource = class {
  static {
    __name(this, "font_resource");
  }
  constructor(family = "Arial", size = 16, bold = false, italic = false) {
    this.family = family;
    this.size = size;
    this.bold = bold;
    this.italic = italic;
    this.name = this.build_css();
  }
  /** Builds the CSS font string. */
  build_css() {
    const style = this.italic ? "italic " : "";
    const weight = this.bold ? "bold " : "";
    return `${style}${weight}${this.size}px ${this.family}`;
  }
};
var _font_names = /* @__PURE__ */ new Map();
function font_register_name(name, fnt) {
  _font_names.set(name, fnt);
}
__name(font_register_name, "font_register_name");
function font_get(name) {
  return _font_names.get(name);
}
__name(font_get, "font_get");
function font_exists(name) {
  return _font_names.has(name);
}
__name(font_exists, "font_exists");
var MAX_TEXT_CACHE = 512;
var font_renderer = class {
  static {
    __name(this, "font_renderer");
  }
  constructor(tex_manager) {
    this.cache = /* @__PURE__ */ new Map();
    this.tex_manager = tex_manager;
    this.offscreen = document.createElement("canvas");
    const ctx = this.offscreen.getContext("2d");
    if (!ctx)
      throw new Error("Cannot create 2D canvas context for text rendering");
    this.ctx = ctx;
  }
  /**
   * Returns a cached or newly-rendered texture for the given text string.
   * @param text - Text to render
   * @param fnt - Font resource to use
   * @param color_css - CSS color string (e.g. "#FFFFFF")
   * @returns text_cache_entry containing the texture and dimensions
   */
  get_texture(text, fnt, color_css) {
    const key = `${fnt.name}|${color_css}|${text}`;
    const cached = this.cache.get(key);
    if (cached) {
      this.cache.delete(key);
      this.cache.set(key, cached);
      return cached;
    }
    const entry = this.rasterize(text, fnt, color_css);
    if (this.cache.size >= MAX_TEXT_CACHE) {
      const oldest = this.cache.keys().next().value;
      if (oldest !== void 0) {
        const evicted = this.cache.get(oldest);
        if (evicted)
          this.tex_manager.free_texture(evicted.entry.texture);
        this.cache.delete(oldest);
      }
    }
    this.cache.set(key, entry);
    return entry;
  }
  /**
   * Rasterizes text to a canvas and uploads it to a WebGL texture.
   */
  rasterize(text, fnt, color_css) {
    const ctx = this.ctx;
    ctx.font = fnt.name;
    const metrics = ctx.measureText(text);
    const w = Math.max(1, Math.ceil(metrics.width));
    const h = Math.max(1, Math.ceil(fnt.size * 1.5));
    this.offscreen.width = w;
    this.offscreen.height = h;
    ctx.font = fnt.name;
    ctx.fillStyle = color_css;
    ctx.textBaseline = "top";
    ctx.clearRect(0, 0, w, h);
    ctx.fillText(text, 0, 0);
    const tex_entry = this.tex_manager.from_canvas(this.offscreen, true);
    return { entry: tex_entry, width: w, height: h };
  }
  /**
   * Measures the pixel width of a string with the given font.
   * @param text - Text to measure
   * @param fnt - Font resource
   * @returns Width in pixels
   */
  measure_width(text, fnt) {
    this.ctx.font = fnt.name;
    return Math.ceil(this.ctx.measureText(text).width);
  }
  /**
   * Measures the pixel height of a string with the given font.
   * @param fnt - Font resource
   * @returns Height in pixels
   */
  measure_height(fnt) {
    return Math.ceil(fnt.size * 1.5);
  }
  /**
   * Clears the text texture cache and frees GPU memory.
   */
  clear_cache() {
    for (const entry of this.cache.values()) {
      this.tex_manager.free_texture(entry.entry.texture);
    }
    this.cache.clear();
  }
};

// packages/engine/dist/drawing/color.js
var c_aqua = 16776960;
var c_black = 0;
var c_blue = 16711680;
var c_dkgray = 4210752;
var c_fuchsia = 16711935;
var c_gray = 8421504;
var c_green = 32768;
var c_lime = 65280;
var c_ltgray = 12632256;
var c_maroon = 128;
var c_navy = 8388608;
var c_olive = 32896;
var c_orange = 33023;
var c_purple = 8388736;
var c_red = 255;
var c_silver = 12632256;
var c_teal = 8421376;
var c_white = 16777215;
var c_yellow = 65535;
var bm_normal = 0;
var bm_add = 1;
var bm_max = 2;
var bm_subtract = 3;
var fa_left = 0;
var fa_center = 1;
var fa_right = 2;
var fa_top = 0;
var fa_middle = 1;
var fa_bottom = 2;
function make_color_rgb(r, g, b) {
  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b)));
  return b << 16 | g << 8 | r;
}
__name(make_color_rgb, "make_color_rgb");
function make_color_hsv(h, s, v) {
  h = h / 255 * 360;
  s = s / 255;
  v = v / 255;
  const c = v * s;
  const x = c * (1 - Math.abs(h / 60 % 2 - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if (h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  return make_color_rgb(Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255));
}
__name(make_color_hsv, "make_color_hsv");
function color_get_red(col) {
  return col & 255;
}
__name(color_get_red, "color_get_red");
function color_get_green(col) {
  return col >> 8 & 255;
}
__name(color_get_green, "color_get_green");
function color_get_blue(col) {
  return col >> 16 & 255;
}
__name(color_get_blue, "color_get_blue");
function merge_color(col1, col2, amount) {
  amount = Math.max(0, Math.min(1, amount));
  const r1 = color_get_red(col1), r2 = color_get_red(col2);
  const g1 = color_get_green(col1), g2 = color_get_green(col2);
  const b1 = color_get_blue(col1), b2 = color_get_blue(col2);
  return make_color_rgb(r1 + (r2 - r1) * amount, g1 + (g2 - g1) * amount, b1 + (b2 - b1) * amount);
}
__name(merge_color, "merge_color");
function color_to_rgb_normalized(col) {
  return [
    color_get_red(col) / 255,
    color_get_green(col) / 255,
    color_get_blue(col) / 255
  ];
}
__name(color_to_rgb_normalized, "color_to_rgb_normalized");
function color_get_hue(col) {
  const r = color_get_red(col) / 255, g = color_get_green(col) / 255, b = color_get_blue(col) / 255;
  const max2 = Math.max(r, g, b), min2 = Math.min(r, g, b), d = max2 - min2;
  let h = 0;
  if (d !== 0) {
    if (max2 === r)
      h = (g - b) / d % 6;
    else if (max2 === g)
      h = (b - r) / d + 2;
    else
      h = (r - g) / d + 4;
    h *= 60;
    if (h < 0)
      h += 360;
  }
  return Math.round(h / 360 * 255);
}
__name(color_get_hue, "color_get_hue");
function color_get_saturation(col) {
  const r = color_get_red(col), g = color_get_green(col), b = color_get_blue(col);
  const max2 = Math.max(r, g, b);
  return max2 === 0 ? 0 : Math.round((max2 - Math.min(r, g, b)) / max2 * 255);
}
__name(color_get_saturation, "color_get_saturation");
function color_get_value(col) {
  return Math.max(color_get_red(col), color_get_green(col), color_get_blue(col));
}
__name(color_get_value, "color_get_value");
var make_colour_rgb = make_color_rgb;
var make_colour_hsv = make_color_hsv;
var colour_get_red = color_get_red;
var colour_get_green = color_get_green;
var colour_get_blue = color_get_blue;
var colour_get_hue = color_get_hue;
var colour_get_saturation = color_get_saturation;
var colour_get_value = color_get_value;
var merge_colour = merge_color;

// packages/engine/dist/drawing/renderer.js
function pos_mod(a, m) {
  return (a % m + m) % m;
}
__name(pos_mod, "pos_mod");
var renderer = class {
  static {
    __name(this, "renderer");
  }
  /**
   * Initialises the renderer with an existing canvas or creates a new one.
   * Must be called before any drawing functions.
   * @param canvas_or_id - Canvas element or CSS selector string
   * @param width - Canvas width in pixels
   * @param height - Canvas height in pixels
   */
  static init(canvas_or_id, width = 800, height = 600) {
    if (typeof canvas_or_id === "string") {
      const el = document.querySelector(canvas_or_id);
      if (!el)
        throw new Error(`Canvas not found: ${canvas_or_id}`);
      this.canvas = el;
    } else {
      this.canvas = canvas_or_id;
    }
    this.canvas.width = width;
    this.canvas.height = height;
    const gl = this.canvas.getContext("webgl2");
    if (!gl)
      throw new Error("WebGL 2 is not supported in this browser");
    this.gl = gl;
    this.program = create_program(gl, DEFAULT_VERTEX_SHADER, DEFAULT_FRAGMENT_SHADER);
    this.projection_loc = gl.getUniformLocation(this.program, "u_projection");
    this.active_proj_loc = this.projection_loc;
    this.tex_mgr = new texture_manager(gl);
    this.batch = new batch_renderer(gl);
    this.font_rend = new font_renderer(this.tex_mgr);
    gl.enable(gl.BLEND);
    this.apply_blend_mode(bm_normal);
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.useProgram(this.program);
    this.upload_projection(width, height);
    set_draw_sprite_ext(this.draw_sprite_ext.bind(this));
    set_frame_hooks(() => this.begin_frame(), () => this.end_frame());
    set_room_render_hook((rm, run_instances) => this.draw_room(rm, run_instances));
  }
  // =========================================================================
  // Projection helpers
  // =========================================================================
  /**
   * Uploads an orthographic projection matrix for pixel-space coordinates.
   * Origin at top-left, Y increases downward.
   * @param w - Viewport width
   * @param h - Viewport height
   */
  static upload_projection(w, h) {
    const gl = this.gl;
    const matrix = new Float32Array([
      2 / w,
      0,
      0,
      0,
      0,
      -2 / h,
      0,
      0,
      0,
      0,
      1,
      0,
      -1,
      1,
      0,
      1
    ]);
    gl.uniformMatrix4fv(this.projection_loc, false, matrix);
  }
  /**
   * Uploads an orthographic projection that maps the room-space rectangle
   * (vx,vy)–(vx+vw,vy+vh) onto clip space. Origin top-left, Y increases down.
   * This is what makes views/cameras scroll.
   * @param vx - View left in room space
   * @param vy - View top in room space
   * @param vw - View width in room space
   * @param vh - View height in room space
   */
  static upload_projection_view(vx, vy, vw, vh) {
    const gl = this.gl;
    const matrix = new Float32Array([
      2 / vw,
      0,
      0,
      0,
      0,
      -2 / vh,
      0,
      0,
      0,
      0,
      1,
      0,
      -(2 * vx / vw) - 1,
      2 * vy / vh + 1,
      0,
      1
    ]);
    gl.uniformMatrix4fv(this.projection_loc, false, matrix);
  }
  /**
   * Activates a view camera: flushes pending geometry, sets the GL viewport to
   * the on-screen port, and projects the room-space view rectangle into it.
   */
  static set_view_camera(vx, vy, vw, vh, px, py, pw, ph) {
    this.batch.flush();
    this.gl.viewport(px, this.canvas.height - py - ph, pw, ph);
    this.upload_projection_view(vx, vy, vw, vh);
  }
  /** Restores full-canvas rendering (for GUI / no-view drawing). */
  static reset_view() {
    this.batch.flush();
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.upload_projection(this.canvas.width, this.canvas.height);
  }
  // =========================================================================
  // Frame management
  // =========================================================================
  /**
   * Called at the start of each draw frame.
   * Clears the color buffer and prepares the render state.
   * @param r - Clear color red (0–1)
   * @param g - Clear color green (0–1)
   * @param b - Clear color blue (0–1)
   */
  static begin_frame(r = 0, g = 0, b = 0) {
    const gl = this.gl;
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.clearColor(r, g, b, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(this.program);
    this.upload_projection(this.canvas.width, this.canvas.height);
  }
  /**
   * Called at the end of each draw frame to flush remaining batched quads.
   */
  static end_frame() {
    this.batch.flush();
  }
  // =========================================================================
  // Draw state
  // =========================================================================
  /** Sets the current draw color (BGR integer). */
  static set_color(col) {
    this.draw_color = col;
  }
  /** Returns the current draw color (BGR integer). */
  static get_color() {
    return this.draw_color;
  }
  /** Sets the current draw alpha (0–1). */
  static set_alpha(a) {
    this.draw_alpha = Math.max(0, Math.min(1, a));
  }
  /** Returns the current draw alpha. */
  static get_alpha() {
    return this.draw_alpha;
  }
  /** Returns the currently active font resource. */
  static get_current_font() {
    return this.current_font;
  }
  /** Sets the current font for text rendering. */
  static set_font(fnt) {
    this.current_font = fnt;
  }
  /** Sets the horizontal text alignment (fa_left / fa_center / fa_right). */
  static set_halign(align) {
    this.halign = align;
  }
  /** Sets the vertical text alignment (fa_top / fa_middle / fa_bottom). */
  static set_valign(align) {
    this.valign = align;
  }
  /**
   * Sets the active blend mode.
   * Flushes the current batch before changing GL blend state.
   * @param mode - bm_normal, bm_add, bm_max, or bm_subtract
   */
  static set_blend_mode(mode) {
    if (mode === this.blend_mode)
      return;
    this.batch.flush();
    this.blend_mode = mode;
    this.apply_blend_mode(mode);
  }
  static apply_blend_mode(mode) {
    const gl = this.gl;
    switch (mode) {
      case 1:
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        break;
      case 2:
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        gl.blendEquation(gl.MAX);
        break;
      case 3:
        gl.blendFunc(gl.ZERO, gl.ONE_MINUS_SRC_COLOR);
        gl.blendEquation(gl.FUNC_SUBTRACT);
        break;
      default:
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.blendEquation(gl.FUNC_ADD);
        break;
    }
  }
  // =========================================================================
  // Surface management
  // =========================================================================
  /**
   * Creates a new render-to-texture surface.
   * @param w - Surface width in pixels
   * @param h - Surface height in pixels
   * @returns surface object
   */
  static surface_create(w, h) {
    const gl = this.gl;
    const tex = gl.createTexture();
    if (!tex)
      throw new Error("Failed to create surface texture");
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);
    const fbo = gl.createFramebuffer();
    if (!fbo)
      throw new Error("Failed to create framebuffer");
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return { fbo, texture: tex, width: w, height: h, valid: true };
  }
  /**
   * Sets the render target to a surface.
   * Subsequent draw calls will render into the surface.
   * @param surf - Target surface
   */
  static surface_set_target(surf) {
    if (!surf.valid)
      return;
    this.batch.flush();
    const gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, surf.fbo);
    gl.viewport(0, 0, surf.width, surf.height);
    this.upload_projection(surf.width, surf.height);
    this.active_surface = surf;
  }
  /**
   * Resets the render target back to the screen.
   */
  static surface_reset_target() {
    this.batch.flush();
    const gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.upload_projection(this.canvas.width, this.canvas.height);
    this.active_surface = null;
  }
  /**
   * Frees a surface's GPU resources.
   * @param surf - Surface to free
   */
  static surface_free(surf) {
    if (!surf.valid)
      return;
    this.batch.flush();
    const gl = this.gl;
    gl.deleteTexture(surf.texture);
    gl.deleteFramebuffer(surf.fbo);
    surf.valid = false;
  }
  // =========================================================================
  // Sprite drawing
  // =========================================================================
  /**
   * Draws a sprite at the given position using the instance's current frame.
   * @param spr - Sprite resource
   * @param subimg - Frame index (float; will be floored and wrapped)
   * @param x - X position (adjusted for sprite origin)
   * @param y - Y position (adjusted for sprite origin)
   */
  static draw_sprite(spr, subimg, x, y) {
    const frame = spr.get_frame(subimg);
    if (!frame)
      return;
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    this.batch.add_quad(x - spr.xoffset, y - spr.yoffset, frame.width, frame.height, 0, 0, 1, 1, r, g, b, this.draw_alpha, frame.texture.texture);
  }
  /**
   * Draws a sprite with extended transforms (scale, rotation, blend color, alpha).
   * @param spr - Sprite resource
   * @param subimg - Frame index
   * @param x - X position
   * @param y - Y position
   * @param xscale - Horizontal scale factor
   * @param yscale - Vertical scale factor
   * @param rot - Rotation in degrees (counter-clockwise)
   * @param color - Tint color (BGR integer, 0xFFFFFF = no tint)
   * @param alpha - Transparency (0–1)
   */
  static draw_sprite_ext(spr, subimg, x, y, xscale, yscale, rot, color, alpha) {
    const frame = spr.get_frame(subimg);
    if (!frame)
      return;
    const [r, g, b] = color_to_rgb_normalized(color);
    if (spr.scale_mode === "stretch" || xscale === 1 && yscale === 1) {
      this.batch.add_quad_transformed(x, y, frame.width, frame.height, spr.xoffset, spr.yoffset, xscale, yscale, rot, 0, 0, 1, 1, r, g, b, alpha, frame.texture.texture);
      return;
    }
    const cells = sprite_scale_cells(spr.scale_mode, frame.width, frame.height, spr.xoffset, spr.yoffset, xscale, yscale, spr.slice_left, spr.slice_top, spr.slice_right, spr.slice_bottom);
    const rad = -rot * (Math.PI / 180);
    const cos = Math.cos(rad), sin = Math.sin(rad);
    const tex = frame.texture.texture;
    for (const c of cells) {
      this.batch.add_quad_local(x, y, c.dx0, c.dy0, c.dx1, c.dy1, cos, sin, c.u0, c.v0, c.u1, c.v1, r, g, b, alpha, tex);
    }
  }
  /**
   * Draws a sub-region of a sprite frame.
   * @param spr - Sprite resource
   * @param subimg - Frame index
   * @param left - Source left (pixels from frame left)
   * @param top - Source top (pixels from frame top)
   * @param width - Source width in pixels
   * @param height - Source height in pixels
   * @param x - Destination X
   * @param y - Destination Y
   */
  static draw_sprite_part(spr, subimg, left, top, width, height, x, y) {
    const frame = spr.get_frame(subimg);
    if (!frame)
      return;
    const fw = frame.width;
    const fh = frame.height;
    const u0 = left / fw;
    const v0 = top / fh;
    const u1 = (left + width) / fw;
    const v1 = (top + height) / fh;
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    this.batch.add_quad(x, y, width, height, u0, v0, u1, v1, r, g, b, this.draw_alpha, frame.texture.texture);
  }
  /**
   * Draws a sprite stretched to fit the given dimensions.
   * @param spr - Sprite resource
   * @param subimg - Frame index
   * @param x - Destination X (top-left)
   * @param y - Destination Y (top-left)
   * @param w - Target width
   * @param h - Target height
   */
  static draw_sprite_stretched(spr, subimg, x, y, w, h) {
    const frame = spr.get_frame(subimg);
    if (!frame)
      return;
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    this.batch.add_quad(x, y, w, h, 0, 0, 1, 1, r, g, b, this.draw_alpha, frame.texture.texture);
  }
  // ═══════════════════════════════════════════════════════════════════════
  // Background drawing
  // ═══════════════════════════════════════════════════════════════════════
  /**
   * Draws a background at the given position.
   * @param bg - Background resource
   * @param x - X position
   * @param y - Y position
   */
  static draw_background(bg, x, y) {
    if (!bg || !bg.texture)
      return;
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    this.batch.add_quad(x, y, bg.width, bg.height, 0, 0, 1, 1, r, g, b, this.draw_alpha, bg.texture.texture);
  }
  /**
   * Draws a background with extended transforms (scale, rotation, blend color, alpha).
   * @param bg - Background resource
   * @param x - X position
   * @param y - Y position
   * @param xscale - Horizontal scale factor
   * @param yscale - Vertical scale factor
   * @param rot - Rotation in degrees (counter-clockwise)
   * @param color - Blend color as BGR integer
   * @param alpha - Alpha transparency (0–1)
   */
  static draw_background_ext(bg, x, y, xscale, yscale, rot, color, alpha) {
    if (!bg || !bg.texture)
      return;
    const [r, g, b] = color_to_rgb_normalized(color);
    this.batch.add_quad_transformed(x, y, bg.width, bg.height, 0, 0, xscale, yscale, rot, 0, 0, 1, 1, r, g, b, alpha, bg.texture.texture);
  }
  /**
   * Draws a background stretched to fill a specified region.
   * @param bg - Background resource
   * @param x - X position
   * @param y - Y position
   * @param w - Width
   * @param h - Height
   */
  static draw_background_stretched(bg, x, y, w, h) {
    if (!bg || !bg.texture)
      return;
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    this.batch.add_quad(x, y, w, h, 0, 0, 1, 1, r, g, b, this.draw_alpha, bg.texture.texture);
  }
  /**
   * Draws a background tiled to fill the current view.
   * @param bg - Background resource
   * @param x - X offset
   * @param y - Y offset
   * @param tile_x - X tile offset
   * @param tile_y - Y tile offset
   */
  static draw_background_tiled(bg, x, y, tile_x, tile_y) {
    if (!bg || !bg.texture)
      return;
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    const view_w = this.canvas.width;
    const view_h = this.canvas.height;
    const tiles_x = Math.ceil(view_w / bg.width) + 1;
    const tiles_y = Math.ceil(view_h / bg.height) + 1;
    const start_x = x - tile_x % bg.width;
    const start_y = y - tile_y % bg.height;
    for (let ty = 0; ty < tiles_y; ty++) {
      for (let tx = 0; tx < tiles_x; tx++) {
        const draw_x = start_x + tx * bg.width;
        const draw_y = start_y + ty * bg.height;
        this.batch.add_quad(draw_x, draw_y, bg.width, bg.height, 0, 0, 1, 1, r, g, b, this.draw_alpha, bg.texture.texture);
      }
    }
  }
  /**
   * Draws a surface as if it were a sprite.
   * @param surf - Surface to draw
   * @param x - Destination X
   * @param y - Destination Y
   */
  static draw_surface(surf, x, y) {
    if (!surf.valid)
      return;
    const [r, g, b] = color_to_rgb_normalized(16777215);
    this.batch.add_quad(x, y, surf.width, surf.height, 0, 1, 1, 0, r, g, b, this.draw_alpha, surf.texture);
  }
  // =========================================================================
  // Room rendering (views, backgrounds, tiles)
  // =========================================================================
  /**
   * Renders the active room. For each visible view it sets the camera, draws
   * the non-foreground backgrounds and tiles, runs the instance Draw events
   * (via the callback), then draws the foreground backgrounds. With no views
   * enabled the room maps 1:1 to the canvas.
   * @param rm - The active room
   * @param run_instances - Runs all instance Draw events under the current camera
   */
  static draw_room(rm, run_instances) {
    if (rm.background_show_color)
      this.draw_clear(rm.background_solid_color);
    this._advance_bg_scroll(rm);
    const views = [];
    if (rm.view_enabled) {
      for (let i = 0; i < rm.view_visible.length; i++) {
        if (rm.view_visible[i] && (rm.view_wview[i] ?? 0) > 0)
          views.push(i);
      }
    }
    if (views.length > 0) {
      for (const i of views) {
        this._follow_view(rm, i);
        const vx = rm.view_xview[i] ?? 0, vy = rm.view_yview[i] ?? 0;
        const vw = rm.view_wview[i], vh = rm.view_hview[i];
        const px = rm.view_xport[i] ?? 0, py = rm.view_yport[i] ?? 0;
        const pw = rm.view_wport[i] ?? vw, ph = rm.view_hport[i] ?? vh;
        this.set_view_camera(vx, vy, vw, vh, px, py, pw, ph);
        this.draw_room_backgrounds(rm, false, vx, vy, vw, vh);
        this.draw_room_tiles(rm);
        run_instances();
        this.draw_room_backgrounds(rm, true, vx, vy, vw, vh);
      }
      this.reset_view();
    } else {
      const vw = this.canvas.width, vh = this.canvas.height;
      this.draw_room_backgrounds(rm, false, 0, 0, vw, vh);
      this.draw_room_tiles(rm);
      run_instances();
      this.draw_room_backgrounds(rm, true, 0, 0, vw, vh);
    }
  }
  /** Accumulates each background layer's auto-scroll offset once per frame. */
  static _advance_bg_scroll(rm) {
    const n = rm.background_index.length;
    if (rm._bg_scroll_x.length !== n) {
      rm._bg_scroll_x = new Array(n).fill(0);
      rm._bg_scroll_y = new Array(n).fill(0);
    }
    for (let i = 0; i < n; i++) {
      rm._bg_scroll_x[i] = (rm._bg_scroll_x[i] ?? 0) + (rm.background_hspeed[i] ?? 0);
      rm._bg_scroll_y[i] = (rm._bg_scroll_y[i] ?? 0) + (rm.background_vspeed[i] ?? 0);
    }
  }
  /**
   * Moves view `i` to keep its followed instance within the view's border box,
   * clamped to the room bounds. No-op when the view follows nothing.
   */
  static _follow_view(rm, i) {
    const obj = rm.view_object[i] ?? -1;
    if (obj < 0)
      return;
    const inst = rm.instance_get(obj);
    if (!inst)
      return;
    const vw = rm.view_wview[i], vh = rm.view_hview[i];
    const hb = rm.view_hborder[i] ?? 0, vb = rm.view_vborder[i] ?? 0;
    let vx = rm.view_xview[i] ?? 0, vy = rm.view_yview[i] ?? 0;
    if (inst.x - vx < hb)
      vx = inst.x - hb;
    else if (vx + vw - inst.x < hb)
      vx = inst.x + hb - vw;
    if (inst.y - vy < vb)
      vy = inst.y - vb;
    else if (vy + vh - inst.y < vb)
      vy = inst.y + vb - vh;
    rm.view_xview[i] = Math.max(0, Math.min(vx, rm.room_width - vw));
    rm.view_yview[i] = Math.max(0, Math.min(vy, rm.room_height - vh));
  }
  /**
   * Draws the room's background layers within the given view rectangle.
   * @param rm - The room
   * @param foreground - Draw only foreground layers (true) or only background layers (false)
   * @param vx - View left (room space)
   * @param vy - View top (room space)
   * @param vw - View width
   * @param vh - View height
   */
  static draw_room_backgrounds(rm, foreground, vx, vy, vw, vh) {
    for (let i = 0; i < rm.background_index.length; i++) {
      if (!rm.background_visible[i])
        continue;
      if ((rm.background_foreground[i] ?? false) !== foreground)
        continue;
      const bg = resource.findByID(rm.background_index[i] ?? -1);
      if (!bg || !bg.texture)
        continue;
      const [cr, cg, cb] = color_to_rgb_normalized(rm.background_color[i] ?? 16777215);
      if (rm.background_stretch[i]) {
        this.batch.add_quad(0, 0, rm.room_width, rm.room_height, 0, 0, 1, 1, cr, cg, cb, this.draw_alpha, bg.texture.texture);
        continue;
      }
      const bx = (rm.background_x[i] ?? 0) + (rm._bg_scroll_x[i] ?? 0);
      const by = (rm.background_y[i] ?? 0) + (rm._bg_scroll_y[i] ?? 0);
      const htiled = rm.background_htiled[i] ?? false;
      const vtiled = rm.background_vtiled[i] ?? false;
      const startx = htiled ? vx - pos_mod(vx - bx, bg.width) : bx;
      const endx = htiled ? vx + vw : bx + bg.width;
      const starty = vtiled ? vy - pos_mod(vy - by, bg.height) : by;
      const endy = vtiled ? vy + vh : by + bg.height;
      for (let yy = starty; yy < endy; yy += bg.height) {
        for (let xx = startx; xx < endx; xx += bg.width) {
          this.batch.add_quad(xx, yy, bg.width, bg.height, 0, 0, 1, 1, cr, cg, cb, this.draw_alpha, bg.texture.texture);
        }
      }
    }
  }
  /**
   * Draws the room's tile layers (back-to-front by depth). Each tile is a
   * sub-rectangle of a background resource drawn at its room position.
   * @param rm - The room
   */
  static draw_room_tiles(rm) {
    const tiles = [...rm.get_tiles()].sort((a, b) => b.depth - a.depth);
    for (const t of tiles) {
      if (!t.visible)
        continue;
      const bg = resource.findByID(t.background);
      if (!bg || !bg.texture)
        continue;
      const u0 = t.left / bg.width, v0 = t.top / bg.height;
      const u1 = (t.left + t.width) / bg.width, v1 = (t.top + t.height) / bg.height;
      const [r, g, b] = color_to_rgb_normalized(16777215);
      this.batch.add_quad(t.x, t.y, t.width * t.xscale, t.height * t.yscale, u0, v0, u1, v1, r, g, b, t.alpha, bg.texture.texture);
    }
  }
  // =========================================================================
  // Text drawing
  // =========================================================================
  /**
   * Draws a text string at the given position using the current font and alignment.
   * @param x - X position
   * @param y - Y position
   * @param text - String to draw
   */
  static draw_text(x, y, text) {
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    const color_css = `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
    const cached = this.font_rend.get_texture(String(text), this.current_font, color_css);
    let dx = x;
    let dy = y;
    if (this.halign === 1)
      dx -= cached.width / 2;
    else if (this.halign === 2)
      dx -= cached.width;
    if (this.valign === 1)
      dy -= cached.height / 2;
    else if (this.valign === 2)
      dy -= cached.height;
    this.batch.add_quad(dx, dy, cached.width, cached.height, 0, 0, 1, 1, 1, 1, 1, this.draw_alpha, cached.entry.texture);
  }
  // =========================================================================
  // Shape drawing
  // =========================================================================
  /**
   * Clears the screen (or current surface) with a solid color.
   * @param col - BGR color integer
   */
  static draw_clear(col) {
    const [r, g, b] = color_to_rgb_normalized(col);
    const gl = this.gl;
    this.batch.flush();
    gl.clearColor(r, g, b, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
  /**
   * Draws a filled or outlined axis-aligned rectangle.
   * @param x1 - Left
   * @param y1 - Top
   * @param x2 - Right
   * @param y2 - Bottom
   * @param outline - True for outline only, false for filled
   */
  static draw_rectangle(x1, y1, x2, y2, outline) {
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    const a = this.draw_alpha;
    const wp = this.tex_mgr.white_pixel;
    if (!outline) {
      this.batch.add_quad(x1, y1, x2 - x1, y2 - y1, 0, 0, 1, 1, r, g, b, a, wp);
    } else {
      const t = 1;
      this.batch.add_quad(x1, y1, x2 - x1, t, 0, 0, 1, 1, r, g, b, a, wp);
      this.batch.add_quad(x1, y2 - t, x2 - x1, t, 0, 0, 1, 1, r, g, b, a, wp);
      this.batch.add_quad(x1, y1 + t, t, y2 - y1 - 2, 0, 0, 1, 1, r, g, b, a, wp);
      this.batch.add_quad(x2 - t, y1 + t, t, y2 - y1 - 2, 0, 0, 1, 1, r, g, b, a, wp);
    }
  }
  /**
   * Draws a filled or outlined circle using a triangle fan approximation.
   * @param cx - Center X
   * @param cy - Center Y
   * @param r_px - Radius in pixels
   * @param outline - True for outline only
   */
  static draw_circle(cx, cy, r_px, outline) {
    const SEGMENTS = 32;
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    const a = this.draw_alpha;
    const wp = this.tex_mgr.white_pixel;
    if (!outline) {
      for (let i = 0; i < SEGMENTS; i++) {
        const a0 = i / SEGMENTS * Math.PI * 2;
        const a1 = (i + 1) / SEGMENTS * Math.PI * 2;
        const x0 = cx + Math.cos(a0) * r_px;
        const y0 = cy + Math.sin(a0) * r_px;
        const x1 = cx + Math.cos(a1) * r_px;
        const y1 = cy + Math.sin(a1) * r_px;
        this.draw_triangle_internal(cx, cy, x0, y0, x1, y1, r, g, b, a, wp);
      }
    } else {
      const thickness = 1;
      for (let i = 0; i < SEGMENTS; i++) {
        const a0 = i / SEGMENTS * Math.PI * 2;
        const a1 = (i + 1) / SEGMENTS * Math.PI * 2;
        const x0 = cx + Math.cos(a0) * r_px;
        const y0 = cy + Math.sin(a0) * r_px;
        const x1 = cx + Math.cos(a1) * r_px;
        const y1 = cy + Math.sin(a1) * r_px;
        this.draw_line_width_internal(x0, y0, x1, y1, thickness, r, g, b, a, wp);
      }
    }
  }
  /**
   * Draws a line between two points.
   * @param x1 - Start X
   * @param y1 - Start Y
   * @param x2 - End X
   * @param y2 - End Y
   */
  static draw_line(x1, y1, x2, y2) {
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    this.draw_line_width_internal(x1, y1, x2, y2, 1, r, g, b, this.draw_alpha, this.tex_mgr.white_pixel);
  }
  /**
   * Draws a line with a specific pixel width.
   * @param x1 - Start X
   * @param y1 - Start Y
   * @param x2 - End X
   * @param y2 - End Y
   * @param w - Line width in pixels
   */
  static draw_line_width(x1, y1, x2, y2, w) {
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    this.draw_line_width_internal(x1, y1, x2, y2, w, r, g, b, this.draw_alpha, this.tex_mgr.white_pixel);
  }
  /**
   * Draws a single point (1×1 pixel) at the given position.
   * @param x - X position
   * @param y - Y position
   */
  static draw_point(x, y) {
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    this.batch.add_quad(x, y, 1, 1, 0, 0, 1, 1, r, g, b, this.draw_alpha, this.tex_mgr.white_pixel);
  }
  /**
   * Draws a filled or outlined triangle.
   * @param x1 - Vertex 1 X
   * @param y1 - Vertex 1 Y
   * @param x2 - Vertex 2 X
   * @param y2 - Vertex 2 Y
   * @param x3 - Vertex 3 X
   * @param y3 - Vertex 3 Y
   * @param outline - True for outline only
   */
  static draw_triangle(x1, y1, x2, y2, x3, y3, outline) {
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    const a = this.draw_alpha;
    const wp = this.tex_mgr.white_pixel;
    if (!outline) {
      this.draw_triangle_internal(x1, y1, x2, y2, x3, y3, r, g, b, a, wp);
    } else {
      this.draw_line_width_internal(x1, y1, x2, y2, 1, r, g, b, a, wp);
      this.draw_line_width_internal(x2, y2, x3, y3, 1, r, g, b, a, wp);
      this.draw_line_width_internal(x3, y3, x1, y1, 1, r, g, b, a, wp);
    }
  }
  /**
   * Draws a filled or outlined ellipse.
   * @param x1 - Bounding box left
   * @param y1 - Bounding box top
   * @param x2 - Bounding box right
   * @param y2 - Bounding box bottom
   * @param outline - True for outline only
   */
  static draw_ellipse(x1, y1, x2, y2, outline) {
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const rx = (x2 - x1) / 2;
    const ry = (y2 - y1) / 2;
    const SEGMENTS = 32;
    const [r, g, b] = color_to_rgb_normalized(this.draw_color);
    const a = this.draw_alpha;
    const wp = this.tex_mgr.white_pixel;
    if (!outline) {
      for (let i = 0; i < SEGMENTS; i++) {
        const a0 = i / SEGMENTS * Math.PI * 2;
        const a1 = (i + 1) / SEGMENTS * Math.PI * 2;
        const px0 = cx + Math.cos(a0) * rx, py0 = cy + Math.sin(a0) * ry;
        const px1 = cx + Math.cos(a1) * rx, py1 = cy + Math.sin(a1) * ry;
        this.draw_triangle_internal(cx, cy, px0, py0, px1, py1, r, g, b, a, wp);
      }
    } else {
      for (let i = 0; i < SEGMENTS; i++) {
        const a0 = i / SEGMENTS * Math.PI * 2;
        const a1 = (i + 1) / SEGMENTS * Math.PI * 2;
        const px0 = cx + Math.cos(a0) * rx, py0 = cy + Math.sin(a0) * ry;
        const px1 = cx + Math.cos(a1) * rx, py1 = cy + Math.sin(a1) * ry;
        this.draw_line_width_internal(px0, py0, px1, py1, 1, r, g, b, a, wp);
      }
    }
  }
  // =========================================================================
  // Internal shape helpers
  // =========================================================================
  /**
   * Draws a triangle as two batch quads (degenerate quad approach).
   * The third quad vertex is the same as vertex 3 making a true triangle.
   */
  static draw_triangle_internal(x0, y0, x1, y1, x2, y2, r, g, b, a, texture) {
    const minX = Math.min(x0, x1, x2);
    const maxX = Math.max(x0, x1, x2);
    const minY = Math.min(y0, y1, y2);
    const maxY = Math.max(y0, y1, y2);
    const w = maxX - minX;
    const h = maxY - minY;
    if (w < 0.5 || h < 0.5)
      return;
    this.batch.add_quad(minX, minY, w, h, 0, 0, 1, 1, r, g, b, a, texture);
  }
  /**
   * Draws a line as a thin rectangular quad aligned to the line direction.
   */
  static draw_line_width_internal(x1, y1, x2, y2, width, r, g, b, a, texture) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len < 1e-3)
      return;
    const nx = -dy / len * (width / 2);
    const ny = dx / len * (width / 2);
    const ax = x1 + nx, ay = y1 + ny;
    const bx = x1 - nx, by = y1 - ny;
    const cx = x2 - nx, cy = y2 - ny;
    const dx2 = x2 + nx, dy2 = y2 + ny;
    const minX = Math.min(ax, bx, cx, dx2);
    const maxX = Math.max(ax, bx, cx, dx2);
    const minY = Math.min(ay, by, cy, dy2);
    const maxY = Math.max(ay, by, cy, dy2);
    this.batch.add_quad(minX, minY, maxX - minX, maxY - minY, 0, 0, 1, 1, r, g, b, a, texture);
  }
  // =========================================================================
  // Canvas accessors
  // =========================================================================
  /** Returns the underlying HTML canvas element. */
  static get_canvas() {
    return this.canvas;
  }
  /** Returns the WebGL 2 context. */
  static get_gl() {
    return this.gl;
  }
  /** Returns the batch renderer (used by advanced rendering). */
  static get_batch() {
    return this.batch;
  }
  /** Flushes the current batch without a program change. Used by shader_system. */
  static flush_batch() {
    this.batch.flush();
  }
  /**
   * Switches back to the default engine shader program and re-uploads projection.
   * Called by shader_reset().
   */
  static restore_default_program() {
    this.gl.useProgram(this.program);
    this.active_proj_loc = this.projection_loc;
    this.upload_projection(this.canvas.width, this.canvas.height);
  }
  /**
   * Uploads the orthographic projection matrix to an arbitrary program's
   * u_projection uniform. Used when activating a user shader.
   * @param prog - The WebGLProgram to upload to
   */
  static upload_projection_to_program(prog) {
    const gl = this.gl;
    const loc = gl.getUniformLocation(prog, "u_projection");
    this.active_proj_loc = loc;
    if (!loc)
      return;
    const w = this.active_surface ? this.active_surface.width : this.canvas.width;
    const h = this.active_surface ? this.active_surface.height : this.canvas.height;
    const matrix = new Float32Array([
      2 / w,
      0,
      0,
      0,
      0,
      -2 / h,
      0,
      0,
      0,
      0,
      1,
      0,
      -1,
      1,
      0,
      1
    ]);
    gl.uniformMatrix4fv(loc, false, matrix);
  }
  /**
   * Uploads a custom projection matrix to the currently active program's
   * u_projection uniform. Used by view_apply() to set room-offset projections.
   * Avoids gl.getParameter() GPU readback by using the cached active location.
   * @param matrix - 16-element column-major Float32Array
   */
  static set_view_projection(matrix) {
    this.gl.uniformMatrix4fv(this.active_proj_loc, false, matrix);
  }
  /** Returns the font renderer. */
  static get_font_renderer() {
    return this.font_rend;
  }
  /**
   * Frees all GPU resources owned by the renderer.
   */
  static destroy() {
    this.batch.flush();
    this.batch.destroy();
    this.tex_mgr.destroy();
    this.font_rend.clear_cache();
    this.gl.deleteProgram(this.program);
  }
};
renderer.projection_loc = null;
renderer.active_proj_loc = null;
renderer.draw_color = 16777215;
renderer.draw_alpha = 1;
renderer.blend_mode = bm_normal;
renderer.current_font = new font_resource("Arial", 16);
renderer.halign = 0;
renderer.valign = 0;
renderer.active_surface = null;

// packages/engine/dist/drawing/sprite.js
var sprite = class extends resource {
  static {
    __name(this, "sprite");
  }
  constructor() {
    super();
    this.frames = [];
    this.xoffset = 0;
    this.yoffset = 0;
    this.width = 0;
    this.height = 0;
    this.mask_left = -1;
    this.mask_top = -1;
    this.mask_right = -1;
    this.mask_bottom = -1;
    this.scale_mode = "stretch";
    this.slice_left = 0;
    this.slice_top = 0;
    this.slice_right = 0;
    this.slice_bottom = 0;
  }
  /**
   * Adds a frame to this sprite.
   * @param frame - The frame to add
   */
  add_frame(frame) {
    this.frames.push(frame);
    if (this.frames.length === 1) {
      this.width = frame.width;
      this.height = frame.height;
    }
  }
  /**
   * Returns the number of frames in this sprite.
   */
  get_number() {
    return this.frames.length;
  }
  /**
   * Returns the frame at the given index, wrapping around if out of range.
   * @param index - Frame index
   * @returns sprite_frame or undefined if the sprite has no frames
   */
  get_frame(index) {
    if (this.frames.length === 0)
      return void 0;
    const i = Math.floor(index) % this.frames.length;
    return this.frames[i < 0 ? i + this.frames.length : i];
  }
};
var _TILE_CAP = 4096;
function sprite_scale_cells(mode, w, h, ox, oy, xscale, yscale, sl, st, sr, sb) {
  const W = w * xscale, H = h * yscale;
  const ax0 = -ox * xscale, ay0 = -oy * yscale;
  if (mode === "tile" && w > 0 && h > 0) {
    const cols = Math.min(_TILE_CAP, Math.ceil(W / w));
    const rows = Math.min(_TILE_CAP, Math.ceil(H / h));
    const cells = [];
    for (let j = 0; j < rows; j++) {
      const cy0 = ay0 + j * h;
      const ch = Math.min(h, H - j * h);
      for (let i = 0; i < cols; i++) {
        const cx0 = ax0 + i * w;
        const cw = Math.min(w, W - i * w);
        cells.push({ dx0: cx0, dy0: cy0, dx1: cx0 + cw, dy1: cy0 + ch, u0: 0, v0: 0, u1: cw / w, v1: ch / h });
      }
    }
    return cells;
  }
  if (mode === "nineslice" && w > 0 && h > 0) {
    let cl = Math.max(0, sl), cr = Math.max(0, sr);
    let ct = Math.max(0, st), cb = Math.max(0, sb);
    if (cl + cr > W && cl + cr > 0) {
      const f = W / (cl + cr);
      cl *= f;
      cr *= f;
    }
    if (ct + cb > H && ct + cb > 0) {
      const f = H / (ct + cb);
      ct *= f;
      cb *= f;
    }
    const ux = [0, sl / w, (w - sr) / w, 1];
    const uy = [0, st / h, (h - sb) / h, 1];
    const dx = [ax0, ax0 + cl, ax0 + W - cr, ax0 + W];
    const dy = [ay0, ay0 + ct, ay0 + H - cb, ay0 + H];
    const cells = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (dx[c + 1] - dx[c] <= 0 || dy[r + 1] - dy[r] <= 0)
          continue;
        cells.push({
          dx0: dx[c],
          dy0: dy[r],
          dx1: dx[c + 1],
          dy1: dy[r + 1],
          u0: ux[c],
          v0: uy[r],
          u1: ux[c + 1],
          v1: uy[r + 1]
        });
      }
    }
    return cells;
  }
  return [{ dx0: ax0, dy0: ay0, dx1: ax0 + W, dy1: ay0 + H, u0: 0, v0: 0, u1: 1, v1: 1 }];
}
__name(sprite_scale_cells, "sprite_scale_cells");
function sprite_get_width(spr) {
  return spr.width;
}
__name(sprite_get_width, "sprite_get_width");
function sprite_get_height(spr) {
  return spr.height;
}
__name(sprite_get_height, "sprite_get_height");
function sprite_get_xoffset(spr) {
  return spr.xoffset;
}
__name(sprite_get_xoffset, "sprite_get_xoffset");
function sprite_get_yoffset(spr) {
  return spr.yoffset;
}
__name(sprite_get_yoffset, "sprite_get_yoffset");
function sprite_get_number(spr) {
  return spr.get_number();
}
__name(sprite_get_number, "sprite_get_number");
var _sprite_names = /* @__PURE__ */ new Map();
function sprite_register_name(name, id) {
  _sprite_names.set(name, id);
}
__name(sprite_register_name, "sprite_register_name");
function sprite_get_index(name) {
  return _sprite_names.get(name) ?? -1;
}
__name(sprite_get_index, "sprite_get_index");
function _sprite_by_id(sprite_index) {
  const res = resource.findByID(sprite_index);
  return res instanceof sprite ? res : null;
}
__name(_sprite_by_id, "_sprite_by_id");
function sprite_resolve(spr) {
  return typeof spr === "number" ? _sprite_by_id(spr) : spr ?? null;
}
__name(sprite_resolve, "sprite_resolve");
function sprite_exists(sprite_index) {
  return _sprite_by_id(sprite_index) !== null;
}
__name(sprite_exists, "sprite_exists");
function sprite_set_offset(sprite_index, xoff, yoff) {
  const s = _sprite_by_id(sprite_index);
  if (s) {
    s.xoffset = xoff;
    s.yoffset = yoff;
  }
}
__name(sprite_set_offset, "sprite_set_offset");
function sprite_duplicate(sprite_index) {
  const src = _sprite_by_id(sprite_index);
  if (!src)
    return -1;
  const dup = new sprite();
  dup.width = src.width;
  dup.height = src.height;
  dup.xoffset = src.xoffset;
  dup.yoffset = src.yoffset;
  for (const f of src.frames)
    dup.add_frame({ texture: f.texture, width: f.width, height: f.height });
  return dup.id;
}
__name(sprite_duplicate, "sprite_duplicate");
async function sprite_add(fname, imgnumb = 1, removeback = false, smooth = false, xorig = 0, yorig = 0) {
  const count = Math.max(1, Math.floor(imgnumb));
  try {
    if (count === 1 && !removeback) {
      const tex = await renderer.tex_mgr.load(fname, smooth);
      const spr2 = new sprite();
      spr2.xoffset = xorig;
      spr2.yoffset = yorig;
      spr2.add_frame({ texture: tex, width: tex.width, height: tex.height });
      return spr2.id;
    }
    const img = await _load_image_element(fname);
    const fw = Math.max(1, Math.floor(img.width / count));
    const fh = img.height;
    const spr = new sprite();
    spr.xoffset = xorig;
    spr.yoffset = yorig;
    for (let i = 0; i < count; i++) {
      const canvas = document.createElement("canvas");
      canvas.width = fw;
      canvas.height = fh;
      const ctx = canvas.getContext("2d");
      if (!ctx)
        continue;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, i * fw, 0, fw, fh, 0, 0, fw, fh);
      if (removeback)
        _remove_background(ctx, fw, fh);
      const tex = renderer.tex_mgr.from_canvas(canvas, smooth);
      spr.add_frame({ texture: tex, width: fw, height: fh });
    }
    return spr.frames.length > 0 ? spr.id : -1;
  } catch {
    return -1;
  }
}
__name(sprite_add, "sprite_add");
function _load_image_element(url) {
  return new Promise((resolve, reject) => {
    const im = new Image();
    im.onload = () => resolve(im);
    im.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    im.src = url;
  });
}
__name(_load_image_element, "_load_image_element");
function _remove_background(ctx, w, h) {
  const image = ctx.getImageData(0, 0, w, h);
  const p = image.data;
  const base = (h - 1) * w * 4;
  const kr = p[base] ?? 0, kg = p[base + 1] ?? 0, kb = p[base + 2] ?? 0;
  for (let i = 0; i < p.length; i += 4) {
    if (p[i] === kr && p[i + 1] === kg && p[i + 2] === kb)
      p[i + 3] = 0;
  }
  ctx.putImageData(image, 0, 0);
}
__name(_remove_background, "_remove_background");

// packages/engine/dist/core/gm_object.js
var gm_object = class extends instance {
  static {
    __name(this, "gm_object");
  }
  /**
   * Applies this object's static metadata defaults to the new instance.
   * @param room - The room this instance belongs to
   */
  constructor(room2) {
    super(room2);
    const cls = this.constructor;
    this.solid = cls.solid;
    this.visible = cls.visible;
    this.persistent = cls.persistent;
    this.depth = cls.depth;
    if (cls.sprite)
      this.sprite_index = sprite_get_index(cls.sprite);
    else if (cls.default_sprite)
      this.sprite_index = cls.default_sprite.id;
    if (cls.physics) {
      this.phy_request(cls.physics_shape, cls.physics_density, cls.physics_restitution, cls.physics_friction, cls.physics_sensor);
    }
  }
  /**
   * Returns the object name. Falls back to the constructor name if not set.
   */
  static get_name() {
    return this.object_name || this.name;
  }
  /**
   * Checks whether this object type is an ancestor (direct or indirect) of another.
   * @param child - The object type to test
   * @returns True if this class is somewhere in child's prototype chain
   */
  static is_ancestor_of(child) {
    let current = child?.parent;
    const seen = /* @__PURE__ */ new Set();
    while (current != null) {
      if (current === this)
        return true;
      if (seen.has(current))
        break;
      seen.add(current);
      current = current.parent;
    }
    return false;
  }
  /**
   * Called once when the instance is created. Override in subclasses.
   */
  on_create() {
    const cls = this.constructor;
    if (this.sprite_index === -1 && cls.default_sprite !== null) {
      this.sprite_index = cls.default_sprite.id;
    }
  }
};
gm_object.default_sprite = null;
gm_object.parent = null;
gm_object.object_name = "";
gm_object.solid = false;
gm_object.visible = true;
gm_object.persistent = false;
gm_object.depth = 0;
gm_object.sprite = null;
gm_object.physics = false;
gm_object.physics_shape = "box";
gm_object.physics_density = 0.5;
gm_object.physics_restitution = 0.1;
gm_object.physics_friction = 0.2;
gm_object.physics_sensor = false;
function object_exists(obj) {
  return obj != null;
}
__name(object_exists, "object_exists");
function object_get_name(obj) {
  return obj.get_name();
}
__name(object_get_name, "object_get_name");
function object_get_sprite(obj) {
  return obj.default_sprite;
}
__name(object_get_sprite, "object_get_sprite");
function object_get_parent(obj) {
  return obj.parent;
}
__name(object_get_parent, "object_get_parent");
function object_is_ancestor(obj, parent) {
  return parent.is_ancestor_of(obj);
}
__name(object_is_ancestor, "object_is_ancestor");
var _object_names = /* @__PURE__ */ new Map();
function object_register_name(name, obj) {
  _object_names.set(name, obj);
}
__name(object_register_name, "object_register_name");
function object_get(name) {
  return _object_names.get(name);
}
__name(object_get, "object_get");

// packages/engine/dist/core/timeline.js
var _timelines = /* @__PURE__ */ new Map();
var _next_timeline_id = 1;
function _compute_end(tl) {
  return tl.moments.length > 0 ? tl.moments[tl.moments.length - 1].step : 0;
}
__name(_compute_end, "_compute_end");
function timeline_create() {
  const id = _next_timeline_id++;
  _timelines.set(id, { moments: [], pos: 0, speed: 1, loop: false, playing: false, end_step: 0 });
  return id;
}
__name(timeline_create, "timeline_create");
function timeline_delete(timeline_id) {
  _timelines.delete(timeline_id);
}
__name(timeline_delete, "timeline_delete");
function timeline_exists(timeline_id) {
  return _timelines.has(timeline_id);
}
__name(timeline_exists, "timeline_exists");
function timeline_moment_add(timeline_id, step, cb) {
  const tl = _timelines.get(timeline_id);
  if (!tl)
    return;
  tl.moments.push({ step, cb });
  tl.moments.sort((a, b) => a.step - b.step);
  tl.end_step = _compute_end(tl);
}
__name(timeline_moment_add, "timeline_moment_add");
function timeline_moment_clear(timeline_id, step) {
  const tl = _timelines.get(timeline_id);
  if (!tl)
    return;
  tl.moments = tl.moments.filter((m) => m.step !== step);
  tl.end_step = _compute_end(tl);
}
__name(timeline_moment_clear, "timeline_moment_clear");
function timeline_get_moment_count(timeline_id) {
  return _timelines.get(timeline_id)?.moments.length ?? 0;
}
__name(timeline_get_moment_count, "timeline_get_moment_count");
function timeline_set_speed(timeline_id, speed) {
  const tl = _timelines.get(timeline_id);
  if (tl)
    tl.speed = speed;
}
__name(timeline_set_speed, "timeline_set_speed");
function timeline_set_loop(timeline_id, loop) {
  const tl = _timelines.get(timeline_id);
  if (tl)
    tl.loop = loop;
}
__name(timeline_set_loop, "timeline_set_loop");
function timeline_play(timeline_id) {
  const tl = _timelines.get(timeline_id);
  if (tl)
    tl.playing = true;
}
__name(timeline_play, "timeline_play");
function timeline_pause(timeline_id) {
  const tl = _timelines.get(timeline_id);
  if (tl)
    tl.playing = false;
}
__name(timeline_pause, "timeline_pause");
function timeline_stop(timeline_id) {
  const tl = _timelines.get(timeline_id);
  if (!tl)
    return;
  tl.playing = false;
  tl.pos = 0;
}
__name(timeline_stop, "timeline_stop");
function timeline_set_position(timeline_id, pos) {
  const tl = _timelines.get(timeline_id);
  if (tl)
    tl.pos = pos;
}
__name(timeline_set_position, "timeline_set_position");
function timeline_get_position(timeline_id) {
  return _timelines.get(timeline_id)?.pos ?? 0;
}
__name(timeline_get_position, "timeline_get_position");
function timeline_step(timeline_id) {
  const tl = _timelines.get(timeline_id);
  if (!tl || !tl.playing || tl.moments.length === 0)
    return false;
  const prev_pos = tl.pos;
  const new_pos = tl.pos + tl.speed;
  for (const m of tl.moments) {
    if (m.step > prev_pos && m.step <= new_pos) {
      m.cb();
    }
  }
  tl.pos = new_pos;
  if (tl.pos >= tl.end_step) {
    if (tl.loop) {
      tl.pos = tl.pos % (tl.end_step || 1);
    } else {
      tl.pos = tl.end_step;
      tl.playing = false;
      return false;
    }
  }
  return true;
}
__name(timeline_step, "timeline_step");
function timeline_step_all() {
  for (const id of _timelines.keys()) {
    timeline_step(id);
  }
}
__name(timeline_step_all, "timeline_step_all");
var _timeline_names = /* @__PURE__ */ new Map();
function timeline_register_name(name, id) {
  _timeline_names.set(name, id);
}
__name(timeline_register_name, "timeline_register_name");
function timeline_get_index(name) {
  return _timeline_names.get(name) ?? -1;
}
__name(timeline_get_index, "timeline_get_index");

// packages/engine/dist/drawing/background.js
var background = class extends resource {
  static {
    __name(this, "background");
  }
  constructor() {
    super();
    this.texture = null;
    this.width = 0;
    this.height = 0;
    this.tile_h = false;
    this.tile_v = false;
    this.smooth = false;
  }
  /**
   * Sets the texture for this background.
   * @param texture - The texture entry to use
   */
  set_texture(texture) {
    this.texture = texture;
    this.width = texture.width;
    this.height = texture.height;
  }
};
function background_get_width(bg) {
  return bg.width;
}
__name(background_get_width, "background_get_width");
function background_get_height(bg) {
  return bg.height;
}
__name(background_get_height, "background_get_height");

// packages/engine/dist/drawing/shader_system.js
var user_shader = class {
  static {
    __name(this, "user_shader");
  }
  /**
   * @param vs_source - Vertex shader GLSL source (#version 300 es required)
   * @param fs_source - Fragment shader GLSL source
   */
  constructor(vs_source, fs_source) {
    this.internal = new shader_program(renderer.get_gl(), vs_source, fs_source);
  }
  /**
   * Frees the shader's GPU resources.
   * Do not use the shader after calling destroy().
   */
  destroy() {
    this.internal.destroy();
  }
};
var _active_shader = null;
function shader_set(shader) {
  renderer.flush_batch();
  _active_shader = shader;
  renderer.get_gl().useProgram(shader.internal.program);
  renderer.upload_projection_to_program(shader.internal.program);
}
__name(shader_set, "shader_set");
function shader_reset() {
  if (_active_shader === null)
    return;
  renderer.flush_batch();
  _active_shader = null;
  renderer.restore_default_program();
}
__name(shader_reset, "shader_reset");
function shader_current() {
  return _active_shader;
}
__name(shader_current, "shader_current");
function shader_get_uniform(shader, name) {
  return shader.internal.get_uniform(name);
}
__name(shader_get_uniform, "shader_get_uniform");
function shader_set_uniform_f(location, val) {
  renderer.get_gl().uniform1f(location, val);
}
__name(shader_set_uniform_f, "shader_set_uniform_f");
function shader_set_uniform_f2(location, x, y) {
  renderer.get_gl().uniform2f(location, x, y);
}
__name(shader_set_uniform_f2, "shader_set_uniform_f2");
function shader_set_uniform_f3(location, x, y, z) {
  renderer.get_gl().uniform3f(location, x, y, z);
}
__name(shader_set_uniform_f3, "shader_set_uniform_f3");
function shader_set_uniform_f4(location, x, y, z, w) {
  renderer.get_gl().uniform4f(location, x, y, z, w);
}
__name(shader_set_uniform_f4, "shader_set_uniform_f4");
function shader_set_uniform_i(location, val) {
  renderer.get_gl().uniform1i(location, val);
}
__name(shader_set_uniform_i, "shader_set_uniform_i");
function shader_set_uniform_i2(location, x, y) {
  renderer.get_gl().uniform2i(location, x, y);
}
__name(shader_set_uniform_i2, "shader_set_uniform_i2");
function shader_set_uniform_f_array(location, values) {
  renderer.get_gl().uniform1fv(location, values);
}
__name(shader_set_uniform_f_array, "shader_set_uniform_f_array");
function shader_set_uniform_matrix(location, matrix, transpose = false) {
  renderer.get_gl().uniformMatrix4fv(location, transpose, matrix);
}
__name(shader_set_uniform_matrix, "shader_set_uniform_matrix");

// packages/engine/dist/drawing/view.js
function make_default_view(port_w = 800, port_h = 600) {
  return {
    enabled: false,
    x: 0,
    y: 0,
    w: port_w,
    h: port_h,
    port_x: 0,
    port_y: 0,
    port_w,
    port_h,
    angle: 0
  };
}
__name(make_default_view, "make_default_view");
var MAX_VIEWS = 8;
var _views = Array.from({ length: MAX_VIEWS }, () => make_default_view());
function _get_view(view_index) {
  const v = _views[view_index];
  if (!v)
    throw new Error(`view: index out of range (0\u2013${MAX_VIEWS - 1})`);
  return v;
}
__name(_get_view, "_get_view");
function view_get(view_index) {
  return _get_view(view_index);
}
__name(view_get, "view_get");
function view_set_enabled(view_index, enabled) {
  _get_view(view_index).enabled = enabled;
}
__name(view_set_enabled, "view_set_enabled");
function view_set_position(view_index, x, y) {
  const v = _get_view(view_index);
  v.x = x;
  v.y = y;
}
__name(view_set_position, "view_set_position");
function view_set_size(view_index, w, h) {
  const v = _get_view(view_index);
  v.w = w;
  v.h = h;
}
__name(view_set_size, "view_set_size");
function view_set_port(view_index, px, py, pw, ph) {
  Object.assign(_get_view(view_index), { port_x: px, port_y: py, port_w: pw, port_h: ph });
}
__name(view_set_port, "view_set_port");
function view_set_angle(view_index, angle) {
  _get_view(view_index).angle = angle;
}
__name(view_set_angle, "view_set_angle");
function view_apply(view_index) {
  const v = _get_view(view_index);
  const gl = renderer.get_gl();
  renderer.flush_batch();
  gl.viewport(v.port_x, v.port_y, v.port_w, v.port_h);
  const scaleX = 2 / v.w;
  const scaleY = -2 / v.h;
  const transX = -1 - v.x * scaleX;
  const transY = 1 - v.y * scaleY;
  const matrix = new Float32Array([
    scaleX,
    0,
    0,
    0,
    0,
    scaleY,
    0,
    0,
    0,
    0,
    1,
    0,
    transX,
    transY,
    0,
    1
  ]);
  renderer.set_view_projection(matrix);
}
__name(view_apply, "view_apply");
function camera_set_view_pos(x, y) {
  const v = _get_view(0);
  v.x = x;
  v.y = y;
  v.enabled = true;
}
__name(camera_set_view_pos, "camera_set_view_pos");
function camera_set_view_size(w, h) {
  const v = _get_view(0);
  v.w = w;
  v.h = h;
  v.enabled = true;
}
__name(camera_set_view_size, "camera_set_view_size");
function view_get_x(view_index = 0) {
  return _get_view(view_index).x;
}
__name(view_get_x, "view_get_x");
function view_get_y(view_index = 0) {
  return _get_view(view_index).y;
}
__name(view_get_y, "view_get_y");

// packages/engine/dist/drawing/draw_functions.js
function draw_set_color(col) {
  renderer.set_color(col);
}
__name(draw_set_color, "draw_set_color");
function draw_get_color() {
  return renderer.get_color();
}
__name(draw_get_color, "draw_get_color");
var draw_set_colour = draw_set_color;
var draw_get_colour = draw_get_color;
function draw_set_alpha(alpha) {
  renderer.set_alpha(alpha);
}
__name(draw_set_alpha, "draw_set_alpha");
function draw_get_alpha() {
  return renderer.get_alpha();
}
__name(draw_get_alpha, "draw_get_alpha");
function draw_clear(col) {
  renderer.draw_clear(col);
}
__name(draw_clear, "draw_clear");
function draw_set_blend_mode(mode) {
  renderer.set_blend_mode(mode);
}
__name(draw_set_blend_mode, "draw_set_blend_mode");
function draw_sprite(spr, subimg, x, y) {
  const s = sprite_resolve(spr);
  if (s)
    renderer.draw_sprite(s, subimg, x, y);
}
__name(draw_sprite, "draw_sprite");
function draw_sprite_ext(spr, subimg, x, y, xscale, yscale, rot, color, alpha) {
  const s = sprite_resolve(spr);
  if (s)
    renderer.draw_sprite_ext(s, subimg, x, y, xscale, yscale, rot, color, alpha);
}
__name(draw_sprite_ext, "draw_sprite_ext");
function draw_sprite_part(spr, subimg, left, top, width, height, x, y) {
  const s = sprite_resolve(spr);
  if (s)
    renderer.draw_sprite_part(s, subimg, left, top, width, height, x, y);
}
__name(draw_sprite_part, "draw_sprite_part");
function draw_sprite_stretched(spr, subimg, x, y, w, h) {
  const s = sprite_resolve(spr);
  if (s)
    renderer.draw_sprite_stretched(s, subimg, x, y, w, h);
}
__name(draw_sprite_stretched, "draw_sprite_stretched");
function draw_background(bg, x, y) {
  renderer.draw_background(bg, x, y);
}
__name(draw_background, "draw_background");
function draw_background_ext(bg, x, y, xscale, yscale, rot, color, alpha) {
  renderer.draw_background_ext(bg, x, y, xscale, yscale, rot, color, alpha);
}
__name(draw_background_ext, "draw_background_ext");
function draw_background_stretched(bg, x, y, w, h) {
  renderer.draw_background_stretched(bg, x, y, w, h);
}
__name(draw_background_stretched, "draw_background_stretched");
function draw_background_tiled(bg, x, y, tile_x, tile_y) {
  renderer.draw_background_tiled(bg, x, y, tile_x, tile_y);
}
__name(draw_background_tiled, "draw_background_tiled");
function draw_point(x, y) {
  renderer.draw_point(x, y);
}
__name(draw_point, "draw_point");
function draw_line(x1, y1, x2, y2) {
  renderer.draw_line(x1, y1, x2, y2);
}
__name(draw_line, "draw_line");
function draw_line_width(x1, y1, x2, y2, w) {
  renderer.draw_line_width(x1, y1, x2, y2, w);
}
__name(draw_line_width, "draw_line_width");
function draw_rectangle(x1, y1, x2, y2, outline) {
  renderer.draw_rectangle(x1, y1, x2, y2, outline);
}
__name(draw_rectangle, "draw_rectangle");
function draw_circle(x, y, r, outline) {
  renderer.draw_circle(x, y, r, outline);
}
__name(draw_circle, "draw_circle");
function draw_ellipse(x1, y1, x2, y2, outline) {
  renderer.draw_ellipse(x1, y1, x2, y2, outline);
}
__name(draw_ellipse, "draw_ellipse");
function draw_triangle(x1, y1, x2, y2, x3, y3, outline) {
  renderer.draw_triangle(x1, y1, x2, y2, x3, y3, outline);
}
__name(draw_triangle, "draw_triangle");
function draw_text(x, y, text) {
  renderer.draw_text(x, y, String(text));
}
__name(draw_text, "draw_text");
function draw_set_font(fnt) {
  const resolved = typeof fnt === "string" ? font_get(fnt) : fnt;
  if (resolved)
    renderer.set_font(resolved);
}
__name(draw_set_font, "draw_set_font");
function draw_set_halign(halign) {
  renderer.set_halign(halign);
}
__name(draw_set_halign, "draw_set_halign");
function draw_set_valign(valign) {
  renderer.set_valign(valign);
}
__name(draw_set_valign, "draw_set_valign");
function string_width(text) {
  return renderer.get_font_renderer().measure_width(text, renderer.get_current_font());
}
__name(string_width, "string_width");
function string_height() {
  return renderer.get_font_renderer().measure_height(renderer.get_current_font());
}
__name(string_height, "string_height");
function surface_create(w, h) {
  return renderer.surface_create(w, h);
}
__name(surface_create, "surface_create");
function surface_set_target(surf) {
  renderer.surface_set_target(surf);
}
__name(surface_set_target, "surface_set_target");
function surface_reset_target() {
  renderer.surface_reset_target();
}
__name(surface_reset_target, "surface_reset_target");
function surface_free(surf) {
  renderer.surface_free(surf);
}
__name(surface_free, "surface_free");
function surface_exists(surf) {
  return surf.valid;
}
__name(surface_exists, "surface_exists");
function surface_get_width(surf) {
  return surf.width;
}
__name(surface_get_width, "surface_get_width");
function surface_get_height(surf) {
  return surf.height;
}
__name(surface_get_height, "surface_get_height");
function draw_surface(surf, x, y) {
  renderer.draw_surface(surf, x, y);
}
__name(draw_surface, "draw_surface");

// packages/engine/dist/input/io.js
function io_clear() {
  keyboard_manager.clear_all();
  mouse_manager.clear_all();
}
__name(io_clear, "io_clear");

// packages/engine/dist/utils/encoding.js
function _utf8(text) {
  return new TextEncoder().encode(text);
}
__name(_utf8, "_utf8");
function base64_encode(text) {
  const bytes = _utf8(text);
  let bin = "";
  for (let i = 0; i < bytes.length; i++)
    bin += String.fromCharCode(bytes[i]);
  if (typeof btoa === "function")
    return btoa(bin);
  return globalThis.Buffer.from(bin, "binary").toString("base64");
}
__name(base64_encode, "base64_encode");
function base64_decode(text) {
  let bin;
  if (typeof atob === "function")
    bin = atob(text);
  else
    bin = globalThis.Buffer.from(text, "base64").toString("binary");
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}
__name(base64_decode, "base64_decode");
function _hex(bytes) {
  let s = "";
  for (let i = 0; i < bytes.length; i++)
    s += bytes[i].toString(16).padStart(2, "0");
  return s;
}
__name(_hex, "_hex");
function _sha1(data) {
  const ml = data.length * 8;
  const blocks = Math.floor((data.length + 8) / 64) + 1;
  const msg = new Uint8Array(blocks * 64);
  msg.set(data);
  msg[data.length] = 128;
  const dv = new DataView(msg.buffer);
  dv.setUint32(msg.length - 4, ml >>> 0, false);
  dv.setUint32(msg.length - 8, Math.floor(ml / 4294967296), false);
  let h0 = 1732584193, h1 = 4023233417, h2 = 2562383102, h3 = 271733878, h4 = 3285377520;
  const w = new Uint32Array(80);
  for (let i = 0; i < msg.length; i += 64) {
    for (let j = 0; j < 16; j++)
      w[j] = dv.getUint32(i + j * 4, false);
    for (let j = 16; j < 80; j++) {
      const v = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
      w[j] = v << 1 | v >>> 31;
    }
    let a = h0, b = h1, c = h2, d = h3, e = h4;
    for (let j = 0; j < 80; j++) {
      let f, k;
      if (j < 20) {
        f = b & c | ~b & d;
        k = 1518500249;
      } else if (j < 40) {
        f = b ^ c ^ d;
        k = 1859775393;
      } else if (j < 60) {
        f = b & c | b & d | c & d;
        k = 2400959708;
      } else {
        f = b ^ c ^ d;
        k = 3395469782;
      }
      const t = (a << 5 | a >>> 27) + f + e + k + w[j] >>> 0;
      e = d;
      d = c;
      c = b << 30 | b >>> 2;
      b = a;
      a = t;
    }
    h0 = h0 + a >>> 0;
    h1 = h1 + b >>> 0;
    h2 = h2 + c >>> 0;
    h3 = h3 + d >>> 0;
    h4 = h4 + e >>> 0;
  }
  const out = new Uint8Array(20);
  const odv = new DataView(out.buffer);
  odv.setUint32(0, h0, false);
  odv.setUint32(4, h1, false);
  odv.setUint32(8, h2, false);
  odv.setUint32(12, h3, false);
  odv.setUint32(16, h4, false);
  return out;
}
__name(_sha1, "_sha1");
function sha1_string_utf8(text) {
  return _hex(_sha1(_utf8(text)));
}
__name(sha1_string_utf8, "sha1_string_utf8");
function _md5(data) {
  const ml = data.length * 8;
  const blocks = Math.floor((data.length + 8) / 64) + 1;
  const msg = new Uint8Array(blocks * 64);
  msg.set(data);
  msg[data.length] = 128;
  const dv = new DataView(msg.buffer);
  dv.setUint32(msg.length - 8, ml >>> 0, true);
  dv.setUint32(msg.length - 4, Math.floor(ml / 4294967296), true);
  const S = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
  const K = new Uint32Array(64);
  for (let i = 0; i < 64; i++)
    K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296) >>> 0;
  const rol = /* @__PURE__ */ __name((x, c) => x << c | x >>> 32 - c, "rol");
  let a0 = 1732584193, b0 = 4023233417, c0 = 2562383102, d0 = 271733878;
  const m = new Uint32Array(16);
  for (let off = 0; off < msg.length; off += 64) {
    for (let j = 0; j < 16; j++)
      m[j] = dv.getUint32(off + j * 4, true);
    let a = a0, b = b0, c = c0, d = d0;
    for (let i = 0; i < 64; i++) {
      let f, g;
      if (i < 16) {
        f = b & c | ~b & d;
        g = i;
      } else if (i < 32) {
        f = d & b | ~d & c;
        g = 5 * i + 1 & 15;
      } else if (i < 48) {
        f = b ^ c ^ d;
        g = 3 * i + 5 & 15;
      } else {
        f = c ^ (b | ~d);
        g = 7 * i & 15;
      }
      f = f + a + K[i] + m[g] >>> 0;
      a = d;
      d = c;
      c = b;
      b = b + rol(f, S[Math.floor(i / 16) * 4 + (i & 3)]) >>> 0;
    }
    a0 = a0 + a >>> 0;
    b0 = b0 + b >>> 0;
    c0 = c0 + c >>> 0;
    d0 = d0 + d >>> 0;
  }
  const out = new Uint8Array(16);
  const odv = new DataView(out.buffer);
  odv.setUint32(0, a0, true);
  odv.setUint32(4, b0, true);
  odv.setUint32(8, c0, true);
  odv.setUint32(12, d0, true);
  return out;
}
__name(_md5, "_md5");
function md5_string_utf8(text) {
  return _hex(_md5(_utf8(text)));
}
__name(md5_string_utf8, "md5_string_utf8");
function clipboard_set_text(text) {
  const nav = typeof navigator !== "undefined" ? navigator : void 0;
  if (nav?.clipboard?.writeText)
    nav.clipboard.writeText(text);
}
__name(clipboard_set_text, "clipboard_set_text");
async function clipboard_get_text() {
  const nav = typeof navigator !== "undefined" ? navigator : void 0;
  if (nav?.clipboard?.readText)
    return nav.clipboard.readText();
  return "";
}
__name(clipboard_get_text, "clipboard_get_text");
function clipboard_has_text() {
  const nav = typeof navigator !== "undefined" ? navigator : void 0;
  return !!nav?.clipboard?.readText;
}
__name(clipboard_has_text, "clipboard_has_text");

// packages/engine/dist/data/ds_list.js
var _lists = /* @__PURE__ */ new Map();
var _next_id = 0;
function _get(id) {
  const list = _lists.get(id);
  if (!list)
    throw new Error(`ds_list: invalid id ${id}`);
  return list;
}
__name(_get, "_get");
function ds_list_create() {
  const id = _next_id++;
  _lists.set(id, []);
  return id;
}
__name(ds_list_create, "ds_list_create");
function ds_list_destroy(id) {
  _lists.delete(id);
}
__name(ds_list_destroy, "ds_list_destroy");
function ds_list_write(id) {
  return JSON.stringify(_lists.get(id) ?? []);
}
__name(ds_list_write, "ds_list_write");
function ds_list_read(id, str) {
  const list = _lists.get(id);
  if (!list)
    return;
  list.length = 0;
  try {
    const arr = JSON.parse(str);
    if (Array.isArray(arr))
      for (const v of arr)
        list.push(v);
  } catch {
  }
}
__name(ds_list_read, "ds_list_read");
function ds_list_add(id, val) {
  _get(id).push(val);
}
__name(ds_list_add, "ds_list_add");
function ds_list_insert(id, pos, val) {
  _get(id).splice(pos, 0, val);
}
__name(ds_list_insert, "ds_list_insert");
function ds_list_find_value(id, pos) {
  return _get(id)[pos];
}
__name(ds_list_find_value, "ds_list_find_value");
function ds_list_find_index(id, val) {
  return _get(id).indexOf(val);
}
__name(ds_list_find_index, "ds_list_find_index");
function ds_list_replace(id, pos, val) {
  const list = _get(id);
  if (pos >= 0 && pos < list.length)
    list[pos] = val;
}
__name(ds_list_replace, "ds_list_replace");
function ds_list_delete(id, pos) {
  _get(id).splice(pos, 1);
}
__name(ds_list_delete, "ds_list_delete");
function ds_list_size(id) {
  return _get(id).length;
}
__name(ds_list_size, "ds_list_size");
function ds_list_empty(id) {
  return _get(id).length === 0;
}
__name(ds_list_empty, "ds_list_empty");
function ds_list_clear(id) {
  _get(id).length = 0;
}
__name(ds_list_clear, "ds_list_clear");
function ds_list_copy(src, dst) {
  const src_list = _get(src);
  const dst_list = _get(dst);
  dst_list.length = 0;
  for (const v of src_list)
    dst_list.push(v);
}
__name(ds_list_copy, "ds_list_copy");
function ds_list_sort(id, ascending) {
  const list = _get(id);
  list.sort((a, b) => {
    if (a < b)
      return ascending ? -1 : 1;
    if (a > b)
      return ascending ? 1 : -1;
    return 0;
  });
}
__name(ds_list_sort, "ds_list_sort");
function ds_list_shuffle(id) {
  const list = _get(id);
  for (let i = list.length - 1; i > 0; i--) {
    const j = irandom(i);
    [list[i], list[j]] = [list[j], list[i]];
  }
}
__name(ds_list_shuffle, "ds_list_shuffle");
function ds_list_exists(id) {
  return _lists.has(id);
}
__name(ds_list_exists, "ds_list_exists");

// packages/engine/dist/data/ds_map.js
var _maps = /* @__PURE__ */ new Map();
var _next_id2 = 0;
function _get2(id) {
  const m = _maps.get(id);
  if (!m)
    throw new Error(`ds_map: invalid id ${id}`);
  return m;
}
__name(_get2, "_get");
function ds_map_create() {
  const id = _next_id2++;
  _maps.set(id, /* @__PURE__ */ new Map());
  return id;
}
__name(ds_map_create, "ds_map_create");
function ds_map_destroy(id) {
  _maps.delete(id);
}
__name(ds_map_destroy, "ds_map_destroy");
function ds_map_write(id) {
  const m = _maps.get(id);
  return JSON.stringify(m ? Array.from(m.entries()) : []);
}
__name(ds_map_write, "ds_map_write");
function ds_map_read(id, str) {
  const m = _maps.get(id);
  if (!m)
    return;
  m.clear();
  try {
    const e = JSON.parse(str);
    if (Array.isArray(e))
      for (const [k, v] of e)
        m.set(k, v);
  } catch {
  }
}
__name(ds_map_read, "ds_map_read");
function ds_map_add(id, key, val) {
  const m = _get2(id);
  if (!m.has(key))
    m.set(key, val);
}
__name(ds_map_add, "ds_map_add");
function ds_map_set(id, key, val) {
  _get2(id).set(key, val);
}
__name(ds_map_set, "ds_map_set");
function ds_map_find_value(id, key) {
  return _get2(id).get(key);
}
__name(ds_map_find_value, "ds_map_find_value");
function ds_map_exists(id, key) {
  return _get2(id).has(key);
}
__name(ds_map_exists, "ds_map_exists");
function ds_map_delete(id, key) {
  _get2(id).delete(key);
}
__name(ds_map_delete, "ds_map_delete");
function ds_map_size(id) {
  return _get2(id).size;
}
__name(ds_map_size, "ds_map_size");
function ds_map_empty(id) {
  return _get2(id).size === 0;
}
__name(ds_map_empty, "ds_map_empty");
function ds_map_clear(id) {
  _get2(id).clear();
}
__name(ds_map_clear, "ds_map_clear");
function ds_map_copy(src, dst) {
  const src_map = _get2(src);
  const dst_map = _get2(dst);
  dst_map.clear();
  for (const [k, v] of src_map)
    dst_map.set(k, v);
}
__name(ds_map_copy, "ds_map_copy");
function ds_map_find_first(id) {
  return _get2(id).keys().next().value;
}
__name(ds_map_find_first, "ds_map_find_first");
function ds_map_find_next(id, key) {
  const keys = Array.from(_get2(id).keys());
  const idx = keys.indexOf(key);
  return idx >= 0 && idx + 1 < keys.length ? keys[idx + 1] : void 0;
}
__name(ds_map_find_next, "ds_map_find_next");
function ds_map_find_last(id) {
  const keys = Array.from(_get2(id).keys());
  return keys.length > 0 ? keys[keys.length - 1] : void 0;
}
__name(ds_map_find_last, "ds_map_find_last");
function ds_map_find_previous(id, key) {
  const keys = Array.from(_get2(id).keys());
  const idx = keys.indexOf(key);
  return idx > 0 ? keys[idx - 1] : void 0;
}
__name(ds_map_find_previous, "ds_map_find_previous");
function ds_map_exists_id(id) {
  return _maps.has(id);
}
__name(ds_map_exists_id, "ds_map_exists_id");

// packages/engine/dist/data/ds_grid.js
var _grids2 = /* @__PURE__ */ new Map();
var _next_id3 = 0;
function _get3(id) {
  const g = _grids2.get(id);
  if (!g)
    throw new Error(`ds_grid: invalid id ${id}`);
  return g;
}
__name(_get3, "_get");
function _idx2(g, x, y) {
  return y * g.w + x;
}
__name(_idx2, "_idx");
function _in_bounds(g, x, y) {
  return x >= 0 && x < g.w && y >= 0 && y < g.h;
}
__name(_in_bounds, "_in_bounds");
function ds_grid_create(w, h) {
  const id = _next_id3++;
  _grids2.set(id, { w, h, data: new Array(w * h).fill(0) });
  return id;
}
__name(ds_grid_create, "ds_grid_create");
function ds_grid_destroy(id) {
  _grids2.delete(id);
}
__name(ds_grid_destroy, "ds_grid_destroy");
function ds_grid_write(id) {
  const g = _grids2.get(id);
  return JSON.stringify(g ? { w: g.w, h: g.h, data: g.data } : null);
}
__name(ds_grid_write, "ds_grid_write");
function ds_grid_read(id, str) {
  const g = _grids2.get(id);
  if (!g)
    return;
  try {
    const o = JSON.parse(str);
    if (o && typeof o.w === "number" && Array.isArray(o.data)) {
      g.w = o.w;
      g.h = o.h;
      g.data = o.data;
    }
  } catch {
  }
}
__name(ds_grid_read, "ds_grid_read");
function ds_grid_get(id, x, y) {
  const g = _get3(id);
  if (!_in_bounds(g, x, y))
    return 0;
  return g.data[_idx2(g, x, y)];
}
__name(ds_grid_get, "ds_grid_get");
function ds_grid_set(id, x, y, val) {
  const g = _get3(id);
  if (!_in_bounds(g, x, y))
    return;
  g.data[_idx2(g, x, y)] = val;
}
__name(ds_grid_set, "ds_grid_set");
function ds_grid_add(id, x, y, val) {
  const g = _get3(id);
  if (!_in_bounds(g, x, y))
    return;
  const i = _idx2(g, x, y);
  g.data[i] = g.data[i] + val;
}
__name(ds_grid_add, "ds_grid_add");
function ds_grid_multiply(id, x, y, factor) {
  const g = _get3(id);
  if (!_in_bounds(g, x, y))
    return;
  const i = _idx2(g, x, y);
  g.data[i] = g.data[i] * factor;
}
__name(ds_grid_multiply, "ds_grid_multiply");
function ds_grid_clear(id, val) {
  _get3(id).data.fill(val);
}
__name(ds_grid_clear, "ds_grid_clear");
function ds_grid_width(id) {
  return _get3(id).w;
}
__name(ds_grid_width, "ds_grid_width");
function ds_grid_height(id) {
  return _get3(id).h;
}
__name(ds_grid_height, "ds_grid_height");
function ds_grid_copy(src, dst) {
  const s = _get3(src);
  const d = _get3(dst);
  if (s.w !== d.w || s.h !== d.h)
    throw new Error("ds_grid_copy: grids must have identical dimensions");
  d.data = [...s.data];
}
__name(ds_grid_copy, "ds_grid_copy");
function ds_grid_region_get(id, x1, y1, x2, y2) {
  const g = _get3(id);
  const out = [];
  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      out.push(_in_bounds(g, x, y) ? g.data[_idx2(g, x, y)] : 0);
    }
  }
  return out;
}
__name(ds_grid_region_get, "ds_grid_region_get");
function ds_grid_set_region(id, x1, y1, x2, y2, val) {
  const g = _get3(id);
  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      if (_in_bounds(g, x, y))
        g.data[_idx2(g, x, y)] = val;
    }
  }
}
__name(ds_grid_set_region, "ds_grid_set_region");
function ds_grid_add_region(id, x1, y1, x2, y2, val) {
  const g = _get3(id);
  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      if (_in_bounds(g, x, y)) {
        const i = _idx2(g, x, y);
        g.data[i] = g.data[i] + val;
      }
    }
  }
}
__name(ds_grid_add_region, "ds_grid_add_region");
function ds_grid_multiply_region(id, x1, y1, x2, y2, factor) {
  const g = _get3(id);
  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      if (_in_bounds(g, x, y)) {
        const i = _idx2(g, x, y);
        g.data[i] = g.data[i] * factor;
      }
    }
  }
}
__name(ds_grid_multiply_region, "ds_grid_multiply_region");
function ds_grid_get_max(id, x1, y1, x2, y2) {
  const g = _get3(id);
  let max2 = -Infinity;
  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      if (_in_bounds(g, x, y))
        max2 = Math.max(max2, g.data[_idx2(g, x, y)]);
    }
  }
  return max2;
}
__name(ds_grid_get_max, "ds_grid_get_max");
function ds_grid_get_min(id, x1, y1, x2, y2) {
  const g = _get3(id);
  let min2 = Infinity;
  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      if (_in_bounds(g, x, y))
        min2 = Math.min(min2, g.data[_idx2(g, x, y)]);
    }
  }
  return min2;
}
__name(ds_grid_get_min, "ds_grid_get_min");
function ds_grid_get_sum(id, x1, y1, x2, y2) {
  const g = _get3(id);
  let sum = 0;
  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      if (_in_bounds(g, x, y))
        sum += g.data[_idx2(g, x, y)];
    }
  }
  return sum;
}
__name(ds_grid_get_sum, "ds_grid_get_sum");
function ds_grid_get_mean(id, x1, y1, x2, y2) {
  const count = (x2 - x1 + 1) * (y2 - y1 + 1);
  if (count <= 0)
    return 0;
  return ds_grid_get_sum(id, x1, y1, x2, y2) / count;
}
__name(ds_grid_get_mean, "ds_grid_get_mean");
function ds_grid_exists(id) {
  return _grids2.has(id);
}
__name(ds_grid_exists, "ds_grid_exists");

// packages/engine/dist/data/ds_stack.js
var _stacks = /* @__PURE__ */ new Map();
var _next_id4 = 0;
function _get4(id) {
  const s = _stacks.get(id);
  if (!s)
    throw new Error(`ds_stack: invalid id ${id}`);
  return s;
}
__name(_get4, "_get");
function ds_stack_create() {
  const id = _next_id4++;
  _stacks.set(id, []);
  return id;
}
__name(ds_stack_create, "ds_stack_create");
function ds_stack_destroy(id) {
  _stacks.delete(id);
}
__name(ds_stack_destroy, "ds_stack_destroy");
function ds_stack_push(id, val) {
  _get4(id).push(val);
}
__name(ds_stack_push, "ds_stack_push");
function ds_stack_pop(id) {
  return _get4(id).pop();
}
__name(ds_stack_pop, "ds_stack_pop");
function ds_stack_top(id) {
  const s = _get4(id);
  return s[s.length - 1];
}
__name(ds_stack_top, "ds_stack_top");
function ds_stack_size(id) {
  return _get4(id).length;
}
__name(ds_stack_size, "ds_stack_size");
function ds_stack_empty(id) {
  return _get4(id).length === 0;
}
__name(ds_stack_empty, "ds_stack_empty");
function ds_stack_clear(id) {
  _get4(id).length = 0;
}
__name(ds_stack_clear, "ds_stack_clear");
function ds_stack_copy(src, dst) {
  const s = _get4(src);
  const d = _get4(dst);
  d.length = 0;
  for (const v of s)
    d.push(v);
}
__name(ds_stack_copy, "ds_stack_copy");
function ds_stack_exists(id) {
  return _stacks.has(id);
}
__name(ds_stack_exists, "ds_stack_exists");

// packages/engine/dist/data/ds_queue.js
var Queue = class {
  static {
    __name(this, "Queue");
  }
  constructor(initial_capacity = 16) {
    this._head = 0;
    this._tail = 0;
    this._size = 0;
    this._cap = initial_capacity;
    this._data = new Array(initial_capacity);
  }
  _grow() {
    const new_cap = this._cap * 2;
    const new_data = new Array(new_cap);
    for (let i = 0; i < this._size; i++) {
      new_data[i] = this._data[(this._head + i) % this._cap];
    }
    this._data = new_data;
    this._head = 0;
    this._tail = this._size;
    this._cap = new_cap;
  }
  enqueue(val) {
    if (this._size === this._cap)
      this._grow();
    this._data[this._tail] = val;
    this._tail = (this._tail + 1) % this._cap;
    this._size++;
  }
  dequeue() {
    if (this._size === 0)
      return void 0;
    const val = this._data[this._head];
    this._head = (this._head + 1) % this._cap;
    this._size--;
    return val;
  }
  head() {
    if (this._size === 0)
      return void 0;
    return this._data[this._head];
  }
  tail() {
    if (this._size === 0)
      return void 0;
    return this._data[(this._tail - 1 + this._cap) % this._cap];
  }
  get size() {
    return this._size;
  }
  get empty() {
    return this._size === 0;
  }
  clear() {
    this._head = 0;
    this._tail = 0;
    this._size = 0;
  }
  copy_from(other) {
    this.clear();
    for (let i = 0; i < other._size; i++) {
      this.enqueue(other._data[(other._head + i) % other._cap]);
    }
  }
};
var _queues = /* @__PURE__ */ new Map();
var _next_id5 = 0;
function _get5(id) {
  const q = _queues.get(id);
  if (!q)
    throw new Error(`ds_queue: invalid id ${id}`);
  return q;
}
__name(_get5, "_get");
function ds_queue_create() {
  const id = _next_id5++;
  _queues.set(id, new Queue());
  return id;
}
__name(ds_queue_create, "ds_queue_create");
function ds_queue_destroy(id) {
  _queues.delete(id);
}
__name(ds_queue_destroy, "ds_queue_destroy");
function ds_queue_enqueue(id, val) {
  _get5(id).enqueue(val);
}
__name(ds_queue_enqueue, "ds_queue_enqueue");
function ds_queue_dequeue(id) {
  return _get5(id).dequeue();
}
__name(ds_queue_dequeue, "ds_queue_dequeue");
function ds_queue_head(id) {
  return _get5(id).head();
}
__name(ds_queue_head, "ds_queue_head");
function ds_queue_tail(id) {
  return _get5(id).tail();
}
__name(ds_queue_tail, "ds_queue_tail");
function ds_queue_size(id) {
  return _get5(id).size;
}
__name(ds_queue_size, "ds_queue_size");
function ds_queue_empty(id) {
  return _get5(id).empty;
}
__name(ds_queue_empty, "ds_queue_empty");
function ds_queue_clear(id) {
  _get5(id).clear();
}
__name(ds_queue_clear, "ds_queue_clear");
function ds_queue_copy(src, dst) {
  _get5(dst).copy_from(_get5(src));
}
__name(ds_queue_copy, "ds_queue_copy");
function ds_queue_exists(id) {
  return _queues.has(id);
}
__name(ds_queue_exists, "ds_queue_exists");

// packages/engine/dist/data/ds_priority.js
var MinHeap = class {
  static {
    __name(this, "MinHeap");
  }
  constructor() {
    this._data = [];
  }
  get size() {
    return this._data.length;
  }
  get empty() {
    return this._data.length === 0;
  }
  _swap(i, j) {
    ;
    [this._data[i], this._data[j]] = [this._data[j], this._data[i]];
  }
  _sift_up(i) {
    while (i > 0) {
      const parent = i - 1 >> 1;
      if (this._data[parent].priority <= this._data[i].priority)
        break;
      this._swap(i, parent);
      i = parent;
    }
  }
  _sift_down(i) {
    const n = this._data.length;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < n && this._data[l].priority < this._data[smallest].priority)
        smallest = l;
      if (r < n && this._data[r].priority < this._data[smallest].priority)
        smallest = r;
      if (smallest === i)
        break;
      this._swap(i, smallest);
      i = smallest;
    }
  }
  push(val, priority) {
    this._data.push({ val, priority });
    this._sift_up(this._data.length - 1);
  }
  /** Returns the entry with the lowest priority without removing it. */
  peek_min() {
    return this._data[0];
  }
  /** Returns the entry with the highest priority (largest number) without removing it. */
  peek_max() {
    if (this._data.length === 0)
      return void 0;
    let max2 = this._data[0];
    const start = Math.floor(this._data.length / 2);
    for (let i = start; i < this._data.length; i++) {
      if (this._data[i].priority > max2.priority)
        max2 = this._data[i];
    }
    return max2;
  }
  /** Removes and returns the entry with the lowest priority. */
  pop_min() {
    if (this._data.length === 0)
      return void 0;
    const top = this._data[0];
    const last = this._data.pop();
    if (this._data.length > 0) {
      this._data[0] = last;
      this._sift_down(0);
    }
    return top;
  }
  /** Removes and returns the entry with the highest priority (largest number). */
  pop_max() {
    if (this._data.length === 0)
      return void 0;
    const max_entry = this.peek_max();
    const idx = this._data.indexOf(max_entry);
    const last = this._data.pop();
    if (idx < this._data.length) {
      this._data[idx] = last;
      this._sift_up(idx);
      this._sift_down(idx);
    }
    return max_entry;
  }
  /** Removes the first occurrence of a value. */
  delete_value(val) {
    const idx = this._data.findIndex((e) => e.val === val);
    if (idx < 0)
      return false;
    const last = this._data.pop();
    if (idx < this._data.length) {
      this._data[idx] = last;
      this._sift_up(idx);
      this._sift_down(idx);
    }
    return true;
  }
  /** Returns the priority of a value, or undefined if not found. */
  find_priority(val) {
    const entry = this._data.find((e) => e.val === val);
    return entry?.priority;
  }
  clear() {
    this._data.length = 0;
  }
  copy_from(other) {
    this._data = other._data.map((e) => ({ ...e }));
  }
};
var _pqs = /* @__PURE__ */ new Map();
var _next_id6 = 0;
function _get6(id) {
  const pq = _pqs.get(id);
  if (!pq)
    throw new Error(`ds_priority: invalid id ${id}`);
  return pq;
}
__name(_get6, "_get");
function ds_priority_create() {
  const id = _next_id6++;
  _pqs.set(id, new MinHeap());
  return id;
}
__name(ds_priority_create, "ds_priority_create");
function ds_priority_destroy(id) {
  _pqs.delete(id);
}
__name(ds_priority_destroy, "ds_priority_destroy");
function ds_priority_add(id, val, priority) {
  _get6(id).push(val, priority);
}
__name(ds_priority_add, "ds_priority_add");
function ds_priority_delete_value(id, val) {
  _get6(id).delete_value(val);
}
__name(ds_priority_delete_value, "ds_priority_delete_value");
function ds_priority_delete_min(id) {
  return _get6(id).pop_min()?.val;
}
__name(ds_priority_delete_min, "ds_priority_delete_min");
function ds_priority_delete_max(id) {
  return _get6(id).pop_max()?.val;
}
__name(ds_priority_delete_max, "ds_priority_delete_max");
function ds_priority_find_min(id) {
  return _get6(id).peek_min()?.val;
}
__name(ds_priority_find_min, "ds_priority_find_min");
function ds_priority_find_max(id) {
  return _get6(id).peek_max()?.val;
}
__name(ds_priority_find_max, "ds_priority_find_max");
function ds_priority_find_priority(id, val) {
  return _get6(id).find_priority(val);
}
__name(ds_priority_find_priority, "ds_priority_find_priority");
function ds_priority_size(id) {
  return _get6(id).size;
}
__name(ds_priority_size, "ds_priority_size");
function ds_priority_empty(id) {
  return _get6(id).empty;
}
__name(ds_priority_empty, "ds_priority_empty");
function ds_priority_clear(id) {
  _get6(id).clear();
}
__name(ds_priority_clear, "ds_priority_clear");
function ds_priority_copy(src, dst) {
  _get6(dst).copy_from(_get6(src));
}
__name(ds_priority_copy, "ds_priority_copy");
function ds_priority_exists(id) {
  return _pqs.has(id);
}
__name(ds_priority_exists, "ds_priority_exists");

// packages/engine/dist/storage/ini.js
var _current_key = null;
var _current_data = null;
function _storage_key(filename) {
  return `silkweaver_ini_${filename}`;
}
__name(_storage_key, "_storage_key");
function _assert_open() {
  if (!_current_data)
    throw new Error("ini: no file is open \u2014 call ini_open() first");
  return _current_data;
}
__name(_assert_open, "_assert_open");
function ini_open(filename) {
  if (_current_key !== null)
    ini_close();
  _current_key = _storage_key(filename);
  const raw = localStorage.getItem(_current_key);
  if (raw) {
    try {
      _current_data = JSON.parse(raw);
    } catch {
      _current_data = {};
    }
  } else {
    _current_data = {};
  }
}
__name(ini_open, "ini_open");
function ini_close() {
  if (_current_key !== null && _current_data !== null) {
    try {
      localStorage.setItem(_current_key, JSON.stringify(_current_data));
    } catch {
    }
  }
  _current_key = null;
  _current_data = null;
}
__name(ini_close, "ini_close");
function ini_read_string(section, key, default_val) {
  const data = _assert_open();
  return data[section]?.[key] ?? default_val;
}
__name(ini_read_string, "ini_read_string");
function ini_read_real(section, key, default_val) {
  const data = _assert_open();
  const raw = data[section]?.[key];
  if (raw === void 0)
    return default_val;
  const num = Number(raw);
  return isNaN(num) ? default_val : num;
}
__name(ini_read_real, "ini_read_real");
function ini_write_string(section, key, val) {
  const data = _assert_open();
  if (!data[section])
    data[section] = {};
  data[section][key] = String(val);
}
__name(ini_write_string, "ini_write_string");
function ini_write_real(section, key, val) {
  const data = _assert_open();
  if (!data[section])
    data[section] = {};
  data[section][key] = String(val);
}
__name(ini_write_real, "ini_write_real");
function ini_key_exists(section, key) {
  const data = _assert_open();
  return data[section] !== void 0 && key in data[section];
}
__name(ini_key_exists, "ini_key_exists");
function ini_section_exists(section) {
  const data = _assert_open();
  return section in data;
}
__name(ini_section_exists, "ini_section_exists");
function ini_key_delete(section, key) {
  const data = _assert_open();
  if (data[section])
    delete data[section][key];
}
__name(ini_key_delete, "ini_key_delete");
function ini_section_delete(section) {
  const data = _assert_open();
  delete data[section];
}
__name(ini_section_delete, "ini_section_delete");
function ini_delete(filename) {
  localStorage.removeItem(_storage_key(filename));
  if (_current_key === _storage_key(filename)) {
    _current_key = null;
    _current_data = null;
  }
}
__name(ini_delete, "ini_delete");

// packages/engine/dist/storage/file_system.js
var DB_NAME = "silkweaver_fs";
var DB_VERSION = 1;
var STORE_NAME = "files";
function _open_db() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE_NAME);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
__name(_open_db, "_open_db");
function _db_get(db, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const req = tx.objectStore(STORE_NAME).get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
__name(_db_get, "_db_get");
function _db_put(db, key, value) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const req = tx.objectStore(STORE_NAME).put(value, key);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}
__name(_db_put, "_db_put");
function _db_delete(db, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const req = tx.objectStore(STORE_NAME).delete(key);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}
__name(_db_delete, "_db_delete");
function _db_has(db, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const req = tx.objectStore(STORE_NAME).count(key);
    req.onsuccess = () => resolve(req.result > 0);
    req.onerror = () => reject(req.error);
  });
}
__name(_db_has, "_db_has");
var FILE_MODE_READ = 0;
var FILE_MODE_WRITE = 1;
var FILE_MODE_APPEND = 2;
var _handles = /* @__PURE__ */ new Map();
var _next_handle = 1;
async function file_text_open_read(filename) {
  const db = await _open_db();
  const content = await _db_get(db, filename);
  db.close();
  if (content === void 0)
    return -1;
  const id = _next_handle++;
  _handles.set(id, { filename, mode: FILE_MODE_READ, content, pos: 0, buffer: "" });
  return id;
}
__name(file_text_open_read, "file_text_open_read");
async function file_text_open_write(filename) {
  const id = _next_handle++;
  _handles.set(id, { filename, mode: FILE_MODE_WRITE, content: "", pos: 0, buffer: "" });
  return id;
}
__name(file_text_open_write, "file_text_open_write");
async function file_text_open_append(filename) {
  const db = await _open_db();
  const content = await _db_get(db, filename) ?? "";
  db.close();
  const id = _next_handle++;
  _handles.set(id, { filename, mode: FILE_MODE_APPEND, content: "", pos: 0, buffer: content });
  return id;
}
__name(file_text_open_append, "file_text_open_append");
async function file_text_close(handle) {
  const fh = _handles.get(handle);
  if (!fh)
    return;
  if (fh.mode === FILE_MODE_WRITE || fh.mode === FILE_MODE_APPEND) {
    const db = await _open_db();
    await _db_put(db, fh.filename, fh.buffer);
    db.close();
  }
  _handles.delete(handle);
}
__name(file_text_close, "file_text_close");
function file_text_readln(handle) {
  const fh = _handles.get(handle);
  if (!fh || fh.mode !== FILE_MODE_READ)
    return "";
  if (fh.pos >= fh.content.length)
    return "";
  const nl = fh.content.indexOf("\n", fh.pos);
  if (nl < 0) {
    const line2 = fh.content.slice(fh.pos).replace(/\r$/, "");
    fh.pos = fh.content.length;
    return line2;
  }
  const line = fh.content.slice(fh.pos, nl).replace(/\r$/, "");
  fh.pos = nl + 1;
  return line;
}
__name(file_text_readln, "file_text_readln");
function file_text_read_string(handle) {
  const fh = _handles.get(handle);
  if (!fh || fh.mode !== FILE_MODE_READ)
    return "";
  while (fh.pos < fh.content.length && /\s/.test(fh.content[fh.pos]))
    fh.pos++;
  const start = fh.pos;
  while (fh.pos < fh.content.length && !/\s/.test(fh.content[fh.pos]))
    fh.pos++;
  return fh.content.slice(start, fh.pos);
}
__name(file_text_read_string, "file_text_read_string");
function file_text_eof(handle) {
  const fh = _handles.get(handle);
  if (!fh)
    return true;
  return fh.pos >= fh.content.length;
}
__name(file_text_eof, "file_text_eof");
function file_text_write_string(handle, str) {
  const fh = _handles.get(handle);
  if (!fh || fh.mode === FILE_MODE_READ)
    return;
  fh.buffer += str;
}
__name(file_text_write_string, "file_text_write_string");
function file_text_writeln(handle) {
  const fh = _handles.get(handle);
  if (!fh || fh.mode === FILE_MODE_READ)
    return;
  fh.buffer += "\n";
}
__name(file_text_writeln, "file_text_writeln");
async function file_exists(filename) {
  const db = await _open_db();
  const has = await _db_has(db, filename);
  db.close();
  return has;
}
__name(file_exists, "file_exists");
async function file_delete(filename) {
  const db = await _open_db();
  await _db_delete(db, filename);
  db.close();
}
__name(file_delete, "file_delete");

// packages/engine/dist/storage/json_storage.js
function json_encode(val) {
  try {
    return JSON.stringify(val) ?? "";
  } catch {
    return "";
  }
}
__name(json_encode, "json_encode");
function json_decode(str) {
  try {
    return JSON.parse(str);
  } catch {
    return void 0;
  }
}
__name(json_decode, "json_decode");
function json_stringify_pretty(val, indent = 2) {
  try {
    return JSON.stringify(val, null, indent);
  } catch {
    return "";
  }
}
__name(json_stringify_pretty, "json_stringify_pretty");
function json_deep_clone(val) {
  const encoded = json_encode(val);
  if (!encoded)
    return void 0;
  return json_decode(encoded);
}
__name(json_deep_clone, "json_deep_clone");
function json_is_valid(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}
__name(json_is_valid, "json_is_valid");
function json_save(key, val) {
  const encoded = json_encode(val);
  if (encoded)
    localStorage.setItem(key, encoded);
}
__name(json_save, "json_save");
function json_load(key, default_val) {
  const raw = localStorage.getItem(key);
  if (raw === null)
    return default_val;
  const parsed = json_decode(raw);
  return parsed !== void 0 ? parsed : default_val;
}
__name(json_load, "json_load");
function json_delete(key) {
  localStorage.removeItem(key);
}
__name(json_delete, "json_delete");

// packages/engine/dist/audio/audio_system.js
var audio_system = class {
  static {
    __name(this, "audio_system");
  }
  /**
   * Initialises the Web Audio context and master gain node.
   * Safe to call multiple times — only initialises once.
   */
  static init() {
    if (this._ctx)
      return;
    this._ctx = new AudioContext();
    this._master = this._ctx.createGain();
    this._master.connect(this._ctx.destination);
    this._master.gain.value = 1;
  }
  /**
   * Resumes the AudioContext after a user gesture.
   * Browsers suspend audio until user interaction occurs.
   */
  static resume() {
    if (!this._ctx)
      return Promise.resolve();
    return this._ctx.resume();
  }
  /**
   * Returns the shared AudioContext.
   * Throws if init() has not been called.
   */
  static get ctx() {
    if (!this._ctx)
      throw new Error("audio_system: call init() first");
    return this._ctx;
  }
  /**
   * Returns the master GainNode.
   * Throws if init() has not been called.
   */
  static get master() {
    if (!this._master)
      throw new Error("audio_system: call init() first");
    return this._master;
  }
  /** Returns true if the audio system has been initialised. */
  static get is_ready() {
    return this._ctx !== null;
  }
  /**
   * Sets the master gain (volume) for all audio.
   * @param gain - Volume level (0 = silent, 1 = full)
   */
  static set_master_gain(gain) {
    if (!this._master)
      return;
    this._master.gain.value = Math.max(0, gain);
  }
  /** Returns the current master gain level. */
  static get_master_gain() {
    return this._master?.gain.value ?? 1;
  }
  /**
   * Returns the current AudioContext time in seconds.
   * Used for precise scheduling.
   */
  static get current_time() {
    return this._ctx?.currentTime ?? 0;
  }
};
audio_system._ctx = null;
audio_system._master = null;

// packages/engine/dist/audio/audio_group.js
var audio_group = class extends resource {
  static {
    __name(this, "audio_group");
  }
  /**
   * @param group_name - Unique name for this audio group
   */
  constructor(group_name) {
    super();
    this._gain_node = null;
    this.group_name = group_name;
  }
  /**
   * Returns the GainNode for this group, creating it if necessary.
   * Lazily initialised so it can be constructed before audio_system.init().
   */
  get gain_node() {
    if (!this._gain_node) {
      this._gain_node = audio_system.ctx.createGain();
      this._gain_node.connect(audio_system.master);
    }
    return this._gain_node;
  }
  /**
   * Sets the gain (volume) for this group.
   * @param gain - Volume level (0 = silent, 1 = full)
   */
  set_gain(gain) {
    this.gain_node.gain.value = Math.max(0, gain);
  }
  /** Returns the current gain for this group. */
  get_gain() {
    return this._gain_node?.gain.value ?? 1;
  }
  /**
   * Stops all sounds in this group by disconnecting and reconnecting
   * the gain node. Individual sound tracking is handled by sound_instance.
   * This is a volume-only group; stopping is done via the sound registry.
   */
  stop_all() {
    if (_stop_group_cb)
      _stop_group_cb(this.group_name);
  }
};
var _groups = /* @__PURE__ */ new Map();
var _stop_group_cb = null;
function set_stop_group_callback(cb) {
  _stop_group_cb = cb;
}
__name(set_stop_group_callback, "set_stop_group_callback");
function get_or_create_group(name) {
  let g = _groups.get(name);
  if (!g) {
    g = new audio_group(name);
    _groups.set(name, g);
  }
  return g;
}
__name(get_or_create_group, "get_or_create_group");
function audio_group_set_gain(group_name, gain) {
  get_or_create_group(group_name).set_gain(gain);
}
__name(audio_group_set_gain, "audio_group_set_gain");
function audio_group_get_gain(group_name) {
  return get_or_create_group(group_name).get_gain();
}
__name(audio_group_get_gain, "audio_group_get_gain");
function audio_group_stop(group_name) {
  get_or_create_group(group_name).stop_all();
}
__name(audio_group_stop, "audio_group_stop");

// packages/engine/dist/audio/sound.js
set_stop_group_callback((group_name) => {
  for (const [id, name] of _instance_groups) {
    if (name === group_name)
      _instances.get(id)?.stop();
  }
});
var sound_asset = class extends resource {
  static {
    __name(this, "sound_asset");
  }
  constructor() {
    super(...arguments);
    this.buffer = null;
    this.loop = false;
    this.group_name = "default";
  }
  /**
   * Loads a sound from a URL, decoding it into an AudioBuffer.
   * @param url - URL to an audio file (mp3, ogg, wav, etc.)
   * @param group_name - Audio group to assign this sound to
   * @param loop - Whether to loop by default
   * @returns Promise that resolves when decoding is complete
   */
  async load_url(url, group_name = "default", loop = false) {
    this.group_name = group_name;
    this.loop = loop;
    const response = await fetch(url);
    const array_buf = await response.arrayBuffer();
    this.buffer = await audio_system.ctx.decodeAudioData(array_buf);
  }
  /**
   * Loads a sound from a pre-fetched ArrayBuffer.
   * @param array_buf - Raw audio data
   * @param group_name - Audio group
   * @param loop - Whether to loop by default
   */
  async load_buffer(array_buf, group_name = "default", loop = false) {
    this.group_name = group_name;
    this.loop = loop;
    this.buffer = await audio_system.ctx.decodeAudioData(array_buf);
  }
};
var _next_instance_id = 1;
var sound_instance = class {
  static {
    __name(this, "sound_instance");
  }
  constructor(source, gain) {
    this._playing = true;
    this._on_ended = null;
    this.instance_id = _next_instance_id++;
    this._source = source;
    this._gain = gain;
    this._source.addEventListener("ended", () => {
      this._playing = false;
      if (this._on_ended)
        this._on_ended();
    });
  }
  /** Stops playback immediately. */
  stop() {
    if (!this._playing)
      return;
    try {
      this._source.stop();
    } catch (_) {
    }
    this._playing = false;
  }
  /**
   * Sets the gain for this specific playback instance.
   * @param gain - Volume level (0–1)
   */
  set_gain(gain) {
    this._gain.gain.value = Math.max(0, gain);
  }
  /** Returns the current instance gain. */
  get_gain() {
    return this._gain.gain.value;
  }
  /**
   * Sets the playback pitch as a speed multiplier.
   * 1.0 = normal, 2.0 = one octave up, 0.5 = one octave down.
   * @param pitch - Playback rate multiplier
   */
  set_pitch(pitch) {
    this._source.playbackRate.value = Math.max(0.01, pitch);
  }
  /** Returns true if this instance is still playing. */
  get is_playing() {
    return this._playing;
  }
  /**
   * Registers a callback invoked when the sound ends naturally (not on stop()).
   * @param cb - Callback function
   */
  on_ended(cb) {
    this._on_ended = cb;
  }
};
var _instances = /* @__PURE__ */ new Map();
var _instance_groups = /* @__PURE__ */ new Map();
function _register(inst, group_name = "") {
  _instances.set(inst.instance_id, inst);
  _instance_groups.set(inst.instance_id, group_name);
  inst.on_ended(() => {
    _instances.delete(inst.instance_id);
    _instance_groups.delete(inst.instance_id);
  });
}
__name(_register, "_register");
function register_instance(inst, group_name = "") {
  _register(inst, group_name);
}
__name(register_instance, "register_instance");
function play_sound(asset, loop = asset.loop, gain = 1, pitch = 1) {
  if (!asset.buffer)
    throw new Error(`sound_asset ${asset.id}: not yet loaded`);
  const ctx = audio_system.ctx;
  const group = get_or_create_group(asset.group_name);
  const source = ctx.createBufferSource();
  source.buffer = asset.buffer;
  source.loop = loop;
  source.playbackRate.value = Math.max(0.01, pitch);
  const gain_node = ctx.createGain();
  gain_node.gain.value = Math.max(0, gain);
  source.connect(gain_node);
  gain_node.connect(group.gain_node);
  source.start();
  const inst = new sound_instance(source, gain_node);
  _register(inst, asset.group_name);
  return inst;
}
__name(play_sound, "play_sound");
function audio_play_sound(asset, priority = 0, loop = false) {
  void priority;
  const a = typeof asset === "string" ? _sound_names.get(asset) : asset;
  if (!a)
    throw new Error(`audio_play_sound: sound '${String(asset)}' not found`);
  return play_sound(a, loop);
}
__name(audio_play_sound, "audio_play_sound");
var _sound_names = /* @__PURE__ */ new Map();
function sound_register_name(name, asset) {
  _sound_names.set(name, asset);
}
__name(sound_register_name, "sound_register_name");
function sound_get_name(name) {
  return _sound_names.get(name);
}
__name(sound_get_name, "sound_get_name");
function audio_stop_sound(inst) {
  inst.stop();
}
__name(audio_stop_sound, "audio_stop_sound");
function audio_stop_all() {
  for (const inst of _instances.values())
    inst.stop();
  _instances.clear();
  _instance_groups.clear();
}
__name(audio_stop_all, "audio_stop_all");
function audio_is_playing(inst) {
  return inst.is_playing;
}
__name(audio_is_playing, "audio_is_playing");
function audio_sound_gain(inst, gain) {
  inst.set_gain(gain);
}
__name(audio_sound_gain, "audio_sound_gain");
function audio_sound_pitch(inst, pitch) {
  inst.set_pitch(pitch);
}
__name(audio_sound_pitch, "audio_sound_pitch");
function audio_set_master_gain(gain) {
  audio_system.set_master_gain(gain);
}
__name(audio_set_master_gain, "audio_set_master_gain");
function audio_get_master_gain() {
  return audio_system.get_master_gain();
}
__name(audio_get_master_gain, "audio_get_master_gain");

// packages/engine/dist/audio/audio_3d.js
var _listener_x = 0;
var _listener_y = 0;
var spatial_sound_instance = class {
  static {
    __name(this, "spatial_sound_instance");
  }
  constructor(panner, inst) {
    this.instance = inst;
    this._panner = panner;
  }
  /**
   * Updates the world-space position of this sound source.
   * @param x - World X position
   * @param y - World Y position
   */
  set_position(x, y) {
    this._panner.positionX.value = x;
    this._panner.positionY.value = y;
    this._panner.positionZ.value = 0;
  }
  /** Stops playback. */
  stop() {
    this.instance.stop();
  }
  /** Returns true if currently playing. */
  get is_playing() {
    return this.instance.is_playing;
  }
};
function audio_set_listener_position(x, y) {
  _listener_x = x;
  _listener_y = y;
  const listener = audio_system.ctx.listener;
  if (listener.positionX) {
    listener.positionX.value = x;
    listener.positionY.value = y;
    listener.positionZ.value = 0;
  } else {
    listener.setPosition(x, y, 0);
  }
}
__name(audio_set_listener_position, "audio_set_listener_position");
function audio_play_sound_at(asset, x, y, ref_distance = 100, max_distance = 1e3, loop = false) {
  if (!asset.buffer)
    throw new Error(`sound_asset ${asset.id}: not yet loaded`);
  const ctx = audio_system.ctx;
  const group = get_or_create_group(asset.group_name);
  const source = ctx.createBufferSource();
  source.buffer = asset.buffer;
  source.loop = loop;
  const panner = ctx.createPanner();
  panner.panningModel = "HRTF";
  panner.distanceModel = "inverse";
  panner.refDistance = ref_distance;
  panner.maxDistance = max_distance;
  panner.rolloffFactor = 1;
  panner.positionX.value = x;
  panner.positionY.value = y;
  panner.positionZ.value = 0;
  const gain_node = ctx.createGain();
  gain_node.gain.value = 1;
  source.connect(panner);
  panner.connect(gain_node);
  gain_node.connect(group.gain_node);
  source.start();
  const inst = new sound_instance(source, gain_node);
  register_instance(inst, asset.group_name);
  const spatial_inst = new spatial_sound_instance(panner, inst);
  return spatial_inst;
}
__name(audio_play_sound_at, "audio_play_sound_at");
function audio_set_sound_position(inst, x, y) {
  inst.set_position(x, y);
}
__name(audio_set_sound_position, "audio_set_sound_position");
function audio_get_listener_x() {
  return _listener_x;
}
__name(audio_get_listener_x, "audio_get_listener_x");
function audio_get_listener_y() {
  return _listener_y;
}
__name(audio_get_listener_y, "audio_get_listener_y");

// packages/engine/dist/physics/physics_joint.js
var import_matter_js3 = __toESM(require_matter(), 1);
var _joints = /* @__PURE__ */ new Map();
var _next_joint_id = 1;
function _add_constraint(c) {
  const world = _get_world();
  if (!world)
    return -1;
  import_matter_js3.default.World.add(world, c);
  const id = _next_joint_id++;
  _joints.set(id, c);
  return id;
}
__name(_add_constraint, "_add_constraint");
function physics_joint_distance_create(body_a_id, body_b_id, ax, ay, bx, by, stiffness = 1, damping = 0) {
  const ba = physics_body_get_raw(body_a_id);
  const bb = physics_body_get_raw(body_b_id);
  if (!ba || !bb)
    return -1;
  const c = import_matter_js3.default.Constraint.create({
    bodyA: ba,
    bodyB: bb,
    pointA: { x: ax, y: ay },
    pointB: { x: bx, y: by },
    stiffness,
    damping
  });
  return _add_constraint(c);
}
__name(physics_joint_distance_create, "physics_joint_distance_create");
function physics_joint_revolute_create(body_a_id, body_b_id, pivot_x, pivot_y) {
  const ba = physics_body_get_raw(body_a_id);
  const bb = physics_body_get_raw(body_b_id);
  if (!ba || !bb)
    return -1;
  const local_a = {
    x: pivot_x - ba.position.x,
    y: pivot_y - ba.position.y
  };
  const local_b = {
    x: pivot_x - bb.position.x,
    y: pivot_y - bb.position.y
  };
  const c = import_matter_js3.default.Constraint.create({
    bodyA: ba,
    bodyB: bb,
    pointA: local_a,
    pointB: local_b,
    length: 0,
    stiffness: 1,
    damping: 0
  });
  return _add_constraint(c);
}
__name(physics_joint_revolute_create, "physics_joint_revolute_create");
function physics_joint_weld_create(body_a_id, body_b_id) {
  const ba = physics_body_get_raw(body_a_id);
  const bb = physics_body_get_raw(body_b_id);
  if (!ba || !bb)
    return -1;
  const c = import_matter_js3.default.Constraint.create({
    bodyA: ba,
    bodyB: bb,
    stiffness: 1,
    damping: 0
  });
  return _add_constraint(c);
}
__name(physics_joint_weld_create, "physics_joint_weld_create");
function physics_joint_spring_create(body_a_id, body_b_id, ax, ay, bx, by, rest_length, stiffness = 0.1, damping = 0.01) {
  const ba = physics_body_get_raw(body_a_id);
  const bb = physics_body_get_raw(body_b_id);
  if (!ba || !bb)
    return -1;
  const c = import_matter_js3.default.Constraint.create({
    bodyA: ba,
    bodyB: bb,
    pointA: { x: ax, y: ay },
    pointB: { x: bx, y: by },
    length: rest_length,
    stiffness,
    damping
  });
  return _add_constraint(c);
}
__name(physics_joint_spring_create, "physics_joint_spring_create");
function physics_joint_rope_create(body_a_id, body_b_id, ax, ay, bx, by, maxlength) {
  const ba = physics_body_get_raw(body_a_id);
  const bb = physics_body_get_raw(body_b_id);
  if (!ba || !bb)
    return -1;
  const c = import_matter_js3.default.Constraint.create({
    bodyA: ba,
    bodyB: bb,
    pointA: { x: ax, y: ay },
    pointB: { x: bx, y: by },
    length: maxlength,
    stiffness: 1,
    damping: 0
  });
  return _add_constraint(c);
}
__name(physics_joint_rope_create, "physics_joint_rope_create");
function physics_joint_get_value(joint_id, field) {
  const c = _joints.get(joint_id);
  return c ? c[field] ?? 0 : 0;
}
__name(physics_joint_get_value, "physics_joint_get_value");
function physics_joint_set_value(joint_id, field, value) {
  const c = _joints.get(joint_id);
  if (c)
    c[field] = value;
}
__name(physics_joint_set_value, "physics_joint_set_value");
function physics_test_overlap(body_a_id, body_b_id) {
  const a = physics_body_get_raw(body_a_id);
  const b = physics_body_get_raw(body_b_id);
  if (!a || !b)
    return false;
  const collides = import_matter_js3.default.Collision?.collides;
  if (typeof collides === "function") {
    const col = collides(a, b);
    return !!(col && col.collided);
  }
  return import_matter_js3.default.Bounds.overlaps(a.bounds, b.bounds);
}
__name(physics_test_overlap, "physics_test_overlap");
function physics_raycast(x1, y1, x2, y2) {
  const world = _get_world();
  if (!world)
    return [];
  const hits = import_matter_js3.default.Query.ray(import_matter_js3.default.Composite.allBodies(world), { x: x1, y: y1 }, { x: x2, y: y2 });
  const ids = /* @__PURE__ */ new Set();
  for (const h of hits) {
    const a = h.bodyA?._sw_id, b = h.bodyB?._sw_id;
    if (typeof a === "number")
      ids.add(a);
    if (typeof b === "number")
      ids.add(b);
  }
  return [...ids];
}
__name(physics_raycast, "physics_raycast");
function physics_joint_destroy(joint_id) {
  const world = _get_world();
  const c = _joints.get(joint_id);
  if (!c)
    return;
  if (world)
    import_matter_js3.default.World.remove(world, c);
  _joints.delete(joint_id);
}
__name(physics_joint_destroy, "physics_joint_destroy");
function physics_joint_exists(joint_id) {
  return _joints.has(joint_id);
}
__name(physics_joint_exists, "physics_joint_exists");
function physics_joint_get_raw(joint_id) {
  return _joints.get(joint_id);
}
__name(physics_joint_get_raw, "physics_joint_get_raw");

// packages/engine/dist/networking/buffer.js
var buffer_u8 = 0;
var buffer_s8 = 1;
var buffer_u16 = 2;
var buffer_s16 = 3;
var buffer_u32 = 4;
var buffer_s32 = 5;
var buffer_f32 = 6;
var buffer_f64 = 7;
var buffer_bool = 8;
var buffer_string = 9;
var buffer_u64 = 10;
var buffer_fixed = 0;
var buffer_grow = 1;
var buffer_wrap = 2;
var buffer_fast = 3;
var buffer_seek_start = 0;
var buffer_seek_relative = 1;
var buffer_seek_end = 2;
var TYPE_SIZES = {
  [buffer_u8]: 1,
  [buffer_s8]: 1,
  [buffer_u16]: 2,
  [buffer_s16]: 2,
  [buffer_u32]: 4,
  [buffer_s32]: 4,
  [buffer_f32]: 4,
  [buffer_f64]: 8,
  [buffer_bool]: 1,
  [buffer_string]: 0,
  // variable length
  [buffer_u64]: 8
};
var _buffers = /* @__PURE__ */ new Map();
var _next_buf_id = 1;
function _make_buf(capacity, mode, alignment) {
  const data = new Uint8Array(capacity);
  return { data, pos: 0, size: 0, mode, alignment, view: new DataView(data.buffer) };
}
__name(_make_buf, "_make_buf");
function _ensure(buf, needed) {
  const required = buf.pos + needed;
  if (required <= buf.data.length)
    return true;
  if (buf.mode === buffer_fixed)
    return false;
  if (buf.mode === buffer_wrap)
    return true;
  let new_cap = buf.data.length || 8;
  while (new_cap < required)
    new_cap *= 2;
  const new_data = new Uint8Array(new_cap);
  new_data.set(buf.data);
  buf.data = new_data;
  buf.view = new DataView(new_data.buffer);
  return true;
}
__name(_ensure, "_ensure");
function _advance(buf, bytes) {
  if (buf.mode === buffer_wrap && buf.data.length > 0) {
    buf.pos = (buf.pos + bytes) % buf.data.length;
  } else {
    buf.pos += bytes;
  }
  if (buf.pos > buf.size)
    buf.size = buf.pos;
}
__name(_advance, "_advance");
function buffer_create(size, mode = buffer_grow, alignment = 1) {
  const id = _next_buf_id++;
  _buffers.set(id, _make_buf(Math.max(size, 0), mode, alignment));
  return id;
}
__name(buffer_create, "buffer_create");
function buffer_delete(buffer_id) {
  _buffers.delete(buffer_id);
}
__name(buffer_delete, "buffer_delete");
function buffer_exists(buffer_id) {
  return _buffers.has(buffer_id);
}
__name(buffer_exists, "buffer_exists");
function buffer_get_size(buffer_id) {
  return _buffers.get(buffer_id)?.data.length ?? 0;
}
__name(buffer_get_size, "buffer_get_size");
function buffer_tell(buffer_id) {
  return _buffers.get(buffer_id)?.pos ?? 0;
}
__name(buffer_tell, "buffer_tell");
function buffer_seek(buffer_id, base, offset) {
  const buf = _buffers.get(buffer_id);
  if (!buf)
    return;
  let new_pos;
  switch (base) {
    case buffer_seek_start:
      new_pos = offset;
      break;
    case buffer_seek_relative:
      new_pos = buf.pos + offset;
      break;
    case buffer_seek_end:
      new_pos = buf.size + offset;
      break;
    default:
      new_pos = offset;
  }
  buf.pos = Math.max(0, new_pos);
}
__name(buffer_seek, "buffer_seek");
function buffer_write(buffer_id, type, value) {
  const buf = _buffers.get(buffer_id);
  if (!buf)
    return;
  if (type === buffer_string) {
    const str = String(value);
    const bytes = new TextEncoder().encode(str);
    if (!_ensure(buf, bytes.length + 1))
      return;
    buf.data.set(bytes, buf.pos);
    buf.data[buf.pos + bytes.length] = 0;
    _advance(buf, bytes.length + 1);
    return;
  }
  const sz = TYPE_SIZES[type] ?? 1;
  if (!_ensure(buf, sz))
    return;
  const p = buf.pos;
  switch (type) {
    case buffer_u8:
      buf.view.setUint8(p, Number(value));
      break;
    case buffer_s8:
      buf.view.setInt8(p, Number(value));
      break;
    case buffer_u16:
      buf.view.setUint16(p, Number(value), true);
      break;
    case buffer_s16:
      buf.view.setInt16(p, Number(value), true);
      break;
    case buffer_u32:
      buf.view.setUint32(p, Number(value), true);
      break;
    case buffer_s32:
      buf.view.setInt32(p, Number(value), true);
      break;
    case buffer_f32:
      buf.view.setFloat32(p, Number(value), true);
      break;
    case buffer_f64:
      buf.view.setFloat64(p, Number(value), true);
      break;
    case buffer_bool:
      buf.view.setUint8(p, value ? 1 : 0);
      break;
    case buffer_u64:
      buf.view.setBigUint64(p, BigInt(value), true);
      break;
  }
  _advance(buf, sz);
}
__name(buffer_write, "buffer_write");
function buffer_read(buffer_id, type) {
  const buf = _buffers.get(buffer_id);
  if (!buf)
    return 0;
  if (type === buffer_string) {
    let end = buf.pos;
    while (end < buf.data.length && buf.data[end] !== 0)
      end++;
    const str = new TextDecoder().decode(buf.data.slice(buf.pos, end));
    _advance(buf, end - buf.pos + 1);
    return str;
  }
  const sz = TYPE_SIZES[type] ?? 1;
  if (buf.pos + sz > buf.data.length)
    return 0;
  const p = buf.pos;
  let result = 0;
  switch (type) {
    case buffer_u8:
      result = buf.view.getUint8(p);
      break;
    case buffer_s8:
      result = buf.view.getInt8(p);
      break;
    case buffer_u16:
      result = buf.view.getUint16(p, true);
      break;
    case buffer_s16:
      result = buf.view.getInt16(p, true);
      break;
    case buffer_u32:
      result = buf.view.getUint32(p, true);
      break;
    case buffer_s32:
      result = buf.view.getInt32(p, true);
      break;
    case buffer_f32:
      result = buf.view.getFloat32(p, true);
      break;
    case buffer_f64:
      result = buf.view.getFloat64(p, true);
      break;
    case buffer_bool:
      result = buf.view.getUint8(p) !== 0;
      break;
    case buffer_u64:
      result = buf.view.getBigUint64(p, true);
      break;
  }
  _advance(buf, sz);
  return result;
}
__name(buffer_read, "buffer_read");
function buffer_fill(buffer_id, offset, size, value) {
  const buf = _buffers.get(buffer_id);
  if (!buf)
    return;
  const end = Math.min(offset + size, buf.data.length);
  buf.data.fill(value & 255, offset, end);
}
__name(buffer_fill, "buffer_fill");
function buffer_copy(src_id, src_offset, dst_id, dst_offset, size) {
  const src = _buffers.get(src_id);
  const dst = _buffers.get(dst_id);
  if (!src || !dst)
    return;
  const src_end = Math.min(src_offset + size, src.data.length);
  const chunk = src.data.slice(src_offset, src_end);
  const old_pos = dst.pos;
  dst.pos = dst_offset;
  if (!_ensure(dst, chunk.length)) {
    dst.pos = old_pos;
    return;
  }
  dst.data.set(chunk, dst_offset);
  dst.pos = old_pos;
  if (dst_offset + chunk.length > dst.size)
    dst.size = dst_offset + chunk.length;
}
__name(buffer_copy, "buffer_copy");
function buffer_sizeof(type) {
  return TYPE_SIZES[type] ?? 0;
}
__name(buffer_sizeof, "buffer_sizeof");
function buffer_resize(buffer_id, new_size) {
  const buf = _buffers.get(buffer_id);
  if (!buf)
    return;
  const n = Math.max(0, Math.floor(new_size));
  const new_data = new Uint8Array(n);
  new_data.set(buf.data.subarray(0, Math.min(buf.data.length, n)));
  buf.data = new_data;
  buf.view = new DataView(new_data.buffer);
  if (buf.size > n)
    buf.size = n;
  if (buf.pos > n)
    buf.pos = n;
}
__name(buffer_resize, "buffer_resize");
function buffer_poke(buffer_id, offset, type, value) {
  const pos = buffer_tell(buffer_id);
  buffer_seek(buffer_id, buffer_seek_start, offset);
  buffer_write(buffer_id, type, value);
  buffer_seek(buffer_id, buffer_seek_start, pos);
}
__name(buffer_poke, "buffer_poke");
function buffer_peek(buffer_id, offset, type) {
  const pos = buffer_tell(buffer_id);
  buffer_seek(buffer_id, buffer_seek_start, offset);
  const value = buffer_read(buffer_id, type);
  buffer_seek(buffer_id, buffer_seek_start, pos);
  return value;
}
__name(buffer_peek, "buffer_peek");
function buffer_get_bytes(buffer_id) {
  const buf = _buffers.get(buffer_id);
  if (!buf)
    return new Uint8Array(0);
  return buf.data.slice(0, buf.size);
}
__name(buffer_get_bytes, "buffer_get_bytes");
function buffer_from_bytes(bytes) {
  const id = _next_buf_id++;
  const data = new Uint8Array(bytes.length);
  data.set(bytes);
  _buffers.set(id, {
    data,
    pos: 0,
    size: bytes.length,
    mode: buffer_grow,
    alignment: 1,
    view: new DataView(data.buffer)
  });
  return id;
}
__name(buffer_from_bytes, "buffer_from_bytes");
function buffer_base64_encode(buffer_id, offset = 0, size = -1) {
  const buf = _buffers.get(buffer_id);
  if (!buf)
    return "";
  const end = size < 0 ? buf.size : Math.min(offset + size, buf.size);
  const chunk = buf.data.slice(offset, end);
  let binary = "";
  for (let i = 0; i < chunk.length; i++)
    binary += String.fromCharCode(chunk[i]);
  return btoa(binary);
}
__name(buffer_base64_encode, "buffer_base64_encode");
function buffer_base64_decode(base64) {
  try {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++)
      bytes[i] = binary.charCodeAt(i);
    return buffer_from_bytes(bytes);
  } catch {
    return buffer_create(0, buffer_grow, 1);
  }
}
__name(buffer_base64_decode, "buffer_base64_decode");

// packages/engine/dist/networking/websocket_client.js
var network_type_connect = 0;
var network_type_disconnect = 1;
var network_type_data = 2;
var network_type_non_blocking_connect = 3;
var _sockets = /* @__PURE__ */ new Map();
var _next_socket_id = 1;
function network_create_socket(url, protocols) {
  let ws;
  try {
    ws = protocols ? new WebSocket(url, protocols) : new WebSocket(url);
  } catch {
    return -1;
  }
  ws.binaryType = "arraybuffer";
  const id = _next_socket_id++;
  const sock = { ws, on_open: null, on_message: null, on_close: null, on_error: null };
  _sockets.set(id, sock);
  ws.addEventListener("open", () => {
    sock.on_open?.();
  });
  ws.addEventListener("message", (ev) => {
    if (!sock.on_message)
      return;
    if (ev.data instanceof ArrayBuffer) {
      const buf_id = buffer_from_bytes(new Uint8Array(ev.data));
      sock.on_message(buf_id);
    } else if (typeof ev.data === "string") {
      const bytes = new TextEncoder().encode(ev.data);
      const buf_id = buffer_from_bytes(bytes);
      sock.on_message(buf_id);
    }
  });
  ws.addEventListener("close", (ev) => {
    sock.on_close?.(ev.code, ev.reason);
    _sockets.delete(id);
  });
  ws.addEventListener("error", () => {
    sock.on_error?.();
  });
  return id;
}
__name(network_create_socket, "network_create_socket");
function network_send_raw(socket_id, bytes) {
  const sock = _sockets.get(socket_id);
  if (!sock || sock.ws.readyState !== WebSocket.OPEN)
    return;
  sock.ws.send(bytes);
}
__name(network_send_raw, "network_send_raw");
function network_send_text(socket_id, text) {
  const sock = _sockets.get(socket_id);
  if (!sock || sock.ws.readyState !== WebSocket.OPEN)
    return;
  sock.ws.send(text);
}
__name(network_send_text, "network_send_text");
function network_destroy(socket_id, code = 1e3, reason = "") {
  const sock = _sockets.get(socket_id);
  if (!sock)
    return;
  sock.ws.close(code, reason);
  _sockets.delete(socket_id);
}
__name(network_destroy, "network_destroy");
function network_get_ready_state(socket_id) {
  return _sockets.get(socket_id)?.ws.readyState ?? -1;
}
__name(network_get_ready_state, "network_get_ready_state");
function network_set_on_open(socket_id, cb) {
  const sock = _sockets.get(socket_id);
  if (sock)
    sock.on_open = cb;
}
__name(network_set_on_open, "network_set_on_open");
function network_set_on_message(socket_id, cb) {
  const sock = _sockets.get(socket_id);
  if (sock)
    sock.on_message = cb;
}
__name(network_set_on_message, "network_set_on_message");
function network_set_on_close(socket_id, cb) {
  const sock = _sockets.get(socket_id);
  if (sock)
    sock.on_close = cb;
}
__name(network_set_on_close, "network_set_on_close");
function network_set_on_error(socket_id, cb) {
  const sock = _sockets.get(socket_id);
  if (sock)
    sock.on_error = cb;
}
__name(network_set_on_error, "network_set_on_error");
function network_socket_exists(socket_id) {
  return _sockets.has(socket_id);
}
__name(network_socket_exists, "network_socket_exists");

// packages/engine/dist/networking/webrtc_client.js
var _peers = /* @__PURE__ */ new Map();
var _next_peer_id = 1;
function webrtc_create_peer(ice_servers = [{ urls: "stun:stun.l.google.com:19302" }]) {
  const pc = new RTCPeerConnection({ iceServers: ice_servers });
  const id = _next_peer_id++;
  const peer = {
    pc,
    channels: /* @__PURE__ */ new Map(),
    next_channel_id: 1,
    on_channel: null,
    on_ice_candidate: null
  };
  _peers.set(id, peer);
  pc.addEventListener("icecandidate", (ev) => {
    if (ev.candidate)
      peer.on_ice_candidate?.(ev.candidate);
  });
  pc.addEventListener("datachannel", (ev) => {
    const channel_id = peer.next_channel_id++;
    const ch_state = {
      channel: ev.channel,
      on_message: null,
      on_open: null,
      on_close: null
    };
    peer.channels.set(channel_id, ch_state);
    _wire_channel(ch_state);
    peer.on_channel?.(channel_id, ev.channel.label);
  });
  return id;
}
__name(webrtc_create_peer, "webrtc_create_peer");
function _wire_channel(ch) {
  ch.channel.binaryType = "arraybuffer";
  ch.channel.addEventListener("open", () => ch.on_open?.());
  ch.channel.addEventListener("close", () => ch.on_close?.());
  ch.channel.addEventListener("message", (ev) => {
    if (!ch.on_message)
      return;
    const data = ev.data;
    let bytes;
    if (data instanceof ArrayBuffer) {
      bytes = new Uint8Array(data);
    } else if (typeof data === "string") {
      bytes = new TextEncoder().encode(data);
    } else {
      return;
    }
    ch.on_message(buffer_from_bytes(bytes));
  });
}
__name(_wire_channel, "_wire_channel");
function webrtc_create_channel(peer_id, label = "data", ordered = false, max_retransmits = 0) {
  const peer = _peers.get(peer_id);
  if (!peer)
    return -1;
  const channel = peer.pc.createDataChannel(label, {
    ordered,
    ...ordered ? {} : { maxRetransmits: max_retransmits }
  });
  const channel_id = peer.next_channel_id++;
  const ch_state = {
    channel,
    on_message: null,
    on_open: null,
    on_close: null
  };
  peer.channels.set(channel_id, ch_state);
  _wire_channel(ch_state);
  return channel_id;
}
__name(webrtc_create_channel, "webrtc_create_channel");
async function webrtc_create_offer(peer_id) {
  const peer = _peers.get(peer_id);
  if (!peer)
    return null;
  try {
    const offer = await peer.pc.createOffer();
    await peer.pc.setLocalDescription(offer);
    return offer.sdp ?? null;
  } catch {
    return null;
  }
}
__name(webrtc_create_offer, "webrtc_create_offer");
async function webrtc_create_answer(peer_id, offer_sdp) {
  const peer = _peers.get(peer_id);
  if (!peer)
    return null;
  try {
    await peer.pc.setRemoteDescription({ type: "offer", sdp: offer_sdp });
    const answer = await peer.pc.createAnswer();
    await peer.pc.setLocalDescription(answer);
    return answer.sdp ?? null;
  } catch {
    return null;
  }
}
__name(webrtc_create_answer, "webrtc_create_answer");
async function webrtc_set_remote_answer(peer_id, answer_sdp) {
  const peer = _peers.get(peer_id);
  if (!peer)
    return;
  try {
    await peer.pc.setRemoteDescription({ type: "answer", sdp: answer_sdp });
  } catch {
  }
}
__name(webrtc_set_remote_answer, "webrtc_set_remote_answer");
async function webrtc_add_ice_candidate(peer_id, candidate) {
  const peer = _peers.get(peer_id);
  if (!peer)
    return;
  try {
    await peer.pc.addIceCandidate(candidate);
  } catch {
  }
}
__name(webrtc_add_ice_candidate, "webrtc_add_ice_candidate");
function webrtc_send(peer_id, channel_id, bytes) {
  const peer = _peers.get(peer_id);
  if (!peer)
    return;
  const ch = peer.channels.get(channel_id);
  if (!ch || ch.channel.readyState !== "open")
    return;
  ch.channel.send(bytes);
}
__name(webrtc_send, "webrtc_send");
function webrtc_send_text(peer_id, channel_id, text) {
  const peer = _peers.get(peer_id);
  if (!peer)
    return;
  const ch = peer.channels.get(channel_id);
  if (!ch || ch.channel.readyState !== "open")
    return;
  ch.channel.send(text);
}
__name(webrtc_send_text, "webrtc_send_text");
function webrtc_destroy_peer(peer_id) {
  const peer = _peers.get(peer_id);
  if (!peer)
    return;
  peer.pc.close();
  _peers.delete(peer_id);
}
__name(webrtc_destroy_peer, "webrtc_destroy_peer");
function webrtc_set_on_channel(peer_id, cb) {
  const peer = _peers.get(peer_id);
  if (peer)
    peer.on_channel = cb;
}
__name(webrtc_set_on_channel, "webrtc_set_on_channel");
function webrtc_set_on_ice_candidate(peer_id, cb) {
  const peer = _peers.get(peer_id);
  if (peer)
    peer.on_ice_candidate = cb;
}
__name(webrtc_set_on_ice_candidate, "webrtc_set_on_ice_candidate");
function webrtc_set_on_message(peer_id, channel_id, cb) {
  const ch = _peers.get(peer_id)?.channels.get(channel_id);
  if (ch)
    ch.on_message = cb;
}
__name(webrtc_set_on_message, "webrtc_set_on_message");
function webrtc_set_on_open(peer_id, channel_id, cb) {
  const ch = _peers.get(peer_id)?.channels.get(channel_id);
  if (ch)
    ch.on_open = cb;
}
__name(webrtc_set_on_open, "webrtc_set_on_open");
function webrtc_set_on_close(peer_id, channel_id, cb) {
  const ch = _peers.get(peer_id)?.channels.get(channel_id);
  if (ch)
    ch.on_close = cb;
}
__name(webrtc_set_on_close, "webrtc_set_on_close");
function webrtc_peer_exists(peer_id) {
  return _peers.has(peer_id);
}
__name(webrtc_peer_exists, "webrtc_peer_exists");
function webrtc_get_state(peer_id) {
  return _peers.get(peer_id)?.pc.connectionState ?? "closed";
}
__name(webrtc_get_state, "webrtc_get_state");

// packages/engine/dist/networking/http_client.js
function _extract_headers(resp) {
  const out = {};
  resp.headers.forEach((value, key) => {
    out[key] = value;
  });
  return out;
}
__name(_extract_headers, "_extract_headers");
async function http_get(url, headers) {
  try {
    const resp = await fetch(url, { method: "GET", ...headers && { headers } });
    const text = await resp.text();
    return { status: resp.status, ok: resp.ok, text, headers: _extract_headers(resp) };
  } catch (e) {
    return { status: 0, ok: false, text: String(e), headers: {} };
  }
}
__name(http_get, "http_get");
async function http_post(url, body, content_type = "application/x-www-form-urlencoded", headers) {
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": content_type, ...headers },
      body
    });
    const text = await resp.text();
    return { status: resp.status, ok: resp.ok, text, headers: _extract_headers(resp) };
  } catch (e) {
    return { status: 0, ok: false, text: String(e), headers: {} };
  }
}
__name(http_post, "http_post");
async function http_post_json(url, data, headers) {
  return http_post(url, JSON.stringify(data), "application/json", headers);
}
__name(http_post_json, "http_post_json");
async function http_get_bytes(url, headers) {
  try {
    const resp = await fetch(url, { method: "GET", ...headers && { headers } });
    const buf = await resp.arrayBuffer();
    const bytes = new Uint8Array(buf);
    return { status: resp.status, ok: resp.ok, bytes, headers: _extract_headers(resp) };
  } catch (e) {
    return { status: 0, ok: false, bytes: new Uint8Array(0), headers: {} };
  }
}
__name(http_get_bytes, "http_get_bytes");
async function http_request(url, method, headers = {}, body = null) {
  try {
    const resp = await fetch(url, { method, headers, ...body != null && { body } });
    const text = await resp.text();
    return { status: resp.status, ok: resp.ok, text, headers: _extract_headers(resp) };
  } catch (e) {
    return { status: 0, ok: false, text: String(e), headers: {} };
  }
}
__name(http_request, "http_request");

// packages/engine/dist/particles/particle_type.js
var pt_shape_pixel = 0;
var pt_shape_disk = 1;
var pt_shape_square = 2;
var pt_shape_line = 3;
var pt_shape_star = 4;
var pt_shape_circle = 5;
var pt_shape_ring = 6;
var pt_shape_sphere = 7;
var pt_shape_flare = 8;
var pt_shape_spark = 9;
var pt_shape_explosion = 10;
var pt_shape_cloud = 11;
var pt_shape_smoke = 12;
var pt_shape_snow = 13;
var _types = /* @__PURE__ */ new Map();
var _next_type_id = 1;
function _make_default() {
  return {
    shape: pt_shape_pixel,
    size1: 1,
    size2: 1,
    size_incr: 0,
    size_wiggle: 0,
    speed1: 0,
    speed2: 0,
    speed_incr: 0,
    speed_wiggle: 0,
    dir1: 0,
    dir2: 360,
    dir_incr: 0,
    dir_wiggle: 0,
    grav_amount: 0,
    grav_dir: 270,
    ang1: 0,
    ang2: 0,
    ang_incr: 0,
    ang_wiggle: 0,
    ang_relative: false,
    life1: 30,
    life2: 30,
    color1: 16777215,
    color2: 16777215,
    color3: 16777215,
    alpha1: 1,
    alpha2: 1,
    alpha3: 0,
    additive: false,
    death_type_id: -1,
    death_number: 0,
    step_type_id: -1,
    step_number: 0
  };
}
__name(_make_default, "_make_default");
function part_type_create() {
  const id = _next_type_id++;
  _types.set(id, _make_default());
  return id;
}
__name(part_type_create, "part_type_create");
function part_type_destroy(type_id) {
  _types.delete(type_id);
}
__name(part_type_destroy, "part_type_destroy");
function part_type_exists(type_id) {
  return _types.has(type_id);
}
__name(part_type_exists, "part_type_exists");
function part_type_shape(type_id, shape) {
  const t = _types.get(type_id);
  if (t)
    t.shape = shape;
}
__name(part_type_shape, "part_type_shape");
function part_type_size(type_id, size_min, size_max, size_incr, size_wiggle) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.size1 = size_min;
  t.size2 = size_max;
  t.size_incr = size_incr;
  t.size_wiggle = size_wiggle;
}
__name(part_type_size, "part_type_size");
function part_type_speed(type_id, speed_min, speed_max, speed_incr, speed_wiggle) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.speed1 = speed_min;
  t.speed2 = speed_max;
  t.speed_incr = speed_incr;
  t.speed_wiggle = speed_wiggle;
}
__name(part_type_speed, "part_type_speed");
function part_type_direction(type_id, dir_min, dir_max, dir_incr, dir_wiggle) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.dir1 = dir_min;
  t.dir2 = dir_max;
  t.dir_incr = dir_incr;
  t.dir_wiggle = dir_wiggle;
}
__name(part_type_direction, "part_type_direction");
function part_type_gravity(type_id, amount, direction) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.grav_amount = amount;
  t.grav_dir = direction;
}
__name(part_type_gravity, "part_type_gravity");
function part_type_orientation(type_id, ang_min, ang_max, ang_incr, ang_wiggle, ang_relative) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.ang1 = ang_min;
  t.ang2 = ang_max;
  t.ang_incr = ang_incr;
  t.ang_wiggle = ang_wiggle;
  t.ang_relative = ang_relative;
}
__name(part_type_orientation, "part_type_orientation");
function part_type_life(type_id, life_min, life_max) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.life1 = life_min;
  t.life2 = life_max;
}
__name(part_type_life, "part_type_life");
function part_type_color3(type_id, c1, c2, c3) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.color1 = c1;
  t.color2 = c2;
  t.color3 = c3;
}
__name(part_type_color3, "part_type_color3");
function part_type_color2(type_id, c1, c2) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.color1 = c1;
  t.color2 = c2;
  t.color3 = c2;
}
__name(part_type_color2, "part_type_color2");
function part_type_color1(type_id, c) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.color1 = c;
  t.color2 = c;
  t.color3 = c;
}
__name(part_type_color1, "part_type_color1");
function part_type_alpha3(type_id, a1, a2, a3) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.alpha1 = a1;
  t.alpha2 = a2;
  t.alpha3 = a3;
}
__name(part_type_alpha3, "part_type_alpha3");
function part_type_alpha2(type_id, a1, a2) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.alpha1 = a1;
  t.alpha2 = a2;
  t.alpha3 = a2;
}
__name(part_type_alpha2, "part_type_alpha2");
function part_type_alpha1(type_id, a) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.alpha1 = a;
  t.alpha2 = a;
  t.alpha3 = a;
}
__name(part_type_alpha1, "part_type_alpha1");
function part_type_blend(type_id, additive) {
  const t = _types.get(type_id);
  if (t)
    t.additive = additive;
}
__name(part_type_blend, "part_type_blend");
function part_type_step(type_id, sub_type_id, number) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.step_type_id = sub_type_id;
  t.step_number = number;
}
__name(part_type_step, "part_type_step");
function part_type_death(type_id, sub_type_id, number) {
  const t = _types.get(type_id);
  if (!t)
    return;
  t.death_type_id = sub_type_id;
  t.death_number = number;
}
__name(part_type_death, "part_type_death");
function part_type_get_def(type_id) {
  return _types.get(type_id);
}
__name(part_type_get_def, "part_type_get_def");

// packages/engine/dist/particles/particle_system.js
var _systems = /* @__PURE__ */ new Map();
var _next_system_id = 1;
function _bgr_to_rgb(bgr) {
  const b = (bgr >> 16 & 255) / 255;
  const g = (bgr >> 8 & 255) / 255;
  const r = (bgr & 255) / 255;
  return [r, g, b];
}
__name(_bgr_to_rgb, "_bgr_to_rgb");
function _lerp_color(c1, c2, t) {
  const [r1, g1, b1] = _bgr_to_rgb(c1);
  const [r2, g2, b2] = _bgr_to_rgb(c2);
  return [r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t];
}
__name(_lerp_color, "_lerp_color");
function _lerp3_color(c1, c2, c3, t) {
  if (t < 0.5)
    return _lerp_color(c1, c2, t * 2);
  return _lerp_color(c2, c3, (t - 0.5) * 2);
}
__name(_lerp3_color, "_lerp3_color");
function _lerp3(a, b, c, t) {
  if (t < 0.5)
    return a + (b - a) * (t * 2);
  return b + (c - b) * ((t - 0.5) * 2);
}
__name(_lerp3, "_lerp3");
function _rand_range(lo, hi) {
  return lo + Math.random() * (hi - lo);
}
__name(_rand_range, "_rand_range");
function _spawn_particle(sys, type_id, x, y) {
  const def = part_type_get_def(type_id);
  if (!def)
    return;
  const life = Math.round(_rand_range(def.life1, def.life2));
  const spd = _rand_range(def.speed1, def.speed2);
  const dir = _rand_range(def.dir1, def.dir2);
  const size = _rand_range(def.size1, def.size2);
  const ang = _rand_range(def.ang1, def.ang2);
  const [r, g, b] = _bgr_to_rgb(def.color1);
  sys.particles.push({
    type_id,
    x,
    y,
    spd,
    dir,
    ang,
    spd_incr: def.speed_incr,
    dir_incr: def.dir_incr,
    ang_incr: def.ang_incr,
    size,
    size_incr: def.size_incr,
    life,
    life_max: life,
    r,
    g,
    b,
    alpha: def.alpha1,
    additive: def.additive
  });
}
__name(_spawn_particle, "_spawn_particle");
function _get_system_raw(system_id) {
  return _systems.get(system_id);
}
__name(_get_system_raw, "_get_system_raw");
function part_system_create() {
  const id = _next_system_id++;
  _systems.set(id, { particles: [], depth: 0, persistent: false, auto_update: true, auto_draw: true });
  return id;
}
__name(part_system_create, "part_system_create");
function part_system_destroy(system_id) {
  _systems.delete(system_id);
}
__name(part_system_destroy, "part_system_destroy");
function part_system_exists(system_id) {
  return _systems.has(system_id);
}
__name(part_system_exists, "part_system_exists");
function part_system_depth(system_id, depth) {
  const s = _systems.get(system_id);
  if (s)
    s.depth = depth;
}
__name(part_system_depth, "part_system_depth");
function part_system_clear(system_id) {
  const s = _systems.get(system_id);
  if (s)
    s.particles = [];
}
__name(part_system_clear, "part_system_clear");
function part_system_count(system_id) {
  return _systems.get(system_id)?.particles.length ?? 0;
}
__name(part_system_count, "part_system_count");
function part_system_update(system_id) {
  const sys = _systems.get(system_id);
  if (!sys)
    return;
  const to_spawn = [];
  const alive = [];
  for (const p of sys.particles) {
    const rad = p.dir * (Math.PI / 180);
    p.x += Math.cos(rad) * p.spd;
    p.y -= Math.sin(rad) * p.spd;
    const def = part_type_get_def(p.type_id);
    if (def && def.grav_amount !== 0) {
      const grad = def.grav_dir * (Math.PI / 180);
      p.spd += Math.cos(grad - rad) * def.grav_amount;
      p.dir += Math.asin(Math.max(-1, Math.min(1, Math.sin(grad - rad))) * def.grav_amount / Math.max(p.spd, 1e-3)) * (180 / Math.PI);
    }
    p.spd = Math.max(0, p.spd + p.spd_incr + (def ? _rand_range(-def.speed_wiggle, def.speed_wiggle) : 0));
    p.dir += p.dir_incr + (def ? _rand_range(-def.dir_wiggle, def.dir_wiggle) : 0);
    p.ang += p.ang_incr + (def ? _rand_range(-def.ang_wiggle, def.ang_wiggle) : 0);
    p.size = Math.max(0, p.size + p.size_incr + (def ? _rand_range(-def.size_wiggle, def.size_wiggle) : 0));
    if (def) {
      const t = 1 - p.life / p.life_max;
      const [r, g, b] = _lerp3_color(def.color1, def.color2, def.color3, t);
      p.r = r;
      p.g = g;
      p.b = b;
      p.alpha = _lerp3(def.alpha1, def.alpha2, def.alpha3, t);
    }
    if (def && def.step_type_id >= 0 && def.step_number > 0) {
      for (let i = 0; i < def.step_number; i++) {
        to_spawn.push({ type_id: def.step_type_id, x: p.x, y: p.y });
      }
    }
    p.life--;
    if (p.life > 0) {
      alive.push(p);
    } else {
      if (def && def.death_type_id >= 0 && def.death_number > 0) {
        for (let i = 0; i < def.death_number; i++) {
          to_spawn.push({ type_id: def.death_type_id, x: p.x, y: p.y });
        }
      }
    }
  }
  sys.particles = alive;
  for (const s of to_spawn)
    _spawn_particle(sys, s.type_id, s.x, s.y);
}
__name(part_system_update, "part_system_update");
function part_system_draw(system_id) {
  const sys = _systems.get(system_id);
  if (!sys)
    return;
  const saved_color = renderer.get_color();
  const saved_alpha = renderer.get_alpha();
  for (const p of sys.particles) {
    if (p.alpha <= 0 || p.size <= 0)
      continue;
    const ri = Math.round(p.r * 255);
    const gi = Math.round(p.g * 255);
    const bi = Math.round(p.b * 255);
    const color = bi << 16 | gi << 8 | ri;
    renderer.set_color(color);
    renderer.set_alpha(p.alpha);
    const half = p.size * 0.5;
    renderer.draw_rectangle(p.x - half, p.y - half, p.x + half, p.y + half, false);
  }
  renderer.set_color(saved_color);
  renderer.set_alpha(saved_alpha);
}
__name(part_system_draw, "part_system_draw");

// packages/engine/dist/particles/particle_emitter.js
var ps_shape_rectangle = 0;
var ps_shape_ellipse = 1;
var ps_shape_diamond = 2;
var ps_shape_line = 3;
var ps_distr_linear = 0;
var ps_distr_gaussian = 1;
var ps_distr_inv_gaussian = 2;
var _emitters = /* @__PURE__ */ new Map();
var _next_emitter_id = 1;
function _sample_region(e) {
  const cx = (e.x1 + e.x2) * 0.5;
  const cy = (e.y1 + e.y2) * 0.5;
  const hw = (e.x2 - e.x1) * 0.5;
  const hh = (e.y2 - e.y1) * 0.5;
  let u = Math.random();
  let v = Math.random();
  if (e.distr === ps_distr_gaussian) {
    u = _gaussian();
    v = _gaussian();
  } else if (e.distr === ps_distr_inv_gaussian) {
    u = 1 - _gaussian();
    v = 1 - _gaussian();
  }
  switch (e.shape) {
    case ps_shape_rectangle:
      return { x: e.x1 + u * (e.x2 - e.x1), y: e.y1 + v * (e.y2 - e.y1) };
    case ps_shape_ellipse: {
      const ang = u * 2 * Math.PI;
      const rad = Math.sqrt(v);
      return { x: cx + Math.cos(ang) * rad * hw, y: cy + Math.sin(ang) * rad * hh };
    }
    case ps_shape_diamond: {
      let dx = u * 2 - 1;
      let dy = v * 2 - 1;
      if (Math.abs(dx) + Math.abs(dy) > 1) {
        dx = (dx > 0 ? 1 : -1) - dx;
        dy = (dy > 0 ? 1 : -1) - dy;
      }
      return { x: cx + dx * hw, y: cy + dy * hh };
    }
    case ps_shape_line: {
      return { x: e.x1 + u * (e.x2 - e.x1), y: e.y1 + u * (e.y2 - e.y1) };
    }
    default:
      return { x: cx, y: cy };
  }
}
__name(_sample_region, "_sample_region");
function _gaussian() {
  const u = Math.random() || 1e-10;
  const v = Math.random();
  const g = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  return Math.max(0, Math.min(1, g / 6 + 0.5));
}
__name(_gaussian, "_gaussian");
function part_emitter_create(system_id) {
  const id = _next_emitter_id++;
  _emitters.set(id, {
    system_id,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    shape: ps_shape_rectangle,
    distr: ps_distr_linear
  });
  return id;
}
__name(part_emitter_create, "part_emitter_create");
function part_emitter_destroy(emitter_id) {
  _emitters.delete(emitter_id);
}
__name(part_emitter_destroy, "part_emitter_destroy");
function part_emitter_exists(emitter_id) {
  return _emitters.has(emitter_id);
}
__name(part_emitter_exists, "part_emitter_exists");
function part_emitter_region(emitter_id, x1, y1, x2, y2, shape, distr) {
  const e = _emitters.get(emitter_id);
  if (!e)
    return;
  e.x1 = x1;
  e.y1 = y1;
  e.x2 = x2;
  e.y2 = y2;
  e.shape = shape;
  e.distr = distr;
}
__name(part_emitter_region, "part_emitter_region");
function part_emitter_burst(emitter_id, type_id, number) {
  const e = _emitters.get(emitter_id);
  if (!e)
    return;
  const sys_entry = _get_system(e.system_id);
  if (!sys_entry)
    return;
  for (let i = 0; i < number; i++) {
    const pos = _sample_region(e);
    _spawn_particle(sys_entry, type_id, pos.x, pos.y);
  }
}
__name(part_emitter_burst, "part_emitter_burst");
function part_emitter_stream(emitter_id, type_id, number) {
  part_emitter_burst(emitter_id, type_id, number);
}
__name(part_emitter_stream, "part_emitter_stream");
function _get_system(system_id) {
  return _get_system_raw(system_id);
}
__name(_get_system, "_get_system");

// packages/engine/dist/3d/transform_3d.js
function mat4_identity() {
  return new Float32Array([
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ]);
}
__name(mat4_identity, "mat4_identity");
function mat4_mul(a, b) {
  const r = new Float32Array(16);
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      let sum = 0;
      for (let k = 0; k < 4; k++) {
        sum += a[k * 4 + row] * b[col * 4 + k];
      }
      r[col * 4 + row] = sum;
    }
  }
  return r;
}
__name(mat4_mul, "mat4_mul");
function mat4_translate(tx, ty, tz) {
  const m = mat4_identity();
  m[12] = tx;
  m[13] = ty;
  m[14] = tz;
  return m;
}
__name(mat4_translate, "mat4_translate");
function mat4_scale(sx, sy, sz) {
  const m = mat4_identity();
  m[0] = sx;
  m[5] = sy;
  m[10] = sz;
  return m;
}
__name(mat4_scale, "mat4_scale");
function mat4_rotate_x(deg) {
  const r = deg * (Math.PI / 180);
  const c = Math.cos(r), s = Math.sin(r);
  const m = mat4_identity();
  m[5] = c;
  m[9] = -s;
  m[6] = s;
  m[10] = c;
  return m;
}
__name(mat4_rotate_x, "mat4_rotate_x");
function mat4_rotate_y(deg) {
  const r = deg * (Math.PI / 180);
  const c = Math.cos(r), s = Math.sin(r);
  const m = mat4_identity();
  m[0] = c;
  m[8] = s;
  m[2] = -s;
  m[10] = c;
  return m;
}
__name(mat4_rotate_y, "mat4_rotate_y");
function mat4_rotate_z(deg) {
  const r = deg * (Math.PI / 180);
  const c = Math.cos(r), s = Math.sin(r);
  const m = mat4_identity();
  m[0] = c;
  m[4] = -s;
  m[1] = s;
  m[5] = c;
  return m;
}
__name(mat4_rotate_z, "mat4_rotate_z");
function mat4_perspective(fov_deg, aspect, near, far) {
  const f = 1 / Math.tan(fov_deg * (Math.PI / 360));
  const nf = 1 / (near - far);
  const m = new Float32Array(16);
  m[0] = f / aspect;
  m[5] = f;
  m[10] = (far + near) * nf;
  m[11] = -1;
  m[14] = 2 * far * near * nf;
  return m;
}
__name(mat4_perspective, "mat4_perspective");
function mat4_look_at(ex, ey, ez, tx, ty, tz, ux, uy, uz) {
  let zx = ex - tx, zy = ey - ty, zz = ez - tz;
  let zl = Math.sqrt(zx * zx + zy * zy + zz * zz) || 1;
  zx /= zl;
  zy /= zl;
  zz /= zl;
  let xx = uy * zz - uz * zy, xy = uz * zx - ux * zz, xz = ux * zy - uy * zx;
  const xl = Math.sqrt(xx * xx + xy * xy + xz * xz) || 1;
  xx /= xl;
  xy /= xl;
  xz /= xl;
  const yx = zy * xz - zz * xy, yy = zz * xx - zx * xz, yz = zx * xy - zy * xx;
  const m = new Float32Array(16);
  m[0] = xx;
  m[4] = xy;
  m[8] = xz;
  m[12] = -(xx * ex + xy * ey + xz * ez);
  m[1] = yx;
  m[5] = yy;
  m[9] = yz;
  m[13] = -(yx * ex + yy * ey + yz * ez);
  m[2] = zx;
  m[6] = zy;
  m[10] = zz;
  m[14] = -(zx * ex + zy * ey + zz * ez);
  m[15] = 1;
  return m;
}
__name(mat4_look_at, "mat4_look_at");
function mat4_ortho(left, right, bottom, top, near, far) {
  const m = new Float32Array(16);
  m[0] = 2 / (right - left);
  m[5] = 2 / (top - bottom);
  m[10] = -2 / (far - near);
  m[12] = -(right + left) / (right - left);
  m[13] = -(top + bottom) / (top - bottom);
  m[14] = -(far + near) / (far - near);
  m[15] = 1;
  return m;
}
__name(mat4_ortho, "mat4_ortho");
var _stack = [mat4_identity()];
var _current = _stack[0];
function d3d_transform_get() {
  return _current;
}
__name(d3d_transform_get, "d3d_transform_get");
function d3d_transform_set_identity() {
  _current = mat4_identity();
  _stack[_stack.length - 1] = _current;
}
__name(d3d_transform_set_identity, "d3d_transform_set_identity");
function d3d_transform_set_translation(x, y, z) {
  _current = mat4_translate(x, y, z);
  _stack[_stack.length - 1] = _current;
}
__name(d3d_transform_set_translation, "d3d_transform_set_translation");
function d3d_transform_set_scaling(sx, sy, sz) {
  _current = mat4_scale(sx, sy, sz);
  _stack[_stack.length - 1] = _current;
}
__name(d3d_transform_set_scaling, "d3d_transform_set_scaling");
function d3d_transform_set_rotation(xa, ya, _za, deg) {
  let m = mat4_identity();
  if (xa !== 0)
    m = mat4_mul(m, mat4_rotate_x(deg * xa));
  if (ya !== 0)
    m = mat4_mul(m, mat4_rotate_y(deg * ya));
  _current = m;
  _stack[_stack.length - 1] = _current;
}
__name(d3d_transform_set_rotation, "d3d_transform_set_rotation");
function d3d_transform_add_translation(x, y, z) {
  _current = mat4_mul(_current, mat4_translate(x, y, z));
  _stack[_stack.length - 1] = _current;
}
__name(d3d_transform_add_translation, "d3d_transform_add_translation");
function d3d_transform_add_scaling(sx, sy, sz) {
  _current = mat4_mul(_current, mat4_scale(sx, sy, sz));
  _stack[_stack.length - 1] = _current;
}
__name(d3d_transform_add_scaling, "d3d_transform_add_scaling");
function d3d_transform_add_rotation_x(deg) {
  _current = mat4_mul(_current, mat4_rotate_x(deg));
  _stack[_stack.length - 1] = _current;
}
__name(d3d_transform_add_rotation_x, "d3d_transform_add_rotation_x");
function d3d_transform_add_rotation_y(deg) {
  _current = mat4_mul(_current, mat4_rotate_y(deg));
  _stack[_stack.length - 1] = _current;
}
__name(d3d_transform_add_rotation_y, "d3d_transform_add_rotation_y");
function d3d_transform_add_rotation_z(deg) {
  _current = mat4_mul(_current, mat4_rotate_z(deg));
  _stack[_stack.length - 1] = _current;
}
__name(d3d_transform_add_rotation_z, "d3d_transform_add_rotation_z");
function d3d_transform_stack_push() {
  _stack.push(new Float32Array(_current));
  _current = _stack[_stack.length - 1];
}
__name(d3d_transform_stack_push, "d3d_transform_stack_push");
function d3d_transform_stack_pop() {
  if (_stack.length > 1)
    _stack.pop();
  _current = _stack[_stack.length - 1];
}
__name(d3d_transform_stack_pop, "d3d_transform_stack_pop");
function d3d_transform_stack_clear() {
  _stack.length = 1;
  _stack[0] = mat4_identity();
  _current = _stack[0];
}
__name(d3d_transform_stack_clear, "d3d_transform_stack_clear");

// packages/engine/dist/3d/lighting_3d.js
var d3d_lighttype_directional = 0;
var d3d_lighttype_point = 1;
var MAX_LIGHTS = 8;
function _default_light() {
  return { enabled: false, type: d3d_lighttype_directional, x: 0, y: 0, z: -1, r: 1, g: 1, b: 1, range: 100 };
}
__name(_default_light, "_default_light");
var _lights = Array.from({ length: MAX_LIGHTS }, _default_light);
var _ambient_r = 0.2;
var _ambient_g = 0.2;
var _ambient_b = 0.2;
function d3d_light_enable(light_index, enabled) {
  const l = _lights[light_index];
  if (l)
    l.enabled = enabled;
}
__name(d3d_light_enable, "d3d_light_enable");
function d3d_light_define_direction(light_index, dx, dy, dz, col) {
  const l = _lights[light_index];
  if (!l)
    return;
  const len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
  l.type = d3d_lighttype_directional;
  l.x = dx / len;
  l.y = dy / len;
  l.z = dz / len;
  l.r = (col & 255) / 255;
  l.g = (col >> 8 & 255) / 255;
  l.b = (col >> 16 & 255) / 255;
  l.enabled = true;
}
__name(d3d_light_define_direction, "d3d_light_define_direction");
function d3d_light_define_point(light_index, x, y, z, range, col) {
  const l = _lights[light_index];
  if (!l)
    return;
  l.type = d3d_lighttype_point;
  l.x = x;
  l.y = y;
  l.z = z;
  l.range = range;
  l.r = (col & 255) / 255;
  l.g = (col >> 8 & 255) / 255;
  l.b = (col >> 16 & 255) / 255;
  l.enabled = true;
}
__name(d3d_light_define_point, "d3d_light_define_point");
function d3d_light_set_ambient(col) {
  _ambient_r = (col & 255) / 255;
  _ambient_g = (col >> 8 & 255) / 255;
  _ambient_b = (col >> 16 & 255) / 255;
}
__name(d3d_light_set_ambient, "d3d_light_set_ambient");
function d3d_light_get_uniforms() {
  const enabled = _lights.filter((l) => l.enabled);
  const count = enabled.length;
  const types = new Int32Array(MAX_LIGHTS);
  const pos = new Float32Array(MAX_LIGHTS * 3);
  const colors = new Float32Array(MAX_LIGHTS * 3);
  const ranges = new Float32Array(MAX_LIGHTS);
  enabled.forEach((l, i) => {
    types[i] = l.type;
    pos[i * 3] = l.x;
    pos[i * 3 + 1] = l.y;
    pos[i * 3 + 2] = l.z;
    colors[i * 3] = l.r;
    colors[i * 3 + 1] = l.g;
    colors[i * 3 + 2] = l.b;
    ranges[i] = l.range;
  });
  return {
    ambient: new Float32Array([_ambient_r, _ambient_g, _ambient_b]),
    count,
    types,
    positions: pos,
    colors,
    ranges
  };
}
__name(d3d_light_get_uniforms, "d3d_light_get_uniforms");
function d3d_light_get_all() {
  return _lights;
}
__name(d3d_light_get_all, "d3d_light_get_all");

// packages/engine/dist/3d/model.js
var pr_pointlist = 0;
var pr_linelist = 1;
var pr_linestrip = 2;
var pr_trianglelist = 4;
var pr_trianglestrip = 5;
var pr_trianglefan = 6;
var _GL_MODES = {
  0: 0,
  // POINTS
  1: 1,
  // LINES
  2: 3,
  // LINE_STRIP
  4: 4,
  // TRIANGLES
  5: 5,
  // TRIANGLE_STRIP
  6: 6
  // TRIANGLE_FAN
};
var VERTEX_STRIDE = 32;
var FLOATS_PER_VERTEX2 = 8;
var _models = /* @__PURE__ */ new Map();
var _next_model_id = 1;
var _build_nx = 0;
var _build_ny = 0;
var _build_nz = 1;
var _build_u = 0;
var _build_v = 0;
function _get_model_raw(model_id) {
  return _models.get(model_id);
}
__name(_get_model_raw, "_get_model_raw");
function d3d_model_create() {
  const id = _next_model_id++;
  _models.set(id, { meshes: [], building: false, build_prim: pr_trianglelist, build_verts: [] });
  return id;
}
__name(d3d_model_create, "d3d_model_create");
function d3d_model_destroy(model_id) {
  const m = _models.get(model_id);
  if (!m)
    return;
  const gl = renderer.get_gl();
  for (const mesh of m.meshes) {
    if (mesh.vbo)
      gl.deleteBuffer(mesh.vbo);
  }
  _models.delete(model_id);
}
__name(d3d_model_destroy, "d3d_model_destroy");
function d3d_model_exists(model_id) {
  return _models.has(model_id);
}
__name(d3d_model_exists, "d3d_model_exists");
function d3d_model_clear(model_id) {
  const m = _models.get(model_id);
  if (!m)
    return;
  const gl = renderer.get_gl();
  for (const mesh of m.meshes) {
    if (mesh.vbo)
      gl.deleteBuffer(mesh.vbo);
  }
  m.meshes = [];
}
__name(d3d_model_clear, "d3d_model_clear");
function d3d_model_primitive_begin(model_id, kind) {
  const m = _models.get(model_id);
  if (!m || m.building)
    return;
  m.building = true;
  m.build_prim = kind;
  m.build_verts = [];
  _build_nx = 0;
  _build_ny = 0;
  _build_nz = 1;
  _build_u = 0;
  _build_v = 0;
}
__name(d3d_model_primitive_begin, "d3d_model_primitive_begin");
function d3d_model_primitive_end(model_id) {
  const m = _models.get(model_id);
  if (!m || !m.building)
    return;
  m.building = false;
  if (m.build_verts.length === 0)
    return;
  m.meshes.push({
    primitive: m.build_prim,
    vertices: new Float32Array(m.build_verts),
    vbo: null,
    dirty: true
  });
  m.build_verts = [];
}
__name(d3d_model_primitive_end, "d3d_model_primitive_end");
function d3d_model_vertex(model_id, x, y, z) {
  const m = _models.get(model_id);
  if (!m || !m.building)
    return;
  m.build_verts.push(x, y, z, _build_nx, _build_ny, _build_nz, _build_u, _build_v);
}
__name(d3d_model_vertex, "d3d_model_vertex");
function d3d_model_vertex_normal(model_id, x, y, z, nx, ny, nz) {
  const m = _models.get(model_id);
  if (!m || !m.building)
    return;
  m.build_verts.push(x, y, z, nx, ny, nz, _build_u, _build_v);
}
__name(d3d_model_vertex_normal, "d3d_model_vertex_normal");
function d3d_model_vertex_texture(model_id, x, y, z, u, v) {
  const m = _models.get(model_id);
  if (!m || !m.building)
    return;
  m.build_verts.push(x, y, z, _build_nx, _build_ny, _build_nz, u, v);
}
__name(d3d_model_vertex_texture, "d3d_model_vertex_texture");
function d3d_model_set_normal(nx, ny, nz) {
  _build_nx = nx;
  _build_ny = ny;
  _build_nz = nz;
}
__name(d3d_model_set_normal, "d3d_model_set_normal");
function d3d_model_set_uv(u, v) {
  _build_u = u;
  _build_v = v;
}
__name(d3d_model_set_uv, "d3d_model_set_uv");
function d3d_model_block(model_id, x1, y1, z1, x2, y2, z2, hrepeat = 1, vrepeat = 1) {
  d3d_model_primitive_begin(model_id, pr_trianglelist);
  const m = _models.get(model_id);
  if (!m)
    return;
  _add_box_verts(m, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat);
  d3d_model_primitive_end(model_id);
}
__name(d3d_model_block, "d3d_model_block");
function _add_box_verts(m, x1, y1, z1, x2, y2, z2, hr, vr) {
  const faces = [
    // Front  (z2): normal 0,0,1
    [x1, y1, z2, x2, y1, z2, x2, y2, z2],
    [x1, y1, z2, x2, y2, z2, x1, y2, z2],
    // Back   (z1): normal 0,0,-1
    [x2, y1, z1, x1, y1, z1, x1, y2, z1],
    [x2, y1, z1, x1, y2, z1, x2, y2, z1],
    // Left   (x1): normal -1,0,0
    [x1, y1, z1, x1, y1, z2, x1, y2, z2],
    [x1, y1, z1, x1, y2, z2, x1, y2, z1],
    // Right  (x2): normal 1,0,0
    [x2, y1, z2, x2, y1, z1, x2, y2, z1],
    [x2, y1, z2, x2, y2, z1, x2, y2, z2],
    // Bottom (y1): normal 0,-1,0
    [x1, y1, z1, x2, y1, z1, x2, y1, z2],
    [x1, y1, z1, x2, y1, z2, x1, y1, z2],
    // Top    (y2): normal 0,1,0
    [x1, y2, z2, x2, y2, z2, x2, y2, z1],
    [x1, y2, z2, x2, y2, z1, x1, y2, z1]
  ];
  const normals = [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, -1],
    [0, 0, -1],
    [-1, 0, 0],
    [-1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, -1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ];
  faces.forEach((tri, fi) => {
    const [nx = 0, ny = 0, nz = 0] = normals[fi];
    for (let vi = 0; vi < 9; vi += 3) {
      m.build_verts.push(tri[vi], tri[vi + 1], tri[vi + 2], nx, ny, nz, 0, 0);
    }
  });
}
__name(_add_box_verts, "_add_box_verts");
function d3d_model_sphere(model_id, x, y, z, r, hsteps = 12, vsteps = 6) {
  d3d_model_primitive_begin(model_id, pr_trianglelist);
  const m = _models.get(model_id);
  if (!m)
    return;
  for (let j = 0; j < vsteps; j++) {
    const theta1 = j / vsteps * Math.PI;
    const theta2 = (j + 1) / vsteps * Math.PI;
    for (let i = 0; i < hsteps; i++) {
      const phi1 = i / hsteps * 2 * Math.PI;
      const phi2 = (i + 1) / hsteps * 2 * Math.PI;
      const v = /* @__PURE__ */ __name((p, t) => [
        x + r * Math.sin(t) * Math.cos(p),
        y + r * Math.cos(t),
        z + r * Math.sin(t) * Math.sin(p),
        Math.sin(t) * Math.cos(p),
        Math.cos(t),
        Math.sin(t) * Math.sin(p)
      ], "v");
      const a = v(phi1, theta1), b = v(phi2, theta1);
      const c = v(phi2, theta2), d = v(phi1, theta2);
      if (j !== 0) {
        m.build_verts.push(...a, ...b, ...c);
      }
      if (j !== vsteps - 1) {
        m.build_verts.push(...a, ...c, ...d);
      }
    }
  }
  d3d_model_primitive_end(model_id);
}
__name(d3d_model_sphere, "d3d_model_sphere");
function d3d_model_draw(model_id, x = 0, y = 0, z = 0) {
  const mod = _models.get(model_id);
  if (!mod)
    return;
  const gl = renderer.get_gl();
  renderer.flush_batch();
  for (const mesh of mod.meshes) {
    if (mesh.vertices.length === 0)
      continue;
    if (mesh.dirty || !mesh.vbo) {
      if (!mesh.vbo)
        mesh.vbo = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vbo);
      gl.bufferData(gl.ARRAY_BUFFER, mesh.vertices, gl.STATIC_DRAW);
      mesh.dirty = false;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vbo);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, VERTEX_STRIDE, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, VERTEX_STRIDE, 12);
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 2, gl.FLOAT, false, VERTEX_STRIDE, 24);
    const gl_mode = _GL_MODES[mesh.primitive] ?? gl.TRIANGLES;
    const vert_count = mesh.vertices.length / FLOATS_PER_VERTEX2;
    gl.drawArrays(gl_mode, 0, vert_count);
  }
}
__name(d3d_model_draw, "d3d_model_draw");

// packages/engine/dist/3d/model_loader.js
function _parse_obj(src) {
  const positions = [];
  const normals = [];
  const uvs = [];
  const faces = [];
  for (const raw_line of src.split("\n")) {
    const line = raw_line.trim();
    if (!line || line.startsWith("#"))
      continue;
    const parts = line.split(/\s+/);
    switch (parts[0]) {
      case "v":
        positions.push([parseFloat(parts[1] ?? "0"), parseFloat(parts[2] ?? "0"), parseFloat(parts[3] ?? "0")]);
        break;
      case "vn":
        normals.push([parseFloat(parts[1] ?? "0"), parseFloat(parts[2] ?? "0"), parseFloat(parts[3] ?? "0")]);
        break;
      case "vt":
        uvs.push([parseFloat(parts[1] ?? "0"), parseFloat(parts[2] ?? "0")]);
        break;
      case "f": {
        const verts = parts.slice(1).map((tok) => {
          const segs = tok.split("/");
          return [
            parseInt(segs[0] ?? "0") || 0,
            parseInt(segs[1] ?? "0") || 0,
            parseInt(segs[2] ?? "0") || 0
          ];
        });
        for (let i = 1; i < verts.length - 1; i++) {
          faces.push(verts[0], verts[i], verts[i + 1]);
        }
        break;
      }
    }
  }
  return { positions, normals, uvs, faces };
}
__name(_parse_obj, "_parse_obj");
function model_load_obj(obj_src) {
  const data = _parse_obj(obj_src);
  const model_id = d3d_model_create();
  d3d_model_primitive_begin(model_id, pr_trianglelist);
  const m = _get_model_raw(model_id);
  if (!m) {
    d3d_model_primitive_end(model_id);
    return model_id;
  }
  for (const face_vert of data.faces) {
    const [pi2 = 0, ui = 0, ni = 0] = face_vert;
    const pos = (pi2 > 0 ? data.positions[pi2 - 1] : void 0) ?? [0, 0, 0];
    const nrm = (ni > 0 ? data.normals[ni - 1] : void 0) ?? [0, 0, 1];
    const uv = (ui > 0 ? data.uvs[ui - 1] : void 0) ?? [0, 0];
    m.build_verts.push(pos[0] ?? 0, pos[1] ?? 0, pos[2] ?? 0, nrm[0] ?? 0, nrm[1] ?? 0, nrm[2] ?? 1, uv[0] ?? 0, 1 - (uv[1] ?? 0));
  }
  d3d_model_primitive_end(model_id);
  return model_id;
}
__name(model_load_obj, "model_load_obj");
async function model_load_obj_url(url) {
  try {
    const resp = await fetch(url);
    if (!resp.ok)
      return -1;
    const src = await resp.text();
    return model_load_obj(src);
  } catch {
    return -1;
  }
}
__name(model_load_obj_url, "model_load_obj_url");

// packages/engine/dist/math/vectors.js
var vector2 = class {
  static {
    __name(this, "vector2");
  }
  /**
   * Creates a new 2D vector.
   * @param x - X component (default 0)
   * @param y - Y component (default 0)
   */
  constructor(x = 0, y = 0) {
    this.x = 0;
    this.y = 0;
    this.x = x;
    this.y = y;
  }
  /**
   * Returns a JSON string representation of this vector.
   * @returns JSON string with x and y values
   */
  toString() {
    return JSON.stringify(this);
  }
};

// packages/engine/dist/math/math_utils.js
var DEG2RAD = Math.PI / 180;
var RAD2DEG = 180 / Math.PI;
function degtorad(deg) {
  return deg * DEG2RAD;
}
__name(degtorad, "degtorad");
function radtodeg(rad) {
  return rad * RAD2DEG;
}
__name(radtodeg, "radtodeg");
function dsin(deg) {
  return Math.sin(deg * DEG2RAD);
}
__name(dsin, "dsin");
function dcos(deg) {
  return Math.cos(deg * DEG2RAD);
}
__name(dcos, "dcos");
function dtan(deg) {
  return Math.tan(deg * DEG2RAD);
}
__name(dtan, "dtan");
function arcsin(x) {
  return Math.asin(x);
}
__name(arcsin, "arcsin");
function arccos(x) {
  return Math.acos(x);
}
__name(arccos, "arccos");
function arctan(x) {
  return Math.atan(x);
}
__name(arctan, "arctan");
function arctan2(y, x) {
  return Math.atan2(y, x);
}
__name(arctan2, "arctan2");
function darcsin(x) {
  return Math.asin(x) * RAD2DEG;
}
__name(darcsin, "darcsin");
function darccos(x) {
  return Math.acos(x) * RAD2DEG;
}
__name(darccos, "darccos");
function darctan(x) {
  return Math.atan(x) * RAD2DEG;
}
__name(darctan, "darctan");
function darctan2(y, x) {
  return Math.atan2(y, x) * RAD2DEG;
}
__name(darctan2, "darctan2");
function lengthdir_x(len, dir) {
  return len * Math.cos(dir * DEG2RAD);
}
__name(lengthdir_x, "lengthdir_x");
function lengthdir_y(len, dir) {
  return -len * Math.sin(dir * DEG2RAD);
}
__name(lengthdir_y, "lengthdir_y");
function point_distance(x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
__name(point_distance, "point_distance");
function point_distance_3d(x1, y1, z1, x2, y2, z2) {
  const dx = x2 - x1, dy = y2 - y1, dz = z2 - z1;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
__name(point_distance_3d, "point_distance_3d");
function point_direction(x1, y1, x2, y2) {
  return Math.atan2(-(y2 - y1), x2 - x1) * RAD2DEG;
}
__name(point_direction, "point_direction");
function angle_difference(a, b) {
  let d = ((a - b) % 360 + 360) % 360;
  if (d > 180)
    d -= 360;
  return d;
}
__name(angle_difference, "angle_difference");
function lerp(a, b, w) {
  return a + (b - a) * w;
}
__name(lerp, "lerp");
function clamp(val, min_val, max_val) {
  return val < min_val ? min_val : val > max_val ? max_val : val;
}
__name(clamp, "clamp");
function sign(x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
}
__name(sign, "sign");
function frac(x) {
  return x - Math.trunc(x);
}
__name(frac, "frac");
function sqr(x) {
  return x * x;
}
__name(sqr, "sqr");
function sqrt(x) {
  return Math.sqrt(x);
}
__name(sqrt, "sqrt");
function abs(x) {
  return Math.abs(x);
}
__name(abs, "abs");
function floor(x) {
  return Math.floor(x);
}
__name(floor, "floor");
function ceil(x) {
  return Math.ceil(x);
}
__name(ceil, "ceil");
function round(x) {
  return Math.round(x);
}
__name(round, "round");
function power(x, n) {
  return Math.pow(x, n);
}
__name(power, "power");
function log2(x) {
  return Math.log2(x);
}
__name(log2, "log2");
function log10(x) {
  return Math.log10(x);
}
__name(log10, "log10");
function ln(x) {
  return Math.log(x);
}
__name(ln, "ln");
function logn(n, x) {
  return Math.log(x) / Math.log(n);
}
__name(logn, "logn");
function exp(x) {
  return Math.exp(x);
}
__name(exp, "exp");
function dot_product(x1, y1, x2, y2) {
  return x1 * x2 + y1 * y2;
}
__name(dot_product, "dot_product");
function dot_product_3d(x1, y1, z1, x2, y2, z2) {
  return x1 * x2 + y1 * y2 + z1 * z2;
}
__name(dot_product_3d, "dot_product_3d");
function min(...values) {
  return Math.min(...values);
}
__name(min, "min");
function max(...values) {
  return Math.max(...values);
}
__name(max, "max");
function median(...values) {
  if (values.length === 0)
    return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1)
    return sorted[mid];
  return (sorted[mid - 1] + sorted[mid]) / 2;
}
__name(median, "median");
function mean(...values) {
  if (values.length === 0)
    return 0;
  return values.reduce((s, v) => s + v, 0) / values.length;
}
__name(mean, "mean");
function between(x, lo, hi) {
  return x >= lo && x <= hi;
}
__name(between, "between");
function approx(x, y, epsilon = 1e-6) {
  return Math.abs(x - y) <= epsilon;
}
__name(approx, "approx");
function wrap(x, range) {
  return (x % range + range) % range;
}
__name(wrap, "wrap");
function dot2(x1, y1, x2, y2) {
  return x1 * x2 + y1 * y2;
}
__name(dot2, "dot2");
function dot3(x1, y1, z1, x2, y2, z2) {
  return x1 * x2 + y1 * y2 + z1 * z2;
}
__name(dot3, "dot3");
function cross2(x1, y1, x2, y2) {
  return x1 * y2 - y1 * x2;
}
__name(cross2, "cross2");
var pi = Math.PI;
function point_in_rectangle(px, py, x1, y1, x2, y2) {
  return px >= Math.min(x1, x2) && px <= Math.max(x1, x2) && py >= Math.min(y1, y2) && py <= Math.max(y1, y2);
}
__name(point_in_rectangle, "point_in_rectangle");
function point_in_circle(px, py, cx, cy, rad) {
  const dx = px - cx, dy = py - cy;
  return dx * dx + dy * dy <= rad * rad;
}
__name(point_in_circle, "point_in_circle");
function point_in_triangle(px, py, x1, y1, x2, y2, x3, y3) {
  const d1 = (px - x2) * (y1 - y2) - (x1 - x2) * (py - y2);
  const d2 = (px - x3) * (y2 - y3) - (x2 - x3) * (py - y3);
  const d3 = (px - x1) * (y3 - y1) - (x3 - x1) * (py - y1);
  const has_neg = d1 < 0 || d2 < 0 || d3 < 0;
  const has_pos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(has_neg && has_pos);
}
__name(point_in_triangle, "point_in_triangle");
function _orient(ax, ay, bx, by, cx, cy) {
  return (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
}
__name(_orient, "_orient");
function _seg_intersect(ax, ay, bx, by, cx, cy, dx, dy) {
  const d1 = _orient(cx, cy, dx, dy, ax, ay);
  const d2 = _orient(cx, cy, dx, dy, bx, by);
  const d3 = _orient(ax, ay, bx, by, cx, cy);
  const d4 = _orient(ax, ay, bx, by, dx, dy);
  return (d1 > 0 && d2 < 0 || d1 < 0 && d2 > 0) && (d3 > 0 && d4 < 0 || d3 < 0 && d4 > 0);
}
__name(_seg_intersect, "_seg_intersect");
function rectangle_in_rectangle(sx1, sy1, sx2, sy2, x1, y1, x2, y2) {
  const sl = Math.min(sx1, sx2), sr = Math.max(sx1, sx2), st = Math.min(sy1, sy2), sb = Math.max(sy1, sy2);
  const l = Math.min(x1, x2), r = Math.max(x1, x2), t = Math.min(y1, y2), b = Math.max(y1, y2);
  if (sl >= l && sr <= r && st >= t && sb <= b)
    return 2;
  if (sl <= r && sr >= l && st <= b && sb >= t)
    return 1;
  return 0;
}
__name(rectangle_in_rectangle, "rectangle_in_rectangle");
function rectangle_in_circle(sx1, sy1, sx2, sy2, cx, cy, rad) {
  const l = Math.min(sx1, sx2), r = Math.max(sx1, sx2), t = Math.min(sy1, sy2), b = Math.max(sy1, sy2);
  const r2 = rad * rad;
  const inside = /* @__PURE__ */ __name((px, py) => {
    const dx2 = px - cx, dy2 = py - cy;
    return dx2 * dx2 + dy2 * dy2 <= r2;
  }, "inside");
  const n = (inside(l, t) ? 1 : 0) + (inside(r, t) ? 1 : 0) + (inside(r, b) ? 1 : 0) + (inside(l, b) ? 1 : 0);
  if (n === 4)
    return 2;
  if (n > 0)
    return 1;
  const nx = Math.max(l, Math.min(cx, r)), ny = Math.max(t, Math.min(cy, b));
  const dx = nx - cx, dy = ny - cy;
  return dx * dx + dy * dy <= r2 ? 1 : 0;
}
__name(rectangle_in_circle, "rectangle_in_circle");
function rectangle_in_triangle(sx1, sy1, sx2, sy2, x1, y1, x2, y2, x3, y3) {
  const l = Math.min(sx1, sx2), r = Math.max(sx1, sx2), t = Math.min(sy1, sy2), b = Math.max(sy1, sy2);
  const corners = [[l, t], [r, t], [r, b], [l, b]];
  let inside = 0;
  for (const [px, py] of corners)
    if (point_in_triangle(px, py, x1, y1, x2, y2, x3, y3))
      inside++;
  if (inside === 4)
    return 2;
  if (inside > 0)
    return 1;
  for (const [px, py] of [[x1, y1], [x2, y2], [x3, y3]])
    if (point_in_rectangle(px, py, l, t, r, b))
      return 1;
  const rect_edges = [[l, t, r, t], [r, t, r, b], [r, b, l, b], [l, b, l, t]];
  const tri_edges = [[x1, y1, x2, y2], [x2, y2, x3, y3], [x3, y3, x1, y1]];
  for (const e of rect_edges)
    for (const g of tri_edges)
      if (_seg_intersect(e[0], e[1], e[2], e[3], g[0], g[1], g[2], g[3]))
        return 1;
  return 0;
}
__name(rectangle_in_triangle, "rectangle_in_triangle");

// packages/engine/dist/core/type_checks.js
function is_real(value) {
  return typeof value === "number";
}
__name(is_real, "is_real");
function is_string(value) {
  return typeof value === "string";
}
__name(is_string, "is_string");
function is_array(value) {
  return Array.isArray(value);
}
__name(is_array, "is_array");
function is_undefined(value) {
  return value === void 0;
}
__name(is_undefined, "is_undefined");
function is_bool(value) {
  return typeof value === "boolean";
}
__name(is_bool, "is_bool");
function is_numeric(value) {
  return typeof value === "number" || typeof value === "boolean";
}
__name(is_numeric, "is_numeric");
function is_int32(value) {
  return typeof value === "number" && Number.isInteger(value) && value >= -2147483648 && value <= 2147483647;
}
__name(is_int32, "is_int32");
function is_int64(value) {
  return typeof value === "number" && Number.isInteger(value) && (value < -2147483648 || value > 2147483647);
}
__name(is_int64, "is_int64");
function is_nan(value) {
  return typeof value === "number" && Number.isNaN(value);
}
__name(is_nan, "is_nan");
function is_infinity(value) {
  return value === Infinity || value === -Infinity;
}
__name(is_infinity, "is_infinity");
function is_method(value) {
  return typeof value === "function";
}
__name(is_method, "is_method");

// packages/engine/dist/data/array_utils.js
function array_create(size, value = 0) {
  return new Array(Math.max(0, Math.floor(size))).fill(value);
}
__name(array_create, "array_create");
function array_length(arr) {
  return arr.length;
}
__name(array_length, "array_length");
function array_length_1d(arr) {
  return arr.length;
}
__name(array_length_1d, "array_length_1d");
function array_get(arr, index) {
  return arr[index];
}
__name(array_get, "array_get");
function array_set(arr, index, value) {
  for (let i = arr.length; i < index; i++)
    arr[i] = 0;
  arr[index] = value;
}
__name(array_set, "array_set");
function array_resize(arr, new_size) {
  const n = Math.max(0, Math.floor(new_size));
  if (n < arr.length)
    arr.length = n;
  else
    for (let i = arr.length; i < n; i++)
      arr[i] = 0;
}
__name(array_resize, "array_resize");
function array_copy(dest, dest_index, src, src_index, length) {
  for (let i = 0; i < length; i++)
    dest[dest_index + i] = src[src_index + i];
}
__name(array_copy, "array_copy");
function array_equals(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; i++)
    if (a[i] !== b[i])
      return false;
  return true;
}
__name(array_equals, "array_equals");
function array_push(arr, ...values) {
  return arr.push(...values);
}
__name(array_push, "array_push");
function array_pop(arr) {
  return arr.pop();
}
__name(array_pop, "array_pop");
function array_shift(arr) {
  return arr.shift();
}
__name(array_shift, "array_shift");
function array_insert(arr, index, ...values) {
  arr.splice(index, 0, ...values);
}
__name(array_insert, "array_insert");
function array_delete(arr, index, number = 1) {
  arr.splice(index, number);
}
__name(array_delete, "array_delete");
function array_sort(arr, type = true) {
  if (typeof type === "function") {
    arr.sort(type);
    return;
  }
  arr.sort((a, b) => {
    const cmp = a < b ? -1 : a > b ? 1 : 0;
    return type ? cmp : -cmp;
  });
}
__name(array_sort, "array_sort");
function array_reverse(arr) {
  return [...arr].reverse();
}
__name(array_reverse, "array_reverse");
function array_concat(...arrays) {
  return [].concat(...arrays);
}
__name(array_concat, "array_concat");
function array_contains(arr, value) {
  return arr.includes(value);
}
__name(array_contains, "array_contains");
function array_get_index(arr, value, offset = 0) {
  return arr.indexOf(value, offset);
}
__name(array_get_index, "array_get_index");

// packages/engine/dist/core/window.js
function window_set_caption(caption) {
  if (typeof document !== "undefined")
    document.title = caption;
}
__name(window_set_caption, "window_set_caption");
function window_get_caption() {
  return typeof document !== "undefined" ? document.title : "";
}
__name(window_get_caption, "window_get_caption");
function window_get_width() {
  try {
    return renderer.get_canvas().width;
  } catch {
    return 0;
  }
}
__name(window_get_width, "window_get_width");
function window_get_height() {
  try {
    return renderer.get_canvas().height;
  } catch {
    return 0;
  }
}
__name(window_get_height, "window_get_height");
function window_set_size(w, h) {
  try {
    const c = renderer.get_canvas();
    c.width = Math.max(1, w);
    c.height = Math.max(1, h);
  } catch {
  }
}
__name(window_set_size, "window_set_size");
function display_get_width() {
  return typeof screen !== "undefined" ? screen.width : 0;
}
__name(display_get_width, "display_get_width");
function display_get_height() {
  return typeof screen !== "undefined" ? screen.height : 0;
}
__name(display_get_height, "display_get_height");
function display_get_gui_width() {
  return window_get_width();
}
__name(display_get_gui_width, "display_get_gui_width");
function display_get_gui_height() {
  return window_get_height();
}
__name(display_get_gui_height, "display_get_gui_height");
function window_set_fullscreen(full) {
  if (typeof document === "undefined")
    return;
  try {
    if (full)
      document.documentElement.requestFullscreen?.();
    else if (document.fullscreenElement)
      document.exitFullscreen?.();
  } catch {
  }
}
__name(window_set_fullscreen, "window_set_fullscreen");
function window_get_fullscreen() {
  return typeof document !== "undefined" && !!document.fullscreenElement;
}
__name(window_get_fullscreen, "window_get_fullscreen");

// packages/engine/dist/core/variables.js
var global_store = {};
var global2 = global_store;
for (const [key, getter, setter] of [
  ["score", get_score, set_score],
  ["lives", get_lives, set_lives],
  ["health", get_health, set_health]
]) {
  Object.defineProperty(global2, key, { get: getter, set: setter, enumerable: false, configurable: true });
}
function variable_instance_get(inst, name) {
  return inst[name];
}
__name(variable_instance_get, "variable_instance_get");
function variable_instance_set(inst, name, value) {
  inst[name] = value;
}
__name(variable_instance_set, "variable_instance_set");
function variable_instance_exists(inst, name) {
  return name in inst;
}
__name(variable_instance_exists, "variable_instance_exists");
function variable_instance_get_names(inst) {
  return Object.keys(inst);
}
__name(variable_instance_get_names, "variable_instance_get_names");
function variable_global_get(name) {
  return global_store[name];
}
__name(variable_global_get, "variable_global_get");
function variable_global_set(name, value) {
  global_store[name] = value;
}
__name(variable_global_set, "variable_global_set");
function variable_global_exists(name) {
  return Object.prototype.hasOwnProperty.call(global_store, name);
}
__name(variable_global_exists, "variable_global_exists");
function variable_global_get_names() {
  return Object.keys(global_store);
}
__name(variable_global_get_names, "variable_global_get_names");

// packages/engine/dist/math/string_utils.js
function string_length(str) {
  return str.length;
}
__name(string_length, "string_length");
function string_copy(str, index, count) {
  return str.substring(index, index + count);
}
__name(string_copy, "string_copy");
function string_pos(substr, str) {
  return str.indexOf(substr);
}
__name(string_pos, "string_pos");
function string_pos_ext(substr, str, occurrence = 1) {
  let from = 0, found = -1;
  for (let i = 0; i < occurrence; i++) {
    found = str.indexOf(substr, from);
    if (found < 0)
      return -1;
    from = found + 1;
  }
  return found;
}
__name(string_pos_ext, "string_pos_ext");
function string_delete(str, index, count) {
  return str.slice(0, index) + str.slice(index + count);
}
__name(string_delete, "string_delete");
function string_insert(substr, str, index) {
  return str.slice(0, index) + substr + str.slice(index);
}
__name(string_insert, "string_insert");
function string_replace(str, old_str, new_str) {
  const i = str.indexOf(old_str);
  if (i < 0)
    return str;
  return str.slice(0, i) + new_str + str.slice(i + old_str.length);
}
__name(string_replace, "string_replace");
function string_replace_all(str, old_str, new_str) {
  if (old_str === "")
    return str;
  return str.split(old_str).join(new_str);
}
__name(string_replace_all, "string_replace_all");
function string_count(substr, str) {
  if (substr === "")
    return 0;
  let count = 0, pos = 0;
  while ((pos = str.indexOf(substr, pos)) >= 0) {
    count++;
    pos += substr.length;
  }
  return count;
}
__name(string_count, "string_count");
function string_lower(str) {
  return str.toLowerCase();
}
__name(string_lower, "string_lower");
function string_upper(str) {
  return str.toUpperCase();
}
__name(string_upper, "string_upper");
function string_letters(str) {
  return str.replace(/[^a-zA-Z]/g, "");
}
__name(string_letters, "string_letters");
function string_digits(str) {
  return str.replace(/[^0-9]/g, "");
}
__name(string_digits, "string_digits");
function string_lettersdigits(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}
__name(string_lettersdigits, "string_lettersdigits");
function string_trim(str) {
  return str.trim();
}
__name(string_trim, "string_trim");
function string_trim_start(str) {
  return str.trimStart();
}
__name(string_trim_start, "string_trim_start");
function string_trim_end(str) {
  return str.trimEnd();
}
__name(string_trim_end, "string_trim_end");
function string_repeat(str, n) {
  return str.repeat(Math.max(0, n));
}
__name(string_repeat, "string_repeat");
function string_reverse(str) {
  return [...str].reverse().join("");
}
__name(string_reverse, "string_reverse");
function string_char_at(str, index) {
  return str[index] ?? "";
}
__name(string_char_at, "string_char_at");
function string_byte_at(str, index) {
  return str.charCodeAt(index) || 0;
}
__name(string_byte_at, "string_byte_at");
function string_byte_length(str) {
  return str.length * 2;
}
__name(string_byte_length, "string_byte_length");
function chr(code) {
  return String.fromCodePoint(code);
}
__name(chr, "chr");
function ord(str) {
  return str.codePointAt(0) ?? 0;
}
__name(ord, "ord");
function string_ord_at(str, index) {
  return str.codePointAt(index) ?? 0;
}
__name(string_ord_at, "string_ord_at");
function ansi_char(code) {
  return String.fromCharCode(code);
}
__name(ansi_char, "ansi_char");
function string_format(val, tot, dec) {
  const formatted = val.toFixed(dec);
  return formatted.length < tot ? formatted.padStart(tot) : formatted;
}
__name(string_format, "string_format");
function string(val) {
  if (typeof val === "number") {
    return Number.isInteger(val) ? String(val) : String(val);
  }
  return String(val);
}
__name(string, "string");
function real(str) {
  const n = parseFloat(str);
  return isNaN(n) ? 0 : n;
}
__name(real, "real");
function string_split(str, delimiter) {
  return str.split(delimiter);
}
__name(string_split, "string_split");
function string_join(parts, separator = "") {
  return parts.join(separator);
}
__name(string_join, "string_join");

// packages/engine/dist/math/regex_utils.js
function regex_match(str, pattern, flags = "") {
  try {
    return new RegExp(pattern, flags).test(str);
  } catch {
    return false;
  }
}
__name(regex_match, "regex_match");
function regex_find(str, pattern, flags = "") {
  try {
    return str.match(new RegExp(pattern, flags))?.[0] ?? null;
  } catch {
    return null;
  }
}
__name(regex_find, "regex_find");
function regex_find_all(str, pattern, flags = "g") {
  try {
    return [...str.matchAll(new RegExp(pattern, flags))].map((m) => m[0]);
  } catch {
    return [];
  }
}
__name(regex_find_all, "regex_find_all");
function regex_replace(str, pattern, replacement, flags = "") {
  try {
    return str.replace(new RegExp(pattern, flags), replacement);
  } catch {
    return str;
  }
}
__name(regex_replace, "regex_replace");
function regex_replace_all(str, pattern, replacement, flags = "g") {
  try {
    return str.replace(new RegExp(pattern, flags), replacement);
  } catch {
    return str;
  }
}
__name(regex_replace_all, "regex_replace_all");
function regex_split(str, pattern, flags = "") {
  try {
    return str.split(new RegExp(pattern, flags));
  } catch {
    return [str];
  }
}
__name(regex_split, "regex_split");
function regex_pos(str, pattern, flags = "") {
  try {
    return str.search(new RegExp(pattern, flags));
  } catch {
    return -1;
  }
}
__name(regex_pos, "regex_pos");
function regex_groups(str, pattern, flags = "") {
  try {
    const m = str.match(new RegExp(pattern, flags));
    return m ? [...m].map((s) => s ?? "") : [];
  } catch {
    return [];
  }
}
__name(regex_groups, "regex_groups");
export {
  EVENT_TYPE,
  MASK_CIRCLE,
  MASK_ELLIPSE,
  MASK_RECT,
  MAX_LIGHTS,
  abs,
  angle_difference,
  ansi_char,
  approx,
  arccos,
  arcsin,
  arctan,
  arctan2,
  array_concat,
  array_contains,
  array_copy,
  array_create,
  array_delete,
  array_equals,
  array_get,
  array_get_index,
  array_insert,
  array_length,
  array_length_1d,
  array_pop,
  array_push,
  array_random,
  array_resize,
  array_reverse,
  array_set,
  array_shift,
  array_shuffle,
  array_sort,
  audio_get_listener_x,
  audio_get_listener_y,
  audio_get_master_gain,
  audio_group,
  audio_group_get_gain,
  audio_group_set_gain,
  audio_group_stop,
  audio_is_playing,
  audio_play_sound,
  audio_play_sound_at,
  audio_set_listener_position,
  audio_set_master_gain,
  audio_set_sound_position,
  audio_sound_gain,
  audio_sound_pitch,
  audio_stop_all,
  audio_stop_sound,
  audio_system,
  background,
  background_get_height,
  background_get_width,
  base64_decode,
  base64_encode,
  between,
  bm_add,
  bm_max,
  bm_normal,
  bm_subtract,
  buffer_base64_decode,
  buffer_base64_encode,
  buffer_bool,
  buffer_copy,
  buffer_create,
  buffer_delete,
  buffer_exists,
  buffer_f32,
  buffer_f64,
  buffer_fast,
  buffer_fill,
  buffer_fixed,
  buffer_from_bytes,
  buffer_get_bytes,
  buffer_get_size,
  buffer_grow,
  buffer_peek,
  buffer_poke,
  buffer_read,
  buffer_resize,
  buffer_s16,
  buffer_s32,
  buffer_s8,
  buffer_seek,
  buffer_seek_end,
  buffer_seek_relative,
  buffer_seek_start,
  buffer_sizeof,
  buffer_string,
  buffer_tell,
  buffer_u16,
  buffer_u32,
  buffer_u64,
  buffer_u8,
  buffer_wrap,
  buffer_write,
  c_aqua,
  c_black,
  c_blue,
  c_dkgray,
  c_fuchsia,
  c_gray,
  c_green,
  c_lime,
  c_ltgray,
  c_maroon,
  c_navy,
  c_olive,
  c_orange,
  c_purple,
  c_red,
  c_silver,
  c_teal,
  c_white,
  c_yellow,
  camera_set_view_pos,
  camera_set_view_size,
  ceil,
  choose,
  chr,
  circle_in_instance,
  clamp,
  clipboard_get_text,
  clipboard_has_text,
  clipboard_set_text,
  collision_circle,
  collision_line,
  collision_point,
  collision_rectangle,
  color_get_blue,
  color_get_green,
  color_get_hue,
  color_get_red,
  color_get_saturation,
  color_get_value,
  color_to_rgb_normalized,
  colour_get_blue,
  colour_get_green,
  colour_get_hue,
  colour_get_red,
  colour_get_saturation,
  colour_get_value,
  cross2,
  current_day,
  current_hour,
  current_minute,
  current_month,
  current_second,
  current_time,
  current_weekday,
  current_year,
  d3d_light_define_direction,
  d3d_light_define_point,
  d3d_light_enable,
  d3d_light_get_all,
  d3d_light_get_uniforms,
  d3d_light_set_ambient,
  d3d_lighttype_directional,
  d3d_lighttype_point,
  d3d_model_block,
  d3d_model_clear,
  d3d_model_create,
  d3d_model_destroy,
  d3d_model_draw,
  d3d_model_exists,
  d3d_model_primitive_begin,
  d3d_model_primitive_end,
  d3d_model_set_normal,
  d3d_model_set_uv,
  d3d_model_sphere,
  d3d_model_vertex,
  d3d_model_vertex_normal,
  d3d_model_vertex_texture,
  d3d_transform_add_rotation_x,
  d3d_transform_add_rotation_y,
  d3d_transform_add_rotation_z,
  d3d_transform_add_scaling,
  d3d_transform_add_translation,
  d3d_transform_get,
  d3d_transform_set_identity,
  d3d_transform_set_rotation,
  d3d_transform_set_scaling,
  d3d_transform_set_translation,
  d3d_transform_stack_clear,
  d3d_transform_stack_pop,
  d3d_transform_stack_push,
  darccos,
  darcsin,
  darctan,
  darctan2,
  date_compare_datetime,
  date_create_date,
  date_create_datetime,
  date_current_datetime,
  date_date_string,
  date_datetime_string,
  date_day_span,
  date_days_in_month,
  date_days_in_year,
  date_get_day,
  date_get_day_of_year,
  date_get_hour,
  date_get_minute,
  date_get_month,
  date_get_second,
  date_get_weekday,
  date_get_year,
  date_hour_span,
  date_inc_day,
  date_inc_hour,
  date_inc_minute,
  date_inc_month,
  date_inc_second,
  date_inc_week,
  date_inc_year,
  date_leap_year,
  date_minute_span,
  date_second_span,
  date_time_string,
  dcos,
  degtorad,
  delta_time,
  device_get_touch_count,
  device_mouse_check_button,
  device_mouse_check_button_pressed,
  device_mouse_check_button_released,
  device_mouse_x,
  device_mouse_y,
  display_get_gui_height,
  display_get_gui_width,
  display_get_height,
  display_get_width,
  dot2,
  dot3,
  dot_product,
  dot_product_3d,
  draw_background,
  draw_background_ext,
  draw_background_stretched,
  draw_background_tiled,
  draw_circle,
  draw_clear,
  draw_ellipse,
  draw_get_alpha,
  draw_get_color,
  draw_get_colour,
  draw_line,
  draw_line_width,
  draw_point,
  draw_rectangle,
  draw_set_alpha,
  draw_set_blend_mode,
  draw_set_color,
  draw_set_colour,
  draw_set_font,
  draw_set_halign,
  draw_set_valign,
  draw_sprite,
  draw_sprite_ext,
  draw_sprite_part,
  draw_sprite_stretched,
  draw_surface,
  draw_text,
  draw_triangle,
  ds_grid_add,
  ds_grid_add_region,
  ds_grid_clear,
  ds_grid_copy,
  ds_grid_create,
  ds_grid_destroy,
  ds_grid_exists,
  ds_grid_get,
  ds_grid_get_max,
  ds_grid_get_mean,
  ds_grid_get_min,
  ds_grid_get_sum,
  ds_grid_height,
  ds_grid_multiply,
  ds_grid_multiply_region,
  ds_grid_read,
  ds_grid_region_get,
  ds_grid_set,
  ds_grid_set_region,
  ds_grid_width,
  ds_grid_write,
  ds_list_add,
  ds_list_clear,
  ds_list_copy,
  ds_list_create,
  ds_list_delete,
  ds_list_destroy,
  ds_list_empty,
  ds_list_exists,
  ds_list_find_index,
  ds_list_find_value,
  ds_list_insert,
  ds_list_read,
  ds_list_replace,
  ds_list_shuffle,
  ds_list_size,
  ds_list_sort,
  ds_list_write,
  ds_map_add,
  ds_map_clear,
  ds_map_copy,
  ds_map_create,
  ds_map_delete,
  ds_map_destroy,
  ds_map_empty,
  ds_map_exists,
  ds_map_exists_id,
  ds_map_find_first,
  ds_map_find_last,
  ds_map_find_next,
  ds_map_find_previous,
  ds_map_find_value,
  ds_map_read,
  ds_map_set,
  ds_map_size,
  ds_map_write,
  ds_priority_add,
  ds_priority_clear,
  ds_priority_copy,
  ds_priority_create,
  ds_priority_delete_max,
  ds_priority_delete_min,
  ds_priority_delete_value,
  ds_priority_destroy,
  ds_priority_empty,
  ds_priority_exists,
  ds_priority_find_max,
  ds_priority_find_min,
  ds_priority_find_priority,
  ds_priority_size,
  ds_queue_clear,
  ds_queue_copy,
  ds_queue_create,
  ds_queue_dequeue,
  ds_queue_destroy,
  ds_queue_empty,
  ds_queue_enqueue,
  ds_queue_exists,
  ds_queue_head,
  ds_queue_size,
  ds_queue_tail,
  ds_stack_clear,
  ds_stack_copy,
  ds_stack_create,
  ds_stack_destroy,
  ds_stack_empty,
  ds_stack_exists,
  ds_stack_pop,
  ds_stack_push,
  ds_stack_size,
  ds_stack_top,
  dsin,
  dtan,
  exp,
  fa_bottom,
  fa_center,
  fa_left,
  fa_middle,
  fa_right,
  fa_top,
  file_delete,
  file_exists,
  file_text_close,
  file_text_eof,
  file_text_open_append,
  file_text_open_read,
  file_text_open_write,
  file_text_read_string,
  file_text_readln,
  file_text_write_string,
  file_text_writeln,
  floor,
  font_exists,
  font_get,
  font_register_name,
  font_resource,
  fps,
  fps_real,
  frac,
  game_end,
  game_event,
  game_loop,
  game_restart,
  gamepad_axis_count,
  gamepad_axis_value,
  gamepad_button_check,
  gamepad_button_check_pressed,
  gamepad_button_check_released,
  gamepad_button_count,
  gamepad_button_value,
  gamepad_get_description,
  gamepad_get_device_count,
  gamepad_is_connected,
  gamepad_is_supported,
  gamepad_manager,
  gamepad_set_vibration,
  get_bbox,
  get_health,
  get_integer,
  get_lives,
  get_score,
  get_string,
  get_timer,
  global2 as global,
  global_store,
  gm_object,
  gp_axislh,
  gp_axislv,
  gp_axisrh,
  gp_axisrv,
  gp_face1,
  gp_face2,
  gp_face3,
  gp_face4,
  gp_padd,
  gp_padl,
  gp_padr,
  gp_padu,
  gp_select,
  gp_shoulderl,
  gp_shoulderlb,
  gp_shoulderr,
  gp_shoulderrb,
  gp_start,
  gp_stickl,
  gp_stickr,
  http_get,
  http_get_bytes,
  http_post,
  http_post_json,
  http_request,
  ini_close,
  ini_delete,
  ini_key_delete,
  ini_key_exists,
  ini_open,
  ini_read_real,
  ini_read_string,
  ini_section_delete,
  ini_section_exists,
  ini_write_real,
  ini_write_string,
  instance,
  instance_create,
  instance_destroy,
  instance_exists,
  instance_find,
  instance_furthest,
  instance_nearest,
  instance_number,
  instances_collide,
  io_clear,
  irandom,
  irandom_range,
  is_array,
  is_bool,
  is_infinity,
  is_int32,
  is_int64,
  is_method,
  is_nan,
  is_numeric,
  is_real,
  is_string,
  is_undefined,
  json_decode,
  json_deep_clone,
  json_delete,
  json_encode,
  json_is_valid,
  json_load,
  json_save,
  json_stringify_pretty,
  keyboard_check,
  keyboard_check_direct,
  keyboard_check_pressed,
  keyboard_check_released,
  keyboard_clear,
  keyboard_get_map,
  keyboard_key_press,
  keyboard_key_release,
  keyboard_manager,
  keyboard_set_map,
  keyboard_unset_map,
  lengthdir_x,
  lengthdir_y,
  lerp,
  line_in_instance,
  ln,
  log10,
  log2,
  logn,
  make_color_hsv,
  make_color_rgb,
  make_colour_hsv,
  make_colour_rgb,
  mat4_identity,
  mat4_look_at,
  mat4_mul,
  mat4_ortho,
  mat4_perspective,
  mat4_rotate_x,
  mat4_rotate_y,
  mat4_rotate_z,
  mat4_scale,
  mat4_translate,
  max,
  mb_any,
  mb_left,
  mb_middle,
  mb_none,
  mb_right,
  md5_string_utf8,
  mean,
  median,
  merge_color,
  merge_colour,
  min,
  model_load_obj,
  model_load_obj_url,
  mouse_check_button,
  mouse_check_button_pressed,
  mouse_check_button_released,
  mouse_clear,
  mouse_manager,
  mouse_wheel_down,
  mouse_wheel_up,
  mouse_x,
  mouse_y,
  mp_grid_add_cell,
  mp_grid_add_instances,
  mp_grid_add_rectangle,
  mp_grid_clear_all,
  mp_grid_clear_cell,
  mp_grid_clear_rectangle,
  mp_grid_create,
  mp_grid_destroy,
  mp_grid_get_cell,
  mp_grid_path,
  mp_potential_settings,
  network_create_socket,
  network_destroy,
  network_get_ready_state,
  network_send_raw,
  network_send_text,
  network_set_on_close,
  network_set_on_error,
  network_set_on_message,
  network_set_on_open,
  network_socket_exists,
  network_type_connect,
  network_type_data,
  network_type_disconnect,
  network_type_non_blocking_connect,
  object_exists,
  object_get,
  object_get_name,
  object_get_parent,
  object_get_sprite,
  object_is_ancestor,
  object_register_name,
  ord,
  part_emitter_burst,
  part_emitter_create,
  part_emitter_destroy,
  part_emitter_exists,
  part_emitter_region,
  part_emitter_stream,
  part_system_clear,
  part_system_count,
  part_system_create,
  part_system_depth,
  part_system_destroy,
  part_system_draw,
  part_system_exists,
  part_system_update,
  part_type_alpha1,
  part_type_alpha2,
  part_type_alpha3,
  part_type_blend,
  part_type_color1,
  part_type_color2,
  part_type_color3,
  part_type_create,
  part_type_death,
  part_type_destroy,
  part_type_direction,
  part_type_exists,
  part_type_gravity,
  part_type_life,
  part_type_orientation,
  part_type_shape,
  part_type_size,
  part_type_speed,
  part_type_step,
  path_action_continue,
  path_action_restart,
  path_action_reverse,
  path_action_stop,
  path_add_point,
  path_clear_points,
  path_create,
  path_delete,
  path_exists,
  path_flip,
  path_get_index,
  path_get_length,
  path_get_number,
  path_get_point_speed,
  path_get_point_x,
  path_get_point_y,
  path_get_speed,
  path_get_x,
  path_get_y,
  path_kind_linear,
  path_kind_smooth,
  path_mirror,
  path_register_name,
  path_reverse,
  path_set_closed,
  path_set_kind,
  path_set_precision,
  physics_body_apply_force,
  physics_body_apply_force_at,
  physics_body_apply_impulse,
  physics_body_apply_torque,
  physics_body_destroy,
  physics_body_exists,
  physics_body_get_angle,
  physics_body_get_angular_velocity,
  physics_body_get_raw,
  physics_body_get_vx,
  physics_body_get_vy,
  physics_body_get_x,
  physics_body_get_y,
  physics_body_set_angular_velocity,
  physics_body_set_position,
  physics_body_set_static,
  physics_body_set_velocity,
  physics_fixture_bind,
  physics_fixture_create,
  physics_fixture_delete,
  physics_fixture_set_box,
  physics_fixture_set_circle,
  physics_fixture_set_density,
  physics_fixture_set_friction,
  physics_fixture_set_polygon,
  physics_fixture_set_restitution,
  physics_fixture_set_sensor,
  physics_get_scale,
  physics_joint_destroy,
  physics_joint_distance_create,
  physics_joint_exists,
  physics_joint_get_raw,
  physics_joint_get_value,
  physics_joint_revolute_create,
  physics_joint_rope_create,
  physics_joint_set_value,
  physics_joint_spring_create,
  physics_joint_weld_create,
  physics_raycast,
  physics_test_overlap,
  physics_world_create,
  physics_world_destroy,
  physics_world_get_engine,
  physics_world_gravity,
  physics_world_on_collision_end,
  physics_world_on_collision_start,
  physics_world_step,
  pi,
  point_direction,
  point_distance,
  point_distance_3d,
  point_in_circle,
  point_in_instance,
  point_in_rectangle,
  point_in_triangle,
  position_destroy,
  position_meeting,
  power,
  pr_linelist,
  pr_linestrip,
  pr_pointlist,
  pr_trianglefan,
  pr_trianglelist,
  pr_trianglestrip,
  ps_distr_gaussian,
  ps_distr_inv_gaussian,
  ps_distr_linear,
  ps_shape_diamond,
  ps_shape_ellipse,
  ps_shape_line,
  ps_shape_rectangle,
  pt_shape_circle,
  pt_shape_cloud,
  pt_shape_disk,
  pt_shape_explosion,
  pt_shape_flare,
  pt_shape_line,
  pt_shape_pixel,
  pt_shape_ring,
  pt_shape_smoke,
  pt_shape_snow,
  pt_shape_spark,
  pt_shape_sphere,
  pt_shape_square,
  pt_shape_star,
  radtodeg,
  random,
  random_get_seed,
  random_native,
  random_range,
  random_set_seed,
  randomize,
  real,
  rect_in_instance,
  rectangle_in_circle,
  rectangle_in_rectangle,
  rectangle_in_triangle,
  regex_find,
  regex_find_all,
  regex_groups,
  regex_match,
  regex_pos,
  regex_replace,
  regex_replace_all,
  regex_split,
  renderer,
  resource,
  room,
  room_exists,
  room_get,
  room_get_name,
  room_goto,
  room_goto_next,
  room_goto_previous,
  room_register_name,
  room_restart,
  round,
  set_application_title,
  set_health,
  set_lives,
  set_score,
  sha1_string_utf8,
  shader_current,
  shader_get_uniform,
  shader_reset,
  shader_set,
  shader_set_uniform_f,
  shader_set_uniform_f2,
  shader_set_uniform_f3,
  shader_set_uniform_f4,
  shader_set_uniform_f_array,
  shader_set_uniform_i,
  shader_set_uniform_i2,
  shader_set_uniform_matrix,
  show_debug_message,
  show_message,
  show_question,
  sign,
  sound_asset,
  sound_get_name,
  sound_instance,
  sound_register_name,
  spatial_sound_instance,
  sprite,
  sprite_add,
  sprite_duplicate,
  sprite_exists,
  sprite_get_height,
  sprite_get_index,
  sprite_get_number,
  sprite_get_width,
  sprite_get_xoffset,
  sprite_get_yoffset,
  sprite_register_name,
  sprite_set_offset,
  sqr,
  sqrt,
  string,
  string_byte_at,
  string_byte_length,
  string_char_at,
  string_copy,
  string_count,
  string_delete,
  string_digits,
  string_format,
  string_height,
  string_insert,
  string_join,
  string_length,
  string_letters,
  string_lettersdigits,
  string_lower,
  string_ord_at,
  string_pos,
  string_pos_ext,
  string_repeat,
  string_replace,
  string_replace_all,
  string_reverse,
  string_split,
  string_trim,
  string_trim_end,
  string_trim_start,
  string_upper,
  string_width,
  surface_create,
  surface_exists,
  surface_free,
  surface_get_height,
  surface_get_width,
  surface_reset_target,
  surface_set_target,
  texture_manager,
  tile_add,
  tile_delete,
  tile_exists,
  tile_get_depth,
  tile_get_visible,
  tile_get_x,
  tile_get_y,
  tile_layer_delete,
  tile_layer_find,
  tile_layer_shift,
  tile_set_alpha,
  tile_set_background,
  tile_set_depth,
  tile_set_position,
  tile_set_scale,
  tile_set_visible,
  timeline_create,
  timeline_delete,
  timeline_exists,
  timeline_get_index,
  timeline_get_moment_count,
  timeline_get_position,
  timeline_moment_add,
  timeline_moment_clear,
  timeline_pause,
  timeline_play,
  timeline_register_name,
  timeline_set_loop,
  timeline_set_position,
  timeline_set_speed,
  timeline_step,
  timeline_step_all,
  timeline_stop,
  touch_manager,
  update_bbox,
  user_shader,
  variable_global_exists,
  variable_global_get,
  variable_global_get_names,
  variable_global_set,
  variable_instance_exists,
  variable_instance_get,
  variable_instance_get_names,
  variable_instance_set,
  vector2,
  view_apply,
  view_get,
  view_get_x,
  view_get_y,
  view_set_angle,
  view_set_enabled,
  view_set_port,
  view_set_position,
  view_set_size,
  vk_add,
  vk_alt,
  vk_anykey,
  vk_backspace,
  vk_control,
  vk_decimal,
  vk_delete,
  vk_divide,
  vk_down,
  vk_end,
  vk_enter,
  vk_escape,
  vk_f1,
  vk_f10,
  vk_f11,
  vk_f12,
  vk_f2,
  vk_f3,
  vk_f4,
  vk_f5,
  vk_f6,
  vk_f7,
  vk_f8,
  vk_f9,
  vk_home,
  vk_insert,
  vk_left,
  vk_multiply,
  vk_nokey,
  vk_numpad0,
  vk_numpad1,
  vk_numpad2,
  vk_numpad3,
  vk_numpad4,
  vk_numpad5,
  vk_numpad6,
  vk_numpad7,
  vk_numpad8,
  vk_numpad9,
  vk_pagedown,
  vk_pageup,
  vk_pause,
  vk_printscreen,
  vk_right,
  vk_shift,
  vk_space,
  vk_subtract,
  vk_tab,
  vk_up,
  webrtc_add_ice_candidate,
  webrtc_create_answer,
  webrtc_create_channel,
  webrtc_create_offer,
  webrtc_create_peer,
  webrtc_destroy_peer,
  webrtc_get_state,
  webrtc_peer_exists,
  webrtc_send,
  webrtc_send_text,
  webrtc_set_on_channel,
  webrtc_set_on_close,
  webrtc_set_on_ice_candidate,
  webrtc_set_on_message,
  webrtc_set_on_open,
  webrtc_set_remote_answer,
  window_get_caption,
  window_get_fullscreen,
  window_get_height,
  window_get_width,
  window_mouse_get_x,
  window_mouse_get_y,
  window_mouse_set,
  window_set_caption,
  window_set_fullscreen,
  window_set_size,
  with_object,
  wrap
};
/*! Bundled license information:

matter-js/build/matter.js:
  (*!
   * matter-js 0.20.0 by @liabru
   * http://brm.io/matter-js/
   * License MIT
   * 
   * The MIT License (MIT)
   * 
   * Copyright (c) Liam Brummitt and contributors.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)
*/
