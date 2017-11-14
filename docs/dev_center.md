# FusionExport Dev Center

## Intro on **FusionExport**

### Get FusionExport
 - Get **FusionExport Desktop** (Three Tabs for 3 Operating Systems)
 - Install ExportFusion Desktop
	 - MAC OS Guide
	 - Windows Guide
	 - Linux Guide
 - Install **FusionExport CLI**
	 - Prerequites
	 - Guide for Installation
 - Installation of **FusionExport WebService**
	 - Docker Distribution Guide
	 - Without Docker Guide
	 - Deploy at AWS (Good to have)
	 - Deploy at DigitalOcean (Good to have)

### Quick Start

- Export a chart

- Bulk export

- Export a Dashboard

- Convert a SVG image to PNG/JPEG

- Customize width and height of the export

- Use licensed FusionCharts library for export

- Including logo/heading in the Dashboard

- Manipulate output filename

- Inject extra javascript while exporting

- Remote export using FusionExport WebService

### Reference

Option | Alias | Default |Type | Description
-------|-------|---------|-----|------------
--config | -e | fusioncharts_export.json | file, json | A JSON file that can contain any or all of the cli options.
--chart-config | -c | fusioncharts_chart.json | file, json | A JSON or JS file that will contain an array of json objects or just an object which can be passed to the chart constructor for rendering the chart. <br><br> If it's a JS file the object should be exported. <br><br> It can also take multiple file, directory path or glob pattern in a space seprated format. For file containing single chart config it will create a single exported file. For file containing multiple chart config it will create a directory named after the respective filename, that will contain the individual exported file.
--chart-config-options | -O | {} | json | JSON object that provides an option to override the chart configuration passed through chart-config option. <br><br> In case of multiple charts all the charts will be effected.
--input-file | -i | chart.svg | file | SVG file that needs to be converted. <br><br> Ignored if chart-config is provided. <br><br> Path will be taken into account if provided.
--output-file | -o | | string | Output files that need to be generated. A template can also be giving that will be resolved for multiple files. <br><br> Zipped output will always be named fusioncharts_export.zip
--output-file-definition | -F | | file | JS or JSON file that contains methods and arrays to use in naming output files.
--output-as-zip | -z | | bool | To export the output files as zip, or to export individual files.
--type | -t | png | ext | Output file type.
--width | -W | 600 | value | Chart width in which all charts should be rendered.
--height | -H | 400 | value | Chart height in which all charts should be rendered.
--callbacks | -b | fusioncharts_export_callbacks.js | file | JS file providing an option to bind custom methods to events fired by FusionCharts library.
--template | -T | template.html | file | HTML file to use as template for rendering the chart.
--resources | -r | resources.json | file, json | JSON file containing all the resources which will injected into the template while rendering the charts.
--library-path | -L | | path | Path where FusionCharts library is present.
--dashboard-logo | -G | | file | Logo path (Only for dashboard export)
--dashboard-heading | -D | | string | Heading of the exported dashboard.
--dashboard-subheading | -B | | string | Subheading of the exported dashboard.
--log-dest | -d | | path | Log destination. Also enables logging.
--log-file | -f | fusioncharts_export.log | file | Log file.
--log-level | -l | 2 | level | Log level. <br><br> 0: error, 1: warn, 2: info, 3: verbose, 4: debug, 5: silly
--remote-export-enabled | -R | false | bool | If enabled, the cli will use the export server api to export the images.
--export-url | -u | export.api3.fusioncharts.com | url | Export server url.
