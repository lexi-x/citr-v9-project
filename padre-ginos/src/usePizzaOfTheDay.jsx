import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
    const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
    // purely for dev tools
    useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id} `: "Loading...");

    useEffect(() => {
        async function fetchPizzaOfTheDay() {
            const response = await fetch("/api/pizza-of-the-day");
            const data = await response.json();
            setPizzaOfTheDay(data);
        }
        fetchPizzaOfTheDay();
    }, []);

    return pizzaOfTheDay;
};