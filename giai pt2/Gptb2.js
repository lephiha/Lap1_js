function show(id) {
    var a = document.myform.so1.value;
    if (a=="") {
        alert("Mời bạn nhập hệ số thứ 1");
        return;
    }
    var b = document.myform.so2.value;
    if (b =="") {
        alert("Mời bạn nhập hệ số thứ 2");
        return;
    }
    var c = document.myform.so3.value;
    if (c =="") {
        alert("Mời bạn nhập hệ số thứ 2");
        return;
    }

    var D = b * b - 4 * a* c;
    if (D < 0) {
        document.getElementById(id).innerHTML = " <h2 align='center'>Phương trình vô nghiệm !</h2>";
    }

    if (D == 0) {
        var x = -b / (2*a);
        document.getElementById(id).innerHTML = "<h2 align='center'> Phương trình có nghiệm kép: x1 = x2 = " + x + "</h2>";
    }

    if (D > 0) {
        var x1 = (-b + Math.sqrt(D)) / (2 * a);
        var x2 = (-b - Math.sqrt(D)) / (2 * a);
        document.getElementById(id).innerHTML = "<h2 align='center'> Phương trình có 2 nghiệm: " + "<BR>" + "x1 = " + x1 + "<br>x2= " + x2 + "</h2>";
    }
}