# API Documentation

## Health Check

GET /

Response

```json
{
    "success": true,
    "message": "Low-Code API Orchestration Platform is running"
}
```

---

## Verify PAN

POST /verify-pan

Request

```json
{
    "pan":"ABCDE1234F",
    "name":"Komal"
}
```

Success Response

```json
{
    "success": true,
    "message": "API Executed Successfully",
    "data": {}
}
```

Validation Error

```json
{
    "success": false,
    "message": "\"name\" is required"
}
```