import { createHTMLElement } from "./DOMController"

function toDoClass(gTitle, gDescrip, gDueDate, gPriorty, gChecklist){
    var sTitle = gTitle
    var sDescrip = gDescrip
    var sDueDate = gDueDate
    var sPriorty = gPriorty
    var sChecklist = gChecklist
    
    return {sTitle, sDescrip, sDueDate, sPriorty, sChecklist}
}

export { toDoClass }