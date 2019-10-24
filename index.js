$('.gallery img').on('click', function(){
    let imageAddress = $(this).attr('src');
    $('showroom img').attr('src', imageAddress);
    $('showroom img').removeClass('hidden');
    $('showroom p').addClass('hidden');
})