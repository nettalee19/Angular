
//option 1
// app.controller('CustomersController', 
// function CustomersController($scope){
//     $scope.sortBy = 'name'
//     $scope.reverse = false
    
//     $scope.customers = [{joined:'1989-03-19', name:'Netta', city:'Haifa', orderTotal: '10'}, {joined:'2019-04-06', name:'Aya', city:'Carmiel', orderTotal: '10.1867'} , {joined:'2015-01-06', name:'Tully', city:'Pardesiya', orderTotal: '10'} , {joined:'2015-01-06', name:'Tulila', city:'Pardesiya', orderTotal: '10'} , {joined:'2021-05-31', name:'Clara', city:'Pardesiya', orderTotal: '101'}]
//     $scope.doSort = function(propName){
//         $scope.sortBy = propName;
//         $scope.reverse = !$scope.reverse
//     }
// })

//option 2
// (function(){
//     angular.module('customersApp').controller('CustomersController', 
//     function CustomersController($scope){
//         $scope.sortBy = 'name'
//         $scope.reverse = false
        
//         $scope.customers = [{joined:'1989-03-19', name:'Netta', city:'Haifa', orderTotal: '10'}, {joined:'2019-04-06', name:'Aya', city:'Carmiel', orderTotal: '10.1867'} , {joined:'2015-01-06', name:'Tully', city:'Pardesiya', orderTotal: '10'} , {joined:'2015-01-06', name:'Tulila', city:'Pardesiya', orderTotal: '10'} , {joined:'2021-05-31', name:'Clara', city:'Pardesiya', orderTotal: '101'}]
//         $scope.doSort = function(propName){
//             $scope.sortBy = propName;
//             $scope.reverse = !$scope.reverse
//         }
//     })

// }())

//option 3
(function(){

    var CustomersController = function ($scope){
        $scope.sortBy = 'name'
        $scope.reverse = false
        
        $scope.customers = [{joined:'1989-03-19', name:'Netta', city:'Haifa', orderTotal: '10'}, {joined:'2019-04-06', name:'Aya', city:'Carmiel', orderTotal: '10.1867'} , {joined:'2015-01-06', name:'Tully', city:'Pardesiya', orderTotal: '10'} , {joined:'2015-01-06', name:'Tulila', city:'Pardesiya', orderTotal: '10'} , {joined:'2021-05-31', name:'Clara', city:'Pardesiya', orderTotal: '101'}]
        $scope.doSort = function(propName){
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse
        }
    }
    CustomersController.$inject = ['$scope']

    angular.module('customersApp').controller('CustomersController', CustomersController)

}())
