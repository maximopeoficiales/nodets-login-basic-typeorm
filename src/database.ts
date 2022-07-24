import { DataSource } from "typeorm";
import config from "./config/index";
// conexion con typeorm
// console.log(__dirname);

export const AppDataSource = new DataSource({
  type: "mysql",
  host: config.DB.HOST,
  port: parseInt(config.DB.PORT),
  username: config.DB.USER,
  password: config.DB.PASSWORD,
  database: config.DB.DATABASE,
  entities: [__dirname + "/models/*.ts"],
  synchronize: true,
})

AppDataSource.initialize().then(() => {
  console.log("Database connection created");
}).catch(err => console.log(err));