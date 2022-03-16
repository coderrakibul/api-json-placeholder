const loadComments = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => displayComments(data))
}
loadComments();


//for of method
const displayComments = (comments) => {
    const first100 = comments.slice(0, 100);
    const commentSection = document.getElementById("comments-section");
    
    for(const comment of first100){
        const div = document.createElement("div");
        const divCol = document.createElement("div");
        divCol.classList.add("col-lg-4");
        divCol.classList.add("col-md-6");
        divCol.classList.add("col-6");
        div.classList.add("p-2");
        div.classList.add("m-2");
        div.classList.add("h-100");
        div.classList.add("bg-info");
        div.innerHTML = `
            <p> Name: ${comment.name}</p>
            <p> Body: ${comment.body}</p>
        `;
        commentSection.appendChild(divCol);
        divCol.appendChild(div);
        
      
    }
}




//for each method
// const displayComments = (comments) => {
//         const comment = comments.slice(0, 100);
//         const commentSection = document.getElementById("comments-section");
//         comments.forEach(comment => {
            
//             const div = document.createElement("div");
//             div.classList.add("col-lg-6");
//             div.innerHTML = `
//                 <p> Name: ${comment.name}</p>
//                 <p> Body: ${comment.body}</p>
//             `;
//             commentSection.appendChild(div);
//         })
//     }