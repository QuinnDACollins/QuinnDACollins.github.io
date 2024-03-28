
window.addEventListener('click', function(e){   
    if (document.getElementById('collection-section').contains(e.target)){
    } else {
        shrinkDescription();
    }
  });

function updateDescription(element) {
    var title = element.nextSibling.nextSibling;
    var description = element.nextSibling.nextSibling.nextSibling.nextSibling;
    document.getElementById("collection-title").textContent = title.textContent;
    document.getElementById("collection-description").textContent = description.textContent;
    document.getElementById("collection-box").classList.remove("animate__slideOutRight");
    document.getElementById("collection-box").classList.add("animate__slideInRight");
}

function shrinkDescription() {
    document.getElementById("collection-box").classList.remove("animate__slideInRight");
    document.getElementById("collection-box").classList.add("animate__slideOutRight");
}
