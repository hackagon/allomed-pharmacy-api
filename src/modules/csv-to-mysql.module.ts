import { Module } from "@nestjs/common";
import { CSVToMySQLController } from '../controllers/csv-to-mysql.controller';

@Module({
  controllers: [CSVToMySQLController]
})
export class CSVToMySQL { }