

const BicycleMaking = ({item}) => {

    return <div  className={"w-full relative transition delay-500 flex gap-3 justify-between py-5"}>
            <img src={`http://localhost:3001${item.cart.bicycle.image}`} alt="" className={"h-16"}/>
            <div className={"flex-auto"}>{item.cart.bicycle.name}</div>
            <div className={"flex justify-between pt-2 gap-1"}>
                <div className={"pt-2"}>{item.cart.count}x</div>
                <span className={"text-xl font-bold"}>{item.cart.bicycle.price} ₽</span>
            </div>
        </div>
}

export default BicycleMaking