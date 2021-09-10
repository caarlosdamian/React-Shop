import {useState} from 'react'

export const useForm = ( initialValue = {}) => {
    const [formData, setFormData] = useState(initialValue)

    const reset = ()=>{
        setFormData(initialValue)
    }

    const handleChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    return [formData, handleChange, reset]
}