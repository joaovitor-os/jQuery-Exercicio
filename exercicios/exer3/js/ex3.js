$(function() {
    $('a[role="button"]').click(function () { 
        $(this).parent().parent().children('.mostrar_texto').toggle(500)
    });
})