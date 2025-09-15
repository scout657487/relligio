window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.style.width = "100%"
    navbar.classList.add("bg-[#171717]");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.style.width = "85%"
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-black");
  }
});
gsap.to("#bg",{
    scale:1.3,
    rotate:6,
    duration:11,
    delay:0,
    repeat:-1,
    yoyo:true
})
gsap.to(".marquee", {
  xPercent: -100,         // move fully to the left
  repeat: -1,            // infinite loop
  duration: 15,           // adjust speed
  ease: "linear"          // smooth constant speed
});


// Timeline for heading 1 (your original animation)
// 1️⃣ Keep your original heading animation exactly as-is
let tl = gsap.timeline();
tl.from(".heading", {
  opacity: 0,
  x: 350,
  duration: 2,
  delay: 1
});

gsap.from(".heading span", {
  opacity: 0,
  x: 20,
  duration: 0.5,
  stagger: 0.3,
  delay: 1 + 0.2
});

// 2️⃣ Animate heading2 after heading1 finishes
let tl2 = gsap.timeline(); // delay matches the end of heading1 + stagger buffer
tl2.from(".heading2", {
  scale:1,
  opacity: 0,
  x: 350,
  duration: 2,
  delay: 3.5 
});

gsap.from(".heading2 span", {
  opacity: 0,
  x: 20,
  duration: 2,
  stagger: 0.3,
  delay:3.5+0.1

})
gsap.from(".second",{
  opacity:0,
  x:250,
  duration:2,
  delay:4.7,
  stagger:0.3
})
gsap.from(".third",{
  opacity:0,
  y: 50,
  duration:2,
  delay:5.5

})
let navs = document.querySelectorAll(".nav");
navs.forEach((nav)=> {
  nav.addEventListener("mouseenter",(dets)=> {
    dets.target.classList.add("tooltip")
    gsap.to(dets.target,{
      scale:1.2,
      duration:1,
      ease: "power3.out"
    })
    
  })
  nav.addEventListener("mouseleave",(dets)=> {
    gsap.to(dets.target,{
      scale:1,
      duration:1,
      ease: "power3.out"
    })
    
  })
})
gsap.to(".section2 .card2",{
  y: 144,
  scrollTrigger:{
    trigger:".section2 .card2",
    scroller:"body",
    start: "top 80%",
    scrub:2
  }

})

gsap.from(".about-img",{
  scale:0.5,
  rotate:10,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".about-img",
    scroller:"body",
    start: "top 80%",
    end:"top 20%",
    scrub:2,
  }

})
gsap.from(".welcome",{
  opacity:0,
  scale:0.6,
  y:50,
  stagger:0.3,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".welcome",
    scroller:"body",
    start: "top 90%",
    end:"top 10%",
    scrub:2,
  }

})
gsap.from(".para1",{
  opacity:0,
  scale:0.6,
  y:50,
  stagger:0.3,
  ease: "circ.out",
  scrollTrigger:{
    trigger:".para1",
    scroller:"body",
    start: "top 90%",
    end:"top 60%",
    scrub:2,
  }

})
gsap.from(".explore-btn",{
  opacity:0,
  y:50,
  ease: "elastic.out(1,0.1)",
  scrollTrigger:{
    trigger:".explore-btn",
    scroller:"body",
    start: "top 90%",
    end: "top 70%",
    scrub:1,
  }

})
gsap.from(".msg-left",{
  opacity:0,
  scale:0.6,
  y:100,
  stagger:0.3,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".msg-left",
    scroller:"body",
    start: "top 90%",
    end:"top 10%",
    scrub:2,
  }

})
gsap.from(".right-msg span",{
  opacity:0,
  scale:0.9,
  y:100,
  stagger:0.3,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".right-msg span",
    scroller:"body",
    start: "top 90%",
    end:"top 10%",
    scrub:2,
  }

})
gsap.from(".right-msg",{
  opacity:0,
  scale:0.9,
  y:100,
  stagger:0.3,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".right-msg",
    scroller:"body",
    start: "top 90%",
    end:"top 10%",
    scrub:2,
  }

})

gsap.from(".row",{
  opacity:0,
  x:100,
  stagger:0.3,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".row",
    scroller:"body",
    start: "top 90%",
    end:"top 10%",
    scrub:2,
  }

})
gsap.registerPlugin(ScrollTrigger);

// grab all the page sections
const sections = gsap.utils.toArray(".section4 > div");

// store horizontal animation in a variable
const horizontal = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".section4",
    pin: true,
    scrub: 2,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".section4").offsetWidth
  }
});

// gola animation (now using horizontal as containerAnimation)
gsap.from(".gola", {
  y: -500,
  opacity: 0,
  ease: "elastic",
  scrollTrigger: {
    containerAnimation: horizontal, // ✅ now this exists
    trigger: ".page4",
    start: "left left",
    end: "left left+=1",
    scrub: true
  }
});


// Counter function with suffix support
function counterUp(target, duration = 2.5) {
  let text = target.innerText.trim();
  
  // Extract numeric part + suffix
  let match = text.match(/([\d\.]+)([a-zA-Z\+\%]*)/);
  if (!match) return;
  
  let endValue = parseFloat(match[1]); // numeric value
  let suffix = match[2] || "";         // suffix (k, +, %, etc.)
  
  let obj = { val: 0 };
  gsap.to(obj, {
    val: endValue,
    duration: duration,
    ease: "power1.out",
    onUpdate: () => {
      // If suffix includes "k", keep it
      if (suffix.includes("k")) {
        target.innerText = Math.floor(obj.val) + "k" + (suffix.includes("+") ? "+" : "");
      } else {
        target.innerText = Math.floor(obj.val) + suffix;
      }
    }
  });
}

// Trigger counters when Page 3 starts
ScrollTrigger.create({
  trigger: ".page3",
  containerAnimation: horizontal, // use your horizontal scroll timeline
  start: "left center",
  onEnter: () => {
    gsap.utils.toArray(".page3 .column1 h1").forEach((el, i) => {
      counterUp(el, 2.5 + i * 0.3); // small stagger effect
    });
  },
  once: true
});
gsap.from(".page1-text",{
  y:200,
  scale:0.5,
  opacity:0,
  duration:1,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".page1",
    start:"left left"

  }
})
gsap.from(".char", {
  y: 800,
  opacity: 0,
  scale: 0,
  duration: 1.2,
  ease: "power4.out",
  transformPerspective: 1000, // helps with scale/transform
  stagger: { from: "random", amount: 1 },
  scrollTrigger: {
    trigger: ".section-last",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});
gsap.from(".contact-last",{
  x:400,
  opacity:0,
  duration:2,
  ease:"power3.out",
    scrollTrigger: {
    trigger: ".section-last",
    scroller:"body",
    markers:true,
    start: "top 60%",
    end:"top 40%",
    scrub:2
  }
})

