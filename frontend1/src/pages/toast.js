import iziToast from 'izitoast';


export const showToast = (title, message) => {
    iziToast.show({
        title: title,
        message: message,
        color: 'green', 
        position: 'bottomRight',
        backgroundColor: 'green', // Adding background color
        
    });
};
