var myImage=document.getElementById("cisbg");
var arr = ["Photos/CIS.jpg","Photos/CO.jpg"];
var imageIndex=0;

function ChangeImage () {
	// body...
	myImage.setAttribute("background",arr[imageIndex]);
	imageIndex++;
	if (imageIndex>=arr.length) {
		imageIndex=0;
	}

}

setInterval(ChangeImage,5000);




