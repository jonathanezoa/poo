

class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.date = (new Date()).toDateString();
    }
    hello(){
        console.log("bonjour je m'appel "+this.firstname+" "+this.lastname+" et j'ai "+this.age+" ans");
    }
}

class Etudiant extends Person{
    constructor(firstname,lastname,age,level,sector){
        super(firstname,lastname,age);
        this.level = level;
        this.sector = sector;
    }
    getLevel(){
        console.log("Level: "+this.level)
    }
    getSector(){
        console.log("Sector: "+this.sector)
    }
};

var getValues = (obj) => {
    var getObject = Object.entries(obj);
    document.getElementById("test").innerHTML = '';
    getObject.forEach(tab => {
        var result = '<div>'+tab[0]+" ="+tab[1]+'</div>';
        document.getElementById("test").innerHTML += result;
        
    });
}

var jonathan = new Etudiant('josias', 'ezoa', 24,"master", "informatique");