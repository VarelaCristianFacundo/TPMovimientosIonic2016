angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout, $state) {

  $('#deslogin').on('click', function(){

    alert ("¡Hasta luego!");
    $state.go('login');

  })
})

.controller('ChatsCtrl', function($scope, Chats, $state, $cordovaDeviceMotion) {

   document.addEventListener("deviceready", function () {

    $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
      var X = result.x;
      var Y = result.y;
      var Z = result.z;
      var timeStamp = result.timestamp;
      alert(X);
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  }, false);
 
  

})

.controller('login', function($scope, $state) {

  $('#login').on('click', function(){
    var username = "";
    username = $("#nombre").val();
    var flag = 0;
  //alert ("Bienvenido "+username);
       
        if (username == "Cristian")
        {
            alert ("Bienvenido " + username);
            $state.go('tab.chats');
        }
        else
        {
            alert ("Usted no es usuario");
        }

  })
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


 
