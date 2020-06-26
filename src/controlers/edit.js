var userActive = localStorage.getItem("user_active");
console.log(userActive=="null")
if(userActive == "null"){
    $(location).attr('href',"../templates/login.html");
}else{
    var usuarios =  JSON.parse(localStorage.getItem("users"));
var usuarioEdit =  JSON.parse(localStorage.getItem("user_edit"));

$("#Password").val(usuarioEdit.Pasword);
$("#ConfirmPassword").val(usuarioEdit.Pasword);
$("#Email").val(usuarioEdit.Corero);
$("#Usuario").val(usuarioEdit.Usuario);
$("#Nombre").val(usuarioEdit.Nombre);

$("#register").on("click",function (){
  var valid = validarDatos(nombre,usuario,contrasena,comfirmContrasena,correo);
  var contrasena = $("#Password").val();
  var comfirmContrasena = $("#ConfirmPassword").val();
  var correo = $("#Email").val();
  var usuario =  $("#Usuario").val();
  var nombre =  $("#Nombre").val();
  if(valid){
    if(comfirmContrasena ==contrasena){
        var puedeCrear = true;
        for(var i = 0; i < usuarios.length;i++){
            if(usuarios[i].Usuario == usuario){
                usuarios[i].Usuario = usuario;
                usuarios[i].Nombre = nombre;
                usuarios[i].Pasword = contrasena;
                usuarios[i].Correo = correo;
            }
        }
        localStorage.setItem("users",JSON.stringify(usuarios));
        $(location).attr('href',"../templates/table.html");

    }else{
        $("#mensaje").html('<div class="alert alert-danger">Las contraseñas no coinciden</div>' );    
    }
  }
  
});
function validarDatos(nombre,usuario,contrasena,contrasena2,correo){
    if(nombre ==""){
        $("#mensaje").html('<div class="alert alert-danger">Debe diligenciar el nombre</div>' ); 
        return false;
    }else if(usuario==""){
        $("#mensaje").html('<div class="alert alert-danger">Debe diligenciar el usuario</div>' ); 
        return false;
    }else if(contrasena==""){
        $("#mensaje").html('<div class="alert alert-danger">Debe diligenciar la contraseña</div>' ); 
        return false;
    }else if(contrasena2==""){
        $("#mensaje").html('<div class="alert alert-danger">Debe diligenciar la confirmación de la contraseña</div>' ); 
        return false;
    }else if(correo==""){
        $("#mensaje").html('<div class="alert alert-danger">Debe diligenciar el correo</div>' ); 
        return false;
    }
    return true;
}
$("#salir").on("click",function (){
    $(location).attr('href',"../templates/table.html");
    
});
}