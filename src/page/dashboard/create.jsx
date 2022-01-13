import { useEffect, useState } from 'react';

function Create() {

    // const App=()=> {

    const [data, setData] = useState({
        category: "coffee",
        description: "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam.",
        name: "",
        price: "",
        quantity: "",
    });
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        var dataInput = new FormData();
        dataInput.append('name', data.name);
        dataInput.append('quantity', data.quantity);
        dataInput.append('price', data.price);
        dataInput.append('category', data.category);
        dataInput.append('description', data.description);
        await fetch(`https://fabcafe-api.herokuapp.com/item/`, {
            method: 'POST',
            headers: {
                'Authorization': 'token fce0fd16c3ce0e144970d7e4eb6920d8fc538ab2'
            },
            body: dataInput
        }).then(res => res.json).then(data => {
            window.location.href = 'http://localhost:3000/'
        }).catch(error => {
            console.log(error)
        })

    }
    return (
        <>
            <h1 style={{ 'textAlign': 'center' }}>Create an Item</h1>
            <form onSubmit={handleSubmit}>
                <div class="form-group" style={{ 'width': '40vw', 'margin-left': '30vw', 'margin-right': '30vw' }}>
                    <label for="exampleInputEmail1">Item name</label>
                    <input type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} value={data ? data.name : ''} placeholder="Enter name" />

                </div>
                <div class="form-group" style={{ 'width': '40vw', 'margin-left': '30vw', 'margin-right': '30vw' }}>
                    <label for="exampleInputEmail1">Item price</label>
                    <input type="number" name='price' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} value={data ? data.price : ''} placeholder="Enter price" />

                </div>
                <div class="form-group" style={{ 'width': '40vw', 'margin-left': '30vw', 'margin-right': '30vw' }}>
                    <label for="exampleInputEmail1">Item quantity</label>
                    <input type="number" name='quantity' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} value={data ? data.quantity : ''} placeholder="Enter quantity" />

                </div>
                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </>
    )
}
export default Create