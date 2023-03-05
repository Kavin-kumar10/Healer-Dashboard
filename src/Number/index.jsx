import React from 'react'
import {useSpring,animated} from 'react-spring'

const Number = ({n}) =>{
    const {number} = useSpring({
        from:{number:0},
        number:n,
        delay:200,
        config:{mass:0.5,tension:10,friction:5},
    });
    return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}

export default Number