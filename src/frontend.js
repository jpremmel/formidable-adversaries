import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export function FrontEnd() {
  $('#cactusChoose').click(function() {
    $('.characters').hide();
    $('.arena').show();
  });
  $('#cactusInfo').click(function() {
    $('#cactusFront').hide();
    $('#cactusBack').show();
  });
  $('#cactusToFront').click(function() {
    $('#cactusFront').show();
    $('#cactusBack').hide();
  });

  $('#octopusChoose').click(function() {
    $('.characters').hide();
    $('.arena').show();
  });
  $('#octopusInfo').click(function() {
    $('#octopusFront').hide();
    $('#octopusBack').show();
  });
  $('#octopusToFront').click(function() {
    $('#octopusFront').show();
    $('#octopusBack').hide();
  });

  $('#baboonChoose').click(function() {
    $('.characters').hide();
    $('.arena').show();
  });
  $('#baboonInfo').click(function() {
    $('#baboonFront').hide();
    $('#baboonBack').show();
  });
  $('#baboonToFront').click(function() {
    $('#baboonFront').show();
    $('#baboonBack').hide();
  });

  $('#crabChoose').click(function() {
    $('.characters').hide();
    $('.arena').show();
  });
  $('#crabInfo').click(function() {
    $('#crabFront').hide();
    $('#crabBack').show();
  });
  $('#crabToFront').click(function() {
    $('#crabFront').show();
    $('#crabBack').hide();
  });

  $('#pterodactylChoose').click(function() {
    $('.characters').hide();
    $('.arena').show();
  });
  $('#pterodactylInfo').click(function() {
    $('#pterodactylFront').hide();
    $('#pterodactylBack').show();
  });
  $('#pterodactylToFront').click(function() {
    $('#pterodactylFront').show();
    $('#pterodactylBack').hide();
  });

  $('#penguinChoose').click(function() {
    $('.characters').hide();
    $('.arena').show();
  });
  $('#penguinInfo').click(function() {
    $('#penguinFront').hide();
    $('#penguinBack').show();
  });
  $('#penguinToFront').click(function() {
    $('#penguinFront').show();
    $('#penguinBack').hide();
  });

  $('#goatChoose').click(function() {
    $('.characters').hide();
    $('.arena').show();
  });
  $('#goatInfo').click(function() {
    $('#goatFront').hide();
    $('#goatBack').show();
  });
  $('#goatToFront').click(function() {
    $('#goatFront').show();
    $('#goatBack').hide();
  });

  $('#gatorChoose').click(function() {
    $('.characters').hide();
    $('.arena').show();
  });
  $('#gatorInfo').click(function() {
    $('#gatorFront').hide();
    $('#gatorBack').show();
  });
  $('#gatorToFront').click(function() {
    $('#gatorFront').show();
    $('#gatorBack').hide();
  });

  $('#pigChoose').click(function() {
    $('.characters').hide();
    $('.arena').show();
  });
  $('#pigInfo').click(function() {
    $('#pigFront').hide();
    $('#pigBack').show();
  });
  $('#pigToFront').click(function() {
    $('#pigFront').show();
    $('#pigBack').hide();
  });
}
