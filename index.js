$('.gallery img').on('click', function(){
    let imageAddress = $(this).attr('src');
    $('showroom img').attr('src', imageAddress);
    $('showroom img').removeClass('escondido');
    $('showroom p').addClass('escondido');
}