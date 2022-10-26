var t = null;
function time() {
    dt = new Date();
    var y = dt.getFullYear();
    var M = dt.getMonth() + 1;
    var d = dt.getDate();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    M = checkTime(M);
    d = checkTime(d);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    $('.time_econd').html(h + ":" + m);
    $('.time_moon').html(M + "月" + d + "日");
    t = setTimeout(time, 1000);
}

function clock() {
    var time = new Date();
    var week;
    switch (time.getDay()) {
        case 1: week = "星期一"; break;
        case 2: week = "星期二"; break;
        case 3: week = "星期三"; break;
        case 4: week = "星期四"; break;
        case 5: week = "星期五"; break;
        case 6: week = "星期六"; break;
        default: week = "星期天";
    }
    document.getElementById("clock").innerHTML = week;
}
setInterval(clock, 0);

window.onload = function () {
    time()
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}