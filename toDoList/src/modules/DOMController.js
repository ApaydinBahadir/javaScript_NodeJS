function createHTMLElement(elType, elClass, elId, elContext, appenTo = null){
    const element = document.createElement(elType)
    if (elId) element.id = elId
    if (elClass){
        var elClassVariable = elClass.split(" ")
        elClassVariable.forEach(el => {
            element.classList.add(el)
        })
    }

    if (elContext) element.innerHTML = elContext

    if (appenTo) appenTo.appendChild(element)

    return element
}

function renderPage(){
    const header = createHTMLElement("div", "header", null, null, document.body)
    const main = createHTMLElement("div", "main", null, null, document.body)

    const projects = createHTMLElement("div", "projects", "projects", null, main)
    const todos = createHTMLElement("div", "todos", "todos", null, main)
    const desc = createHTMLElement("div", "desc", null, null, main)

    const descText = createHTMLElement("p", "descText", null , "Description", desc)
    const projectsText = createHTMLElement("p", "projectsText", null , "Projects", projects)
    const todosText = createHTMLElement("p", "todosText", null , "To-Do", todos)

    const headerText = createHTMLElement("p", "headerText", null, "To-Do Application", header)
    const addProjects = createHTMLElement("div", "rectangle", "addProject", null, projects)
    const projectsButton = createHTMLElement("button", "rectangleButton", "projectsInput", "Add", addProjects)
    const projectsInput = createHTMLElement("input", "rectangleInput", "projectsInput", null, addProjects)
    const addTodo = createHTMLElement("div", "rectangle", "addProject", null, todos)
    const todobutton = createHTMLElement("button", "rectangleButton", "todoButton", "Add", addTodo)
    const todoInput = createHTMLElement("input", "rectangleInput", "todoInput", null, addTodo)
}

function createTodo(){
    
}

export { renderPage,createHTMLElement }