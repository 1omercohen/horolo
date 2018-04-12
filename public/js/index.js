var app = angular.module('msgApp', ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl : "home.html",
            controller  : "main"
        })
        .when("/login", {
            templateUrl : "login.html",
            controller  : "main"
        })
        .when("/register", {
            templateUrl : "register.html",
            controller  : "main"
        })
        .when("/messages", {
            templateUrl : "messages.html",
            controller  : "main"
        });
})

app.controller('main', function($scope, msgSrv){
    $scope.users = msgSrv.users;
    console.log("here", $scope.users)
})

app.factory('userSrv', function($http){
    var self = this;
    var user;
    self.LoggedIn = false;
    self.register = function(user){
        $http.post('/register', { data: user })
            .then(function(res){
                user = res.data;
                self.LoggedIn = true;
            })
    }
    return self;
});

app.factory('msgSrv', function($http){
    var self = this;
    var users = [];
    $http.get('/users')
        .then(function(usersList){
            users = usersList.data
        })
    self.users = function(){
        return users;
    }
    return self;
})