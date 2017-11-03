#!/usr/bin/env node

const program = require('commander');
const CLIEngine = require('./core/CLIEngine');
const utils = require('./utils');
const RemoteExporter = require('./exporter/RemoteExporter');
const LocalExporter = require('./exporter/LocalExporter');
const log = require('./log');

program
  .version('1.0.0-pre-alpha-1')
  .option('-e, --config <file|json>', 'JSON object that can contain any or all of the cli options.')
  .option('-c, --chart-config <file|json>', 'JSON or JS file that contains an array of chart configurations whose charts will be exported.')
  .option('-O, --chart-config-options <json>', 'JSON object that provides an option to override the chart configuration passed through chart-config option.')
  .option('-i, --input-file <file>', 'SVG file that needs to be converted. Ignored if chart-config is provided.')
  .option('-o, --output-file <string>', 'Output file that needs to be generated. Valid only for single export.')
  .option('-F, --output-file-definition <file>', 'JSON or JS file that contains itereator for output filename template.')
  .option('-z, --output-as-zip <bool>', 'If enabled, multiple output files will be exported as zip')
  .option('-t, --type <ext>', 'Output file type.')
  .option('-W, --width <value>', 'Chart width in which it should be rendered.')
  .option('-H, --height <value>', 'Chart height in which it should be rendered.')
  .option('-b, --callbacks <file>', 'JS file containing codes to bind custom methods to events fired by FusionCharts library.')
  .option('-T, --template <file>', 'HTML file to use as template for rendering the chart.')
  .option('-r, --resources <file|json>', 'JSON file containing all the resources which will injected into the template while rendering the charts')
  .option('-L, --library-path <path>', 'Path to your FusionCharts library.')
  .option('-G, --dashboard-logo <file>', 'Logo file for dashboard export')
  .option('-D, --dashboard-heading <string>', 'Heading for dashboard export')
  .option('-B, --dashboard-subheading <string>', 'Subheading for dashboard export')
  .option('-d, --log-dest <path>', 'Log destination. Also enables logging.')
  .option('-f, --log-file <file>', 'Log filename.')
  .option('-l, --log-level <level>', 'Log level. 0: emerg, 1: alert, 2: crit, 3: error, 4: warning, 5: notice, 6: info, 7: debug.')
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


if (options.remoteExportEnabled) {
  new RemoteExporter().render(options);
} else {
  new LocalExporter().render(options);
}
