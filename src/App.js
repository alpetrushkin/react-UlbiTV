import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'From Wikipedia, the free encyclopedia'},
        {id: 2, title: 'React', body: 'Wikipedia'},
        {id: 3, title: 'Babel', body: 'From'},
    ])

    const [title, setTitle] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
    }

   return (
    <div className='App'>
        <form>
            <MyInput
                value={title}
                onChange={e =>setTitle(e.target.value)}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={'Посты про JS'} />
    </div>
   )
}

export default App




