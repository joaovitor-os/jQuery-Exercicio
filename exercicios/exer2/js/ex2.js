$(function() {
    alterarCampos(true)
    $('#firstName').change(function() {
        if($(this).val().length > 0){
            alterarCampos(false)
        }
        else{
            alterarCampos(true)
        }
    });
})

function alterarCampos(param) {
    $('.form-control[id!=firstName], .custom-select, .custom-control-input').attr('disabled', param)
}