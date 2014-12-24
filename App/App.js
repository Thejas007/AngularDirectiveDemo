var directiveDemo=angular.module('DirectiveDemo', []);

directiveDemo.controller('DemoCtrl', ['$scope',function(scope){
scope.Name="Thejas";
scope.Details={Name:'Thejas',Address:'ABC'};
}]);
