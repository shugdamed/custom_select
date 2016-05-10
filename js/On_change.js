$(function(){


    // récupération des valeurs

    var couleur=$('#wrapper #couleur').val();
    var forme=$('#wrapper #forme').val();

    // création de la forme
    $('#wrapper #forme').change(function(){
        if($(this).val()=='carre') {
            $('#custom_shape').css('height', '25px').css('width', '25px').css('border-radius', '0');
        }else{
            $('#custom_shape').css('height', '25px').css('width', '25px').css('border-radius', '50%');
        }
    });//click couleur
    $('#wrapper #couleur').change(function(){
        if($(this).val()=='rouge') {
            $('#custom_shape').css('background-color','red');

        }else{
            $('#custom_shape').css('background-color','green');
        }
    });



}); //fin listener final