angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout, $state) {

  $('#deslogin').on('click', function(){

    alert ("¡Hasta luego!");
    $state.go('login');

  })
})

.controller('ChatsCtrl', function($ionicPlatform, $scope, $timeout, $cordovaDeviceMotion) {
    $ionicPlatform.ready(function() {
        // Values @ this instance
        $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
            $scope.X = result.x;
            $scope.Y = result.y;
            $scope.Z = result.z;
            $scope.timeStamp = result.timestamp;
            $scope.banderaIzquierda = 0;
            $scope.banderaDerecha = 0;
            $scope.banderaArriba = 0;
            $scope.banderaAbajo = 0;



        }, function(err) {
            // An error occurred. Show a message to the user
            console.log(err);
        });
        // Keep watching for change in values
        // watch Acceleration
        var options = {
            frequency: 2000
        };
        $scope.watch = $cordovaDeviceMotion.watchAcceleration(options);
        $scope.watch.then(
            null,
            function(error) {
                // An error occurred
            },
            function(result) {
                $scope.X = result.x;
                $scope.Y = result.y;
                $scope.Z = result.z;
                $scope.timeStamp = result.timestamp;

//X > 0 Izquierda
//X < 0 Derecha
//Y > 0 Abajo
//Y < 0 Arriba
//Z < 0 Boca abajo

            if ($scope.X > 2 && $scope.banderaIzquierda == 0)
            {
                $scope.banderaIzquierda = 1;
                $scope.banderaDerecha = 0;
                alert ("Izquierda");
            }

            if ($scope.X < -2 && $scope.banderaDerecha == 0)
            {
                alert ("Derecha");
                $scope.banderaIzquierda = 0;
                $scope.banderaDerecha = 1; 
            }

            if ($scope.Y > 2 && $scope.banderaArriba == 0)
            {
                $scope.banderaArriba = 1;
                $scope.banderaAbajo = 0;
                alert ("Abajo");
            }

            if ($scope.Y < -2 && $scope.banderaAbajo == 0)
            {
                $scope.banderaArriba = 0;
                $scope.banderaAbajo = 1; 
                alert ("Arriba");
            }

            if ($scope.Z < -2)
            {
                alert ("Acostado");
            }

            });
    /*
        $timeout(function() {
            $scope.watch.clearWatch();
            // or
            // $cordovaDeviceMotion.clearWatch(watch)
            // .then(function(result) {
            //   // success
            //   }, function (error) {
            //   // error
            // });
        }, 10000);
    */
    });
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


 
