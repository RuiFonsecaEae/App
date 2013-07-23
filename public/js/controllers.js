angular.module('angularApp')
        .controller('Controller_1', function($scope, postservice){
            $scope.data_for_random_chart = [{data:1000},{data:0.1}];
            
            $scope.randomize_number = function (){
              postservice.getNumber().then(function(random_value){
                  var temp_array =  $scope.data_for_random_chart;
                  temp_array.push({data:random_value});
                  $scope.data_for_random_chart =temp_array.slice(0);
              });
            };
            
          $scope.data = $scope.data_for_random_chart;
        })
        .controller('Controller_2', function ($scope, percentvalues) {
            $scope.values_data = [{global:"0", percent:"0%"}];
            $scope.data_for_chart = [{data:999.9},{data:0.1}];
            $scope.sum_value = 0;
            
            $scope.addValues = function (){
                var temp_array = $scope.data_for_chart;
                var raw_value = parseInt($scope.user_value);
                var decimal_value = Math.round(raw_value*Math.pow(10,2))/Math.pow(10,2);
                $scope.sum_value += raw_value;
                $scope.values_data.push({global:$scope.user_value, percent: 0});
                var teste = percentvalues.calculate($scope.values_data, $scope.sum_value);
                $scope.values_data = teste;
                temp_array.push({data:parseInt($scope.user_value)});
                $scope.data_for_chart =temp_array.slice(0);
                $scope.user_value ="";  
           };
           
            window.$scope = $scope;
        });