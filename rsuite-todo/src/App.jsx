import { useState } from 'react';
// Импортируем стили React Suite
import 'rsuite/dist/rsuite.min.css'; 
// Импортируем строго все компоненты из задания
import { Input, InputGroup, IconButton, List } from 'rsuite';
// Импортируем иконку плюс
import PlusIcon from '@rsuite/icons/Plus';

function App() {
  // Состояние для хранения списка элементов
  const [items, setItems] = useState(['Купить молоко', 'Выучить React']);
  // Состояние для нового вводимого элемента
  const [inputValue, setInputValue] = useState('');

  // Функция для добавления нового элемента в список
  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, inputValue]);
    setInputValue('');
  };

  // Функция для добавления по нажатию Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Мой список задач</h3>
      
      {/* InputGroup: Объединяет поле ввода и кнопку */}
      <InputGroup style={{ marginBottom: '20px' }}>
        {/* Input: Поле ввода для нового элемента */}
        <Input 
          placeholder="Новая задача..." 
          value={inputValue}
          onChange={(value) => setInputValue(value)}
          onKeyDown={handleKeyDown}
        />
        
        {/* IconButton: Кнопка С ИКОНКОЙ, вложенная в InputGroup */}
        <IconButton 
          icon={<PlusIcon />} 
          onClick={handleAddItem}
          appearance="primary" // Делает кнопку акцентной (синей)
        />
      </InputGroup>

      {/* List: Отображение списка элементов */}
      <List bordered>
        {items.map((item, index) => (
          <List.Item key={index}>
            {item}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;