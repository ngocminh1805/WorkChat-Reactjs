import * as React from 'react';
import './boxchatInputMess.css'
import gim from '../../assets/gim.png'
import smile from '../../assets/smile.png'
import send from '../../assets/send.png'

interface Props{

}

interface State{
    width: number

}

class BoxchatInputMessage extends React.PureComponent<Props,State>{
    constructor(props:Props){
        super(props)

        this.state = {
            width: (window.innerWidth - 80)*0.8
        }
    }
    updateWidth = () => {
        this.setState({width: (window.innerWidth - 80)*0.8})
    }

    componentDidMount(){
        window.addEventListener('resize',this.updateWidth)
    }



    render(){
        return(
            <div className = "boxchatInput-container" id = "boxchatInput-container"
            style = {{width:this.state.width}}>
                <img src = {gim} className = "icon"/>
                <div className = "input-mess-container">    
                    <input className = "input-mess"
                    placeholder = "Nhập nội dung bình luận"/>
                    <img src = {smile} className = "icon"/>
                </div>
                <img src = {send} className="icon"/>

            </div>

        )
    }
}

export default BoxchatInputMessage