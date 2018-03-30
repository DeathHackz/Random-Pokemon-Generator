Papa.parse("https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon.csv", {
  download: true,
  header: true,
  preview: 0,
  complete: function(results) {
    var length = results.data.length;
    for (i = 0; i < length; i++) {
      var Pkm = results.data[i].identifier;
      results.data[i].label = results.data[i]['identifier'];
      results.data[i].value = results.data[i]['identifier'];
      delete results.data[i].identifier;

      $(function() {
        var availableTags = results.data
        $("#UserChoice").autocomplete({
          source: availableTags,
          minLength: 2,
        });
      });

    }
  }
});


function UnlockPkm() {
  var delayInMillisecondsnx = 10000;
  $("#hiddenbtn").attr("data-toggle", 'modal');
  setTimeout(function() {
    $("#hiddenbtn").removeAttr("data-toggle", 'modal');
  }, delayInMillisecondsnx);
}

function getPokemon() {
  var randomNum = FinalVal;
  // var randomNum = Math.floor(Math.random() * (802 - 1 + 1)) + 1;
  var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + randomNum;
  var pokeDB = "https://pokemondb.net/pokedex/" + randomNum;
  var start = new Date().getTime();

  $.ajax({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/" + randomNum
  }).then(function(data) {
    $.getJSON(pokeURL, function(data) {
      // console.log(data);
      // console.log(JSON.stringify(data, null, "  "));
      var pokeID = data.id;
      var pokeName = data.name;
      var pokeNormSprite = data.sprites.front_default;
      var pokeShinySprite = data.sprites.front_shiny;
      var pokeType1 = data.types[0].type.name;
      if (data.types.length == 2) {
        var pokeType1 = data.types[1].type.name;
        var pokeType2 = data.types[0].type.name;
      } else var pokeType2 = null;

      var pokeNameUp = pokeName.substr(0, 1).toUpperCase() + pokeName.substr(1);
      // console.log(pokeNameUp);
      var fetchname = pokeName.replace(/-/g, "");
      // console.log("Fetchname: ", fetchname);
      var artwork = "https://img.pokemondb.net/artwork/" + pokeName + ".jpg"
      var gen6norm = "https://play.pokemonshowdown.com/sprites/xy/" + pokeName + ".png"
      var gen6shiny = "https://play.pokemonshowdown.com/sprites/xy-shiny/" + pokeName + ".png"
      var gen6normani = "https://play.pokemonshowdown.com/sprites/xyani/" + pokeName + ".gif"
      var gen6shinyani = "https://play.pokemonshowdown.com/sprites/xyani-shiny/" + pokeName + ".gif"
      var gen5norm = "https://play.pokemonshowdown.com/sprites/bw/" + pokeName + ".png"
      var gen5shiny = "https://play.pokemonshowdown.com/sprites/bw-shiny/" + pokeName + ".png"
      var gen5normani = "https://play.pokemonshowdown.com/sprites/bwani/" + pokeName + ".gif"
      var gen5shinyani = "https://play.pokemonshowdown.com/sprites/bwani-shiny/" + pokeName + ".gif"

      var artworkbkup = "https://img.pokemondb.net/artwork/" + fetchname + ".jpg"
      var gen6normbkup = "https://play.pokemonshowdown.com/sprites/xy/" + fetchname + ".png"
      var gen6shinybkup = "https://play.pokemonshowdown.com/sprites/xy-shiny/" + fetchname + ".png"
      var gen6normanibkup = "https://play.pokemonshowdown.com/sprites/xyani/" + fetchname + ".gif"
      var gen6shinyanibkup = "https://play.pokemonshowdown.com/sprites/xyani-shiny/" + fetchname + ".gif"
      var gen5normbkup = "https://play.pokemonshowdown.com/sprites/bw/" + fetchname + ".png"
      var gen5shinybkup = "https://play.pokemonshowdown.com/sprites/bw-shiny/" + fetchname + ".png"
      var gen5normanibkup = "https://play.pokemonshowdown.com/sprites/bwani/" + fetchname + ".gif"
      var gen5shinyanibkup = "https://play.pokemonshowdown.com/sprites/bwani-shiny/" + fetchname + ".gif"

      document.title = pokeNameUp + " is your special Pok" + "\xE9" + "mon!";
      function checkImage(imageSrc, bad, good) {
        var img = new Image();
        img.onload = good;
        img.onerror = bad;
        img.src = imageSrc;
      }

      checkImage(artworkbkup, function() {
        artworkbkup = "imgs/TooBad.jpg";
      });
      checkImage(gen6normbkup, function() {
        gen6normbkup = "imgs/TooBad.jpg";
      });
      checkImage(gen6shinybkup, function() {
        gen6shinybkup = "imgs/TooBad.jpg";
      });
      checkImage(gen6normanibkup, function() {
        gen6normanibkup = "imgs/TooBad.jpg";
      });
      checkImage(gen6shinyanibkup, function() {
        gen6shinyanibkup = "imgs/TooBad.jpg";
      });
      checkImage(gen5normbkup, function() {
        gen5normbkup = "imgs/TooBad.jpg";
      });
      checkImage(gen5shinybkup, function() {
        gen5shinybkup = "imgs/TooBad.jpg";
      });
      checkImage(gen5normanibkup, function() {
        gen5normanibkup = "imgs/TooBad.jpg";
      });
      checkImage(gen5shinyanibkup, function() {
        gen5shinyanibkup = "imgs/TooBad.jpg";
      });

      checkImage(artwork, function() {
        document.getElementById('pkmartwork').src = artworkbkup;
      });
      checkImage(gen6norm, function() {
        document.getElementById('pkmNormG6Sprite').src = gen6normbkup;
      });
      checkImage(gen6shiny, function() {
        document.getElementById('pkmShinyG6Sprite').src = gen6shinyanibkup;
      });
      checkImage(gen6normani, function() {
        document.getElementById('pkmNormG6aniSprite').src = gen6normanibkup;
      });
      checkImage(gen6shinyani, function() {
        document.getElementById('pkmShinyG6aniSprite').src = gen6shinyanibkup;
      });
      checkImage(gen5norm, function() {
        document.getElementById('pkmNormSprite').src = gen5normbkup;
      });
      checkImage(gen5shiny, function() {
        document.getElementById('pkmShinySprite').src = gen5shinybkup;
      });
      checkImage(gen5normani, function() {
        document.getElementById('pkmNormSpriteani').src = gen5normanibkup;
      });
      checkImage(gen5shinyani, function() {
        document.getElementById('pkmShinySpriteani').src = gen5shinyanibkup;
      });


      var pokeFlname = pokeID + "_" + pokeNameUp + ".jpg";

      var pkmname = document.getElementById('pkmname');
      pkmname.innerHTML = pokeNameUp;

      var pkmArtwork = document.getElementById('pkmartwork').src = artwork;
      var pkmNormSprite = document.getElementById('pkmNormSprite').src = gen5norm;
      var pkmShinySprite = document.getElementById('pkmShinySprite').src = gen5shiny;
      var pkmgen6norm = document.getElementById('pkmNormG6Sprite').src = gen6norm;
      var pkmgen6shiny = document.getElementById('pkmShinyG6Sprite').src = gen6shiny;
      var pkmgen6normani = document.getElementById('pkmNormG6aniSprite').src = gen6normani;
      var pkmgen6shinyani = document.getElementById('pkmShinyG6aniSprite').src = gen6shinyani;
      var pkmgen5normani = document.getElementById('pkmNormSpriteani').src = gen5normani;
      var pkmgen5shinyani = document.getElementById('pkmShinySpriteani').src = gen5shinyani;

      var pkmDBLink = document.getElementById('pkmnamedblk').href = pokeDB;

      var pkmdownload = document.getElementById('pkmdownload').href = artwork;
      var pkmdownload = document.getElementById('pkmdownload').download = pokeFlname;

      var fbshare = "https://www.facebook.com/sharer/sharer.php?u=" + artwork;
      var fbshare = document.getElementById('fbs').href = fbshare;

      var twittershare = "https://twitter.com/intent/tweet?url=" + artwork;
      var twittershare = document.getElementById('twitshare').href = twittershare;

      var googleshare = "https://plus.google.com/share?url=" + artwork;
      var googleshare = document.getElementById('goglps').href = googleshare;

      document.getElementById('pkmartwork').title = pokeNameUp + " artwork by Ken Sugimori";
      document.getElementById('pkmShinySprite').title = pokeNameUp + " Gen 5 Shiny Sprite";
      document.getElementById('pkmNormSprite').title = pokeNameUp + " Gen 5 Normal sprite";
      document.getElementById('pkmNormG6Sprite').title = pokeNameUp + " Gen 6 Normal Sprite";
      document.getElementById('pkmShinyG6Sprite').title = pokeNameUp + " Gen 6 Shiny sprite";
      document.getElementById('pkmNormG6aniSprite').title = pokeNameUp + " Gen 6 Normal Animated Sprite";
      document.getElementById('pkmShinyG6aniSprite').title = pokeNameUp + " Gen 6 Shiny Animated sprite";
      document.getElementById('pkmNormSpriteani').title = pokeNameUp + " Gen 5 Normal Animated Sprite";
      document.getElementById('pkmShinySpriteani').title = pokeNameUp + " Gen 5 Shiny Animated sprite";

      $("#pkmdownload").removeAttr("disabled");
      $('.table>tbody>tr>td').css({
        "height": "auto"
      });

      $('#tablecol1').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol2').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol3').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol4').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol5').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol6').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol7').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol8').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol9').css({
        "background-image": "none",
        "cursor": "default"
      });

      $('.icons').css({
        "pointer-events": "initial"
      });
      $('#loadingname').hide();


      var poketooltipdb = document.getElementById('pkmnamedblk').title = pokeNameUp + " info on The Pok" + "\xE9" + "mon Database";

      // console.log("Pokedex Number: ", pokeID);
      // console.log("Name: ", pokeNameUp);
      // console.log("Normal Sprite: ", pokeNormSprite);
      // console.log("Normla Sprite Back: ", pokeNormSpriteBk);
      // console.log("Shiny Sprite: ", pokeShinySprite);
      // console.log("Shiny Sprite Back: ", pokeShinySpriteBk);
      // console.log("Type 1: ", pokeType1);
      // console.log("Type 2: ", pokeType2);

      var end = new Date().getTime();
      // console.log('Milliseconds Passed', end - start);
      var endresult = end - start;

      var requesttime = document.getElementById('requesttime');
      requesttime.innerHTML = "Request took " + endresult + " ms";

    });

  }).catch(function(err) {
    alert("An error has occured with PokiAPI V2");

  })


};

function CustomPkm() {
  var delay1 = 1;
  var delay2 = 2000;
  var delay3 = 3000;
  setTimeout(function() {
    setload();
  }, delay1);
  setTimeout(function() {
    Userpkm();
  }, delay1);
  setTimeout(function() {
    getUserPokemon();
  }, delay2);
}

function setload() {
  $('#t1').hide();
  $('#UserChoice').hide();
  $("#linebreaks").show();
  $('#cstmrunpkm').attr('disabled', true);
}

function enterstuff() {
  var input = document.getElementById("UserChoice");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("cstmrunpkm").click();
    }
  });
}


function blockrunbtn() {
  var filled = $('#cstmrunpkm').removeAttr('disabled');
  $('body input').each(function() {
    if ($(this).val() == '') filled = $('#cstmrunpkm').attr('disabled', true);
  });
  return filled;
}

function Userpkm() {
  var UserChoicePkm = JSON.stringify($('#UserChoice').serializeArray());
  localStorage.setItem('UserPkm', UserChoicePkm);
}

function getUserPokemon() {
  var UserChoicePkm = JSON.parse(localStorage.getItem('UserPkm'))["0"].value;
  var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + UserChoicePkm;
  var pokeDB = "https://pokemondb.net/pokedex/" + UserChoicePkm;
  var start = new Date().getTime();

  $.ajax({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/" + UserChoicePkm
  }).then(function(data) {
    $.getJSON(pokeURL, function(data) {
      // console.log(data);
      // console.log(JSON.stringify(data, null, "  "));
      var pokeID = data.id;
      var pokeName = data.name;
      var pokeNormSprite = data.sprites.front_default;
      var pokeShinySprite = data.sprites.front_shiny;
      var pokeType1 = data.types[0].type.name;
      if (data.types.length == 2) {
        var pokeType1 = data.types[1].type.name;
        var pokeType2 = data.types[0].type.name;
      } else var pokeType2 = null;

      var pokeNameUp = pokeName.substr(0, 1).toUpperCase() + pokeName.substr(1);
      // console.log(pokeNameUp);
      var fetchname = pokeName.replace(/-/g, "");
      // console.log("Fetchname: ", fetchname);
      var artwork = "https://img.pokemondb.net/artwork/" + pokeName + ".jpg"
      var gen6norm = "https://play.pokemonshowdown.com/sprites/xy/" + pokeName + ".png"
      var gen6shiny = "https://play.pokemonshowdown.com/sprites/xy-shiny/" + pokeName + ".png"
      var gen6normani = "https://play.pokemonshowdown.com/sprites/xyani/" + pokeName + ".gif"
      var gen6shinyani = "https://play.pokemonshowdown.com/sprites/xyani-shiny/" + pokeName + ".gif"
      var gen5norm = "https://play.pokemonshowdown.com/sprites/bw/" + pokeName + ".png"
      var gen5shiny = "https://play.pokemonshowdown.com/sprites/bw-shiny/" + pokeName + ".png"
      var gen5normani = "https://play.pokemonshowdown.com/sprites/bwani/" + pokeName + ".gif"
      var gen5shinyani = "https://play.pokemonshowdown.com/sprites/bwani-shiny/" + pokeName + ".gif"

      var artworkbkup = "https://img.pokemondb.net/artwork/" + fetchname + ".jpg"
      var gen6normbkup = "https://play.pokemonshowdown.com/sprites/xy/" + fetchname + ".png"
      var gen6shinybkup = "https://play.pokemonshowdown.com/sprites/xy-shiny/" + fetchname + ".png"
      var gen6normanibkup = "https://play.pokemonshowdown.com/sprites/xyani/" + fetchname + ".gif"
      var gen6shinyanibkup = "https://play.pokemonshowdown.com/sprites/xyani-shiny/" + fetchname + ".gif"
      var gen5normbkup = "https://play.pokemonshowdown.com/sprites/bw/" + fetchname + ".png"
      var gen5shinybkup = "https://play.pokemonshowdown.com/sprites/bw-shiny/" + fetchname + ".png"
      var gen5normanibkup = "https://play.pokemonshowdown.com/sprites/bwani/" + fetchname + ".gif"
      var gen5shinyanibkup = "https://play.pokemonshowdown.com/sprites/bwani-shiny/" + fetchname + ".gif"

      document.title = pokeNameUp + " is your special Pok" + "\xE9" + "mon!";

      function checkImage(imageSrc, bad, good) {
        var img = new Image();
        img.onload = good;
        img.onerror = bad;
        img.src = imageSrc;
      }

      checkImage(artworkbkup, function() {
        artworkbkup = "imgs/TooBad.jpg";
      });
      checkImage(gen6normbkup, function() {
        gen6normbkup = "imgs/TooBad.jpg";
      });
      checkImage(gen6shinybkup, function() {
        gen6shinybkup = "imgs/TooBad.jpg";
      });
      checkImage(gen6normanibkup, function() {
        gen6normanibkup = "imgs/TooBad.jpg";
      });
      checkImage(gen6shinyanibkup, function() {
        gen6shinyanibkup = "imgs/TooBad.jpg";
      });
      checkImage(gen5normbkup, function() {
        gen5normbkup = "imgs/TooBad.jpg";
      });
      checkImage(gen5shinybkup, function() {
        gen5shinybkup = "imgs/TooBad.jpg";
      });
      checkImage(gen5normanibkup, function() {
        gen5normanibkup = "imgs/TooBad.jpg";
      });
      checkImage(gen5shinyanibkup, function() {
        gen5shinyanibkup = "imgs/TooBad.jpg";
      });

      checkImage(artwork, function() {
        document.getElementById('pkmartwork').src = artworkbkup;
      });
      checkImage(gen6norm, function() {
        document.getElementById('pkmNormG6Sprite').src = gen6normbkup;
      });
      checkImage(gen6shiny, function() {
        document.getElementById('pkmShinyG6Sprite').src = gen6shinyanibkup;
      });
      checkImage(gen6normani, function() {
        document.getElementById('pkmNormG6aniSprite').src = gen6normanibkup;
      });
      checkImage(gen6shinyani, function() {
        document.getElementById('pkmShinyG6aniSprite').src = gen6shinyanibkup;
      });
      checkImage(gen5norm, function() {
        document.getElementById('pkmNormSprite').src = gen5normbkup;
      });
      checkImage(gen5shiny, function() {
        document.getElementById('pkmShinySprite').src = gen5shinybkup;
      });
      checkImage(gen5normani, function() {
        document.getElementById('pkmNormSpriteani').src = gen5normanibkup;
      });
      checkImage(gen5shinyani, function() {
        document.getElementById('pkmShinySpriteani').src = gen5shinyanibkup;
      });

      var pokeFlname = pokeID + "_" + pokeNameUp + ".jpg";

      var pkmname = document.getElementById('pkmname');
      pkmname.innerHTML = pokeNameUp;

      var pkmArtwork = document.getElementById('pkmartwork').src = artwork;
      var pkmNormSprite = document.getElementById('pkmNormSprite').src = gen5norm;
      var pkmShinySprite = document.getElementById('pkmShinySprite').src = gen5shiny;
      var pkmgen6norm = document.getElementById('pkmNormG6Sprite').src = gen6norm;
      var pkmgen6shiny = document.getElementById('pkmShinyG6Sprite').src = gen6shiny;
      var pkmgen6normani = document.getElementById('pkmNormG6aniSprite').src = gen6normani;
      var pkmgen6shinyani = document.getElementById('pkmShinyG6aniSprite').src = gen6shinyani;
      var pkmgen5normani = document.getElementById('pkmNormSpriteani').src = gen5normani;
      var pkmgen5shinyani = document.getElementById('pkmShinySpriteani').src = gen5shinyani;

      var pkmDBLink = document.getElementById('pkmnamedblk').href = pokeDB;

      var pkmdownload = document.getElementById('pkmdownload').href = artwork;
      var pkmdownload = document.getElementById('pkmdownload').download = pokeFlname;

      var fbshare = "https://www.facebook.com/sharer/sharer.php?u=" + artwork;
      var fbshare = document.getElementById('fbs').href = fbshare;

      var twittershare = "https://twitter.com/intent/tweet?url=" + artwork;
      var twittershare = document.getElementById('twitshare').href = twittershare;

      var googleshare = "https://plus.google.com/share?url=" + artwork;
      var googleshare = document.getElementById('goglps').href = googleshare;

      document.getElementById('pkmartwork').title = pokeNameUp + " artwork by Ken Sugimori";
      document.getElementById('pkmShinySprite').title = pokeNameUp + " Gen 5 Shiny Sprite";
      document.getElementById('pkmNormSprite').title = pokeNameUp + " Gen 5 Normal sprite";
      document.getElementById('pkmNormG6Sprite').title = pokeNameUp + " Gen 6 Normal Sprite";
      document.getElementById('pkmShinyG6Sprite').title = pokeNameUp + " Gen 6 Shiny sprite";
      document.getElementById('pkmNormG6aniSprite').title = pokeNameUp + " Gen 6 Normal Animated Sprite";
      document.getElementById('pkmShinyG6aniSprite').title = pokeNameUp + " Gen 6 Shiny Animated sprite";
      document.getElementById('pkmNormSpriteani').title = pokeNameUp + " Gen 5 Normal Animated Sprite";
      document.getElementById('pkmShinySpriteani').title = pokeNameUp + " Gen 5 Shiny Animated sprite";

      $("#pkmdownload").removeAttr("disabled");
      $('.table>tbody>tr>td').css({
        "height": "auto"
      });

      $('#tablecol1').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol2').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol3').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol4').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol5').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol6').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol7').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol8').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('#tablecol9').css({
        "background-image": "none",
        "cursor": "default"
      });
      $('.icons').css({
        "pointer-events": "initial"
      });
      $('#loadingname').hide();


      var poketooltipdb = document.getElementById('pkmnamedblk').title = pokeNameUp + " info on The Pok" + "\xE9" + "mon Database";


      $('#t1').show();
      $('#UserChoice').show();
      $("#linebreaks").hide();
      $('#cstmrunpkm').attr('disabled', false);
      $("#UserChoice").val('');


      // console.log("Pokedex Number: ", pokeID);
      // console.log("Name: ", pokeNameUp);
      // console.log("Normal Sprite: ", pokeNormSprite);
      // console.log("Normla Sprite Back: ", pokeNormSpriteBk);
      // console.log("Shiny Sprite: ", pokeShinySprite);
      // console.log("Shiny Sprite Back: ", pokeShinySpriteBk);
      // console.log("Type 1: ", pokeType1);
      // console.log("Type 2: ", pokeType2);

      var end = new Date().getTime();
      console.log('Milliseconds Passed', end - start);
      var endresult = end - start;

      var requesttime = document.getElementById('requesttime');
      requesttime.innerHTML = "Request took " + endresult + " ms";

      $('#UserValue').modal('toggle');

    });

  }).catch(function(err) {
    alert("An error has occured with PokiAPI V2 or you inputted an invalid value");

  })


};
