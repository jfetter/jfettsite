"use strict";

angular.module("jfet", ["ui.router", "ui.bootstrap"])

.config(function( $stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state("home", {url:"/home", templateUrl:"templates/home.html", controller: "homeCtrl"})
	.state("resume", {url:"/resume", templateUrl: "templates/resume.html", controller: "resumeCtrl"})
})

