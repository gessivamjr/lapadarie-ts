import { createPool } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export default function connection() {
  const pool = createPool({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_NAME,
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
  });

  return pool;
}
