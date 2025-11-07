# Users API

The Users API allows you to create, read, update, and delete user accounts in the system.

## List Users

Retrieve a paginated list of users.

### Endpoint

```http
GET /v1/users
```

### Query Parameters

| Parameter | Type    | Description                           |
|-----------|---------|---------------------------------------|
| page      | integer | Page number (default: 1)              |
| limit     | integer | Results per page (default: 20, max: 100) |
| status    | string  | Filter by status: active or inactive  |

### Response

```json
{
  "data": [
    {
      "id": "usr_123abc",
      "name": "John Doe",
      "email": "john@example.com",
      "status": "active",
      "created_at": "2025-11-07T10:00:00Z"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 20
  }
}
```

## Get User

Retrieve details for a specific user by ID.

### Endpoint

```http
GET /v1/users/:id
```

### Path Parameters

| Parameter | Type   | Description     |
|-----------|--------|-----------------|
| id        | string | The user's ID   |

### Response

```json
{
  "data": {
    "id": "usr_123abc",
    "name": "John Doe",
    "email": "john@example.com",
    "status": "active",
    "created_at": "2025-11-07T10:00:00Z",
    "metadata": {
      "last_login": "2025-11-07T11:00:00Z",
      "login_count": 42
    }
  }
}
```

## Create User

Create a new user account.

### Endpoint

```http
POST /v1/users
```

### Request Body

| Field    | Type   | Required | Description                    |
|----------|--------|----------|--------------------------------|
| name     | string | Yes      | User's full name              |
| email    | string | Yes      | User's email address          |
| status   | string | No       | Status (default: active)      |
| metadata | object | No       | Additional user metadata      |

### Example Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "status": "active",
  "metadata": {
    "department": "Engineering",
    "title": "Senior Developer"
  }
}
```

### Response

```json
{
  "data": {
    "id": "usr_123abc",
    "name": "John Doe",
    "email": "john@example.com",
    "status": "active",
    "created_at": "2025-11-07T12:00:00Z",
    "metadata": {
      "department": "Engineering",
      "title": "Senior Developer"
    }
  }
}
```

## Update User

Update an existing user's information.

### Endpoint

```http
PATCH /v1/users/:id
```

### Path Parameters

| Parameter | Type   | Description     |
|-----------|--------|-----------------|
| id        | string | The user's ID   |

### Request Body

Include only the fields you want to update:

```json
{
  "name": "John Smith",
  "metadata": {
    "title": "Principal Developer"
  }
}
```

### Response

```json
{
  "data": {
    "id": "usr_123abc",
    "name": "John Smith",
    "email": "john@example.com",
    "status": "active",
    "updated_at": "2025-11-07T13:00:00Z",
    "metadata": {
      "department": "Engineering",
      "title": "Principal Developer"
    }
  }
}
```

## Delete User

Delete a user account.

### Endpoint

```http
DELETE /v1/users/:id
```

### Path Parameters

| Parameter | Type   | Description     |
|-----------|--------|-----------------|
| id        | string | The user's ID   |

### Response

```http
204 No Content
```

## Errors

| Code | Description                                      |
|------|--------------------------------------------------|
| 400  | Invalid request (missing required fields, etc.)    |
| 404  | User not found                                    |
| 409  | Email address already in use                      |
| 422  | Validation error (invalid email format, etc.)     |