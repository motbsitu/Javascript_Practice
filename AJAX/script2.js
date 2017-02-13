//simple AJAX example

var myRequest;
//if exists (cross browser check)
if(window.XMLHttpRequest){
  myRequest = new XMLHttpRequest();
  //if in IE
}else if (window.ActiveXObject) {
  myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
//create event handler to call back
myRequest.onreadystatechange = function(){
  console.log('we were called');
  console.log('ready state', myRequest.readyState); //looking for 4
  if(myRequest.readyState === 4){
    var p = document.createElement('p');
    var t = document.createTextNode(myRequest.responseText);
    p.appendChild(t);
    document.getElementById("mainContent").appendChild(p);
  }
}
//open & send
myRequest.open('GET', 'simple.txt', true);
//if there are parameters
myRequest.send(null);
