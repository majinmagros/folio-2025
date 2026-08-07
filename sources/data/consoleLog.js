import * as THREE from 'three/webgpu'

const text = `
 __      __ ___  _     _     ___    _    __  __ 
\\ \\    / /|_ _|| |   | |   |_ _|  /_\\  |  \\/  |
 \\ \\/\\/ /  | | | |__ | |__  | |  / _ \\ | |\\/| |
  \\_/\\_/  |___||____||____||___|/_/ \\_\\|_|  |_|
                                            
╔═ Intro ═══════════════════════╗
║ Obrigado por visitar meu portfólio, seu developer espertinho!
║ Se tem curiosidade sobre a stack e como construí este projeto, aqui vai tudo.
╚════════════════════════════════╝

╔═ Redes sociais ═════════════╗
║ Mail           ⇒ majinmagros@gmail.com
║ X              ⇒ https://x.com/MagrosZapatero
║ Instagram      ⇒ https://www.instagram.com/magroszapatero/
║ Facebook       ⇒ https://www.facebook.com/magroszapatero
║ GitHub         ⇒ https://github.com/majinmagros
║ YouTube        ⇒ https://www.youtube.com/channel/UC5sg6RpxRIWdaPtyI7bznjg
║ LinkedIn       ⇒ https://www.linkedin.com/in/william-batista-gomes-601a2883/
╚══════════════════════════════╝

╔═ Debug ═════════════════════╗
║ Acesse o modo debug adicionando #debug ao final da URL e recarregando.
║ Pressione [V] para alternar a câmera livre.
╚══════════════════════════════╝

╔═ Three.js ══════════════════╗
║ Three.js é a biblioteca que uso para renderizar este mundo 3D (release: ${THREE.REVISION})
║ https://threejs.org/
║ Foi criada por mr.doob (https://x.com/mrdoob, https://github.com/mrdoob),
║ seguida por centenas de desenvolvedores incríveis,
║ um deles o Sunag (https://x.com/sea3dformat, https://github.com/sunag) que adicionou a TSL,
║ possibilitando usar WebGL e WebGPU e tornando este portfólio possível.
╚══════════════════════════════╝

╔═ Base do projeto ═══════════╗
║ Projeto desenvolvido com base no template folio-2025.
║ https://github.com/majinmagros/folio-2025
║ Disponível sob licença MIT.
╚══════════════════════════════╝

╔═ DJ sets ═══════════════════╗
║ Conheça meus sets de Drum & Bass e techno no meu canal do YouTube.
║ https://www.youtube.com/playlist?list=PLiIX1vnlWWNEFPed7oDm38alCAH0oyJek
╚══════════════════════════════╝

╔═ Músicas ═══════════════════╗
║ A música que você ouve no mundo foi feita especialmente por Kounine (Linktree),
║ sob licença CC0, ou seja, você pode fazer o que quiser com ela.
║ https://linktr.ee/Kounine
╚══════════════════════════════╝

╔═ Mais links ════════════════╗
║ Rapier (Física)  ⇒ https://rapier.rs/
║ Howler.js (Áudio)⇒ https://howlerjs.com/
║ Amatic SC (Fonte)⇒ https://fonts.google.com/specimen/Amatic+SC
║ Nunito (Fonte)   ⇒ https://fonts.google.com/specimen/Nunito?query=Nunito
╚══════════════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]

    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'

        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]