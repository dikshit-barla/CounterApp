document.addEventListener('DOMContentLoaded', function(){
    var cnt = 0;
    let incbutton = document.querySelector('#inc');
    let decbutton = document.querySelector('#dec');
    let det = document.querySelector('#details');
    incbutton.addEventListener('click',()=>{
        cnt++;
        det.textContent = cnt;
    });
    decbutton.addEventListener('click', ()=>{
        cnt--;
        det.textContent = cnt;
    });
})