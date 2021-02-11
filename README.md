# [Nearest Neighbor](https://github.com/ignatisD/nearest-neighbor)

[![view on npm](https://img.shields.io/npm/v/@ignatisd/nearest-neighbor)](https://www.npmjs.com/package/@ignatisd/nearest-neighbor)
[![license](https://img.shields.io/npm/l/@ignatisd/nearest-neighbor)](https://github.com/ignatisD/nearest-neighbor/blob/HEAD/LICENSE)
[![Tests](https://github.com/ignatisD/nearest-neighbor/workflows/Tests/badge.svg)](https://github.com/ignatisD/nearest-neighbor/actions?query=workflow%3ATests)
[![codecov](https://codecov.io/gh/ignatisD/nearest-neighbor/branch/master/graph/badge.svg?token=48k4ayRapx)](https://codecov.io/gh/ignatisD/nearest-neighbor)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<a name="module_nearestNeighbor"></a>

## nearestNeighbor
Brute forcing the nearest neighbor problem.

**Author**: Ignatios Drakoulas  
**License**: MIT  

* [nearestNeighbor](#module_nearestNeighbor)
    * [~Point](#module_nearestNeighbor..Point)
        * [new Point(x, y)](#new_module_nearestNeighbor..Point_new)
    * [~sortBruteForce(neighbors, [distanceFn])](#module_nearestNeighbor..sortBruteForce) ⇒ <code>Array.&lt;Point&gt;</code> \| <code>Array.&lt;any&gt;</code>
    * [~getNearestIndex(home, neighbors, [distanceFn])](#module_nearestNeighbor..getNearestIndex) ⇒ <code>number</code>
    * [~getNearest(home, neighbors, [distanceFn])](#module_nearestNeighbor..getNearest) ⇒ <code>Point</code> \| <code>any</code>

<a name="module_nearestNeighbor..Point"></a>

### nearestNeighbor~Point
**Kind**: inner class of [<code>nearestNeighbor</code>](#module_nearestNeighbor)  
<a name="new_module_nearestNeighbor..Point_new"></a>

#### new Point(x, y)
Represents a point in two dimensions.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | abscissa |
| y | <code>Number</code> | ordinate |

<a name="module_nearestNeighbor..sortBruteForce"></a>

### nearestNeighbor~sortBruteForce(neighbors, [distanceFn]) ⇒ <code>Array.&lt;Point&gt;</code> \| <code>Array.&lt;any&gt;</code>
Sorts all the neighbors by their respective distance starting from the first

**Kind**: inner method of [<code>nearestNeighbor</code>](#module_nearestNeighbor)  

| Param | Type | Description |
| --- | --- | --- |
| neighbors | <code>Array.&lt;Point&gt;</code> \| <code>Array.&lt;any&gt;</code> | The array of [Point](Point) elements |
| [distanceFn] | <code>function</code> | Optional, [distSquared](distSquared) will be used if none provided |

**Example**  
```js
var nn = require("./nearestNeighbor.js");
var neighbors = [
      {x: 5, y: 5},
      {x: 3, y: 3},
      {x: 4, y: 4},
      {x: 1, y: 1},
      {x: 2, y: 2},
      //other points
 ];
var ordered_neighbors = nn.sortBruteForce(neighbors);
// ordered_neighbors now contain the neighbors, in the order they ought to be visited.
```
<a name="module_nearestNeighbor..getNearestIndex"></a>

### nearestNeighbor~getNearestIndex(home, neighbors, [distanceFn]) ⇒ <code>number</code>
Returns the nearest, relative to the provided home point, neighbor's index from the array of neighbors

**Kind**: inner method of [<code>nearestNeighbor</code>](#module_nearestNeighbor)  

| Param | Type | Description |
| --- | --- | --- |
| home | <code>Point</code> \| <code>any</code> | The reference [Point](Point) |
| neighbors | <code>Array.&lt;Point&gt;</code> \| <code>Array.&lt;any&gt;</code> | The array of [Point](Point) elements |
| [distanceFn] | <code>function</code> | Optional, [distSquared](distSquared) will be used if none provided |

**Example**  
```js
var nn = require("./nearestNeighbor.js");
var home = {x: 6, y: 6};
var neighbors = [
      {x: 4, y: 4},
      {x: 3, y: 3},
      {x: 5, y: 5},
      {x: 1, y: 1},
      {x: 2, y: 2},
      //other points
 ];
var index = nn.getNearestIndex(home, neighbors);
// index will equal 2, because {x: 5, y: 5} is
// the nearest neighbor for {x: 6, y: 6} which is the home point
```
<a name="module_nearestNeighbor..getNearest"></a>

### nearestNeighbor~getNearest(home, neighbors, [distanceFn]) ⇒ <code>Point</code> \| <code>any</code>
Returns the nearest neighbor, relative to the provided home point, from the given array of neighbors

**Kind**: inner method of [<code>nearestNeighbor</code>](#module_nearestNeighbor)  

| Param | Type | Description |
| --- | --- | --- |
| home | <code>Point</code> \| <code>any</code> | The reference [Point](Point) |
| neighbors | <code>Array.&lt;Point&gt;</code> \| <code>Array.&lt;any&gt;</code> | The array of [Point](Point) elements |
| [distanceFn] | <code>function</code> | Optional, [distSquared](distSquared) will be used if none provided |

**Example**  
```js
var nn = require("./nearestNeighbor.js");
var home = {x: 6, y: 6};
var neighbors = [
      {x: 5, y: 5},
      {x: 3, y: 3},
      {x: 4, y: 4},
      {x: 1, y: 1},
      {x: 2, y: 2},
      //other points
 ];
var neighbor = nn.getNearest(home, neighbors);
// neighbor will equal {x: 5, y: 5}, because {x: 5, y: 5} is
// the nearest neighbor for {x: 6, y: 6} which is the home point
```

* * *

Copyright &copy; 2021 Ignatios Drakoulas