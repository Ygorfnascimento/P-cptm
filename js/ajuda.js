document.querySelector('a[href="#ajuda"]').addEventListener('click', function(event) 
{
    event.preventDefault(); // Impede o comportamento padrão da âncora
    const targetSection = document.querySelector('#ajuda');

    // Verifica se a seção alvo existe

    if (targetSection) 
        {
         // Rolagem suave até a seção alvo
         window.scrollTo(
            {top: targetSection.offsetTop, // Define a posição exata do topo do elemento
             behavior: 'smooth' // Ativa a rolagem suave
            });
        }   
});