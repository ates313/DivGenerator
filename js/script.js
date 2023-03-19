
function actv() {
    document.getElementById('active').innerHTML = "ON"
    document.getElementById('active').style.backgroundColor="green"
    
    let object = document.getElementById('object')
    let w = document.getElementById("w").value
    let w_select = document.getElementById("w_select").value
    let h = document.getElementById("h").value
    let h_select = document.getElementById("h_select").value
    let bgColor = document.getElementById("bgColor").value
    let float = document.getElementById("float").value
    let textI = document.getElementById("textI").value
    let text_s = document.getElementById("text_s").value
    let t_color = document.getElementById("t_color").value
    let BorderRadius = document.getElementById("BorderRadius").value

    object.style.width = w + w_select;
    object.style.height = h + h_select;
    object.style.background = bgColor;
    object.style.float = float;
    object.innerHTML = textI;
    object.style.fontSize = text_s;
    object.style.color = t_color;
    object.style.borderRadius = BorderRadius;
}