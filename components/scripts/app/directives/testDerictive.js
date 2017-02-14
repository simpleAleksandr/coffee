angular.module('sPainter').directive('foo',[ '$templateCache', '$comment', function ($templateCache, $comment) {
    return{
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', function (e) {
                if (element.text()==='Коментарий' || element.text()==='Письмо'){
                    e.preventDefault();
                    $comment(attrs.foo);

                }
            })

        }
    }
}]);