// event pada link saat di klik
$('.page-scroll').on('click', function(e){
    //ambil isi href
    var tujuan = $(this).attr('href');
    //ambil elemen
    var elemenTujuan =$(tujuan);

    //pindahkan scroll
   $('body,html').animate({
       scrollTop : elemenTujuan.offset().top - 50
   },1000);

    e.preventDefault();
});