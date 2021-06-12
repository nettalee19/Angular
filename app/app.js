// (function(){
//     var app = angular.module('customersApp', ['ngRoute'])

//     app.config(function ($routeProvider){
//         $routeProvider
//             .when('/', {
//                 controller:'CustomersController',
//                 templateUrl: 'app/views/customers.html'
//             })
//             .when('/orders/:customerId', {
//                 controller:'OrdersController',
//                 templateUrl: 'app/views/orders.html'
//             })
//             .otherwise( { redirectTo: '/'})
//     })
// }())

(function() {
    
    var app = angular.module('customersApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
            .when('/orders', {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
            .when('/login', {
                controller: 'loginController',
                templateUrl: 'app/views/login.html',
                controllerAs: 'vm'
            })
            .when('/register', {
                controller: 'registerController',
                templateUrl: 'app/views/register.html',
                controllerAs: 'vm'
            })
            .when('/favorites', {
                controller: 'favoritesController',
                templateUrl: 'app/views/favorites.html',
                controllerAs: 'vm'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());

