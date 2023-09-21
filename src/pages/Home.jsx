import Slider from "../components/Slider/Slider";
import Bicycle from "../components/Bicycle";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {

    const array = [
        {img: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'},
        {img: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200'},
        {img: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200'},
        {img: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200'},
        {img: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200'},
    ]

    const [size, setSize] = useState({});
    const slider = useRef();

    const resizeHandler = () => {
        const {clientHeight, clientWidth} = slider.current || {};
        setSize({clientHeight, clientWidth});
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, []);

    const [bicycle, setBicycle] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/v1/bicycle').then((res) => setBicycle(res.data))
    }, [])

    return <>
        <div className={"mt-5"} ref={slider}>
            <Slider items={array} width={size.clientWidth}/>
            <div className={"mx-auto"} style={{maxWidth: '764px'}}>
                <nav className={"flex mb-5 gap-5 text-xl"}>
                    <div>Акции</div>
                    <div>Популярное</div>
                </nav>
                <div className={"grid grid-cols-4 gap-5"} >
                    {bicycle && (
                        bicycle.map((bike) =><Bicycle key={bike._id} bike={bike}/> )
                    )}
                </div>
                <div className={"my-5 flex mx-auto justify-center gap-2 items-center cursor-pointer"}>
                    <Link to={"Katalog"} className={"text-xl"}>Смотреть все</Link>
                    <div className={"w-2 h-2 border-b-black border-b border-r border-r-black -rotate-45 translate-y-1"}></div>
                </div>
            </div>
        </div>
    </>
}
export default Home