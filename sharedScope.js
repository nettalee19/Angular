(function(){

    var app = angular.module('directivesModule', [])

    app.directive('sharedScope', function(){
        return{
            template: 'This is shared'
        }
    })

}())