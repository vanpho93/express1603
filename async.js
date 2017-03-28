function a () {
    try {
        setTimeout(() => console.log(b + 1), 1000);
    } catch(e) {
        console.log('LOI: ' + e);
    }
}

a();