document.addEventListener("DOMContentLoaded", function() {
    let theme = localStorage.getItem("theme") || "theme1";
    let listStyle = localStorage.getItem("listStyle") || "style1";


    document.body.classList.add(theme);
    document.getElementById("list").classList.add(listStyle);


    document.getElementById("theme").addEventListener("change", function() {
        theme = this.value;
        document.body.classList.remove("theme1", "theme2", "theme3");
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
    });

    document.getElementById("list-style").addEventListener("change", function() {
        listStyle = this.value;
        document.getElementById("list").classList.remove("style1", "style2", "style3");
        document.getElementById("list").classList.add(listStyle);
        localStorage.setItem("listStyle", listStyle);
    });

    const items = ['Apple', 'Orange', 'Banana', 'Grape', 'Kiwi'];
    const list = document.getElementById('list');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
});
