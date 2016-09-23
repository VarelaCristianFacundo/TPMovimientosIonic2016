angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout, $state) {

  $('#deslogin').on('click', function(){

    alert ("¡Hasta luego!");
    $state.go('login');

  })
})

.controller('ChatsCtrl', function ($scope, $cordovaDeviceMotion) {
    var watchID;

    document.addEventListener("deviceready", function () {
  $cordovaPlugin.someFunction().then(success, error);
}, false);

    $cordovaDeviceMotion
      .getCurrentAcceleration()
      .then(function (motion) {
        $scope.motion = motion;
        console.log(motion);
      }, function (err) {
        $scope.msg = err.message;
        console.log(err);
      });


    $scope.watchAcceleration = function () {
      alert ("llegue");
      var options = { frequency: 3000 };  // Update every 3 seconds

      $scope.this_watch = $cordovaDeviceMotion.watchAcceleration(options);

      $scope.this_watch.promise.then(
        function () {  /* unused */
        },
        function (err) {
          $scope.msg = err.message;
        },
        function (motion) {
          $scope.motion = motion;
        });
    };

    $scope.clearWatch = function () {
      // use watchID from watchAccelaration()
      $cordovaDeviceMotion.clearWatch($scope.this_watch.watchId);
    };
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


 
