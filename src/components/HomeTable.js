import React from 'react';
import {  Table } from 'react-bootstrap';
function HomeTable(props) {
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
                                <tbody > 
                                {/* {
                                            props.Data.map((customer)=> */}
                                    <tr key={props.Data.id}>
                                    <td>
                                        <img src='https://hamdyadam.pythonanywhere.com/media/uploads/profile/ca5608be-089b-4e12-91b3-98244a990831/FB_IMG_1557850399243.jpg' alt='' className='img-profile'/>
                                        </td>

                                   
                                            
                                            <td id='HomeTable-td'>{props.Data.name}</td>
                                             <td id='HomeTable-td'>{props.Data.national_id}</td>
                                            <td id='HomeTable-td'>{props.Data.phone1}</td>
        
                                            
                                             <td id='HomeTable-td'>{props.Data.place}</td>

                                         </tr>
                                         
                                   

                                </tbody>
                            </Table>  
        </div>
    );
}

export default HomeTable;