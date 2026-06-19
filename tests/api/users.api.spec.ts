import { test, expect } from '../../src/fixtures';
import { randomEmail } from '../../src/utils/helpers';
import { logger } from '../../src/utils/logger';

/**
 * Users API Test Suite
 * Tests all CRUD operations on /users endpoint.
 */
test.describe('Users API', () => {
  // ─── GET ────────────────────────────────────────────────────────
  test.describe('GET /users', () => {
    test('should return list of users with status 200', async ({ userApi }) => {
      const response = await userApi.getAllUsers();

      expect(response.status()).toBe(200);

      const users = await response.json();
      expect(Array.isArray(users)).toBeTruthy();
      expect(users.length).toBeGreaterThan(0);

      logger.success('GET /users returned users', users.length);
    });

    test('should return a single user by ID', async ({ userApi }) => {
      const response = await userApi.getUserById(1);

      expect(response.status()).toBe(200);

      const user = await response.json();
      expect(user).toHaveProperty('id', 1);
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('email');
    });

    test('should return 404 for non-existing user', async ({ userApi }) => {
      const response = await userApi.getUserById(9999);
      expect(response.status()).toBe(404);
    });
  });

  // ─── POST ───────────────────────────────────────────────────────
  test.describe('POST /users', () => {
    test('should create a new user and return 201', async ({ userApi }) => {
      const newUser = { name: 'Jane Doe', email: randomEmail() };

      const response = await userApi.createUser(newUser);

      expect(response.status()).toBe(201);

      const created = await response.json();
      expect(created).toHaveProperty('id');
      expect(created.name).toBe(newUser.name);

      logger.success('User created with ID', created.id);
    });
  });

  // ─── PUT ────────────────────────────────────────────────────────
  test.describe('PUT /users/:id', () => {
    test('should update an existing user', async ({ userApi }) => {
      const updatedUser = { name: 'Updated Name', email: randomEmail() };

      const response = await userApi.updateUser(1, updatedUser);

      expect(response.status()).toBe(200);

      const updated = await response.json();
      expect(updated.name).toBe(updatedUser.name);
    });
  });

  // ─── DELETE ─────────────────────────────────────────────────────
  test.describe('DELETE /users/:id', () => {
    test('should delete a user and return 200', async ({ userApi }) => {
      const response = await userApi.deleteUser(1);
      expect(response.status()).toBe(200);
    });
  });
});
