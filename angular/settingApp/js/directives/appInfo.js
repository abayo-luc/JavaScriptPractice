var app = angular.module("appStore", [])
app.directive('appInfo',function(){
  return {
   restrict: 'E',
   scope: {
     info: '='
   },
    templateUrl: 'js/directives/appInfo.html'
  };
});