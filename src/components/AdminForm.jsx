import { Box, Button, TextField } from '@mui/material';
import { useContext, useState, useRef } from 'react';
import itemsContext from '../store/items-context';
import { v4 as uuidv4 } from 'uuid';
import freeImage from '../api/freeImage';

const AdminForm = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });

    const fileInputRef = useRef(null);

    const { addNewItem } = useContext(itemsContext);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === '' || formData.description === '' || formData.price === '' || fileInputRef.current.value === '') {
            alert("Please fill all the fields");
            return;
        }

        addNewItem(formData, uuidv4());
        setFormData({
            name: '',
            price: '',
            description: '',
            image: ''
        });
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Optional: show temporary preview
        const preview = URL.createObjectURL(file);
        setFormData(prev => ({ ...prev, image: preview }));

        // Upload to FreeImage
        const uploadedUrl = await freeImage(file);
        setFormData(prev => ({ ...prev, image: uploadedUrl }));
        console.log("Final image URL:", uploadedUrl);
    };


    return (
        <div>
            <h2>AdminForm</h2>
            <Box
                component="form"
                sx={{ alignItems: "center", width: "20rem", backgroundColor: "#ffffffff", padding: 2, '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                    <TextField
                        required
                        id="name"
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <TextField
                        required
                        id="description"
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <TextField
                        required
                        id="price"
                        label="Price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                    />

                    <input type="file" accept="image/png, image/jpeg, image/gif" onChange={handleImageUpload} ref={fileInputRef} />

                    {/* preview */}
                    {/* {formData.image && (
                        <img
                            src={formData.image}
                            alt="preview"
                            style={{ width: "150px", marginTop: "10px" }}
                        />
                    )} */}

                    <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Button type="submit" variant="contained" color="primary" style={{ flex: 1 }}>Add</Button>
                        <Button variant="contained" color="error" style={{ flex: 1 }} onClick={props.closeAddItemForm}>Close</Button>
                    </div>

                </div>

            </Box>
        </div>
    );
}

export default AdminForm;