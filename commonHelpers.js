import{i as a,S as h}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f=document.querySelector(".submitForm"),p=document.querySelector(".submitInput"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),y="41590527-3cc425bd48b0e10304cc9b3d1",g="https://pixabay.com/api/";f.addEventListener("submit",b);l();function b(n){n.preventDefault();let o=p.value;if(u.innerHTML="",k(),o===""){l(),a.error({title:"Error",timeout:"2000",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}const s=new URLSearchParams({key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${g}?${s}`).then(r=>{if(c.style.display="none",!r.ok)throw new Error("Request is not ok");return r.json()}).then(r=>{if(r.hits.length===0){l(),a.error({title:"Error",timeout:"2000",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}u.innerHTML=v(r.hits),new h(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0}).refresh()}).catch(r=>a.error({title:"Error",timeout:"2000",message:r,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"}))}function v(n){return n.reduce((o,{webformatURL:s,largeImageURL:r,tags:e,likes:t,views:i,comments:d,downloads:m})=>o+` <li class="gallery-item">
              
              <a class="gallery-link" href="${r}">
                  <img
                  src="${s}"
                  alt="${e}"
                  width="360"
                  />
              </a>    
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${i}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${d}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${m}</p>
            </div>
          </div>              
       </li>`,"")}function k(){c.style.display="block"}function l(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
