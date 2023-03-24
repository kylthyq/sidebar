const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeswitch = body.querySelector(".toggle-switch"),
    modeTxt = body.querySelector(".mode-text");

    toggle.addEventListener("click",() =>{
        sidebar.classList.toggle("close");
    });

    modeswitch.addEventListener("click",() =>{
        body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeTxt.innerText = "Light Mode"
    }else{
        modeTxt.innerText = "Dark Mode"
    }
});
