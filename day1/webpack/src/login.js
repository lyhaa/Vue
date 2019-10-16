     let z = '';
     let m = '';
     $("#inputEmail,#inputPassword").blur(function () {
         if ($("#inputEmail").val().length >= 6 && $("#inputPassword").val().length >= 6) {
             z = $("#inputEmail").val();
             m = $("#inputPassword").val();
         }
     })
     $(".bt").click(() => {
         if (z && m) {
             let data = {
                 username: z,
                 psw: m
             };
             $.ajax({
                 type: "post",
                 url: "http://127.0.0.1:5555/lg",
                 data: data,
                 dataType: "text",
                 success: function (res) {
                     if (res == "登录成功") {
                         $(".alert").eq(0).css("display", "block").text(res);
                         var tim = setTimeout(() => {
                             $(".alert").eq(0).css("display", "none");
                             clearTimeout(tim);
                         }, 1500);
                     } else {
                         $(".alert").eq(1).css("display", "block").text(res);
                         var tim = setTimeout(() => {
                             $(".alert").eq(1).css("display", "none");
                             clearTimeout(tim);
                         }, 1500);
                     }
                 }
             })
         } else {
             alert("请填好资料");
         }
         $("#inputEmail").val("");
         $("#inputPassword").val("");
     })
     $(".bt2").click(() => {
         if (z && m) {
             let data = {
                 username: z,
                 psw: m
             };
             $.ajax({
                 type: "post",
                 url: "http://127.0.0.1:5555/reg",
                 data: data,
                 dataType: "text",
                 success: function (res) {
                     if (res == "注册成功") {
                         $(".alert").eq(0).css("display", "block").text(res);
                         var tim = setTimeout(() => {
                             $(".alert").eq(0).css("display", "none");
                             clearTimeout(tim);
                         }, 1500);
                     } else {
                         $(".alert").eq(1).css("display", "block").text(res);
                         var tim = setTimeout(() => {
                             $(".alert").eq(1).css("display", "none");
                             clearTimeout(tim);
                         }, 1500);
                     }
                 }
             })
         } else {
             alert("请填好资料");
         }
         $("#inputEmail").val("");
         $("#inputPassword").val("");
     })
 