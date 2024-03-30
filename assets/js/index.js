
window.addEventListener('click', function(e){   
    if (document.getElementById('collection-section').contains(e.target)){
    } else {
        shrinkDescription();
    }
  });

function updateDescription(element) {
    var ctx = element.id;
    var title = document.getElementById("post-" + ctx + "-title")
    var description = document.getElementById("post-" + ctx + "-description")
    var who = document.getElementById("post-" + ctx + "-who")
    var visuals = document.getElementById("post-" + ctx + "-visuals")
    document.getElementById("collection-title").textContent = title.textContent;
    document.getElementById("collection-description").textContent = description.textContent;
    document.getElementById("collection-who").textContent = "Requested by " + who.textContent;
    document.getElementById("collection-visuals").href = visuals.textContent;
    document.getElementById("collection-box").classList.remove("animate__slideOutRight");
    document.getElementById("collection-box").classList.add("animate__slideInRight");
}

function shrinkDescription() {
    document.getElementById("collection-box").classList.remove("animate__slideInRight");
    document.getElementById("collection-box").classList.add("animate__slideOutRight");
}
