import React, { Component } from 'react';

class UserAdd extends Component {
    constructor() {
        super();
        this.state = {
           /* name:'',
            age:0,
            gender:''*/
            form: {
                name: {
                    valid: false,
                    value: '',
                    error: ''
                },
                age: {
                    valid: false,
                    value: 0,
                    error: ''
                },
                gender: {
                    valid: false,
                    value: '',
                    error: ''
                }
            }
        };
    }

    handleValueChange(field, value, type='string') {
        if (type === 'number') {
            value=+value;
        }

        // 判断表单
        const {form} = this.state;
        const newFileObj = {value, vaild:true, error:''};
        switch (field) {
            case 'name':
                if (value.length >= 5) {
                    newFileObj.error = '用户最多4个字符';
                    newFileObj.vaild = false
                } else if (value.length === 0) {
                    newFileObj.error = '请输入用户名';
                    newFileObj.vaild = false;
                }
                break;
            case 'age': {
                if (value > 100 || value <= 0) {
                    newFieldObj.error = '请输入1~100之间的数字';
                    newFieldObj.valid = false;
                }
                break;
            }
            case 'gender': {
                if (!value) {
                    newFieldObj.error = '请选择性别';
                    newFieldObj.valid = false;
                }
                break;
            }
        }


        this.setState({
            // [field]: value
            form: {
                ...form,
                [field]: newFileObj
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // alert(JSON.stringify(this.state))
        const { form:{name, age, gender} } = this.state;
        alert(JSON.stringify(this.state))
        if (!name.valid || !age.valid || !gender.valid) {
            alert("请填写正确的信息后重试");
            return;
        }
        fetch('http://localhost:3000/user', {
            method:'post',
            body:JSON.stringify({
                name:name.value,
                age:age.value,
                gender:gender.value
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.id) {
                    alert("添加用户成功");
                    this.setState({
                        name:'',
                        age:0,
                        gender:''
                    })
                } else {
                    alert("添加失败")
                }
            })
            .catch((err) => console.error(err))

    }

    render() {
        // const { name, age, gender } = this.state;
        const {form: {name, age, gender}} = this.state;
        return (
            <div>
                <header>
                    <h1>添加用户</h1>
                </header>

                <main>
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                        <label>用户名：</label>
                        <input type="text" value={name.value} onChange={(e)=> this.handleValueChange('name',e.target.value)} />
                        {!name.valid && <span>{name.error}</span>}
                        <br/>
                        <label>年龄：</label>
                        <input type="number" value={age.value || ''} onChange={(e)=> this.handleValueChange('age',e.target.value,'number')}/>
                        {!age.valid && <span>{age.error}</span>}
                        <br/>
                        <label>性别：</label>
                        <select value={gender.value} onChange={(e)=>this.handleValueChange('gender',e.target.value)}>
                            <option value="">请选择</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                        {!gender.valid && <span>{gender.error}</span>}
                        <br/>
                        <br/>
                        <input type="submit" value="提交"/>
                    </form>
                </main>
            </div>
        )
    }
}

export default UserAdd