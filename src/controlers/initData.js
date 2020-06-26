var users = [{
    "Usuario":"admin",
    "Nombre": "Admin",
    "Pasword":"123",
    "Corero":"a@a.com"
},{
    "Usuario":"guest",
    "Nombre": "Guest",
    "Pasword":"456",
    "Corero":"a@a.com"
},{
    "Usuario":"user",
    "Nombre": "User",
    "Pasword":"789",
    "Corero":"a@a.com"
}];
localStorage.clear();
localStorage.setItem("users",JSON.stringify(users));
$(location).attr('href',"../src/templates/login.html");
