var animalName = prompt("What is your favourite animal Cat or Dog ?");

function writeAnimal(animal)
{
while(!(animal.toLowerCase()=="cat" || animal.toLowerCase()=="dog"))
{
    animal = prompt("What is your favourite animal Cat or Dog ?");
}
return animal;
}

function checkAnimal(animal)
{
if(animal.toLowerCase() == "cat")
{
    var image = "<img src='images/cat.jpg'>";
    
}
else
{
    var image = "<img src='images/dog.jpg'>";
    
}
return image;
}

function repeatImg(image)
{
var counter = 0;
var imageSum = "";
counter = prompt("How many times you want to show the animal image ?");

while(counter >= 1 )
{
    imageSum = imageSum + image;
    counter -- ;
}
return imageSum;
}

var animalName = writeAnimal(animalName);

var imageName  = checkAnimal(animalName);

var imageNumber = repeatImg(imageName);

document.write(imageNumber);