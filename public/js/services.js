angular.module('angularApp')
        .service('postservice', function($http) {
            this.getNumber = function() {
                var promise = $http.post('/random').then(function (response) {
                    return response.data.number;
                });
                return promise;
            };
        }) 
        .service('percentvalues', function(){
            this.calculate = function(data, sum){
                var newValues = [];
                $.each(data, function() {
                    console.log("values "+this.global+" "+this.percent+" "+sum);
                   var percentage = Math.round(100*this.global/sum);
                   console.log("values "+this.global+" "+this.percent+" "+sum);
                   newValues.push({global:this.global, percent:percentage+"%"});
                });
            return newValues;
            };
        });;