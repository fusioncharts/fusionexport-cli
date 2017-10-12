#!/usr/bin/env node

const program = require('commander');
const CLIEngine = require('./core/CLIEngine');
const utils = require('./utils');
const RemoteExporter = require('./exporter/RemoteExporter');
const LocalExporter = require('./exporter/LocalExporter');
const log = require('./log');

program
  .version('0.1.0')
  .option('-e, --config <file|json>', 'JSON object that can contain any or all of the cli options.')
  .option('-c, --chart-config <file|json>', 'JSON or JS file that contains an array of chart configurations whose charts will be exported.')
  .option('-O, --chart-config-options <json>', 'JSON object that provides an option to override the chart configuration passed through chart-config option.')
  .option('-p, --output-path <path>', 'Path where the output file will be saved.')
  .option('-i, --input-file <file>', 'SVG file that needs to be converted. Ignored if chart-config is provided.')
  .option('-o, --output-file <file>', 'Output file that needs to be generated. Valid only for single export.')
  .option('-F, --output-file-definition <file>', 'JSON or JS file that contains itereator for output filename template.')
  .option('-z, --output-as-zip <bool>', 'If enabled, multiple output files will be exported as zip')
  .option('-t, --type <ext>', 'Output file type.')
  .option('-W, --width <value>', 'Chart width in which it should be rendered.')
  .option('-H, --height <value>', 'Chart height in which it should be rendered.')
  .option('-b, --callbacks <file>', 'JS file containing codes to bind custom methods to events fired by FusionCharts library.')
  .option('-T, --template <file>', 'HTML file to use as template for rendering the chart.')
  .option('-r, --resources <file>', 'JSON file containing all the resources which will injected into the template while rendering the charts')
  .option('-L, --library-path <path>', 'Path to your FusionCharts library.')
  .option('-G, --dashboard-logo <file>', 'Logo file for dashboard export')
  .option('-D, --dashboard-heading <text>', 'Heading for dashboard export')
  .option('-B, --dashboard-subheading <text>', 'Subheading for dashboard export')
  .option('-d, --log-dest <path>', 'Log destination. Also enables logging.')
  .option('-f, --log-file <file>', 'Log filename.')
  .option('-l, --log-level <level>', 'Log level. 0: disabled, 1: errors, 2: warnings, 3: notices, 4: verbose.')
  .option('-R, --remote-export-enabled <bool>', 'If enabled, the cli must use the export server api to export the images.')
  .option('-u, --export-url <url>', 'Export url.')
  .option('-g, --export-log-url <url>', 'Export logging url.')
  .parse(process.argv);

const options = new CLIEngine().process(program);

utils.configureLogger({
  logDest: options.logDest,
  logFile: options.logFile,
  logLevel: options.logLevel,
});

log.info('Options parsing done.');

if (options.remoteExportEnabled) {
  new RemoteExporter().render(options);
} else {
  new LocalExporter().render(options);
}
