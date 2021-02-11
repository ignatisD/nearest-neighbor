/**
 * Brute forcing the nearest neighbor problem.
 *
 * @module nearestNeighbor
 * @author Ignatios Drakoulas
 *
 **/

/**
 * Sorts all the neighbors by their respective distance starting from the first
 *
 * @param {Point[]|any[]} neighbors
 * @param {Function} [distanceFn=]
 *
 * @return {Point[]|any[]}
 *
 * @example
 * var neighbors = [
 *       {x: 5, y: 5},
 *       {x: 3, y: 3},
 *       {x: 4, y: 4},
 *       {x: 1, y: 1},
 *       {x: 2, y: 2},
 *       //other points
 *  ];
 * var ordered_elements = nearestNeighbor.NearestNeighborBruteForce(neighbors);
 * // ordered_elements now contain the neighbors, in the order they ought to be visited.
 */
function NearestNeighborBruteForce(neighbors, distanceFn) {
    var total = neighbors.length || 0;
    if (!total) {
        return neighbors;
    }
    if (typeof distanceFn === "undefined") {
        distanceFn = DistSquared;
    }
    if (typeof distanceFn !== "function") {
        return neighbors;
    }
    var home = neighbors.splice(0, 1).shift();
    var results = [home];
    var iterations = -1;
    do {
        // just to be sure nothing crazy happens
        ++iterations;
        var closestIndex = NearestNeighborsIndex(home, neighbors, distanceFn);
        home = neighbors.splice(closestIndex, 1).shift();
        results.push(home);
    } while (neighbors.length && iterations < total);
    return results;
}

/**
 * Returns the nearest, relative to the provided home point, neighbor's index from the array of neighbors
 *
 * @param {Point|any} home
 * @param {Point[]|any[]} neighbors
 * @param {Function} [distanceFn=]
 *
 * @return {number}
 *
 * @example
 * var home = {x: 6, y: 6};
 * var neighbors = [
 *       {x: 4, y: 4},
 *       {x: 3, y: 3},
 *       {x: 5, y: 5},
 *       {x: 1, y: 1},
 *       {x: 2, y: 2},
 *       //other points
 *  ];
 * var index = nearestNeighbor.NearestNeighborsIndex(home, neighbors);
 * // index will equal 2, because {x: 5, y: 5} is
 * // the nearest neighbor for {x: 6, y: 6} which is the home point
 */
function NearestNeighborsIndex(home, neighbors, distanceFn) {
    if (typeof distanceFn === "undefined") {
        distanceFn = DistSquared;
    }
    var closestElementIndex = 0;
    var shortestDistance = Infinity;
    for (var i = 0; i < neighbors.length; ++i) {
        var d = distanceFn(home, neighbors[i]);
        if (d < shortestDistance) {
            closestElementIndex = i;
            shortestDistance = d;
        }
    }
    return closestElementIndex;
}

/**
 * Returns the nearest neighbor, relative to the provided home point, from the given array of neighbors
 *
 * @param {Point|any} home
 * @param {Point[]|any[]} neighbors
 * @param {Function} [distanceFn=]
 *
 * @return {Point|any}
 *
 * @example
 * var home = {x: 6, y: 6};
 * var neighbors = [
 *       {x: 5, y: 5},
 *       {x: 3, y: 3},
 *       {x: 4, y: 4},
 *       {x: 1, y: 1},
 *       {x: 2, y: 2},
 *       //other points
 *  ];
 * var neighbor = nearestNeighbor.NearestNeighborsIndex(home, neighbors);
 * // neighbor will equal {x: 5, y: 5}, because {x: 5, y: 5} is
 * // the nearest neighbor for {x: 6, y: 6} which is the home point
 */
function NearestNeighbor(home, neighbors, distanceFn) {
    if (typeof distanceFn === "undefined") {
        distanceFn = DistSquared;
    }
    var closestElement = null;
    var shortestDistance = Infinity;
    for (var i = 0; i < neighbors.length; ++i) {
        var d = distanceFn(home, neighbors[i]);
        if (d < shortestDistance) {
            closestElement = neighbors[i];
            shortestDistance = d;
        }
    }
    return closestElement;
}

/**
 * Default distance function
 *
 * @param {Point} pt1
 * @param {Point} pt2
 *
 * @return {number}
 */
function DistSquared(pt1, pt2) {
    var diffX = pt1.x - pt2.x;
    var diffY = pt1.y - pt2.y;
    return (diffX*diffX+diffY*diffY);
}

/**
 * Represents a point in two dimensions.
 * @class
 * @param {Number} x abscissa
 * @param {Number} y ordinate
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

if (typeof module === "object") {
    module.exports = {
        "Point": Point,
        "NearestNeighborBruteForce": NearestNeighborBruteForce,
        "NearestNeighborsIndex": NearestNeighborsIndex,
        "NearestNeighbor": NearestNeighbor
    };
}