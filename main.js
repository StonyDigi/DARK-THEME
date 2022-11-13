//Ki kell választanunk a checkboxot és hozzá kell adnunk egy eseményt
//Ha változik a checkbox állapota(change esemény ezt vizsgálja)
document.getElementById("checkbox").addEventListener("change", function(){
    //Akkor hozzáadunk vagy elveszünk egy classt egy bodyhoz/bodyról annak függvényében, hogy milyen a checkbox állapota(be van pipálva vagy nincs)
    document.body.classList.toggle("dark");

})