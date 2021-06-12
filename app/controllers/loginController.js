

// (function() {
    
//     var CustomersController = function ($scope, customersFactory, appSettings) {
//         $scope.sortBy = 'name';
//         $scope.reverse = false;
//         $scope.customers = [];
//         $scope.appSettings = appSettings;

//         function init(){
//             $scope.customers = customersFactory.getCustomers()
            
//         }

//         init()
        
//         $scope.doSort = function(propName) {
//            $scope.sortBy = propName;
//            $scope.reverse = !$scope.reverse;
//         };
        
//     };
    
//     CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];
//     //CustomersController.$inject = ['$scope', 'customersService'];

//     angular.module('customersApp')
//       .controller('CustomersController', CustomersController);
    
// }());

(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();