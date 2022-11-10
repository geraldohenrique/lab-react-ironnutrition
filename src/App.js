import './App.css';
import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Item from 'antd/lib/list/Item';
import AddFoodForm from './components/AddFoodForm/AddFoodForms';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [foodsList, setFoodsList] = useState(foods)

  const deleteFood = (item)=> {
    const newFoods = foodsList.filter((food, index) => {
      return index !== item
    })
    setFoodsList(newFoods)
  }

  const renderFoodList = foodsList.map((food,index) => {
      return <FoodBox food={food} key={index} index={index} deleteFood = {deleteFood}/>
  })

  const addFood = (newBook) =>{
    setFoodsList([newBook, ...foodsList])
  }

  const filterFoodList = (search) =>{
    if (search) {
      const newFoodList = foodsList.filter( (item) => {
        return item.name.toUpperCase().includes(search.toUpperCase())
      })
      setFoodsList(newFoodList)
    } else {
      setFoodsList(foods)
    }
    
  }

  return (
    <div className="App">
      <div><AddFoodForm addFood = {addFood}/></div>
      <div><SearchBar filterFoodList = {filterFoodList}/></div>
      <h1>Food List</h1>
      <div className='food-list'>{renderFoodList}</div>
    </div>
  );
}

export default App;
