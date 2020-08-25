$(".element").on("click",(cur) =>{
    console.log("clicked");
    $(".element").removeClass("active");
    $(cur.target.parentNode).addClass("active")
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
