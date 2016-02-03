
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

//Method to manage ctx color and line for shapes
Shape.prototype.paint = function(ctx){
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.size;
}

Rectangle.prototype.paint = function(ctx) {
	//Manager color and size
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.size;
    ctx.rect(this.coordXHG, this.coordYHG, this.largeur, this.hauteur);
    ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
	//Manager color and size
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.size;
    ctx.beginPath();
    ctx.moveTo(this.coordX1, this.coordY1);
    ctx.lineTo(this.coordX2, this.coordY2);
    ctx.stroke();

};

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

