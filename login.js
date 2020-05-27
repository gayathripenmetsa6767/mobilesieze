var app = angular.module('loginapp',[]);
app.controller('loginController',function($scope,$http,$window){

	$scope.save = function(admin){
		console.log(admin);
		$http({
			method : 'POST',
			url : '/postadmin',
			data : admin
		}).then(function(success){
			console.log(success)
			alert("success")
			window.location.href = '/dashboard';
		},function(error){
			console.log(error)
			alert("error")
		})

	}

})




