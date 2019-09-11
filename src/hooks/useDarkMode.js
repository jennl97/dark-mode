import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark', false);

    useEffect(() => {
        console.log('dark mode: ', darkMode);
        if(darkMode === true){
            window.document.body.classList.add('dark-mode');
        } else {
            window.document.body.classList.remove('dark-mode');
        }}, [darkMode])

        return[darkMode, setDarkMode];

}

