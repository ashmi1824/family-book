
var Names = ["Shubhrangshu Dasgupta", "Amarendu Biswas", "Gouri Biswas", "Ashoka Biswas"];
var Images = ["Baba.jpg","Dadu.jpg", "Didun.jpg", "Mamma.jpg"];

var i = 0;
function update()
{
    i++;
    var number_names = 4
    if(i >= number_names)
      {
          i = 0;
      }
    var newImages = Images[i];
    var newNames = Names[i];
    document.getElementById("family_member_image").src = newImages;
    document.getElementById("family_member_name").innerHTML = newNames;
}