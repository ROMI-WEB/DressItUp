function dressItUp () {
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
};

dressItUp.prototype.restore = function () {
    broccoli = broccoliSaved;
};

dressItUp.prototype.addElement = function (element) {
  element.removeClass("hide");
};

dressItUp.prototype.hideElement = function (element) {
    element.addClass("hide");
};
   