import { Box, Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import itemsContext from '../store/items-context';
import { v4 as uuidv4 } from 'uuid';
import uploadToFreeImageHost from '../api/freeimage';

const AdminForm = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });

    const { addNewItem } = useContext(itemsContext);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === '' || formData.description === '' || formData.price === '' || formData.image === '') {
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
    };

    return (
        <div>
            <h2>AdminForm</h2>
            <Box
                component="form"
                sx={{ alignItems: "center", width: "20rem", backgroundColor: "#f5f5f5", padding: 2, '& .MuiTextField-root': { m: 1, width: '25ch' } }}
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

                    <TextField
                        required
                        id="image"
                        label="Image URL"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        helperText="Paste URL here or upload below"
                    />

                    {/* <input
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={async (e) => {
                            if (e.target.files && e.target.files[0]) {
                                try {
                                    const uploadedUrl = await uploadToFreeImageHost(e.target.files[0]);
                                    console.log("Uploaded Image URL:", uploadedUrl);
                                    setFormData(prev => ({
                                        ...prev,
                                        image: uploadedUrl
                                    }));
                                } catch (error) {
                                    console.error("Upload failed in component:", error);
                                    // Alert is handled in uploadToFreeImageHost usually, but good to be safe
                                }
                            }
                        }}
                    /> */}

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