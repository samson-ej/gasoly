// export default function Form() {
//   return (
//     <form action='/api/form' method='post'>
//       <label htmlFor='miles'>Miles</label>
//       <input type='number' id='miles' name='miles' required />

//       <label htmlFor='volume'>Volume</label>
//       <input type='number' id='volume' name='volume' required />

//       <label htmlFor='price'>Price at Pump</label>
//       <input type='number' id='price' name='price' required />

//       <label htmlFor='date'>Date</label>
//       <input type='date' id='date' name='date' required />

//       <button type='submit'>Submit</button>
//     </form>
//   )
// }



export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for miles, volume, price, date,
    // and returns early if they are not found
    if (!body.miles || !body.volume || !body.price || !body.date) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Check if the form is fully filled out.' })
    }
  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.miles} ${body.volume} ${body.price} ${body.date}` })
  }