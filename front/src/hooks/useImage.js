import { useEffect, useState } from 'react'

const useImage = (fileName) => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            const response = await import(`../assets/img/${fileName}`) // change relative path to suit your needs
            setImage(response.default)
        }
        fetchImage()
    }, [fileName])

    return image;
}

export default useImage;