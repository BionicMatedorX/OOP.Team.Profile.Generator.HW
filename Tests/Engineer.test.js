const Engineer = require("../EmployeeClasses/Engineer");

test("Getting GitHub account", () => {

  const testValue = "GitUser";

  const e = new Engineer("Fredrick", 1, "test@test.com", testValue);

  expect(e.github).toBe(testValue);

});

test("getRole() should return \"Engineer\"", () => {

  const testValue = "Engineer";

  const e = new Engineer("Fredrick", 1, "test@test.com", "GHuser");

  expect(e.getRole()).toBe(testValue);

});

test("Getting GitHub username via getGitHub()", () => {

  const testValue = "GitUser";

  const e = new Engineer("Fredrick", 1, "test@test.com", testValue);

  expect(e.getGitHub()).toBe(testValue);

});