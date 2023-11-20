import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../store/userSlice";

const RegisterForm = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register, handleSubmit} = useForm({
        defaultValues: {
            username: '', password: ''
        }, mode: 'onChange'
    })

    const dispatch = useDispatch()
    const {error, message} = useSelector(state => state.user)

    const onSubmit = (values) => {
        dispatch(registerUser(values))
    }

    return (<div>
            {error && <div>{error.message}</div>}
            <>{message}</>
            <div className={"my-5 text-2xl font-medium"}>Регестрация</div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className={"max-w-xl"}>
                <label htmlFor="username">Логмн</label>
                <input
                    type={"text"} name={"username"}
                    {...register('username', {required: "Укажите имя продукта"})}
                    className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
                /><br/>
                <label htmlFor="password">Пароль</label>
                <input
                    type={"password"}
                    name={"password"}
                    {...register('password', {required: "Укажите цену"})}
                    className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
                /><br/>
                <button
                    type="submit"
                    className={"p-2 px-4 text-white text-xl mt-2"}
                    style={{backgroundColor: '#1b2738'}}>Войти
                </button>
                <br/>
            </form>
            <div className={"mt-5 delay-500 transition hover:underline "}>
                <Link to={"/auth/login"}>Авторизоватся</Link>
            </div>
        </div>
    )
}

export default RegisterForm