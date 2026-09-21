function withLocomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
withLocomotiveScroll();

function loader(){
    // document.body.style.overflow = "hidden";    //  body pe overflow hidden lagane se scroll band ho jata hai

    let tl = gsap.timeline()
    tl.from(".line1 h1, .line1-counter",{
    y: 150,
    duration: 0.9
    // stagger: 1,
    
    // scale: 2
})

tl.from(".line2 h1",{
    y: 150,
    duration: 0.9

})
tl.from(".line3 h1",{
    y: 150,
    duration: 0.9
})
tl.to(".line1-counter",{
    duration: 0.9,
    opacity: "1"
})
tl.from(".line3-now",{
    y: 150,
    duration: 0.9
})
tl.to(".loader",{
    display: "none",
    opacity: 0,
    duration: 0.5,
    delay:1.2,
    onComplete: function() {
    // after loading show the scrollbar with content
    // document.body.style.overflowX = "hidden";
    // document.body.style.overflowY = "auto";

    }
})
tl.from(".page1",{
    y:"100vh",
    opacity:0
})

let loaderCount = -70;
setInterval(()=>{
    if(loaderCount === 100){}
    else{
        loaderCount++;
        document.querySelector(".loaderCount").innerHTML = loaderCount;
        // console.log(loaderCount)
    }
},35)
}
loader();


gsap.from(".page1-line h1", {
    y:100,
    opacity: 0,
    // delay: 6.2,
    stagger: 0.1
})
// gsap.from(".page1-line", {
//    y:100,
//    opacity: 0,
//    delay: 3,
//    stagger: 0.2
// })

function page1MouseMove(){
    document.querySelector(".page1").addEventListener("mousemove", (dets)=>{
        let rect = dets.currentTarget.getBoundingClientRect()
        // console.log(dets.clientY);   // screen pe jo hum hover kr rhe hai
        // console.log(dets.clientX);   //  ||                 ||
        // console.log(rect.left);      // screen ke piche kitna hissa ja chuka hai
        // console.log(rect.top);       //  ||                 ||
        
        
        gsap.to(".cursor",{
            left:dets.clientX - rect.left,
            // left:dets.clientX,     ||  same hi hai kyuki x me to scroll hua hi nahi
            top:dets.clientY - rect.top
        })
        // console.log(dets.clientX);
        
    })
}
page1MouseMove();

function page2MouseMove(){
    document.querySelector(".page2-video-cont").addEventListener(("mousemove"),(dets)=>{
        // console.log(dets);
        let rect = dets.currentTarget.getBoundingClientRect();
    
        gsap.to(".page2-cursor", {
            left: dets.clientX - rect.left ,
            top: dets.clientY - rect.top
        })
    })
}
page2MouseMove();


Shery.makeMagnet(".nav h3" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


function sheryImageAnimeFunc(){
    Shery.imageEffect(".image-div", {
        style:1,
        config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.7,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.741239388217199},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.64,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        // debug:true,
        gooey:true

    })
}
sheryImageAnimeFunc()



const heading = document.querySelector(".footerHeading");
heading.addEventListener("mouseenter", () => {      // using textillate library for text animations
    $(heading).textillate({
        in: {
            effect: "fadeIn"    // effect in ka name
        },
        out: {
            effect: "fadeOut"   // effect out ka name
        },
        loop: true,             // effect in/out chalta rahe loop me
        minDisplayTime : 50     // effect 1 half turn kitni der tak rahega
    });
});