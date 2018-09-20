$(".folder1").hide();
onload = function() {
    var as = document.getElementsByName("documents");
    var folder1 = document.getElementsByName("folder_open1");
    var arr = [];
    var arrf1 = [];
    for (var i = 0; i < as.length; i++) {
        arr.push(as[i]);
    }
    for (var i = 0; i < folder1.length; i++) {
        arrf1.push(folder1[i]);
    }
    var reg = /[&\|\\\*^/="%$#@<>\-]/g;
    var sortfunc = function(a, b) {
        var af = a.innerHTML.replace(reg, "");
        var bf = b.innerHTML.replace(reg, "");
        if (af.localeCompare(bf) > 0) {
            return 1;
        } else if (af.localeCompare(bf) < 0) {
            return -1;
        } else {
            return 0;
        }
    }
    arr.sort(sortfunc);
    arrf1.sort(sortfunc);
    for (var i = 0; i < arr.length; i++) {
        dd.appendChild(arr[i]);
    }
}


$("#folder1").on("click", function(event){
    $(this).toggleClass("opened");
    $(".folder1").fadeToggle(400);
    if ($(this).hasClass("opened")) {
        $("#folder1").children('img').attr("src", "../../images/folder_open.svg");
    }
    else{
        $("#folder1").children('img').attr("src", "../../images/folder.svg");
    }
    event.stopPropagation();
});
// var folder1 = document.getElementById("folder1")
// var folder_open1 = document.getElementById("folder_open1")
// folder.onclick = function () {
//     document.getElementById("folder1").style.visibility="hidden";
// }
        // var tag1 = document.getElementByClassName("folder1")
        // tag1.addEventListener("click", function(){
        // 	if (getAttribute("id") == "folder";)
        // 		{tag1.setAttribute("id", "folder_open")}
        // });
