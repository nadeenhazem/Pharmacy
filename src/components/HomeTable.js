import React from 'react';
import {  Table } from 'react-bootstrap';
import profile from '../Imgs/profile.png'
function HomeTable(props) {
    //  props.Data.map((customer)=>{
        //  console.log(props.Data)
    //  })
    return (
        <div>
        <h4 className='Header-title'>{props.name}</h4>

          <Table striped  className='main-table'>
                                <thead >
                                    <tr  className='table-header'>
                                        <th></th>
                                        <th >الاسم</th>
                                        <th>الرقم القومي</th>
                                        <th>تاريخ دفع اخر فاتوره</th>
                                        <th>تاريخ السداد</th>
                                        <th>مبلغ المدفوع</th>
                                        <th>الباقي </th>

                                    </tr>
                                </thead>
                                <tbody> 
                                {
                                            props.Data.map((customer)=>
                                    <tr key={customer.id}>
                                    <td>
                                        <img src={profile} alt='' className='img-profile'/>
                                        </td>

                                   
                                            
                                            <td>{customer.id}</td>
                                             <td>{customer.id}</td>
                                            <td>{customer.title}</td>
        
                                            
                                            <td>{customer.id}</td>
                                             <td>{customer.id}</td>
                                            <td>{customer.title}</td>

                                         </tr>)   
                                        }
                                   


{/* 
                                        {
                                            props.Data.map((customer)=>
                                            <td>{customer.userId}</td>)
                                        }
                                         */}
                                    
                                    {/* <tr>
                                    <td><img src={profile} alt='' className='img-profile'/></td>
                                         
                                        {/* {
                                            props.Data.map((customer)=>
                                            <td>{customer}</td>)
                                        } */}
                                        
                                   {/* </tr> */}
                                </tbody>
                            </Table>  
        </div>
    );
}

export default HomeTable;