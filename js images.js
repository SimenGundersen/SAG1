// Define the image elements
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

// Define the image sources
let image1Src = "image1.jpg";
let image2Src = "image2.jpg";
let image3Src = "image3.jpg";

// Function to set the source of an image when pressed
function setImage(image) {
    if (image == "image1") {
        image1.src = image1Src;
    } else if (image == "image2") {
        image2.src = image2Src;
    } else if (image == "image3") {
        image3.src = image3Src;
    }
}

// Function to return the name of an image
function getImageName(image) {
    if (image == image1) {
        return "image1";
    } else if (image == image2) {
        return "image2";
    } else if (image == image3) {
        return "image3";
    }
}

image1.addEventListener("click", function(){
    setImage("image1");
});
