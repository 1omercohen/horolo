var app = angular.module('msgApp', []);

app.controller('main', function($scope, msgSrv){
    $scope.users = msgSrv.users;
})

app.factory('msgSrv', function($http){
    var self = this;
    var users = [];
    $http.get('/users')
        .then(function(usersList){
            users = usersList
        })
    self.users = function(){
        return users;
    }
    return self;
})