angular.module('angularApp')
        .controller('Controller_1', function($scope, postservice){
            $scope.data_for_random_chart = [{data:999.9},{data:0.1}];
            
            $scope.randomize_number = function (){
                //var teste = postservice.getNumber();
                //console.log(teste)
              postservice.getNumber().then(function(random_value){
                  var dif_value = 1000 -  random_value;
                  $scope.data_for_random_chart = [{data:random_value},{data:dif_value}];
              });
              
            };
            
            $scope.data = $scope.data_for_random_chart;
        })
        .controller('Controller_2', function ($scope) {
            $scope.values_data = [];
            $scope.data_for_chart = [{data:999.9},{data:0.1}];
            
            $scope.addValues = function (){
                var temp_array = $scope.data_for_chart;
                var raw_value = (parseInt($scope.user_value)/1000*100);
                var decimal_value = Math.round(raw_value*Math.pow(10,2))/Math.pow(10,2);
                $scope.values_data.push({global:$scope.user_value, percent: decimal_value+"%"});
                temp_array.push({data:parseInt($scope.user_value)});
                $scope.data_for_chart =temp_array.slice(0);
                $scope.user_value ="";  
           };
          
           $scope.data = $scope.data_for_chart;
           window.$scope = $scope;
        });