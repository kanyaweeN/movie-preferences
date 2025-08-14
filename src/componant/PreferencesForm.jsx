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
    const [error, setError] = useState({
        name: "",
        image: "",
        price: "",
        description: "",
        email: "",
    })
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

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
        setError({});
    }

    function submitonClick(e) {
        e.preventDefault();
        let err = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!preferData.username.trim()) {
            err.username = "โปรดใส่ชื่อของคุณ.";
        }

        if (!preferData.email.trim()) {
            err.email = "โปรดใส่อีเมลของคุณ";
        } else if (!emailRegex.test(preferData.email)) {
            err.email = "รูปแบบอีเมลไม่ถูกต้อง";
        }

        console.log(preferData.movie?.title)
        if (!preferData.movie?.title) {
            err.movie = "กรุณาเลือกหนังที่คุณชอบ";
        }

        setError(err);

        if (Object.keys(err).length == 0) {
            setIsOpen(true);
        }
    }

    // console.log("isOpen : ", isOpen)
    // console.log("main : ", JSON.stringify(preferData, null, 2));
    return (
        <>
            {!isOpen && (

                <div className="border-2 border-gray-300 rounded-lg p-4 bg-white text-gray-800 shadow-lg">
                    <form onSubmit={submitonClick}>
                        <div>
                            <h1>สำรวจความชอบภาพยนตร์</h1>
                        </div>

                        {/* username */}
                        <div className="p-4">
                            <label className="flex items-center mb-3 font-bold">
                                ชื่อ-นามสกุล
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="กรุณากรอก ชื่อ-นามสกุล"
                                value={preferData.username}
                                onChange={handleInputonChange}
                                className="w-full border-2 border-gray-300 rounded-md p-3 focus:border-blue-500 focus:outline-none"
                            ></input>
                            {error.username && <p className="flex items-center text-red-500">{error.username}</p>}
                        </div>

                        {/* E-mail */}
                        <div className="p-4">
                            <label className="flex items-center mb-3 font-bold">
                                E-mail
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="กรุณากรอก E-mail"
                                value={preferData.email}
                                onChange={handleInputonChange}
                                className="w-full border-2 border-gray-300 rounded-md p-3 focus:border-blue-500 focus:outline-none"
                            ></input>
                            {error.email && <p className="flex items-center text-red-500">{error.email}</p>}
                        </div>

                        {/* movie */}
                        <div className="p-4">
                            <label className="flex items-center mb-3 font-bold">
                                ภาพยนตร์ที่ชอบ
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            {
                                movies.map((item) =>
                                    <div key={item.title} className="flex items-center mb-2">
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
                                        <label className="ml-2">
                                            {item.title} ({item.year}) - {item.director}
                                        </label>
                                    </div>
                                )
                            }
                            {error.movie && <p className="flex items-center text-red-500">{error.movie}</p>}
                        </div>

                        {/* review */}
                        <div className="p-4">
                            <label className="flex items-center mb-3 font-bold">
                                ความคิดเห็นเพิ่มเติม
                            </label>
                            <textarea
                                id="review"
                                name="review"
                                rows="4"
                                cols="50"
                                placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                                value={preferData.review}
                                onChange={handleInputonChange}
                                className="w-full border-2 border-gray-300 rounded-md p-3 focus:border-blue-500 focus:outline-none"
                            ></textarea>
                        </div>

                        {/* button */}
                        <div className="p-4 flex justify-end gap-1">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                onClick={resetonClick}>
                                Reset
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                type="submit">
                                Submit
                            </button>
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