# Authentication

## Overview

The Sample API uses API keys for authentication. Each request must include your API key in the Authorization header.

## Obtaining an API Key

1. Log in to the [Developer Portal](https://example.com/dashboard)
2. Navigate to API Keys → Create New Key
3. Give your key a name and select the appropriate permissions
4. Copy your new API key immediately (it won't be shown again)

## Using Your API Key

Include your API key in the `Authorization` header with the `Bearer` scheme:

```bash
curl -X GET "https://api.example.com/v1/users" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### API Key Best Practices

- Never share your API key or commit it to version control
- Use environment variables to store API keys
- Rotate keys periodically (every 90 days recommended)
- Use different keys for development and production

## Error Responses

If authentication fails, you'll receive a `401 Unauthorized` response:

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid or missing API key"
  }
}
```

## Rate Limits

Rate limits are tied to your API key and plan level:

| Plan     | Requests/Minute | Burst Limit |
|----------|----------------|-------------|
| Standard | 100           | 120         |
| Premium  | 1000          | 1200        |

### Monitoring Usage

Monitor your API usage in the [Developer Portal](https://example.com/dashboard/usage) or via the headers returned with each response:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1699359245
```