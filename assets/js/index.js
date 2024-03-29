
window.addEventListener('click', function(e){   
    if (document.getElementById('collection-section').contains(e.target)){
    } else {
        shrinkDescription();
    }
  });

function updateDescription(element) {
    var title = document.getElementById("post-title")
    var description = document.getElementById("post-description")
    var who = document.getElementById("post-who")
    document.getElementById("collection-title").textContent = title.textContent;
    document.getElementById("collection-description").textContent = description.textContent;
    document.getElementById("collection-who").textContent = who.textContent;
    document.getElementById("collection-box").classList.remove("animate__slideOutRight");
    document.getElementById("collection-box").classList.add("animate__slideInRight");
}

function shrinkDescription() {
    document.getElementById("collection-box").classList.remove("animate__slideInRight");
    document.getElementById("collection-box").classList.add("animate__slideOutRight");
}
