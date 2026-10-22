let ProductContainer = document.getElementById("ProductContainer");


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