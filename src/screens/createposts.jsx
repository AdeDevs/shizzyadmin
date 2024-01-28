import "../styles/posts.css"

function CreatePosts() {
    return (
        <div className="create-posts">
            <form action="">
                <input type="text" name="title" placeholder="Type in your article title" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Type in your main article"></textarea>
                <section className="cat"><p>category: &nbsp; </p> <select  name="category">
                    <option value="Update">Update</option>
                    <option value="Crypto">Crypto</option>
                    <option value="Airtime">Airtine</option>
                </select>
                <button>Post</button>
                </section>
            </form>
        </div>
    )
}

export default CreatePosts;