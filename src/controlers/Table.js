var userActive = localStorage.getItem("user_active");
console.log(userActive=="null")
if(userActive == "null"){
    $(location).attr('href',"../templates/login.html");
}else{
    var usuarios =  JSON.parse(localStorage.getItem("users"));
    $("#userActive").html(localStorage.getItem("user_active"));
    console.log(usuarios)
    for(var i = 0; i < usuarios.length;i++){
        $("#body").append(
            $("<tr>").append(
                $("<td>").html(usuarios[i].Nombre)
            ).append(
                $("<td>").html(usuarios[i].Usuario)
            ).append(
                $("<td>").html(usuarios[i].Pasword)
            ).append(
                $("<td>").html(usuarios[i].Corero)
            ).append(
                $("<td>").attr("pos",i).append(
                    $("<button>").addClass("btn btn-primary").html('<svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                    <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>\
                    <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>\
                  </svg>').on("click",function (){
                      var index= $(this).parent().attr("pos")
                    localStorage.setItem("user_edit",JSON.stringify(usuarios[index]));
                    $(location).attr('href',"../templates/edit.html");
                  })
                )
            )
          )
    }
    $("#salir").on("click",function (){
        localStorage.setItem("user_active",null);
        $(location).attr('href',"../templates/login.html");
        
    });
}