# Vue Email List

## HTML

- Includo nel mio file html Axion.js e Vue.js tarmite cdn e     includo anche il mio file javascript

- creo un div con id= "app" che fungerà da contnitore per vue, all'inteno vado a creare una lista che conterrà le email generate

- creo un bottone che avvia la generazione delle mail

- creo un istanza di vue collegata all'elemento id='app'

-  definisco data() affinchè sia generato un array vuoto che contenente le mail generate, il numero totale delle mail e la variabile loading per il caricamento

- defenisco un metodo generateEmails che viene chiamato quando si preme sul pulsante e inizia a generare le mail, dopo che la variabile loading è impostata su true  e l'arry resettato

- defenisco un metodo che utilizza Axios, e che ogni volta viene generat una mail l'aggiunga all'arry