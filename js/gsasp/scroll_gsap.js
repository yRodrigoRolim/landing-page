const tl = gsap.timeline();

window.onload = () => {
    tl.to(".orange", { xPercent: 0 })
        .to(".orange", { xPercent: -100 })
        .from(".green", { xPercent: 100 })
        .to(".green", { xPercent: -100 })
        .from(".blue", { xPercent: 100 })
        .to(".blue", { xPercent: -100 });
    ScrollTrigger.create({
        animation: tl,
        trigger: "#conteiner",
        start: "top top",
        end: window.innerWidth * 3,
        scrub: 1,
        pin: true,
    });


    const centeredBox = document.getElementById('centered-box');

    // Configurando animação GSAP com ScrollTrigger
    gsap.to(centeredBox, {
        opacity: 1, // Altera opacidade para visível
        duration: 1, // Duração de 1 segundo
        ease: "power1.inOut", // Suavização
        scrollTrigger: {
            trigger: centeredBox, // Elemento que ativa o ScrollTrigger
            start: "left 70%", // Inicia quando o lado esquerdo do trigger atinge 70% da viewport
            end: "left 50%", // Termina quando atinge 50%
            scrub: true, // Animação vinculada ao movimento do scroll
            horizontal: true // Habilita scroll lateral
        }
    });



};
