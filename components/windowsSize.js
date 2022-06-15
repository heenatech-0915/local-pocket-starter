import React, { useState, useEffect } from 'react'

export default () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        window.addEventListener("resize", UpdateWidthAndHeight())
        return () => window.removeEventListener("resize", UpdateWidthAndHeight())
    })

    function UpdateWidthAndHeight() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return [ width, height ]
}