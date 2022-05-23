// import clientPromise from '../lib/mongodb'
// import { MongoClient, ServerApiVersion } from '../lib/mongodb';

// const { MongoClient, ServerApiVersi} = require('mongodb');
// const uri = "mongodb+srv://samson-ej:@cluster0.6qbib.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

export default function JSbasedForm() {
    const handleSubmit = async (event) => {
        event. preventDefault()

        const data = {
            miles: event.target.miles.value,
            volume: event.target.volume.value,
            price: event.target.price.value,
            date: event.target.date.value,
        }

        const JSONdata = JSON.stringify(data)

        const endpoint = 'api/form'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)

        const result = await response.json()
        alert(`Is this what you submitted: ${result.data}`)
    }
    return(
        <form onSubmit={handleSubmit}>
            <p>        
            <label htmlFor='miles'>Miles</label>
            <input type='number' step='any' id='miles' name='miles' required/>
            </p>

            <p>    
            <label htmlFor='volume'>Volume</label>
            <input type='number' step='any' id='volume' name='volume' required/>
            </p>

            <p>
            <label htmlFor='price'>Price at Pump</label>
            <input type='number' step='any' id='price' name='price' required/>
            </p>

            <p>
            <label htmlFor='date'>Date</label>
            <input type='date' step='any' id='date' name='date' required/>
            </p>

            <button type='submit'>Submit</button>
        </form>
    )
}