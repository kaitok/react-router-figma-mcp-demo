import "reflect-metadata";
import { Container } from "inversify";
import {
  UserRepository,
  type IUserRepository,
} from "../repository/UserRepository";
import { ListUserUseCase } from "../usecase/ListUserUseCase";
import { TYPES } from "./Types";

const container = new Container();

// Bind interfaces to implementations
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
container.bind<ListUserUseCase>(ListUserUseCase).toSelf();

export default container;
