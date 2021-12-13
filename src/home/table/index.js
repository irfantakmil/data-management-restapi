import React, {useEffect,useState, useMemo} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getBinatang } from "../../store/actions/binatang_actions";
import {Table} from 'react-bootstrap';
import Loader from '../../utils/loader';

// const useSortableData = (items, config = null) => {
//     const [sortConfig, setSortConfig] = useState(config);

//     const sortedItems = useMemo(()=>{
//         let sortableItems = [...items];
//         if(sortConfig !== null){
//             sortableItems.sort((a,b)=>{
//                 if(a[sortConfig.key] < b[sortConfig.key]){
//                     return sortConfig.direction === 'ascending' ? -1 : 1;
//                 }
//                 if(a[sortConfig.key] > b[sortConfig.key]){
//                     return sortConfig.direction === 'ascending' ? 1 : -1;
//                 }
//                 return 0;
//             });
//         }
//         return sortableItems;
//     }, [items,sortConfig]);
    
//     const requestSort = (key) => {
//         let direction = 'ascending';
//         if(
//             sortConfig &&
//             sortConfig.key === key &&
//             sortConfig.direction === 'ascending'
//         ){
//             direction = 'descending';
//         }
//         setSortConfig({key,direction});
//     };
//     return {items: sortedItems, requestSort, sortConfig};
// }

const BinatangTable = ({handleShow, editBinatang}) => {
    const binatang = useSelector(state => state.binatang);
    const dispatch = useDispatch();
    // const {items, requestSort, sortConfig} = useSortableData(binatang.binatang);
    // const getClassNamesFor = (name) => {
    //     if(!sortConfig){
    //         return;
    //     }
    //     return sortConfig.key === name ? sortConfig.direction : undefined;
    // }

    useEffect(()=>{
        dispatch(getBinatang())
    },[dispatch])

    

    return (
        <div className="table_container">
            <div className="binatang_table">
                <Table responsive="sm" bordered hover>
                    <thead>
                        <tr>
                            <th>
                                {/* <button
                                    type="button"
                                    onClick={()=>requestSort('name')}
                                    className={getClassNamesFor('name')}
                                > */}
                                Name
                                {/* </button>v */}
                            </th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            binatang && binatang.binatang ?
                                binatang.binatang.map((item)=>(
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td className="action_btn status_btn">
                                            {item.status.toString()}
                                        </td>
                                        <td className="action_btn remove_btn"
                                            onClick={()=>handleShow(item.id)}
                                        >
                                            Remove
                                        </td>
                                        <td className="action_btn edit_btn"
                                            onClick={()=>editBinatang(item.id)}
                                        >
                                            Edit
                                        </td>
                                    </tr>
                                ))
                        :
                            <Loader/>
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default BinatangTable;