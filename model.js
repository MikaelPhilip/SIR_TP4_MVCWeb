
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
	//Créer un tableau de dessins (shape)
	this.dessins = new Array();
}

function Shape(color, size){
	//Initialistaion des deux variables communes à toutes les formes
	this.color =  color;
	this.size = size;
}

function Ligne(coordX1,coordY1,coordX2,coordY2,taille,color){
	//Appel de la super classe
	Shape.call(this, color, taille);

	//Initialisation des coordonnées des deux points 
	this.coordX1= coordX1;
	this.coordY1= coordY1;
	this.coordX2= coordX2;
	this.coordY2= coordY2;
}

function Rectangle(coordXHG,coordYHG,largeur,hauteur,taille,color){
	//Appel de la super classe
	Shape.call(this, color, taille);
	//Initialisation des coordonnées du point en haut à gauche
	this.coordXHG= coordXHG;
	this.coordYHG= coordYHG;
	//Initialisation Largeur et Hauteur
	this.largeur= largeur;
	this.hauteur= hauteur;
}

//Héritage pour les objets lignes et rectangles (sous classe de shape)
Ligne.prototype = new Shape();
Rectangle.prototype = new Shape();
