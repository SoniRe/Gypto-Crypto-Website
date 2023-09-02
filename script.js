var tl = gsap.timeline();

gsap.from("#nav", {
  y: -50,
  duration: 0.7,
  opacity: 0,
});

gsap.from("#page1 #page1-img", {
  rotate: -20,
  duration: 0.9,
});

tl.from("#page1 #logo-all", {
  scale: 0,
  delay: 0.6,
  duration: 0.4,
});

tl.from("#page1 h1", {
  y: 50,
  opacity: 0,
});

tl.from("#page1 h3", {
  x: -100,
  opacity: 0,
});

gsap.from("#page2", {
  scale: 0,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
  },
});

gsap.from("#page2 #lefted", {
  y: 100,
  duration: 0.6,
  delay: 1.1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
  },
});

gsap.from("#page2 #mid", {
  y: 100,
  duration: 0.6,
  delay: 1.1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
  },
});

gsap.from("#page2 #right", {
  y: 100,
  duration: 0.6,
  delay: 1.1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
  },
});

gsap.from("#page3 #left-corner", {
  y: 100,
  duration: 0.4,
  opacity: 0,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#page3 #left-corner",
    scroller: "#main",
  },
});

gsap.from("#page3 #right-corner", {
  y: 100,
  duration: 0.4,
  opacity: 0,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#page3 #right-corner",
    scroller: "#main",
  },
});

var elem = document.querySelector("#right-container #overlay");
var img = document.querySelector("#right-container img");

elem.addEventListener("mouseenter", function () {
  img.style.scale = 1.3;
});

elem.addEventListener("mouseleave", function () {
  img.style.scale = 1;
});
