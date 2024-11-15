import axios from 'axios';

export const getCarouselImagesAPI = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/photos';  
        const response = await axios.get(url);
        if (response?.data) {
            return response.data
        }
    } catch (error) {
        console.error('Error:', (error as Error).message, '|', error);
        return error
    }
}