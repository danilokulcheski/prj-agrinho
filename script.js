function showInfo(topic) {
    let infoText = '';

    switch(topic) {
        case 'sustentabilidade':
            infoText = 'Sustentabilidade é a capacidade de existir e desenvolver-se sem esgotar os recursos naturais para o futuro.';
            break;
        case 'cidadania':
            infoText = 'Cidadania é o conjunto de direitos e deveres ao qual um indivíduo está sujeito em relação à sociedade em que vive.';
            break;
        case 'etica':
            infoText = 'Ética é um conjunto de valores morais e princípios que norteiam a conduta humana na sociedade.';
            break;
        case 'saude':
            infoText = 'Saúde é o estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença.';
            break;
    }

    document.getElementById('info-text').innerText = infoText;
    document.getElementById('info-box').classList.remove('hidden');
}

function closeInfo() {
    document.getElementById('info-box').classList.add('hidden');
}