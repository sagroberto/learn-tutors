const flagImages = document.querySelectorAll('.flags img');

const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguages = async (language) =>{
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();
    
    for (const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts [section][value]
    }

}

flagImages.forEach(img => {
  img.addEventListener('click', (e) => {
    const language = e.target.getAttribute('data-language');
    changeLanguages(language);
  });
});



