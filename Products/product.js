let ProductContainer = document.getElementById("ProductContainer");

let allCartData = [];
async function addToCart(id)
{
    let res = await fetch("https://fakestoreapi.com/products/"+id);
    res = await res.json()

    allCartData.push(res);

    let data = JSON.stringify(allCartData);
    localStorage.setItem("cartData",data)
    

}

function displayData(data)
{
    for(let i of data)
    {
        ProductContainer.innerHTML += `
            <div class = 'Card'>
                <img src = '${i.image}'/>
                <h2>${i.title}</h2>
                <p>${i.price}</p>
                <button>Order Now</button>
                <button onclick = "addToCart(${i.id})" >Add To Cart</button>
            </div>
        `
    }
}



async function getData()
{
    let res = await fetch("https://fakestoreapi.com/products");
    res = await res.json();
    displayData(res)
}

getData()