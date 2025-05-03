import { inject, injectable } from "inversify";
import { TYPES } from "../infrastructure/Types";
import type { IUserRepository } from "../repository/UserRepository";

@injectable()
export class ListUserUseCase {
  private repository: IUserRepository;

  constructor(@inject(TYPES.IUserRepository) repository: IUserRepository) {
    this.repository = repository;
  }

  async getUsers() {
    return await this.repository.fetchData();
  }
}
