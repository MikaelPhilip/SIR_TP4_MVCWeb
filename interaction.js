// La création d'un Dnd requière un canvas et un interacteur.
/*Classe Dnd (qu'on définit avec une fonction qui fait office de constructeur*/
function DnD(canvas, interactor) {
	
	this.coordXinit= 0;
	this.coordYinit= 0;
	this.coordXfin= 0;
	this.coordYfin= 0;
	//Variable qui indique si on dessine quelque chose ou non
	this.drawEnable = false;

	/*On rajoute à notre classe DnD les méthodes*/
	//Ne pas oublier de lier la méthode à la classe avec le prototype
	
	DnD.prototype.mouseDown = function(evt) {
		//Enregistrement des coordonnées de départ
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
			//Maj coordonnées de fin
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
	
	//Ajout des évenements aux listeners
	canvas.addEventListener('mousedown', this.mouseDown, false);
	canvas.addEventListener('mousemove', this.mouseMove, false);
	canvas.addEventListener('mouseup', this.mouseUp, false);
};


//Methode qui place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



