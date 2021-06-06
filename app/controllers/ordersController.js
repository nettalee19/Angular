// (function(){

//     var OrdersController = function ($scope, $routeParams){
//         var customerId = $routeParams.customerId;
//         $scope.orders = null;

//         function init() {
//             //Search the customers for the customerId
//             for (var i=0,len=$scope.customers.length;i<len;i++) {
//                if ($scope.customers[i].id === parseInt(customerId)) {
//                    $scope.orders = $scope.customers[i].orders;
//                    break;
//                }
//             }
//         }

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
        
//         init();

//         // $scope.customers = $scope.customers = [
//         //     {
//         //         joined:'1989-03-19', 
//         //         name:'Netta', 
//         //         city:'Haifa', 
//         //         orderTotal: 12, 
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
//         //         orderTotal: 10.1867, 
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
//         // init()
//     }
//     OrdersController.$inject = ['$scope', '$routeParams'];

//     angular.module('customersApp')
//       .controller('OrdersController', OrdersController);
// }())

(function() {
    
    var OrdersController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        //$scope.orders = null;
        $scope.customer = null
        
        function init() {
            //Search the customers for the customerId
            $scope.customer = customersFactory.getCustomer(customerId)
        }
        
        
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());