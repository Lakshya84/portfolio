function page2Anim() {
  gsap.registerPlugin(ScrollTrigger);

  const moveElement = document.querySelector(".move");
  const marqElements = document.querySelectorAll(".marq");
  const marqWidth = marqElements[0].offsetWidth;
  const totalWidth = marqWidth * marqElements.length;
  
  // Calculate endOffset correctly, considering innerWidth
  const endOffset = totalWidth - window.innerWidth;

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-2",
      start: "top top",
      end: `+=${endOffset}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  timeline.to(moveElement, {
    x: -totalWidth + window.innerWidth / 2,
    ease: "power2.inOut",
  });
}


// page2Anim();