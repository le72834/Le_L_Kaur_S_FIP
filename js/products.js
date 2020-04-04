(() => {
  let mediaQueryLarge = window.matchMedia('(min-width:938px)'),
      thumbnail = document.querySelectorAll('.thumbnail'),
      galleryImage = document.querySelector('.galleryImage'),
      productTitle = document.querySelector('#product-info h3'),
      productCopy = document.querySelector('#product-info p'),
      productPrice = document.querySelector('#product-info h4');

//Array
  const productTitleArray = ["Apple Ale", "Apple Wist", "Black Apple"],
        productCopyArray = ["Prominent vanilla layered around Bananas Foster, drizzled with wild honey & freshly picked apples. The palate adds more vanilla with a velvety, whipped spice creaminess, rich and layered on the tongue. The finish is moderate to long for this full-bodied dram with subtle citrus notes followed by dark caramel & more vanilla.", "West Coast American Pale Ales and IPAs have inspired Doc Perdue’s Bobcat. Hops are loaded from top to bottom in this ruby red beer showing off aromatic pine, zest, fresh citrus and tropical fruit. The body is smooth and gently bitter, while the hop aromas are bright and vibrant.", "This New World Hefeweizen combines the best of German wheat beer heritage with brewing innovation. Kelly’s Contraption shows all the elegance and subtlety of a classic Hefeweizen with nuances of new world German hops for added aroma and flavour, without bitterness."],
        productPriceArray = ["Price: $13.00", "Price: $15.00", "Price: $17.00"];



function showLightBox() {

}

function changeProduct() {
  let ref = this.dataset.ref;
  galleryImage.src = `images/${ref}`;

  let count = this.dataset.count;
  productTitle.textContent = productTitleArray[count];
  productCopy.textContent = productCopyArray[count];
  productPrice.textContent = productPriceArray[count];
}



//events
  galleryImage.addEventListener('click', showLightBox);
  thumbnail.forEach(image => {image.addEventListener('click', changeProduct);});


})();
