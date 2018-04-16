_registerServiceWorker = function () {
    // check if service worker exists
    if (!navigator.serviceWorker) return;

    // register service worker file 
    navigator.serviceWorker.register('/sw.js').then(function (reg) {
        if (!navigator.serviceWorker.controller) {
            return;
        }

        if (reg.waiting) {
            // when update is ready call a function that displays it to
            // screen 
            //_updateReady(reg.waiting);
            console.log("i am waiting");
            return;
        }

        if (reg.installing) {
             // if service worker is installing
             // run function to track installer
            //_trackInstalling(reg.installing);
            console.log("i am installing");
            return;
        }

        reg.addEventListener('updatefound', function () {
             // if service worker is installing
             // run function to track installer
            //indexController._trackInstalling(reg.installing);
            console.log("i am ");
        });
    });

    // Ensure refresh is only called once.
    // This works around a bug in "force update on reload".
    var refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing) return;
        window.location.reload();
        refreshing = true;
    });
}

//_registerServiceWorker();


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw-test/sw.js', {scope: '/sw-test/'})
    .then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }
  else{

    console.log("not working");
  }