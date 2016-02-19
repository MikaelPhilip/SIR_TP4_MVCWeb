 
var editingMode = { rect: 0, line: 1 };

/*Classe Pencil: le controlleur de notre canvas c'ets qui va appeller les listeners,les modeles et la view pour faire les tracés*/
function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	//Fonctions liées aux widgets pour changer les variables (non utilisées finalement car on récupére directement la valeur des widgets ce qui est moins lourds que de passer par une fonction listener)
		
	//Event lorsqu'on clique sur le bouton ligne
	/*document.getElementById("butLine").addEventListener("click", function(){changeLine(this)}); 
	function changeLine(pencil) {		
		pencil.currEditingMode = editingMode.line;
	}
	
	//Event lorsqu'on clique sur le bouton rectangle
	document.getElementById("butRect").addEventListener("click", function(){changeRect(this)}); 
	function changeRect(pencil) {	
		pencil.currEditingMode = editingMode.rect;
	}
	//Event lorsqu'on clique sur le spinner
	document.getElementById("spinnerWidth").addEventListener("click", function(){ changeSize(this)}); // function(){ ...} indispensable pour passer les paramêtres
	function changeSize(pencil) {	
		pencil.currLineWidth = document.getElementById("spinnerWidth").value;
	}	
	
	//Event lorsqu'on clique sur le panel de couleur 
	document.getElementById("colour").addEventListener("change", function(){changeCouleur(this)});
	function changeCouleur(pencil) {	
		pencil.currColour = document.getElementById("colour").value;
	}*/
	
	new DnD(canvas, this);

	// Implémentation des 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	
	//Demarrage du dessin : création de l'objet qui représente le rectangle/ligne suivant le choix fait, on donne en paramêtre le dnd (qui a les coordonées dans le canvas)
	Pencil.prototype.onInteractionStart = function(dnd) {
		//Maj des variables de la couleur et de l'epaisseur du trait
		this.currColour= document.getElementById("colour").value;
		this.currLineWidth= document.getElementById("spinnerWidth").value;
		//Si on a chosit de tracer une ligne alors on crée un objet ligne
		if(document.getElementById("butLine").checked){
			this.currentshape = new Ligne(dnd.coordXinit,dnd.coordYinit,dnd.coordXinit,dnd.coordYinit,this.currColour,this.currLineWidth);
		//Si on a chosit de tracer un rectangle alors on crée un objet rectangle
		}else if (document.getElementById("butRect").checked){
			this.currentshape = new Rectangle(dnd.coordXinit,dnd.coordYinit,0,0,this.currColour,this.currLineWidth);
		}else{
			Console.log("forme invalide");
		}
	}.bind(this);
	
	//Maj en temps réel des coordonnées de la forme, on donne en paramêtre le dnd (qui a les coordonées dans le canvas)
	Pencil.prototype.onInteractionUpdate = function(dnd) {
		//La maj des données dépends du type de la forme qu'on a choisit
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
	
	//Fin de l'interaction : On affiche la forme sur le canvas et enregistrement dans la liste des formes
	Pencil.prototype.onInteractionEnd = function() {
		this.currentshape.paint(ctx);
		//Ajout dans la liste du shape
		drawing.dessins.push(this.currentshape);
		//Maj de la liste
		updateShapeList(drawing);
		//Reset du currentShape
		this.currentShape =0;
	}.bind(this);
};



