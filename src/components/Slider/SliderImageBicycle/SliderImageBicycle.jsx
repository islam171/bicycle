import styles from './SliderImageBicycle.module.scss'
import {useEffect, useRef, useState} from "react";

const SliderImageBicycle = ({items, status, error, setViewImg}) => {

    let isSlider = items.length > 4

    const slider = useRef(null)
    const main = useRef(null)
    let width = 400
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)

    const [currentIndex, setCurrentIndex] = useState(0)
    let colItem = 4
    let itemWidth = (width / colItem)


    useEffect(() => {
        slider.current.childNodes.forEach((element) => {
            element.style = `transform: translate(-${currentIndex * (width / colItem)}px); width: ${itemWidth}px; `
        })
    }, [currentIndex, itemWidth, colItem, width])

    const prevHandler = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? currentIndex : currentIndex - 1
        setNext(false)
        isFirstSlide ? setPrev(true) : setPrev(false)
        setCurrentIndex(newIndex)
    }
    const nextHandler = () => {
        const isLastSlide = currentIndex === items.length - colItem
        setPrev(false)
        const newIndex = isLastSlide ? currentIndex : currentIndex + 1
        isLastSlide ? setNext(true) : setPrev(false)
        setCurrentIndex(newIndex)
    }
    return <>
        <div className={"w-full"} ref={main}>
            <div className={styles.slider} style={{width: `${width}px`}}>
                {isSlider && <button className={styles.slider__arrow_left} onClick={() => prevHandler()} disabled={prev}><div></div></button>}
                <div className={styles.slider__track} ref={slider}>
                    {status !== 'loading' ? (!error ? items.map((item, index) =>
                            <img className={styles.slider__item} src={`http://localhost:3001${item}`} alt="" key={index} onClick={() => setViewImg(index)}/>
                        ) :
                        <div>Server error</div>) : (<div>loading...</div>)}
                </div>
                {isSlider && <button className={styles.slider__arrow_right} onClick={() => nextHandler()} disabled={next}><div></div></button>}
            </div>
        </div>
    </>
}

export default SliderImageBicycle