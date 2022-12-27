export function CartReducer(state,action){

    const listaEntradas = [];
    switch(action.type){
        case "ADD_ITEMS":

            if(state.prodcuto.length > 0){
            listaEntradas.push(state.entrada)
            }

            return{
                ...state,
                count:action.payload.count,
                entrada:[action.payload.entrada],
                listaEntrada:listaEntradas
            }
            default:
                break;
    }
}