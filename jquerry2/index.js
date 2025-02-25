$.ajax({
  url: "https://fakestoreapi.com/products",
  dataType: "json",
  success: function (data) {
      console.log(data);
      data.forEach(product => {
          console.log(product);
          let kartya = termekKartya(product.id,product.title, product.image, product.description);
          $("#termekLista").append(kartya);
      });
  }
});

function termekKartya(id,nev,kepUrl,leiras) {
  let kartya = jQuery("<div>");
  kartya.prop("class","card");
  kartya.addClass("col-3");
  kartya.on("click", function(){togglePopup()});
  
  $.ajax({
      url: "https://fakestoreapi.com/products/id",
      dataType: "json",
      success: function (data) {
          console.log(data);
          let cim=jQuery("<h3>");
          cim.html(data.title)
          $("#termekAdat").append(cim);

          let ar=jQuery("<div>")
          ar.html(data.price);
          $("termekAdat").append()
        }});

  let kep = jQuery("<img>");
  kep.prop("src", kepUrl);
  kep.prop("class", "card-img-top");
  kep.prop("alt", nev);

<<<<<<< HEAD
  let cardBody = jQuery("<div>");
  cardBody.prop("class", "card-body");
=======
function termekKartya(nevURL,kepURL,leirasURL)
{
    /*
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    */
    let keret=jQuery("<div>")
    keret.prop("class","card")
    keret.prop("id","kartya")
    keret.addClass("col-3");
    keret.on("click",function(){alert("safs")})
>>>>>>> bcdda50740f476020ad628f857c8691b6a78d968

  let cardTitle = jQuery("<h5>");
  cardTitle.prop("card-title");
  cardTitle.text(nev);

  let cardText = jQuery("<p>");
  cardText.prop("class", "card-text");
  cardText.text(leiras);

  cardBody.append(cardTitle);
  cardBody.append(cardText);  

  kartya.append(kep);
  kartya.append(cardBody);

  return kartya;

}
function togglePopup() {
  $(".content").toggle();
}