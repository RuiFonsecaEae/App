angular.module('angularApp')
        .service('postservice', function($http) {
        this.getNumber = function() {
            var promise = $http.post('/random').then(function (response) {
                return response.data.number;
            });
            return promise;
            };
});