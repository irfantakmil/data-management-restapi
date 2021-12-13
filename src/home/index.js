import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    Button,
    Modal,
    ButtonToolbar,
    ButtonGroup,
    FormControl
} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import BinatangTable from "../home/table";
import {deleteBinatang, getBinatang} from '../store/actions/binatang_actions';




const Home = (props) => {
    const notifications = useSelector(state => state.notifications);
    const binatang = useSelector(state => state.binatang);
    let binatangData = binatang.binatang;
    const dispatch = useDispatch();
    const [removeAlert, setRemoveAlert] = useState(false);
    const [toRemove, setToRemove] = useState(null);
    const handleClose = () => setRemoveAlert(false);

    const handleShow =(id=null) => {
        setToRemove(id);
        setRemoveAlert(true);
    }

    const handleDelete = () => {
        dispatch(deleteBinatang(toRemove));
    }

    useEffect(()=>{
        handleClose();
        if(notifications){
            dispatch(getBinatang());
        }
    },[dispatch, notifications]);

    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];
        let filteredData = [];
        console.log(value);
        result = binatangData.filter((data)=>{
            return data.name.search(value) !== -1;
        });
        filteredData = result;
    }

    const editBinatang = (id) => {
        props.history.push(`/edit-binatang/:${id}`)
    }

    return (
        <>
            <div className="add_btn">
                <ButtonToolbar>
                    <ButtonGroup>
                        <LinkContainer to="/add-binatang">
                            <Button variant="secondary">Add Binatang</Button>
                        </LinkContainer>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
            <div className="search_bar">
                <form>
                    <FormControl
                        type="text"
                        placeholder="Search..."
                        onChange={(e)=>handleSearch(e)}
                    />
                </form>
            </div>
            <div>
                <BinatangTable
                    handleShow={(id)=>handleShow(id)}
                    editBinatang={(id)=>editBinatang(id)}
                />
            </div>
            <Modal show={removeAlert} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    There is no going back
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={()=>handleDelete()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Home