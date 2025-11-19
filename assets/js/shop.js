fetch("data/products.json")
  .then(response => response.json())
  .then(products => {
      const productGrid = document.querySelector("#productGrid");

      products.forEach(item => {
          const card = `
              <li class="card">
                  <img src="${item.image}" alt="${item.name}">
                  <h3>${item.name}</h3>
                  <p>R${item.price}</p>
                  <button data-id="${item.id}" class="add-cart">Add to Cart</button>
              </li>
          `;
          productGrid.innerHTML += card;
      });
  });

  let cart = [];

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-cart")) {
        const id = e.target.getAttribute("data-id");
        cart.push(id);
        updateCartUI();
    }
});

function updateCartUI() {
    const count = document.querySelector("#cartCount");
    if (count) count.textContent = cart.length;
}

const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(header => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const content = header.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modal-img");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-img")) {
    modal.style.display = "block";
    modalImg.src = e.target.src;
  }
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

const thumbnails = document.querySelectorAll(".gallery img");

thumbnails.forEach(img => {
  img.addEventListener("click", () => {
    document.querySelector(".lightbox").classList.add("open");
    document.querySelector(".lightbox-img").src = img.src;
  });
});

fetch("data/products.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.querySelector("#productGrid");

    data.forEach(product => {
      grid.innerHTML += `
        <li class="card">
          <img src="${product.image}" class="product-img">
          <h3>${product.name}</h3>
          <p>R${product.price}</p>
          <button class="add-cart" data-id="${product.id}">Add to Cart</button>
        </li>
      `;
    });
  });

  const searchBar = document.querySelector("#search");

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  const products = document.querySelectorAll(".card");

  products.forEach(product => {
    const name = product.querySelector("h3").textContent.toLowerCase();

    if (name.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

const sort = document.querySelector("#sort");

sort.addEventListener("change", () => {
  const grid = document.querySelector("#productGrid");
  const items = Array.from(grid.children);

  if (sort.value === "price-low") {
    items.sort((a, b) =>
      parseFloat(a.dataset.price) - parseFloat(b.dataset.price)
    );
  } else if (sort.value === "price-high") {
    items.sort((a, b) =>
      parseFloat(b.dataset.price) - parseFloat(a.dataset.price)
    );
  }

  grid.innerHTML = "";
  items.forEach(item => grid.appendChild(item));
});
