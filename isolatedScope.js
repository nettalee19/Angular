(function(){

    var app = angular.module('directivesModule', [])

    app.directive('helloWorld', function(){
        return{
            scope:{},
            template: 'This is isolated'
        }
    })

}())