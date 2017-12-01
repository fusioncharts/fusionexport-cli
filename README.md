# FusionExport

FusionExport is the FusionCharts's all purpose Export product which works across all OS and runtimes. The FusionExport is primarily a CLI based system for easy exporting of Charts, Dashboards in many different image and data formats (PNG, JPEG, SVG, PDF, CSV, XLS and HTML). FusionExport also comes packed with many language SDK’S (NodeJS, Python, GO, Java, iOS, Android) for easy integration and support across those technologies.

Below are the major features of the product:

   1. Export FusionCharts charts as PNG, JPEG, SVG, PDF, CSV, XLS and HTML files.
   1. Exporting of charts is done directly from backend without needing a browser.
   1. Multiple charts can be exported simultaneously with minimal configuration.
   1. Sharing, Scheduling etc. can be done as exporting is done from backend.
   1. Dashboards exporting using user defined template.
   1. Supports statistics logging of all charts exports in a private setup / central remote server.
   1. Saving files to FTP or S3
   1. Doing export from remote server
   1. Easy configuration management

## Prerequisites

You need to have `node >= 8.0.0` and `npm >= 5.0.0` installed in your system to install the CLI.

## Installation

### FusionExport Installation

You will need to download the **FusionExport** installer from [here](https://www.fusioncharts.com/dev/exporting-charts/using-fusionexport/installation/install-fusionexport-desktop.html).

Primary functionalities those can be performed on the screen are:
  1. Service Start
  2. Service Stop
  3. Service Restart

Logging of the various operation can be viewed in the below panel.
Some additional information like host, port and PID of the service can be viewed.

Logs can be saved by session as well as cleared when needed.

### FusionExport CLI Installation

To install the CLI in your system run the following command:
```
npm i -g fusionexport-cli
```

## Usage
After installing, you should have access to `fusion-export` command. `fe` is an alias to `fusion-export`

```
fusion-export <options>
```

Or,

```
fe <options>
```


## Command Line Arguments

Option | Alias | Default |Type | Description
-------|-------|---------|-----|------------
--config | -e | fusioncharts_export.json | file, json | A JSON file that can contain any or all of the cli options.
--chart-config | -c | fusioncharts_chart.json | file, json | A JSON or JS file that will contain an array of json objects or just an object which can be passed to the chart constructor for rendering the chart. <br><br> If it's a JS file the object should be exported. <br><br> It can also take multiple file, directory path or glob pattern in a space seprated format. For file containing single chart config it will create a single exported file. For file containing multiple chart config it will create a directory named after the respective filename, that will contain the individual exported file.
--chart-config-options | -O | {} | json | JSON object that provides an option to override the chart configuration passed through chart-config option. <br><br> In case of multiple charts all the charts will be effected.
--input-file | -i | chart.svg | file | SVG file that needs to be converted. <br><br> Ignored if chart-config is provided. <br><br> Path will be taken into account if provided.
--output-file | -o | | string | Output files that need to be generated. A template can also be giving that will be resolved for multiple files. For more information see below. <br><br> Zipped output will always be named fusioncharts_export.zip
--output-file-definition | -F | | file | JS or JSON file that contains methods and arrays to use in naming output files.
--output-as-zip | -z | | bool | To export the output files as zip, or to export individual files.
--type | -t | png | ext | Output file type.
--width | -W | 600 | value | Chart width in which all charts should be rendered.
--height | -H | 400 | value | Chart height in which all charts should be rendered.
--callbacks | -b | fusioncharts_export_callbacks.js | file | JS file providing an option to bind custom methods to events fired by FusionCharts library.
--template | -T | template.html | file | HTML file to use as template for rendering the chart.
--resources | -r | resources.json | file, json | FusionExport automatically finds resources from link, script and img tags in the html template. <br><br> If any resource link is dynamically generated or present in files other than the template file, it should be explicitly added in this option. <br><br> This is a JSON file containing arrays of filename in their respective key. <br><br> Applicable only during remote exporting.
--library-path | -L | | path | Path where FusionCharts library is present.
--dashboard-logo | -G | | file | Logo path (Only for dashboard export)
--dashboard-heading | -D | | string | Heading of the exported dashboard.
--dashboard-subheading | -B | | string | Subheading of the exported dashboard.
--async-capture | -a | false | bool | Enable async-capture.
--async-capture-timeout | -m | 6000 | integer | Maximum time that system will wait for async-capture event to trigger.
--log-dest | -d | | path | Log destination. Also enables logging.
--log-file | -f | fusioncharts_export.log | file | Log file.
--log-level | -l | 2 | level | Log level. <br><br> 0: error, 1: warn, 2: info, 3: verbose, 4: debug, 5: silly
--remote-export-enabled | -R | false | bool | If enabled, the cli will use the export server api to export the images.
--export-url | -u | export.api3.fusioncharts.com | url | Export server url.

## Examples

### Export a simple Column chart using a single config in PNG format.
 `column_chart_config.json` contains a sample fusioncharts column chart config
**column_chart_config.json**
```json
[
   {
      "type": "column2d",
      "renderAt": "chart-container",
      "width": "550",
      "height": "350",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga"
         },
         "data": [
            {
               "label": "Mon",
               "value": "15123"
            },
            {
               "label": "Tue",
               "value": "14233"
            },
            {
               "label": "Wed",
               "value": "25507"
            }
         ]
      }
   }
]
```

```bash
$ fe -c column_chart_config.json
```

_This will export the Column chart in PNG format in the current working directory._

### Export multiple charts in PDF format.

**multiple_charts_config.json**
```json
[
   {
      "type": "pie2d",
      "renderAt": "pie_chart",
      "width": "500",
      "height": "400",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga"
         },
         "categories": [
            {
               "category": [
                  {
                     "label": "Mon"
                  },
                  {
                     "label": "Tue"
                  },
                  {
                     "label": "Wed"
                  }
               ]
            }
         ],
         "dataset": [
            {
               "seriesname": "Los Angeles Topanga",
               "data": [
                  {
                     "value": "13400"
                  },
                  {
                     "value": "12800"
                  },
                  {
                     "value": "22800"
                  }
               ]
            }
         ]
      }
   },
   {
      "type": "mscolumn2d",
      "renderAt": "column_chart",
      "width": "450",
      "height": "420",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Split of Sales by Product Category",
            "subCaption": "In top 5 stores last month",
            "yAxisname": "Sales (In USD)"
         },
         "categories": [
            {
               "category": [
                  {
                     "label": "Bakersfield Central"
                  },
                  {
                     "label": "Garden Groove harbour"
                  }
               ]
            }
         ],
         "dataset": [
            {
               "seriesname": "Food Products",
               "data": [
                  {
                     "value": "17000"
                  },
                  {
                     "value": "19500"
                  }
               ]
            },
            {
               "seriesname": "Non-Food Products",
               "data": [
                  {
                     "value": "25400"
                  },
                  {
                     "value": "29800"
                  }
               ]
            }
         ]
      }
   }
]
```

```bash
$ fe -c multiple_charts_config.json -t pdf -o ./exported-charts/
```

### Export entire Dashboard using CLI in PDF format.

To export Dashboard using CLI, a template file has to be provided with the layout and supporting static resource (JS, CSS, Images, Fonts).

The template must contain placeholder elements (preferably divs) for the charts. The chart config array must contain the charts with the `renderAt` attributes that matches the id of the elements stated above.

The resources option is optional and only needed when `remote-export-enabled` is `true`. Most resources that are stated in the template in link, script or img tags are found intelligently. If any additional fonts, links present in css or dynamic links in JS is present one has to specify them in resources option.

The format of the resources option is as follows:

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

**template.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Chart</title>
  </head>
  <body>
    <div id="pie_chart"></div>
    <div id="column_chart"></div>
  </body>
</html>
```

**multiple_charts_config.json**
```json
[
   {
      "type": "pie2d",
      "renderAt": "pie_chart",
      "width": "500",
      "height": "400",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga"
         },
         "categories": [
            {
               "category": [
                  {
                     "label": "Mon"
                  },
                  {
                     "label": "Tue"
                  },
                  {
                     "label": "Wed"
                  }
               ]
            }
         ],
         "dataset": [
            {
               "seriesname": "Los Angeles Topanga",
               "data": [
                  {
                     "value": "13400"
                  },
                  {
                     "value": "12800"
                  },
                  {
                     "value": "22800"
                  }
               ]
            }
         ]
      }
   },
   {
      "type": "mscolumn2d",
      "renderAt": "column_chart",
      "width": "450",
      "height": "420",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Split of Sales by Product Category",
            "subCaption": "In top 5 stores last month",
            "yAxisname": "Sales (In USD)"
         },
         "categories": [
            {
               "category": [
                  {
                     "label": "Bakersfield Central"
                  },
                  {
                     "label": "Garden Groove harbour"
                  }
               ]
            }
         ],
         "dataset": [
            {
               "seriesname": "Food Products",
               "data": [
                  {
                     "value": "17000"
                  },
                  {
                     "value": "19500"
                  }
               ]
            },
            {
               "seriesname": "Non-Food Products",
               "data": [
                  {
                     "value": "25400"
                  },
                  {
                     "value": "29800"
                  }
               ]
            }
         ]
      }
   }
]
```

```bash
$ fe -c multiple_charts_config.json -T template.html -t PDF -o ./exported-dashboards/
```

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

### Remote Export file saving in FTP & S3

Output files can be saved in **FTP** and **AWS S3** directly.

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
fe -e uat/fusioncharts_export.json
fe -e uat/fusioncharts_export_svg.json
fe -e uat/fusioncharts_export_tmpl.json
fe -e uat/fusioncharts_export_20charts.json
fe -e uat/fusioncharts_export_50charts.json
```
