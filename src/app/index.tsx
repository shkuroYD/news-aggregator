import '@App/styles/index.css';
import { TasksList } from "@Pages/tasks";

export const App = () => {
  const tasks = [{text: 'Сделать пиццу'}, {text: 'Выучить английский'}, {text: 'Купить доллары'}]

  return (
    <div className="app">
      <TasksList tasksList={tasks}/>
    </div>
  );
}