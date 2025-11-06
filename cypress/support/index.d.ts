/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      // Add custom commands here if needed
    }
  }
}

export {};
