var columns = document.getElementsByClassName("column");
for(var i = 0; i < columns.length; i++){
	columns[i].firstElementChild.onclick = function () {
        location.href = "http://www.michiganroadreform.org";
    };
}
console.log("running");