document.addEventListener("DOMContentLoaded", () => {

  const gallery = document.getElementById("gpGallery");
  if (!gallery) return;

  const track = gallery.querySelector(".gp-track");
  const slides = gallery.querySelectorAll(".gp-track img");
  const prevBtn = gallery.querySelector(".gp-prev");
  const nextBtn = gallery.querySelector(".gp-next");

  let index = 0;

  function showSlide(i) {
    track.style.transform = `translateX(-${i * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

});
    // TOGGLE INFO WITH IMAGE  
function toggleInfo(id, btn){  
  const el = document.getElementById(id);  
  const imageDiv = el.previousElementSibling.classList.contains('info-image')   
                   ? el.previousElementSibling   
                   : document.querySelector('#' + id).parentElement.querySelector('.info-image');  
  
  el.classList.toggle('hide');       // text hide/show  
  if(imageDiv) imageDiv.classList.toggle('hide'); // image hide/show  
  btn.textContent = el.classList.contains('hide') ? '+' : '−';  
}  
// MENU & SEARCH  
const menuBtn = document.getElementById("menuBtn");  
const sidebar = document.getElementById("sidebar");  
const overlay = document.getElementById("overlay");  
const searchIcon = document.getElementById("searchIcon");  
const topSearch = document.getElementById("topSearch");  
  
menuBtn.onclick = () => {  
  sidebar.classList.toggle("active");  
  overlay.classList.toggle("active");  
  menuBtn.classList.toggle("active");  
};  
overlay.onclick = () => {  
  sidebar.classList.remove("active");  
  overlay.classList.remove("active");  
  menuBtn.classList.remove("active");  
  topSearch.classList.remove("active");  
};  
searchIcon.onclick = () => topSearch.classList.toggle("active");  
document.getElementById("closeSearch").onclick = () => topSearch.classList.remove("active");  
  

  
// TOGGLE INFO  
function toggleInfo(id, btn){  
  const el = document.getElementById(id);  
  el.classList.toggle('hide');  
  btn.textContent = el.classList.contains('hide') ? '+' : '−';  
}  
  
// SLIDER  
const slides = document.getElementById('slides');  
const slideCount = slides.children.length;  
const dotsContainer = document.getElementById('dots');  
let currentIndex = 0;  
for(let i=0;i<slideCount;i++){  
  const dot = document.createElement('span');  
  dot.classList.add('dot');  
  if(i===0) dot.classList.add('active');  
  dot.onclick = () => goToSlide(i);  
  dotsContainer.appendChild(dot);  
}  
function goToSlide(index){  
  slides.style.transform = `translateX(-${index*100}%)`;  
  currentIndex = index;  
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===index));  
}  
setInterval(()=>{goToSlide((currentIndex+1)%slideCount);},5000);  
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {

    const href = link.getAttribute('href');

    // ✅ Internal section scroll (#)
    if(href.startsWith("#")){
      e.preventDefault();

      const target = document.querySelector(href);
      if(target){
        target.scrollIntoView({ behavior: "smooth" });
      }

      // close sidebar
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      menuBtn.classList.remove("active");
    }
    // ✅ ELSE: html pages → allow default behavior
  });
});
document.addEventListener("DOMContentLoaded", () => {

  /* Elements jahan animation chahiye */
  const elements = document.querySelectorAll(
    `
    section,
  
    .icon-item,
    .pop-card,
    .pad-card
    `
  );

  elements.forEach(el => {

    /* ❌ EXCLUDE CONDITIONS */
    if (
      el.closest("header") ||          // top header images
      el.closest("footer") ||          // bottom navigation
      el.classList.contains("info-bar")
    ) {
      return;
    }

    el.classList.add("reveal");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  }, { threshold:0.15 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

});
