# Low-Code API Orchestration Platform

## Overview

A configuration-driven API orchestration platform built with Node.js and Express.

The platform enables users to define REST APIs using JSON configuration without writing business logic for each integration.

---

## Features

- Dynamic API Creation
- Configuration Driven APIs
- Request Validation
- Request Mapping
- HTTP Vendor API Invocation
- Response Mapping
- Retry Mechanism
- Workflow Execution
- Conditional Execution
- Logging
- Standardized Response Format

---

## Tech Stack

- Node.js
- Express.js
- Joi
- Axios
- Winston

---

## Project Structure

```text
configs/
controllers/
routes/
services/
utils/
```

---

## Installation

```bash
npm install
```

Start Server

```bash
npm run dev
```

---

## Example Endpoint

POST

```
/verify-pan
```

Body

```json
{
    "pan":"ABCDE1234F",
    "name":"Komal"
}
```

---

## Configuration Driven

Adding a new JSON configuration automatically creates a new API without changing application code.

---

## Workflow Support

Supports execution of multiple vendor APIs with conditional execution.

---

## Logging

Application logs are stored using Winston Logger.

---

## Future Enhancements

- JWT Authentication
- Swagger Documentation
- Docker Support
- Rate Limiting
- Visual Workflow Builder
- AI Configuration Generator