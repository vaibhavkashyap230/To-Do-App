"use strict";

var total = 0;
var additem = document.getElementById("add");
additem.addEventListener('click',add);

var removeall  = document.getElementById("remove");
removeall.addEventListener('click',clear);

function clear()
{
    document.getElementById("list").innerHTML = null;
    total = 0;
    document.getElementById("total").innerText="Total items on list = "+total;
}

function add()
{
    var data = document.getElementById("data").value;
    if(data.length==0)
    {
        window.alert("You must enter some data to add to the list.");
        return;
    }

    total+=1;
    var newitem = document.createElement("li");
    newitem.textContent = data;
    document.getElementById("list").appendChild(newitem);

    var del = document.createElement("img");
    del.src = "can.png";
    del.setAttribute('onclick', 'remove(this);');
    var check = document.createElement("img");
    check.src = "checked.png";
    check.setAttribute('onclick', 'check(this);');
    newitem.append(del);
    newitem.append(check);

    document.getElementById("data").value=null;
    document.getElementById("total").innerText="Total items on list = "+total;
}

function remove(element)
{
    var parent = element.parentElement;
    parent.parentElement.removeChild(parent);
    total-=1;
    document.getElementById("total").innerText="Total items on list = "+total;
}

function check(element)
{
    if(element.parentElement.style.backgroundColor == "darkgray")
    {
        element.src = "checked.png";
        element.parentElement.style.backgroundColor = "rgb(245,245,245)";
    }
    else
    {
        element.src = "unchecked.png";
        element.parentElement.style.backgroundColor = "darkgray";
    }
}