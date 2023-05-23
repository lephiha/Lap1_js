function send () {
    var arr = document.getElementsByTagName('input');
    var ar = document.getElementsByTagName('option');
    var name = arr[0].value;
    var password = arr[1].value;
    var address = arr[3].value;

    var check1 = arr[4].checked;
    var check2 = arr[11].checked;
    var check3 = arr[12].checked;
    var check4 = arr[13].checked;
    var check5 = arr[14].checked;

    var gender ="";


    var skill = "";

    var job = "";
    var hobbies = "";

    if (arr[7].checked) {
        skill = "Normal";
    }else if (arr[8].checked){
        skill = "Good";
    }
    else if (arr[9].checked){
        skill = "Very Good";
    }
    else if (arr[10].checked){
        skill = "Excellent";
    }

    for (var i = 11; i <= 15;i++) {
        if (arr[i].checked){
            hobbies = hobbies + arr[i].value + " ";
        }
    }


    if (arr[4].checked){
        gender = "Male";
    }else {
        gender = "Female";
    }
    if (name == "" || password == "" || address == "") {
        alert("please fill all fields");
        return;
    } 

    if (check1||check2||check3||check4||check5) {
        check1 = "Đã kết hôn";
    }
    else {
        alert("least one check required");
        return;
    }

    if (ar[0].selected) {
        job = "Công nghệ thông tin";
    }
    else if (ar[1].selected){
        job = "Cơ Khí"
    }
    else if (ar[2].selected){
        job = "Điện Tử"
    }
    else if (ar[3].selected){
        job = "Kinh Doanh"
    }

    var choice = confirm('confirm your information\n'+ "Username: "+name +"\n"+ "Password: "+password +"\n"+ "Address: "+address+"\n"+ "Tình trạng hôn nhân: "+check1+"\n"+"Gender: "+gender +"\n"+"Skill: "+skill +"\n"
    +"Job: " +job+"\n" +"Hobbies: "+hobbies +"\n");
    if(choice == 1) {
        alert("information sent successfully");
    }
}
function resetForm() {
    document.getElementsByTagName('form')[0].reset();
}  