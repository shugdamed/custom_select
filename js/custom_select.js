$(function(){
    //$('.custom_select').hide().after('<div class="select"></div>');
    //$('.select').append('<div class="value"></div><ul></ul>')

    $('.custom_select').each(function(index){

        var optionList = $(this).find('option');
        var ulStr = '<ul>';
        for(var i= 0; i<optionList.length;i++){
            ulStr += '<li option-value="' + optionList[i].value + '">';
            ulStr +=optionList[i].text + '</li>';
        }
        ulStr += '</ul>';

        var html = '<div class="select">';
        html += '<div class="value">' + optionList[0].text + '</div>';
        html += ulStr;
        html += '</div>';

        $(this).hide().after(html);
    });

    //event delegation
    //je vais ecouter des evennements de click sur les elements qui n'existe,t pas encore
    $('body').on('click', '.select .value', function(){
        $(this).next().toggle();

    });


    //event delegation
    $('body').on('click', '.select ul li', function(){

        var optionValue = $(this).attr('option-value');
        var optionText = $(this).html();

        $(this).parent().prev().html(optionText); //modifie la valeur selectionnée
        $(this).parent().parent().prev().val(optionValue); //modifie la valeur du select cahcé
        $(this).parent().hide(); //cache le UL pere

    });
});