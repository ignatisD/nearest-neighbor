var assert = require("assert");
var nearestNeighbor = require("./nearestNeighbor.js");

var tests = [
    {
        elements: [
            {x: 0, y: 0},
            {x: 2, y: 4},
            {x: 1, y: 2},
            {x: 4, y: 1},
            {x: 1, y: 3},
        ],
        results: [
            {x: 0, y: 0},
            {x: 1, y: 2},
            {x: 1, y: 3},
            {x: 2, y: 4},
            {x: 4, y: 1},
        ]
    },
    {
        elements: [
            {x: 5, y: 5},
            {x: 3, y: 3},
            {x: 4, y: 4},
            {x: 1, y: 1},
            {x: 2, y: 2},
        ],
        results: [
            {x: 5, y: 5},
            {x: 4, y: 4},
            {x: 3, y: 3},
            {x: 2, y: 2},
            {x: 1, y: 1},
        ]
    },
];


for(let test of tests) {
    var results = nearestNeighbor.NearestNeighborBruteForce(test.elements);
    assert.deepEqual(test.results, results);
}