import { distSquared, Point } from "../src/NearestNeighbor";

describe("Check distSquared", () => {
    it("should return the distance between two points", () => {
        const pt1 = new Point(2, 2);
        const pt2 = new Point(3, 3);

        expect(distSquared(pt1, pt2)).toEqual(2);
    });
});