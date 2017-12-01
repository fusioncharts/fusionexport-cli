module.exports = [
{
  type: 'column2d',
  width: '100%',
  height: '500',
  dataFormat: 'json',
  renderAt: 'chart1',
  dataSource: {
    chart: {
      caption: 'From 2014 to 2020',
      xAxisName: 'Year',
      yAxisName: 'Smartphone users (in billions)',
      paletteColors: '#3498db,#2ecc71,#9b59b6,#34495e,#16a085,#27ae60,#2c3e50,#f1c40f,#e67e22,#e74c3c',
      bgColor: '#ffffff',
      showBorder: '0',
      borderAlpha: '20',
      canvasBorderAlpha: '0',
      usePlotGradientColor: '0',
      plotBorderAlpha: '10',
      placevaluesInside: '1',
      rotatevalues: '1',
      valueFontColor: '#ffffff',
      showXAxisLine: '1',
      xAxisLineColor: '#999999',
      divlineColor: '#999999',
      divLineDashed: '1',
      showAlternateHGridColor: '0',
      subcaptionFontBold: '0',
      subcaptionFontSize: '14',
    },
    data: [{
      label: '2014',
      value: 1.57,
    }, {
      label: '2015',
      value: 1.86,
    }, {
      label: '2016*',
      value: 2.1,
    }, {
      label: '2017*',
      value: 2.32,
    }, {
      label: '2018*',
      value: 2.53,
    }, {
      label: '2019*',
      value: 2.71,
    }, {
      label: '2020*',
      value: 2.87,
    }],
  },
},
{
  type: 'msspline',
  width: '100%',
  height: '500',
  dataFormat: 'json',
  renderAt: 'chart2',
  dataSource: {
    chart: {
      caption: 'From 1st quarter 2009 to 1st quarter 2017',
      captionFontSize: '14',
      subcaptionFontSize: '14',
      baseFontColor: '#333333',
      baseFont: 'Helvetica Neue,Arial',
      subcaptionFontBold: '0',
      xAxisName: 'Quarter',
      yAxisName: 'Share of global sales',
      showValues: '0',
      numberSuffix: '%',
      paletteColors: '#8e44ad,#3498db,#2ecc71,#9b59b6,#34495e,#16a085,#27ae60,#8e44ad,#2c3e50,#f1c40f,#e67e22,#e74c3c',
      bgColor: '#ffffff',
      usePlotGradientColor: '0',
      plotBorderAlpha: '0',
      legendBorderAlpha: '0',
      legendShadow: '0',
      showBorder: '0',
      valueFontColor: '#ffffff',
      showXAxisLine: '1',
      xAxisLineColor: '#999999',
      divlineColor: '#999999',
      divLineIsDashed: '1',
      showAlternateHGridColor: '0',
      showHoverEffect: '1',
      yAxisMaxValue: '100',
    },
    categories: [{
      category: [{
        label: "Q1 '09",
      }, {
        label: "Q2 '09",
      }, {
        label: "Q3 '09",
      }, {
        label: "Q1 '10",
      }, {
        label: "Q2 '10",
      }, {
        label: "Q3 '10",
      }, {
        label: "Q4 '10",
      }, {
        label: "Q1 '11",
      }, {
        label: "Q2 '11",
      }, {
        label: "Q3 '11",
      }, {
        label: "Q4 '11",
      }, {
        label: "Q1 '12",
      }, {
        label: "Q2 '12",
      }, {
        label: "Q3 '12",
      }, {
        label: "Q4 '12",
      }, {
        label: "Q1 '13",
      }, {
        label: "Q2 '13",
      }, {
        label: "Q3 '13",
      }, {
        label: "Q4 '13",
      }, {
        label: "Q1 '14",
      }, {
        label: "Q2 '14",
      }, {
        label: "Q3 '14",
      }, {
        label: "Q4 '14",
      }, {
        label: "Q1 '15",
      }, {
        label: "Q2 '15",
      }, {
        label: "Q3 '15",
      }, {
        label: "Q4 '15",
      }, {
        label: "Q1 '16",
      }, {
        label: "Q2 '16",
      }, {
        label: "Q3 '16",
      }, {
        label: "Q4 '16",
      }, {
        label: "Q1 '17",
      }],
    }],
    dataset: [{
      seriesname: 'Android',
      data: [{
        value: 1.6,
      }, {
        value: 2,
      }, {
        value: 3.5,
      }, {
        value: 9.6,
      }, {
        value: 17.2,
      }, {
        value: 25.3,
      }, {
        value: 30.5,
      }, {
        value: 36.4,
      }, {
        value: 43.4,
      }, {
        value: 52.5,
      }, {
        value: 50.9,
      }, {
        value: 56.9,
      }, {
        value: 64.2,
      }, {
        value: 72.6,
      }, {
        value: 69.7,
      }, {
        value: 74.4,
      }, {
        value: 79,
      }, {
        value: 81.9,
      }, {
        value: 77.83,
      }, {
        value: 80.8,
      }, {
        value: 83.8,
      }, {
        value: 83.3,
      }, {
        value: 76,
      }, {
        value: 78.8,
      }, {
        value: 82.2,
      }, {
        value: 84.7,
      }, {
        value: 80.7,
      }, {
        value: 84.1,
      }, {
        value: 86.2,
      }, {
        value: 87.8,
      }, {
        value: 81.7,
      }, {
        value: 86.1,
      }],
    }, {
      seriesname: 'iOS',
      data: [{
        value: 10.5,
      }, {
        value: 13,
      }, {
        value: 17.1,
      }, {
        value: 15.4,
      }, {
        value: 14.1,
      }, {
        value: 16.6,
      }, {
        value: 15.8,
      }, {
        value: 16.9,
      }, {
        value: 18.2,
      }, {
        value: 15,
      }, {
        value: 23.8,
      }, {
        value: 22.5,
      }, {
        value: 18.8,
      }, {
        value: 14.3,
      }, {
        value: 20.9,
      }, {
        value: 18.2,
      }, {
        value: 14.2,
      }, {
        value: 12.1,
      }, {
        value: 17.8,
      }, {
        value: 15.3,
      }, {
        value: 12.2,
      }, {
        value: 12.5,
      }, {
        value: 20.4,
      }, {
        value: 17.9,
      }, {
        value: 14.6,
      }, {
        value: 13,
      }, {
        value: 17.7,
      }, {
        value: 14.8,
      }, {
        value: 12.9,
      }, {
        value: 11.5,
      }, {
        value: 17.9,
      }, {
        value: 13.7,
      }],
    }, {
      seriesname: 'Microsoft',
      data: [{
        value: 10.2,
      }, {
        value: 9,
      }, {
        value: 7.9,
      }, {
        value: 6.8,
      }, {
        value: 4.9,
      }, {
        value: 2.7,
      }, {
        value: 3.4,
      }, {
        value: 2.6,
      }, {
        value: 1.6,
      }, {
        value: 1.5,
      }, {
        value: 1.9,
      }, {
        value: 1.9,
      }, {
        value: 2.6,
      }, {
        value: 2.3,
      }, {
        value: 3,
      }, {
        value: 2.9,
      }, {
        value: 3.3,
      }, {
        value: 3.6,
      }, {
        value: 2.94,
      }, {
        value: 2.7,
      }, {
        value: 2.8,
      }, {
        value: 3,
      }, {
        value: 2.8,
      }, {
        value: 2.5,
      }, {
        value: 2.5,
      }, {
        value: 1.7,
      }, {
        value: 1.1,
      }, {
        value: 0.7,
      }, {
        value: 0.6,
      }, {
        value: 0.4,
      }, {
        value: 0.3,
      }, {
        value: null,
      }],
    }, {
      seriesname: 'RIM',
      data: [{
        value: 20.6,
      }, {
        value: 19,
      }, {
        value: 20.7,
      }, {
        value: 19.7,
      }, {
        value: 18.7,
      }, {
        value: 15.4,
      }, {
        value: 14.6,
      }, {
        value: 13,
      }, {
        value: 11.7,
      }, {
        value: 11,
      }, {
        value: 8.8,
      }, {
        value: 6.8,
      }, {
        value: 5.2,
      }, {
        value: 5.2,
      }, {
        value: 3.5,
      }, {
        value: 3,
      }, {
        value: 2.7,
      }, {
        value: 1.8,
      }, {
        value: 0.72,
      }, {
        value: 0.6,
      }, {
        value: 0.7,
      }, {
        value: 0.8,
      }, {
        value: 0.5,
      }, {
        value: 0.4,
      }, {
        value: 0.3,
      }, {
        value: 0.3,
      }, {
        value: 0.2,
      }, {
        value: 0.2,
      }, {
        value: 0.1,
      }, {
        value: 0.1,
      }, {
        value: 0,
      }, {
        value: null,
      }],
    }, {
      seriesname: 'Bada*',
      data: [{
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: 0.9,
      }, {
        value: 1.1,
      }, {
        value: 2,
      }, {
        value: 1.9,
      }, {
        value: 1.9,
      }, {
        value: 2.2,
      }, {
        value: 2.1,
      }, {
        value: 2.6,
      }, {
        value: 2.7,
      }, {
        value: 2.6,
      }, {
        value: 1.3,
      }, {
        value: 0.7,
      }, {
        value: 0.4,
      }, {
        value: 0.3,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }],
    }, {
      seriesname: 'Symbian',
      data: [{
        value: 48.8,
      }, {
        value: 51,
      }, {
        value: 44.6,
      }, {
        value: 44.2,
      }, {
        value: 40.9,
      }, {
        value: 36.3,
      }, {
        value: 32.3,
      }, {
        value: 27.7,
      }, {
        value: 22.1,
      }, {
        value: 16.9,
      }, {
        value: 11.7,
      }, {
        value: 8.5,
      }, {
        value: 5.9,
      }, {
        value: 2.6,
      }, {
        value: 1.2,
      }, {
        value: 0.6,
      }, {
        value: 0.3,
      }, {
        value: 0.2,
      }, {
        value: 0.71,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }],
    }, {
      seriesname: 'Other',
      data: [{
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: 0.6,
      }, {
        value: 0.5,
      }, {
        value: 0.4,
      }, {
        value: 0.4,
      }, {
        value: 0.5,
      }, {
        value: 0.4,
      }, {
        value: 0.3,
      }, {
        value: 0.2,
      }, {
        value: 0.2,
      }, {
        value: 0.2,
      }, {
        value: 0.2,
      }, {
        value: 0.1,
      }, {
        value: 0.2,
      }],
    }],
  },
},
{
  type: 'doughnut2d',
  width: '100%',
  height: '500',
  dataFormat: 'json',
  renderAt: 'chart3',
  dataSource: {
    chart: {
      caption: 'upto march 2017',
      paletteColors: '#3498db,#2ecc71,#9b59b6,#34495e,#16a085,#27ae60,#8e44ad,#2c3e50,#f1c40f,#e67e22,#e74c3c',
      bgColor: '#ffffff',
      showBorder: '0',
      use3DLighting: '0',
      showShadow: '0',
      enableSmartLabels: '0',
      startingAngle: '310',
      showLabels: '0',
      showPercentValues: '1',
      showLegend: '1',
      legendShadow: '0',
      legendBorderAlpha: '0',
      defaultCenterLabel: 'All app store distribution',
      centerLabel: 'Total Apps available $label: $value',
      centerLabelBold: '1',
      showTooltip: '0',
      decimals: '0',
      captionFontSize: '14',
      subcaptionFontSize: '14',
      subcaptionFontBold: '0',
    },
    data: [{
      label: 'Google Play',
      value: '2800000',
    },
    {
      label: 'Apple App Store',
      value: '2200000',
    },
    {
      label: 'Windows Store',
      value: '669000',
    },
    {
      label: 'Amazon Appstore',
      value: '600000',
    },
    {
      label: 'BlackBerry World',
      value: '234500',
    },
    ],
  },
},
{
  type: 'stackedcolumn2d',
  width: '100%',
  height: '500',
  dataFormat: 'json',
  renderAt: 'chart4',
  dataSource: {
    chart: {
      caption: 'From 4th quarter 2009 to 4th quarter 2016',
      xAxisname: 'Quarter',
      yAxisName: 'Percentage of users',
      numberSuffix: '%',
      paletteColors: '#8e44ad,#3498db,#2ecc71,#9b59b6,#34495e,#16a085,#27ae60,#2c3e50,#f1c40f,#e67e22,#e74c3c',
      bgColor: '#ffffff',
      usePlotGradientColor: '0',
      plotBorderAlpha: '0',
      legendBorderAlpha: '0',
      legendShadow: '0',
      showValues: '0',
      showBorder: '0',
      valueFontColor: '#ffffff',
      showXAxisLine: '1',
      xAxisLineColor: '#999999',
      divlineColor: '#999999',
      divLineIsDashed: '1',
      showAlternateHGridColor: '0',
      showHoverEffect: '1',
      yAxisMaxValue: '100',
    },
    categories: [{
      category: [{
        label: "Q4 '09",
      }, {
        label: "Q1 '10",
      }, {
        label: "Q2 '10",
      }, {
        label: "Q3 '10",
      }, {
        label: "Q4 '10",
      }, {
        label: "Q1 '11",
      }, {
        label: "Q2 '11",
      }, {
        label: "Q3 '11",
      }, {
        label: "Q4 '11",
      }, {
        label: "Q1 '12",
      }, {
        label: "Q2 '12",
      }, {
        label: "Q3 '12",
      }, {
        label: "Q4 '12",
      }, {
        label: "Q1 '13",
      }, {
        label: "Q2 '13",
      }, {
        label: "Q3 '13",
      }, {
        label: "Q4 '13",
      }, {
        label: "Q1 '14",
      }, {
        label: "Q2 '14",
      }, {
        label: "Q3 '14",
      }, {
        label: "Q4 '14",
      }, {
        label: "Q1 '15",
      }, {
        label: "Q2 '15",
      }, {
        label: "Q3 '15",
      }, {
        label: "Q4 '15",
      }, {
        label: "Q1 '16",
      }, {
        label: "Q2 '16",
      }, {
        label: "Q3 '16",
      }, {
        label: "Q4 '16",
      }],
    }],
    dataset: [{
      seriesname: 'Samsung',
      data: [{
        value: 3.3,
      }, {
        value: 4.3,
      }, {
        value: 5.6,
      }, {
        value: 8.8,
      }, {
        value: 9.4,
      }, {
        value: 11.3,
      }, {
        value: 17,
      }, {
        value: 22.7,
      }, {
        value: 22.5,
      }, {
        value: 28.8,
      }, {
        value: 32.2,
      }, {
        value: 31,
      }, {
        value: 29.1,
      }, {
        value: 31.9,
      }, {
        value: 32.3,
      }, {
        value: 32.5,
      }, {
        value: 28.83,
      }, {
        value: 30.7,
      }, {
        value: 24.8,
      }, {
        value: 23.9,
      }, {
        value: 19.9,
      }, {
        value: 24.6,
      }, {
        value: 21.3,
      }, {
        value: 23.3,
      }, {
        value: 20.4,
      }, {
        value: 24.5,
      }, {
        value: 22.4,
      }, {
        value: 20,
      }, {
        value: 18.1,
      }],
    }, {
      seriesname: 'Apple',
      data: [{
        value: 16.1,
      }, {
        value: 15.7,
      }, {
        value: 13,
      }, {
        value: 17,
      }, {
        value: 15.9,
      }, {
        value: 18.3,
      }, {
        value: 18.8,
      }, {
        value: 13.8,
      }, {
        value: 23,
      }, {
        value: 23,
      }, {
        value: 16.6,
      }, {
        value: 14.4,
      }, {
        value: 20.9,
      }, {
        value: 17.1,
      }, {
        value: 13,
      }, {
        value: 12.9,
      }, {
        value: 17.43,
      }, {
        value: 15.2,
      }, {
        value: 11.7,
      }, {
        value: 11.8,
      }, {
        value: 19.7,
      }, {
        value: 18.3,
      }, {
        value: 13.9,
      }, {
        value: 13.4,
      }, {
        value: 18.7,
      }, {
        value: 15.3,
      }, {
        value: 11.8,
      }, {
        value: 12.5,
      }, {
        value: 18.3,
      }],
    }, {
      seriesname: 'LG*',
      data: [{
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: 3.2,
      }, {
        value: 3.7,
      }, {
        value: 3.8,
      }, {
        value: 3.8,
      }, {
        value: 4.7,
      }, {
        value: 5,
      }, {
        value: 4.6,
      }, {
        value: 4.6,
      }, {
        value: 4.3,
      }, {
        value: 4.9,
      }, {
        value: 5.1,
      }, {
        value: null,
      }, {
        value: 4.6,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }],
    }, {
      seriesname: 'Lenovo*',
      data: [{
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: 3.1,
      }, {
        value: 3.7,
      }, {
        value: 4.1,
      }, {
        value: 3.6,
      }, {
        value: 4.7,
      }, {
        value: 4.7,
      }, {
        value: 4.51,
      }, {
        value: 4.4,
      }, {
        value: 5.2,
      }, {
        value: 5.1,
      }, {
        value: 3.7,
      }, {
        value: 5.6,
      }, {
        value: 4.8,
      }, {
        value: 5.3,
      }, {
        value: 5.1,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }],
    }, {
      seriesname: 'ZTE*',
      data: [{
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: 1.8,
      }, {
        value: 3.3,
      }, {
        value: 4,
      }, {
        value: 4,
      }, {
        value: 4.1,
      }, {
        value: 4.4,
      }, {
        value: 4.4,
      }, {
        value: 4.2,
      }, {
        value: 4.2,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }],
    }, {
      seriesname: 'Huawei*',
      data: [{
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: 3.5,
      }, {
        value: 3.3,
      }, {
        value: 4.1,
      }, {
        value: 3.8,
      }, {
        value: 4.6,
      }, {
        value: 4.3,
      }, {
        value: 4.3,
      }, {
        value: 4.8,
      }, {
        value: 5.66,
      }, {
        value: 4.7,
      }, {
        value: 6.7,
      }, {
        value: 5,
      }, {
        value: 6.3,
      }, {
        value: 5.2,
      }, {
        value: 8.6,
      }, {
        value: 7.6,
      }, {
        value: 8.2,
      }, {
        value: 8.2,
      }, {
        value: 9.4,
      }, {
        value: 9.3,
      }, {
        value: 10.6,
      }],
    }, {
      seriesname: 'OPPO',
      data: [{
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: 2.2,
      }, {
        value: 2.8,
      }, {
        value: 3.2,
      }, {
        value: 3.6,
      }, {
        value: 5.5,
      }, {
        value: 6.6,
      }, {
        value: 7,
      }, {
        value: 7.3,
      }],
    }, {
      seriesname: 'vivo',
      data: [{
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: 1.9,
      }, {
        value: 2.7,
      }, {
        value: 2.9,
      }, {
        value: 3,
      }, {
        value: 4.3,
      }, {
        value: 4.8,
      }, {
        value: 5.8,
      }, {
        value: 5.8,
      }],
    }, {
      seriesname: 'Xiaomi*',
      data: [{
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: 2.1,
      }, {
        value: 2.03,
      }, {
        value: null,
      }, {
        value: 4.6,
      }, {
        value: 5.2,
      }, {
        value: 4.4,
      }, {
        value: null,
      }, {
        value: 5.3,
      }, {
        value: 5.2,
      }, {
        value: 4.6,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }],
    }, {
      seriesname: 'Sony*',
      data: [{
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: 3.9,
      }, {
        value: 3.6,
      }, {
        value: 4.7,
      }, {
        value: 4.7,
      }, {
        value: 4.5,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }],
    }, {
      seriesname: 'RIM*',
      data: [{
        value: 19.9,
      }, {
        value: 19.1,
      }, {
        value: 17.4,
      }, {
        value: 15,
      }, {
        value: 14.3,
      }, {
        value: 13.6,
      }, {
        value: 11.5,
      }, {
        value: 9.6,
      }, {
        value: 8.1,
      }, {
        value: 6.4,
      }, {
        value: 4.9,
      }, {
        value: 4.3,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }],
    }, {
      seriesname: 'HTC*',
      data: [{
        value: 4.5,
      }, {
        value: 4.9,
      }, {
        value: 6.8,
      }, {
        value: 7.1,
      }, {
        value: 8.5,
      }, {
        value: 8.9,
      }, {
        value: 10.7,
      }, {
        value: 10.3,
      }, {
        value: 6.4,
      }, {
        value: 4.5,
      }, {
        value: 5.9,
      }, {
        value: 4,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }],
    }, {
      seriesname: 'Nokia*',
      data: [{
        value: 38.6,
      }, {
        value: 38.8,
      }, {
        value: 37.3,
      }, {
        value: 32,
      }, {
        value: 27.6,
      }, {
        value: 23.8,
      }, {
        value: 15.4,
      }, {
        value: 13.6,
      }, {
        value: 12.2,
      }, {
        value: 7.8,
      }, {
        value: 6.6,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }, {
        value: null,
      }],
    }],
  },
},
{
  type: 'spline',
  width: '100%',
  height: '500',
  dataFormat: 'json',
  renderAt: 'chart5',
  dataSource: {
    chart: {
      caption: '3rd quarter 2007 to 3rd quarter 2017',
      xAxisName: 'Quarter',
      yAxisName: 'Units sold (in millions)',
      captionFontSize: '14',
      subcaptionFontSize: '14',
      baseFontColor: '#333333',
      baseFont: 'Helvetica Neue,Arial',
      subcaptionFontBold: '0',
      paletteColors: '#0075c2',
      usePlotGradientColor: '0',
      bgColor: '#ffffff',
      showBorder: '0',
      showValues: '0',
      showShadow: '1',
      showAlternateHGridColor: '0',
      showCanvasBorder: '0',
      showXAxisLine: '1',
      xAxisLineThickness: '1',
      xAxisLineColor: '#999999',
      canvasBgColor: '#ffffff',
      divlineAlpha: '100',
      divlineColor: '#999999',
      divlineThickness: '1',
      divLineDashed: '1',
      divLineDashLen: '1',
    },
    data: [{
      label: "Q3 '07",
      value: 0.27,
    }, {
      label: "Q4 '07",
      value: 1.12,
    }, {
      label: "Q1 '08",
      value: 2.32,
    }, {
      label: "Q2 '08",
      value: 1.7,
    }, {
      label: "Q3 '08",
      value: 0.72,
    }, {
      label: "Q4 '08",
      value: 6.89,
    }, {
      label: "Q1 '09",
      value: 4.36,
    }, {
      label: "Q2 '09",
      value: 3.79,
    }, {
      label: "Q3 '09",
      value: 5.21,
    }, {
      label: "Q4 '09",
      value: 7.37,
    }, {
      label: "Q1 '10",
      value: 8.74,
    }, {
      label: "Q2 '10",
      value: 8.75,
    }, {
      label: "Q3 '10",
      value: 8.4,
    }, {
      label: "Q4 '10",
      value: 14.1,
    }, {
      label: "Q1 '11",
      value: 16.24,
    }, {
      label: "Q2 '11",
      value: 18.65,
    }, {
      label: "Q3 '11",
      value: 20.34,
    }, {
      label: "Q4 '11",
      value: 17.07,
    }, {
      label: "Q1 '12",
      value: 37.04,
    }, {
      label: "Q2 '12",
      value: 35.06,
    }, {
      label: "Q3 '12",
      value: 26.03,
    }, {
      label: "Q4 '12",
      value: 26.91,
    }, {
      label: "Q1 '13",
      value: 47.79,
    }, {
      label: "Q2 '13",
      value: 37.43,
    }, {
      label: "Q3 '13",
      value: 31.24,
    }, {
      label: "Q4 '13",
      value: 33.8,
    }, {
      label: "Q1 '14",
      value: 51.03,
    }, {
      label: "Q2 '14",
      value: 43.72,
    }, {
      label: "Q3 '14",
      value: 35.2,
    }, {
      label: "Q4 '14",
      value: 39.27,
    }, {
      label: "Q1 '15",
      value: 74.47,
    }, {
      label: "Q2 '15",
      value: 61.17,
    }, {
      label: "Q3 '15",
      value: 47.53,
    }, {
      label: "Q4 '15",
      value: 48.05,
    }, {
      label: "Q1 '16",
      value: 74.78,
    }, {
      label: "Q2 '16",
      value: 51.19,
    }, {
      label: "Q3 '16",
      value: 40.4,
    }, {
      label: "Q4 '16",
      value: 45.51,
    }, {
      label: "Q1 '17",
      value: 78.29,
    }, {
      label: "Q2 '17",
      value: 50.76,
    }, {
      label: "Q3 '17",
      value: 41.03,
    }],
  },
},
];
