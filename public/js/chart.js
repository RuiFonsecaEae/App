var app = angular.module("chartApp", []);

app.controller('chartController', function($scope) {
    var data = [];
	var series = Math.floor(Math.random()*50)+1;
	for( var i = 0; i<series; i++)
	{
		data[i] = { label: "Series"+(i+1), data: Math.floor(Math.random()*100)+1 };
	}
    
    $scope.data = data;

});

app.directive('chart', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            var data = scope[attrs.ngModel];
            var chart = null,
                opts  = {series: {
                        pie: { 
                            show: true
                        }
                    } };
                scope.$watch('data', function(v){
                        if(!chart){
                            chart = $.plot(elem, v , opts);
                            elem.show();
                        }else{
                            chart.setData(v);
                            chart.setupGrid();
                            chart.draw();
                        }
                    });
        }
    };
});


