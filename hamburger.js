
function hide() {
    // let ham = document.getElementById("ham")
    let navgo = document.getElementById("navbargo")

    if (navgo.style.display != 'block') {
        navgo.style.display = 'block';
        navgo.style.position ='absolute';
    }

    else {
        navgo.style.display = 'none';
    }
}
