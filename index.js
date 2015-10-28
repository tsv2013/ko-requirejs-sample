requirejs.config({
    "paths": {
      "app": "./",
      "knockout": "http://cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-min",
      "text": "http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min"
    }
});

requirejs(["main"]);
