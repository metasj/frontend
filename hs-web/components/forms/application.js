
export const ApplicationForm = () => {

    const registerUser = async event => {
        event.preventDefault() // don't redirect the page
        
    }

    return (
        <form onSubmit={registerUser}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" autoComplete="name" required />
            <button type="submit">Register</button>
        </form>
    )
}