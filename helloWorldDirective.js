(function(){

    const app = angular.module('customersApp', [])

    app.directive('helloWorld',function(){
        return {
            template: 'Hello World'
        }
    })

}())