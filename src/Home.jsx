import styled from "styled-components"
import data from "/data/data.json"
import fs from "fs"
import axios from "axios"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    h1{
        text-align: center;
        width: 30%;
    }
    .__boxMain{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 30%;
        margin-top: 20px;
        border: 1px solid grey;
        border-radius: 10px;
    }
    .__box{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
        height: 20%;
        margin-top: 10px;
        input{
            width: 80%;
            height: 30px;
            margin-top: 10px;
            border-radius: 5px;
            border: 1px solid grey;
        }
        button{
            width: 80%;
            height: 30px;
            margin-top: 10px;
            border-radius: 5px;
            border: 1px solid green;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }
        select{
            width: 80%;
            height: 30px;
            margin-top: 10px;
            border-radius: 5px;
            border: 1px solid grey;
        }
    }
    p{
        margin-top: 50px;
        width: 30%;
    }
    @media (max-width: 768px){
        h1{
            font-size: 20px;
            width: 80%;
        }
        .__boxMain{
            width: 80%;
            .__boxMain{
                .__box{
                    input{
                        height: 100px;
                    }
                    button{
                        height: 50px;
                    }
                    select{
                        height: 50px;
                    }
                }
            }
        }
    }
`

export default function Home() {

    function submit(){
        try{
            if(document.getElementById('name').value === '' || document.getElementById('nomor').value === '', document.getElementById('kelas').value === ''){
                return alert('Data Tidak Boleh Kosong')
            }
            axios.get(`https://osissmankedo-api.vercel.app/addData/${document.getElementById('name').value}/${document.getElementById('nomor').value}/${document.getElementById('kelas').value}`)
            .then(res => {
                if (res.data.status === 'failed'){
                    alert('Data Gagal Ditambahkan')
                    return
                }
            }).catch(err => {
                console.log(err)
                alert("Gagal Save Data")
                return
            })
            alert('Data Berhasil Diinputkan')
        } catch(err){
            alert('Data Gagal Diinputkan')
            console.log(err)
        }
    }
    return (
        <Container>
        <h1>Input Data For BOT Whatsapp Sekbid TIK</h1>
        <div className="__boxMain">
            <div className="__box">
                <label htmlFor="name">Nama :</label>
                <input type="text" id="name" name="name" placeholder="Alok" />
            </div>
            <div className="__box">
                <label htmlFor="nim">Nomor : </label>
                <input type="text" id="nomor" name="nomor" placeholder="Contoh : 08xxxxxxx" />
            </div>
             <div className="__box">
                <label htmlFor="nim">Kelas : </label>
                <select name="kelas" id="kelas">
                    <option value="10-1">X-1</option>
                    <option value="10-2">X-2</option>
                    <option value="10-3">X-3</option>
                    <option value="10-4">X-4</option>
                    <option value="10-5">X-5</option>
                    <option value="10-6">X-6</option>
                    <option value="10-7">X-7</option>
                    <option value="10-8">X-8</option>
                    <option value="10-9">X-9</option>
                    <option value="11-MIPA1">XI-MIPA-1</option>
                    <option value="11-MIPA2">XI-MIPA-2</option>
                    <option value="11-MIPA3">XI-MIPA-3</option>
                    <option value="11-MIPA4">XI-MIPA-4</option>
                    <option value="11-MIPA5">XI-MIPA-5</option>
                    <option value="11-IPS1">XI-IPS-1</option>
                    <option value="11-IPS2">XI-IPS-2</option>
                    <option value="11-IPS3">XI-IPS-3</option>
                    <option value="11-IPS4">XI-IPS-4</option>
                    <option value="11-IPS5">XI-IPS-5</option>
                </select>
            </div>
            <div className="__box">
                <button onClick={() => submit()}>Submit</button>
            </div>
        </div>
        <p>Silahkan Hubungi <a href="https://wa.me/083806211924">083806211924 (Agus Maulana)</a>/ <a href="https://wa.me/0838317146590">083817146590 (Nevo)</a> jika ada masalah</p>
        </Container>
    )
    }