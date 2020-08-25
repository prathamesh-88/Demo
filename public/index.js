$(".element").on("click",() =>{
    console.log("clicked");
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else{
        $(this).addClass("active");
    }

    //  $(".element").removeClass("active");
    //  $(this).addClass("active");
    
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
    $("#resultdisp").text(age);
}

$("#result").on("click",calculate)