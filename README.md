# Lletres ballen - Amsterdam
Fem que canviïn les mides d'ample de les columnes i l'alt de les imatges cada segón.

`setInterval( nomdeFunció, numDeMilisegons)` és una funció de javascript que executarà una altra funció de manera repetida cada x milisegons. En el nostre cas, per cridar la funció `canviaMides` cada segón, li diem `1000` milisegons.
```
    setInterval( canviaMides, 1000 );
```

Fem servir jQuery per seleccionar els elements amb els quals volem treballar i per canviar el seu css.

També hem vist com demanar un número a l'atzar. La funció `Math.random()` ens dóna un número a l'atzar entre 0 i 1. Si volem un número entre 0 i x, hem de multiplicar el que ens doni `Math.random()` per aquesta x.
