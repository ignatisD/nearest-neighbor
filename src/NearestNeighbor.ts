/**
 * @module NearestNeighbor
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
 * var nn = require("NearestNeighbor.js");
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
export function sortBruteForce<T = Point>(neighbors: T[], distanceFn?: (a: T | Point, b: T | Point) => number): T[] {
    let total = neighbors && neighbors.length ? neighbors.length : 0;
    if (!total) {
        return [];
    }
    if (typeof distanceFn === "undefined") {
        distanceFn = this.distSquared;
    }
    if (typeof distanceFn !== "function") {
        return neighbors;
    }
    let closestIndex = 0;
    let home = neighbors.splice(closestIndex, 1).shift();
    const results = [home];
    while (neighbors.length && total > 0) {
        // just to be sure nothing crazy happens
        --total;
        closestIndex = this.getNearestIndex(home, neighbors, distanceFn);
        home = neighbors.splice(closestIndex, 1).shift();
        results.push(home);
    }
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
 * var nn = require("NearestNeighbor.js");
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
export function getNearestIndex<T = Point>(home: T, neighbors: T[], distanceFn?: (a: T | Point, b: T | Point) => number): number {
    if (typeof distanceFn === "undefined") {
        distanceFn = this.distSquared;
    }
    let closestElementIndex = 0;
    let shortestDistance = Infinity;
    for (let i = 0; i < neighbors.length; ++i) {
        const d = distanceFn(home, neighbors[i]);
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
 * var nn = require("NearestNeighbor.js");
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
export function getNearest<T = Point>(home: T, neighbors: T[], distanceFn?: (a: T | Point, b: T | Point) => number): T {
    if (typeof distanceFn === "undefined") {
        distanceFn = this.distSquared;
    }
    let closestElement: T = null;
    let shortestDistance = Infinity;
    for (let i = 0; i < neighbors.length; ++i) {
        const d = distanceFn(home, neighbors[i]);
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
export function distSquared(pt1: Point, pt2: Point): number {
    const diffX = pt1.x - pt2.x;
    const diffY = pt1.y - pt2.y;
    return (diffX * diffX + diffY * diffY);
}

/**
 * Represents a point in two dimensions.
 * @class
 * @param {Number} x abscissa
 * @param {Number} y ordinate
 */
export class Point {

    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}