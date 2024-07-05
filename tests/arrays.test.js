
describe("Testing arrays", () => {
    const shoppingLists = ["Milk", "Trash bags", "Paper towels", "Iphones"];

    test("The shopping list doesn't have PS4", () => {
        expect(shoppingLists).not.toContain("PS4")
        expect(shoppingLists).toContain("Milk")
    })

})

describe("Array equality", () => {
    const users = ["Clement", "Sarah", "July"];

    users.push("Jacob");

    test("Testing users array", () => {
        expect(users).toEqual(["Clement", "Sarah", "July", "Jacob"]);
        expect(users).toEqual(expect.arrayContaining([expect.any(String)]));
    })


    const userObjectInArray = [{
        user: "Clement",
        age: 12
    },
    {
        user: "Sarah",
        age: 20
    },
    {
        user: "Jacob",
        age: 30
    }
    ]


    test("Testing array of objects", () => {
        expect(userObjectInArray).toEqual(expect.arrayContaining([
            expect.objectContaining({
                user: expect.any(String),
                age: expect.any(Number)
            })
        ]))
    })



})

