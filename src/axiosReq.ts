// d.ts (declaration) -> hints ,error
import axios , {type AxiosResponse} from "axios";

// AxiosResponse is a type that describes the shape of an axios response

interface Todo{
    userid : number
    id : number
    title : string
    completed : boolean
}

const fetchData = async ( ) => {
    try {
        const response : AxiosResponse<Todo> = await axios.
        get(
            'https://jsonplaceholder.typicode.com/todos/1'
        )
        console.log("Todo" , response.data);
        
    } catch (error : any) {
        if ( axios.isAxiosError(error)){
            console.log('Axios Error' , error.message);
            if (error.response) {
                console.log(error.response.status);
            }
        }

    }
}


// axios.get('')
// .then(response => {
//    console.log(response.data);
// })


