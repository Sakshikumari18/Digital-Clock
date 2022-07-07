setInterval(() => {
    let a= new Date();
      let min = a.getMinutes();
      let hou =a.getHours();
      let sec =  a.getSeconds();

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
let date = a.toLocaleDateString(undefined, options);
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;
hou = (hou < 10) ? "0" + hou : hou;

     let time = hou+ ':' + min + ':' +sec;
      document.getElementById("Time").innerHTML = time + "<br> on " + date;
  }, 1000);
  

  function calTime(city, offset) {
    var b=new Date()
    var utc= b.getTime()+(b.getTimezoneOffset()*60000);
    var nd= new Date(utc+(3600000*offset));
    return "the local time "+city+" is"+nd.toLocalString();
  }
  document.getElementById("TUT").innerHTML = calcTime('argentina','-3');