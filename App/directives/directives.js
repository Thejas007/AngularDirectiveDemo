var directiveDemo=angular.module('DirectiveDemo');
//1. restrict
directiveDemo.directive('heading1', function() {

  return {
    restrict:'A',
  template:'attribute output'
  };
});

//2. usage of tempalte and template Url
directiveDemo.directive('heading2', function() {

  return {
    restrict:'E',
    template:'<h2>element output </h2>'//{{Name}}
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
directiveDemo.directive('scope1', function() {

  return {
    restrict:'E',//@A attribute, @E element,@C class
    scope:{
      myInfo: '=info'
    },
    template:"<h1>{{myInfo}}</h1> {{info}} "
  };
});

directiveDemo.directive('scope2', function() {

  return {
    restrict:'E',//@A attribute, @E element,@C class
    scope:{
      info: '='
    },
    template:'<h1>{{myInfo}}</h1> {{info}}'
  };
});

// 4. Transclude
//What does this transclude option do, exactly?
// transclude makes the contents of a directive with this option have access to the scope outside of the directive rather than inside.
directiveDemo.directive('heading6', function() {

  return {
    restrict:'E',//@A attribute, @E element,@C class
    transclude:true,
    template:"<div><input ng-model='Details.Address'/><div ng-transclude></div></div>"
  };
});

//5. link functions

directiveDemo.directive('onlyInteger', function() {

  return {
    restrict:'A',//@A attribute, @E element,@C class
    require:'ngModel',
    link:function(scope,element,attrs,ctrls){
      element.on('keydown', function (event) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ([
          46,
          8,
          9,
          27,
          13,
          110
          ].indexOf(event.keyCode) !== -1 || event.keyCode == 65 && event.ctrlKey === true || event.keyCode >= 35 && event.keyCode <= 39) {

            // let it happen, don't do anything
            return;
          } else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
              event.preventDefault();
            }

          }
        });


    }
  };
});


directiveDemo.directive('maxValue', function() {

  return {
    restrict:'A',//@A attribute, @E element,@C class
    require:'ngModel',
    link:function(scope,element,attrs,ctrl){
      element.on('blur', function () {
        var value = scope.$eval(attrs.maxValue);
        var enetredValue=scope.$eval(attrs.ngModel);
        if (parseInt(enetredValue) > value)
          ctrl.$setValidity('greaterValidation', false);
          else
            ctrl.$setValidity('greaterValidation', true);
        scope.$apply();
      });
      }
    };
  });
