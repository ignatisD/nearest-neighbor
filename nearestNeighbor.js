/**
 * @module nearestNeighbor
 * @alias nn
 *
 * @description Brute forcing the nearest neighbor problem.
 * @author Ignatios Drakoulas
 * @license MIT
 *
 */

/**
 * Sorts all the neighbors by their respective distance starting from the first
 *
 * @param {Point[]|any[]} neighbors - The array of {@link Point} elements
 * @param {Function} [distanceFn] - Optional, {@link distSquared} will be used if none provided
 *
 * @return {Point[]|any[]}
 *
 *
 * @example
 * var nn = require("./nearestNeighbor.js");
 * var neighbors = [
 *       {x: 5, y: 5},
 *       {x: 3, y: 3},
 *       {x: 4, y: 4},
 *       {x: 1, y: 1},
 *       {x: 2, y: 2},
 *       //other points
 *  ];
 * var ordered_neighbors = nn.sortBruteForce(neighbors);
 * // ordered_neighbors now contain the neighbors, in the order they ought to be visited.
 */
function sortBruteForce(neighbors, distanceFn) {
    var total = neighbors.length || 0;
    if (!total) {
        return neighbors;
    }
    if (typeof distanceFn === "undefined") {
        distanceFn = distSquared;
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
        var closestIndex = getNearestIndex(home, neighbors, distanceFn);
        home = neighbors.splice(closestIndex, 1).shift();
        results.push(home);
    } while (neighbors.length && iterations < total);
    return results;
}

/**
 * Returns the nearest, relative to the provided home point, neighbor's index from the array of neighbors
 *
 * @param {Point|any} home - The reference {@link Point}
 * @param {Point[]|any[]} neighbors - The array of {@link Point} elements
 * @param {Function} [distanceFn] Optional, {@link distSquared} will be used if none provided
 *
 * @return {number}
 *
 * @example
 * var nn = require("./nearestNeighbor.js");
 * var home = {x: 6, y: 6};
 * var neighbors = [
 *       {x: 4, y: 4},
 *       {x: 3, y: 3},
 *       {x: 5, y: 5},
 *       {x: 1, y: 1},
 *       {x: 2, y: 2},
 *       //other points
 *  ];
 * var index = nn.getNearestIndex(home, neighbors);
 * // index will equal 2, because {x: 5, y: 5} is
 * // the nearest neighbor for {x: 6, y: 6} which is the home point
 */
function getNearestIndex(home, neighbors, distanceFn) {
    if (typeof distanceFn === "undefined") {
        distanceFn = distSquared;
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
 * @param {Point|any} home - The reference {@link Point}
 * @param {Point[]|any[]} neighbors - The array of {@link Point} elements
 * @param {Function} [distanceFn] Optional, {@link distSquared} will be used if none provided
 *
 * @return {Point|any}
 *
 * @example
 * var nn = require("./nearestNeighbor.js");
 * var home = {x: 6, y: 6};
 * var neighbors = [
 *       {x: 5, y: 5},
 *       {x: 3, y: 3},
 *       {x: 4, y: 4},
 *       {x: 1, y: 1},
 *       {x: 2, y: 2},
 *       //other points
 *  ];
 * var neighbor = nn.getNearest(home, neighbors);
 * // neighbor will equal {x: 5, y: 5}, because {x: 5, y: 5} is
 * // the nearest neighbor for {x: 6, y: 6} which is the home point
 */
function getNearest(home, neighbors, distanceFn) {
    if (typeof distanceFn === "undefined") {
        distanceFn = distSquared;
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
 * @private
 *
 * @param {Point} pt1
 * @param {Point} pt2
 *
 * @return {number}
 */
function distSquared(pt1, pt2) {
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
        "sortBruteForce": sortBruteForce,
        "getNearestIndex": getNearestIndex,
        "getNearest": getNearest,
        "distSquared": distSquared,
    };
}