function menuToggle() {
    let toggleMenu = document.querySelector(".menu");
    let hamburger_menu = document.querySelector(".hamburger_menu").style;
    let menu_list = document.querySelector(".menu_list").style;
    let line1 = document.querySelector(".line:nth-child(1)").style;
    let line2 = document.querySelector(".line:nth-child(2)").style;
    let line3 = document.querySelector(".line:nth-child(3)").style;
    toggleMenu.classList.toggle("toggle");

    if (toggleMenu.classList.contains("toggle")) {
        line1.transform = "rotate(45deg)";
        line2.transform = "rotate(315deg)";
        line2.margin = "-7px -3px";
        line3.display = "none";
        hamburger_menu.top = "30px";
        hamburger_menu.right = "-40px";
        hamburger_menu.left = "initial";
        menu_list.display = "list-item";
    } else {
        line1.transform = "initial";
        line2.transform = "initial";
        line2.margin = "initial";
        line3.display = "initial";
        hamburger_menu.top = "20px";
        hamburger_menu.left = "10px";
        menu_list.display = "none";
    }
}