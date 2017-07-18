board.controller('Main', function($scope,$location,$routeParams,$timeout,$document,$window) {
  $scope.current_page = 1;
  $scope.change = function(num){
    $scope.current_page = num;
  }
});
