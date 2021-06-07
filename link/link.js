(function(){
    var linkDemo = function(){
        return {
            restrict: 'A',
            link: function(scope, elem, attrs){
                elem.on('click', function() {
                    elem.html('You clicked here')
                })
                elem.on('mouseenter', function() {
                    elem.css('background-color', 'green')
                })
                elem.on('mouseleave', function() {
                    elem.html('background-color', 'white')
                })
            }
        }
    }
    angular.module('directiveModule', [])
    .directive('linkDemo', linkDemo)
}())