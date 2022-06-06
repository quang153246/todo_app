import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodosSlice from '../TodoList/TodosSlice';
import { DeleteOutlined } from '@ant-design/icons';
const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, priority, completed, id }) {

  const dispatch = useDispatch()
  const [checked, setChecked] = useState(completed);
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(TodosSlice.actions.toggleTodoStatus(id))
  };

  const handleDelete = () => {
    dispatch(TodosSlice.actions.deleteTodo(id))
  }

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} style={{width:'150px'}} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <DeleteOutlined 
        onClick = {handleDelete}
      />
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0, width:'60px' }}>
        {priority}
      </Tag>
    </Row>
  );
}
