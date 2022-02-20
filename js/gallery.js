let galleryImages = document.querySelectorAll(".gallery-image");
let getLatestOpenedImage;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
if(galleryImages){
    galleryImages.forEach(function (image, index) {
        image.onclick = function(){
            let getElementUrl = window.getComputedStyle(image).getPropertyValue("background-image");
            let getImgUrlPos = getElementUrl.split("/images/thumbs/thumb");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');
            getLatestOpenedImage = index +1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "/storage/images/gallery/image" + setNewImgUrl);
            newImg.setAttribute("id", "current-image");
            newImg.setAttribute("alt", "A gallery image")

            newImg.onload = function() {
                let imgHeight = this.height;
                let prevBtnText = String.fromCharCode(8249);
                let nextBtnText = String.fromCharCode(8250);
                let imgDesc = document.querySelector(".desc-" + getLatestOpenedImage);
                container.appendChild(imgDesc);
                imgDesc.style.display = "block";

                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode(nextBtnText);
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                //newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode(prevBtnText);
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                //newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
            }
        }
    });
}
function closeImg() {
  
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove(); 
    let currImgDesc = document.querySelector(".desc-" + getLatestOpenedImage);
    currImgDesc.style.display = "none";
}

function changeImg(changeDir){
    document.querySelector("#current-image").remove();
    document.querySelector(".desc-" + getLatestOpenedImage).style.display = "none";
    let containerBody = document.body;
    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
        if(changeDir === 1){
            calcNewImg = getLatestOpenedImage + 1;
            if(calcNewImg > galleryImages.length){
            calcNewImg = 1;
        }
    }
        else if(changeDir === 0){
            calcNewImg = getLatestOpenedImage - 1;
            if(calcNewImg < 1){
            calcNewImg = galleryImages.length;
        }
    }
    newImg.setAttribute("src", "/storage/images/gallery/image" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-image");
    let newImgDesc = document.querySelector(".desc-" + calcNewImg);
    document.body.appendChild(newImgDesc);
    newImgDesc.style.display = "block";

    getLatestOpenedImage = calcNewImg;

    //newImg.onload = function() {
        //let imgWidth = this.width;
        //let paddingBtn = (imgWidth / 2) - 80;
        //let imgHeight = this.height;
        //let calcBtnTop = ((windowHeight - imgHeight) / 2);
        //let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        //let nextBtn = document.querySelector(".img-btn-next");
        //nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
//        nextBtn.style.cssText = "right: " + calcImgToEdge + "px; top: " + calcBtnTop + "px; height: " + imgHeight + "px; padding-left:" + paddingBtn + "px;";

        
        //let prevBtn = document.querySelector(".img-btn-prev");
        //prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";

    }