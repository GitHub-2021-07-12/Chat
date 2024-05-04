function _on_controllerChange() {
    location.reload();
}


function main() {
    // navigator.serviceWorker.addEventListener('controllerchange', _on_controllerChange);
    navigator.serviceWorker.register('./ServiceWorker.js', {updateViaCache: 'none'});
}


main();
