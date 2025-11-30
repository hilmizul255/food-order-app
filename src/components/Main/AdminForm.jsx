import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState, useEffect, useContext } from "react";
import itemsContext from "../../store/items-context";
import itemsApi from "../../api/items";

function AdminForm(props) {
    const [itemList, setItemList] = useState([]);
    const itemsCtx = useContext(itemsContext);

    //READ Contact
    const readItems = async () => {
        try {
            const response = await itemsApi.get("/");
            console.log(response);
            // itemsCtx.addNewItem(response.data);
            return response;
        } catch (error) {
            console.error("Error reading items:", error);
        }
    };



    // const [itemList, setItemList] = useState(() => {
    //     const saved = localStorage.getItem("itemList");
    //     if (saved) {
    //         try {
    //             const parsed = JSON.parse(saved);
    //             if (Array.isArray(parsed)) {
    //                 return { name: "", description: "", price: "" };
    //             }
    //             return parsed;
    //         } catch (error) {
    //             return { name: "", description: "", price: "" };
    //         }
    //     }
    //     return { name: "", description: "", price: "" };
    // });

    function handleOnchange(event) {
        const { name, value } = event.target;
        setItemList((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    }

    // useEffect(() => {
    //     localStorage.setItem("itemList", JSON.stringify(itemList));
    // }, [itemList]);

    useEffect(() => {
        const getAllItems = async () => {
            const allItems = await readItems();
            console.log(allItems.data);
            // itemsCtx.addNewItem(response.data);
            if (allItems.data) {
                itemsCtx.addNewItem(allItems.data);
            }
        };
        getAllItems();
    }, []);

    return (
        <>
            <h1>AdminForm</h1>
            <Box
                component="form"
                sx={{ alignItems: "center", width: "20rem", backgroundColor: "#f5f5f5", padding: 2, '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        value={itemList.name}
                        onChange={handleOnchange}
                        name="name"
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Description"
                        value={itemList.description}
                        onChange={handleOnchange}
                        name="description"
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Price"
                        value={itemList.price}
                        onChange={handleOnchange}
                        name="price"
                    />

                    <input
                        type="file"
                        accept="image/*"
                    // onChange={async (e) => {
                    //     const uploadedUrl = await uploadImage(e.target.files[0]);
                    //     console.log("Uploaded Image URL:", uploadedUrl);
                    // }}
                    />
                    <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Button variant="contained" color="primary" style={{ flex: 1 }} onClick={() => {
                            itemsCtx.addNewItem({ ...itemList, id: Date.now() });
                            props.hideAddItemForm();
                        }}>Add</Button>
                        <Button variant="contained" color="error" style={{ flex: 1 }} onClick={props.hideAddItemForm}>Close</Button>
                    </div>

                </div>

            </Box>
        </>
    );
}

export default AdminForm;