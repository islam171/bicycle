import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addCart} from "../store/cartSlice";
import Rating from "../components/rating";
import MenuBar from "../components/MenuBar";
import {useState} from "react";
import SliderIamgeBicycle from "../components/Slider/SliderImageBicycle/SliderImageBicycle";

const SinglePage = () => {

    const {id} = useParams()

    const {bicycles} = useSelector((state) => state.bicycle)
    const {categories} = useSelector((state) => state.category)
    const {materials} = useSelector((state) => state.material)
    let bicycle = bicycles.filter(bike => bike._id === id)[0]

    const category = bicycle.categoryId ? categories.filter(cat => cat._id === bicycle.categoryId)[0] : null
    const material = bicycle.frameMaterialId ? materials.filter(mat => mat._id === bicycle.frameMaterialId)[0] : null

    const {token} = useSelector(state => state.user)
    const dispatch = useDispatch()


    const [viewImg, setViewImg] = useState(0)

    if(!bicycle){
        return <h1>Нет такого товара</h1>
    }

    return (
        <div className={"max-w-5xl m-auto"}>
            <div className={"flex gap-4 opacity-40 mb-10"}>
                <div>Главная</div>
                -
                <div>Каталог</div>
            </div>
            <div className={"flex gap-5 max-md:flex-col"}>
                <div className={"flex flex-col gap-5 sticky top-0 max-md:relative"} style={{flex: '1 1 50%'}}>
                    <div className={"w-full bg-blue-100 relative flex items-center"} style={{height: "464px"}}>
                        <img src={`http://localhost:3001${bicycle.image[viewImg]}`} alt="" className={"w-full"}/>
                        <div
                            className={"w-8 h-8 bg-white rounded-full absolute top-4 right-4 flex items-center justify-center"}>
                            <SignalCellularAltOutlinedIcon className={"-translate-x-0.5"}/>
                        </div>
                    </div>
                    <div className={"flex gap-5"}>
                        {/*{bicycle.image.map((img) => <>*/}
                        {/*    <div className={"w-20 h-20 bg-blue-100 flex items-center"}>*/}
                        {/*        <img src={`http://localhost:3001${img}`} alt="image" className={"w-full"}/>*/}
                        {/*    </div>*/}
                        {/*</>)}*/}
                        <SliderIamgeBicycle items={bicycle.image} setViewImg={setViewImg}/>
                    </div>
                </div>
                <div className={"flex flex-col overflow-y-auto"} style={{flex: '1 1 50%'}}>
                    <Rating/>
                    <div className={"text-2xl"}>
                        Название вашего товара {bicycle.name}
                    </div>
                    <div className={"text-3xl font-semibold my-3"}>{bicycle.price} тг</div>
                    <div className={"flex flex-col"} style={{flex: '1 1 50%'}}>
                        <div className={"flex my-5"}>
                            <div onClick={() => dispatch(addCart({token, bike: bicycle}))}
                                className={"bg-blue-950 flex-auto px-5 py-4 text-white text-2xl text-center cursor-pointer"}>Корзина
                            </div>
                            <div className={"flex-auto"}></div>
                            <div className={"p-5 bg-slate-200"}><FavoriteBorderIcon/></div>
                        </div>
                        <div>
                            <MenuBar title={"Характиристики"}>
                                <div className={"flex justify-between"}><div>Тип</div><div>{category && category.name}</div></div>
                                <div className={"flex justify-between"}><div>Модельный год</div><div>{bicycle.modelYear}</div></div>
                                <div className={"flex justify-between"}><div>Диаметр колес</div><div>{bicycle.WheelDiameter}</div></div>
                                <div className={"flex justify-between"}><div>Цвет</div><div>{bicycle.color}</div></div>
                            </MenuBar>
                            <MenuBar title={"Конструкция"}>
                                <div className={"flex justify-between"}><div>Размеры рамы</div><div>{bicycle.frameSize}</div></div>
                                <div className={"flex justify-between"}><div>Материал рамы</div><div>{material && material.name}</div></div>
                            </MenuBar>
                            <MenuBar title={"Трансмиссия"}>
                                <div className={"flex justify-between"}><div>Количество скоростей</div><div>{bicycle.SpeedsNumber}</div></div>
                            </MenuBar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SinglePage