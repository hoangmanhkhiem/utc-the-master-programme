window.addEventListener("scroll", function () {
    var fullHeight = document.documentElement.scrollHeight;

    var visibleHeight = window.innerHeight;

    var scrollPosition = window.scrollY;

    if (scrollPosition + visibleHeight >= fullHeight - 200) {
        document.querySelector(".course-container-fixed").style.marginTop =
            "-150px";
    } else if (scrollPosition === 0) {
        document.querySelector(".course-container-fixed").style.marginTop = "10px";
    } else
        document.querySelector(".course-container-fixed").style.marginTop = "0";
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector(".burgers_open").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".burgers_open").style.display = "block";
}
