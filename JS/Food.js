var myImage=document.getElementById("src");
var arr = ["Photos/F1.jpg","Photos/Fo1.jpg","Photos/Fo2.jpg","Photos/Fo3.jpg"];
var imageIndex=0;

function ChangeImage () {
	// body...
	myImage.setAttribute("src",arr[imageIndex]);
	imageIndex++;
	if (imageIndex>=arr.length) {
		imageIndex=0;
	}

}

setInterval(ChangeImage,5000);









