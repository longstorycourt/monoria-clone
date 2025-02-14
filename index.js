const clothingContent = document.getElementById(`clothing`);
const foodContent = document.getElementById(`food`);
const paintingContent = document.getElementById(`painting`);
const scarfContent = document.getElementById(`scarf`);
const blogContent = document.getElementById(`blogs`);

let clothingitems=[
        {   id:  `001`,
            img: `https://monoria.biz/wp-content/uploads/2024/01/32904-960x640.jpg`,
            name: `Unisex heavy Blend<sup>tm</sup> hooded sweater: Cambodia I love you`,
            price: `24.80$ - 36.84$`,
            link:   `https://monoria.biz/shop/unisex-heavy-blend-hooded-sweatshirt-cambodia-i-love-you/`},
        {   id:  `002`,
            img: `https://monoria.biz/wp-content/uploads/2024/01/61434-960x640.jpg`,
            name: `Apron (AOP) Cambodia I love you`,
            price: `25.60$`,
            link:   `https://monoria.biz/shop/apron-aop-cambodia-i-love-you/`},
        {   id:  `003`,
            img: `https://monoria.biz/wp-content/uploads/2024/01/38191-24-960x640.jpg`,
            name: `Simple but beautiful T-shirt says "Cambodia I love you"`,
            price: `24.80$ - 36.84$`,
            link:   `https://monoria.biz/shop/simple-but-beautiful-t-shirt-says-cambodia-i-love-you/`}
    ];

for(let i=0 ; i<clothingitems.length; i++){
    clothingContent.innerHTML+=`
        <div class="card col-6 col-md-4 border-0 p-3 p-lg-5">
          <a href="${clothingitems[i].link}" class="link-underline link-underline-opacity-0 link-dark fw-normal"><img src="${clothingitems[i].img} " class="card-img-top rounded-0" alt="...">
          <div class="card-body text-center text-uppercase">
            <h5 class="card-title">${clothingitems[i].name}</h5>
            <p class="price text-secondary">${clothingitems[i].price}</p>
            <p class="">Select Options</p></a>
          </div>
        </div>`;}

let foodItems=[
    {   id:  `001`,
        img: `https://monoria.biz/wp-content/uploads/2022/11/A-7.jpg`,
        name: `50 packets of Khmer organic palm sugar (250g)`,
        price: `23.23$`,
        link:   `https://monoria.biz/shop/50-packets-of-khmer-organic-palm-sugar-250g/`},
    {   id:  `002`,
        img: `https://monoria.biz/wp-content/uploads/2022/11/A-3.jpg`,
        name: `10 packets of Khmer Organic Palm Sugar`,
        price: `5.90$`,
        link:   `https://monoria.biz/shop/10-packets-of-khmer-organic-palm-sugar/`}
];
for(let i of foodItems){
    foodContent.innerHTML+=`
        <div class="card col-6 col-md-4 border-0 p-3 p-lg-5">
            <a href="${i.link}" class="link-underline link-underline-opacity-0 link-dark fw-normal">
          <img src="${i.img} " class="card-img-top rounded-0" alt="...">
          <div class="card-body text-center text-uppercase">
            <h5 class="card-title">${i.name}</h5>
            <p class="price text-secondary">${i.price}</p>
            <p class="text-uppercase">Add to cart</p></a>
          </div>
        </div>`;}

let paintingItems=[
    {   id:  `001`,
        img: `https://monoria.biz/wp-content/uploads/2022/11/A-53.jpg`,
        name: `Khmer Painting: Green Temple in Forest for 30cm x 70cm frame`,
        price: `22.50$`,
        link:   `https://monoria.biz/shop/khmer-painting-green-temple-in-forest-for-30cm-x-70cm-frame/`},
    {   id:  `002`,
        img: `https://monoria.biz/wp-content/uploads/2022/11/A-52.jpg`,
        name: `Khmer Painting: Golden temple in forest for 30cm x 70cm frame`,
        price: `22.50$`,
        link:   `https://monoria.biz/shop/khmer-painting-gold-temple-in-forest-for-30cm-x-70cm-frame/`},
        {   id:  `003`,
            img: `https://monoria.biz/wp-content/uploads/2022/11/PT200-007-2-scaled-e1667984618619-1290x860.jpg`,
            name: `Khmer Painting: Sunset village huose for 25cm x 20cm frame`,
            price: `14.50$`,
            link:   `https://monoria.biz/shop/khmer-painting-sunset-village-house-for-25cm-x-20cm-frame/`}
];
for(let i of paintingItems){
    paintingContent.innerHTML+=`
        <div class="card col-6 col-md-4 border-0 p-3 p-lg-5">
        <a href="${i.link}" class="link-underline link-underline-opacity-0 link-dark fw-normal">
          <img src="${i.img} " class="card-img-top rounded-0" alt="...">
          <div class="card-body text-center text-uppercase">
            <h5 class="card-title">${i.name}</h5>
            <p class="price text-secondary">${i.price}</p>
            <p class="text-uppercase">Add to cart</p></a>
          </div>
        </div>`;}

let scarfItems=[
    {   id:  `001`,
        img: `https://monoria.biz/wp-content/uploads/2022/11/A-50.jpg`,
        name: `Big Blue Kroma/ Krama Khmer Scarf made by Cambodian approx. 0.7m x 1.6m`,
        price: `12.12$`,
        link:   `https://monoria.biz/shop/big-blue-kroma-krama-khmer-scarf-made-by-cambodian-approx-0-7m-x-1-6m/`},
    {   id:  `002`,
        img: `https://monoria.biz/wp-content/uploads/2022/11/A-48.jpg`,
        name: `Dark orange, white kroma/ Krama Khmer Scarf made by Cambodian approx. 0.7m x 1.6m`,
        price: `12.12$`,
        link:   `https://monoria.biz/shop/dark-orange-white-kroma-krama-khmer-scarf-made-by-cambodian-approx-0-7m-x-1-6m/`},
    {   id:  `003`,
        img: `https://monoria.biz/wp-content/uploads/2022/11/A-44.jpg`,
        name: `Red - white kroma/ Krama Khmer Scarf made by Cambodian approx. 0.7m x 1.6m`,
        price: `12.12$`,
        link:   `https://monoria.biz/shop/red-white-kroma-krama-khmer-scarf-made-by-cambodian-approx-0-7m-x-1-6m/`},
    {   id:  `004`,
        img: `https://monoria.biz/wp-content/uploads/2022/11/Screen-Shot-2022-11-09-at-2.07.27-PM-e1667978083289-750x500.png`,
        name: `Blue kroma/ Krama Khmer Scarf made by Cambodian approx. 0.7m x 1.6m`,
        price: `12.12$`,
        link:   `https://monoria.biz/shop/blue-kroma-krama-khmer-scarf-made-by-cambodian-approx-0-7m-x-1-6m/`},
    {   id:  `005`,
        img: `https://monoria.biz/wp-content/uploads/2022/11/A-39.jpg`,
        name: `Green, pink, white kroma/ Krama Khmer Scarf made by Cambodian approx. 0.7m x 1.6m`,
        price: `12.12$`,
        link:   `https://monoria.biz/shop/green-pink-white-kroma-krama-khmer-scarf-made-by-cambodian-approx-0-7m-x-1-6m/`},
    {   id:  `006`,
        img: `https://monoria.biz/wp-content/uploads/2022/11/A-38.jpg`,
        name: `Checkered blue kroma/ Krama Khmer Scarf made by Cambodian approx. 0.7m x 1.6m`,
        price: `12.12$`,
        link:   `https://monoria.biz/shop/checkered-blue-kroma-krama-khmer-scarf-made-by-cambodian-approx-0-7m-x-1-6m/`}
];
for(let i of scarfItems){
    scarfContent.innerHTML+=`
        <div class="card col-6 col-md-4 border-0 p-3 p-lg-5">
        <a href="${i.link}" class="link-underline link-underline-opacity-0 link-dark fw-normal">
          <img src="${i.img} " class="card-img-top rounded-0" alt="...">
          <div class="card-body text-center text-uppercase">
            <h5 class="card-title">${i.name}</h5>
            <p class="price text-secondary">${i.price}</p>
            <p class="text-uppercase">Add to cart</p></a>
          </div>
        </div>`;}

blogItems = [
{
    id: `001`,
    img: `https://monoria.biz/wp-content/uploads/2021/08/krama-black-red-960x640.jpg`,
    title:`Why should you get Khmer Krama`,
    link:`https://monoria.biz/blog/why-should-you-get-khmer-krama/`
},
{
    id: `002`,
    img: `https://monoria.biz/wp-content/uploads/2022/11/abstract-bayon-960x640.jpg`,
    title:`Why Khmer painting makes great home decoration`,
    link:`https://monoria.biz/blog/a-fantastic-woocommerce-theme/`
},
{
    id: `003`,
    img: `https://monoria.biz/wp-content/uploads/2022/10/black-kampot-pepper-960x640.jpg`,
    title:`Why you should try Kampot pepper at least once in life`,
    link:`https://monoria.biz/blog/why-you-should-try-kampot-pepper-at-least-once-in-life/`
}
]
for (let i of blogItems){
    blogContent.innerHTML += `<div class="col-12 col-lg-4 card border-0">
  <img class="card-img-top rounded-0 w-100" src="${i.img}" alt="Card image cap">
  <div class="card-body px-0"><a href="${i.link}" class="link-underline link-underline-opacity-0 link-dark fw-normal">
    <h5 class="card-title mb-3">${i.title}</h5>
    <p class="card-text text-uppercase">Read more</p></a>
    <hr class="border-bottom border-3 border-dark w-25">
  </div>
</div>`;
}
