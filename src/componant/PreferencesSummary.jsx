function PreferencesSummary
    (props) {
    const { username, email, movie, review, onConfirm, onClose } = props
    return (
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-white text-gray-800 shadow-lg select-none">
            <div className="p-5">
                <h1>โปรดตรวจสอบข้อมูล</h1>
            </div>

            <div className="p-4">
                <div className="flex justify-start">
                    <div className="text-start">
                        <label className="font-bold text-black">ชื่อ-นามสกุล</label>
                        <div className="text-red-500">{username}</div>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-start">
                    <div className="text-start">
                        <label className="font-bold text-black">E-mail</label>
                        <div className="text-red-500">{email}</div>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-start">
                    <div className="text-start">
                        <label className="font-bold text-black">ภาพยนตร์ที่ชอบ</label>
                        <div className="text-red-500">{!movie?.title ? "" : `${movie?.title} (${movie?.year}) - ${movie?.director}`}</div>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-start">
                    <div className="text-start">
                        <label className="font-bold text-black">ความคิดเห็นเพิ่มเติม</label>
                        <div className="text-red-500">{review}</div>
                    </div>
                </div>
            </div>


            {/* button */}
            <div className="p-4 flex justify-end gap-1">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={onClose}>
                    Back
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    onClick={onConfirm}>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default PreferencesSummary;