document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById("form");
if (localStorage.getItem('day')) {
  document.getElementById("day").value = localStorage.getItem('day');
  document.getElementById("task").value = localStorage.getItem('task');
  document.getElementById("idbox").value = localStorage.getItem('idbox');
  document.getElementById("time").value = localStorage.getItem('time');

}//displays current

document.getElementById("form").addEventListener("submit", function (e) {
e.preventDefault(); // Prevent the default form submissiona
document.getElementById("SUBMIT").disabled = true;

// Collect the form data
var formData = new FormData(this);
var keyValuePairs = [];
for (var pair of formData.entries()) {
  keyValuePairs.push(pair[0] + "=" + pair[1]);
}

var formDataString = keyValuePairs.join("&");

// Send a POST request to your Google Apps Script
fetch(
  "https://script.google.com/macros/s/AKfycbyAXsEsS7jr8_yr8oPexWH-RqdtYxuucxu2h1rI08lkbYXMyDYaIhagmr-8oCwggt2R/exec",
  {
    redirect: "follow",
    method: "POST",
    body: formDataString,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  }
)
  .then(function (response) {
    // Check if the request was successful
    if (response) {
      return response; // Assuming your script returns JSON response
    } else {
      throw new Error("Failed to submit the form.");
    }
  })
  .then(function (data) {
    // Display a success message
    document.getElementById("SUBMIT").disabled = false;
    document.getElementById("form").reset();

    setTimeout(function () {
      document.getElementById("message").textContent = "";
      document.getElementById("message").style.display = "none";
    }, 2600);
  })
  .catch(function (error) {
    // Handle errors, you can display an error message here
    console.error(error);
    alert("no");
  });

  
  var day = document.getElementById("day").value;
  var task = document.getElementById("task").value;
  var idbox = document.getElementById("idbox").value;
  var time = document.getElementById("time").value;
  
  //gets the data from form
  const  data = { Day:day, Task:task, Idbox:idbox, Time:time};//stores in object

  var bigdata = []; // Initialize an empty array
  bigdata.push( "how the day went: "+data.Day+"\n\t");
  bigdata.push( "\ntask performed :" +data.Task+"\n\t");
  bigdata.push("\nother :"+data.Idbox+"\n\t");
  bigdata.push("\ntime :"+data.Time+"\n\t");//pushes each content of the object to the array bigdata
     
  //stores the data to local storage
  localStorage.setItem('day', day);
  localStorage.setItem('task', task);
  localStorage.setItem('idbox', idbox);
  localStorage.setItem('time', time);

  alert("tell me it worked");
  alert(" it worked");
  
});


fetch('https://v1.nocodeapi.com/hemodious/google_sheets/nvtsDRABpmVwwcQk?tabId=Sheet1')
  .then(response => response.json())
  .then(({ data }) => {
    var divIds = ["display", "display1", "display2"];
    var lastThreeRows = data.slice(-3); // get the last 3 rows
    lastThreeRows.forEach((row, index) => {
      var divId = divIds[index];
      var output = "";
      output += "Day: " + row.day + ", ";
      output += "Task: " + row.task + ", ";
      output += "Other: " + row.other + ", ";
      output += "Time: " + row.time + ", ";
      output += "Date: " + row.date;
      document.getElementById(divId).innerHTML = output;
    });
  })

});

function generatePdf() {
  var change=document.getElementById("first-part");
  var change2=document.getElementById("display");
  var change3=document.getElementById("display1");
  var change4=document.getElementById("mini-header");
  var change5=document.getElementById("icon1");
  var change6=document.getElementById("icon2");
  var change7=document.getElementById("icon3");

  change.classList.add("don_print");
 // change1.classList.add("don_print");
  change2.classList.add("don_print");
  change3.classList.add("don_print");
  change4.classList.add("don_print");
  change5.classList.add("don_print");
  change6.classList.add("don_print");
  change7.classList.add("don_print");
  window.print();
}
function generatePdf2() {
  var change=document.getElementById("first-part");
  var change2=document.getElementById("display2");
  var change3=document.getElementById("display1");
  var change4=document.getElementById("mini-header");
  var change5=document.getElementById("icon1");
  var change6=document.getElementById("icon2");
  var change7=document.getElementById("icon3");

  change.classList.add("don_print");
 // change1.classList.add("don_print");
  change2.classList.add("don_print");
  change3.classList.add("don_print");
  change4.classList.add("don_print");
  change5.classList.add("don_print");
  change6.classList.add("don_print");
  change7.classList.add("don_print");
  window.print();
}
function generatePdf1() {
  var change=document.getElementById("first-part");
  var change2=document.getElementById("display");
  var change3=document.getElementById("display2");
  var change4=document.getElementById("mini-header");
  var change5=document.getElementById("icon1");
  var change6=document.getElementById("icon2");
  var change7=document.getElementById("icon3");

  change.classList.add("don_print");
 // change1.classList.add("don_print");
  change2.classList.add("don_print");
  change3.classList.add("don_print");
  change4.classList.add("don_print");
  change5.classList.add("don_print");
  change6.classList.add("don_print");
  change7.classList.add("don_print");
  window.print();
  document.reset();
}