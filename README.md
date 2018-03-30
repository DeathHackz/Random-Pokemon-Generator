# Random Pok&eacute;mon Generator
Generate a random pokémon based on your birthday

This is a noob project that generates a random pok&eacute;mon based on your birthday.

(This is not well made by no means at all)

Feel free to report [issues](https://github.com/DeathHackz/Random-Pokemon-Generator/issues/new), or make [useful edits](https://github.com/DeathHackz/Random-Pokemon-Generator/compare)

Check it out at https://deathhackz.github.io/Random-Pokemon-Generator

## How does it work?
* First generate 365 Pok&eacute;mon id's for each day of the year, and store them in an array
* Match the users birthday to the values in the array, once match is found send the id to a variable
* Make an ajax request to Pok&eacute;Api and get info about the users pok&eacute;mon id saved in the variable
* Fetch and display official artwork, and gen 5 & gen 6 sprites for users pok&eacute;mon

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
