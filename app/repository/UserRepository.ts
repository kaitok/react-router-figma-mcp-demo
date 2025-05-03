import { injectable } from "inversify";
import { User } from "../entity/User";

export interface IUserRepository {
  fetchData(): Promise<User[]>;
}

@injectable()
export class UserRepository implements IUserRepository {
  async fetchData(): Promise<User[]> {
    // Simulate fetching data from an API or database
    return [
      new User(1, "John Doe", "john.doe@example.com"),
      new User(2, "Jane Smith", "jane.smith@example.com"),
    ];
  }
}
