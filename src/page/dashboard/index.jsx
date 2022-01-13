import { useEffect, useState } from 'react';

function Dashboard() {

    const [data, setData] = useState();

    const getData = async () => {

        const response = await fetch("https://fabcafe-api.herokuapp.com/items").then((res) =>
            res.json()
        ).catch((error) => {
            console.log(error)
        });

        setData(response)
        console.log(response)
    }

    useEffect(() => {
        if (!data) getData();

    })

    const renderData = data ? data.map((item) => {
        const { id, name, price, quantity } = item;
        return (
            <>
                <tr key={id} className="odd gradeX">
                    <td>{id}</td>
                    <td>{name}</td>
                    <td className="center">{price}</td>
                    <td className="center">{quantity}</td>
                    <td className="center">

                        <a style={{'margin-right': '20px'}} href="javascript:void(0);" onClick={(e) => {
                            localStorage.setItem('id', id);
                            window.location.href = 'http://localhost:3000/edit'
                        }} className="btn btn-primary"><i
                            className="fa fa-edit "></i> Edit</a>
                        <a href="javascript:void(0);" onClick={async (e) => {
                            await fetch(`https://fabcafe-api.herokuapp.com/item/${id}/`, {
                                method: 'DELETE',
                                headers: {
                                    'Authorization': 'token fce0fd16c3ce0e144970d7e4eb6920d8fc538ab2'
                                },
                            }).then(res => res.json).then(() => {
                                // console.log(data)
                                window.location.href = 'http://localhost:3000/'
                            })
                        }} className="btn btn-danger"><i
                            className="fa fa-trash"></i> Delete</a>
                    </td>
                </tr>
            </>
        );
    }) : () => <p>no item created yet</p>

    return (

        <div className="row" style={{ 'margin-top': '5rem' }}>
            <div className="col-md-12">
                {/* <!-- Advanced Tables --> */}
                <div className="panel panel-default">
                    <div className="panel-heading" style={{ "display": "flex", "flex-direction": "row","margin-bottom":"10px" }}>
                        <h4 style={{ "text-align": "center", "margin-left": "40vw" }}>Items List</h4>
                        <button className="btn btn-secondary" title="add new item"
                            style={{ "margin-left": "5vw", "justify-self": "flex-end" }}><a href="http://localhost:3000/create-item/" style={{
                                "text-decoration": "none",
                                "color": "#fff"
                            }}>+</a></button>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover" style={{ 'width': '80vw', 'margin-right': '10vw', 'margin-left': '10vw' }} id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>item name</th>
                                        <th>Price</th>
                                        <th>quantity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderData}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Dashboard