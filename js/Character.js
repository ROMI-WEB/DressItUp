function Character () {
    
    /* Elementos del personaje */
    this.skinElements = $('.skin');
    this.shirtElements = $('.shirt');
    this.bow = document.getElementById('bow');
    this.tie = document.getElementById('tie');
    this.beltElements = $('.belt');
    this.pantsElements = $('.pants');

    this.glasses = document.getElementById('glasses');
    this.hat = document.getElementById("hat");
    this.guitar = document.getElementById('guitar');
    this.suitcase = document.getElementById('suitcase');
    this.moustacheOne = document.getElementById("firstmoustache");
    this.moustacheTwo = document.getElementById("secondmoustache");
    this.moustacheThree = document.getElementById("thirdmoustache");
    this.moustacheFour = document.getElementById("fourthmoustache");
    this.moustacheFive = document.getElementById("fifthmoustache");
    
    /* Elementos para el control del personaje */
    this.buttonGlasses = document.getElementById("buttonglasses");
    this.buttonTie = document.getElementById("buttontie");
    this.buttonBow = document.getElementById("buttonbow");
    this.buttonHat = document.getElementById("buttonhat");
    this.buttonMoustacheOne = document.getElementById("buttonfirstmoustache");
    this.buttonMoustacheTwo = document.getElementById("buttonsecondmoustache");
    this.buttonMoustacheThree = document.getElementById("buttonthirdmoustache");
    this.buttonMoustacheFour = document.getElementById("buttonfourthmoustache");
    this.buttonMoustacheFive = document.getElementById("buttonfifthmoustache");
    
    this.setDefaultStyle();

};

Character.prototype.setDefaultStyle = function () {
    this.moustacheOne.style.visibility = "hidden";
    this.moustacheThree.style.visibility = "hidden";
    this.moustacheFour.style.visibility = "hidden";
    this.moustacheFive.style.visibility = "hidden";

    this.tie.style.visibility = "hidden";
};