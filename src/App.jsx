import "./App.css";
import MainTitle from "./components/main-title/MainTitle";
// import MainTitle from "./components/main-title/MainTitle";

const TODOS = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Learn Vue", completed: false },
  { id: 3, title: "Learn Angular", completed: false },
  { id: 4, title: "Learn Svelte", completed: true },
];

function App() {
  // const userName = "John Doe";
  const inactive = "text-red";

  return (
    <div>
      
      <MainTitle title="Bienvenido a las Props" subtitle="Creando componentes con React" />

      <p className={`fs-20 ${inactive}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, at?
      </p>

      <ul className="todo-list">
        {
          TODOS.map((todo) => {

            return (
              <li className="todo-item" key={todo.id}> 
                <span className="mr-2">
                  { todo.completed ? '✅' : '❌' }
                </span>
                <span className={ todo.completed ? 'completed' : '' }> 
                  {todo.title } 
                </span>
              </li>
            );
          })
        }
      </ul>

      <MainTitle title="Segundo titulo imporante" />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cum asperiores alias illo nobis libero architecto eligendi earum fugit repudiandae.</p>


      <MainTitle title="Ultimo título" subtitle="Definiendo componentes reutilizables" />
    </div>
  );
}

export default App;
