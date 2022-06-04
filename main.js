let popBtn = document.getElementById("cp")
let removeBtn = document.getElementById("rp")

popBtn.addEventListener("click", popUp)
removeBtn.addEventListener("click", popDown)


function popUp() {
    let links = document.querySelector(".links");
    links.style.visibility = "visible";
    popBtn.style.display = "none";
    removeBtn.style.display = `block`;
}

function popDown() {
    let links = document.querySelector(".links");
    links.style.visibility = "hidden";
    popBtn.style.display = "block";
    removeBtn.style.display = `none`;
}

// --------------------------  End Drop Down -------------------------------;
//http://myjson.dit.upm.es/api/bins/h617
fetch(`http://myjson.dit.upm.es/api/bins/db57`)
    .then(response => response.json())
    .then(products => {

        let mainDiv = document.querySelector(".allProducts")
        let users = []
        
        users = products.map(product => {
            // create card and add style

            let card = document.createElement("div");
            card.classList.add("card")

            // create img

            let imgDiv = document.createElement("div")
            imgDiv.classList.add("imgDiv")
            let img1 = document.createElement("img")
            img1.classList.add("skinIMG")
            img1.src = `${product.img}`;

            // create text div

            let textDiv = document.createElement("div")
            textDiv.classList.add("text")
            // create texts 

            let Price = document.createElement("h4")
            let Name = document.createElement("h4")
            let Id = document.createElement("h4")
            // add classes

            Price.classList.add("texts")
            Name.classList.add("texts")
            Id.classList.add("texts")

            // add inner Text

            Name.innerText = `Skin Name is: ${product.name}`;
            Price.innerText = `Skin Price is: ${product.price}$`;
            Id.innerText = `Skin Id is: ${product.id}`;

            // buy div

            let buyDiv = document.createElement("div")
            buyDiv.classList.add("buys")

            // buy btn

            let buyBtn = document.createElement("a")
            buyBtn.classList.add("buyBtn")

            // add attribute

            buyBtn.innerText = "Buy";
            buyBtn.href = "https://discord.gg/wxxZjsCx";

            


 
            // append
            
            imgDiv.appendChild(img1)
            card.appendChild(imgDiv)
            textDiv.appendChild(Price)
            textDiv.appendChild(Name)
            textDiv.appendChild(Id)
            card.appendChild(textDiv)
            buyDiv.appendChild(buyBtn)
            card.appendChild(buyDiv)
            mainDiv.appendChild(card)
            
            return { name: product.name, price: product.price, element: card };
        });


        // start search
        let searchInput = document.getElementById("search")

        searchInput.addEventListener("input", (e) => {
            let value = e.target.value.toLocaleLowerCase();

            users.forEach(product => {
                let isVisiable = product.name.toLocaleLowerCase().includes(value) || product.price.toLocaleLowerCase().includes(value)
                product.element.classList.toggle("hide", !isVisiable)
                
            });
        });
    });

let up = document.querySelector(".sticky")

window.onscroll = function () {
    if (window.scrollY >= 250) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
};

