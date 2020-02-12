$(document).ready(function() {
  $('#form__1').on('submit', function() {
    $('#form__1 .btn').prop('disabled', true);
    send_form('form__1');
  });

  $('#form-popup').on('submit', function() {
    $('#form-popup .btn').prop('disabled', true);
    send_form('form-popup');
  });

  $('#form-quiz').on('submit', function() {
    $('#form-quiz .btn').prop('disabled', true);
    send_form_quiz('form-quiz');
  });

  $('#form-5min').on('submit', function() {
    $('#form-5min .btn').prop('disabled', true);
    send_form_quiz('form-5min');
  });

  $('#form-last').on('submit', function() {
    $('#form-last .btn').prop('disabled', true);
    send_form_quiz('form-last');
  });

  $('.tkan-order').on('click', function() {
    $('#form-popup-subject').val('Подобрать тканевые чехлы');
  });
  $('.eko-kogha').on('click', function() {
    $('#form-popup-subject').val('Подобрать чехлы из эко-кожи');
  });
  $('.kombo').on('click', function() {
    $('#form-popup-subject').val('Подобрать комбинированные чехлы');
  });
  $('.callback-btn').on('click', function() {
    $('#form-popup-subject').val('Заказ обратного звонка');
  });
});
function send_form_quiz(formid) {
    var form_id = '#' + formid;
    var msg = $(form_id).serialize();
    $.ajax({
        type: 'POST',
        url: '/mail/send-quiz.php',
        data: msg,
        success: function(data) {
            if (data == "send_error") {
                alert('Возникла ошибка при отправке. Попробуйте пожалуйста еще раз.');
            }
            else if (data == "send_success") {
                fbq('track', 'Lead');
                $(form_id)[0].reset();
                $('#quiz').removeClass('active');
                $('#thanksPopup').addClass('active');
            }
        },
        error: function(xhr, str){
            alert('Error: ' + xhr.responseCode + ' Please, try again later.');
        }
    });
}


function send_form(formid) {
    var form_id = '#' + formid;
    var msg = $(form_id).serialize();
    $.ajax({
        type: 'POST',
        url: '/mail/send.php',
        data: msg,
        success: function(data) {
            if (data == "send_error") {
                alert('Возникла ошибка при отправке. Попробуйте пожалуйста еще раз.');
            }
            else if (data == "send_success") {
                fbq('track', 'Lead');
                $(form_id)[0].reset();
                $('#callBackPopup').removeClass('active');
                $('#thanksPopup').addClass('active');
            }
        },
        error: function(xhr, str){
            alert('Error: ' + xhr.responseCode + ' Please, try again later.');
        }
    });
}