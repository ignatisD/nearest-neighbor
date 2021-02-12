const nn = require("../nearestNeighbor.js");

test("square distance check", () => {
    const pt1 = new nn.Point(2, 2);
    const pt2 = new nn.Point(3, 3);

    expect(nn.distSquared(pt1, pt2)).toEqual(2);
});