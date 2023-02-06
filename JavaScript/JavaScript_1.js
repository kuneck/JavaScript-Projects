function hero_function() {
    var hero_output;
    var heroes = document.getElementById("Hero").value;
    var hero_string = " is a great hero!";
    switch(heroes) {
        case "Superman":
            hero_output = "Superman" + hero_string;
        break;
        case "Batman":
            hero_output = "Batman" + hero_string;
        break;
        case "Spiderman":
            hero_output = "Spiderman" + hero_string;
        break;
        case "Thor":
            hero_output = "Thor" + hero_string;
        break;
        case "Hulk":
            hero_output = "Hulk" + hero_string;
        break;
        case "Ironman":
            hero_output = "Ironman" + hero_string;
        break;
        case "Flash":
            hero_output = "Flash" + hero_string;
        break;
        case "Captain America":
            hero_output = "Captain America" + hero_string;
        break;
        case "Wolverine":
            hero_output = "Wolverine" + hero_string;
        break;
        case "Deadpool":
            hero_output = "Deadpool" + hero_string;
        break;
        case "Aquaman":
            hero_output = "Aquaman" + hero_string;
        break;
        case "Batman":
            hero_output = "Batman" + hero_string;
        break;
        default:
        hero_output = "Please enter a hero's name exactly as written on the abote list."
    }
    document.getElementById("Output").innerHTML = hero_output;
}

function assemble_function() {
    var A = document.getElementsByClassName("Avengers");
    A[0].innerHTML = "Assemble!";
}

var c = document.getElementById("Japan");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250,125,80,0,2*Math.PI);
ctx.lineWidth = "4";
ctx.stroke();
ctx.fillStyle = "#FF0000";
ctx.fill();

var grd = ctx.createLinearGradient(1, 250, 250, 500);
grd.addColorStop(0, "rgba(236, 236, 236, 0.5");
grd.addColorStop(1, "rgba(210, 50, 50, 0.5");
ctx.fillStyle = grd;
ctx.fillRect(0,0,500,250);


