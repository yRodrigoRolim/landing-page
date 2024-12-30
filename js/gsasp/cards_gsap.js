const cards = document.querySelectorAll('.flex-1.cursor-pointer');

cards.forEach(card => {
    const blurEffect = card.querySelector('.blur-card-effect'); // Seleciona o .blur-card-effect
    const textCard = card.querySelector('.text-cards'); // Seleciona o .text-cards único
    const fullscreenElement = card.querySelector('.fullscren-element'); // Seleciona o .fullscreen-element único

    let tradeImg = true
    
    card.addEventListener('mouseenter', () => {
        const banner_image_background = document.getElementById("banner-image-background");
        const img = card.querySelector('img');
        if (img.src != banner_image_background.src) {

            if (tradeImg == true) {
                banner_image_background.style.opacity = '0.2';
                tradeImg = false
                setTimeout(() => {
                    tradeImg = true

                    banner_image_background.src = img.src;
                    banner_image_background.style.opacity = '1';
                }, 200);
            }
        }


        blurEffect.classList.remove('hidden');
        gsap.to(blurEffect, { opacity: 1, duration: 0.5 });

        if (textCard) {
            textCard.classList.remove('hidden');
            gsap.from(textCard, { opacity: 0, height: 0, duration: 0.5 });
            gsap.to(textCard, { opacity: 1, height: "8rem", duration: 0.5 });
        }

        if (fullscreenElement) {
            fullscreenElement.classList.remove('hidden');
            gsap.from(fullscreenElement, { opacity: 0, height: 0, duration: 0.5 });
            gsap.to(fullscreenElement, { opacity: 1, height: "9rem", duration: 0.5 });
        }
    });

    card.addEventListener('mouseleave', (event) => {
        card.style.pointerEvents = 'none';

        if (!card.contains(event.relatedTarget)) {
            gsap.to(blurEffect, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    blurEffect.classList.add('hidden');
                }
            });

            if (textCard) {
                gsap.to(textCard, {
                    opacity: 0,
                    height: 0,
                    duration: 0.5,
                    onComplete: () => {
                        gsap.delayedCall(0.2, () => textCard.classList.add('hidden'));
                    }
                });
            }

            if (fullscreenElement) {
                gsap.to(fullscreenElement, {
                    opacity: 0,
                    height: 0,
                    duration: 0.5,
                    onComplete: () => {
                        gsap.delayedCall(0.3, () => fullscreenElement.classList.add('hidden'));
                        gsap.delayedCall(0.3, () => card.style.pointerEvents = 'auto');

                    }

                });
            }
        }
    });
});
