sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {
			this.byId("HTMLContent").setContent('<canvas id="myChart" width="2" height="1"></canvas>')
		},

		onAfterRendering: function () {
			var ctx = document.getElementById('myChart').getContext('2d');
			var data = {
				labels: ['5', '10', '15', '20', '25', '30'],
				datasets: [{
					label: 'Estimate Commission',
					borderColor: 'rgb(99, 132, 255)',
					data: [296, 433, 620, 970, 1300, 1500]
				}, {
					label: 'Actual Commission',
					borderColor: 'rgb(255, 99, 132)',
					data: [187, 350, 750, 900, 1250]
				}]
			};
			var options = {
				scales: {
					xAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Days'
						}
					}],
					yAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Amount'
						}
					}]
				}
			};

			var myChart = new Chart(ctx, {
				type: 'line',
				data: data,
				options: options
			});
			myChart.update();
		}

	});
});