#!/usr/bin/env node

const program = require('commander');
const CLIEngine = require('./core/CLIEngine');
const utils = require('./utils');
const LocalExporter = require('./exporter/LocalExporter');
const packageData = require('../../package.json');

program
  .version(packageData.version, '-v, --version')
  .option('-e, --config <file|json>', 'json object that contains any or all of the cli options')
  .option('-c, --chart-config <file|json>', 'json or js file that contains an array of chart configurations whose charts will be exported')
  .option('-O, --chart-config-options <json>', 'json object that provides an option to override the chart configuration passed through chart-config option')
  .option('-i, --input-file <file>', 'svg file that needs to be converted, ignored if chart-config is provided')
  .option('-o, --output-file <string>', 'output file that needs to be generated, a template can also be provided')
  .option('-F, --output-file-definition <file>', 'json or js file that contains itereator for output filename template')
  .option('-z, --output-as-zip <bool>', 'if enabled, multiple output files will be exported as zip')
  .option('-t, --type <ext>', 'output file type - jpeg, png, pdf, svg, html, xls, xlsx, csv')
  .option('-q, --quality <value>', 'quality of the exported files - good, better, best')
  .option('-W, --width <value>', 'chart width in which it should be rendered')
  .option('-H, --height <value>', 'chart height in which it should be rendered')
  .option('-b, --callbacks <file>', 'js file containing codes to bind custom methods to events fired by FusionCharts library')
  .option('-T, --template <file>', 'html file for dashboard export')
  .option('-r, --resources <file|json>', 'json file containing the resources which will be injected into the template, applicable only during remote export')
  .option('-a, --async-capture <bool>', 'enable async capture')
  .option('-m, --async-capture-timeout <integer>', 'maximum time that system will wait for async-capture event to trigger')
  .option('-G, --dashboard-logo <file>', 'logo file for dashboard export')
  .option('-D, --dashboard-heading <string>', 'heading for dashboard export')
  .option('-B, --dashboard-subheading <string>', 'subheading for dashboard export')
  .option('-d, --log-dest <path>', 'log destination, also enables logging')
  .option('-f, --log-file <file>', 'log filename')
  .option('-l, --log-level <level>', 'log level - error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5')
  .option('-S, --host <string>', 'host of fusionexport service')
  .option('-P, --port <integer>', 'port of fusionexport service')
  .option('-p, --ftp-config <file>', 'ftp config for saving output files')
  .option('-s, --s3-config <file>', 'amazon S3 config for saving output files')
  .parse(process.argv);

const options = new CLIEngine().process(program);

utils.configureLogger({
  logDest: options.logDest,
  logFile: options.logFile,
  logLevel: options.logLevel,
});

new LocalExporter(options).render();
