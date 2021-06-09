(function() {
    var testFactory = function($http){
        var factory = {};
        factory.getFromApi = function (){
            return $http.get('http://localhost:8080/customers')
        }
        return factory
    }
    testFactory.$inject = ['$http']

    angular.module('customersApp').factory('testFactory', testFactory)
}())