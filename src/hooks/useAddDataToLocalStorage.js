import { useEffect } from "react";

const useAddDataToLocalStorage = (newData) => {
  useEffect(() => {
    const handleAddDataToLocalStorage = () => {
      // Отримати попередні дані з локального сховища
      const previousData =
        JSON.parse(localStorage.getItem("isFollowing")) || [];

      // Додати нові дані до попереднього масиву
      const updatedData = [...previousData, newData];

      // Зберегти оновлений масив у локальному сховищі
      localStorage.setItem("isFollowing", JSON.stringify(updatedData));
    };

    handleAddDataToLocalStorage();
  }, [newData]);
};

export default useAddDataToLocalStorage;
