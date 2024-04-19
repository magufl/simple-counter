import React, { useEffect, useState } from "react";


export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false)
    const [status, setStatus] = useState({
        title: 'Clock',
        icon: "fa fa-clock",
        titleStyles: 'text-primary'
    })

    const handleStart = () => {
        setIsRunning(!isRunning)
            setStatus({
                title: 'Chronometer',
                icon: "fas fa-stopwatch",
                titleStyles: 'text-success',
            })
    }

    const handleReset = () => {
        setCounter(0);
        setIsRunning(false);
        setStatus({
            title: 'Clock',
            icon: "fa fa-clock",
            titleStyles: 'text-primary'
        })
    }

    useEffect(()=>{
        if (isRunning) {
            const newInterval = setInterval(() => {
                setCounter(counter => counter + 1)
            }, 10)
            return () => clearInterval(newInterval)
        }
    }, [isRunning])

  

    return (
        <div className="container" >
            <h1>Simple Counter</h1>
            <h2 className={status.titleStyles}>{status.title}</h2>
            <div className="big-counter">
                <div><i className={status.icon}></i></div>
                <div>{Math.floor(counter / 100000000 % 10)}</div>
                <div>{Math.floor(counter / 10000000 % 10)}</div>
                <div>{Math.floor(counter / 1000000 % 10)}</div>
                <div>{Math.floor(counter / 100000 % 10)}</div>
                <div>{Math.floor(counter / 10000 % 10)}</div>
                <div>{Math.floor(counter / 1000 % 10)}</div>
                <div>{Math.floor(counter / 100 % 10)}</div>
                <div>{','}</div>
                <div>{Math.floor(counter / 10 % 10)}</div>
                <div>{Math.floor(counter % 10)}</div>
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">

                    <button onClick={handleStart} type="button" className="btn btn-outline-success">
                        {isRunning ? 'Pause' : 'Start'}
                    </button>
                    <button onClick={handleReset} type="button" className="btn btn-outline-danger">
                        Reset
                    </button>

                </div>
            </div>
        </div>
    )
}