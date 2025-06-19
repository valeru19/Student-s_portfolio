import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
    // getting stored value
    try {
        const saved = localStorage.getItem(key);
        if (saved === null || saved === undefined) {
            return defaultValue;
        }
        return JSON.parse(saved);
    } catch (error) {
        console.error('Error parsing localStorage value:', error);
        return defaultValue;
    }
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }, [key, value]);

    return [value, setValue];
};