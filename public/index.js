$(".element").on("click",function(){
    console.log("clicked");
    $(".element").removeClass("active");
    $(this).addClass("active")
});

const calculate = ()=>{
    let date = new Date($("#date").val());
    let tdate = new Date();
    let age = tdate.getFullYear()-date.getFullYear();
    if(tdate.getMonth() < date.getMonth()){
        age--;
    }
    else if (tdate.getMonth() == date.getMonth()){
        if(tdate.getDate() < date.getDate())
            age--;
    }
    $("#resultdisp").text(`You are ${age} years old`);
}

$("#result").on("click",calculate)
