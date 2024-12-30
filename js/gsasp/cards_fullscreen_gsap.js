document.querySelectorAll('.blur-card-effect').forEach((blurCard, index) => {
    blurCard.addEventListener('click', () => {

        const cards = document.querySelectorAll('.flex-1');
        const nextItems = document.querySelectorAll('.next-item');
        const containerSmallScreen = document.querySelectorAll('.container-smallscreen');
        const containerFullScreen = document.querySelectorAll('.container-fullscreen');

        const timeline = gsap.timeline();
        // Handle Next Items Animation
        nextItems.forEach((nextItem, i) => {

            
            
            if (i !== index) {
                nextItem.classList.remove('hidden');
                timeline.fromTo(
                    nextItem,
                    { x: "100%", width: 0, opacity: 0 },
                    { x: "0%", width: "100%", opacity: 1, ease: "back.out(2)", duration: 0.5 },
                    i === 0 ? 0 : "-=0"
                );

            }
        });

        // Handle Cards Animation
        cards.forEach((card, i) => {
            
            card.classList.remove("cursor-pointer")
            if (i === index) {
                gsap.to(card, {
                    flex: 1,
                    duration: 1.4,
                    ease: "power2.out",
                });
            } else {
                gsap.to(card, {
                    flex: 0,
                    duration: 0.7,
                    opacity: 0,
                    ease: "power2.out",
                });
            }
        });

        // Handle Small Screen Containers Animation
        containerSmallScreen.forEach((container) => {

            
            setTimeout(() => {
                gsap.to(container, {
                    opacity: 0,
                    duration: 0.2,
                    onComplete: () => {
                        container.classList.add('hidden');
                    }
                });
            }, 800);
        });

        // Handle Full Screen Containers Animation
        containerFullScreen.forEach((container, i) => {

            if (i === index) {
                tradeImg = false
                setTimeout(() => {
                    const tl = gsap.timeline();

                    container.classList.remove('hidden');
                    container.classList.add('z-100');

                    // Fade-in Fullscreen Container
                    gsap.fromTo(
                        container,
                        { opacity: 0 },
                        { opacity: 1, duration: 0.2 }
                    );

                    // Animate Child Elements
                    const spanSelector = container.querySelector(".span-fullscreen");
                    const h2Selector = container.querySelector(".h2-fullscren");
                    const textSelector = container.querySelector(".p-fullscreen");

                    // H2 Animation
                    tl.fromTo(h2Selector, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3 });

                    // Text Animation
                    tl.fromTo(textSelector, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });

                    // Span Animation
                    tl.fromTo(spanSelector, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
                }, 800);
                setTimeout(() => {
                    tradeImg = false
                }, 1000);
            }
        });
    });
});

function reverseAnimations() {
    const cards = document.querySelectorAll('.flex-1');
    const nextItems = document.querySelectorAll('.next-item');
    const containerSmallScreen = document.querySelectorAll('.container-smallscreen');
    const containerFullScreen = document.querySelectorAll('.container-fullscreen');

    nextItems.forEach((nextItem) => {
        gsap.to(nextItem, {
            x: "100%",
            width: 0,
            opacity: 0,
            ease: "power2.in",
            duration: 0.5,
            onComplete: () => {
                nextItem.classList.add('hidden');
            }
        });
    });

    // Handle Cards Reverse Animation
    cards.forEach((card) => {

        
        gsap.to(card, {
            flex: 1, // Reset flex to original value
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
        });
        
        card.classList.add("cursor-pointer");
    });

    // Handle Small Screen Containers Reverse Animation
    containerSmallScreen.forEach((container) => {
        container.classList.remove('hidden');
        gsap.to(container, {
            opacity: 1,
            duration: 0.2,
        });
    });

    // Handle Full Screen Containers Reverse Animation
    containerFullScreen.forEach((container) => {
        gsap.to(container, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                container.classList.add('hidden');
                container.classList.remove('z-100');
            }
        });
    });
}
