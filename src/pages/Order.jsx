import {useParams} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Order = () => {

    const {token} = useSelector(state => state.user)
    const {id} = useParams()


    const [order, setOrder] = useState(null)
    const getOrder = async (token, id) => {
        const response = await axios.get(`http://localhost:3001/api/v1/order/${id}`, {headers: {"Authorization": token}})
        setOrder(response.data)
    }

    useEffect(() => {
        getOrder(token, id);
    }, [token, id])


    // return <></>

    return <>
        {order && <div className={"py-5"}>
            <h1 className={"text-2xl"}>Заказ {order && order.order._id}</h1>
            <div className={"my-5 p-3 bg-green-100"}>Спасибо за заказ!</div>
            <div className={"mb-5"}>
                <h2 className={"text-lg py-3"}>Информация о заказе</h2>
                <div className={"border-t-2 border-b-2 py-5 flex flex-col gap-5"}>
                    <div className={"flex gap-5"}>
                        <div className={"w-44 flex items-center"}>Дата оформления</div>
                        <div className={"flex gap-3 items-center"}>{order && order.order._id}</div>
                    </div>
                    <div className={"flex gap-5"}>
                        <div className={"w-44 flex items-center"}>Сумма и статус</div>
                        <div className={"flex gap-3 items-center"}>
                            <div className={"font-semibold"}>{order && order.order.price} ₽</div>
                        </div>
                    </div>
                    <div className={"flex gap-5"}>
                        <div className={"w-44 flex"}>Адрес доставки</div>
                        <div className={"w-96"}>
                            <div className={"flex gap-5 justify-between"}>
                                <div>Страна</div>
                                <div>{order && order.order.addressId.country}</div>
                            </div>
                            <div className={"flex gap-5 justify-between"}>
                                <div>Город</div>
                                <div>{order && order.order.addressId.city}</div>
                            </div>
                            <div className={"flex gap-5 justify-between"}>
                                <div>Улица, дом</div>
                                <div>{order && order.order.addressId.street}</div>
                            </div>
                            <div className={"flex gap-5 justify-between"}>
                                <div>Почтовый индекс</div>
                                <div>{order && order.order.addressId.postcode}</div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex gap-5"}>
                        <div className={"w-44 flex items-center"}>Получатель</div>
                        <div className={"flex gap-3 items-center"}>{order && order.order.name}</div>
                    </div>
                    <div className={"flex gap-5"}>
                        <div className={"w-44 flex items-center"}>Номер</div>
                        <div className={"flex gap-3 items-center"}> {order && order.order.phone}</div>
                    </div>
                </div>
            </div>
            <div className={"mb-5"}>
                <h2 className={"text-lg py-3"}>Состав заказа</h2>
                <div className={"border flex flex-col"}>
                    <div className={"flex p-3"}>
                        <div className={"flex-auto text-gray-400"}>Наименование</div>
                        <div className={"w-48 text-gray-400"}>Кол-во</div>
                        <div className={"w-48 text-right text-gray-400"}>Стоимость</div>
                    </div>
                    <div>
                        {order && order.orderList.map(
                            ord => <div className={"flex py-1 px-3 border"} key={ord._id}>
                                {
                                    ord.bicycleId ? (
                                        <>
                                            <div className={"flex-auto"}>{ord.bicycleId.name}</div>
                                            <div className={"w-48"}>{ord.count}</div>
                                            <div className={"w-48 text-right"}>{ord.bicycleId.price} тг</div>
                                        </>
                                    ) : <>Товар удален</>
                                }
                            </div>
                        )}
                    </div>
                    <div className={"flex py-3 px-3 border gap-1 justify-end"}>
                        <div>Итого:</div>
                        <div className={"font-bold"}>{order && order.order.price} тг</div>
                    </div>
                </div>
            </div>
        </div>}
    </>
}

export default Order