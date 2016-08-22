angular.module('app', []).
controller('box', function($scope) {
    $scope.boxModel = 'first value';
}).
directive('box',
    function() {
        return {
            restrict: 'EA',
            require: 'ngModel',
            scope: {
            },
            link: function(scope, iElement, iAttrs, ngModel) {
               console.log(iAttrs);
              scope.$watch(iAttrs.todisable,function(value){
                if(value){
                 ngModel.$setViewValue('second value');
                ngModel.$render();
                console.log(ngModel);
                }
                });
                console.log(ngModel);
            }
        }
    }
);
