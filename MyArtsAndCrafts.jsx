import { FaArrowDown } from "react-icons/fa";
import MyItemCard from "../../components/MyItemCard/MyItemCard";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import MyDynamicTitle from "../../../MyDynamicTitle";
import { HashLoader } from "react-spinners";

const MyArtsAndCrafts = () => {
    MyDynamicTitle('My Items')
    const loadedItems = useLoaderData()
    const [items, setItems] = useState(loadedItems); 

    const handleAll = () => {
        setItems(loadedItems);
    };

    const handleYes = () => {

        const filteredItems = loadedItems.filter(item => item.customization === 'Yes');
        setItems(filteredItems);
    };

    const handleNo = () => {

        const filteredItems = loadedItems.filter(item => item.customization === 'No');
        setItems(filteredItems);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center">My Arts&Crafts List</h2>
            <div className="border-t-2 w-2/6 border-black mx-auto mb-4"></div>
            <div className="flex justify-center mb-4">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-teal-200">Show <FaArrowDown></FaArrowDown></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-teal-50 rounded-box w-52">
                        <li onClick={handleAll} className="font-semibold"><a>All</a></li>
                        <li onClick={handleYes} className="font-semibold"><a>Customization: Yes</a></li>
                        <li onClick={handleNo} className="font-semibold"><a>Customization: No</a></li>
                    </ul>
                </div>
            </div>
            { loading ? (<HashLoader className="mx-auto my-20" color={'#E11D48'} loading={loading} size={50}></HashLoader>) : (<div className="flex flex-col gap-5">
                {items.length === 0 ? <h1 className="text-4xl font-bold text-center text-red-600 mt-4">Please add some items</h1>: <></>}
                {
                    items.map(item => <MyItemCard key={item._id} item={item} items={items} setItems={setItems}></MyItemCard>)
                }
            </div>)}
        </div>
    );
};

export default MyArtsAndCrafts;