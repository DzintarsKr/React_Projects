import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const getNumbers = () => {
    if (number1 === "" || number2 === "") {
      setError("Введите оба числа");
      setResult(null);
      return null;
    }

    const first = Number(number1);
    const second = Number(number2);

    if (isNaN(first) || isNaN(second)) {
      setError("Введите корректные числа");
      setResult(null);
      return null;
    }

    setError("");
    return { first, second };
  };

  const add = () => {
    const n = getNumbers();
    if (n) setResult(n.first + n.second);
  };

  const subtract = () => {
    const n = getNumbers();
    if (n) setResult(n.first - n.second);
  };

  const multiply = () => {
    const n = getNumbers();
    if (n) setResult(n.first * n.second);
  };

  const divide = () => {
    const n = getNumbers();
    if (!n) return;

    if (n.second === 0) {
      setError("Деление на ноль невозможно");
      setResult(null);
      return;
    }

    setResult(n.first / n.second);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Калькулятор
      </Typography>

      <TextField
        label="Первое число"
        type="number"
        fullWidth
        margin="normal"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />

      <TextField
        label="Второе число"
        type="number"
        fullWidth
        margin="normal"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />

      <Stack spacing={2} sx={{ mt: 2 }}>
        <Button variant="contained" onClick={add}>
          Сложение
        </Button>

        <Button variant="contained" onClick={subtract}>
          Вычитание
        </Button>

        <Button variant="contained" onClick={multiply}>
          Умножение
        </Button>

        <Button variant="contained" onClick={divide}>
          Деление
        </Button>
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {result !== null && (
        <Typography variant="h5" sx={{ mt: 3 }}>
          Результат: {result}
        </Typography>
      )}
    </Container>
  );
}

export default Calculator;