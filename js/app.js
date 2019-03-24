var btn_scroll = document.getElementById("block-btn-scroll");
window.onload = function() {
    btn_scroll.addEventListener("click", function() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
         
    });
    
    window.addEventListener('scroll', function() {
        var position_animation = window.scrollY;
        var size_width_screen = window.screen.width;
        
        if ( position_animation >= 20) { 
            btn_scroll.style.display = 'flex';
        } else {
            btn_scroll.style.display = 'none';
        }
    });
}