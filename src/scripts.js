document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const caption = document.getElementById("caption");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            // Atualizar imagem principal
            mainImage.src = this.src;
            
            // Atualizar o texto de descrição e autor
            caption.textContent = this.getAttribute("data-caption");
            
            // Remover a classe 'active' de todas as miniaturas
            thumbnails.forEach(img => img.classList.remove("active"));
            
            // Adicionar a classe 'active' à miniatura selecionada
            this.classList.add("active");
        });
    });
});
