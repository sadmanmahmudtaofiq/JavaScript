"use strict";

const URL = `https://fakestoreapi.com/products/`;



const getData = async () => {
  let response = await fetch(URL);
  let data = await response.json();
  createElement(data)
};

function createElement(data){

    var getData = data;
    var getContainer = document.querySelector(".container");

    getData.forEach(function(data){

        console.log(data);

        var items = `<section>
          <div class="image">
            <img
              src="${data.image}"
              alt=""
            />
          </div>
          <div class="info">
            <p class="title" title="">
              ${data.title}
            </p>
            <div class="rating">
              <img
                class="ratingImg"
                src="https://sadmanmahmudtaofiq.github.io/Amazon/Photos/rating-45.png"
                alt=""
              />
              <p class="ratingText" title="">${data.rating.count}</p>
            </div>
            <p class="price" title="">$${data.price}</p>
          </div>
          <div class="btn">
            <button title="Add to Cart">Add to Cart</button>
          </div>
        </section>`


        getContainer.innerHTML += items
        
    })


}


getData();