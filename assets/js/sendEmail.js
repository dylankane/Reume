 function sendMail(contactForm) {
     var templateParams = {
         "from_name": contactForm.fullname.value,
         "from_email": contactForm.emailaddress.value,
         "project_request": contactForm.projectsummary.value
     };
     emailjs.send('service_hnu0uwq', 'RosieTemplate1', templateParams)
         .then(function (response) {
             console.log('SUCCESS!', response.status, response.text);
         }, function (error) {
             console.log('FAILED...', error);
         });
 }
