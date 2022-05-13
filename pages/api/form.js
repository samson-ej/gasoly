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
      return res.status(400).json({ data: 'Check if form fully filled out.' })
    }
  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.miles} ${body.volume} ${body.price} ${body.date}` })
  }