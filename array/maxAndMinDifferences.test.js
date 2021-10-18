const maxAndMinDifferences = require("./maxAndMinDifferences")
// @ponicode
describe("maxAndMinDifferences.maxAndMinDifferences", () => {
    test("0", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object4 = [object, object2, object3]
        let object5 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let object6 = [["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object7 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object8 = [object5, object6, object7]
        let object9 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object10 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object11 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object12 = [object9, object10, object11]
        let param1 = [object4, object8, object12]
        let object13 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"]]
        let object14 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object15 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object16 = [object13, object14, object15]
        let object17 = [["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"]]
        let object18 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object19 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object20 = [object17, object18, object19]
        let object21 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object22 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object23 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object24 = [object21, object22, object23]
        let param2 = [object16, object20, object24]
        let callFunction = () => {
            maxAndMinDifferences.maxAndMinDifferences(param1, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let object2 = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object3 = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let object4 = [object, object2, object3]
        let object5 = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object6 = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object7 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object8 = [object5, object6, object7]
        let object9 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object10 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object11 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object12 = [object9, object10, object11]
        let param1 = [object4, object8, object12]
        let object13 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object14 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object15 = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object16 = [object13, object14, object15]
        let object17 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object18 = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653]]
        let object19 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object20 = [object17, object18, object19]
        let object21 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object22 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object23 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"]]
        let object24 = [object21, object22, object23]
        let param2 = [object16, object20, object24]
        let callFunction = () => {
            maxAndMinDifferences.maxAndMinDifferences(param1, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object4 = [object, object2, object3]
        let object5 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object6 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object7 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object8 = [object5, object6, object7]
        let object9 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object10 = [["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object11 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object12 = [object9, object10, object11]
        let param1 = [object4, object8, object12]
        let object13 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object14 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let object15 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object16 = [object13, object14, object15]
        let object17 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object18 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653]]
        let object19 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let object20 = [object17, object18, object19]
        let object21 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object22 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object23 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object24 = [object21, object22, object23]
        let param2 = [object16, object20, object24]
        let callFunction = () => {
            maxAndMinDifferences.maxAndMinDifferences(param1, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object4 = [object, object2, object3]
        let object5 = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object6 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object7 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object8 = [object5, object6, object7]
        let object9 = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object10 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let object11 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object12 = [object9, object10, object11]
        let param1 = [object4, object8, object12]
        let object13 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object14 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object15 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object16 = [object13, object14, object15]
        let object17 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object18 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object19 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"]]
        let object20 = [object17, object18, object19]
        let object21 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object22 = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object23 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object24 = [object21, object22, object23]
        let param2 = [object16, object20, object24]
        let callFunction = () => {
            maxAndMinDifferences.maxAndMinDifferences(param1, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let object4 = [object, object2, object3]
        let object5 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object6 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let object7 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object8 = [object5, object6, object7]
        let object9 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object10 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let object11 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object12 = [object9, object10, object11]
        let param1 = [object4, object8, object12]
        let object13 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object14 = [["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object15 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object16 = [object13, object14, object15]
        let object17 = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object18 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object19 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object20 = [object17, object18, object19]
        let object21 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object22 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object23 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object24 = [object21, object22, object23]
        let param2 = [object16, object20, object24]
        let callFunction = () => {
            maxAndMinDifferences.maxAndMinDifferences(param1, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            maxAndMinDifferences.maxAndMinDifferences(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
