function parse() {
    // Step 1: create instance of object
    request = new XMLHttpRequest();
    
    // Step 2: create or open HTTP request
    request.open("GET", "data.json", true);
//  request.open("GET", "http://messagehub.herokuapp.com/messages.json", true);
    
    // Step 3: Set up way to manage response --to a function
    request.onreadystatechange = parseData;
    
    // Step 4: Execute the request
    request.send();
}

function parseData() {
    if (request.readyState == 4) {
        var message_data = JSON.parse(request.responseText);
        for (var i in message_data)
            document.getElementById("messages").innerHTML += "<p>" + message_data[i].username + ": " + message_data[i].content + "</p>\n";
    }
}

