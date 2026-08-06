// 2. Импорты
import React, { useState } from 'react';
import { styled } from '@mui/material/styles'; 
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box  from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function App() {
  // 3. Создание состояний
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // 4. Функция обработки отправки формы
  const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение (перезагрузку страницы)
    
    // Сохраняем введенные данные в состояние
    setSubmittedData({ name, email });
    
    // Очищаем поля ввода
    setName('');
    setEmail('');
  };

  // Проверка для отключения кнопки (disabled), если хотя бы одно поле пустое
  const isFormEmpty = name.trim() === '' || email.trim() === '';

  return (
    <div>
      {/* 1. Разметка компонента -> AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Simple App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Контейнер для размещения содержимого */}
      <Container maxWidth="sm">
        {/* Box для добавления отступов */}
        <Box sx={{ mt: 4, mb: 4 }}>
          
          {/* Карточка (Paper) для формы */}
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" component="h1" gutterBottom>
              Регистрация пользователя
            </Typography>

            {/* Форма для ввода данных */}
            <form onSubmit={handleSubmit}>
              <TextField
                label="Имя"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Кнопка отправки формы */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isFormEmpty}
                sx={{ mt: 2 }}
              >
                Отправить
              </Button>
            </form>
          </Paper>

        </Box>

        {/* 2. Отображение данных (рендерится только если форма была отправлена) */}
        {submittedData && (
          <Box sx={{ mb: 4 }}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom>
                Отправленные данные:
              </Typography>
              <Typography variant="body1">
                <strong>Имя:</strong> {submittedData.name}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                <strong>Email:</strong> {submittedData.email}
              </Typography>
            </Paper>
          </Box>
        )}
      </Container>
    </div>
  );
}

export default App;