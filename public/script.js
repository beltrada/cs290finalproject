document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){

document.getElementById("add").addEventListener('click', function(event){
  var req = new XMLHttpRequest();
  var workout = {name: NULL, reps: NULL, weight: NULL, date: NULL, lbs: NULL};

  workout.name = document.getElementById("name").value;
  workout.reps = document.getElementById("reps").value;
  workout.weight = document.getElementById("weight").value;
  workout.date = document.getElementById("date").value;
  workout.lbs = document.getElementById("lbs").value;

  req.open("GET", "http://52.89.154.76:3000/insert?name=" + workout.name + "&reps=" + workout.reps + "&weight=" + workout.weight + "&date=" + workout.date + "&lbs=" + workout.lbs, true);
  req.addEventListener("load", function(){
          console.log("done: ", req.status);
                  });
  req.send(null);

}







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