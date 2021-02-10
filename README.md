<a name="module_nearestNeighbor"></a>

## nearestNeighbor
**Author**: Ignatios Drakoulas
nearestNeighbor npm module

Brute forcing the nearest neighbor problem.  

* [nearestNeighbor](#module_nearestNeighbor)
    * [~Point](#module_nearestNeighbor..Point)
        * [new Point(x, y)](#new_module_nearestNeighbor..Point_new)
    * [~NearestNeighborBruteForce(neighbors, [distanceFn&#x3D;])](#module_nearestNeighbor..NearestNeighborBruteForce) ⇒ <code>Array.&lt;Point&gt;</code> \| <code>Array.&lt;any&gt;</code>
    * [~NearestNeighborsIndex(home, neighbors, [distanceFn&#x3D;])](#module_nearestNeighbor..NearestNeighborsIndex) ⇒ <code>number</code>
    * [~NearestNeighbor(home, neighbors, [distanceFn&#x3D;])](#module_nearestNeighbor..NearestNeighbor) ⇒ <code>Point</code> \| <code>any</code>
    * [~DistSquared(pt1, pt2)](#module_nearestNeighbor..DistSquared) ⇒ <code>number</code>

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

<a name="module_nearestNeighbor..NearestNeighborBruteForce"></a>

### nearestNeighbor~NearestNeighborBruteForce(neighbors, [distanceFn&#x3D;]) ⇒ <code>Array.&lt;Point&gt;</code> \| <code>Array.&lt;any&gt;</code>
Sorts all the neighbors by their respective distance starting from the first

**Kind**: inner method of [<code>nearestNeighbor</code>](#module_nearestNeighbor)  

| Param | Type |
| --- | --- |
| neighbors | <code>Array.&lt;Point&gt;</code> \| <code>Array.&lt;any&gt;</code> | 
| [distanceFn=] | <code>function</code> | 

**Example**  
```js
var neighbors = [
      {x: 5, y: 5},
      {x: 3, y: 3},
      {x: 4, y: 4},
      {x: 1, y: 1},
      {x: 2, y: 2},
      //other points
 ];
var ordered_elements = nearestNeighbor.NearestNeighborBruteForce(neighbors);
// ordered_elements now contain the neighbors, in the order they ought to be visited.
```
<a name="module_nearestNeighbor..NearestNeighborsIndex"></a>

### nearestNeighbor~NearestNeighborsIndex(home, neighbors, [distanceFn&#x3D;]) ⇒ <code>number</code>
Returns the nearest, relative to the provided home point, neighbor's index from the array of neighbors

**Kind**: inner method of [<code>nearestNeighbor</code>](#module_nearestNeighbor)  

| Param | Type |
| --- | --- |
| home | <code>Point</code> \| <code>any</code> | 
| neighbors | <code>Array.&lt;Point&gt;</code> \| <code>Array.&lt;any&gt;</code> | 
| [distanceFn=] | <code>function</code> | 

**Example**  
```js
var home = {x: 6, y: 6};
var neighbors = [
      {x: 5, y: 5},
      {x: 3, y: 3},
      {x: 4, y: 4},
      {x: 1, y: 1},
      {x: 2, y: 2},
      //other points
 ];
var index = nearestNeighbor.NearestNeighborsIndex(home, neighbors);
// index will equal 2, because {x: 5, y: 5} is the nearest neighbor for {x: 6, y: 6} who is the home point
```
<a name="module_nearestNeighbor..NearestNeighbor"></a>

### nearestNeighbor~NearestNeighbor(home, neighbors, [distanceFn&#x3D;]) ⇒ <code>Point</code> \| <code>any</code>
Returns the nearest neighbor, relative to the provided home point, from the given array of neighbors

**Kind**: inner method of [<code>nearestNeighbor</code>](#module_nearestNeighbor)  

| Param | Type |
| --- | --- |
| home | <code>Point</code> \| <code>any</code> | 
| neighbors | <code>Array.&lt;Point&gt;</code> \| <code>Array.&lt;any&gt;</code> | 
| [distanceFn=] | <code>function</code> | 

**Example**  
```js
var home = {x: 6, y: 6};
var neighbors = [
      {x: 5, y: 5},
      {x: 3, y: 3},
      {x: 4, y: 4},
      {x: 1, y: 1},
      {x: 2, y: 2},
      //other points
 ];
var neighbor = nearestNeighbor.NearestNeighborsIndex(home, neighbors);
// neighbor will equal {x: 5, y: 5}, because {x: 5, y: 5} is the nearest neighbor for {x: 6, y: 6} who is the home point
```
<a name="module_nearestNeighbor..DistSquared"></a>

### nearestNeighbor~DistSquared(pt1, pt2) ⇒ <code>number</code>
Default distance function

**Kind**: inner method of [<code>nearestNeighbor</code>](#module_nearestNeighbor)  

| Param | Type |
| --- | --- |
| pt1 | <code>Point</code> | 
| pt2 | <code>Point</code> | 

