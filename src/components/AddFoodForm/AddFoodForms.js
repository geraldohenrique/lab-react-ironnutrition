import {Form, Input, Button } from 'antd';
import React, { useState } from 'react';

function AddFoodForm(props) {

    const [form] = Form.useForm();
    const buttonItemLayout = { wrapperCol: { span: 14, offset: 4 } };

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleNameInput = (e) => {
        setName(e.target.value);
    };

    const handleImageInput = (e) => {
        setImage(e.target.value);
    };

    const handleCaloriesInput = (e) => {
        setCalories(e.target.value);
    };

    const handleServingsInput = (e) => {
        setServings(e.target.value);
    };

    const submitForm = (e) =>{
        
        const newFood = {
            name,
            image,
            calories,
            servings
        }
        props.addFood(newFood)

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }

    return (
        <Form form={form} onFinish={submitForm}>
        <Form.Item label="Nome do Prato">
            <Input 
                value={name} 
                placeholder="Escreva o nome do prato" 
                onChange={ handleNameInput }
            />
        </Form.Item>
        <Form.Item label="Imagem do Prato">
            <Input 
                value={image}
                placeholder="Informe a URL da imagem do prato"
                onChange={ handleImageInput }
            />
        </Form.Item>
        <Form.Item label="Calorias do Prato">
            <Input 
                value={calories} 
                placeholder="Indique a quantidade de calorias por porção do prato" 
                onChange={ handleCaloriesInput } 
            />
        </Form.Item>
        <Form.Item label="Porções do Prato">
            <Input 
                value={servings} 
                placeholder="Informe a quantidade de porções" 
                onChange={ handleServingsInput }
            />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType='submit'>Submit</Button>
        </Form.Item>
        </Form>
    );
}

export default AddFoodForm;
