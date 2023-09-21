import {useForm} from "react-hook-form";
import axios from "axios";

const LoginForm = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            name: '', password: ''
        }, mode: 'onChange'
    })

    const onSubmit = (values) => {
        axios.post('http://localhost:3001/api/v1/bicycle', values, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRhNGU4MzE1ODI2YjVjYjYwZGM4NzQiLCJpYXQiOjE2OTIwMjg1NDcsImV4cCI6MTY5NDYyMDU0N30.ps60IaHYICc5rqVORf6eNXfFIW23L9Kog_jpiBro59Y'
            }
        })
    }

    return (<div>
            <div className={"my-5 text-2xl font-medium"}>Вход в кабинет покупателя</div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className={"max-w-xl"}>
                <label htmlFor="name">Логин</label>
                <input
                    type={"text"} name={"name"}
                    {...register('name', {required: "Укажите имя продукта"})}
                    className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
                /><br/>
                <label htmlFor="password">Пароль</label>
                <input
                    type={"text"}
                    name={"password"}
                    {...register('password', {required: "Укажите цену"})}
                    className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
                /><br/>
                <button
                    type="submit"
                    className={"p-2 px-4 text-white text-xl mt-5 "}
                    style={{backgroundColor: '#1b2738'}}>Войти
                </button>
                <br/>
            </form>
        </div>
    )
}

export default LoginForm