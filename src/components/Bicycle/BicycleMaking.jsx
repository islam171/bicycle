

const BicycleMaking = ({name, price, count}) => {
    return <div className={"w-full relative transition delay-500 flex gap-3 justify-between py-5"}>
            <img src="" alt="" className={"w-16 h-16"}/>
            <div className={"flex-auto"}>{name}</div>
            <div className={"flex justify-between pt-2 gap-1"}>
                <div className={"pt-2"}>{count}x</div>
                <span className={"text-xl font-bold"}>{price} ₽</span>
            </div>
        </div>
}

export default BicycleMaking