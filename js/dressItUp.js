function dressItUp () {
    var self = this;
    /**
     * Personaje sobre el que se va a trabajar
     * @type Character
     */
    var broccoli = new Character();
    
    /**
     * Copia del personaje para su posterior restauración en caso de necesitarlo
     * @type Character
     */
    var broccoliSaved = new Character();
    
    var show = function (element) {
        element.style.visibility = "visible";
    };
    
    var hide = function (element) {
        element.style.visibility = "hidden";
    };

    /**
     * Se asegura de no superponer elementos
     * @returns {undefined}
     */
    var addElement = function () {
        if (this.id.substring(0, 6) == "button") {
            if(this.id.length > 13) { // Its a moustache
                hide(broccoli.moustacheOne);
                hide(broccoli.moustacheTwo);
                hide(broccoli.moustacheThree);
                hide(broccoli.moustacheFour);
                hide(broccoli.moustacheFive);
            } else if (this.id === "buttonbow" || this.id === "buttontie") {
                hide(broccoli.bow);
                hide(broccoli.tie);
            }
            show(document.getElementById(this.id.substring(6)));
        }
    };
    
    /**
     * Listeners para agregar elementos desde los botonces de control
     */
    broccoli.buttonGlasses.addEventListener("click", addElement);
    broccoli.buttonTie.addEventListener("click", addElement);
    broccoli.buttonBow.addEventListener("click", addElement);
    broccoli.buttonHat.addEventListener("click", addElement);
    broccoli.buttonMoustacheOne.addEventListener("click", addElement);
    broccoli.buttonMoustacheTwo.addEventListener("click", addElement);
    broccoli.buttonMoustacheThree.addEventListener("click", addElement);
    broccoli.buttonMoustacheFour.addEventListener("click", addElement);
    broccoli.buttonMoustacheFive.addEventListener("click", addElement);

};

dressItUp.prototype.restore = function () {
    broccoli = broccoliSaved;
};

dressItUp.prototype.addElement = function () {
    this.style.visibility = "visible";
};

dressItUp.prototype.hideElement = function () {
    this.style.visibility = "hidden";
};

var broccoli = new dressItUp();
   