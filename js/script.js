document.addEventListener("DOMContentLoaded", function() {
    fetch("../ebook.json")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("table-body");

            data.forEach(item => {
                const autore = item.Autore;
                const titolo = item.Titolo;

                const row = document.createElement("tr");
                const autoreCell = document.createElement("td");
                const titoloCell = document.createElement("td");

                autoreCell.textContent = autore;
                titoloCell.textContent = titolo;

                row.appendChild(autoreCell);
                row.appendChild(titoloCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.log(error));
});
