function PreferencesSummary
    (props)
// (username, email, movie, review, onClose) 
{
    const { username, email, movie, review, onConfirm, onClose } = props
    // console.log("Summary ", movie)
    return (
        <div>
            <div>
                <h1>โปรดตรวจสอบข้อมูล</h1>
            </div>

            <div className="p-4">
                <label>ชื่อ-นามสกุล</label>
                <br />
                <label>{username}</label>
            </div>

            <div className="p-4">
                <label>E-mail</label>
                <br />
                <label>{email}</label>
            </div>

            <div className="p-4">
                <label>ภาพยนตร์ที่ชอบ</label>
                <br />
                <label> {!movie?.title ? "" : `${movie?.title} (${movie?.year}) (${movie?.director})`}</label>
            </div>

            <div className="p-4">
                <label>ความคิดเห็นเพิ่มเติม</label>
                <br />
                <label>{review}</label>
            </div>

            {/* button */}
            <div className="p-4">
                <button onClick={onClose}>Back</button>
                <button onClick={onConfirm}>Confirm</button>
            </div>
        </div>
    )
}

export default PreferencesSummary;