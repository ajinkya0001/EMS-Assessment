# EMS Playwright Automation Assessment

## Overview

This project contains an automated testing framework developed using Playwright for the Employee Management System (EMS) application.

The framework follows industry-standard automation practices including:

* Page Object Model (POM)
* Reusable Methods
* Test Data Separation
* Assertions
* HTML Reporting
* Screenshots on Failure
* Video Recording
* Trace Files

---

## Application Under Test

### Frontend

* React + Vite
* URL: http://localhost:5173

### Employee Management Backend

* Spring Boot
* URL: http://localhost:8080

### Authentication Backend

* Node.js + Express + MongoDB
* URL: http://localhost:5001

---

## Framework Structure

```text
EMS-Assessment

pages/
│
└── EmployeePage.js

tests/
│
├── employee.spec.js
├── login.spec.js
└── validation.spec.js

testdata/
│
└── employeeData.json

utils/
│
└── loginHelper.js

playwright.config.js

README.md

AI_USAGE.md

playwright-report/

test-results/
```

---

## Automated Test Scenarios

### Employee Management Module

1. Add Employee
2. Edit Employee
3. Delete Employee

### Login Module

4. Verify Sign In Button
5. Verify Forgot Password Link

### Validation Module

6. Verify Add Employee Form Visibility
7. Verify Email Field Visibility

---

## Test Execution Summary

Total Test Cases Executed: 7

Passed: 7

Failed: 0

Execution Time: 16.1 Seconds

---

## Reporting Configuration

The framework is configured to generate:

* HTML Reports
* Screenshots on Failure
* Video Recording on Failure
* Trace Files on Failure

Playwright Configuration:

* Browser: Chromium
* Parallel Execution: Disabled
* Workers: 1
* Screenshot Capture: Only on Failure
* Video Capture: Retain on Failure
* Trace Capture: Retain on Failure

---

## Design Approach

### Page Object Model (POM)

All page interactions are maintained inside reusable page classes to improve maintainability and scalability.

### Reusable Utilities

A reusable login helper utility is implemented for dashboard navigation.

### Test Data Management

Test data is separated into JSON files for better maintainability and readability.

### Assertions

Playwright assertions are used to validate UI behavior and application functionality.

---

## Execution Steps

### Install Dependencies

```bash
npm install
```

### Execute Tests

```bash
npx playwright test
```

### Open HTML Report

```bash
npx playwright show-report
```

---

## Known Limitation

The authentication functionality depends on a Node.js backend connected to MongoDB.

Since MongoDB environment configuration is not available in the repository, full authentication API validation could not be performed.

Therefore:

* Login UI validation was automated.
* Employee Management functionality was validated successfully through the Spring Boot backend.

---

## AI Usage

AI assistance was used for:

* Framework design guidance
* Playwright Page Object Model creation
* Test script generation
* Reporting configuration
* Documentation preparation
* Debugging support

---

## Author

Ajinkya Jadkar

Weekly Playwright Assessment Submission
