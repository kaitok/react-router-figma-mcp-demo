import { describe, it, expect } from "vitest";
import { Container } from "inversify";
import { TYPES } from "../app/infrastructure/Types";
import { ListUserUseCase } from "../app/usecase/ListUserUseCase";
import type { IUserRepository } from "../app/repository/UserRepository";
import { User } from "../app/entity/User";

class MockUserRepository implements IUserRepository {
  async fetchData(): Promise<User[]> {
    return [
      new User(1, "Mock User 1", "mock1@example.com"),
      new User(2, "Mock User 2", "mock2@example.com"),
    ];
  }
}

describe("ListUserUseCase with inversify", () => {
  it("should fetch user data through the use case", async () => {
    const container = new Container();
    container
      .bind<IUserRepository>(TYPES.IUserRepository)
      .to(MockUserRepository);
    container.bind<ListUserUseCase>(ListUserUseCase).toSelf();

    const useCase = container.get<ListUserUseCase>(ListUserUseCase);
    const users = await useCase.getUsers();

    expect(users).toBeInstanceOf(Array);
    expect(users).toHaveLength(2);

    expect(users[0]).toBeInstanceOf(User);
    expect(users[0]).toMatchObject({
      id: 1,
      name: "Mock User 1",
      email: "mock1@example.com",
    });

    expect(users[1]).toBeInstanceOf(User);
    expect(users[1]).toMatchObject({
      id: 2,
      name: "Mock User 2",
      email: "mock2@example.com",
    });
  });
});
