import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { config } from "./index";
import * as _ from "lodash";

const { type, host, username, password, database, port } = config;
console.log("type", type)

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host,
  port,
  username,
  password,
  database,
  entities: [__dirname + "/../entities/*.entity.{js,ts}"],
  synchronize: true
}