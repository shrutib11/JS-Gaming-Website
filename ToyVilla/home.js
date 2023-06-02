$(function() { 
  $('#sidebarCollapse').on('click', function() {        //jQuery
    $('#sidebar, #content').toggleClass('active');
  });
});

function func(){
  alert("Added to Favourites");
}