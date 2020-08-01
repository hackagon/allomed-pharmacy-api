import { Module } from '@nestjs/common';
import { CSVToMySQLController } from '../controllers/csv-to-mysql.controller';
import { CSVToMySQLService } from '../services/csv-to-mysql.service';

@Module({
  controllers: [CSVToMySQLController],
  providers: [CSVToMySQLService],
})
export class CSVToMySQL {}
