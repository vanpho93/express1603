function a() {
    setTimeout(() => {
        try {
            console.log(b + 1)
        } catch (e) {
            console.log('LOI: ' + e);
        }
    }, 1000);
}

a();