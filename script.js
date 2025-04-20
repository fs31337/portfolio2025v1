gsap.registerPlugin(ScrollTrigger);

/**Horizontal Scroll */

const races = document.querySelector(".projects");

function getScrollAmount() {
  let racesWidth = races.scrollWidth;
  return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".projectsWrapper",
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
  markers: true,
});

ScrollTrigger.create({
  trigger: "#home",
  pin: "#about",
  start: "top top",
  end: "bottom top",
  scrub: true,
  pinSpacing: false,
});
