import { Controller, Post } from "@nestjs/common";
import * as csvtojson from "csvtojson";
import * as path from "path";
import * as _ from "lodash";
import * as fs from "fs";
import { v4 as uuidv4 } from 'uuid'
import { CSVToMySQLService } from '../services/csv-to-mysql.service';

@Controller("/csv-to-mysql")
export class CSVToMySQLController {
  constructor(
    private csvService: CSVToMySQLService
  ) { }

  @Post("/")
  async importCSVToMySQL(): Promise<any> {
    await Promise.all([
      this.csvService.generalConvert("dosage_form"),
      this.csvService.generalConvert("dosage_unit"),
      this.csvService.generalConvert("product_classification")
    ])
  }
}