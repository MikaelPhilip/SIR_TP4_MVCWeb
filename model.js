/*Implémentation des 4 classes du site*/

/*Classe dessin*/
function Drawing(){
	//Créer un tableau de dessins (shape)
	this.dessins = new Array();
}

/*Super-classe forme*/
function Shape(color, size, type){
	//Initialisation des deux variables communes à toutes les formes
	this.color = color;
	this.size = size;
	//Ajout pour indiquer son type
	this.type= type;
}

/*Classe ligne*/
function Ligne(coordX1,coordY1,coordX2,coordY2,color, size){
	//Appel de la super classe (forme)
	Shape.call(this, color, size, "ligne");
	//Initialisation des coordonnées des deux points 
	this.coordX1= coordX1;
	this.coordY1= coordY1;
	this.coordX2= coordX2;
	this.coordY2= coordY2;
}

/*Classe rectangle*/
function Rectangle(coordXHG,coordYHG,largeur,hauteur,color, size){
	//Appel de la super classe (forme)
	Shape.call(this, color, size,"rectangle");
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
