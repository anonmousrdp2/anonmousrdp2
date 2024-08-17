function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://anonmousrdp2.github.io/who.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            var p = document.createElement("p");
            p.textContent = xhr.responseText;
            document.body.appendChild(p);
        }
    };
    xhr.send();
}

fetchData();
