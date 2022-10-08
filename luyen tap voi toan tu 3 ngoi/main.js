// a=prompt('Nhap a');
// b=prompt('Nhap b');
// result =(a+b<4)? 'Below' : 'Over';
// document.write(result);


let login = prompt('Enter:');
let message = (login == 'Employee')? 'Hello' :
              (login == 'Director')? 'Greetings' :
                  (login == '')? 'No login' :
                      '';
alert(message);
