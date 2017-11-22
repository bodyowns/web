var aco = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < aco.length; i++) {
    aco[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}
