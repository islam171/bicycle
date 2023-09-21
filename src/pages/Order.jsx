import {Link} from "react-router-dom";

const Order = () => {


    return <div className={"py-5"}>
        <h1 className={"text-2xl"}>Заказ № 1054</h1>
        <div className={"my-5 p-3 bg-green-100"}>Спасибо за заказ!</div>
        <div className={"mb-5"}>
            <h2 className={"text-lg py-3"}>Информация о заказе</h2>
            <div className={"border-t-2 border-b-2 py-5 flex flex-col gap-5"}>
                <div className={"flex gap-5"}>
                    <div className={"w-36 flex items-center"}>Дата оформления</div>
                    <div className={"flex gap-3 items-center"}>18.09.2023 10:54</div>
                </div>
                <div className={"flex gap-5"}>
                    <div className={"w-36 flex items-center"}>Сумма и статус</div>
                    <div className={"flex gap-3 items-center"}>
                        <div className={"font-semibold"}>7 240 ₽</div>
                        <div className={"px-4 py-1 border-2"}>Принят</div>
                        <div className={"px-4 py-1 border-2"}>Не оплачен</div>
                        <Link to={""} className={"underline"}>Повторить заказ</Link>
                    </div>
                </div>
                <div className={"flex gap-5"}>
                    <div className={"w-36 flex items-center"}>Получать уведомления в мессенджерах</div>
                    <div className={"flex gap-3 items-center"}>18.09.2023 10:54</div>
                </div>
                <div className={"flex gap-5"}>
                    <div className={"w-36 flex items-center"}>Способ оплаты</div>
                    <div className={"flex gap-3 items-center"}>Наличными курьеру</div>
                </div>
                <div className={"flex gap-5"}>
                    <div className={"w-36 flex items-center"}>Способ доставки</div>
                    <div className={"flex gap-3 items-center"}>Самовывоз (На пункте выдачи)</div>
                </div>
                <div className={"flex gap-5"}>
                    <div className={"w-36 flex items-center"}>Адрес доставки</div>
                    <div className={"flex gap-3 items-center"}>г Санкт-Петербург</div>
                </div>
                <div className={"flex gap-5"}>
                    <div className={"w-36 flex items-center"}>Получатель</div>
                    <div className={"flex gap-3 items-center"}>islam +7(234)567-89-02</div>
                </div>
                <div className={"flex gap-5"}>
                    <div className={"w-36 flex items-center"}>Комментарии к заказу</div>
                    <div className={"flex gap-3 items-center"}>dsdfgbf</div>
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
                <div className={"flex py-1 px-3 border"}>
                    <div className={"flex-auto"}>Название вашего товара будет здесь (большой / белый)</div>
                    <div className={"w-48"}>1</div>
                    <div className={"w-48 text-right"}>650 ₽</div>
                </div>
                <div className={"flex py-3 px-3 border gap-1 justify-end"}>
                    <div>Итого:</div>
                    <div className={"font-bold"}>7 240 ₽</div>
                </div>
            </div>
        </div>
    </div>
}

export default Order