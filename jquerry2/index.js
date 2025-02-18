console.log("mukdik")


$.ajax({url:"https://fakestoreapi.com/products",
    dataType:"json",
    success:function(data){console.log(data);
        data.forEach(product => {
         console.log(product);   
         let kartya=termekKartya(product.title,product.image,product.description);
         $("#termekLista").append(kartya);
        });
    }

    
})

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

    let kep=jQuery("<img>")
    kep.prop("src",kepURL)
    kep.prop("class","card-img-top")
    kep.prop("style","width: 18rem")
    kep.prop("alt",nevURL)

    let nev=jQuery("<h5>")
    nev.prop("class","card-title")
    nev.html(nevURL)

    let leiras=jQuery("<p>")
    leiras.prop("class","card-text")
    leiras.html(leirasURL)

    keret.append(kep)
    keret.append(nev)
    keret.append(leiras)
    return keret;
    
}