// Add product






let count = 4;
let Products_html = document.querySelector('#Products');


let products = [
    {
        id: 1,
        name: 'Headphone',
        price: 100,
        photo: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg'
    },
    {
        id: 2,
        name: 'Joysticks',
        price: 120,
        photo: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPNG2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1665002953875'
    },
    {
        id: 3,
        name: 'Keyboard',
        price: 90,
        photo: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61n0+41e9qL._SX466_.jpg'
    },
    {
        id: 4,
        name: 'Mouse',
        price: 150,
        photo: 'https://es.thermaltake.com/media/catalog/product/cache/023a745bb14092c479b288481f91a1bd/l/2/l20m01.jpg'
    }
]

function update() {
    Products_html.innerHTML = "";

    for (const product of products) {

        const col_4 = document.createElement('div');
        col_4.classList.add('col-4');

        const card = col_4.appendChild(document.createElement('div'));
        col_4.classList.add('card');
        card.setAttribute('style', "width: 18rem;")

        const img = card.appendChild(document.createElement('img'));
        img.classList.add('card-img-top');
        img.setAttribute('src', product.photo);
        img.setAttribute('alt', "...");

        const div = card.appendChild(document.createElement('div'));
        div.classList.add('card-body');

        const h5 = div.appendChild(document.createElement('h5'));
        h5.classList.add('card-title');
        h5.innerText = product.name;

        const p = div.appendChild(document.createElement('p'));
        p.innerHTML = "Price: "
        p.classList.add('card-text');

        const span = p.appendChild(document.createElement('span'));
        span.classList.add('price');
        span.innerText = product.price + "$";

        Products_html.appendChild(col_4);
    }
}

update();

let add_btn = document.querySelector('#add_product');


add_btn.addEventListener('click', function (event) {
    let product_name = document.querySelector('#P_Name');
    let product_price = document.querySelector('#P_Price');
    let product_url = document.querySelector('#P_Photo');
    let product_image = document.querySelector('input[type="file"]');

    const reader = new FileReader();

    url = reader.readAsDataURL(product_image.files[0]);

    reader.onloadend = function () {
        console.log(reader.result);
        let url = reader.result;

        let product = {
            id: count++,
            name: product_name.value,
            price: product_price.value,
            photo: url
        }
        products.push(product);
        update();
    }

})


