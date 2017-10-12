/* global FusionCharts */

const chartConfigs = [
  {
    type: 'mscombidy2d',
    renderAt: 'ch-0',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        xAxisname: 'Year',
        pYAxisName: 'Teachers',
        sYAxisName: 'Students',
        paletteColors: '#3F51B5,#E91E63',
        baseFontColor: '#333333',
        showBorder: '0',
        bgColor: '#ffffff',
        showShadow: '1',
        canvasBgColor: '#ffffff',
        divlineColor: '#9e9e9e',
        divlineThickness: '1',
        divLineIsDashed: '0',
        usePlotGradientColor: '0',
        showXAxisLine: '1',
        xAxisLineThickness: '1',
        legendBgAlpha: '0',
        legendBorderAlpha: '0',
        legendShadow: '0',
        legendItemFontSize: '10',
        legendItemFontColor: '#666666',
        showCanvasBorder: '1',
        canvasBorderThickness: '1',
        canvasBorderColor: '#9e9e9e',
        drawAnchors: 0,
        showAlternateHGridColor: '0',
      },
      categories: [{
        category: [
          {
            label: '1970',
          },
          {
            label: '1975',
          },
          {
            label: '1980',
          },
          {
            label: '1981',
          },
          {
            label: '1982',
          },
          {
            label: '1983',
          },
          {
            label: '1984',
          },
          {
            label: '1985',
          },
          {
            label: '1986',
          },
          {
            label: '1987',
          },
          {
            label: '1988',
          },
          {
            label: '1989',
          },
          {
            label: '1990',
          },
          {
            label: '1991',
          },
          {
            label: '1992',
          },
          {
            label: '1993',
          },
          {
            label: '1994',
          },
          {
            label: '1995',
          },
          {
            label: '1996',
          },
          {
            label: '1997',
          },
          {
            label: '1998',
          },
          {
            label: '1999',
          },
          {
            label: '2000',
          },
          {
            label: '2001',
          },
          {
            label: '2002',
          },
          {
            label: '2003',
          },
          {
            label: '2004',
          },
          {
            label: '2005',
          },
          {
            label: '2006',
          },
          {
            label: '2007',
          },
          {
            label: '2008',
          },
          {
            label: '2009',
          },
          {
            label: '2010',
          },
          {
            label: '2011',
          },
          {
            label: '2012',
          },
          {
            label: '2013',
          },
          {
            label: '2014',
          },
          {
            label: '2015',
          },
        ],
      },
      ],
      dataset: [
        {
          seriesName: 'Teachers',
          renderAs: 'line',
          showValues: '0',
          data: [
            {
              value: 2766,
            },
            {
              value: 3081,
            },
            {
              value: 3171,
            },
            {
              value: 3145,
            },
            {
              value: 3168,
            },
            {
              value: 3200,
            },
            {
              value: 3225,
            },
            {
              value: 3264,
            },
            {
              value: 3314,
            },
            {
              value: 3424,
            },
            {
              value: 3472,
            },
            {
              value: 3537,
            },
            {
              value: 3577,
            },
            {
              value: 3623,
            },
            {
              value: 3700,
            },
            {
              value: 3784,
            },
            {
              value: 3846,
            },
            {
              value: 3906,
            },
            {
              value: 4006,
            },
            {
              value: 4127,
            },
            {
              value: 4230,
            },
            {
              value: 4347,
            },
            {
              value: 4432,
            },
            {
              value: 4554,
            },
            {
              value: 4631,
            },
            {
              value: 4663,
            },
            {
              value: 4773,
            },
            {
              value: 4883,
            },
            {
              value: 4944,
            },
            {
              value: 5028,
            },
            {
              value: 5065,
            },
            {
              value: 5086,
            },
            {
              value: 5038,
            },
            {
              value: 5049,
            },
            {
              value: 5072,
            },
            {
              value: 5101,
            },
            {
              value: 5119,
            },
            {
              value: 5126,
            },
          ],
        },
        {
          seriesName: 'Students',
          parentYAxis: 'S',
          renderAs: 'line',
          showValues: '0',
          data: [
            {
              value: 59055,
            },
            {
              value: 59055,
            },
            {
              value: 58221,
            },
            {
              value: 58221,
            },
            {
              value: 58221,
            },
            {
              value: 58221,
            },
            {
              value: 58221,
            },
            {
              value: 57226,
            },
            {
              value: 57226,
            },
            {
              value: 57226,
            },
            {
              value: 57226,
            },
            {
              value: 57226,
            },
            {
              value: 60683,
            },
            {
              value: 62087,
            },
            {
              value: 63181,
            },
            {
              value: 63837,
            },
            {
              value: 64385,
            },
            {
              value: 65020,
            },
            {
              value: 65911,
            },
            {
              value: 66574,
            },
            {
              value: 67033,
            },
            {
              value: 67725,
            },
            {
              value: 68685,
            },
            {
              value: 69920,
            },
            {
              value: 71015,
            },
            {
              value: 71551,
            },
            {
              value: 72154,
            },
            {
              value: 72674,
            },
            {
              value: 73066,
            },
            {
              value: 73449,
            },
            {
              value: 74076,
            },
            {
              value: 75163,
            },
            {
              value: 75886,
            },
            {
              value: 75800,
            },
            {
              value: 75748,
            },
            {
              value: 75817,
            },
            {
              value: 75843,
            },
            {
              value: 75740,
            },
          ],
        },
      ],
    },
  },
  {
    type: 'mscombidy2d',
    renderAt: 'ch-1',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        xAxisname: 'Year',
        pYAxisName: 'Teachers',
        sYAxisName: 'Students',
        numberPrefix: '$',
        sNumberPrefix: '$',
        paletteColors: '#3F51B5,#E91E63',
        baseFontColor: '#333333',
        showBorder: '0',
        bgColor: '#ffffff',
        showShadow: '1',
        canvasBgColor: '#ffffff',
        divlineColor: '#9e9e9e',
        divlineThickness: '1',
        divLineIsDashed: '0',
        usePlotGradientColor: '0',
        showXAxisLine: '1',
        xAxisLineThickness: '1',
        legendBgAlpha: '0',
        legendBorderAlpha: '0',
        legendShadow: '0',
        legendItemFontSize: '10',
        legendItemFontColor: '#666666',
        showCanvasBorder: '1',
        canvasBorderThickness: '1',
        canvasBorderColor: '#9e9e9e',
        drawAnchors: 0,
        showAlternateHGridColor: '0',
      },
      categories: [{
        category: [
          {
            label: '1990',
          },
          {
            label: '1991',
          },
          {
            label: '1992',
          },
          {
            label: '1993',
          },
          {
            label: '1994',
          },
          {
            label: '1995',
          },
          {
            label: '1996',
          },
          {
            label: '1997',
          },
          {
            label: '1998',
          },
          {
            label: '1999',
          },
          {
            label: '2000',
          },
          {
            label: '2001',
          },
          {
            label: '2002',
          },
          {
            label: '2003',
          },
          {
            label: '2004',
          },
          {
            label: '2005',
          },
          {
            label: '2006',
          },
          {
            label: '2007',
          },
          {
            label: '2008',
          },
          {
            label: '2009',
          },
          {
            label: '2010',
          },
          {
            label: '2011',
          },
          {
            label: '2012',
          },
          {
            label: '2013',
          },
          {
            label: '2014',
          },
          {
            label: '2015',
          },
        ],
      },
      ],
      dataset: [
        {
          seriesName: 'Teachers',
          renderAs: 'line',
          showValues: '0',
          data: [
            {
              value: 33084,
            },
            {
              value: 34063,
            },
            {
              value: 35029,
            },
            {
              value: 35737,
            },
            {
              value: 36675,
            },
            {
              value: 37642,
            },
            {
              value: 38443,
            },
            {
              value: 39350,
            },
            {
              value: 40544,
            },
            {
              value: 41807,
            },
            {
              value: 43378,
            },
            {
              value: 44655,
            },
            {
              value: 45686,
            },
            {
              value: 46542,
            },
            {
              value: 47516,
            },
            {
              value: 49086,
            },
            {
              value: 51052,
            },
            {
              value: 52800,
            },
            {
              value: 54319,
            },
            {
              value: 55202,
            },
            {
              value: 55623,
            },
            {
              value: 55418,
            },
            {
              value: 56103,
            },
            {
              value: 56610,
            },
            {
              value: 57420,
            },
            {
              value: 58064,
            },
          ],
        },
        {
          seriesName: 'Students',
          parentYAxis: 'S',
          renderAs: 'line',
          showValues: '0',
          data: [
            {
              value: 30730,
            },
            {
              value: 31610,
            },
            {
              value: 32060,
            },
            {
              value: 32360,
            },
            {
              value: 33440,
            },
            {
              value: 34550,
            },
            {
              value: 35620,
            },
            {
              value: 36680,
            },
            {
              value: 37910,
            },
            {
              value: 40330,
            },
            {
              value: 41060,
            },
            {
              value: 41620,
            },
            {
              value: 41150,
            },
            {
              value: 41940,
            },
            {
              value: 42090,
            },
            {
              value: 43320,
            },
            {
              value: 45760,
            },
            {
              value: 47000,
            },
            {
              value: 49000,
            },
            {
              value: 49990,
            },
            {
              value: 50360,
            },
            {
              value: 50660,
            },
            {
              value: 50950,
            },
            {
              value: 51120,
            },
            {
              value: 51400,
            },
            {
              value: 52310,
            },
          ],
        },
      ],
    },
  },
  {
    type: 'logmsline',
    renderAt: 'ch-2',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        xAxisname: 'Year',
        yAxisName: 'Number of enrollments',
        linethickness: '2',
        showvalues: '0',
        formatnumberscale: '1',
        anchoralpha: '0',
        animation: '1',
        legendborderalpha: '20',
        drawCrossLine: '1',
        crossLineColor: '#0d0d0d',
        crossLineAlpha: '100',
        tooltipGrayOutColor: '#80bfff',
        paletteColors: '#3F51B5,#E91E63,#4CAF50',
        baseFontColor: '#333333',
        showBorder: '0',
        bgColor: '#ffffff',
        showShadow: '1',
        canvasBgColor: '#ffffff',
        divlineColor: '#9e9e9e',
        divlineThickness: '1',
        divLineIsDashed: '0',
        usePlotGradientColor: '0',
        showXAxisLine: '1',
        xAxisLineThickness: '1',
        legendBgAlpha: '0',
        legendBorderAlpha: '0',
        legendShadow: '0',
        legendItemFontSize: '10',
        legendItemFontColor: '#666666',
        showCanvasBorder: '1',
        canvasBorderThickness: '1',
        canvasBorderColor: '#9e9e9e',
        drawAnchors: 0,
        showAlternateHGridColor: '0',
      },
      categories: [{
        category: [
          {
            label: '1976',
          },
          {
            label: '1980',
          },
          {
            label: '1990',
          },
          {
            label: '1998',
          },
          {
            label: '1999',
          },
          {
            label: '2000',
          },
          {
            label: '2001',
          },
          {
            label: '2002',
          },
          {
            label: '2003',
          },
          {
            label: '2004',
          },
          {
            label: '2005',
          },
          {
            label: '2006',
          },
          {
            label: '2007',
          },
          {
            label: '2008',
          },
          {
            label: '2009',
          },
          {
            label: '2010',
          },
          {
            label: '2011',
          },
          {
            label: '2012',
          },
          {
            label: '2013',
          },
          {
            label: '2014',
          },
        ],
      }],
      dataset: [{
        seriesname: 'Bachelor\'s Degree',
        data: [
          {
            value: 917900,
          },
          {
            value: 934800,
          },
          {
            value: 1094538,
          },
          {
            value: 1202239,
          },
          {
            value: 1237875,
          },
          {
            value: 1244171,
          },
          {
            value: 1291900,
          },
          {
            value: 1348811,
          },
          {
            value: 1399542,
          },
          {
            value: 1439264,
          },
          {
            value: 1485242,
          },
          {
            value: 1524092,
          },
          {
            value: 1563069,
          },
          {
            value: 1601399,
          },
          {
            value: 1649919,
          },
          {
            value: 1716053,
          },
          {
            value: 1792163,
          },
          {
            value: 1840381,
          },
          {
            value: 1870150,
          },
          {
            value: 1894934,
          },
        ],
      }, {
        seriesname: 'Master\'s degree',
        data: [
          {
            value: 322463,
          },
          {
            value: 301081,
          },
          {
            value: 342863,
          },
          {
            value: 446038,
          },
          {
            value: 463185,
          },
          {
            value: 473502,
          },
          {
            value: 487313,
          },
          {
            value: 518699,
          },
          {
            value: 564272,
          },
          {
            value: 580151,
          },
          {
            value: 599731,
          },
          {
            value: 610597,
          },
          {
            value: 630666,
          },
          {
            value: 662082,
          },
          {
            value: 693313,
          },
          {
            value: 730922,
          },
          {
            value: 755967,
          },
          {
            value: 751718,
          },
          {
            value: 754582,
          },
          {
            value: 758708,
          },
        ],
      }, {
        seriesname: 'Doctor\'s degree',
        data: [
          {
            value: 91218,
          },
          {
            value: 97281,
          },
          {
            value: 105547,
          },
          {
            value: 116700,
          },
          {
            value: 118736,
          },
          {
            value: 119585,
          },
          {
            value: 119663,
          },
          {
            value: 121579,
          },
          {
            value: 126087,
          },
          {
            value: 134387,
          },
          {
            value: 138056,
          },
          {
            value: 144690,
          },
          {
            value: 149378,
          },
          {
            value: 154564,
          },
          {
            value: 158590,
          },
          {
            value: 163827,
          },
          {
            value: 170217,
          },
          {
            value: 175026,
          },
          {
            value: 177587,
          },
          {
            value: 178547,
          },
        ],
      }],
    },
  },
  {
    type: 'doughnut2d',
    renderAt: 'ch-5',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        paletteColors: '#0075c2,#1aaf5d',
        showPercentInTooltip: '0',
        decimals: '1',
        showBorder: '0',
        bgColor: '#ffffff',
        showShadow: '1',
        canvasBgColor: '#ffffff',
        use3DLighting: '0',
        numberSuffix: '%',
      },
      data: [
        {
          label: 'Male',
          value: '53.6',
        },
        {
          label: 'Female',
          value: '51.8',
        },
      ],
    },
  },
  {
    type: 'doughnut2d',
    renderAt: 'ch-6',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        paletteColors: '#0075c2,#1aaf5d',
        use3DLighting: '0',
        showPercentInTooltip: '0',
        decimals: '1',
        showBorder: '0',
        bgColor: '#ffffff',
        showShadow: '1',
        canvasBgColor: '#ffffff',
      },
      data: [
        {
          label: 'Teachers',
          value: '5333',
        },
        {
          label: 'Students',
          value: '75740',
        },
      ],
    },
  },
];

FusionCharts.ready(() => {
  chartConfigs.forEach((chConf) => {
    new FusionCharts(chConf).render();
  });
});
