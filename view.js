
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
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	
    /*this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });*/
};

//Ajout d'une fonction pour aovir la liste des shapes
function updateShapeList(drawing){
	//On récupere l'endroit ou on va rajoute le HTMl dans le DOM
	var shapeList=document.getElementById('shapeList');
	//Variable qui va contenir le code HTML qu'on va rajouter
	var contents="";
	//On récupere la lsite des formes que l'on parcourt
	var i=0; //compteur pour donner un id au formes
	drawing.dessins.forEach(function(shape, index) {
		//On ne met pas le meme contenu suivant que c'est n rectangle ou une ligne
		if(shape.type=="rectangle"){
			//Ajout d'un bouton devant ce bouton appelle une fonction delete(shape) (qui est dans le controleur) lorsqu'on click dessus
			contents+="<li><button type='button' class='btn btn-default' onclick='deleteShape("+i+")'><span class='glyphicon glyphicon-remove-sign'></span></button> rectangle " +i+": "+ shape.coordXHG +", "+shape.coordYHG+", "+shape.largeur+" , "+shape.hauteur+", "+shape.color+", "+shape.size+"</li>";
		}
		if(shape.type=="ligne"){
			contents+="<li><button type='button' class='btn btn-default' onclick='deleteShape("+i+")'><span class='glyphicon glyphicon-remove-sign'></span></button> ligne " +i+": "+shape.coordX1+", "+shape.coordY1+", "+shape.coordX2+" , "+shape.coordY2+", "+shape.color+", "+shape.size+"</li>";
		}
		i++;
	});
	
	//Ajout du contenue
	shapeList.innerHTML=contents;
}
