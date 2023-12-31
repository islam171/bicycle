import {useForm} from "react-hook-form";
import {login} from "../../store/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const LoginForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {error} = useSelector(state => state.user)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register, handleSubmit} = useForm({
        defaultValues: {
            username: '', password: ''
        }, mode: 'onChange'
    })

    const onSubmit = (values) => {
        dispatch(login(values))
    }
    const {isAuth} = useSelector(state => state.user)

    useEffect(() => {
        if(isAuth){
            navigate("/profile")
        }
    }, [isAuth, navigate])

    return (<div>
            {error && <div>{error.message}</div>}
            <div className={"my-5 text-2xl font-medium"}>Вход в кабинет покупателя</div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className={"max-w-xl"}>
                <label htmlFor="username">Логин</label>
                <input
                    type={"text"} name={"username"}
                    {...register('username', {required: "Укажите имя продукта"})}
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
                    className={"p-2 px-4 text-white text-xl mt-2"}
                    style={{backgroundColor: '#1b2738'}}>Войти
                </button>
                <br/>
            </form>
            <div className={"mt-5 delay-500 transition hover:underline "}>
                <Link to={"/auth"}>Зарегистрироватся</Link>
            </div>
        </div>
    )
}

export default LoginForm