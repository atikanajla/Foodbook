// SET FOOTER YEAR
let curYear = document.getElementById('year');
curYear.innerHTML = new Date().getFullYear();

//ANIMATION FOR ARTICLE HEADER
let articleHeader = document.querySelectorAll(".article-header");

articleHeader.forEach(item => {
    item.addEventListener("mouseover", function(){
        item.firstElementChild.style.transform = 'translateX(0)';
        item.lastElementChild.style.transform = 'translateX(0)';
    })
})

articleHeader.forEach(item=>{
    item.addEventListener("mouseout", function(){
        item.firstElementChild.style.transform = 'translateX(-100%)';
        item.lastElementChild.style.transform = 'translateX(100%)';
    })
})

// const tastyPrlx = document.querySelector(".tasty-section");
// const blogPrlx = document.querySelector(".blog-event-section");

// window.addEventListener("scroll", function(){
//     let offset = window.pageYOffset;
//     tastyPrlx.style.backgroundPositionY = offset * .1 + 'px';
//     blogPrlx.style.backgroundPositionY = offset * .1 + 'px';
// })