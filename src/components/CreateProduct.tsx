import React, { useState } from "react";
import { IProduct } from "../models";
import axios, { AxiosError } from 'axios';
import { ErrorMessage } from "./errorMessage";

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 11
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }

        productData.title = value.trim();

        const response = await axios.post<IProduct>(
            'https://fakestoreapi.com/products',
            productData
        )

        onCreate(response.data)
    }

    // const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const changeHandler = (event: any) => {
        setValue(event.target.value)
    }

    return (
        <form
            onSubmit={submitHandler}        
        >
            <input
                type="text"
                className="border py-2 px-4 mb-2 rounded w-full outline-0"
                placeholder="Enter producr title..."
                value={value}
                onChange={changeHandler}
            />

            {error && <ErrorMessage error={error} />}

            <button
                type='submit'
                className="py-2 px-4 border bg-yellow-400 rounded hover:text-white"
            >Create</button>
        </form>
    )
}