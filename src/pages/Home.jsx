import { useState } from "react";
import Button from "../Styled/Button.style";
import Input from "../Styled/Input.styled";
import { useGetPostQuery } from "../app/services/post";

const Home = () => {
  const { data } = useGetPostQuery();
  console.log(data);

  const [post, setPost] = useState({ title: "", author: "" });

    const handleChange=(e)=>{
        setPost({...post,[e.target.name]: e.target.value})
    }

  console.log(post);

  return (
    <div>
      <Input
        placeholder="title"
        name="title"
        value={post.title}
        onChange={handleChange}
      />
      <input
        placeholder="author"
        name="author"
        value={post.author}
        onChange={handleChange}
      />
      <Button>Submit</Button>
    </div>
  );
};

export default Home;
