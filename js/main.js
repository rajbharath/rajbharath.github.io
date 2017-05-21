document.addEventListener("DOMContentLoaded", function(event) {
  console.log('Started');
  var btnSubscribe = document.getElementById('btn-subscribe');
  btnSubscribe.addEventListener('click', function() {
    nanoajax.ajax({
      url: 'https://us15.api.mailchimp.com/3.0/lists/678bdee735/members',
      method: 'POST',
      headers: {'content-type': 'application/json', 'user': 'raj:48f9e931281c213a586f9ce3e64bb8b5-us15'},
      body: '{"email_address": "sri.bharath72@gmail.com","status":"subscribed"}',
      function (code, responseText, request) {
        console.log(code);
        console.log(responseText);
      }
    });
  });
});
