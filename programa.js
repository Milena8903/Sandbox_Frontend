

class FormEngine{

    //se conecta a la api
    async render(){
        //obtener la estructura del formulario de paciente
        const response = await fetch('http://localhost:3000/formulario/Cita')
        const form = await response.json()
        
        const formHtml = document.createElement("form")
        //agregue al atributo class los siguirntes elementos
        formHtml.classList.add("container")

        //Recorrer todo el json y guardelos en el elemento
        //se guardan los elementos en una variable

        //valla al json q le acabaron de dar
        //busque la estrada propities y asignelas a un objeto q recorra
        //guardelo en un arreglo llave - valor
        //recorra las entradas una por una y coloque y haga lo de adentro
        for( const [key, value] of Object.entries(form.properties) ){
            const label = document.createElement('label')
            label.innerText=key
            formHtml.appendChild(label)
            const input = document.createElement('input')
            input.name = key
            input.classList.add("form-control")

            if(value.type == 'integer'){
                input.type="number"
            }else{
                input.type="text"
            }
            
            formHtml.appendChild(input)
        }

        document.body.appendChild(formHtml)
    }
}

const miFormEngine = new FormEngine()
miFormEngine.render()