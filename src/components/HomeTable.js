import React from 'react';
import { Table } from 'react-bootstrap';
function HomeTable(props) {
    return (
        <div>
            <h4 className='Header-title'>{props.name}</h4>

            <Table striped className='main-table'>
                <thead >
                    <tr className='table-header'>
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
                    {
                        props.Data.map((customer) => 
                            <tr key={customer.id}>
                                <td>
                                    <img src={customer.img} alt='' className='img-profile' />
                                </td>



                                <td id='HomeTable-td'>{customer.name}</td>
                                <td id='HomeTable-td'>{customer.national_id}</td>
                                <td id='HomeTable-td'>{customer.phone1}</td>
                                <td id='HomeTable-td'>{customer.phone2}</td>

                                <td id='HomeTable-td'>{customer.place}</td>

                            </tr>

                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default HomeTable;