import { sortBruteForce, Point } from "../src/NearestNeighbor";

describe("Check sortBruteForce", () => {

    it("should sort neighbors according to the first one", () => {
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
        for (const t of tests) {
            expect(sortBruteForce<Point>(t.elements)).toEqual(t.results);
        }
    });

    it("should return empty array for empty inputs", () => {
        expect(sortBruteForce(null)).toEqual([]);
    });

    it("should return the same array for non function distanceFn", () => {
        const elements: Point[] = [
            {x: 5, y: 5},
            {x: 3, y: 3},
            {x: 4, y: 4},
            {x: 1, y: 1},
            {x: 2, y: 2},
        ];
        // @ts-ignore
        expect(sortBruteForce(elements, "non-function")).toEqual(elements);
    });
});