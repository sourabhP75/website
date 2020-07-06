$(function () { 
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

(function (global) {

var dc = {};

var homeHtmlUrl = "snippets/home-snippet.html";
var menuHtmlUrl = "snippets/menu.html";
var fitnessHtmlUrl = "snippets/fitness.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// *** start ***
// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtmlUrl,
  function (responseText){
    document.querySelector("#main-content")
    .innerHTML=responseText;
  },
  false);
});
// *** finish **

//*** on press menu ***/
dc.loadMenuCategories = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    menuHtmlUrl,
    function (responseText){
      document.querySelector("#main-content")
      .innerHTML=responseText;
    },
  false);
};
dc.loadFitness=function()
{
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    fitnessHtmlUrl,
    function (responseText){
      document.querySelector("#main-content")
      .innerHTML=responseText;
    },
  false);

}
global.$dc = dc;

})(window);
