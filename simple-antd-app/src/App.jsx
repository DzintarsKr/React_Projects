import { useState } from 'react';
// Импортируем компоненты Button и Modal из библиотеки Ant Design
import { Button, Modal } from 'antd';

function App() {
  // Состояние для управления видимостью модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для открытия модального окна
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна при клике на OK
  const handleOk = () => {
    setIsModalOpen(false);
  };

  // Функция для закрытия модального окна при клике на Отмена / Крестик
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>React + Ant Design</h1>
      
      {/* Кнопка, открывающая модальное окно */}
      <Button type="primary" size="large" onClick={showModal}>
        Открыть модальное окно
      </Button>

      {/* Компонент модального окна */}
      <Modal 
        title="Уведомление" 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        okText="Понятно"
        cancelText="Закрыть"
      >
        <p>Модальное окно успешно создано и работает! 🎉</p>
      </Modal>
    </div>
  );
}

export default App;
