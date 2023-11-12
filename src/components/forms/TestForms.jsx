import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";
import {useState} from "react";
import MenuBar from '../MenuBar'
import {addBicycles} from "../../store/bicycleSlice";
import {useParams} from "react-router-dom";

const TestForms = () => {

    const {categories, colors, materials, packages} = useSelector((state) => state.filterList)
    const [material, setMaterial] = useState('')
    const [color, setColor] = useState('')
    const [packag, setPackag] = useState([])
    const [category, setCategory] = useState([])

    const setPackageState = (value) => {
        if (!packag.includes(value)) {
            setPackag(prev => [...prev, value])
        }else{
            setPackag(prev => prev.filter(n => {return n !== value}))
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register, handleSubmit, setValue} = useForm({
        defaultValues: {
            name: '',
            price: 0
        }, mode: 'onChange'
    })



    const onSubmit = (values) => {
        console.log(values)
    }


    return (<div>
        <div className={"my-5 text-2xl font-medium"}>Тестовая форма</div>
        <form action="" onSubmit={handleSubmit(onSubmit)} className={"max-w-xl"}>
            <label htmlFor="name">Названия</label>
            <input
                type={"text"} name={"name"}
                {...register('name', {required: "Укажите имя продукта"})}
                className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
            /><br/>
            <label htmlFor="price">Цена</label>
            <input
                type={"number"}
                name={"price"}
                {...register('price', {required: "Укажите цену"})}
                className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
            /><br/>
            <label htmlFor="description">Описание</label>
            <input
                type={"text"}
                name={"description"}
                {...register('description', {required: "Укажите цену"})}
                className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
            /><br/>


            <div className={"mb-5 border-2 border-gray-800 transition delay-50"}>
                <MenuBar title={"Тип"}>
                    <div className={"flex flex-col gap-5"}>
                        {categories && categories.map(cat => (
                            <div key={cat._id}
                                 onClick={() => {
                                     setValue('categoryId', cat._id)
                                     setCategory(cat._id)
                                 }}
                                 className={"flex text-base items-center gap-2"}>
                        <span className={"w-6 h-6 bg-gray-300 relative"}>
                            {cat._id === category ? (<CheckIcon className={"absolute top-0 right-0"}/>) : ''}
                        </span>
                                {cat.name}
                            </div>
                        ))}
                    </div>
                </MenuBar>
            </div>
            <div className={"mb-5 border-2 border-gray-800 transition delay-50"}>
                <MenuBar title={"Комплектации"}>
                    <div className={"flex flex-col gap-5"}>
                        {packages && packages.map(pack => (
                            <div key={pack._id}
                                 onClick={() => {
                                     setPackageState(pack._id)
                                 }}
                                 className={"flex text-base items-center gap-2"}>
                        <span className={"w-6 h-6 bg-gray-300 relative"}>
                            {packag.includes(pack._id) ? (<CheckIcon className={"absolute top-0 right-0"}/>) : ''}
                        </span>
                                {pack.name}
                            </div>
                        ))}
                    </div>
                </MenuBar>
            </div>
            <div className={"mb-5 border-2 border-gray-800 transition delay-50"}>
                <MenuBar title={"Материал"}>
                    <div className={"flex flex-col gap-5"}>
                        {materials && materials.map(mat => (
                            <div key={mat._id}
                                 onClick={() => {
                                     setValue('frameMaterialId', mat._id)
                                     setMaterial(mat._id)
                                 }}
                                 className={"flex text-base items-center gap-2"}>
                        <span className={"w-6 h-6 bg-gray-300 relative"}>
                            {mat._id === material ? (<CheckIcon className={"absolute top-0 right-0"}/>) : ''}
                        </span>
                                {mat.name}
                            </div>
                        ))}
                    </div>
                </MenuBar>
            </div>
            <div className={"mb-5 border-2 border-gray-800 transition delay-50"}>
                <MenuBar title={"Цвет"}>
                    <div className={"flex flex-col gap-5"}>
                        {colors && colors.map(col => (
                            <div key={col._id}
                                 onClick={() => {
                                     setValue('colorId', col._id)
                                     setColor(col._id)
                                 }}
                                 className={"flex text-base items-center gap-2"}>
                        <span className={"w-6 h-6 bg-gray-300 relative"}>
                            {col._id === color ? (<CheckIcon className={"absolute top-0 right-0"}/>) : ''}
                        </span>
                                {col.name}
                            </div>
                        ))}
                    </div>
                </MenuBar>
            </div>

            <label htmlFor="image">Изображения</label>
            <input
                type={"file"}
                {...register('image', {required: "Укажите цену"})}
                className={"transition delay-50 h-12 w-full mb-5 py-1 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
            /><br/>

            <label htmlFor="modelYear">Год выпуска</label>
            <input
                type={"number"}
                name={"modelYear"}
                {...register('modelYear', {required: "Укажите цену"})}
                className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
            /><br/>
            <label htmlFor="frameSize">Размер рамы</label>
            <input
                type={"number"}
                name={"frameSize"}
                {...register('frameSize', {required: "Укажите цену"})}
                className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
            /><br/>
            <label htmlFor="SpeedsNumber">Количество передач</label>
            <input
                type={"number"}
                name={"SpeedsNumber"}
                {...register('SpeedsNumber', {required: "Укажите цену"})}
                className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
            /><br/>
            <label htmlFor="WheelDiameter">Диаметр колес</label>
            <input
                type={"number"}
                name={"WheelDiameter"}
                {...register('WheelDiameter')}
                className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
            /><br/>
            <label htmlFor="folding">Сидение</label>
            <input
                type={"checkbox"}
                name={"folding"}
                {...register('folding')}
                className={"border-2 border-gray-800 transition delay-50 m-3 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
            /><br/>
            <label htmlFor="Seat">Складной</label>
            <input
                type={"checkbox"}
                name={"Seat"}
                {...register('Seat')}
                className={"border-2 border-gray-800 transition delay-50 m-3 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
            /><br/>

            <input type="submit" />
        </form>
    </div>)
}


export default TestForms