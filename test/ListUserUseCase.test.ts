import { describe, it, expect } from "vitest";
import { ListUserUseCase } from "../app/usecase/ListUserUseCase";
import { User } from "../app/entity/User";

describe("ListUserUseCase", () => {
  it("should fetch user data through the use case", async () => {
    const useCase = new ListUserUseCase();
    const users = await useCase.getUsers();

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
