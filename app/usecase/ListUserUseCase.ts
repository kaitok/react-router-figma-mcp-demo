import { UserRepository } from "../repository/UserRepository";

export class ListUserUseCase {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async getUsers() {
    return await this.repository.fetchData();
  }
}
