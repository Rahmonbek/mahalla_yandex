import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Alert, Form, Input, Button} from 'antd'
import './CSS/textaria.css'

function TextAria() {
    const [text,setText] = useState('')
    const [alert,setAlert] = useState({data: '', type : '', })
    const Yuborish = ()=>{
        console.log(text)
        if(text) setAlert({data: "Ma'lumot yuborildi", type: 'success'})
        else setAlert({data: "Ma'lumot to'ldirilmadi", type: 'error'})

    }
    setTimeout(()=>{
        setAlert({data: "", type: ''})
    },9000)
    return (
        <div className='formTextArea'>
            <div className="formTextArea_child">
            <h2>Assalomu alaykum hurmatli mahhallammiz fuqarolari</h2>
            <p>O'zbekiston Respublikasi vazirlar mahkamasining 2021 soni qaroroga muvoqir harbir 
                mahhala fuqarosi mahhalla idoralariga murjatni online tarzda topshirishi mumkin. 
                Bundan ko'zlangan asosoi maqsad ortiqcha hujjatchilikni yo'q qilishdan iborat. </p>
        <Form>
            <Alert message={alert && alert.data } type={alert.type} />
            <Form.Item>
                <Input.TextArea 
                placeholder="Bizda bo'layotgan muammoni yozing?!"
                allowClear onChange={(e)=>setText(e.target.value)}
                rows={4}/>
            </Form.Item>
            <Form.Item>
                    <Button block onClick={Yuborish} type="primary">
                        Yuborish
                    </Button>
            </Form.Item>
        </Form>
        <Link to='/' >Bosh sahifa</Link>
        </div>
        </div>
    )
}

export default TextAria
