var myImage=document.getElementById("back1");
var arr = ["Photos/AA.jpg","Photos/10.jpg","Photos/F2.jpg"];
var imageIndex=0;

function ChangeImage () {
	// body...
	myImage.setAttribute("background",arr[imageIndex]);
	imageIndex++;
	if (imageIndex>=arr.length) {
		imageIndex=0;
	}

}

setInterval(ChangeImage,2000);