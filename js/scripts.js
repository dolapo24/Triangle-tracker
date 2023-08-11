$(document).ready(function() {
    $("form#triangle").submit(function(e){
    $("#checkbutton").click(function() {
     
   
        

 console.log
 let side1 = parseInt($("#first").val());
 let side2 = parseInt($("#second").val());
 let side3 = parseInt($("#third").val());


        if(side1 === side2 && side2===side3){
            console.log('euilatral ')
            $("#result").text("It's an equilateral triangle"); 
        }else if(side1===side2 || side1===side3 || side2===side3) {
            console.log('isoceles ')
            $("#result").text("It's an isoceles triangle")
        }else{
            console.log('scalene triangle ')
            $("#result").text("It's a Scalene triangle")
        }
    })

     e.preventDefault();

    });              
});   
