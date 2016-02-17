 
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
		
	/*//Event lorsqu'on clique sur le bouton ligne
	document.getElementById("butLine").onclick = function () {	
		this.currEditingMode = editingMode.line;
		
	}	
	//Event lorsqu'on clique sur le bouton rectangle
	document.getElementById("butRect").onclick = function changeRect() {	
		this.currEditingMode = editingMode.rect;
	}
	//Event lorsqu'on clique sur le spinner
	document.getElementById("spinnerWidth").addEventListener("click", changeSize(this));
	function changeSize(pencil) {	
		pencil.currLineWidth = document.getElementById("spinnerWidth").value;
	}		
	
	//Event lorsqu'on clique sur le panel de couleur 
	document.getElementById("colour").addEventListener("change", changeCouleur(this));
	function changeCouleur(pencil) {	
		pencil.currColour = document.getElementById("colour").value;
	}*/	
	
	new DnD(canvas, this);

	// Implémentation des 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	
	//Demarrage du dessin : création du rectangle/ligne suivant le choix fait, on donne en paramêtre le dnd (qui a les coordonées dans le canvas)
	Pencil.prototype.onInteractionStart = function(dnd) {
		//Variable local pour la couleur et la taille (pour éviter d'affecter TOUTE les formes)
		this.currColour =document.getElementById("colour").value;
		this.currLineWidth=document.getElementById("spinnerWidth").value;
		if(document.getElementById("butLine").checked){
			this.currentshape = new Ligne(dnd.coordXinit,dnd.coordYinit,dnd.coordXinit,dnd.coordYinit,this.currColour,this.currLineWidth);
		}else if (document.getElementById("butRect").checked){
			this.currentshape = new Rectangle(dnd.coordXinit,dnd.coordYinit,0,0,this.currColour,this.currLineWidth);
		}else{
			Console.log("forme invalide");
		}
	}.bind(this);
	
	//Maj en temps réel des coordonnées la forme, on donne en paramêtre le dnd (qui a les coordonées dans le canvas)
	Pencil.prototype.onInteractionUpdate = function(dnd) {
		if(document.getElementById("butLine").checked){
			this.currentshape.coordX2=dnd.coordXfin;
			this.currentshape.coordY2=dnd.coordYfin;
		}else if (document.getElementById("butRect").checked){
			this.currentshape.largeur=dnd.coordXfin - dnd.coordXinit;
			this.currentshape.hauteur=dnd.coordYfin - dnd.coordYinit;
		}else{
			Console.log("forme invalide");
		}
	}.bind(this);
	
	//Fin de l'interaction : On affiche la forme r sur le canvas et enregistrement dans la liste des formes
	Pencil.prototype.onInteractionEnd = function() {
		this.currentshape.paint(ctx);
		//Ajout dans la liste du shape
		drawing.dessins.push(this.currentshape);
	}.bind(this);
};


