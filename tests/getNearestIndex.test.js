const nn = require("../nearestNeighbor.js");

test("get the nearest neighbor's index", () => {

    const home = {x: 0, y: 0}
    const neighbors = [
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 1, y: 2},
        {x: 4, y: 1},
        {x: 1, y: 3},
    ];

    expect(nn.getNearestIndex(home, neighbors)).toEqual(2);
});