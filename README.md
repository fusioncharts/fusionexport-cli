# FusionCharts Export CLI

It is a cli interface written on top of `fc-export-node-client` to provide an elegant command line tool to use the export service. It provides features like saving files to FTP or S3, doing export from remote server, easy configuration management etc.

## Pre-requisites

You need to have `node` and `npm` installed in your system to install this cli.

You will need to download the export service installer from <link>.
Install and start to service first to use this cli.

## Install

To install this cli in your system run the following command
```
npm i -g git+ssh://git@bitbucket.org/fusioncharts/fc-export-cli.git#feature/FTI-0-integration-with-node-client
```

Or

```
git clone https://bitbucket.org/fusioncharts/fc-export-cli
npm i
npm link
```

## Usage

```
xf <options>
```

Or

```
export-fusion <options>
```

## Command Line Arguments

Option | Alias | Type | Description
-------|-------|------|------------
--config | -e | file, json | A JSON file that can contain any or all of the cli options.
--chart-config | -c | file, json | A JSON or JS file that will contain an array of json objects or just an object which can be passed to the chart constructor for rendering the chart. <br/><br/> If it's a JS file the object should be exported.
--chart-config-options | -O | json | JSON object that provides an option to override the chart configuration passed through chart-config option. <br><br> In case of multiple charts all the charts will be effected.
--input-file | -i | file | SVG file that needs to be converted. <br><br> Ignored if chart-config is provided. <br><br> Path will be taken into account if provided.
--output-file | -o | string | Output files that need to be generated. A template can also be giving that will be resolved. For more information see below.
--output-file-definition | -F | file | JS or JSON file that contains methods and arrays to use in naming output files.
--output-as-zip | -z | bool | To export the output files as zip, or export to individual files.
--type | -t | ext | Output file type.
--width | -W | value | Chart width in which it should be rendered.
--height | -H | value | Chart height in which it should be rendered.
--callbacks | -b | file | JS file providing an option to bind custom methods to events fired by FusionCharts library.
--template | -T | file | HTML file to use as template for rendering the chart.
--resources | -r | file, json | JSON file containing all the resources which will injected into the template while rendering the charts.
--library-path | -L | path | Path where FusionCharts library is present.
--dashboard-logo | -G | file | Logo path (Only for dashboard export)
--dashboard-heading | -D | string | Heading of the exported dashboard.
--dashboard-subheading | -B | string | Subheading of the exported dashboard.
--log-dest | -d | path | Log destination. Also enables logging.
--log-file | -f | file | Log file.
--log-level | -l | level | Log level. <br><br> 0: disabled, 1: errors, 2: warnings, 3: notices, 4: verbose
--remote-export-enabled | -R | bool | If enabled, the cli will use the export server api to export the images.
--export-url | -u | url | Export server url.

## Use Cases

### Output File Naming

The `output-file` option can take a template which is then resolved using ejs, so that the output filenames can be generated exactly as you wanted it to be.

There are 2 inbuilt function and you can provide you own ones in another JS file and pass it in the option `output-file-definition`

The 2 inbuilt functions are

1. `number(start, end, step)`: It increments a number from `start` to `end` with `step` as provided. `end` and `step` are optional.

2. `timestamp()`: It provides the current time is millisecond.

You can provide custom functions or arrays in definition file. Example:

```javascript
module.exports = {
  caption: (chartConfig, index) => {
    const caption = chartConfig.dataSource.chart.caption;
    return `${index}__${caption}`;
  },
  art: ['S1', 'S2', 'S3', 'S4'],
};
```

Functions will get 3 arguments the current chart config, the index and array of all the chart configs.

Arrays will the iterated one by one and the last one will be repeated if more is needed.

Example filenames:

```shell
path/to/export--<%= number(1, 100) %>
# path/to/export--1.png

path/to/export--<%= number(2) %>__<%= caption() %>-<%= timestamp() %>
# path/to/export--2__Some Caption-23423438788.png
```

### Dashboard Export

When a HTML is provided in the template option dashboard export will be enabled.

The template must contain placeholder elements (preferably divs) for the charts.

The chart config array must contain the chart with a `renderAt` that matches the id of the elements stated above.

The resources option is optional and only needed when `remote-export-enabled` is `true`. Most resources that are stated in the template in link, script or img tags are found automatically. If any additional font, links present in css or dynamic links in JS is present you have to specify it in resources option.

The format of the resources option are as follows:

```json
{
    "images": [
        "filename.jpg",
        "img/cat.png"
    ],
    "stylesheets": [
        "",
        ""
    ],
    "javascripts": [
        "",
        ""
    ],
    "fonts": [
        "",
        ""
    ]
}
```

### FTP & S3 Export

Output files can be uploaded to FTP and AWS S3 directly.

First you need to provide the credentials in the configuration file. FTP configs are in `config/ftp.json` and S3 configs are in `config/s3.json`.

In the `output-file` options, to upload through FTP specify the filename as
```
ftp:path/to/export--<%= number(1) %>
```
to upload files to S3 specify the filename as
```
s3:export--<%= number(1) %>
```

## Testing

Some preconfigured test configs are present in the `uat` folder. You can pass those export config files to the `-e` or `--config` options to run a quick test, or take a look inside it to get an idea how options can be passed in different situations.

Some example commands for running a quick test are

```
xf -e uat/fusioncharts_export.json
xf -e uat/fusioncharts_export_svg.json
xf -e uat/fusioncharts_export_tmpl.json
xf -e uat/fusioncharts_export_20charts.json
xf -e uat/fusioncharts_export_50charts.json
```
