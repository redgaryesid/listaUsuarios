var usuarios =  JSON.parse(localStorage.getItem("users"));
console.log(usuarios)
$("#register").on("click",function (){
  
  var contrasena = $("#Password").val();
  var comfirmContrasena = $("#ConfirmPassword").val();
  var correo = $("#Email").val();
  var usuario =  $("#Usuario").val();
  var nombre =  $("#Nombre").val();
  var valid = validarDatos(nombre,usuario,contrasena,comfirmContrasena,correo);

  if(valid){
    if(comfirmContrasena ==contrasena){
        var puedeCrear = true;
        for(var i = 0; i < usuarios.length;i++){
            if(usuarios[i].Usuario == usuario){
                puedeCrear = false;
            }
        }

        if(puedeCrear){
            var userCreate = {
                "Usuario":usuario,
                "Nombre": nombre,
                "Pasword":contrasena,
                "Corero":correo
            }
            usuarios.push(userCreate);
            localStorage.setItem("users",JSON.stringify(usuarios));
            $(location).attr('href',"../templates/login.html");
        }else{
            $("#mensaje").html('<div class="alert alert-danger">Ya existe un usuario con ese Username</div>' );
        }

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
    localStorage.setItem("user_active",null);
    $(location).attr('href',"../templates/login.html");
    
});