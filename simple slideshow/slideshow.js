var anhAr = new Array(5);
var currentIndex = 0;
function loadAnh() {
    for (var i = 0; i < anhAr.length; i++) {
        anhAr[i] = new Image();
        anhAr[i].src = "anh" + i + ".jpg";
    }
}
function next() {
    if(currentIndex < anhAr.length - 1) {
        document.getElementById("b1").disabled = false;
        currentIndex++;
        document.getElementById("hoa").src = anhAr[currentIndex].src;

    }else {
        document.getElementById("b2").disabled = true;
    }
}

function back() {
    if(currentIndex > 0) {
        document.getElementById("b2").disabled = false;
        currentIndex--;
        document.getElementById("hoa").src = anhAr[currentIndex].src;
    }
    else {
        document.getElementById("b1").disabled = true;
    }
 }