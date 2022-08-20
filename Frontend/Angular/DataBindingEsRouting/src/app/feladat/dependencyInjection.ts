namespace dependencyInjectionNelkul{
    class SzemelyesAdat{
        constructor(/*teljes_nev:string*/){}
    }


    class JarmuAdat{
        constructor(){}
    }


    class Jarmuvezeto{
        vezeto:SzemelyesAdat;
        jarmu:JarmuAdat;
        constructor(){
            this.vezeto = new SzemelyesAdat();
            this.jarmu = new JarmuAdat();
        }
    }

    let ujSofor = new Jarmuvezeto();
}


namespace dependencyInjectionHasznalataval{

    class SzemelyesAdat{
        constructor(vezNev:string, kerNev:string){
            this.teljesNev = vezNev + kerNev
        }
    }


    class JarmuAdat{
        constructor(marka:string){}
    }


    class Jarmuvezeto{
        vezeto:SzemelyesAdat;
        jarmu:JarmuAdat;
        constructor(vezeto:SzemelyesAdat, jarmu:JarmuAdat){
            this.vezeto = vezeto;
            this.jarmu = jarmu;
        }
    }

    let soforNeve = new SzemelyesAdat("Békés", "Csaba");
    let soforAuto = new JarmuAdat("BMW");
    let ujSzallito = new Jarmuvezeto(soforNeve, soforAuto);
}