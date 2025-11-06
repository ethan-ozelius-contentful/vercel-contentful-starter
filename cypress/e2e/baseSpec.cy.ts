// import { CypressTestSuite } from "../../src/cypress/types";

type CypressTestSuite = {
  id: string;
  name: string;
  description?: string;
  environment: string;
  url: string;
  assertions: Array<{
    type: "text" | "element";
    value: string;
    selector?: string;
    fieldName?: string;
    entryId?: string;
    contentType?: string;
  }>;
};


describe("Dynamic Contentful Integration Tests", () => {
  let testSuite: CypressTestSuite;

  before(() => {
    // Get test suite data from environment variable
    const testSuiteJson = Cypress.env("TEST_SUITE");

    console.log("testSuiteJson => ", JSON.stringify(testSuiteJson, null, 4));

    if (!testSuiteJson) {
      throw new Error(
        "No test suite data provided. Pass TEST_SUITE environment variable."
      );
    }

    try {
      testSuite =
        typeof testSuiteJson === "string"
          ? JSON.parse(testSuiteJson)
          : testSuiteJson;
    } catch (error) {
      throw new Error(`Invalid test suite JSON: ${error}`);
    }

    cy.log("Loaded test suite:", testSuite.name);
    cy.log("Number of assertions:", testSuite.assertions.length);
  });

  beforeEach(() => {
    // Set up common configurations
    cy.viewport(1280, 720);

    // Visit the base URL from test suite
    if (testSuite?.url) {
      cy.visit(testSuite.url);
      cy.get("body").should("be.visible");
    }
  });

  it("should execute all assertions from the test suite", () => {
    // Dynamically execute all assertions
    testSuite.assertions.forEach((assertion, index) => {
      const { value, selector, fieldName } = assertion;

      cy.log(
        `Executing assertion ${index + 1}: ${fieldName || "Content check"}`
      );

      cy.get(selector).should("be.visible").and("contain", value);
    });
  });
});
