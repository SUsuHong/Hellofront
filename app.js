// function hello() {
//     console.log("Hello,JS");
// }
// function getDOM() {
//    var name = document.getElementById("name").innerHTML;
//     console.log("name");
// }
// //set ชื่อเปลี่ยนไปตามที่เรา sety
// function setDOM() {
//    document.getElementById("name").innerHTML = "Hong Sulakkana";
//  }

//  //ดึงค่าจาด text มา 
//  function addHobby() {
//      var newhobby = document.getElementById("newhobby").value;
//      console.log(newhobby);
//      document.getElementById("hobby").innerHTML += "<li>"+newhobby+"</li>"
//  }
//  function clearhoddy() {
//     document.getElementById("hobby").innerHTML = "";
//  }

$(function(){
    $("#hello").click(function(){
        console.log("Hello, jQuery");
        $("#name").addClass("display-1");
        $("#photo").attr("src","images/1.jpg");
    });

    $("#getDOM").click(function(){
        var name = $("#name").html();
        console.log(name);
        
    });
    $("#setDOM").click(function(){
         $("#name").html("Hong Sulakkana");
    });

    $("#addhobby").click(function(){
       var newhobby = $("#newhobby").val();
       $("#hobby").append("<li>" + newhobby + "</li>");
       $("#newhobby").val("");
   });
   
   $("#clear").click(function(){
    $("#hobby").empty()
});

});