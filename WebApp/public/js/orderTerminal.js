$(document).ready(function(){
    //TODO: Load Config
    var _enableChildren = true
    var numLanes = 4
    for(let i=1; i <= numLanes; i++){
        $(".btn-group").append(`<button id="btn_lane-${i}" type="button" class="btn btn-primary btn-circle btn-md" onclick="selectLane(${i})"">${i}</button>`)
    }
    //TODO: fix
    if (_enableChildren){
        $(".shownWithChildrenEnabled").each(function(){
            this.style.visibility = 'visible'
        });
    }
})

function decrementOrder(portion){
    let tbEl = $(`#tb_orderCount_${portion}`)
    if (tbEl.val() > 0) {
        tbEl.val(parseInt(tbEl.val())-1)
    }
}
function incrementOrder(portion){
    let tbEl = $(`#tb_orderCount_${portion}`)
    tbEl.val(parseInt(tbEl.val())+1)
}
function submitOrder(){
    if ($('.selected').length != 0){
        const selLane = $('.selected')[0].id.split("-")[1]
        const order = {
            timestamp: Date.now(),
            lane: selLane,
            adult: $(`#tb_orderCount_adult`).val(),
            child: $(`#tb_orderCount_child`).val()
        }
        sendJSON(order)
        console.log(order)
    }else{
        alert("Please select a lane")
    }
}

function sendJSON(data){

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           document.getElementById("result").innerHTML =
           this.responseText;
        }
     };
    xmlhttp.open("POST", "http://localhost:8000");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(data));
    
    }
function selectLane(iLane){
    $('.selected').removeClass('selected')
    $(`#btn_lane-${iLane}`).addClass('selected')
}