var directiveDemo=angular.module('DirectiveDemo');
//1. restrict
directiveDemo.directive('heading1', function() {

  return {
    restrict:'A',
  template:'Heading 1'
  };
});

//2. usage of tempalte and template Url
directiveDemo.directive('heading2', function() {

  return {
    restrict:'E',
    template:'<h2>Heading 2 {{Name}}</h2>'
    //template:Url:'templates\heading2.html'
  };
});

directiveDemo.directive('heading3', function() {

  return {
    restrict:'AEC',//@A attribute, @E element,@C class
    templateUrl:'views/templates/heading3.html'
  };
});


// 3. scope
directiveDemo.directive('heading4', function() {

  return {
    restrict:'E',//@A attribute, @E element,@C class
    scope:{
      myInfo: '=info'
    },
    template:'<h1>{{myInfo}}</h1> {{info}}'
  };
});

directiveDemo.directive('heading5', function() {

  return {
    restrict:'E',//@A attribute, @E element,@C class
    scope:{
      info: '='
    },
    template:'<h1>{{myInfo}}</h1> {{info}}'
  };
});

// 4. Transclude
