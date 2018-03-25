$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

Papa.parse("https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon.csv", {
	download: true,
  header: true,
  preview: 0,
  complete: function(results) {
  	console.log("Parsing complete:", results);
    var length = results.data.length;
    // console.log(length);
    for (i = 0; i < length; i++) {
      var Pkm = results.data[i].identifier;
      results.data[i].label = results.data[i]['identifier'];
      results.data[i].value = results.data[i]['identifier'];
      delete results.data[i].identifier;
      // var PkmUp = Pkm.substr(0, 1).toUpperCase() + Pkm.substr(1);
      // console.log(Pkm);

      $( function() {
        var availableTags = results.data
        $( "#UserChoice" ).autocomplete({
          source: availableTags, minLength: 2,
        });
      } );

  }
}});

function hideads() {
  $('#ad1').toggle();
  $('#ad2').toggle();
  $('#ad3').toggle();
}

function dellocalstorage() {
  localStorage.clear();
};

function yurr() {
  myWindow = window.open("ignoreme.html", "_blank", "width=1, height=1");
  var delayInMilliseconds = 1000;
  var delayInMillisecondsnx = 2000;

  setTimeout(function() {
    myWindow.close();
  }, delayInMilliseconds);
  setTimeout(function() {
    window.location.replace("Index.html");
  }, delayInMillisecondsnx);
  setTimeout(function() {
    alert("localStorage data has been cleared");
  }, delayInMillisecondsnx);
};

// Calender JS
$(document).ready(function() {
  var date_input = $('input[name="date"]');
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  date_input.datepicker({
    startView: 2,
    format: "MM, dd, yyyy",
    container: container,
    orientation: "top left",
    clearBtn: "true",
  })
})

function Birthday() {
  var jsonifyed_data = JSON.stringify($('#date').serializeArray());
  localStorage.setItem('bday', jsonifyed_data);
  // var bday = JSON.parse(localStorage.getItem('bday'))["0"].value;
  // console.log(bday);
};

function SetBday() {
  var bday = JSON.parse(localStorage.getItem('bday'))["0"].value;
  var prtbd = document.getElementById('birtday');
  birtday.innerHTML += "You're birthday is " + bday;
}

function login() {
  var jsonifyed_User_data = JSON.stringify($('#login-username').serializeArray());
  localStorage.setItem('Username', jsonifyed_User_data);
};

function settxt() {
  var User = JSON.parse(localStorage.getItem('Username'))["0"].value;
  if (User == "") {
    $("#rellogin span:contains('Login')").html('Login');
    document.getElementById('rellogin').title = "Login";
    // console.log(User);
  } else {
    $("#rellogin span:contains('Login')").html(User);
    document.getElementById('rellogin').title = "Logout";
    // console.log(User);
  }
};

function Sneek() {
  var jsonifyed_Social = JSON.stringify($('#SocialSecurity').serializeArray());
  localStorage.setItem('SocialSecurityNumber', jsonifyed_Social);
};

function SneekSocial() {
  var SS = JSON.parse(localStorage.getItem('SocialSecurityNumber'))["0"].value;
  if (SS == "") {

  } else {
    var SetKnowU = document.getElementById('iknowu');
    iknowu.innerHTML += "You're Social Security Number Is " + "&#34;" + SS + "&#34;";
    // console.log(SS)
  }
};

function allFilled() {
  var filled = $('#submitbtn').removeAttr('disabled');
  $('body input').each(function() {
    if ($(this).val() == '') filled = $('#submitbtn').attr('disabled', true);
  });
  return filled;
}

// Redirect JS
var time_left = 10;
var cinterval;
var timestatus = 1;
var redirect = "https://www.codepen.io/DeathHackz";

function time_dec() {
  time_left--;
  document.getElementById('countdown').innerHTML = time_left;
  if (time_left <= 0) {
    window.location = redirect;
  }
}

function resumetime() {
  //time_left = 10;
  clearInterval(cinterval);
  cinterval = setInterval('time_dec()', 1000);
}

function defaultstart() {
  time_left = 6;
  clearInterval(cinterval);
  cinterval = setInterval('time_dec()', 1000);
}

function stopstarttime() {
  if (timestatus == 1) {
    clearInterval(cinterval);
    document.getElementById('stopbutton').value = "Start";
    timestatus = 0;
  } else {
    clearInterval(cinterval);
    cinterval = setInterval('time_dec()', 1000);
    document.getElementById('stopbutton').value = "Stop";
    timestatus = 1;
  }
}

function getPokemon() {
  // Get random number. Make sure not less than 1
  var randomNum = Math.floor(Math.random() * (802 - 1 + 1)) + 1;
  // console.log(randomNum);
  // Debug Value //
  // var randomNum = "786";
  // Debug Value //
  var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + randomNum;
  var pokeDB = "https://pokemondb.net/pokedex/" + randomNum;
  // var bday = JSON.parse(localStorage.getItem('bday'))["0"].value;
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
      // var pokeNormSpriteBk = data.sprites.back_default;
      var pokeShinySprite = data.sprites.front_shiny;
      // var pokeShinySpriteBk = data.sprites.back_shiny;
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

      function checkImage(imageSrc, bad, good) {
          var img = new Image();
          img.onload = good;
          img.onerror = bad;
          img.src = imageSrc;
      }

      checkImage(artworkbkup, function(){ artworkbkup = "TooBad.jpg"; } );
      checkImage(gen6normbkup, function(){ gen6normbkup = "TooBad.jpg"; } );
      checkImage(gen6shinybkup, function(){ gen6shinybkup = "TooBad.jpg"; } );
      checkImage(gen6normanibkup, function(){ gen6normanibkup = "TooBad.jpg"; } );
      checkImage(gen6shinyanibkup, function(){ gen6shinyanibkup = "TooBad.jpg"; } );
      checkImage(gen5normbkup, function(){ gen5normbkup = "TooBad.jpg"; } );
      checkImage(gen5shinybkup, function(){ gen5shinybkup = "TooBad.jpg"; } );
      checkImage(gen5normanibkup, function(){ gen5normanibkup = "TooBad.jpg"; } );
      checkImage(gen5shinyanibkup, function(){ gen5shinyanibkup = "TooBad.jpg"; } );

      checkImage(artwork, function(){ document.getElementById('pkmartwork').src = artworkbkup; } );
      checkImage(gen6norm, function(){ document.getElementById('pkmNormG6Sprite').src = gen6normbkup; } );
      checkImage(gen6shiny, function(){ document.getElementById('pkmShinyG6Sprite').src = gen6shinyanibkup; } );
      checkImage(gen6normani, function(){ document.getElementById('pkmNormG6aniSprite').src = gen6normanibkup; } );
      checkImage(gen6shinyani, function(){ document.getElementById('pkmShinyG6aniSprite').src = gen6shinyanibkup; } );
      checkImage(gen5norm, function(){ document.getElementById('pkmNormSprite').src = gen5normbkup; } );
      checkImage(gen5shiny, function(){ document.getElementById('pkmShinySprite').src = gen5shinybkup; } );
      checkImage(gen5normani, function(){ document.getElementById('pkmNormSpriteani').src = gen5normanibkup; } );
      checkImage(gen5shinyani, function(){ document.getElementById('pkmShinySpriteani').src = gen5shinyanibkup; } );


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
      $('.table>tbody>tr>td').css({"height": "auto"});

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

      // var prtbd = document.getElementById('birtday');
      // birtday.innerHTML += "You're birthday is " + bday;

      console.log("Pokedex Number: ", pokeID);
      console.log("Name: ", pokeNameUp);
      console.log("Normal Sprite: ", pokeNormSprite);
      // console.log("Normla Sprite Back: ", pokeNormSpriteBk);
      console.log("Shiny Sprite: ", pokeShinySprite);
      // console.log("Shiny Sprite Back: ", pokeShinySpriteBk);
      console.log("Type 1: ", pokeType1);
      console.log("Type 2: ", pokeType2);

      var end = new Date().getTime();
      console.log('Milliseconds Passed', end - start);
      var endresult = end - start;

      var requesttime = document.getElementById('requesttime');
      requesttime.innerHTML = "Request took " + endresult + " ms";

    });

  }).catch(function(err) {
    alert("An error has occured with PokiAPI V2");

  })


};

function reroll() {
  location.reload();
};

function delayverify() {
  var delay1 = 1000;
  var delay2 = 2000;
  var delay3 = 3000;

  setTimeout(function() {
    regester();
  }, delay1);
  setTimeout(function() {
    verifylogin();
  }, delay2);
  setTimeout(function() {
    alert("Alright I Belive U");
  }, delay3);
};

function regester() {
  var setusrname = JSON.stringify($('#regusrname').serializeArray());
  var setusrpass = JSON.stringify($('#regpassword').serializeArray());
  var defusrpass = JSON.stringify($('#login-password').serializeArray());
  var defusrname = JSON.stringify($('#login-username').serializeArray());
  localStorage.setItem('Username', defusrname);
  localStorage.setItem('regusrname', setusrname);
  localStorage.setItem('regusrpass', setusrpass);
  localStorage.setItem('Password', defusrpass);
};

function verifylogin() {
  var RegUsr = JSON.parse(localStorage.getItem('regusrname'))["0"].value;
  var RegPass = JSON.parse(localStorage.getItem('regusrpass'))["0"].value;
  var LoginUsr = JSON.parse(localStorage.getItem('Username'))["0"].value;
  var LoginPass = JSON.parse(localStorage.getItem('Password'))["0"].value;
  console.log("Regestered Username =" + RegUsr);
  console.log("Regestered Password =" + RegPass);
  console.log("Entered Username =" + LoginUsr);
  console.log("Entered Password =" + LoginPass);
  if (RegUsr === LoginUsr) {
    if (RegPass === LoginPass) {
      $('#btn-login').css({
        "pointer-events": "initial"
      });
      $("#btn-login").removeAttr("disabled");
      // alert("Logging In")
    } else {
      var Paser = document.getElementById('passerror');
      Paser.innerHTML += "*Incorrect Password";
    }
  } else {
    var Userr = document.getElementById('usererror');
    Userr.innerHTML += "*Incorrect Username";
  }
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
      // var pokeNormSpriteBk = data.sprites.back_default;
      var pokeShinySprite = data.sprites.front_shiny;
      // var pokeShinySpriteBk = data.sprites.back_shiny;
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

      function checkImage(imageSrc, bad, good) {
          var img = new Image();
          img.onload = good;
          img.onerror = bad;
          img.src = imageSrc;
      }

      checkImage(artworkbkup, function(){ artworkbkup = "TooBad.jpg"; } );
      checkImage(gen6normbkup, function(){ gen6normbkup = "TooBad.jpg"; } );
      checkImage(gen6shinybkup, function(){ gen6shinybkup = "TooBad.jpg"; } );
      checkImage(gen6normanibkup, function(){ gen6normanibkup = "TooBad.jpg"; } );
      checkImage(gen6shinyanibkup, function(){ gen6shinyanibkup = "TooBad.jpg"; } );
      checkImage(gen5normbkup, function(){ gen5normbkup = "TooBad.jpg"; } );
      checkImage(gen5shinybkup, function(){ gen5shinybkup = "TooBad.jpg"; } );
      checkImage(gen5normanibkup, function(){ gen5normanibkup = "TooBad.jpg"; } );
      checkImage(gen5shinyanibkup, function(){ gen5shinyanibkup = "TooBad.jpg"; } );

      checkImage(artwork, function(){ document.getElementById('pkmartwork').src = artworkbkup; } );
      checkImage(gen6norm, function(){ document.getElementById('pkmNormG6Sprite').src = gen6normbkup; } );
      checkImage(gen6shiny, function(){ document.getElementById('pkmShinyG6Sprite').src = gen6shinyanibkup; } );
      checkImage(gen6normani, function(){ document.getElementById('pkmNormG6aniSprite').src = gen6normanibkup; } );
      checkImage(gen6shinyani, function(){ document.getElementById('pkmShinyG6aniSprite').src = gen6shinyanibkup; } );
      checkImage(gen5norm, function(){ document.getElementById('pkmNormSprite').src = gen5normbkup; } );
      checkImage(gen5shiny, function(){ document.getElementById('pkmShinySprite').src = gen5shinybkup; } );
      checkImage(gen5normani, function(){ document.getElementById('pkmNormSpriteani').src = gen5normanibkup; } );
      checkImage(gen5shinyani, function(){ document.getElementById('pkmShinySpriteani').src = gen5shinyanibkup; } );

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
      $('.table>tbody>tr>td').css({"height": "auto"});

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


      console.log("Pokedex Number: ", pokeID);
      console.log("Name: ", pokeNameUp);
      console.log("Normal Sprite: ", pokeNormSprite);
      // console.log("Normla Sprite Back: ", pokeNormSpriteBk);
      console.log("Shiny Sprite: ", pokeShinySprite);
      // console.log("Shiny Sprite Back: ", pokeShinySpriteBk);
      console.log("Type 1: ", pokeType1);
      console.log("Type 2: ", pokeType2);

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
