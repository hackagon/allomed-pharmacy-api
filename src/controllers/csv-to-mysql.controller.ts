import { Controller, Post } from '@nestjs/common';
import * as _ from 'lodash';
import { CSVToMySQLService } from '../services/csv-to-mysql.service';

@Controller('/csv-to-mysql')
export class CSVToMySQLController {
  constructor(private csvService: CSVToMySQLService) {}

  @Post('/')
  async importCSVToMySQL(): Promise<any> {
    await Promise.all([
      this.csvService.generalConvert('dosage_form'),
      this.csvService.generalConvert('dosage_unit'),
      this.csvService.generalConvert('product_classification'),
      this.csvService.generalConvert('shape'),
      this.csvService.generalConvert('color'),
      this.csvService.generalConvert('flavor'),
      this.csvService.generalConvert('volume'),
    ]);
  }
}