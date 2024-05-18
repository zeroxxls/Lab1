function ucFirst(str) {
    if (!str) return str; // Якщо рядок порожній, повертаємо його як є
    return str.charAt(0).toUpperCase() + str.slice(1);
}