import '@App/styles/index.css';
import { TasksList } from "@Pages/tasks";
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const App = () => {
  const tasks = [{text: 'Сделать пиццу'}, {text: 'Выучить английский'}, {text: 'Купить доллары'}]

  return (
    <div className="app">
      <AccessAlarmIcon />
      <Button variant="contained">Сосёшь</Button>
      <TasksList tasksList={tasks}/>
    </div>
  );
}