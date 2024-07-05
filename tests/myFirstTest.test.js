
describe("Number operations", () => {
    test("1+1 equals 2", () => {
        expect(1 + 1).toBe(2)
    })

    test("5+6 is not equal 10", () => {
        expect(5 + 6).not.toBe(10)
    })
})


describe("Testing other matcher methods", () => {

    test("test number is undefined", () => {
        let number = undefined;

        expect(number).not.toBeDefined();
        expect(number).toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    })

    test("should expect zero to act like zero", () => {
        let number = 0;

        expect(number).toBeDefined()
        expect(number).not.toBeUndefined()
        expect(number).not.toBeNull()
        expect(number).toBeFalsy()
        expect(number).not.toBeTruthy()

    })

    test("Number comparisons", () => {
        const a = 1;
        const b = 2;

        expect(a+b).toBeGreaterThan(2)
        expect(a+b).toBeGreaterThanOrEqual(3)
        expect(a+b).toBeLessThanOrEqual(10)
        expect(a+b).toBeLessThan(8)
    })

})