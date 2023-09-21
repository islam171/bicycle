import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import Slider2 from "../components/Slider/Slider2";
import {useParams} from "react-router-dom";
import {useRef} from "react";
import useEventListener from "@use-it/event-listener";
import {useSelector} from "react-redux";

const SinglePage = () => {

    const {id} = useParams()

    const sideBlock = useRef([])
    const sideBlockHandler = (i) => {
        if (sideBlock.current[i].childNodes[1].classList.contains('hidden')) {
            sideBlock.current[i].childNodes[1].classList.remove('hidden')
            sideBlock.current[i].childNodes[1].classList.add('flex')
            sideBlock.current[i].childNodes[0].childNodes[1].classList.add('rotate-180')
        } else {
            sideBlock.current[i].childNodes[1].classList.add('hidden')
            sideBlock.current[i].childNodes[1].classList.remove('flex')
            sideBlock.current[i].childNodes[0].childNodes[1].classList.remove('rotate-180')
        }
    }
    const handleClick = (e) => {
        for (let i = 0; i < sideBlock.current.length; i++) {
            let element = sideBlock.current[i];
            if (element && element.contains(e.target)) {
                sideBlockHandler(i)
            }
        }
    };

    useEventListener("click", handleClick, document);

    const {bicycles, status, error} = useSelector((state) => state.bicycle)

    return (
        <div className={"max-w-5xl m-auto"}>
            <div className={"flex gap-4 opacity-40 mb-10"}>
                <div>Главная</div>
                -
                <div>Каталог</div>
            </div>
            <div className={"flex gap-5"}>
                <div className={"flex flex-col gap-5 sticky top-0"} style={{flex: '1 1 50%'}}>
                    <div className={"w-full bg-blue-100 relative"} style={{height: "464px"}}>
                        <div
                            className={"w-8 h-8 bg-white rounded-full absolute top-4 right-4 flex items-center justify-center"}>
                            <SignalCellularAltOutlinedIcon className={"-translate-x-0.5"}/>
                        </div>
                    </div>
                    <div className={"flex justify-between"}>
                        <div className={"w-20 h-20 bg-blue-100"}></div>
                        <div className={"w-20 h-20 bg-blue-100"}></div>
                        <div className={"w-20 h-20 bg-blue-100"}></div>
                        <div className={"w-20 h-20 bg-blue-100"}></div>
                        <div className={"w-20 h-20 bg-blue-100"}></div>
                    </div>
                </div>
                <div className={"flex flex-col overflow-y-auto"} style={{flex: '1 1 50%'}}>
                    <div className={"flex justify-between mb-4"}>
                        <div className={"flex"}>
                            <div>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                            </div>
                            (0)
                        </div>
                        <div>
                            арт. 4003
                        </div>
                    </div>
                    <div className={"text-2xl"}>
                        Название вашего товара {id}
                    </div>
                    <div className={"text-3xl font-semibold my-3"}>16 590</div>
                    <div className={"flex flex-col"} style={{flex: '1 1 50%'}}>
                        <div className={"flex my-5 gap-10"}>
                            <div
                                className={"bg-blue-950 flex-auto px-5 py-4 text-white text-2xl text-center cursor-pointer"}>Корзина
                            </div>
                            <div className={"p-5 bg-slate-200"}><FavoriteBorderIcon/></div>
                        </div>
                        <div className={"text-xl"}>Демонстрационный пример товара</div>
                        <div>
                            <div className={"py-5 border-b-2 relative"} ref={(el) => {
                                sideBlock.current[0] = el
                            }}>
                                <div className={"relative text-lg"}>
                                    Категория 1
                                    <div className={"absolute top-1/2 right-5 w-2 h-2 -translate-y-1/2"}>
                                        <span
                                            className={"border-b-2 border-r-2  w-full h-full absolute border-black rotate-45"}></span>
                                    </div>
                                </div>
                                <div className={"px-2 pt-2 text-xs hidden flex-col gap-3 transition-all delay-500"}>
                                    <div>Подкатегория 1</div>
                                    <div>Подкатегория 2</div>
                                    <div>Подкатегория 3</div>
                                </div>
                            </div>
                            <div className={"py-5 border-b-2 relative"} ref={(el) => {
                                sideBlock.current[1] = el
                            }}>
                                <div className={"relative text-lg"}>
                                    Категория 1
                                    <div className={"absolute top-1/2 right-5 w-2 h-2 -translate-y-1/2"}>
                                        <span
                                            className={"border-b-2 border-r-2  w-full h-full absolute border-black rotate-45"}></span>
                                    </div>
                                </div>
                                <div className={"px-2 pt-2 text-xs hidden flex-col gap-3 transition-all delay-500"}>
                                    <div>Подкатегория 1</div>
                                    <div>Подкатегория 2</div>
                                    <div>Подкатегория 3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"max-w-3xl m-auto mt-10"}>
                <Slider2 items={bicycles} status={status} error={error} width={768}/>
            </div>
        </div>
    )
}
export default SinglePage