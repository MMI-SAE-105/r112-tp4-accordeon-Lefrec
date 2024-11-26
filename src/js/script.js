const accordeon = document.querySelector(".accordeon");
accordeon.addEventListener("click",(evt)=> accordeon.querySelectorAll("details").forEach((elm) => elm.open = false));