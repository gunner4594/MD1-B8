let username=prompt("Enter username");

if (username == 'Admin') {
    let password=prompt("Enter password");
    if (password == 'TheMaster') {
        alert('welcome!');
    } else if (password == null) {
        alert('Canceled');
    } else {
        alert('wrong password');
    }
} else if (username == null) {
    alert('canceld');
} else {
    alert("I don't know you");
}