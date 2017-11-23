// accordion

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
    };
}


// Create Event Listener

document.getElementById('btn').addEventListener
('click', loadText);

function loadText(){
    // Create XHR Object
    var xhr = new XMLHttpRequest();

    // open -> type, url, async
    xhr.open('GET', 'http://design.propcom.co.uk/buildtest/accordion-data.json', true)

    console.log('Ready State: ', xhr.readyState);
    //Http Status Codes

    //200: 'Ok'
    //403: 'Forbidden'
    //404: 'Not Found'

    // Ready State Vals

    // 0: request not initilized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready


    xhr.onreadystatechange = function(){

        console.log('Ready State: ', xhr.readyState);
            var headers = JSON.parse(this.responseText);
        document.getElementById('btn').innerHTML = headers.blocks[0].heading;
        document.getElementById('btn2').innerHTML = headers.blocks[1].heading;
        document.getElementById('btn3').innerHTML = headers.blocks[2].heading;
        document.getElementById('cnt').innerHTML = headers.blocks[0].content;
        document.getElementById('cnt2').innerHTML = headers.blocks[1].content;
        document.getElementById('cnt3').innerHTML = headers.blocks[2].content;



    };
};
    //send request
//xhr.send();

