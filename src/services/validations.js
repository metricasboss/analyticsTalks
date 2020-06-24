import axios from 'axios';

export const validateRevenue = async (kpi, callback) => {
    let { data } = await axios.get("http://localhost:1337/validations/1")

    let result = {
        "id": data.id,
    }

    if(parseFloat(kpi) > 0) {
        result.success = true 
        result.message = data.sucessMessage
    } else {
        result.success = false 
        result.message = data.errorMessage
    }

    callback(result)
}


export const validateProductCategory = async (kpi, callback) => {
    let { data } = await axios.get("http://localhost:1337/validations/2")
    
    let result = {
        "id": data.id,
    }

    if(kpi.length > 0) {
        result.success = true 
        result.message = data.sucessMessage
    } else {
        result.success = false 
        result.message = data.errorMessage
    }
    
    callback(result)

}

// export const validateBounceRate = async (data) => {
//     if(!!response.result.reports[0].data.totals[0].values[0] && parseInt(response.result.reports[0].data.totals[0].values[0]) < 20) {
//         console.log("Sua taxa de rejeicao está abaixo de 20%", "checkBounceRate")
//     }else {
//         console.log("Sua taxa de rejeicao está acima de 20%", "checkBounceRate")
//     }
// }

// export const validateGoalExists = async (data) => {
//     if(!!response.result.reports[0].data.rows && response.result.reports[0].data.rows.length > 0) {
//         console.log("Foram computadas metas nos ultimos 30 dias", "checkGoalExists")
//     }else {
//         console.log("Não foram computadas metas nos ultimos 30 dias", "checkGoalExists")
//     }
// }

// export const validateGoalsExists = async (data) => {
//     if(!!response.result.reports[0].data.rows && response.result.reports[0].data.rows.length > 0) {
//         console.log("Foram computadas metas nos ultimos 30 dias", "checkGoalExists")
//     }else {
//         console.log("Não foram computadas metas nos ultimos 30 dias", "checkGoalExists")
//     }
// }

// export const validateAdwordsExists = async (data) => {
//     if(!!response.result.reports[0].data.rows && response.result.reports[0].data.rows.length > 0) {
//         console.log("Adwords vinculado corretamente", "checkAdwordsExists")
//     }else {
//         console.log("Você tem o google adwords vinculado? Não encontramos o Adwords vinculados a sua conta", "checkAdwordsExists")
//     }    
// }

// export const validateEventsExists = async (data) => {
//     if(!!response.result.reports[0].data.rows && response.result.reports[0].data.rows.length > 0) {
//         console.log("Foram encontradas categorias de produtos", "checkEventsExists")
//     }    
// }

// export const validateThirdCheckoutReferenceExists = async (data) => {
//     if(!!response.result.reports[0].data.rows && response.result.reports[0].data.rows.length > 0) {
//         console.log("Foram encontradas categorias de produtos", "checkThirdCheckoutReferenceExists")
//     }   
// }





