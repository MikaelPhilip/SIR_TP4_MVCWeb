
//Methode pour la classe forme pour regler la couleur et la largeur du trait des formes qu'on va dessiner
Shape.prototype.paint = function(ctx){
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.size;
}

//Methode pour dessiner un rectangle
Rectangle.prototype.paint = function(ctx) {
	ctx.beginPath(); //Toujours l'appeller pour initialiser un tracé (permet de bien séparer chaque tracé)
	//Gestion couleur et largeur du trait
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.size;
	//Création de la forme sur le canvas
    ctx.rect(this.coordXHG, this.coordYHG, this.largeur, this.hauteur);
    ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
	ctx.beginPath();
	//Gestion couleur et largeur du trait
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.size;
	//Création de la forme sur le canvas
    ctx.moveTo(this.coordX1, this.coordY1);
    ctx.lineTo(this.coordX2, this.coordY2);
    ctx.stroke();

};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

//Ajout d'une fonction pour avoir la liste des shapes
function updateShapeList(drawing){
	//On récupere l'endroit où on va rajouter le HTML dans le DOM
	var shapeList=document.getElementById('shapeList');
	//Variable qui va contenir le code HTML qu'on va rajouter
	var contents="";
	//On récupere la liste des formes que l'on parcourt
	var i=0; //compteur pour donner un id au formes
	drawing.dessins.forEach(function(shape, index) {
		//On ne met pas le meme contenu suivant que c'est un rectangle ou une ligne
		if(shape.type=="rectangle"){
			//Ajout d'un bouton devant, ce bouton appelle une fonction delete(shape) lorsqu'on clique dessus
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

//Fonction pour supprimer un element dans le canvas (lors du clique sur le bouton delete)
function deleteShape(index){
	//On supprime toutes les formes
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawing.paint(ctx);
	//On supprime de la liste l'element qui a l'index du paramêtre
	drawing.dessins.splice(index, 1);
	//On reparcourt la liste et on retrace tout
	drawing.dessins.forEach(function(shape) {
		shape.paint(ctx);
	});
	//Maj de la liste
	updateShapeList(drawing);
}
