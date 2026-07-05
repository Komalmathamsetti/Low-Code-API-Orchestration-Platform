```json
{
  "name": "PAN Verification",
  "route": "/verify-pan",
  "method": "POST",

  "validation": {
    "pan": {
      "type": "string",
      "required": true
    },
    "name": {
      "type": "string",
      "required": true
    }
  },

  "requestMapping": {
    "panNumber": "pan",
    "fullName": "name"
  },

  "responseMapping": {
    "customerName": "name",
    "email": "email"
  }
}
```