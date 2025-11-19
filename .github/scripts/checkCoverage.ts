import { parseStringPromise } from 'xml2js';
import { readFileSync } from 'fs';

const coverageDataFile = readFileSync('./coverage/clover.xml', 'utf-8');
const parsed = await parseStringPromise(coverageDataFile);

const codeStats = parsed.coverage.project[0].metrics[0].$;
const info = {
  statements: Number(codeStats.statements),
  coveredStatements: Number(codeStats.coveredstatements),
  conditionals: Number(codeStats.conditionals),
  coveredConditionals: Number(codeStats.coveredconditionals),
  methods: Number(codeStats.methods),
  coveredMethods: Number(codeStats.coveredmethods)
};

const baseline = 95;

const statementsCoverage = (info.coveredStatements / info.statements) * 100;
if (statementsCoverage <= baseline) {
  console.log(`Statements is required to be ${baseline}% or higher. Currently ${statementsCoverage.toFixed(2)}`);
  process.exit();
}

const conditionalsCoverage = (info.coveredConditionals / info.conditionals) * 100;
if (conditionalsCoverage <= baseline) {
  console.log(`Conditionals is required to be ${baseline}% or higher. Currently ${conditionalsCoverage.toFixed(2)}`);
  process.exit();
}

const methodsCoverage = (info.coveredMethods / info.methods) * 100;
if (methodsCoverage <= baseline) {
  console.log(`Methods is required to be ${baseline}% or higher. Currently ${methodsCoverage.toFixed(2)}`);
  process.exit();
}

const combinedCoverage = statementsCoverage + conditionalsCoverage + methodsCoverage;
if (combinedCoverage <= baseline) {
  console.log(`Everything Combined is required to be ${baseline}% or higher. Currently ${combinedCoverage.toFixed(2)}`);
  process.exit();
}
