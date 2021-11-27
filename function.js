var family_member_array=["Family.jpg", "Mother.png", "Father.png", "Child.png"];
var family_names_array=["My Family", "Niti", "Alok", "Vimmlesh"];

var i=0;
function change_image(){
    i++
    if(i==4)
    {
        i=0;
    }

    document.getElementById("img_family").src=family_member_array[i];;
    document.getElementById("text_family").innerHTML=family_names_array[i];;
}
