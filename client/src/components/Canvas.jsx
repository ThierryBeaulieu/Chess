import React from "react";
import "./Canvas.css"

class Canvas extends React.Component {

    draw(ctx) {
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50,100,20,0,2*Math.PI);
        ctx.fill();
    }

    render(){
        return (
            <React.Fragment>
                <canvas id="myCanvas" width="200" height="100">
                </canvas>
            </React.Fragment>
        );
    }

}

export default Canvas;