import List from "./components/List";
import Search from "./components/Search";

const stories =[
  {
      title:"React",
      url:"https://reactjs.org/",
      author: "abd",
      num_comments:5,
      points: 3,
      objectID: 0,
  },
  {
      title:"React",
      url:"https://reactjs.org/",
      author: "des",
      num_comments:0,
      points: 5,
      objectID: 2,
  },
  ];

function App() {
  return (
    <div >
       <h1>My Stories</h1>
       <Search />
       <hr />
       <List stories={stories} item={stories}/>
         
         
    </div>
   
  );
}

export default App;