# Random Pok&eacute;mon Generator
Generate a random pokémon based on your birthday

This is a simple project that generates a random pok&eacute;mon based on your birthday.

(This is not well made by no means at all)

Try it out at: https://deathhackz.github.io/Random-Pokemon-Generator

## How does it work?
1. Generate 365 Pok&eacute;mon id's for each day of the year, and store them as an array in LocalStorage
2. Match the users birthday to the pok&eacute;mon id's in the array
3. Make a request to Pok&eacute;Api and get info about the users pok&eacute;mon
4. Fetch and display official artwork, gen 5 & gen 6 static and animated sprites for users pok&eacute;mon

## Resourses
**Pok&eacute;mon Related**
* [Pok&eacute;Api](https://pokeapi.co/) (For Pok&eacute;mon id's and Names)
* [Pok&eacute;monDB](https://pokemondb.net/) (For Official Pok&eacute;mon Artwork)
* [Pok&eacute;monShowdownDex](https://dex.pokemonshowdown.com/) (For Pok&eacute;mon Sprites)

**Website Related**
* [Bootstrap](https://getbootstrap.com/) (For Responsive Website)
* [Bootstrap DatePicker](https://github.com/uxsolutions/bootstrap-datepicker) (For Birthday Input)
* [jquery](https://jquery.com/) (For Functions)
* [jqueryUi](https://jqueryui.com/) (For Autofill)
* [PapaParse](https://www.papaparse.com/) (For CSV Parsing)
