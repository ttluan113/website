function HackCaiLon() {
    setInterval(function() {
    var before = new Date().getTime();
    debugger;
    var after = new Date().getTime();
    if (after - before > 200) {
        document.querySelector("html").innerHTML = "";
        window.location.reload(true);
    }
    }, 100);
}

export default HackCaiLon;