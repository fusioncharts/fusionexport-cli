# FusionExport Dev Center

## Intro on **FusionExport**

## Get FusionExport
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

## Quick Start

- Export a chart

- Change the export type

- Bulk export

- Export a Dashboard

- Convert a SVG image to PNG/JPEG

- Customize width and height of the export

- Use licensed FusionCharts library for export

- Including logo/heading in the Dashboard

- Manipulate output filename

- Inject extra javascript while exporting

- Remote export

- Bulk export using multiple js/json files

- CLI options in a file

- Overriding chart config

- Output as Zip

- Enable logging

## Export a chart

FusionExport cli accecpts chart config with `-c` or `--chart-config`. For exporting a single chart from the cli, we need to save the chartconfig into a JSON file. Then we need to run the following command in the terminal to export.

```bash
$ fe -c <chart-config-file.json>
```
You can even save the chart config into a javascript file. In that case, the whole chart config object must have to be exported. That means, your chart config should look like below.

```javascript
module.exports = {
  // fusioncharts config
};
```

To use this newly created javascript file for the export, the following command need to be executed.

```
$ fe - c <chart-config-file.js>
```

#### Usage

`column_chart_config.json` contains a sample fusioncharts column chart config `column_chart_config.json`
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

This will export the Column chart in PNG format in the current working directory.

### Change the export type

By default, FusionExport will export in `PNG` format. To export in `JPEG` or in other accepted type, we can ask the cli to do this via `-t` or `--type` argument.

FusionExport is able to export in the following formats

- `PNG`
- `JPEG`
- `PDF`
- `SVG`
- `HTML`
- `CSV`
- `XLS`
- `XLSX`

#### Usage

Let's create one PDF for the previous column chart.
```bash
$ fe -c column_chart_config.json -t pdf
```

### Bulk export

Bulk Export or doing multiple exports is now super easy. All we need to do is to save the multiple chart configs as an array. That means each item of the array should hold one single chart's config.

So if you are saving the chart configs in a json file. The file structure should look like below

```json
[
  {
    "..."
  },
  {
    "..."
  }
]
```
```
$ fe - c <chart-config-file.json>
```
If you prefer to save the file as javascript,

```javascript
module.exports = [
  {
    // fisrt chart
  },
  {
    // second chart
  }
];
```
```
$ fe - c <chart-config-file.js>
```

### Export a Dashboard
To export Dashboard using CLI, a template file has to be provided with the layout and supporting static resource (JS, CSS, Images, Fonts).

The template must contain placeholder elements (preferably divs) for the charts. The chart config array must contain the charts with the renderAt attributes that matches the id of the elements stated above.

Following is the content of the `template.html`
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

Following is the content of the `multiple_charts_config.json`. Special attention need to given to the `renderAt` attribute. As you can see that our template contains two divs with the id `pie_chart` and `column_chart`.

In the config also, we need the same `renderAt` it. When we do export, FusionExport will replace those divs with the actual rendered charts.

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
So here we just need to provide the template

```bash
$ fe -c multiple_charts_config.json -T template.html
```

The `--resources` option is optional and only needed when `--remote-export-enabled` is `true`. Most resources that are stated in the template in link, script or img tags are found intelligently. If any additional fonts, links present in css or dynamic links in JS is present one has to specify them in resources option.

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

### Convert a SVG image to PNG/JPEG

If we have a svg image, all you need to convert it to PNG or JPEG or PDF. You can do that using FusionExport.
Save the svg in a file. Let's name it `chart.svg`

Here we need to use `--input-file` or `-i` for providing the svg to the FusionExport

```bash
$ fe -i chart.svg -t pdf
```

### Customize width and height of the export

We can manipulate the width or height of the exported images. For changing width, `--width` or `-W` option is used. Same goes for the height. `--height` or `-H` is used to change the height.

If you are doing bulk exports, then all the charts height and width will be overridden with this cli option.

```bash
$ fe -c multiple_charts_config.json -W 800 -H 400
```

It doesn't work with `--input-file` option.

### Use licensed FusionCharts library for export

To use the licensed version of the fusioncharts libarary, we can provide the path to fusioncharts lib using `--library-path` or `-L`

```bash
$ fe -c multiple_charts_config.json -L "path/to/fusioncharts"
```

### Including logo/heading in the Dashboard

You can add logo, heading and subheading to your exported dashboards. The logo and heading/subheading is included in the top of the Dashboard.

`--dashboard-logo` or `-G` used for logo path.

`--dashboard-heading` or `-D` used for heading of the exported dashboard.

`--dashboard-subheading` or `-B` used for subheading of the exported dashboard.

```bash
$ fe -c multiple_charts_config.json -T template.html -G "path/to/logo.png" -D "FusionExport Dashboard" -B "Powerd by ExportFusion"
```

### Manipulate output filename

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
  attr: ['S1', 'S2', 'S3', 'S4'],
};
```
Let us save the above content in a file named `def.js`

Functions will get 3 arguments the current chart config, the index and array of all the chart configs.

Arrays will the iterated one by one and the last one will be repeated if more is needed.

#### Usage

A few ways you can pass `output-file` option now are:

```shell
path/to/export--<%= number(1, 100) %>
# path/to/export--1.png

path/to/export--<%= number(2) %>__<%= caption() %>-<%= timestamp() %>
# path/to/export--2__Some Caption-23423438788.png
```

A complete command would look like This

```shell
$ fe -c multiple_charts_config.json -o 'path/to/export--<%= number(1, 100) %>' -F def.js
```

### Inject extra javascript while exporting

You can even add a custom javascript file while exporting using `--callbacks` or `-b`
This is our custom javascript that we need to include while the export is happening.

The content of the `custom.js` file is below.
```javascript
document.body.style.transform = "rotate(-10deg)";
```

```bash
$ fe -c chart.json -b custom.js
```

### Remote export

For remote export, you need to deploy the `FusionExport WebServie` and get the export url. The export now can be done remotely.
So we need to enable `--remote-export-enabled` and pass the `--export-url`.

```bash
$ fe -c column_chart_config.json -R true -u http://localhost:3000/api/v1.0/export
```

### Output as Zip

If you want the exported files as a zip, you can do setting `--output-as-zip` to `true`

```bash
$ fe -c multiple_charts_config.json -z false
```

### Bulk export using multiple js/json files

### CLI options in a file

All the cli options can be written in a JSON file. So all that you need to provide this JSON file as the cli arguments using `--config` or `-e`. Rest of the things will be autometically figured out from that file.

Below is the content of the `fusionexport_config.json`

```json
{
  "chart-config": "uat/50charts.js",
  "output-file": "uat/export-<%= number(1, 100) %>",
  "type": "png",
  "width": 1000,
  "height": 500,
  "log-dest": "uat/",
  "log-file": "test.log",
  "log-level": "silly",
  "remote-export-enabled": false
}
```

```
$ fe -e fusioncharts_config.json
```

### Overriding chart config

By using `--chart-config-options`, we can overrride the chart config.

See the below example config. Here we are replacing all chart's subheading and adding new property theme.
```json
{
  "chart-config": "uat/fusioncharts_chart.js",
  "chart-config-options": {
    "dataSource.chart.subCaption": "FusionExport",
    "dataSource": {
      "chart": {
        "theme": "ocean"
      }
    }
  }
}
```

```
$ fe -e fusioncharts_config.json
```

### Enable logging



## Reference

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
--resources | -r | resources.json | file, json | FusionExport automatically finds resources from link, script and img tags in the html template. <br><br> If any resource link is dynamically generated or present in files other than the template file, it should be explicitly added in this option. <br><br> This is a JSON file containing arrays of filename in their respective key. <br><br> Applicable only during remote exporting.
--library-path | -L | | path | Path where FusionCharts library is present.
--dashboard-logo | -G | | file | Logo path (Only for dashboard export)
--dashboard-heading | -D | | string | Heading of the exported dashboard.
--dashboard-subheading | -B | | string | Subheading of the exported dashboard.
--log-dest | -d | | path | Log destination. Also enables logging.
--log-file | -f | fusioncharts_export.log | file | Log file.
--log-level | -l | 2 | level | Log level. <br><br> 0: error, 1: warn, 2: info, 3: verbose, 4: debug, 5: silly
--remote-export-enabled | -R | false | bool | If enabled, the cli will use the export server api to export the images.
--export-url | -u | export.api3.fusioncharts.com | url | Export server url.
