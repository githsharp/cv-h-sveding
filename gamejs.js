var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
function jump(){
    /* only add the jump-class if it has not already been added (within 500ms) */
    if(character.classList == "animate"){return}
        character.classList.add("animate");
    /* setting timeout to add classList again ie get character jump again */
    setTimeout(function(){
        character.classList.remove("animate");
    }, 300)
}





