$(document).ready(function () {

  $('#submit').click(function () {
    event.preventDefault();
    favoriteThings.push($('#name').val());
    favoriteThings.push($('#place').val());
    favoriteThings.push($('#animal').val());
    favoriteThings.push($('#color').val());
    favoriteThings.push($('#food').val());
    //alert(favoriteThings);

    alert(favoriteThings[0]);
    alert(favoriteThings[1]);
    alert(favoriteThings[2]);

    array1.push(favoriteThings[0]);
    array1.push(favoriteThings[1]);
    array1.push(favoriteThings[2]);
    alert(array1);
    $('#list').append('<li>' + array1[0] + '</li>');
    $('#list').append('<li>' + array1[1] + '</li>');
    $('#list').append('<li>' + array1[2] + '</li>');
    
  });
  


});
let favoriteThings = [];
let array1 = [];
