module.exports = [
  {
    type: 'column2d',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Monthly revenue for last year',
        subCaption: "Harry's SuperMart",
        xAxisName: 'Month',
        yAxisName: 'Revenues (In USD)',
        numberPrefix: '$',
        theme: 'fint',
      },
      data: [{
        label: 'Jan',
        value: '420000',
      }, {
        label: 'Feb',
        value: '810000',
      }, {
        label: 'Mar',
        value: '720000',
      }, {
        label: 'Apr',
        value: '550000',
      }, {
        label: 'May',
        value: '910000',
      }, {
        label: 'Jun',
        value: '510000',
      }, {
        label: 'Jul',
        value: '680000',
      }, {
        label: 'Aug',
        value: '620000',
      }, {
        label: 'Sep',
        value: '610000',
      }, {
        label: 'Oct',
        value: '490000',
      }, {
        label: 'Nov',
        value: '900000',
      }, {
        label: 'Dec',
        value: '730000',
      }],
    },
    renderAt: 'ch-0',
  }, {
    type: 'bar2d',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Top 5 Stores by Sales',
        subCaption: 'Last month',
        yAxisName: 'Sales (In USD)',
        numberPrefix: '$',
        paletteColors: '#0075c2',
        bgColor: '#ffffff',
        showBorder: '0',
        showCanvasBorder: '0',
        usePlotGradientColor: '0',
        plotBorderAlpha: '10',
        placeValuesInside: '1',
        valueFontColor: '#ffffff',
        showAxisLines: '1',
        axisLineAlpha: '25',
        divLineAlpha: '10',
        alignCaptionWithCanvas: '0',
        showAlternateVGridColor: '0',
        captionFontSize: '14',
        subcaptionFontSize: '14',
        subcaptionFontBold: '0',
        toolTipColor: '#ffffff',
        toolTipBorderThickness: '0',
        toolTipBgColor: '#000000',
        toolTipBgAlpha: '80',
        toolTipBorderRadius: '2',
        toolTipPadding: '5',
      },
      data: [{
        label: 'Bakersfield Central',
        value: '880000',
      }, {
        label: 'Garden Groove harbour',
        value: '730000',
      }, {
        label: 'Los Angeles Topanga',
        value: '590000',
      }, {
        label: 'Compton-Rancho Dom',
        value: '520000',
      }, {
        label: 'Daly City Serramonte',
        value: '330000',
      }],
    },
    renderAt: 'ch-1',
  }, {
    type: 'line',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Total footfall in Bakersfield Central',
        subCaption: 'Last week',
        xAxisName: 'Day',
        yAxisName: 'No. of Visitors',
        lineThickness: '2',
        paletteColors: '#0075c2',
        baseFontColor: '#333333',
        baseFont: 'Helvetica Neue,Arial',
        captionFontSize: '14',
        subcaptionFontSize: '14',
        subcaptionFontBold: '0',
        showBorder: '0',
        bgColor: '#ffffff',
        showShadow: '0',
        canvasBgColor: '#ffffff',
        canvasBorderAlpha: '0',
        divlineAlpha: '100',
        divlineColor: '#999999',
        divlineThickness: '1',
        divLineIsDashed: '1',
        divLineDashLen: '1',
        divLineGapLen: '1',
        showXAxisLine: '1',
        xAxisLineThickness: '1',
        xAxisLineColor: '#999999',
        showAlternateHGridColor: '0',
      },
      data: [{
        label: 'Mon',
        value: '15123',
      }, {
        label: 'Tue',
        value: '14233',
      }, {
        label: 'Wed',
        value: '23507',
      }, {
        label: 'Thu',
        value: '9110',
      }, {
        label: 'Fri',
        value: '15529',
      }, {
        label: 'Sat',
        value: '20803',
      }, {
        label: 'Sun',
        value: '19202',
      }],
      trendlines: [{
        line: [{
          startvalue: '18500',
          color: '#1aaf5d',
          displayvalue: 'Average{br}weekly{br}footfall',
          valueOnRight: '1',
          thickness: '2',
        }],
      }],
    },
    renderAt: 'ch-2',
  }, {
    type: 'area2d',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Sales of Liquor',
        subCaption: 'Last week',
        xAxisName: 'Day',
        yAxisName: 'Sales (In USD)',
        numberPrefix: '$',
        paletteColors: '#0075c2',
        bgColor: '#ffffff',
        showBorder: '0',
        showCanvasBorder: '0',
        plotBorderAlpha: '10',
        usePlotGradientColor: '0',
        plotFillAlpha: '50',
        showXAxisLine: '1',
        axisLineAlpha: '25',
        divLineAlpha: '10',
        showValues: '1',
        showAlternateHGridColor: '0',
        captionFontSize: '14',
        subcaptionFontSize: '14',
        subcaptionFontBold: '0',
        toolTipColor: '#ffffff',
        toolTipBorderThickness: '0',
        toolTipBgColor: '#000000',
        toolTipBgAlpha: '80',
        toolTipBorderRadius: '2',
        toolTipPadding: '5',
      },
      data: [{
        label: 'Mon',
        value: '4123',
      }, {
        label: 'Tue',
        value: '4633',
      }, {
        label: 'Wed',
        value: '5507',
      }, {
        label: 'Thu',
        value: '4910',
      }, {
        label: 'Fri',
        value: '5529',
      }, {
        label: 'Sat',
        value: '5803',
      }, {
        label: 'Sun',
        value: '6202',
      }],
    },
    renderAt: 'ch-3',
  }, {
    type: 'pie2d',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Split of revenue by product categories',
        subCaption: 'Last year',
        numberPrefix: '$',
        showPercentInTooltip: '0',
        decimals: '1',
        useDataPlotColorForLabels: '1',
        theme: 'fint',
      },
      data: [{
        label: 'Food',
        value: '285040',
      }, {
        label: 'Apparels',
        value: '146330',
      }, {
        label: 'Electronics',
        value: '105070',
      }, {
        label: 'Household',
        value: '49100',
      }],
    },
    renderAt: 'ch-4',
  }, {
    type: 'funnel',
    width: '500',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: "Website - Harry's SuperMart",
        subcaption: 'Visit to purchase - Conversion analysis for last year',
        decimals: '1',
        is2D: '1',
        plotTooltext: 'Success : $percentOfPrevValue',
        showPercentValues: '1',
        theme: 'fint',
      },
      data: [{
        label: 'Unique Website Visits',
        value: '1460000',
      }, {
        label: 'Programme Details Section Visits',
        value: '930000',
      }, {
        label: 'Attempts to Register',
        value: '540000',
      }, {
        label: 'Successful Registrations',
        value: '210000',
      }, {
        label: 'Logged In',
        value: '190000',
      }, {
        label: 'Purchased on Introductory Offers',
        value: '120000',
      }],
    },
    renderAt: 'ch-5',
  }, {
    type: 'pyramid',
    width: '500',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        theme: 'fint',
        caption: 'The Global Wealth Pyramid',
        captionOnTop: '0',
        captionPadding: '25',
        alignCaptionWithCanvas: '1',
        subcaption: 'Credit Suisse 2013',
        subCaptionFontSize: '12',
        borderAlpha: '20',
        is2D: '1',
        bgColor: '#ffffff',
        showValues: '1',
        numberPrefix: '$',
        numberSuffix: 'M',
        plotTooltext: '$label of world population is worth USD $value tn ',
        showPercentValues: '1',
        chartLeftMargin: '40',
      },
      data: [{
        label: 'Top 32 mn (0.7%)',
        value: '98.7',
      }, {
        label: 'Next 361 mn (7.7%)',
        value: '101.8',
      }, {
        label: 'Next 1.1 bn (22.9%)',
        value: '33',
      }, {
        label: 'Last 3.2 bn (68.7%)',
        value: '7.3',
      }],
    },
    renderAt: 'ch-6',
  }, {
    type: 'sparkline',
    width: '450',
    height: '50',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Stock Price',
        subcaption: 'Last month',
        canvasleftmargin: '145',
        showBorder: '0',
        bgColor: '#ffffff',
        captionPadding: '7',
        valuePadding: '7',
        numberPrefix: '$',
      },
      dataset: [{
        data: [{
          value: '38.42',
        }, {
          value: '41.43',
        }, {
          value: '34.78',
        }, {
          value: '40.67',
        }, {
          value: '44.12',
        }, {
          value: '38.45',
        }, {
          value: '40.71',
        }, {
          value: '49.90',
        }, {
          value: '40.12',
        }, {
          value: '34.91',
        }, {
          value: '42.02',
        }, {
          value: '35.21',
        }, {
          value: '43.31',
        }, {
          value: '40.21',
        }, {
          value: '40.54',
        }, {
          value: '40.90',
        }, {
          value: '54.21',
        }, {
          value: '41.90',
        }, {
          value: '33.43',
        }, {
          value: '46.73',
        }, {
          value: '50.42',
        }, {
          value: '40.74',
        }, {
          value: '42.31',
        }, {
          value: '50.39',
        }, {
          value: '51.10',
        }, {
          value: '44.84',
        }, {
          value: '51.64',
        }, {
          value: '47.62',
        }, {
          value: '39.61',
        }, {
          value: '35.13',
        }],
      }],
    },
    renderAt: 'ch-7',
  }, {
    type: 'doughnut2d',
    width: '450',
    height: '450',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Split of Revenue by Product Categories',
        subCaption: 'Last year',
        numberPrefix: '$',
        showBorder: '0',
        use3DLighting: '0',
        enableSmartLabels: '0',
        startingAngle: '310',
        showLabels: '0',
        showPercentValues: '1',
        showLegend: '1',
        defaultCenterLabel: 'Total revenue: $64.08K',
        centerLabel: 'Revenue from $label: $value',
        centerLabelBold: '1',
        showTooltip: '0',
        decimals: '0',
        useDataPlotColorForLabels: '1',
        theme: 'fint',
      },
      data: [{
        label: 'Food',
        value: '28504',
      }, {
        label: 'Apparels',
        value: '14633',
      }, {
        label: 'Electronics',
        value: '10507',
      }, {
        label: 'Household',
        value: '4910',
      }],
    },
    renderAt: 'ch-8',
  }, {
    type: 'candlestick',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {

      chart: {
        caption: 'Daily Stock Price HRYS',
        subCaption: 'Last 2 months',
        numberprefix: '$',
        vNumberPrefix: ' ',
        pyaxisname: 'Price',
        vyaxisname: 'Volume (In Millions)',
        bgColor: '#ffffff',
        showBorder: '0',
        canvasBgColor: '#ffffff',
        showCanvasBorder: '0',
        showAlternateHGridColor: '0',
        baseFontColor: '#333333',
        baseFont: 'Helvetica Neue,Arial',
        captionFontSize: '14',
        subcaptionFontSize: '14',
        subcaptionFontBold: '0',
        toolTipColor: '#ffffff',
        toolTipBorderThickness: '0',
        toolTipBgColor: '#000000',
        toolTipBgAlpha: '80',
        toolTipBorderRadius: '2',
        toolTipPadding: '5',
        divlineAlpha: '100',
        divlineColor: '#999999',
        divlineThickness: '1',
        divLineDashed: '1',
        divLineDashLen: '1',
      },
      categories: [
        {
          category: [
            {
              label: '2 month ago',
              x: '1',
            },
            {
              label: '1 month ago',
              x: '31',
            },
            {
              label: 'Today',
              x: '60',
            },
          ],
        },
      ],
      dataset: [
        {
          data: [
            {
              open: '18.74',
              high: '19.16',
              low: '18.67 ',
              close: '18.99',
              x: '1',
              volume: '4991285',
            },
            {
              open: '18.74',
              high: '19.06',
              low: '18.54',
              close: '18.82',
              x: '2',
              volume: '3615889',
            },
            {
              open: '19.21',
              high: '19.3',
              low: '18.59 ',
              close: '18.65',
              x: '3',
              volume: '4749586',
            },
            {
              open: '19.85',
              high: '19.86',
              low: '19.12',
              close: '19.4',
              x: '4',
              volume: '4366740',
            },
            {
              open: '20.19',
              high: '20.21',
              low: '19.57',
              close: '19.92',
              x: '5',
              volume: '3982709',
            },
            {
              open: '20.47',
              high: '20.64',
              low: '20.15',
              close: '20.16',
              x: '6',
              volume: '2289403',
            },
            {
              open: '20.36',
              high: '20.52',
              low: '20.29',
              close: '20.48',
              x: '7',
              volume: '1950919',
            },
            {
              open: '20.21',
              high: '20.25',
              low: '19.91',
              close: '20.15',
              x: '8',
              volume: '2391070',
            },
            {
              open: '19.46',
              high: '20.54',
              low: '19.46',
              close: '20.22',
              x: '9',
              volume: '4548422',
            },
            {
              open: '19.24',
              high: '19.5',
              low: '19.13',
              close: '19.44',
              x: '10',
              volume: '1889811',
            },
            {
              open: '19.25',
              high: '19.41',
              low: '18.99',
              close: '19.22',
              x: '11',
              volume: '2543355',
            },
            {
              open: '18.85',
              high: '19.45',
              low: '18.8',
              close: '19.24',
              x: '12',
              volume: '2134393',
            },
            {
              open: '18.97',
              high: '19.01',
              low: '18.68',
              close: '18.95',
              x: '13',
              volume: '1740852',
            },
            {
              open: '18.69',
              high: '19',
              low: '18.35',
              close: '18.97',
              x: '14',
              volume: '2701392',
            },
            {
              open: '19.02',
              high: '19.1',
              low: '18.68',
              close: '18.7',
              x: '15',
              volume: '2198755',
            },
            {
              open: '19.29',
              high: '19.38',
              low: '18.88',
              close: '19.05',
              x: '16',
              volume: '2464958',
            },
            {
              open: '18.64',
              high: '19.35',
              low: '18.53',
              close: '19.33',
              x: '17',
              volume: '2962994',
            },
            {
              open: '18.14',
              high: '18.58',
              low: '18.08',
              close: '18.52',
              x: '18',
              volume: '1964932',
            },
            {
              open: '18.49',
              high: '18.92',
              low: '18.19',
              close: '18.26',
              x: '19',
              volume: '3013102',
            },
            {
              open: '18.71',
              high: '18.84',
              low: '18',
              close: '18.51',
              x: '20',
              volume: '4435894',
            },
            {
              open: '19.17',
              high: '19.35',
              low: '18.61',
              close: '18.66',
              x: '21',
              volume: '3245851',
            },
            {
              open: '19.12',
              high: '19.41',
              low: '18.92',
              close: '19.2',
              x: '22',
              volume: '2259792',
            },
            {
              open: '19.43',
              high: '19.58',
              low: '19.16',
              close: '19.33',
              x: '23',
              volume: '3531327',
            },
            {
              open: '19.72',
              high: '19.81',
              low: '19.04',
              close: '19.27',
              x: '24',
              volume: '5834733',
            },
            {
              open: '19.7',
              high: '19.94',
              low: '19.49',
              close: '19.77',
              x: '25',
              volume: '2009987',
            },
            {
              open: '19.84',
              high: '19.98',
              low: '19.39',
              close: '19.88',
              x: '26',
              volume: '2767592',
            },
            {
              open: '20.71',
              high: '20.73',
              low: '19.16',
              close: '19.63',
              x: '27',
              volume: '673358',
            },
            {
              open: '21.14',
              high: '21.14',
              low: '20.55',
              close: '20.65',
              x: '28',
              volume: '3164006',
            },
            {
              open: '21.5',
              high: '21.86',
              low: '21.2',
              close: '21.33',
              x: '29',
              volume: '7986466',
            },
            {
              open: '20.45',
              high: '21.08',
              low: '20.1',
              close: '20.56',
              x: '30',
              volume: '5813040',
            },
            {
              open: '20.07',
              high: '20.69',
              low: '20.04',
              close: '20.36',
              x: '31',
              volume: '3440002',
            },
            {
              open: '19.88',
              high: '20.11',
              low: '19.51',
              close: '20.03',
              x: '32',
              volume: '2779171',
            },
            {
              open: '19.76',
              high: '20.13',
              low: '19.65',
              close: '19.88',
              x: '33',
              volume: '2918115',
            },
            {
              open: '19.77',
              high: '19.97',
              low: '19.27',
              close: '19.9',
              x: '34',
              volume: '3850357',
            },
            {
              open: '19.43',
              high: '19.72',
              low: '18.88',
              close: '19.5',
              x: '35',
              volume: '5047378',
            },
            {
              open: '19.69',
              high: '19.84',
              low: '19.17',
              close: '19.43',
              x: '36',
              volume: '3479017',
            },
            {
              open: '19.59',
              high: '20.02',
              low: '19.02',
              close: '19.41',
              x: '37',
              volume: '5749874',
            },
            {
              open: '20.95',
              high: '21.09',
              low: '19.64',
              close: '19.83',
              x: '38',
              volume: '6319111',
            },
            {
              open: '20.52',
              high: '21.03',
              low: '20.45',
              close: '21',
              x: '39',
              volume: '4412413',
            },
            {
              open: '20.36',
              high: '20.96',
              low: '20.2',
              close: '20.44',
              x: '40',
              volume: '5948318',
            },
            {
              open: '21.45',
              high: '21.48',
              low: '19.63',
              close: '20.3',
              x: '41',
              volume: '11935440',
            },
            {
              open: '23.49',
              high: '23.57',
              low: '21.12',
              close: '21.63',
              x: '42',
              volume: '10523910',
            },
            {
              open: '24.04',
              high: '24.21',
              low: '23.04',
              close: '23.28',
              x: '43',
              volume: '3843797',
            },
            {
              open: '23.6',
              high: '24.065',
              low: '23.51',
              close: '23.94',
              x: '44',
              volume: '3691404',
            },
            {
              open: '22.87',
              high: '23.49',
              low: '22.86',
              close: '23.48',
              x: '45',
              volume: '3387393',
            },
            {
              open: '22.35',
              high: '22.89',
              low: '22.35',
              close: '22.74',
              x: '46',
              volume: '3737330',
            },
            {
              open: '22.11',
              high: '22.5',
              low: '21.9',
              close: '22.24',
              x: '47',
              volume: '4630397',
            },
            {
              open: '22.58',
              high: '22.80',
              low: '22.25',
              close: '22.42',
              x: '48',
              volume: '3024711',
            },
            {
              open: '23.54',
              high: '23.76',
              low: '22.6',
              close: '22.68',
              x: '49',
              volume: '3984508',
            },
            {
              open: '23.66',
              high: '24.09',
              low: '23.09',
              close: '23.46',
              x: '50',
              volume: '3420204',
            },
            {
              open: '24.36',
              high: '24.42',
              low: '22.90',
              close: '23.6',
              x: '51',
              volume: '5151096',
            },
            {
              open: '24.34',
              high: '24.6',
              low: '23.73',
              close: '24.15',
              x: '52',
              volume: '5999654',
            },
            {
              open: '23.38',
              high: '24.8',
              low: '23.36',
              close: '24.1',
              x: '53',
              volume: '5382049',
            },
            {
              open: '23.76',
              high: '23.84',
              low: '23.23',
              close: '23.47',
              x: '54',
              volume: '3508510',
            },
            {
              open: '23.64',
              high: '23.94',
              low: '23.48',
              close: '23.76',
              x: '55',
              volume: '2718428',
            },
            {
              open: '23.99',
              high: '24.18',
              low: '23.59',
              close: '23.66',
              x: '56',
              volume: '2859391',
            },
            {
              open: '23.32',
              high: '24.26',
              low: '23.32',
              close: '23.79',
              x: '57',
              volume: '4138618',
            },
            {
              open: '24.08',
              high: '24.4',
              low: '23.26',
              close: '23.39',
              x: '58',
              volume: '4477478',
            },
            {
              open: '22.84',
              high: '23.96',
              low: '22.83',
              close: '23.88',
              x: '59',
              volume: '4822378',
            },
            {
              open: '23.38',
              high: '23.78',
              low: '22.94',
              close: '23.01',
              x: '60',
              volume: '4037312',
            },
            {
              open: '23.97',
              high: '23.99',
              low: '23.14',
              close: '23.32',
              x: '61',
              volume: '4879546',
            },
          ],
        },
      ],
    },
    renderAt: 'ch-9',
  }, {
    type: 'mscolumn2d',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Comparison of Quarterly Revenue',
        xAxisname: 'Quarter',
        yAxisName: 'Revenues (In USD)',
        numberPrefix: '$',
        plotFillAlpha: '80',
        paletteColors: '#0075c2,#1aaf5d',
        baseFontColor: '#333333',
        baseFont: 'Helvetica Neue,Arial',
        captionFontSize: '14',
        subcaptionFontSize: '14',
        subcaptionFontBold: '0',
        showBorder: '0',
        bgColor: '#ffffff',
        showShadow: '0',
        canvasBgColor: '#ffffff',
        canvasBorderAlpha: '0',
        divlineAlpha: '100',
        divlineColor: '#999999',
        divlineThickness: '1',
        divLineIsDashed: '1',
        divLineDashLen: '1',
        divLineGapLen: '1',
        usePlotGradientColor: '0',
        showplotborder: '0',
        valueFontColor: '#ffffff',
        placeValuesInside: '1',
        showHoverEffect: '1',
        rotateValues: '1',
        showXAxisLine: '1',
        xAxisLineThickness: '1',
        xAxisLineColor: '#999999',
        showAlternateHGridColor: '0',
        legendBgAlpha: '0',
        legendBorderAlpha: '0',
        legendShadow: '0',
        legendItemFontSize: '10',
        legendItemFontColor: '#666666',
      },
      categories: [{
        category: [{
          label: 'Q1',
        }, {
          label: 'Q2',
        }, {
          label: 'Q3',
        }, {
          label: 'Q4',
        }],
      }],
      dataset: [{
        seriesname: 'Previous Year',
        data: [{
          value: '10000',
        }, {
          value: '11500',
        }, {
          value: '12500',
        }, {
          value: '15000',
        }],
      }, {
        seriesname: 'Current Year',
        data: [{
          value: '25400',
        }, {
          value: '29800',
        }, {
          value: '21800',
        }, {
          value: '26800',
        }],
      }],
      trendlines: [{
        line: [{
          startvalue: '12250',
          color: '#0075c2',
          displayvalue: 'Previous{br}Average',
          valueOnRight: '1',
          thickness: '1',
          showBelow: '1',
          tooltext: 'Previous year quarterly target  : $13.5K',
        }, {
          startvalue: '25950',
          color: '#1aaf5d',
          displayvalue: 'Current{br}Average',
          valueOnRight: '1',
          thickness: '1',
          showBelow: '1',
          tooltext: 'Current year quarterly target  : $23K',
        }],
      }],
    },
    renderAt: 'ch-10',
  }, {
    type: 'msline',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Number of visitors last week',
        subCaption: 'Bakersfield Central vs Los Angeles Topanga',
        captionFontSize: '14',
        subcaptionFontSize: '14',
        subcaptionFontBold: '0',
        paletteColors: '#0075c2,#1aaf5d',
        bgcolor: '#ffffff',
        showBorder: '0',
        showShadow: '0',
        showCanvasBorder: '0',
        usePlotGradientColor: '0',
        legendBorderAlpha: '0',
        legendShadow: '0',
        showAxisLines: '0',
        showAlternateHGridColor: '0',
        divlineThickness: '1',
        divLineIsDashed: '1',
        divLineDashLen: '1',
        divLineGapLen: '1',
        xAxisName: 'Day',
        showValues: '0',
      },
      categories: [{
        category: [{
          label: 'Mon',
        }, {
          label: 'Tue',
        }, {
          label: 'Wed',
        }, {
          vline: 'true',
          lineposition: '0',
          color: '#6baa01',
          labelHAlign: 'center',
          labelPosition: '0',
          label: 'National holiday',
          dashed: '1',
        }, {
          label: 'Thu',
        }, {
          label: 'Fri',
        }, {
          label: 'Sat',
        }, {
          label: 'Sun',
        }],
      }],
      dataset: [{
        seriesname: 'Bakersfield Central',
        data: [{
          value: '15123',
        }, {
          value: '14233',
        }, {
          value: '25507',
        }, {
          value: '9110',
        }, {
          value: '15529',
        }, {
          value: '20803',
        }, {
          value: '19202',
        }],
      }, {
        seriesname: 'Los Angeles Topanga',
        data: [{
          value: '13400',
        }, {
          value: '12800',
        }, {
          value: '22800',
        }, {
          value: '12400',
        }, {
          value: '15800',
        }, {
          value: '19800',
        }, {
          value: '21800',
        }],
      }],
      trendlines: [{
        line: [{
          startvalue: '17022',
          color: '#6baa01',
          valueOnRight: '1',
          displayvalue: 'Average',
        }],
      }],
    },
    renderAt: 'ch-11',
  }, {
    type: 'mscombi2d',
    width: '550',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Actual Revenues, Targeted Revenues & Profits',
        subCaption: 'Last year',
        xAxisname: 'Month',
        yAxisName: 'Amount (In USD)',
        numberPrefix: '$',
        theme: 'fint',
      },
      categories: [{
        category: [{
          label: 'Jan',
        }, {
          label: 'Feb',
        }, {
          label: 'Mar',
        }, {
          label: 'Apr',
        }, {
          label: 'May',
        }, {
          label: 'Jun',
        }, {
          label: 'Jul',
        }, {
          label: 'Aug',
        }, {
          label: 'Sep',
        }, {
          label: 'Oct',
        }, {
          label: 'Nov',
        }, {
          label: 'Dec',
        }],
      }],
      dataset: [{
        seriesName: 'Actual Revenue',
        data: [{
          value: '16000',
        }, {
          value: '20000',
        }, {
          value: '18000',
        }, {
          value: '19000',
        }, {
          value: '15000',
        }, {
          value: '21000',
        }, {
          value: '16000',
        }, {
          value: '20000',
        }, {
          value: '17000',
        }, {
          value: '25000',
        }, {
          value: '19000',
        }, {
          value: '23000',
        }],
      }, {
        seriesName: 'Projected Revenue',
        renderAs: 'line',
        showValues: '0',
        data: [{
          value: '15000',
        }, {
          value: '16000',
        }, {
          value: '17000',
        }, {
          value: '18000',
        }, {
          value: '19000',
        }, {
          value: '19000',
        }, {
          value: '19000',
        }, {
          value: '19000',
        }, {
          value: '20000',
        }, {
          value: '21000',
        }, {
          value: '22000',
        }, {
          value: '23000',
        }],
      }, {
        seriesName: 'Profit',
        renderAs: 'area',
        showValues: '0',
        data: [{
          value: '4000',
        }, {
          value: '5000',
        }, {
          value: '3000',
        }, {
          value: '4000',
        }, {
          value: '1000',
        }, {
          value: '7000',
        }, {
          value: '1000',
        }, {
          value: '4000',
        }, {
          value: '1000',
        }, {
          value: '8000',
        }, {
          value: '2000',
        }, {
          value: '7000',
        }],
      }],
    },
    renderAt: 'ch-12',
  }, {
    type: 'mscombidy2d',
    width: '550',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Revenues and Profits',
        subCaption: 'For last year',
        xAxisname: 'Month',
        pYAxisName: 'Amount (In USD)',
        sYAxisName: 'Profit %',
        numberPrefix: '$',
        sNumberSuffix: '%',
        sYAxisMaxValue: '50',
        theme: 'fint',
      },
      categories: [{
        category: [{
          label: 'Jan',
        }, {
          label: 'Feb',
        }, {
          label: 'Mar',
        }, {
          label: 'Apr',
        }, {
          label: 'May',
        }, {
          label: 'Jun',
        }, {
          label: 'Jul',
        }, {
          label: 'Aug',
        }, {
          label: 'Sep',
        }, {
          label: 'Oct',
        }, {
          label: 'Nov',
        }, {
          label: 'Dec',
        }],
      }],
      dataset: [{
        seriesName: 'Revenues',
        data: [{
          value: '16000',
        }, {
          value: '20000',
        }, {
          value: '18000',
        }, {
          value: '19000',
        }, {
          value: '15000',
        }, {
          value: '21000',
        }, {
          value: '16000',
        }, {
          value: '20000',
        }, {
          value: '17000',
        }, {
          value: '22000',
        }, {
          value: '19000',
        }, {
          value: '23000',
        }],
      }, {
        seriesName: 'Profits',
        renderAs: 'area',
        showValues: '0',
        data: [{
          value: '4000',
        }, {
          value: '5000',
        }, {
          value: '3000',
        }, {
          value: '4000',
        }, {
          value: '1000',
        }, {
          value: '7000',
        }, {
          value: '1000',
        }, {
          value: '4000',
        }, {
          value: '1000',
        }, {
          value: '8000',
        }, {
          value: '2000',
        }, {
          value: '7000',
        }],
      }, {
        seriesName: 'Profit %',
        parentYAxis: 'S',
        renderAs: 'line',
        showValues: '0',
        data: [{
          value: '25',
        }, {
          value: '25',
        }, {
          value: '16.66',
        }, {
          value: '21.05',
        }, {
          value: '6.66',
        }, {
          value: '33.33',
        }, {
          value: '6.25',
        }, {
          value: '25',
        }, {
          value: '5.88',
        }, {
          value: '36.36',
        }, {
          value: '10.52',
        }, {
          value: '30.43',
        }],
      }],
    },
    renderAt: 'ch-13',
  }, {
    type: 'stackedcolumn2d',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Revenue split by product category',
        subCaption: 'For current year',
        xAxisname: 'Quarter',
        yAxisName: 'Revenues (In USD)',
        showSum: '1',
        numberPrefix: '$',
        theme: 'fint',
      },
      categories: [{
        category: [{
          label: 'Q1',
        }, {
          label: 'Q2',
        }, {
          label: 'Q3',
        }, {
          label: 'Q4',
        }],
      }],
      dataset: [{
        seriesname: 'Food Products',
        data: [{
          value: '11000',
        }, {
          value: '15000',
        }, {
          value: '13500',
        }, {
          value: '15000',
        }],
      }, {
        seriesname: 'Non-Food Products',
        data: [{
          value: '11400',
        }, {
          value: '14800',
        }, {
          value: '8300',
        }, {
          value: '11800',
        }],
      }],
    },
    renderAt: 'ch-14',
  }, {
    type: 'scrollColumn2d',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Sales Trends',
        subcaption: 'FY 2012 - FY 2013',
        xaxisname: 'Month',
        yaxisname: 'Revenue',
        showvalues: '1',
        placeValuesInside: '1',
        rotateValues: '1',
        valueFontColor: '#ffffff',
        numberprefix: '$',
        baseFontColor: '#333333',
        baseFont: 'Helvetica Neue,Arial',
        captionFontSize: '14',
        subcaptionFontSize: '14',
        subcaptionFontBold: '0',
        showborder: '0',
        paletteColors: '#0075c2',
        bgcolor: '#FFFFFF',
        showalternatehgridcolor: '0',
        showplotborder: '0',
        labeldisplay: 'WRAP',
        divlinecolor: '#CCCCCC',
        showcanvasborder: '0',
        linethickness: '3',
        plotfillalpha: '100',
        plotgradientcolor: '',
        numVisiblePlot: '12',
        divlineAlpha: '100',
        divlineColor: '#999999',
        divlineThickness: '1',
        divLineIsDashed: '1',
        divLineDashLen: '1',
        divLineGapLen: '1',
        scrollheight: '10',
        flatScrollBars: '1',
        scrollShowButtons: '0',
        scrollColor: '#cccccc',
        showHoverEffect: '1',
      },
      categories: [{
        category: [{
          label: 'Jan 2012',
        }, {
          label: 'Feb 2012',
        }, {
          label: 'Mar 2012',
        }, {
          label: 'Apr 2012',
        }, {
          label: 'May 2012',
        }, {
          label: 'Jun 2012',
        }, {
          label: 'Jul 2012',
        }, {
          label: 'Aug 2012',
        }, {
          label: 'Sep 2012',
        }, {
          label: 'Oct 2012',
        }, {
          label: 'Nov 2012',
        }, {
          label: 'Dec 2012',
        }, {
          label: 'Jan 2013',
        }, {
          label: 'Feb 2013',
        }, {
          label: 'Mar 2013',
        }, {
          label: 'Apr 2013',
        }, {
          label: 'May 2013',
        }, {
          label: 'Jun 2013',
        }, {
          label: 'Jul 2013',
        }, {
          label: 'Aug 2013',
        }, {
          label: 'Sep 2013',
        }, {
          label: 'Oct 2013',
        }, {
          label: 'Nov 2013',
        }, {
          label: 'Dec 2013',
        }],
      }],
      dataset: [{
        data: [{
          value: '27400',
        }, {
          value: '29800',
        }, {
          value: '25800',
        }, {
          value: '26800',
        }, {
          value: '29600',
        }, {
          value: '32600',
        }, {
          value: '31800',
        }, {
          value: '36700',
        }, {
          value: '29700',
        }, {
          value: '31900',
        }, {
          value: '34800',
        }, {
          value: '24800',
        }, {
          value: '26300',
        }, {
          value: '31800',
        }, {
          value: '30900',
        }, {
          value: '33000',
        }, {
          value: '36200',
        }, {
          value: '32100',
        }, {
          value: '37500',
        }, {
          value: '38500',
        }, {
          value: '35400',
        }, {
          value: '38200',
        }, {
          value: '33300',
        }, {
          value: '38300',
        }],
      }],
    },
    renderAt: 'ch-15',
  }, {
    type: 'scrollstackedcolumn2d',
    dataFormat: 'json',
    width: '550',
    height: '350',
    dataSource: {
      chart: {
        caption: 'Sales Comparison',
        subCaption: '(FY 2012 to FY 2013)',
        captionFontSize: '14',
        subcaptionFontSize: '14',
        subcaptionFontBold: '0',
        xaxisname: 'Month',
        yaxisname: 'Revenue',
        showvalues: '0',
        numberprefix: '$',
        legendBgAlpha: '0',
        legendBorderAlpha: '0',
        legendShadow: '0',
        showborder: '0',
        bgcolor: '#ffffff',
        showalternatehgridcolor: '0',
        showplotborder: '0',
        showcanvasborder: '0',
        legendshadow: '0',
        plotgradientcolor: '',
        showCanvasBorder: '0',
        showAxisLines: '0',
        showAlternateHGridColor: '0',
        divlineAlpha: '100',
        divlineThickness: '1',
        divLineIsDashed: '1',
        divLineDashLen: '1',
        divLineGapLen: '1',
        lineThickness: '3',
        flatScrollBars: '1',
        scrollheight: '10',
        numVisiblePlot: '12',
        showHoverEffect: '1',
      },
      categories: [{
        category: [{
          label: 'Jan 2012',
        }, {
          label: 'Feb 2012',
        }, {
          label: 'Mar 2012',
        }, {
          label: 'Apr 2012',
        }, {
          label: 'May 2012',
        }, {
          label: 'Jun 2012',
        }, {
          label: 'Jul 2012',
        }, {
          label: 'Aug 2012',
        }, {
          label: 'Sep 2012',
        }, {
          label: 'Oct 2012',
        }, {
          label: 'Nov 2012',
        }, {
          label: 'Dec 2012',
        }, {
          label: 'Jan 2013',
        }, {
          label: 'Feb 2013',
        }, {
          label: 'Mar 2013',
        }, {
          label: 'Apr 2013',
        }, {
          label: 'May 2013',
        }, {
          label: 'Jun 2013',
        }, {
          label: 'Jul 2013',
        }, {
          label: 'Aug 2013',
        }, {
          label: 'Sep 2013',
        }, {
          label: 'Oct 2013',
        }, {
          label: 'Nov 2013',
        }, {
          label: 'Dec 2013',
        }],
      }],
      dataset: [{
        seriesname: 'Products',
        color: '008ee4',
        data: [{
          value: '27400',
        }, {
          value: '29800',
        }, {
          value: '25800',
        }, {
          value: '26800',
        }, {
          value: '29600',
        }, {
          value: '32600',
        }, {
          value: '31800',
        }, {
          value: '36700',
        }, {
          value: '29700',
        }, {
          value: '31900',
        }, {
          value: '34800',
        }, {
          value: '24800',
        }, {
          value: '25400',
        }, {
          value: '27800',
        }, {
          value: '23800',
        }, {
          value: '23800',
        }, {
          value: '21600',
        }, {
          value: '30600',
        }, {
          value: '24800',
        }, {
          value: '30700',
        }, {
          value: '27400',
        }, {
          value: '28200',
        }, {
          value: '31500',
        }, {
          value: '24300',
        }],
      }, {
        seriesname: 'Services',
        color: 'f8bd19',
        data: [{
          value: '10000',
        }, {
          value: '11500',
        }, {
          value: '12500',
        }, {
          value: '15000',
        }, {
          value: '11000',
        }, {
          value: '9800',
        }, {
          value: '11800',
        }, {
          value: '19700',
        }, {
          value: '21700',
        }, {
          value: '21900',
        }, {
          value: '22900',
        }, {
          value: '20800',
        }, {
          value: '12000',
        }, {
          value: '10300',
        }, {
          value: '11200',
        }, {
          value: '13000',
        }, {
          value: '15000',
        }, {
          value: '11800',
        }, {
          value: '9800',
        }, {
          value: '14600',
        }, {
          value: '19200',
        }, {
          value: '20100',
        }, {
          value: '21200',
        }, {
          value: '19500',
        }],
      }],
    },
    renderAt: 'ch-16',
  }, {
    type: 'scrollcombidy2d',
    width: '550',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Revenues and Profits',
        subCaption: '(FY 2012 to FY 2013)',
        captionFontSize: '14',
        subcaptionFontSize: '14',
        subcaptionFontBold: '0',
        xAxisname: 'Month',
        pYAxisName: 'Amount (In USD)',
        sYAxisName: 'Profit %',
        numberPrefix: '$',
        sNumberSuffix: '%',
        sYAxisMaxValue: '50',
        paletteColors: '#0075c2,#1aaf5d,#f2c500',
        showAlternateHGridColor: '0',
        showPlotBorder: '0',
        usePlotGradientColor: '0',
        baseFontColor: '#333333',
        baseFont: 'Helvetica Neue,Arial',
        showBorder: '0',
        bgColor: '#ffffff',
        showShadow: '0',
        canvasBgColor: '#ffffff',
        showCanvasBorder: '0',
        legendBorderAlpha: '0',
        legendShadow: '0',
        showValues: '1',
        divlineAlpha: '100',
        divlineColor: '#999999',
        divlineThickness: '1',
        divLineIsDashed: '1',
        divLineDashLen: '1',
        divLineGapLen: '1',
        numVisiblePlot: '12',
        flatScrollBars: '1',
        scrollheight: '10',
      },
      categories: [{
        category: [{
          label: 'Jan 2012',
        }, {
          label: 'Feb 2012',
        }, {
          label: 'Mar 2012',
        }, {
          label: 'Apr 2012',
        }, {
          label: 'May 2012',
        }, {
          label: 'Jun 2012',
        }, {
          label: 'Jul 2012',
        }, {
          label: 'Aug 2012',
        }, {
          label: 'Sep 2012',
        }, {
          label: 'Oct 2012',
        }, {
          label: 'Nov 2012',
        }, {
          label: 'Dec 2012',
        }, {
          label: 'Jan 2013',
        }, {
          label: 'Feb 2013',
        }, {
          label: 'Mar 2013',
        }, {
          label: 'Apr 2013',
        }, {
          label: 'May 2013',
        }, {
          label: 'Jun 2013',
        }, {
          label: 'Jul 2013',
        }, {
          label: 'Aug 2013',
        }, {
          label: 'Sep 2013',
        }, {
          label: 'Oct 2013',
        }, {
          label: 'Nov 2013',
        }, {
          label: 'Dec 2013',
        }],
      }],
      dataset: [{
        seriesName: 'Revenues',
        data: [{
          value: '16000',
        }, {
          value: '20000',
        }, {
          value: '18000',
        }, {
          value: '19000',
        }, {
          value: '15000',
        }, {
          value: '21000',
        }, {
          value: '16000',
        }, {
          value: '20000',
        }, {
          value: '17000',
        }, {
          value: '22000',
        }, {
          value: '19000',
        }, {
          value: '23000',
        }, {
          value: '24000',
        }, {
          value: '25000',
        }, {
          value: '26000',
        }, {
          value: '24000',
        }, {
          value: '19000',
        }, {
          value: '22000',
        }, {
          value: '18000',
        }, {
          value: '19000',
        }, {
          value: '22000',
        }, {
          value: '21000',
        }, {
          value: '23000',
        }, {
          value: '24000',
        }],
      }, {
        seriesName: 'Profits',
        renderAs: 'area',
        showValues: '0',
        data: [{
          value: '4000',
        }, {
          value: '5000',
        }, {
          value: '3000',
        }, {
          value: '4000',
        }, {
          value: '1000',
        }, {
          value: '7000',
        }, {
          value: '1000',
        }, {
          value: '4000',
        }, {
          value: '1000',
        }, {
          value: '8000',
        }, {
          value: '2000',
        }, {
          value: '7000',
        }, {
          value: '6000',
        }, {
          value: '7000',
        }, {
          value: '4000',
        }, {
          value: '5000',
        }, {
          value: '3000',
        }, {
          value: '9000',
        }, {
          value: '2000',
        }, {
          value: '6000',
        }, {
          value: '2000',
        }, {
          value: '7000',
        }, {
          value: '4000',
        }, {
          value: '6000',
        }],
      }, {
        seriesName: 'Profit %',
        parentYAxis: 'S',
        renderAs: 'line',
        showValues: '0',
        data: [{
          value: '25',
        }, {
          value: '25',
        }, {
          value: '16.66',
        }, {
          value: '21.05',
        }, {
          value: '6.66',
        }, {
          value: '33.33',
        }, {
          value: '6.25',
        }, {
          value: '25',
        }, {
          value: '5.88',
        }, {
          value: '36.36',
        }, {
          value: '10.52',
        }, {
          value: '30.43',
        }, {
          value: '25',
        }, {
          value: '28',
        }, {
          value: '15.38',
        }, {
          value: '20.83',
        }, {
          value: '15.79',
        }, {
          value: '40.91',
        }, {
          value: '11.11',
        }, {
          value: '31.58',
        }, {
          value: '9.09',
        }, {
          value: '33.33',
        }, {
          value: '17.39',
        }, {
          value: '25',
        }],
      }],
    },
    renderAt: 'ch-17',
  }, {
    type: 'scatter',
    width: '600',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Sales of Beer & Ice-cream vs Temperature',
        subCaption: 'Los Angeles Topanga',
        xAxisName: 'Average Day Temperature',
        yAxisName: 'Sales (In USD)',
        xAxisMinValue: '23',
        xAxisMaxValue: '95',
        yNumberPrefix: '$',
        xNumberSuffix: '&deg; F',
        showYAxisLine: '1',
        theme: 'fint',
      },
      categories: [{
        verticalLineDashed: '1',
        verticalLineDashLen: '1',
        verticalLineDashGap: '1',
        verticalLineThickness: '1',
        verticalLineColor: '#000000',
        category: [{
          x: '23',
          label: '23° F',
          showverticalline: '0',
        }, {
          x: '32',
          label: '32° F',
          showverticalline: '1',
        }, {
          x: '50',
          label: '50° F',
          showverticalline: '1',
        }, {
          x: '68',
          label: '68° F',
          showverticalline: '1',
        }, {
          x: '80',
          label: '80° F',
          showverticalline: '1',
        }, {
          x: '95',
          label: '95° F',
          showverticalline: '1',
        }],
      }],
      dataset: [{
        seriesname: 'Ice Cream',
        showregressionline: '1',
        data: [{
          x: '23',
          y: '1560',
        }, {
          x: '24',
          y: '1500',
        }, {
          x: '24',
          y: '1680',
        }, {
          x: '25',
          y: '1780',
        }, {
          x: '25',
          y: '1620',
        }, {
          x: '26',
          y: '1810',
        }, {
          x: '27',
          y: '2310',
        }, {
          x: '29',
          y: '2620',
        }, {
          x: '31',
          y: '2500',
        }, {
          x: '32',
          y: '2410',
        }, {
          x: '35',
          y: '2880',
        }, {
          x: '36',
          y: '3910',
        }, {
          x: '34',
          y: '3960',
        }, {
          x: '38',
          y: '4080',
        }, {
          x: '40',
          y: '4190',
        }, {
          x: '41',
          y: '4170',
        }, {
          x: '42',
          y: '4280',
        }, {
          x: '54',
          y: '5180',
        }, {
          x: '53',
          y: '5770',
        }, {
          x: '55',
          y: '5900',
        }, {
          x: '56',
          y: '5940',
        }, {
          x: '58',
          y: '6090',
        }, {
          x: '61',
          y: '6086',
        }, {
          x: '67',
          y: '6100',
        }, {
          x: '68',
          y: '6200',
        }, {
          x: '70',
          y: '6360',
        }, {
          x: '75',
          y: '6450',
        }, {
          x: '79',
          y: '6650',
        }, {
          x: '80',
          y: '6710',
        }, {
          x: '79',
          y: '6975',
        }, {
          x: '82',
          y: '7000',
        }, {
          x: '85',
          y: '7150',
        }, {
          x: '86',
          y: '7160',
        }, {
          x: '86',
          y: '7200',
        }, {
          x: '88',
          y: '7230',
        }, {
          x: '87',
          y: '7210',
        }, {
          x: '86',
          y: '7480',
        }, {
          x: '89',
          y: '7540',
        }, {
          x: '89',
          y: '7400',
        }, {
          x: '90',
          y: '7500',
        }, {
          x: '92',
          y: '7640',
        }],
      }, {
        seriesname: 'Beer',
        showregressionline: '1',
        data: [{
          x: '23',
          y: '3160',
        }, {
          x: '24',
          y: '3000',
        }, {
          x: '24',
          y: '3080',
        }, {
          x: '25',
          y: '3680',
        }, {
          x: '25',
          y: '3320',
        }, {
          x: '26',
          y: '3810',
        }, {
          x: '27',
          y: '5310',
        }, {
          x: '29',
          y: '3620',
        }, {
          x: '31',
          y: '4100',
        }, {
          x: '32',
          y: '3910',
        }, {
          x: '35',
          y: '4280',
        }, {
          x: '36',
          y: '4210',
        }, {
          x: '34',
          y: '4160',
        }, {
          x: '38',
          y: '4480',
        }, {
          x: '40',
          y: '4890',
        }, {
          x: '41',
          y: '4770',
        }, {
          x: '42',
          y: '4880',
        }, {
          x: '54',
          y: '4980',
        }, {
          x: '53',
          y: '4770',
        }, {
          x: '55',
          y: '4900',
        }, {
          x: '56',
          y: '4940',
        }, {
          x: '58',
          y: '4990',
        }, {
          x: '61',
          y: '5086',
        }, {
          x: '67',
          y: '5100',
        }, {
          x: '68',
          y: '4700',
        }, {
          x: '70',
          y: '5360',
        }, {
          x: '75',
          y: '5150',
        }, {
          x: '79',
          y: '5450',
        }, {
          x: '80',
          y: '5010',
        }, {
          x: '79',
          y: '4975',
        }, {
          x: '82',
          y: '5400',
        }, {
          x: '85',
          y: '5150',
        }, {
          x: '86',
          y: '5460',
        }, {
          x: '86',
          y: '5000',
        }, {
          x: '88',
          y: '5200',
        }, {
          x: '87',
          y: '5410',
        }, {
          x: '86',
          y: '5480',
        }, {
          x: '89',
          y: '5440',
        }, {
          x: '89',
          y: '5300',
        }, {
          x: '90',
          y: '5500',
        }, {
          x: '92',
          y: '5240',
        }],
      }],
      vtrendlines: [{
        line: [{
          startvalue: '23',
          endvalue: '32',
          istrendzone: '1',
          displayvalue: ' ',
          color: '#adebff',
          alpha: '25',
        }, {
          startvalue: '23',
          endvalue: '32',
          istrendzone: '1',
          alpha: '0',
          displayvalue: 'Very cold',
        }, {
          startvalue: '32',
          endvalue: '50',
          istrendzone: '1',
          displayvalue: ' ',
          color: '#adebff',
          alpha: '15',
        }, {
          startvalue: '32',
          endvalue: '50',
          istrendzone: '1',
          alpha: '0',
          displayvalue: 'Cold',
        }, {
          startvalue: '50',
          endvalue: '68',
          istrendzone: '1',
          alpha: '0',
          displayvalue: 'Moderate',
        }, {
          startvalue: '68',
          endvalue: '80',
          istrendzone: '1',
          alpha: '0',
          displayvalue: 'Hot',
        }, {
          startvalue: '68',
          endvalue: '80',
          istrendzone: '1',
          displayvalue: ' ',
          color: '#f2a485',
          alpha: '15',
        }, {
          startvalue: '80',
          endvalue: '95',
          istrendzone: '1',
          alpha: '0',
          displayvalue: 'Very hot',
        }, {
          startvalue: '80',
          endvalue: '95',
          istrendzone: '1',
          displayvalue: ' ',
          color: '#f2a485',
          alpha: '25',
        }],
      }],
    },
    renderAt: 'ch-18',
  }, {
    type: 'bubble',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Sales Analysis of Shoe Brands',
        subcaption: 'Last Quarter',
        xAxisMinValue: '0',
        xAxisMaxValue: '100',
        yAxisMinValue: '0',
        yAxisMaxValue: '30000',
        plotFillAlpha: '70',
        plotFillHoverColor: '#6baa01',
        showPlotBorder: '0',
        xAxisName: 'Average Price',
        yAxisName: 'Units Sold',
        numDivlines: '2',
        showValues: '1',
        showTrendlineLabels: '0',
        plotTooltext: '$name : Profit Contribution - $zvalue%',
        drawQuadrant: '1',
        quadrantLineAlpha: '80',
        quadrantLineThickness: '3',
        quadrantXVal: '50',
        quadrantYVal: '15000',
        quadrantLabelTL: 'Low Price / High Sale',
        quadrantLabelTR: 'High Price / High Sale',
        quadrantLabelBL: 'Low Price / Low Sale',
        quadrantLabelBR: 'High Price / Low Sale',
        theme: 'fint',
      },
      categories: [{
        category: [{
          label: '$0',
          x: '0',
        }, {
          label: '$20',
          x: '20',
          showverticalline: '1',
        }, {
          label: '$40',
          x: '40',
          showverticalline: '1',
        }, {
          label: '$60',
          x: '60',
          showverticalline: '1',
        }, {
          label: '$80',
          x: '80',
          showverticalline: '1',
        }, {
          label: '$100',
          x: '100',
          showverticalline: '1',
        }],
      }],
      dataset: [{
        color: '#00aee4',
        data: [{
          x: '80',
          y: '15000',
          z: '24',
          name: 'Nike',
        }, {
          x: '60',
          y: '18500',
          z: '26',
          name: 'Adidas',
        }, {
          x: '50',
          y: '19450',
          z: '19',
          name: 'Puma',
        }, {
          x: '65',
          y: '10500',
          z: '8',
          name: 'Fila',
        }, {
          x: '43',
          y: '8750',
          z: '5',
          name: 'Lotto',
        }, {
          x: '32',
          y: '22000',
          z: '10',
          name: 'Reebok',
        }, {
          x: '44',
          y: '13000',
          z: '9',
          name: 'Woodland',
        }],
      }],
      trendlines: [{
        line: [{
          startValue: '20000',
          endValue: '30000',
          isTrendZone: '1',
          color: '#aaaaaa',
          alpha: '14',
        }, {
          startValue: '10000',
          endValue: '20000',
          isTrendZone: '1',
          color: '#aaaaaa',
          alpha: '7',
        }],
      }],
      vTrendlines: [{
        line: [{
          startValue: '44',
          isTrendZone: '0',
          color: '#0066cc',
          thickness: '1',
          dashed: '1',
          displayValue: 'Gross Avg.',
        }],
      }],
    },
    renderAt: 'ch-19',
  },
];
