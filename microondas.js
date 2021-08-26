function ligar(prato, tempo) {
    switch (prato) {
        case 'Pipoca':
            verificar_tempo(10, tempo);
            break;
        case 'Macarrão':
            verificar_tempo(8, tempo);
            break;
        case 'Carne':
            verificar_tempo(15, tempo);
            break;
        case 'Feijão':
            verificar_tempo(12, tempo);
            break;
        case 'Brigadeiro':
            verificar_tempo(8, tempo);
            break;
        default:
            console.log('Prato inexistente');
            break;
    }
}
function verificar_tempo(tempo_padrao, tempo_definido) {
    if (tempo_definido >= tempo_padrao * 3) {
        console.log('kabumm');
    } else if (tempo_definido >= tempo_padrao * 2) {
        console.log('A comida queimou');
    } else if (tempo_definido < tempo_padrao) {
        console.log('Tempo insuficiente');
    } else {
        console.log('Prato pronto, bom apetite!!!');
    }
}
ligar("Carne", 30);