const prompt = require('prompt-sync')();

let enter = prompt("Enter role : ")
switch(enter){
    case "admin":
        console.log("Full access granted")
    break;
    case "editor":
        console.log("Editor access granted: You can edit content")
    break;
    case "viewer":
        console.log("Read-only access granted")
    break;
    default:
        console.log("Access denied: Unknown role")
}
//npm init -y