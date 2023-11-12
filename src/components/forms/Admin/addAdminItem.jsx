import {useForm} from "react-hook-form";
import {addCategory} from "../../../store/array/categorySlice";
import {useDispatch, useSelector} from "react-redux";
import {addMaterial} from "../../../store/array/mateiralSlice";
import {addColor} from "../../../store/array/colorSlice";
import {addPackage} from "../../../store/array/packageSlice";

const AddAdminItem = ({func}) => {

    const {token} = useSelector(state => state.user)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: ''
        }, mode: 'onSubmit'
    })
    const dispatch = useDispatch()
    const onSubmit = (values) => {
        // dispatch(addCategory({values, token}))
        func === "category" && dispatch(addCategory({values, token}))
        func === "material" && dispatch(addMaterial({values, token}))
        func === "color" && dispatch(addColor({values, token}))
        func === "package" && dispatch(addPackage({values, token}))
    }

    return (<div>
        <div className={"my-5 text-2xl font-medium"}>Добовление
            {
                func === "category" && <> Категории</>
            }{
                func === "material" && <> Материала</>
            }{
                func === "color" && <> Цвета</>
            }{
                func === "package" && <> Комплетации</>
            }
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={"max-w-xl"}>
            <label htmlFor="name">Названия</label>
            <input
                type={"text"} name={"name"}
                {...register('name', {required: "Укажите имя"})}
                className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-1 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
            /><br/>
            <input
                type="submit"
                className={"p-2 px-4 text-white text-xl mt-5 "}
                style={{backgroundColor: '#1b2738'}}/>
            <br/>
        </form>
    </div>)
}

export default AddAdminItem