$("#login_form").on("click", function(form){
    var usuario = $("#Usuario").val();
    var password = $("#Password").val();
    console.log(usuario);
    var usuarios =  JSON.parse(localStorage.getItem("users"));
    console.log(usuarios);
    var show = true;
    for(var i = 0; i < usuarios.length; i++){
        var currentUser = usuarios[i];
        if(currentUser.Usuario == usuario){
            localStorage.setItem("user_active",currentUser.Nombre);
            $(location).attr('href',"../templates/table.html");
            show = false;

        }
    }
    if(show){
        $("#mensaje").html('<div class="alert alert-danger">Usuario o contraseña invalido</div>' )
    }
    
})

$("#register").on("click",function (){
    $(location).attr('href',"../templates/register.html");

})