import { getNearest, Point } from "../src/NearestNeighbor";

describe("Check getNearest", () => {

    it("should get the nearest neighbor", () => {
        const home: Point = {x: 0, y: 0};
        const neighbors: Point [] = [
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 1, y: 2},
            {x: 4, y: 1},
            {x: 1, y: 3},
        ];

        expect(getNearest(home, neighbors)).toEqual(neighbors[2]);
    });

    it("should get the nearest custom neighbor", () => {
        const home = 1;
        const neighbors = [
            5,
            6,
            2,
            3,
        ];
        const distanceFn = (a: number, b: number) => {
            return (a - b) * (a - b);
        };
        expect(getNearest(home, neighbors, distanceFn)).toEqual(2);
    });
});