Delete= document.getElementsByClassName("delete");

Array.from(Delete).forEach((element) => {
    element.addEventListener("click", (e) => {
        sr= e.target.id;
        if (confirm("Are you sure you want to delete this task?")) {
            window.location = `/PhpCourse/iTaskApp/task_list.php?delete=${sr}`;
        }
    });
});