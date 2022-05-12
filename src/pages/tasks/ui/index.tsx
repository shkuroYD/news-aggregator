import { Task } from '@Entities/task'

interface ITask {
  text: string
}

interface IProps {
  tasksList: ITask[]
}

export const TasksList = (props: IProps) => {
  const { tasksList } = props;

  return (
    <div>
      {tasksList.map((task, index) => <Task key={index} text={task.text} />)}
    </div>
  );
}