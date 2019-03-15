(function($) {

    $(".toggle-password").click(function() {

        $(this).toggleClass("zmdi-eye zmdi-eye-off");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });


    // // toggle password visibility
    // $('#password + .glyphicon').on('click', function() {
    //   $(this).toggleClass('glyphicon-eye-close').toggleClass('glyphicon-eye-open'); // toggle our classes for the eye icon
    //   $('#password').togglePassword(); // activate the hideShowPassword plugin
    // });
})(jQuery);
