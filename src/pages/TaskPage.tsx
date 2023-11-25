import { AddTaskForm } from '../components/AddTaskForm';
import { IntroText } from '../components/IntroText';
import { TaskList } from '../components/TaskList';
import styles from '../styles/TaskPage.module.css';

export function TaskPage() {

  const tasks = [{
    _id: "ffff",
    description: "ddd",
    isComplete: false
  }]
  return (
    <div className={styles.container}>
      <AddTaskForm onSubmit={() => console.log('add form')} />
        <IntroText />
        <TaskList
          tasks={tasks}
          onToggleTaskStatus={() => console.log('togle task status')}
          onDeleteTask={() => console.log('delete-form')}
        />
    </div>
  );
}
