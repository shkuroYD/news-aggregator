import '@App/styles/index.scss';
import { TasksList } from "@Pages/tasks";

export const App = () => {
  const tasks = [{text: 'Сделать пиццу'}, {text: 'Выучить английский'}, {text: 'Купить доллары'}]

  return (
    <div className="app">
      <TasksList tasksList={tasks}/>
    </div>
  );
}