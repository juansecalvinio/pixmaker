$(document).ready(function(){

  var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
  ];

  // Variable jQuery para guardar el elemento 'color-personalizado'
  // Es decir, el que se elige con la rueda de color.
  var $colorPersonalizado = $('#color-personalizado');

  $colorPersonalizado.change(function() {
    // Se guarda el color de la rueda en colorActual
    var colorActual = $colorPersonalizado.val();
    // Completar para que cambie el indicador-de-color al colorActual
    $('#indicador-de-color').css('background-color', colorActual);

  });

  var $paleta = $("#paleta");
  var $grillaPixeles = $('#grilla-pixeles');

  function generarPaleta() {
    for (var i = 0; i < nombreColores.length; i++) {
      var $colorPaleta = $('<div>', {'class': 'color-paleta'});
      $colorPaleta.css('background-color', nombreColores[i]);
      $paleta.append($colorPaleta);
    }
  }

  function generarGrillaPixeles() {
    for(var i = 0; i < 1749; i++) {
      var $pixel = $('<div>', {'id': 'pixel'});
      $grillaPixeles.append($pixel);
    }
  }

  generarPaleta();

  generarGrillaPixeles();

  // Seleccionar color
  $('.color-paleta').click(function(){
    var $colorClick = $(this).css('background-color');
    $('#indicador-de-color').css('background-color', $colorClick);
  });

  // Pintar pixel
  $('div#pixel').click(function(){
      var $colorPintar = $('#indicador-de-color').css('background-color');
      $(this).css('background-color', $colorPintar);
  });

  var $mouseApretado = false;

  // Detectar si está apretado el mouse
  $('div#grilla-pixeles').mousedown(function(){
    $mouseApretado = true;
  });

  // Detectar si se soltó el mouse
  $('div#grilla-pixeles').mouseup(function(){
    $mouseApretado = false;
  });

  // Detectar si el mouse está en movimiento sobre un elemento
  $('div#pixel').mousemove(function(){
    if($mouseApretado) {
      var $colorPintar = $('#indicador-de-color').css('background-color');
      $(this).css('background-color', $colorPintar);
    }
  });

  // Botón borrar todo
  $('#borrar').click(function(){
    $('div#pixel').css("background-color", "white");
  });

  // Seleccionar superhéroe
  $('#batman').click(function(){
    cargarSuperheroe(batman);
  });

  $('#wonder').click(function(){
    cargarSuperheroe(wonder);
  });

  $('#flash').click(function(){
    cargarSuperheroe(flash);
  });

  $('#invisible').click(function(){
    cargarSuperheroe(invisible);
  });


  // Guardar proyecto
  $('#guardar').click(function(){
    guardarPixelArt();
  });




});
