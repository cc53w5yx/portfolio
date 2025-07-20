// Wait for the DOM to be fully loaded before running animations
document.addEventListener("DOMContentLoaded", function() {

    // Make the body visible once everything is ready
    gsap.to("body", { opacity: 1, duration: 0.5 });

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // --- HERO SECTION ANIMATION ---
    // Create a timeline for the hero section animations to run in sequence
    const heroTl = gsap.timeline({ delay: 0.2 });

    heroTl
        .to(".hero-title span", {
            y: 0, // Animate to original position
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2 // Animate each span with a 0.2s delay
        })
        .to(".hero-subtitle", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.5") // Overlap with the previous animation
        .to(".hero-cta", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)" // A fun bounce effect
        }, "-=0.4")
        .to(".nav-link", {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1
        }, 0); // Start this animation at the beginning of the timeline

    
    // --- SCROLL-TRIGGERED ANIMATIONS ---

    // Animate the "About" section when it scrolls into view
    gsap.to("#about", {
        opacity: 1,
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%", // Trigger when the top of the section is 80% from the top of the viewport
            end: "bottom top",
            toggleActions: "play none none none" // Play the animation once
        },
        duration: 1,
        ease: "power3.inOut"
    });
    
    // Animate the "Projects" section title
    gsap.from(".section-title", {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: ".section-title",
            start: "top 90%",
            toggleActions: "play none none none"
        },
        duration: 1,
        ease: "power3.out"
    });

    // Animate the project cards in a staggered sequence
    gsap.to(".project-card", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".project-grid",
            start: "top 80%", // Start when the grid is 80% in view
            toggleActions: "play none none none"
        }
    });

});
