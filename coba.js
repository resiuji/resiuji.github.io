// var formContainer = document.getElementById("form");
// var btn = document.getElementById("btn");
//
// btn.addEventListener("click", function() {
//   var req = new XMLHttpRequest();
//   req.open('GET', 'ajax.html');
//   req.onload = function() {
//       var ourdata = JSON.parse(req.responseText);
//       renderHTML(ourdata);
//   };
//   req.send();
// });
//
// function renderHTML(data) {
//   var htmlString = "TEST"
//   formContainer.insertAdjacentHTML('beforeend', htmlString);
// }

$.get("ajax.html",function(data){
    $("form").html(data);
});
