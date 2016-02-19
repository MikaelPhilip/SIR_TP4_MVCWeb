//Initialisation
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
//new DnD(canvas);
//ctx.fillStyle = '#F0F0F0'; // set canvas' background color
//ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas

// Code temporaire pour tester l'affiche de la vue
//var rec = new Rectangle(10, 20, 50, 100, 5, '#0ffCC0');
//Test d'affichage et d'ajout dans la liste du dessin
//console.log(rec);
//reccan;

//var ligne = new Ligne(10, 20, 50, 100, 5, '#00CCC0');
//Test d'affichage
//console.log(ligne);
//ligne.paint(ctx);

// Tester également Dessin.
//Code temporaire pour tester le dessin
//var draw = new Drawing();
//Test d'ajout dans la liste des dessins
//draw.dessins.push(rec);
//draw.dessins.push(ligne);
//Test d'affichage
//console.log(draw);
////

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

