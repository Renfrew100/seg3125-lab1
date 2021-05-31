document.getElementById("productsArea").addEventListener("click", displayProducts);
document.getElementById("cartArea").addEventListener("click", displayCart);

let cart = [];

var products = [
	{
		name: "Chicken",
		lactoseFree: true,
		nutsFree: true,
        organic: true,
		price: 1.00
	},
    {
		name: "Bread",
		lactoseFree: false,
		nutsFree: true,
		organic: true,
        price: 1.25
	},
    {
		name: "Milk",
		lactoseFree: false,
		nutsFree: true,
		organic: true,
        price: 1.70
	},
    {
		name: "Butter",
		lactoseFree: false,
		nutsFree: true,
		organic: true,
        price: 1.80
	},
    {
		name: "Cheese",
		lactoseFree: true,
		nutsFree: true,
		organic: false,
        price: 1.83
	},
    {
		name: "Oranges",
		lactoseFree: true,
		nutsFree: true,
		organic: false,
        price: 2.05
	},
    {
		name: "Yogurt",
		lactoseFree: false,
		nutsFree: true,
		organic: true,
        price: 2.10
	},
    {
		name: "Peanuts",
		lactoseFree: true,
		nutsFree: false,
		organic: false,
        price: 2.50
	},
    {
		name: "Mint",
		lactoseFree: true,
		nutsFree: true,
		organic: false,
        price: 2.53
	},
    {
		name: "Pasta",
		lactoseFree: true,
		nutsFree: true,
		organic: true,
        price: 3.05
	},
];

function displayProducts() {
    x=document.getElementById("products").innerHTML = "";
	console.log(x);
    let isLactose = document.getElementById("lactose").checked;
    let isNut = document.getElementById("nuts-free").checked;
    let isOrganic = document.getElementById("organic").checked;
    let display = document.getElementById("products");

    let array = [...products];

    if (isLactose) {
        array = array.filter(item => item.lactoseFree);
    }
    if (isNut) {
        array = array.filter(item => item.nutsFree);
    }
    if (isOrganic) {
        array = array.filter(item => item.organic);
    }

    array.forEach(item => {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = item.name;
        checkbox.className = "groceries";
        let label = document.createTextNode(" " + item.name + " - $" + item.price);
        let temp = document.createElement("div");
        temp.appendChild(checkbox);
        temp.appendChild(label);
        display.appendChild(temp);
    });
}

function addToCart() {
    let groceries = document.getElementsByClassName("groceries");
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i].checked) {
            for (let j = 0; j < products.length; j++) {
                if (groceries[i].value === products[j].name) {
                    cart.push(products[j]);
                }
            }
        }
    }
}

function displayCart() {
    document.getElementById("cart").innerHTML = "";
    let display = document.getElementById("cart");

    if (cart.length == 0) {
        display.innerHTML = "Your cart is empty.";
    } else {
        let ul = document.createElement("ul");
        let total = 0;
        cart.forEach(item => {
            display.innerHTML = "You have selected:"
            let li = document.createElement("li");
            li.innerHTML = item.name + " - $" + item.price;
            ul.appendChild(li);
            total += item.price;
        });
        display.appendChild(ul);
        let p = document.createElement("p");
        p.innerHTML = "Your total is $" + total.toFixed(2);
        p.className = "text-bold";
        display.appendChild(p);
        display.append("Thank you for shopping");
        document.getElementById("checkoutButton").style.visibility = "visible";
    }
}

function clearCart() {
    cart = [];
    displayCart();
    document.getElementById("checkoutButton").style.visibility = "hidden";
	alert("Cart cleared");
}

function checkout() {
    alert("Items have been purchased!");
	clearCart();
}