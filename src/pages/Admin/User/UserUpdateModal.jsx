import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {updateUser} from "../../../store/userSlice";
import React from "react"

const UserUpdateModal = React.memo( ({closeModal, data, token}) => {

    const dispatch = useDispatch()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register, handleSubmit} = useForm({
        defaultValues: {
            username: data.username,
            password: data.password
        }, mode: 'onSubmit'
    })

    const onSubmit = (values) => {
        dispatch(updateUser({_id:data._id, token, values}))
    }

    return (
        <div className={"p-10 bg-white shadow-amber-400 relative"}>
            <AiOutlineCloseCircle className={"absolute top-2 right-2 cursor-pointer"} onClick={() => closeModal()}/>
            <div className={"my-5 text-2xl font-medium "}>Обновление пользователя
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={"max-w-xl"}>
                <label htmlFor="username">Имя</label>
                <input
                    type={"text"} name={"username"}
                    {...register('username', {required: "Укажите имя"})}
                    className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
                /><br/>
                <label htmlFor="password">Пароль</label>
                <input
                    type={"text"} name={"password"}
                    {...register('password', {required: "Укажите пароль"})}
                    className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
                /><br/>
                <input
                    type="submit"
                    className={"p-2 px-4 text-white text-xl mt-5 "}
                    style={{backgroundColor: '#1b2738'}}/>
                <br/>
            </form>
        </div>)
})

export default UserUpdateModal