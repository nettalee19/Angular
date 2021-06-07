
// //option 1
// // app.controller('CustomersController', 
// // function CustomersController($scope){
// //     $scope.sortBy = 'name'
// //     $scope.reverse = false
    
// //     $scope.customers = [{joined:'1989-03-19', name:'Netta', city:'Haifa', orderTotal: '10'}, {joined:'2019-04-06', name:'Aya', city:'Carmiel', orderTotal: '10.1867'} , {joined:'2015-01-06', name:'Tully', city:'Pardesiya', orderTotal: '10'} , {joined:'2015-01-06', name:'Tulila', city:'Pardesiya', orderTotal: '10'} , {joined:'2021-05-31', name:'Clara', city:'Pardesiya', orderTotal: '101'}]
// //     $scope.doSort = function(propName){
// //         $scope.sortBy = propName;
// //         $scope.reverse = !$scope.reverse
// //     }
// // })

// //option 2
// // (function(){
// //     angular.module('customersApp').controller('CustomersController', 
// //     function CustomersController($scope){
// //         $scope.sortBy = 'name'
// //         $scope.reverse = false
        
// //         $scope.customers = [{joined:'1989-03-19', name:'Netta', city:'Haifa', orderTotal: '10'}, {joined:'2019-04-06', name:'Aya', city:'Carmiel', orderTotal: '10.1867'} , {joined:'2015-01-06', name:'Tully', city:'Pardesiya', orderTotal: '10'} , {joined:'2015-01-06', name:'Tulila', city:'Pardesiya', orderTotal: '10'} , {joined:'2021-05-31', name:'Clara', city:'Pardesiya', orderTotal: '101'}]
// //         $scope.doSort = function(propName){
// //             $scope.sortBy = propName;
// //             $scope.reverse = !$scope.reverse
// //         }
// //     })

// // }())

// //option 3
// (function(){

//     var CustomersController = function ($scope){
//         $scope.sortBy = 'name'
//         $scope.reverse = false
        
//         $scope.customers= [
//             {
//                 id: 1, 
//                 joined: '2000-12-02', 
//                 name:'John', 
//                 city:'Chandler', 
//                 orderTotal: 9.9956,
//                 orders: [
//                     {
//                         id: 1,
//                         product: 'Shoes',
//                         total: 9.9956
//                     }
//                 ]
//             }, 
//             {
//                 id: 2, 
//                 joined: '1965-01-25',
//                 name:'Zed', 
//                 city:'Las Vegas', 
//                 orderTotal: 19.99,
//                 orders: [
//                     {
//                         id: 2,
//                         product: 'Baseball',
//                         total: 9.995
//                     },
//                     {
//                         id: 3,
//                         product: 'Bat',
//                         total: 9.995
//                     }
//                 ]
//             },
//             {
//                 id: 3, 
//                 joined: '1944-06-15',
//                 name:'Tina', 
//                 city:'New York', 
//                 orderTotal:44.99,
//                 orders: [
//                     {
//                         id: 4,
//                         product: 'Headphones',
//                         total: 44.99
//                     }
//                 ]
//             }, 
//             {
//                 id: 4, 
//                 joined: '1995-03-28',
//                 name:'Dave', 
//                 city:'Seattle', 
//                 orderTotal:101.50,
//                 orders: [
//                     {
//                         id: 5,
//                         product: 'Kindle',
//                         total: 101.50
//                     }
//                 ]
//             }
//         ];
        
        

//         // $scope.customers = [
//         //     {
//         //         joined:'1989-03-19', 
//         //         name:'Netta', 
//         //         city:'Haifa', 
//         //         orderTotal: 10, 
//         //         id:1,
//         //         orders:{
//         //             id:1,
//         //             product:"Shoes",
//         //             total:10

//         //         }
//         //     }, 
//         //     {
//         //         joined:'2019-04-06', 
//         //         name:'Aya', 
//         //         city:'Carmiel', 
//         //         orderTotal: 10, 
//         //         id:2,
//         //         orders:{
//         //             id:1,
//         //             product:"Shoes",
//         //             total:10

//         //         }
//         //     } , 
//         //                     // {joined:'2015-01-06', name:'Tully', city:'Pardesiya', orderTotal: '10', id:3} , 
//         //                     // {joined:'2015-01-06', name:'Tulila', city:'Pardesiya', orderTotal: '10', id:4} , 
//         //                     // {joined:'2021-05-31', name:'Clara', city:'Pardesiya', orderTotal: '101', id:5}
//         //                 ]
//         $scope.doSort = function(propName){
//             $scope.sortBy = propName;
//             $scope.reverse = !$scope.reverse
//         }
//     }
//     CustomersController.$inject = ['$scope']

//     angular.module('customersApp').controller('CustomersController', CustomersController)

// }())

(function() {
    
    var CustomersController = function ($scope, customersFactory, appSettings) {
    //var CustomersController = function ($scope, customersService, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init(){
            $scope.customers = customersFactory.getCustomers()
            //$scope.customers = customersService.getCustomers()
            
            //  customersFactory.getCustomers()
            //  .success(function(customers) {
            //     $scope.customers = customers
            //  })
            //  .error(function(data, status,headers,config) {
            //     $log.log(data.error + '' + status)
            //  })
        }

        init()
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
    };
    
    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];
    //CustomersController.$inject = ['$scope', 'customersService'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());