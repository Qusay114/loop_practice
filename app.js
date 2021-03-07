var animalName = prompt("What is your favourite animal Cat or Dog ?");

while(!(animalName.toLowerCase()=="cat" || animalName.toLowerCase()=="dog"))
{
    animalName = prompt("What is your favourite animal Cat or Dog ?");
}

if(animalName.toLowerCase() == "cat")
{
    var image = "<img src='images/cat.jpg'>";
}
else
{
    var image = "<img src='images/dog.jpg'>";
}

document.write(image);

var counter = 0;
var imageSum = "";
counter = prompt("How many times you want to show the animal image ?");

while(counter > 0 )
{
    imageSum = imageSum + image;
    counter -- ;
}

document.write(imageSum);