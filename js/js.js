			
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});


 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1()
    echarts_2()
    echarts_3()
    pe04()

    pe01()
    pe02()
    pe03()
    function echarts_4() {
      var myChart = echarts.init(document.getElementById('echarts4'));
      var data = [{
        "name": "邮件总量",
        "value": 20000
    }, {
        "name": "公文交换",
        "value": 18170
    }, {
        "name": "内部流转",
        "value": 19870
    } ]
   
   
    option = {
   
        color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],

        grid: {
            bottom: 0,
            left: 0,
            right: '0'
        },
        series: [
            // 主要展示层的
            {
                radius: ['30%', '50%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: true,
                          formatter: ['{b|{b}}','{c|{c}次}', '{d|同比：{d}%}'].join('\n'),
                         rich: {
                       c: {
                           color: 'rgb(241,246,104)',
                           fontSize: 20,
                           fontWeight:'bold',
                           lineHeight: 25
                       },
                       b: {
                           color: 'rgb(98,137,169)',
                           fontSize: 15,
                           height: 40
                       },
                   },
                       
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 15,
                        length2: 50
                    },
                    emphasis: {
                        show: true
                    }
                },
                name: "民警训练总量",
                data: data,
   
            },
            // 边框的设置
            {
                radius: ['30%', '35%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                tooltip: {
                    show: false
                },
                data: [{
                    value: 1,
                    itemStyle: {
                        color: "rgba(250,250,250,0.3)",
                    },
                }],
            }, {
                name: '外边框',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                center: ['50%', '50%'],
                radius: ['60%', '61%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 9,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#0c2c69'
                        }
                    }
                }]
            },
        ]
    };
     
             myChart.setOption(option);
             window.addEventListener("resize",function(){
                 myChart.resize();
             });
     
       
         }
function echarts_1() {
 var myChart = echarts.init(document.getElementById('echarts1'));
 option = {
  tooltip: {
  trigger: 'axis',
  axisPointer: {type: 'shadow'},

},
legend: {
    x: 'center',
    y: '0',
    icon: 'circle',
    itemGap:8,
    textStyle: {color: 'rgba(255,255,255,.5)'},
    itemWidth: 10,
    itemHeight: 10,
},
grid: {
  left: '0',
    top: '30',
  right: '15',
  bottom: '0',
  containLabel: true
},
xAxis: {
  type: 'category',
  data: ['1', '10', '20', '30', '40', '50', '60', '70', '80', '84'],
  axisLine: {show:false},
 
  axisLabel: {
    textStyle: {
     color:'rgba(255,255,255,.6)',
     fontSize:14
    }
  },
},

yAxis: {
  type: 'value',
  splitNumber:4,
  axisLine: { show: false },
axisTick: {show: false},
  splitLine: {
    show: true,
    lineStyle: {
      color: 'rgba(255,255,255,0.05)'
    }
  },
  axisLabel:  {
      textStyle: {
        color:'rgba(255,255,255,.6)',
        fontSize:14
                 },
             },
},
series: [ {
  name: '平均电压',
  type: 'bar',
  barWidth: '15%',
  itemStyle: {
      normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#8bd46e'
          }, {
              offset: 1,
              color: '#03b48e'
          }]),
          barBorderRadius: 11,
      }
      
    },
  data: [55.7775,64.42221053,64.26947917,64.24073684,64.34515789,64.55536842, 64.36894737,64.41431579,64.71688172, 65.51176471]

},
  {
  name: '平均温度',
  type: 'bar',
barWidth: '15%',
itemStyle: {
  normal: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#3893e5'
      }, {
          offset: 1,
          color: '#248ff7'
      }]),
  barBorderRadius: 11,
  }
},
  data:  [18.7375,19.14210526,21.44479167, 19.92736842,19.01684211,18.93578947, 19.69157895,19.44736842, 15.24301075, 20.78941176]
  

},
{
  name: '平均电流',
  type: 'bar',
  barWidth: '15%',
  itemStyle: {
    normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#43cadd'
        }, {
            offset: 1,
            color: '#0097c9'
        }]),
    barBorderRadius: 11,
    }
  },
  data: [7.28375,6.578736842, 6.613645833, 6.595052632,6.610210526,6.473789474, 6.574421053,6.559157895,6.28483871, 6.444705882]

}

]
};

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

	
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts2'));

       option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
    grid: {
        left: '0',
		top: '30',
        right: '20',
        bottom: '-10',
        containLabel: true
    },legend: {
        data: ['充电', '放电'],
        right: 'center',
        top:0,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.1)'
			}

        },

   data: ['50', '52.5', '55', '57.5', '60', '62.5', '65', '67.5', '70', '72.5', '75', '77.5', '80']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
       // splitNumber: 6,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '充电',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: 'rgba(228, 228, 126, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(228, 228, 126, .8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(228, 228, 126, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#dddc6b',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [ , , , ,0, 2.5,2.3, 2.8, 2.5,10,4, 4.5 ]
    }, {
        name: '放电',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: 'rgba(255, 128, 128, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 128, 128,.8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 128, 128, .1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: 'rgba(255, 128, 128,.8)',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [-1.5, -1.8, -1, -1.3, -2, -4,0]

    }, 

		 ]

};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts3'));

       option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
    grid: {
        left: '0',
		top: '30',
        right: '20',
        bottom: '-10',
        containLabel: true
    },legend: {
        data: ['充电', '放电'],
        right: 'center',
        top:0,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.1)'
			}

        },

   data: ['5', '10', '20', '30', '40', '50', '60', '70', '80']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)',

            }
        }
    }],
    series: [
		{
        name: '充电',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        showSymbol: true,
        lineStyle: {
			
            normal: {
				color: 'rgba(228, 228, 126, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(228, 228, 126, .8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(228, 228, 126, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#dddc6b',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [30.7, 30.5, 30.1, 29.4, 28.7, 28.3, 27.7, 27.5, 27 ]

    },{
        name: '放电',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        showSymbol: true,
        lineStyle: {
			
            normal: {
				color: 'rgba(255, 128, 128, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 128, 128,.8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 128, 128, .1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: 'rgba(255, 128, 128,.8)',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [22.5, 22.1, 21.7, 21.3, 21, 20.8, 20.7, 20.5,  20.3]

    }, 

		 ]

};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function pe01() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe01'));
        var txt=84
        option = {
            title: {
              text: txt+'',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '20'
              }
            },
            color:'#49bcf7',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#eaff00',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function pe02() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe02'));
        var txt=30.677
        option = {
            title: {
              text: txt+'',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '16'
              }
            },
            color:'#49bcf7',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#ea4d4d',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function pe03() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe03'));
        var txt=23.238
        option = {
            title: {
              text: txt+'',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '16'
              }
            },
            color:'#49bcf7',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#395ee6',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }
            ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function pe04() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('lastecharts'));
      option = {
    
        tooltip: {
            trigger: 'axis'
        },
        radar: [{
            indicator: [{
                text: '总电压',
                max: 100
            }, {
                text: '电流',
                max: 100
            }, {
                text: '循环次数',
                max: 100
            }, {
                text: '温度',
                max: 100
            }, {
                text: '串联电压',
                max: 100
            }],
            textStyle: {
                color: 'red'
            },
            center: ['50%', '50%'],
            radius: '70%',
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
        
            name: {
                padding:-5,
                formatter: '{value}',
                textStyle: {
                  fontSize:15,
                    color: 'rgba(255,255,255,.6)'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            }
        }, ],
        series: [{
            name: '雷达图',
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            data: [{
                name: '相关性',
                value: [90, 66,20,23,80],
                lineStyle: {
                    normal: { 
                        color:'#03b48e',
                        width:2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#03b48e',
                        opacity:.4
                    }
                },
                symbolSize: 0,
              
            }, ]
        }, ]
    };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
  }
})



		
		
		


		



















