describe("Testing reference equality",()=>{
    const user={
        name:"Clement"
    }

    user["age"] = 45;

    test("Should return a user object with age of 45",()=>{
        expect(user).toEqual({
            name:"Clement",
            age:45
        })
    })

    test("Should return a user with a name and age key",()=>{
        expect(user).toEqual(
            expect.objectContaining({
                name:expect.any(String),
                age:expect.any(Number)
            })
        )
    })
})