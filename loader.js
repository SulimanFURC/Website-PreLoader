var websiteLoader= document.getElementById('webiste-loader');
window.addEventListener('load', vanish);

function vanish(){
    websiteLoader.classList.add("disapper");
    // websiteLoader.style.display = 'none';
}