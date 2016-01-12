"use strict";

angular.module("jfet")


.controller("navCtrl", function($scope){
	var gitHub = {name: "github", url: "https://github.com/jfetter"};
	var hangman = {name: "hangman", url: "http://www.unfetteredbook.com/hangman/hangman.html"};
	$scope.projects = [gitHub, hangman]
})

.controller("footerCtrl", function($scope){
	$scope.foot1 = "FOOTER"
})

.controller("homeCtrl", function($scope){
	$scope.title = "Jillian Fetter"
	$scope.subtitle ="Javascript Web Developer"

})

.controller("resumeCtrl", function($scope){
	$scope.title = "Resume"
})