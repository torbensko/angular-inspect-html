'use strict';

angular.module('sko.inspectHtml', [
    'ngLodash',
    'ui.bootstrap',
  ])
  .directive('inspectHtml', function ($uibModal, lodash) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
      	element.on('click', function() {

          var formatted = html_beautify(element[0].outerHTML, {
            'indent_inner_html': false,
            'indent_size': 2,
            'indent_char': ' ',
            'wrap_line_length': 78,
            'brace_style': 'expand',
            'unformatted': ['a', 'sub', 'sup', 'b', 'i', 'u'],
            'preserve_newlines': true,
            'max_preserve_newlines': 5,
            'indent_handlebars': false,
            'extra_liners': ['/html']
          });

          // Remove this directive from the HTML code
          formatted = formatted.replace(' inspect-html=""', '');

      		$uibModal.open({
      			size: 'lg',
			      template: 
                '<div class="modal-body">'+
                  '<pre>'+
                    lodash.escape(formatted)+
                  '</pre>'+
                '</div>',
			    });
      	});
      }
    };
  });
