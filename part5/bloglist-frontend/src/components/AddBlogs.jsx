import { useState } from 'react'

const AddBlogs = ({createBlog})=>{

    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')

    //input value handlers
    const handleUrlChange = ({target})=>setUrl(target.value)
    const handleTitleChange = ({target})=>setTitle(target.value)

    //onSubmit
    const onSubmit = (event)=>{
        event.preventDefault()
        createBlog(url,title)
        setUrl('')
        setTitle('')
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                Title: <input id='TitleInput' value={title} onChange={handleTitleChange} />
            </div>
            <div>
                URL: <input id='UrlInput' value={url} onChange={handleUrlChange} />
            </div>
            <div>
                <button id='SubmitButton' type="submit">Create Blog</button>
            </div>
        </form>
    )
}

export default AddBlogs