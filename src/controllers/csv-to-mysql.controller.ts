import { Controller, Post } from "@nestjs/common";
import * as csvtojson from "csvtojson";
import * as path from "path";
import * as _ from "lodash";
import * as fs from "fs";
import { v4 as uuidv4 } from 'uuid'

@Controller("/csv-to-mysql")
export class CSVToMySQLController {
  @Post("/dosage-unit")
  async importCSVToMySQL(): Promise<any> {
    const csvFilePath = path.join(__dirname, "../../csv/dosage_unit.csv")
    return csvtojson()
      .fromFile(csvFilePath)
      .then(res => {
        const mysqlScript = _.chain(res)
          .map(record => `INSERT IGNORE INTO dosage_unit (id, label, code, name) VALUES ("${uuidv4()}", "${record.label}", "${record.code}", "${record.name}")`)
          .join(";\n")
          .value();

        const mysqlPath = "./sql/dosage_unit.sql";

        fs.writeFile(mysqlPath, mysqlScript, (err) => {
          if (err) return err;

          return { message: "Convert to MySQL script successfully" }
        })
      })
  }
}