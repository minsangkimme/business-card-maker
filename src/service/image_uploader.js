class ImageUploader {
    async upload(file) {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'tfswvu2e');
        const result = await fetch(            
            'https://api.cloudinary.com/v1_1/doqkbkil4/upload',
            {
                method: 'POST',
                body: data,
            }
        );

        return await result.json();
    }
}

export default ImageUploader;