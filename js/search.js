document.getElementById('search-btn').addEventListener('click', function() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('expanded');
    document.querySelector('.search-input').focus(); // Para que el cursor se posicione en el input
});