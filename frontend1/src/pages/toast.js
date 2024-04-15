import iziToast from 'izitoast';


export const showToast = (title, message) => {
    iziToast.show({
        title: title,
        message: message,
        color: 'green', 
        position: 'topLeft',
        backgroundColor: 'green', // Adding background color
        
    });
};
