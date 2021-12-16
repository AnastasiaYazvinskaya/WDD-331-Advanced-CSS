function openSection(id) {
    var element = document.getElementById(id);
    var header = element.getElementsByTagName("H3")[0];
    element.classList.toggle("open");
    header.classList.toggle("open");
}