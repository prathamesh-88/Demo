//Functions
function randomNum(num) {
    return Math.floor(Math.random() * num + 1);
}

function generateRandomColor() {
    var r = randomNum(255);
    var g = randomNum(255);
    var b = randomNum(255);

    return ("rgb(" + r + ", " + g + ", " + b + ")");
}

const calculate = () => {
    let date = new Date($("#date").val());
    let tdate = new Date();
    let age = tdate.getFullYear() - date.getFullYear();
    if (tdate.getMonth() < date.getMonth()) {
        age--;
    } else if (tdate.getMonth() == date.getMonth()) {
        if (tdate.getDate() < date.getDate())
            age--;
    }
    $("#resultdisp").text(`You are ${age} years old`);
}


//Event listeners

$(".element").on("click",function(){
    $(".element").removeClass("active");
    $(this).addClass("active")
});

$("#expand-btn").on("click",function(){
    $('#sidebar').toggleClass("expand");
});

$("#result").on("click",calculate);

$("#changeColor").on("click",function(){
    $("body").css(`background-color` , `${generateRandomColor()}`);
});

if($(window).width()<= 700){
    $(".element").on("click", function () {
        $('#sidebar').toggleClass("expand");
    });

}

$(`input[type=radio]`).on('click',function(){
    console.log($(this).attr('value'));
    $(`body`).css(`background-color`,`${$(this).val()}`);
});

$(".main-collapsible").click(function(){
    console.log("caught");
    $(".main-dropdown").slideToggle(800);
});

$(".02-collapsible").click(function(){
    console.log("caught");
    $(".02-dropdown").slideToggle(800);
});


$(".02-dropdown").slideUp(800);
$(".main-dropdown").slideUp(800);


