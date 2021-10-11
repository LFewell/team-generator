const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

describe("Employee"), () => {
    test("Should create an employee", () => {
        const employee = new Employee();
        expect(typeof employee).toBe("object");
    })
}