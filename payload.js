function fetchSysInfo() {
  fetch('https://raw.githubusercontent.com/anonmousrdp2/anonmousrdp2/main/sysinfo.php')
    .then(response => response.json())
    .then(data => {
      // Create a new div element to display the information
      var div = document.createElement('div');
      div.style.position = 'fixed';
      div.style.bottom = '0';
      div.style.right = '0';
      div.style.backgroundColor = 'white';
      div.style.border = '1px solid black';
      div.style.padding = '10px';
      div.style.zIndex = '9999';
      div.innerHTML = '<h3>Server Information:</h3>' + 
                       '<pre>' + JSON.stringify(data, null, 2) + '</pre>';

      document.body.appendChild(div);
    })
    .catch(error => {
      console.error('Error fetching system information:', error);
    });
}

window.addEventListener('load', function() {
  fetchSysInfo();
});
