
//http://jsfiddle.net/e00jdrsd/35/  edited by thejas
angular.module('app', []).
controller('form', function($scope) {
    $scope.model1 = 'first value';
     $scope.model2 = '';
}).
directive('modelclearondisable',
    function() {
        return {
            restrict: 'EA',
            require: 'ngModel',
             scope: {
                        model: '=ngModel',
                        disable:'=ngDisabled'
        },
            link: function(scope, iElement, iAttrs, ngModel) {
               console.log(iAttrs);
              scope.$watch("disable",function(value){
                if(value){
                 ngModel.$setViewValue('');
               ngModel.$render();
                console.log(ngModel);
                }
                });
                console.log(ngModel);
            }
        }
    }
);
