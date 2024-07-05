const { sum, deleteUserById, findUserById } = require("../functions/helper")

describe("Testing imported functions", () => {

    const users = [{
        user: "Clement",
        age: 12,
        id: 1
    },
    {
        user: "Sarah",
        age: 20,
        id: 2
    },
    {
        user: "Jacob",
        age: 30,
        id: 3
    }
    ]

    test("sum function", () => {
        expect(sum(3, 5)).toBe(8)
    })

    test("Delete by id function should delete a user", () => {

        expect(deleteUserById(users, 3)).toEqual([{
            user: "Clement",
            age: 12,
            id: 1
        },
        {
            user: "Sarah",
            age: 20,
            id: 2
        },])
    })

    // Done by test driven developments

    test("Find a user from a users array", () => {
        expect(findUserById(users, 3)).toEqual({
            user: "Jacob",
            age: 30,
            id: 3
        })

        expect(findUserById(users,10)).toBeUndefined()
    })
})


