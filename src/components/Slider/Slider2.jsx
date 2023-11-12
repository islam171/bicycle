import styles from './Slider.module.scss'
import {useEffect, useRef, useState} from "react";
import Bicycle from "../Bicycle/Bicycle";

const Slider2 = ({items, width, status, error}) => {

    const slider = useRef(null)
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)

    let fixedColItem = Math.floor(width / 170)
    const [currentIndex, setCurrentIndex] = useState(0)
    let colItem = items.length < fixedColItem ? items.length : fixedColItem
    let itemWidth = (width / colItem) - 20


    useEffect(() => {
        slider.current.childNodes.forEach((element) => {
            element.style = `transform: translate(-${currentIndex * (width / colItem)}px); min-width: ${itemWidth}px; `
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
        <div className={"flex flex-col gap-5"}>
            <div className={styles.slider__header}>
                <h1>Сопутствующие товары</h1>
                <div className={styles.slider__arrows}>
                    <button className={styles.slider__arrow_right} disabled={next} onClick={nextHandler}>
                        <div></div>
                        <span></span>
                    </button>
                    <button className={styles.slider__arrow_left} disabled={prev} onClick={prevHandler}>
                        <div></div>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className={styles.slider} style={{width: `${width}px`}}>
                <div className={styles.slider__track_mini} ref={slider}>
                    {status !== 'loading' ? (!error ? items.map((bike) =>
                            <div key={bike._id} className={styles.slider__item2} style={{minWidth: `${itemWidth}px`}}>
                                <Bicycle bike={bike}/>
                            </div>
                        ) :
                        <div>Server error</div>) : (<div>loading...</div>)}
                </div>
            </div>
        </div>
    </>
}

export default Slider2