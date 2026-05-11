const boop_sound = document.getElementById("BOOP")

let Booping = true;
const noise = document.getElementById("nose");
noise.addEventListener("click", ()=>{
    if(Booping){
        boop_sound.play();

    }
    Booping = !Booping;
});
