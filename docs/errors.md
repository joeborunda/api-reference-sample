# Error Reference

This page provides a comprehensive guide to error handling in the Sample API.

## Error Response Format

All API errors follow a consistent format:

```json
{
  "error": {
    "code": "error_code",
    "message": "Human-readable error message",
    "details": [
      "Additional error details",
      "More specific information"
    ]
  }
}
```

## HTTP Status Codes

| Code | Name              | Description                                                |
|------|------------------|------------------------------------------------------------|
| 400  | Bad Request      | The request was invalid or malformed                       |
| 401  | Unauthorized     | Missing or invalid API key                                 |
| 403  | Forbidden        | Valid API key but insufficient permissions                 |
| 404  | Not Found        | The requested resource doesn't exist                       |
| 409  | Conflict         | The request conflicts with current state                   |
| 422  | Validation Error | The request was well-formed but has semantic errors        |
| 429  | Rate Limited     | Too many requests - slow down!                            |
| 500  | Server Error     | Something went wrong on our end                           |

## Common Error Codes

### Authentication Errors

- `invalid_key` - The API key is invalid or malformed
- `expired_key` - The API key has expired
- `key_revoked` - The API key has been revoked

### Authorization Errors

- `insufficient_scope` - The API key doesn't have required permissions
- `resource_forbidden` - Access to the resource is not allowed

### Validation Errors

- `invalid_request` - General validation failure
- `required_field` - A required field is missing
- `invalid_format` - A field's format is invalid (e.g., email, date)
- `out_of_range` - A numeric value is outside allowed range

### Resource Errors

- `not_found` - The requested resource doesn't exist
- `already_exists` - Trying to create a resource that exists
- `state_conflict` - The resource is in an invalid state for the operation

### Rate Limiting

- `rate_limited` - You've exceeded your rate limit
- `quota_exceeded` - You've exceeded your monthly quota

## Handling Errors

### Best Practices

1. Always check the HTTP status code first
2. Parse the error response for detailed information
3. Implement exponential backoff for rate limiting
4. Log detailed error information for debugging

### Example Error Handling

```python
import requests

def make_api_request():
    try:
        response = requests.get(
            "https://api.example.com/v1/users",
            headers={"Authorization": "Bearer YOUR_API_KEY"}
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        error = e.response.json().get("error", {})
        if e.response.status_code == 429:
            # Handle rate limiting
            retry_after = e.response.headers.get("Retry-After", 60)
            print(f"Rate limited. Retry after {retry_after} seconds")
        else:
            print(f"API error: {error.get('message')}")
            print(f"Details: {error.get('details', [])}")
        raise
```