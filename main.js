var img = document.getElementById("showimg");

function random(){
    var number = parseInt(10*Math.random());
    if (number == 0)
    {
        img.src = "./img/test1.jpg";
    }
    if (number == 1)
    {
        img.src = "./img/test2.jpg";
    }
    if (number == 2)
    {
        img.src = "./img/test3.jpg";
    }
    if (number == 3){
        img.src = "./img/test4.jpg";
    }
    if (number == 4){
        img.src = "./img/test5.jpg";
    }
    if (number == 5){
        img.src = "./img/test6.jpg";
    }
    if (number == 6){
        img.src = "./img/test7.jpg";
    }
    if (number == 7){
        img.src = "./img/test8.jpg";
    }
    if (number == 8){
        img.src = "./img/test9.jpg";
    }
    if (number == 9){
        img.src = "./img/test10.jpg";
    }
    

}


function showme(){
    random();
}

showme();