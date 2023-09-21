import axios from "axios";
import {useForm} from "react-hook-form";
import BicycleMaking from "../components/Bicycle/BicycleMaking";
import MenuBar from "../components/MenuBar";

const Making = () => {

    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            name: '', phone: '', address: '', comment: '', email: ''
        }, mode: 'onChange'
    })

    const cartToOrder = [
        {"_id": "64da598fd9fb4db9166662f3", "count": 2},
        {"_id": "64e090fb0a06eff0ea1e69f5", "count": 3}
    ]

    const onNewOrder = (values) => {
        values.bicycles = cartToOrder
        axios.post('http://localhost:3001/api/v1/bicycle', values, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRhNGU4MzE1ODI2YjVjYjYwZGM4NzQiLCJpYXQiOjE2OTIwMjg1NDcsImV4cCI6MTY5NDYyMDU0N30.ps60IaHYICc5rqVORf6eNXfFIW23L9Kog_jpiBro59Y'
            }
        })
    }


    return <>
        <div className={"flex py-5 justify-between max-md:flex-col"}>
            <div className={"px-2"} style={{flex: "1 0 50%"}}>
                <h1 className={"text-2xl"}>Оформление заказа</h1>
                <div className={"md:hidden border my-2"}>
                    <MenuBar>
                        <div className={"px-2"} >
                            <div className={"flex flex-col"}>
                                <BicycleMaking name={"name"} price={300} count={1}/>
                                <BicycleMaking name={"name"} price={300} count={2}/>
                            </div>
                            <div className={"border-t-2 border-b-2 py-5"}>
                                <div className={"flex justify-between"}>
                                    <div>Сумма по товарам</div>
                                    <div className={"text-xl font-semibold"}>7 240 ₽</div>
                                </div>
                                <div className={"flex justify-between"}>
                                    <div>Стоимость доставки</div>
                                    <div className={"text-xl font-semibold"}>0 ₽</div>
                                </div>
                            </div>
                            <div className={"flex justify-between py-3"}>
                                <div className={"text-xl font-light"}>Итого:</div>
                                <div className={"text-xl font-semibold"}>0 ₽</div>
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
                        <h2 className={"text-lg"}>Доставка</h2>
                        <label htmlFor="address">Адрес</label>
                        <select
                            name="address"
                            id=""
                            {...register('addressId', {required: "Укажите адресс"})}
                            className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}>
                            <option value="address 1">address 1</option>
                            <option value="address 2">address 2</option>
                            <option value="address 3">address 3</option>
                        </select><br/>
                        <label htmlFor="comment">Комментарии к заказу</label>
                        <textarea
                            name={"comment"}
                            {...register('comment')}
                            className={"border-2 border-gray-800 transition delay-50 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
                        /><br/>
                        <h2 className={"text-lg"}>Покупатель</h2>
                        <label htmlFor="email">Email</label>
                        <input
                            type={"text"}
                            name={"email"}
                            {...register('email', {required: "Укажите почту"})}
                            className={"border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300"}
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
                    <BicycleMaking name={"name"} price={300} count={1}/>
                    <BicycleMaking name={"name"} price={300} count={2}/>
                </div>
                <div className={"border-t-2 border-b-2 py-5"}>
                    <div className={"flex justify-between"}>
                        <div>Сумма по товарам</div>
                        <div className={"text-xl font-semibold"}>7 240 ₽</div>
                    </div>
                    <div className={"flex justify-between"}>
                        <div>Стоимость доставки</div>
                        <div className={"text-xl font-semibold"}>0 ₽</div>
                    </div>
                </div>
                <div className={"flex justify-between py-3"}>
                    <div className={"text-xl font-light"}>Итого:</div>
                    <div className={"text-xl font-semibold"}>0 ₽</div>
                </div>
            </div>
        </div>
    </>
}

export default Making