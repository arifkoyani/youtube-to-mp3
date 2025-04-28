"use client";
import React, { createContext, useState } from "react";
function ContextProvider({ children }) {
  const MainStore = createContext();
  const [age, setAge] = useState(24);

  function IncrementAge() {
    setAge(age + 1);
  }
  return (
    <MainStore.Provider value={{ ageFun: { IncrementAge }, age: { age } }}>
      {children}
    </MainStore.Provider>
  );
}

export default ContextProvider;
