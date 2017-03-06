// This is a JavaScript file
    app = ons.bootstrap();
    app.controller('AppController', function() {
        this.pushes = 0;
        this.pops = 0;
      });
    ons.ready(function() {
        console.log("Onsen UI is ready!");
    });

