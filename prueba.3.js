var script = document.createElement('script');

script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.0.1/axe.js';

document.head.appendChild(script);

setTimeout(function(){
  axe.run(document, {
    runOnly: {

      type: "tag",
      values: ["wcag2a", "wcag2aa"]
    },
    "rules": {
        
      "area-alt" : { enabled: false },
      "aria-input-field-name" : { enabled: false },
      "aria-roles" : { enabled: false },
      "blink" : { enabled: false }
    }
  }, function(err, results) {
    if (err) throw err;
    console.log(results);
  });
}, 1000);