import { describe, it, expect } from "vitest";
import { UserRepository } from "../app/repository/UserRepository";
import { User } from "../app/entity/User";

describe("UserRepository", () => {
  it("should fetch user data", async () => {
    const repository = new UserRepository();
    const users = await repository.fetchData();

    expect(users).toBeInstanceOf(Array);
    expect(users).toHaveLength(2);

    expect(users[0]).toBeInstanceOf(User);
    expect(users[0]).toMatchObject({
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    });

    expect(users[1]).toBeInstanceOf(User);
    expect(users[1]).toMatchObject({
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
    });
  });
});
