import { v4 as uuidv4 } from "uuid"

const cards = [
    {

        id: uuidv4(),
        nome: "Zeca Baleiro",
        imagem: "https://www.eventim.com.br/obj/media/BR-eventim/teaser/evo/1x1/2020/zecabaleiropiano-palaciodasartes-eventim-profile.png",
        descricao: "Essa descrição é do evento 1",
        data: "11/04/2025",
        hora: "20:00",
    },
    {
        
        id: uuidv4(),
        nome: "Daniel Boaventura",
        imagem: "https://www.eventim.com.br/obj/media/BR-eventim/teaser/evo/1x1/2020/danielboaventura-diadasmaes-tokiomarine-eventim-profile.jpg",
        descricao: "Essa descrição é do evento 2",
        data: "09/05/2025",
        hora: "20:00",


    },
    {
        
        id: uuidv4(),
        nome: "Evento 3",
        imagem: "https://www.eventim.com.br/obj/media/BR-eventim/teaser/evo/1x1/2020/danielboaventura-diadasmaes-tokiomarine-eventim-profile.jpg",
        descricao: "Essa descrição é do evento 3",
        data: "01/04/2025",
        hora: "20:00",

    },
    {
        
        id: uuidv4(),
        nome: "Evento 4",
        imagem: "https://www.eventim.com.br/obj/media/BR-eventim/teaser/evo/1x1/2020/danielboaventura-diadasmaes-tokiomarine-eventim-profile.jpg",
        descricao: "Essa descrição é do evento 4",
        data: "01/04/2025",
        hora: "20:00",
        

    }
]

function listarEventos(){
    return cards
}

function buscarEventoId(id){
    return cards.find(evento => evento.id === id)
}

function criarEventos(evento){
    evento.id = uuidv4()
    evento.imagem = evento.imagem || "https://www.eventim.com.br/obj/media/BR-eventim/teaser/evo/1x1/2020/danielboaventura-diadasmaes-tokiomarine-eventim-profile.jpg"
    cards.push(evento)
}

function editarEvento(id, eventoAtualizado){
    const index = cards.findIndex(evento => evento.id === id);
    if(index !== -1){
        cards[index] = {...cards[index], ...eventoAtualizado}
        cards[index].imagem = eventoAtualizado.imagem || "https://www.eventim.com.br/obj/media/BR-eventim/teaser/evo/1x1/2020/danielboaventura-diadasmaes-tokiomarine-eventim-profile.jpg"
    }
}

function deletarEvento(id){
    const index = cards.findIndex(evento => evento.id === id)
    if(index !== -1){
        cards.slice(index,1)
    }
}

export default {listarEventos, editarEvento, criarEventos, deletarEvento, buscarEventoId}