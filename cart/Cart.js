let cartList = document.getElementById("cartList");


let data = localStorage.getItem("cartData")
data = JSON.parse(data);
console.log(data);

cartList.innerHTML = ""

for (let i of data)
{
    cartList.innerHTML += `
    <div>
        <img src = '${i.image}'/>
        <h2>${i.title}</h2>
        <p>${i.price}</p>
        <p>${i.description}</p>
        <p>${i.rating}</p>

    </div>
`
}