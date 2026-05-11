const dvd = document.getElementById('ball');
const score= document.getElementById('score');
const sad = document.getElementById('pop');
let x_incr = 5;
let y_incr = 5;

let bonked = true;
const bonk = document.getElementById("ouch");

function init() {
    dvd.style.position = 'absolute';
    dvd.style.top = `${x_incr}px`;
    dvd.style.left = `${y_incr}px`;
    for(var i = 0; i < 50; i++){
        dvd.click();
        console.log("c"+ i)}

    

    // animate the logo
    requestAnimationFrame(animate);
}

// Change the color of the DVD logo


let you_hit_ball = 0;

dvd.addEventListener("mouseover" || "click",() =>{ 
    bonk.play();
    x_incr = 5;
    y_incr= 5;
    you_hit_ball += 1;
    x_incr = -x_incr;




    
    if (you_hit_ball >= 1000){
        sad.play();
        score.innerText = `Ah shit it poped ps: What are you doing go do litterly anthing else better with your time`;
        bonk.muted = true;
        dvd.remove();
        
    }else{
        if(Math.floor(Math.random()*4)%2 === 0){
        y_incr = -y_incr;
    }   else{y_incr += 10}
        bonk.play();
        score.innerText = `You hit the ball ${you_hit_ball} times`;
    }
});
function handle_collision() {
    let dvd_height = dvd.offsetHeight;
    let dvd_width = dvd.offsetWidth;
    let dvd_top = dvd.offsetTop;
    let dvd_left = dvd.offsetLeft;
    let win_height = window.innerHeight;
    let win_width = window.innerWidth;

    



    if (dvd_left <= 0 || dvd_left + dvd_width >= win_width) {
        // reverse x_incr
        
        if(x_incr <= 25 && x_incr >0){
          x_incr++;
        }
        x_incr = -x_incr;
    }

    if (dvd_top <= 0 || dvd_top + dvd_height >= win_height) {
        // reverse y_incr
        if(y_incr <= 25 && y_incr >0){
          y_incr++;

        }
        y_incr = -y_incr;
        bonk.play();
    }

}

function animate() {
    
    handle_collision();
    dvd.style.top = `${dvd.offsetTop + y_incr}px`;
    dvd.style.left = `${dvd.offsetLeft + x_incr}px`;
    
    requestAnimationFrame(animate);
}

init();


document.addEventListener("resize", {
  handle_collision 
  
})