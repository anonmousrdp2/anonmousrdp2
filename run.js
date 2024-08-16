// Function to fetch data from the PHP file
function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/anonmousrdp2/anonmousrdp2/main/who.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Output the result in the console or display it on the page
            console.log(xhr.responseText);
            // Example of appending the response to the body
            var p = document.createElement("p");
            p.textContent = xhr.responseText;
            document.body.appendChild(p);
        }
    };
    xhr.send();
}

// Call the function to execute the PHP file
fetchData();
