var myImage=document.getElementById("src");
var arr = ["Photos/Ap.jpg","Photos/App.jpg"];
var imageIndex=0;

function ChangeImage () {
	// body...
	myImage.setAttribute("src",arr[imageIndex]);
	imageIndex++;
	if (imageIndex>=arr.length) {
		imageIndex=0;
	}

}

setInterval(ChangeImage,2000);
