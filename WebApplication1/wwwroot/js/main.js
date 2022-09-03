
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    //$('.validate-form').on('submit',function(){
    //var check = true;

    //for (var i = 0; i < input.length; i++) {
    //    if (validate(input[i]) == false) {
    //        showValidate(input[i]);
    //        check = false;
    //    }
    //}

    //return check;
    //});


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    $('#click_logar').on("click", function () {

        validaEmail();
        var Email = $('#input_email').val();
        var Senha = $('#input_senha').val();

        alert('sua senha e:' + Senha);


    });

    //function validate (input) {
    //    if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
    //        if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
    //            return false;
    //        }   
    //    }
    //    else {
    //        if($(input).val().trim() == ''){
    //            return false;
    //        }
    //    }
    //}

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    function validaEmail() {
        var Email = $('#input_email').val();
        var Senha = $('#input_senha').val();

        if (Senha.length < 8) {
            $('#divProgramacao').css("display", "block");
            $("#modalConfirmation").modal('show');
        }
    }



})(jQuery);