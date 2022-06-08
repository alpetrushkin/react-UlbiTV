function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'Html', body: 'Description'},
        {id: 3, title: 'Css', body: 'Description'},
        {id: 4, title: 'React', body: 'Description'},
        {id: 5, title: 'Webpack', body: 'Description'},
    ])

    return (
        <div className="App">
            {posts.map(post =>
            <PostItem post={post} key={post.id} />
            )}
        </div>
    )
}