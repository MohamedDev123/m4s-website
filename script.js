const swiper = new Swiper('.mySwiper', {
    // الإعدادات الأساسية
    loop: true,
    speed: 1000,
    effect: 'slide',
    parallax: true,
    grabCursor: true,
    
    // التمرير التلقائي
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    // التصغير
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    
    // التنقل
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // إعدادات التجاوب
    breakpoints: {
        // عند 640px فأقل
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // عند 768px فأكثر
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // عند 1024px فأكثر
        1024: {
            slidesPerView: 1,
            spaceBetween: 0,
        }
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const bar = document.getElementById('bar');
    const navbar = document.getElementById('navbar');
    const close = document.getElementById('close');
    const dropdowns = document.querySelectorAll('.down');

    // تبديل القائمة المتنقلة على الجوال
    if (bar) {
        bar.addEventListener('click', () => {
            navbar.classList.add('active');
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    }

    // التعامل مع القوائم المنسدلة على الجوال
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 799) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
});


// script.js

// بيانات المنتجات (يمكن استبدالها ببيانات من قاعدة بيانات)
function addToCart(productName, price, imagesrc) {
  const product = {
    name: productName,
    price: parseFloat(price),
    image: imagesrc,
    quantity: 1
  }


// دالة لإزالة منتج من السلة
function removeItem(index) {
  if (confirm("هل أنت متأكد أنك تريد حذف هذا المنتج؟")) {
    // حذف المنتج باستخدام index
    cart.splice(index, 1);

    // تحديث localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // تحديث الواجهة
    updateCart();
  }
};


  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const index = cart.findIndex(item => item.name === product.name);
  if (index > -1) {
    cart[index].quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("تمت الإضافة إلى السلة 🛒");
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault();
document.getElementById('successMessage').style.display = 'block';
setTimeout(() => {
  document.getElementById('successMessage').style.display = 'none';
  this.reset();
}, 3000);
});