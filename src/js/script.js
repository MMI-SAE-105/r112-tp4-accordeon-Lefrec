const accordeon = document.querySelector(".accordeon");
accordeon.addEventListener("click",(evt)=> accordeon.querySelectorAll("details").forEach((det) => (det.open = false)));