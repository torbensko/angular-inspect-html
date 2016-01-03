'use strict';

angular.module('sko.viewHtml', ['ngLodash'])
  .directive('viewHtml', function ($uibModal, lodash) {
    
    function removeLeadingWhiteSpace(text) {
      var lines = text.split(/[\n\r]+/),
          whiteSpaceLength = 100;

      console.log(text);

      // How much leading whitespace is there?
      angular.forEach(lines, function(line) { 
        // Ignore blank lines
        if ( line.match(/^\s*$/) ) { return; }
        whiteSpaceLength = Math.min(whiteSpaceLength, line.match(/^\s*/)[0].length);
      });
      
      // Remove common whitespace
      var trimmed = '';
      angular.forEach(lines, function(line) { 
        trimmed += line.substr(whiteSpaceLength)+'\n';
      });

      return trimmed;
    }

    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
      	element.on('click', function() {
      		var text = element[0].outerHTML.replace(/\t/g, '  ').replace(/\s*$/g, '');
          text = removeLeadingWhiteSpace(text);

      		$uibModal.open({
      			size: 'lg',
			      template: 
                '<div class="modal-body">'+
                  '<pre>'+
                    lodash.escape(text)+
                  '</pre>'+
                '</div>',
			    });
      	});
      }
    };
  });
