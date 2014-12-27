describe('Custom directives', function() {
  var elm, scope,compile;

  beforeEach(module('DirectiveDemo'));

  beforeEach(inject(function($rootScope, $compile) {
   

    scope = $rootScope;
	compile=$compile;
 //   $compile(elm)(scope);
  //  scope.$digest();
  }));

  it('When directive is used with attribute,It Should replace with template content ', function() {
    elm = angular.element('<div heading1></div>');
	compile(elm)(scope);
	scope.$digest();
	var v=elm.html();
	expect(elm.html()).toContain("attribute output");
  });

  it('When directive is used with element,It Should replace with template content', function() {
    elm = angular.element('<heading2></heading2>');
	compile(elm)(scope);
	scope.$digest();
	var v=elm.html();
	expect(elm.html()).toContain("<h2>element output </h2>");
  });


  
});
