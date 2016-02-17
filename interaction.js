
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	/*Classe Dnd (qu'on définit avec une fonction qui fait office de constructeur*/
	this.coordXinit= 0;
	this.coordYinit= 0;
	this.coordXfin= 0;
	this.coordYfin= 0;
	//variable qui indique qu'on dessine quelque chose
	this.drawEnable = false;

	/*On rajoute à notre classe DnD les méthodes*/
	//Ne pas oublier de lier à la classe le prototype
	DnD.prototype.mouseDown = function(evt) {
		//Enregistrement des coordonnées de départs
		var mousePos = getMousePosition(canvas, evt);
		this.coordXinit = mousePos.x;
		this.coordYinit = mousePos.y;
		//Activation du mode dessin
		this.drawEnable = true;
		//Test 
		/*console.log("mouse down");
		console.log("corXinit: "+ this.coordXinit);
		console.log("corYinit: "+ this.coordYinit);
		console.log("corXfin: "+ this.coordXfin);
		console.log("corYfin: "+ this.coordYfin);
		console.log("mode dessin "+ this.drawEnable);*/
		interactor.onInteractionStart(this); //notifier l'utilisateur
		
	}

	DnD.prototype.mouseMove = function(evt) {
		if (this.drawEnable == true){
			//Maj coordonnées fin
			var mousePos = getMousePosition(canvas, evt);
			this.coordXfin = mousePos.x;
			this.coordYfin = mousePos.y;
			//Test 
			/*console.log("mouse move");
			console.log("corXinit: "+ this.coordXinit);
			console.log("corYinit: "+ this.coordYinit);
			console.log("corXfin: "+ this.coordXfin);
			console.log("corYfin: "+ this.coordYfin);
			console.log("mode dessin "+ this.drawEnable);*/
			interactor.onInteractionUpdate(this); //notifier l'utilisateur
		}
		
	}

	DnD.prototype.mouseUp = function(evt) {
		//Desactivation mode dessin
		if (this.drawEnable == true){
			this.drawEnable = false;
			interactor.onInteractionEnd(this); //notifier l'utilisateur
		}
		//Test 
		/*console.log("mouse up");
		console.log("corXinit: "+ this.coordXinit);
		console.log("corYinit: "+ this.coordYinit);
		console.log("corXfin: "+ this.coordXfin);
		console.log("corYfin: "+ this.coordYfin);
		console.log("mode dessin "+ this.drawEnable);*/
	}
	
	//Ajout des évenements
	canvas.addEventListener('mousedown', this.mouseDown, false);
	canvas.addEventListener('mousemove', this.mouseMove, false);
	canvas.addEventListener('mouseup', this.mouseUp, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



