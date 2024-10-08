// import startpage from "./startpage.js"

window.onload = function(){
    document.getElementById('root').innerHTML = startpage();
    
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.1)';
            item.style.transition = 'transform 0.3s';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("backToTopBtn").style.display = "block";
        } else {
            document.getElementById("backToTopBtn").style.display = "none";
        }
    }

    document.getElementById("backToTopBtn").onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    
}