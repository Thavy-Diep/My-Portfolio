const createHeader = () => {
    const header = document.getElementById('main-header');

    header.innerHTML = `
        <div class="nav-bar">
            <button class="hamburger">
                <i class="fas fa-bars"></i>
            </button>
            <div class="logo-text">
                <h2>Thavy Diep</h2>
            </div>

            <nav>
    <a href="#home">HOME</a>
    <a href="#about">ABOUT</a>
    <a href="#education">EDUCATION</a>
    <a href="#projects">PROJECTS</a>
    <a href="#activities">ACTIVITIES</a>
    <a href="#contact">CONTACT</a>
            </nav>

            <div class="right-nav">
                <a><i class="fas fa-search"></i></a>
                <a><i class="fas fa-user"></i></a>
                
            </div>
        </div>
    `;
};
createHeader();

const createFooter = () => {
    const footer = document.getElementById('main-footer');

    footer.innerHTML = `



            <li class="footer-column">
                <h3>FOLLOW ME</h3>
                <ul class="social-icons">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-tiktok"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                </ul>
            </li>
        </ul>

        <ul class="footer-bottom">
            <li>
                <p>© 2026, Flower Knows . All rights reserved.</p>
            </li>
        </ul>


    `;
};
createFooter();



const categoryMap = {
    'cat-all': 'All',
    'cat-face': 'Face',
    'cat-eyes': 'Eyes',
    'cat-lips': 'Lips',
    'cat-accessories': 'Accessories & Applicators'
};
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-bar button');
    const container = document.getElementById('product-list');
    const categoryTitle = document.getElementById('category-title');
    const stars = '<i class="fas fa-star"></i>'.repeat(5);

    function renderProducts(filteredProducts, categoryName) {
        categoryTitle.textContent = categoryName;
        container.innerHTML = '';

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card'); // Updated Name

            card.innerHTML = `

                <div class="hover-effect">
                            <img src="${product.img}" alt="${product.name}">
                            <button class="btn btn-primary add-to-cart hover-button" data-id="${product.id}">
                                Add to Cart
                            </button>
                        </div>
                        <h3 class="product-title underline">${product.name}</h3>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <p class="stars">${stars}</p>
                    `;

            container.appendChild(card);
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {

            // Remove 'active' from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get category name
            const selectedCategory = categoryMap[button.id];

            // Filter products
            const filteredProducts = selectedCategory === 'All'
                ? products
                : products.filter(p => p.category === selectedCategory);

            renderProducts(filteredProducts, selectedCategory);
        });
    });

    // Initial load: show all products
    renderProducts(products, 'All');
});



document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slideshow");

    function showSlide(n) {
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;

        slides.forEach(slide => {
            slide.style.display = "none";
        });

        slides[slideIndex].style.display = "block";
    }

    window.plusDivs = function(n) {
        slideIndex += n;
        showSlide(slideIndex);
    };

    showSlide(slideIndex);

    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 5000);
});

// // About Us
// document.addEventListener('DOMContentLoaded', () => {
//     const observerOptions = {
//         threshold: 0.2
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('appear');
//             }
//         });
//     }, observerOptions);

//     const fadeElements = document.querySelectorAll('.fade-in');
//     fadeElements.forEach(el => observer.observe(el));
// });



const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", () => {
    function toggleAnswer(row) {
        const answerRow = row.nextElementSibling;
        const arrow = row.querySelector(".arrow");

        if (answerRow.style.display === "table-row") {
            answerRow.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
            // arrow.textContent = "▼";
        } else {
            answerRow.style.display = "table-row";
            arrow.style.transform = "rotate(180deg)";
            // arrow.textContent = "▲";
        }
    }

    // Optional: attach event listeners instead of inline onclick
    document.querySelectorAll(".question-row").forEach(row => {
        row.addEventListener("click", () => toggleAnswer(row));
    });
});
