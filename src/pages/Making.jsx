import {useForm} from "react-hook-form";
import BicycleMaking from "../components/Bicycle/BicycleMaking";
import MenuBar from "../components/MenuBar";
import {useDispatch, useSelector} from "react-redux";
import {addOrder} from "../store/orderSlice";

const Making = () => {

    const dispatch = useDispatch()
    const {token} = useSelector(state => state.user)
    const {addresses} = useSelector(state => state.order)

    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: '', phone: '', addressId: '', comment: '', email: ''
        }, mode: 'onChange'
    })

    const {makingCart, totalPrice} = useSelector(state => state.making)

    const onNewOrder = (values) => {
        for(const item of makingCart){
            values.bicycles = values.bicycles ? [...values.bicycles, {_id: item.cart.bicycle._id, count: item.count}]: [{_id: item.cart.bicycle._id, count: item.count}]
        }
        dispatch(addOrder({token, data: values}))
    }

    return <>
        <div className={"flex py-5 justify-between max-md:flex-col"}>
            <div className={"px-2"} style={{flex: "1 0 50%"}}>
                <h1 className={"text-2xl"}>Оформление заказа</h1>
                <div className={"md:hidden border my-2"}>
                    <MenuBar>
                        <div className={"px-2"}>
                            <div className={"flex flex-col"}>
                                {makingCart.map(item => <BicycleMaking key={item.cart._id} item={item}/>)}
                            </div>
                            <div className={"flex justify-between py-3"}>
                                <div className={"text-xl font-light"}>Итого:</div>
                                <div className={"text-xl font-semibold"}>{totalPrice} ₽</div>
                            </div>
                        </div>
                    </MenuBar>
                </div>
                <div className={"mt-10"}>
                    <form action="" onSubmit={handleSubmit(onNewOrder)}>
                        <h2 className={"text-lg"}>Контактные данные</h2>
                        <label htmlFor="name">Контактное лицо</label>
                        <input
                            type={"text"}
                            name={"name"}
                            {...register('name', {required: "Укажите имя продукта"})}
                            className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
                        /><br/>
                        <label htmlFor="phone">Контактный телефон</label>
                        <input
                            type={"text"}
                            name={"phone"}
                            {...register('phone', {required: "Укажите телефон"})}
                            className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
                        /><br/>
                        <label htmlFor="email">Email</label>
                        <input
                            type={"text"}
                            name={"email"}
                            {...register('email', {required: "Укажите почту"})}
                            className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
                        /><br/>
                        <h2 className={"text-lg"}>Доставка</h2>
                        <label htmlFor="addressId">Адрес</label>
                        <select
                            name="addressId"
                            id=""
                            {...register('addressId', {required: "Укажите адресс"})}
                            className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}>
                            {addresses && addresses.map((address) => (
                                <option key={address._id} value={`${address._id}`}>{address.country} {address.city} {address.street}</option>
                            ))}
                        </select><br/>
                        <label htmlFor="comment">Комментарии к заказу</label>
                        <textarea
                            name={"comment"}
                            {...register('comment')}
                            className={"border-2 border-gray-800 transition delay-50 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
                        /><br/>

                        <button
                            type="submit"
                            className={"p-2 px-4 text-white text-lg mt-5 w-full"}
                            style={{backgroundColor: '#1b2738'}}>Подтвердить заказ
                        </button>
                        <br/>
                    </form>
                </div>
            </div>
            <div className={"px-2 max-md:hidden"} style={{flex: "1 0 50%"}}>
                <div className={"flex flex-col"}>
                    {makingCart.map(item => <BicycleMaking key={item.cart._id} item={item}/>)}
                </div>
                <div className={"border-t-2 flex justify-between py-3"}>
                    <div className={"text-xl font-light"}>Итого:</div>
                    <div className={"text-xl font-semibold"}>{totalPrice} ₽</div>
                </div>
            </div>
        </div>
    </>
}

export default Making