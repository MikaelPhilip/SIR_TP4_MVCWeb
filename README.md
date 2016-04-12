#TP Web : Javascript et HTML5 

Ce tp a pour but de voir l'application d'une architecture MVC avec les languages web notament le JS.Ici on n'utilise pas de librairie comme AngularJS afin de bien comprendre le MVC et également de voir les difficultés que cela pose.

##Listener

Le listener ici (interaction.js ici) permet de gerer tout les interactions plus ou moins compliqués que l'on va faire sur le site.Ici, il s'agit tout simplement des interactions que l'on fait avec la souris:  
--> Appuyer sur le bouton (enregistrer la premiere position et passer en mode dessin).  
--> Deplacer la souris (si on est en mode dessin,on enregistre la seconde position).  
--> relacher la souris (desactivation du mode dessin).  

A noter que chaque methode appelle une méthode du controleur qui va se charger de faire toute les actions suite à ces interactions.

##Model

Le modéle décrit la structure de chaque objet de notre site web.Ici nous avons:  
--> L'objet drawing (le canvas en general).  
--> Les objets lignes et rectangles qui sont des sous-classe de l'objet Shape.  

##View

La vue va s'occuper de mettre à jour l'interface,l'IHM. C'est donc ici qu'on tracera les formes sur le canvas:  
--> Une méthode paint pour les formes en general.  
--> Une méthode paint pour les rectangles et une autre méthode pour les lignes.  
--> Une méthode qu'initialise le fond du canvas (Drawing.paint).  

On va également dans la view s'occuper de la generation d'une liste des formes présentes sur le dessin avec une methode updateShapeList(drawing) et on va gerer la suppression d'une forme également (deleteShape(index)).

##Controleur

Le controleur va donc faire l'ensemble des traitements en appellant, suite à des interactions sur les listeners, des méthodes du model ou de la view.Nous avons trois méthodes qui correspondent aux trois interactions dans le listener:

--> onInteractionStart correspond au demarrage du dessin : création de l'objet qui représente le rectangle/ligne suivant le choix fait, on donne en paramêtre le dnd(listneners) qui a les coordonées dans le canvas.  
--> onInteractionUpdate correspond à la maj en temps réel des coordonnées de la forme, on donne en paramêtre le dnd qui a les coordonées dans le canvas.  
--> onInteractionEnd correspond à la fin de l'interaction : On affiche la forme sur le canvas et on fait enregistrement dans la liste des formes ainsci que la mise à jour de la liste des formes.  
	
#Completé par Mikael Philip et Seifeddine Jelassi 
