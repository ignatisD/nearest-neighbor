const nn = require("../nearestNeighbor.js");

const tests = [
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


test("sort neighbors according to the first one", () => {
    for(let test of tests) {
        expect(nn.sortBruteForce(test.elements)).toEqual(test.results);
    }
});

test("return empty array for empty inputs", () => {
    expect(nn.sortBruteForce(null)).toEqual([]);
});

test("return the same array for non function distanceFn", () => {
    const elements =  [
        {x: 5, y: 5},
        {x: 3, y: 3},
        {x: 4, y: 4},
        {x: 1, y: 1},
        {x: 2, y: 2},
    ];
    expect(nn.sortBruteForce(elements, "non-function")).toEqual(elements);
});