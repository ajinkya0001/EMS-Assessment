# EMS Playwright Automation Assessment

## Project Overview

This project contains automated UI tests for the Employee Management System (EMS) application using Playwright.

The objective of this project is to validate the core functionalities of the EMS application including:

* Employee CRUD Operations
* Login Page Verification
* Dashboard UI Verification
* Navigation Testing
* Form Validation Testing
* Forgot Password Page Verification
* Employee Table Verification

---

## Tech Stack

* Playwright
* JavaScript
* Node.js
* HTML Reporter

---

## Project Structure

```
EMS-Assessment
│
├── tests
│   ├── employee.spec.js
│   ├── login.spec.js
│   ├── validation.spec.js
│   ├── navigation.spec.js
│   ├── dashboardUI.spec.js
│   ├── table.spec.js
│   ├── forgot.spec.js
│
├── screenshots
├── reports
├── testdata
├── utils
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Test Coverage

### Employee Management

* Add Employee
* Edit Employee
* Delete Employee

### Login Page

* Verify Sign In Button
* Verify Forgot Password Link

### Dashboard UI

* Verify Dashboard Heading
* Verify Employee List Heading
* Verify Add Employee Heading

### Navigation

* Verify Forgot Password Navigation

### Validation

* Verify Add Employee Form Visibility
* Verify Email Field Visibility

### Employee Table

* Verify Name Column
* Verify Email Column
* Verify Actions Column

### Forgot Password Page

* Verify Reset Password Heading
* Verify Email Field Visibility

---

## Playwright Configuration

Configured Features:

* HTML Reporting
* Screenshots
* Video Recording
* Trace Generation
* Chromium Browser Execution
* Sequential Test Execution

---

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/employee.spec.js
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run in debug mode:

```bash
npx playwright test --debug
```

---

## Generate HTML Report

Execute:

```bash
npx playwright show-report
```

The report will open in the browser.

---

## Artifacts Generated

After execution Playwright generates:

* HTML Report
* Screenshots
* Videos
* Trace Files

These artifacts help in debugging failed test cases.

---

## Test Results

Current Status:

* Total Tests: 23
* Passed: 23
* Failed: 0

---

## Author

Ajinkya Jadkar

Playwright Automation Assessment Project
