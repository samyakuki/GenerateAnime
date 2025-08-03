const btnelement = document.getElementById("btn");
const containerelement = document.querySelector(".anime-container");
const imageelement = document.querySelector(".anime-img");
const animeNameElement = document.querySelector(".anime-name");
const loaderElement = document.querySelector(".loader");

btnelement.addEventListener("click", async function () {
    try {
        
        loaderElement.style.display = "block";
        animeNameElement.textContent = "";
        imageelement.style.display = "none";
        btnelement.disabled = true;

        const res = await fetch("https://api.waifu.pics/sfw/waifu");
        const data = await res.json();

        containerelement.style.display = "block";
        imageelement.src = data.url;
        imageelement.onload = () => {
            loaderElement.style.display = "none";
            imageelement.style.display = "block";
            animeNameElement.textContent = Math.random().toString(36).substring(7); 
            btnelement.disabled = false;
            btnelement.textContent = "Generate Another Picture";
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        loaderElement.style.display = "none";
        animeNameElement.textContent = "Failed to load image";
        imageelement.src = "";
        btnelement.disabled = false;
    }
});
