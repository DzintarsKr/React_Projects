import { useState } from 'react';
import 'rsuite/dist/rsuite.min.css'; 
import { Input, InputGroup, IconButton, List } from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
// Импортируем иконку корзины для удаления
import TrashIcon from '@rsuite/icons/Trash';

function App() {
  // МЕСТО ХРАНЕНИЯ ЭЛЕМЕНТОВ (подробное пояснение ниже)
  const [items, setItems] = useState(['Купить молоко', 'Выучить React']);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, inputValue]);
    setInputValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  // ФУНКЦИЯ УДАЛЕНИЯ ЭЛЕМЕНТА ПО ЕГО ИНДЕКСУ
  const handleDeleteItem = (indexToDelete) => {
    // Фильтруем массив: оставляем только те элементы, чей индекс не равен indexToDelete
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems); // Обновляем состояние списка
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Мой список задач</h3>
      
      <InputGroup style={{ marginBottom: '20px' }}>
        <Input 
          placeholder="Новая задача..." 
          value={inputValue}
          onChange={(value) => setInputValue(value)}
          onKeyDown={handleKeyDown}
        />
        <IconButton 
          icon={<PlusIcon />} 
          onClick={handleAddItem}
          appearance="primary"
        />
      </InputGroup>

      <List bordered>
        {items.map((item, index) => (
          // flex и justify-content распределяют текст и кнопку удаления по краям строки
          <List.Item key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{item}</span>
            
            {/* Кнопка удаления для каждого элемента */}
            <IconButton 
              icon={<TrashIcon />} 
              color="red" 
              appearance="subtle" 
              size="xs"
              onClick={() => handleDeleteItem(index)} // Передаем индекс удаляемого элемента
            />
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
