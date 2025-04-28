        document.addEventListener('DOMContentLoaded', function() {
            // Carousel functionality
            const carouselItems = document.querySelectorAll('.carousel-item');
            const carouselIndicators = document.querySelectorAll('.carousel-indicator');
            let currentIndex = 0;
            const intervalTime = 5000;
            let carouselInterval;

            function showSlide(index) {
                carouselItems.forEach(item => item.classList.remove('active'));
                carouselIndicators.forEach(indicator => indicator.classList.remove('active'));
                
                carouselItems[index].classList.add('active');
                carouselIndicators[index].classList.add('active');
                currentIndex = index;
            }

            function nextSlide() {
                let newIndex = (currentIndex + 1) % carouselItems.length;
                showSlide(newIndex);
            }

            function startCarousel() {
                carouselInterval = setInterval(nextSlide, intervalTime);
            }

            function resetCarousel() {
                clearInterval(carouselInterval);
                startCarousel();
            }

            carouselIndicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    showSlide(index);
                    resetCarousel();
                });
            });

            startCarousel();

            // Product card hover effects
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-5px)';
                    card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                });
            });

            // Feature button hover effects
            const featureButtons = document.querySelectorAll('.feature-button');
            featureButtons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    button.style.transform = 'translateY(-5px)';
                    button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                    button.style.borderColor = '#4fc3f7';
                });
                button.addEventListener('mouseleave', () => {
                    button.style.transform = '';
                    button.style.boxShadow = '';
                    button.style.borderColor = 'transparent';
                });
            });

            // Add to cart button animation
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const cartCount = document.querySelector('.cart-count');
                    let count = parseInt(cartCount.textContent);
                    cartCount.textContent = count + 1;
                    
                    // Pulse animation
                    cartCount.style.animation = 'pulse 0.5s';
                    cartCount.addEventListener('animationend', () => {
                        cartCount.style.animation = '';
                    });
                });
            });
        });
