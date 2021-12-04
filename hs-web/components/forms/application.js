
export const ApplicationForm = () => {

    const registerUser = async event => {
        event.preventDefault() // don't redirect the page
        
        const res = await fetch('/api/apply', {
            body: JSON.stringify({
              name: event.target.name.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
      
          const result = await res.json() 
    }

    return (
        <form onSubmit={registerUser}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
            <button type="submit">Register</button>
        </form>
    )
}