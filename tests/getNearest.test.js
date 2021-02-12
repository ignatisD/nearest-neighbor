const nn = require("../nearestNeighbor.js");

test("get the nearest neighbor", () => {

    const home = {x: 0, y: 0}
    const neighbors = [
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 1, y: 2},
        {x: 4, y: 1},
        {x: 1, y: 3},
    ];

    expect(nn.getNearest(home, neighbors)).toEqual(neighbors[2]);
});

test("get the nearest neighbor (custom)", () => {

    const home = 1
    const neighbors = [
        5,
        6,
        2,
        3,
    ];
    const distanceFn = function (a, b) {
        return (a - b) * (a - b);
    }
    expect(nn.getNearest(home, neighbors, distanceFn)).toEqual(2);
});