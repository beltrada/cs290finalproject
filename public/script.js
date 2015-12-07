document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){

document.getElementById("add").addEventListener('click', function(event){
  var req = new XMLHttpRequest();
  var name = document.getElementById("name").value;
  var reps = document.getElementById("reps").value;
  var weight = document.getElementById("weight").value;
  var date = document.getElementById("date").value;
  var lbs = document.getElementById("lbs").value;

  req.open("GET", "http://52.89.154.76:3000/insert?name=" + name + "&reps=" + reps + "&weight=" + weight + "&date=" + date + "&lbs=" + lbs, true);
  req.addEventListener("load", function(){
          console.log("done: ", req.status);
                  });
  req.send(null);
})







/*function addRow() {
         
    var exerciseName = document.getElementById("name");
    var rep = document.getElementById("reps");
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= exerciseName.value;
    row.insertCell(2).innerHTML= reps.value;

}

function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
   
}

document.addEventListener('DOMContentLoaded', bindButtons);

      function bindButtons(){
        document.getElementById('add').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          var cityName = document.getElementById('cityName').value +',US';
          console.log(cityName);
          req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&APPID=' + apiKey, true);
          req.addEventListener('load', function(){
            if(req.status >= 200 && req.status < 400){
              var response = JSON.parse(req.responseText);
              var data = JSON.stringify(response.weather);
               var nombre = JSON.stringify(response.name);
              document.getElementById('weatherResult').textContent = "City Name: "+ nombre + ", Current Temp: "+ response.main.temp + " Kelvin, Weather: " + data;
            } else {
              console.log("Error in network request: " + request.statusText);
            }});
          req.send(null);
          event.preventDefault();
        })*/