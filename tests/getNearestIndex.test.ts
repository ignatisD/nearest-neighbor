import { getNearestIndex, Point } from "../src/NearestNeighbor";

describe("Check getNearestIndex", () => {

    it("should get the nearest neighbor's index", () => {

        const home: Point = {x: 0, y: 0};
        const neighbors: Point[] = [
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 1, y: 2},
            {x: 4, y: 1},
            {x: 1, y: 3},
        ];

        expect(getNearestIndex(home, neighbors)).toEqual(2);
    });
});