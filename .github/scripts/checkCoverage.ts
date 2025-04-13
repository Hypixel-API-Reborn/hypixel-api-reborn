/* v8 ignore next 1000 */

import { parseString } from 'xml2js';
import { readFile } from 'fs';

function parseXMLFile(): Promise<any> {
  return new Promise((resolve, reject) => {
    readFile('.github/coverageData.xml', 'utf8', (err, data) => {
      if (err) {
        reject('File Dose not exist!');
        return;
      }

      parseString(data, (err, result) => {
        if (err) {
          reject('Something Went wrong!');
          return;
        }

        resolve(result);
      });
    });
  });
}

const data = await parseXMLFile();
const codeStats = data.coverage.project[0].metrics[0].$;
const info = {
  statements: Number(codeStats.statements),
  coveredstatements: Number(codeStats.coveredstatements),
  conditionals: Number(codeStats.conditionals),
  coveredconditionals: Number(codeStats.coveredconditionals),
  methods: Number(codeStats.methods),
  coveredmethods: Number(codeStats.coveredmethods)
};

if (95 > (info.coveredstatements / info.statements) * 100) {
  throw new Error('Statements is required to be 95% or higher');
}

if (95 > (info.coveredconditionals / info.conditionals) * 100) {
  throw new Error('Conditionals is required to be 95% or higher');
}

if (95 > (info.coveredmethods / info.methods) * 100) {
  throw new Error('Methods is required to be 95% or higher');
}

if (
  95 >
  ((info.coveredstatements + info.coveredconditionals + info.coveredmethods) /
    (info.statements + info.conditionals + info.methods)) *
    100
) {
  throw new Error('Everythng Combinded is required to be 95% or higher');
}
