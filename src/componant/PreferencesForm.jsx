import { useState } from "react";
import movies from "../data/movies";
import PreferencesSummary from "./PreferencesSummary";

function PreferencesForm() {
    const [preferData, setpreferData] = useState({
        username: "",
        email: "",
        movie: {
            title: "",
            year: "",
            director: "",
        },
        review: "",
    })
    const [isOpen, setIsOpen] = useState(false);

    function handleInputonChange(e) {
        const { name, value } = e.target;
        // console.log("Inputon : ", name, "=", value)
        setpreferData({
            ...preferData,
            [name]: value,
        });
    }

    function handleRadioonChange(e) {
        // const { name, value } = e.target;
        // console.log("Radio : ", JSON.stringify(preferData, null, 2));
        // const { key, value } = obj;
        setpreferData({
            ...preferData,
            movie: JSON.parse(e.target.value)
        });
    }

    function resetonClick(e) {
        e.preventDefault()
        // console.log(JSON.stringify(preferData, null, 2))
        resetForm();
        // console.log("reset : ", isOpen)
    }
    function resetForm() {
        setpreferData({
            username: "",
            email: "",
            movie: {
                title: "",
                year: "",
                director: "",
            },
            review: "",
        })
    }

    function submitonClick(e) {
        e.preventDefault();
        setIsOpen(true); // เปิด popup

        // console.log("submit : ", isOpen)
    }

    // console.log("isOpen : ", isOpen)
    // console.log("main : ", JSON.stringify(preferData, null, 2));
    return (
        <>
            {!isOpen && (

                <div>
                    <form onSubmit={submitonClick}>
                        <div>
                            <h1>สำรวจความชอบภาพยนตร์</h1>
                        </div>

                        {/* username */}
                        <div className="p-4">
                            <label>ชื่อ-นามสกุล</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="กรุณากรอก ชื่อ-นามสกุล"
                                value={preferData.username}
                                onChange={handleInputonChange}
                            ></input>
                        </div>

                        {/* E-mail */}
                        <div className="p-4">
                            <label>E-mail</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="กรุณากรอก E-mail"
                                value={preferData.email}
                                onChange={handleInputonChange}
                            ></input>
                        </div>

                        {/* movie */}
                        <div className="p-4">
                            <label>ภาพยนตร์ที่ชอบ</label>
                            {
                                movies.map((item) =>
                                    <div key={item.title}>
                                        <input
                                            type="radio"
                                            id={item.title}
                                            name="movie"
                                            value={JSON.stringify(item)}
                                            checked={
                                                preferData.movie?.title === item.title
                                            }
                                            onChange={handleRadioonChange}
                                        ></input>
                                        {item.title}({item.year})({item.director})
                                    </div>
                                )
                            }
                        </div>

                        {/* review */}
                        <div className="p-4">
                            <label>ความคิดเห็นเพิ่มเติม</label>
                            <textarea
                                id="review"
                                name="review"
                                rows="4"
                                cols="50"
                                placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                                value={preferData.review}
                                onChange={handleInputonChange}
                            ></textarea>
                        </div>

                        {/* button */}
                        <div className="p-4">
                            <button onClick={resetonClick}>Reset</button>
                            <button type="submit">Submit</button>
                        </div>
                    </form >
                </div >)
            }

            {/* Popup Summary */}
            {isOpen && (
                console.log(preferData.username),
                <PreferencesSummary
                    username={preferData.username}
                    email={preferData.email}
                    movie={preferData.movie}
                    review={preferData.review}
                    onConfirm={() => {
                        alert("บันทึกข้อมูลเสร็จแล้ว");
                        resetForm();
                        setIsOpen(false);
                    }}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>
    )
}

export default PreferencesForm;