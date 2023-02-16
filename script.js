/// <reference path="./jquery-3.6.3.min.js" />

// empty jquery set -> $()
$(function(){
  const container = $("#promo-container")


  const images = $(".promoimg")
  images.hide()
  //indeks
  let index = 0
  let length = images.length
  let dots = $(".dot")
  images.eq(index).show()

  function showSlides() {//automatic slide show
    images.eq(index).hide()
    dots[index].className = dots[index].className.replace(" active", "");

    if(++index >= length)index -= length
    console.log(index)

    //tampilkan gambar dan dots
    images.eq(index).show()
    dots[index].className += " active";

    setTimeout(showSlides, 2000); //
  }


  $("#left").on("click", function(){
    //hide image index dan dots sebelumnya
    images.eq(index).hide()
    dots[index].className = dots[index].className.replace(" active", "");
    //ubah index
    if(--index < 0)index += length
    console.log(index)

    //tampilkan gambar dan dots
    images.eq(index).show()
    dots[index].className += " active";
  })

  $("#right").on("click", function(){
    //hide image dan dots index sebelumnya
    images.eq(index).hide()
    dots[index].className = dots[index].className.replace(" active", "");

    if(++index >= length)index -= length
    console.log(index)

    //tampilkan gambar dan dots
    images.eq(index).show()
    dots[index].className += " active";
    
  })

  showSlides()
  




})


