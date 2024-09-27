let number=38;//current number of download

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("form");
    if (localStorage.getItem('day')) {
      document.getElementById("day").value = localStorage.getItem('day');
      document.getElementById("task").value = localStorage.getItem('task');
      document.getElementById("idbox").value = localStorage.getItem('idbox');
      document.getElementById("time").value = localStorage.getItem('time');

    }//displays current data in the fields even after refresh
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // prevent default form submission
  
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
  document.getElementById("display").innerHTML= bigdata;
     
  });
});
