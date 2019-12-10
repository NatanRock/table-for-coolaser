import "./styles.css";

// let priceTitle = $('.price-title');
// priceTitle.onclick = f1;
// function f1() {
//   let ths = $(this);
//   ths.toggleClass('on').next().slideToggle(400);
//   priceTitle.not(ths).removeClass('on').next().slideUp(400);

//   setTimeout(function() {
//     if (ths.hasClass('on')) {
//       $('html, body').animate({
//         scrollTop: ths.offset().top - $('.fixed-menu').outerHeight() - 10
//       }, 400);
//     }
//   }, 400);

// }

document.querySelectorAll(".price-item").forEach(function(pricelist) {
  let controlls = pricelist.querySelectorAll(".price-title");

  let priceBlock = pricelist.querySelectorAll(".price-content");

  priceBlock.forEach(function(elemBlock, i) {
    controlls.forEach(function(el, index) {
      el.addEventListener("click", event => {
        let currentClick = event.target;

        currentClick.classList.toggle("active-pr");

        if (currentClick.classList.contains("active-pr")) {
          elemBlock.style.maxHeight = elemBlock.scrollHeight + "px";
        } else {
          elemBlock.style.maxHeight = "0px";
        }
      });
    });
  });
});
