var yosh = +prompt("Yoshingizni kiriting:");

    if (yosh >= 1 && yosh < 18) {
        alert("Siz hali o'qishingiz kerak");
    }else if (yosh >= 18 && yosh < 50) {
        alert("Siz ishlashingiz kerak");
    }else if (yosh >= 50 && yosh < 60) {
        alert("Siz pensiyaga chiqishingizga yaqin qolibdi");
    }else if (yosh >= 60 && yosh <= 99) {
        alert("Siz pensiya yoshidasiz");
    }else {
        alert("Iltimos yosh kiriting");
    }