import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { config } from "./index";
import * as _ from "lodash";

const { type, host, username, password, database, port } = config;
console.log("type", type)

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Pharmacy2550",
  database: "allomed",
  entities: [__dirname + "/../entities/*.entity.{js,ts}"],
  synchronize: true
}