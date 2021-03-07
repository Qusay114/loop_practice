var animalName = prompt("What is your favourite animal Cat or Dog ?");

while(!(animalName.toLowerCase()=="cat" || animalName.toLowerCase()=="dog"))
{
    animalName = prompt("What is your favourite animal Cat or Dog ?");
}

if(animalName.toLowerCase() == "cat")
{
    var image = "<img src='images/cat.jpg'>";
    var image1 = "<img src='images/cat1.jpg'>";
}
else
{
    var image = "<img src='images/dog.jpg'>";
    var image1 = "<img src='images/dog1.jpg'>";
}

document.write(image1+'<br>');

var counter = 0;
var imageSum = "";
counter = prompt("How many times you want to show the animal image ?");

while(counter > 1 )
{
    imageSum = imageSum + image;
    counter -- ;
}

document.write(imageSum);