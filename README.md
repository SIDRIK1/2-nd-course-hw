# 🎮 Мини-игры — Полный JavaScript тренажер

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Vanilla%20JS-FF6B35?style=for-the-badge&logo=javascript&logoColor=white" alt="Vanilla JS">
</div>

---

## ✨ **6 Интерактивных мини-игр**

**Комплексный тренажер JavaScript** с практическими задачами DOM, событий, массивов и логики.

### 🎯 **Игры и навыки:**

| Игра | Основные JS техники |
|------|---------------------|
| **🧠 Угадай число** | `Math.random()`, условия `if/else` |
| **➕ Арифметика** | Математические операции, таймеры |
| **🔤 Переверни текст** | `split().reverse().join()` |
| **✂️ Камень/Ножницы/Бумага** | `prompt()`, `switch`, рандом |
| **❓ Викторина** | Массивы объектов, циклы |
| **🌈 Генератор цветов** | HEX цвета, динамические стили |

---

## 🚀 **Live Demo**
**[Играть онлайн →](https://sidrik1.github.io/2-nd-course-hw/new_sait/index.html)**

---

## 📱 **Полная адаптивность**
✅ **Десктоп** | ✅ **Мобильный** | ✅ **Планшет**

---

## 🛠 **JavaScript навыки проекта**

```javascript
// 🎮 Камень/Ножницы/Бумага — Полная логика
function playRockPaperScissors() {
    const options = ["камень", "ножницы", "бумага"];
    let userChoice = prompt("Выберите...");
    
    // Валидация ввода
    if (!options.includes(userChoice.toLowerCase())) {
        alert("❌ Неверный выбор!");
        return;
    }
    
    // Компьютерный ход
    const computerChoice = options[Math.floor(Math.random() * 3)];
    
    // Определение победителя
    let result = userChoice === computerChoice 
        ? "🤝 Ничья!" 
        : (правила игры ? "🎉 Вы победили!" : "😢 Компьютер выиграл!");
    
    alert(`Вы: ${userChoice}\nPC: ${computerChoice}\n${result}`);
}
```

### **🔥 20+ JS концепций:**
