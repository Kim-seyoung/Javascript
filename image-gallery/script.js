var req = new XMLHttpRequest();
req.open("GET", "./json/image_list.json");
req.onreadystatechange = function(){
    if(this.readyState == 4){
        // console.log(this.response);
        var data = JSON.parse(this.response);
        for( var i = 0; i < data.length; i++){
            var div = document.createElement("div");
            div.setAttribute("class", "image");
            div.onclick = function(){
                // if(this.getAttribute("class").indexOf("image-selected") == -1 ) {
                //     this.setAttribute("class", "image image-selected");
                // }
                // else{
                //     this.setAttribute("class", "image");
                // }

                this.classList.toggle("image-selected");
            }
            div.onmouseover = function(){
                var element = this;
                this.timerId = setTimeout( function(){ 
                    element.classList.add("image-magnified"); // setTimeout에서 this는 div가 아니라서 이렇게 작성
                }, 1000);
            }
            div.onmouseout = function(){ // 같은 div - this
                clearTimeout(this.timerId);
                this.classList.remove("image-magnified");
            }

            var img = document.createElement("img");
            img.src = data[i];
            div.appendChild(img);
            document.body.appendChild(div);
        }
    }
}

req.send();

function selectAll(btn){
    var images = document.getElementsByClassName("image");
    for(var i = 0; i < images.length; i++){
        if(btn.value == "Unselected All"){
            images[i].classList.remove("image-selected");
        }
        else{
            images[i].classList.add("image-selected");
        }
    }

    if(btn.value == "Unselected All"){
        btn.value = "Select All";
    }
    else{
        btn.value = "Unselected All";
    }
}

function slideShow(btn){
    var images = document.getElementsByClassName("image");
    var index = 0;

    images[0].classList.add("image-magnified");

    var intervalId = setInterval(function() {
        images[index].classList.remove("image-magnified");
        index++;
        if(index < images.length){
            images[index].classList.add("image-magnified")
        }
        else {
            clearInterval(intervalId);
        }
    }, 1000)
}