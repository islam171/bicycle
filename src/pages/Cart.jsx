import CartItem from "../components/CartItem";

const Cart = () => {

    const Making = () => {
        console.log('making')
    }

    return <>
        <div className={""}>
            <h1 className={"text-2xl"}>Корзина</h1>
            <div className={"flex gap-5 mt-3 max-lg:flex-col"}>
                <div className={"flex flex-col gap-7"}  style={{flex: "1 1 auto"}}>
                    <CartItem/>
                </div>
                <div className={"max-w-sm max-lg:max-w-full"}>
                    <div className={"p-5 bg-cyan-100 mb-3 max-lg:mb-0"}>
                        <div className={"text-xl mb-3"}>Введите промокод</div>
                        <div className={"flex"}><input type="text" placeholder={"Промо код"} className={"p-2"}/><button className={"p-6 bg-gray-500"}></button></div>
                    </div>
                    <div className={""}>
                        <div className={"p-5 bg-cyan-100"}>
                            <div className={"flex justify-between text-lg"}><div>Товары (5)</div><div>23 990</div></div>
                            <div className={"flex justify-between text-lg items-center"}><div>Итого к оплате:</div><div className={"text-4xl"}>23 990</div></div>
                        </div>
                        <button className={"bg-blue-950 w-full p-3 text-xl text-white"} onClick={Making}>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default  Cart