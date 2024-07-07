//sidenav

$('.openNav').click(function()
{
    $('.sidenav').animate({left:'0px'},800);
    $('#homeContent').animate({marginLeft:'250px'},800)
});

$('.closebtn').click(function()
{
    $('.sidenav').animate({left:'-300px'},800);
    $('#homeContent').animate({marginLeft:'0px'},800)
});

//second section

$('#sliderDown .toggle').click(function()
{
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})

//counter


window.onload=function()
{
    countDown('15 March 2025 10:00');
}



function countDown(countTo)
{

    
let futureDate=new Date(countTo);
futureDate=(futureDate.getTime()/1000);

let now =new Date();
now=(now.getTime()/1000);

timeDifference=(futureDate-now);

let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let min = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let sec = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


$('.days').html(`${days} D`);
$('.hours').html(`${hours} D`);
$('.minutes').html(`${min} D`);
$('.seconds').html(`${sec} D`);

setInterval(function()
{
    countDown(countTo)
},1000)
}



