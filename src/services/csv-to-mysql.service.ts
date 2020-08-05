import { Injectable } from '@nestjs/common';
import * as csvtojson from 'csvtojson';
import * as path from 'path';
import * as _ from 'lodash';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CSVToMySQLService {
  async generalConvert(csvFileName: string): Promise<any> {
    const csvFilePath = path.join(__dirname, `../../csv/${csvFileName}.csv`);
    return csvtojson()
      .fromFile(csvFilePath)
      .then(res => {
        const mysqlScript = _.chain(res)
          .map(
            record =>
              `INSERT IGNORE INTO ${csvFileName} (id, code, en_name, vn_name) VALUES ("${uuidv4()}", "${
                record.code
              }", "${record.en_name}", "${record.vn_name}")`,
          )
          .join(';\n')
          .value();

        const mysqlPath = `./sql/${csvFileName}.sql`;

        fs.writeFile(mysqlPath, mysqlScript, err => {
          if (err) return err;

          return { message: 'Convert to MySQL script successfully' };
        });
      });
  }
}
