import {Form, Input } from 'antd';
import React, { useState } from 'react';

function SearchBar(props){

    const [form] = Form.useForm();

    const [search, setSearch] = useState('');

    const submitForm = (e) => {
        console.log(e.target.value)
        props.filterFoodList(e.target.value)
    }

    
    return(
        <Form form={form} onChange={submitForm}>
            <Form.Item label="Search">
                <Input 
                    placeholder="" 
                    onChange={ submitForm }
                />
            </Form.Item>
        </Form>
    )
}

export default SearchBar