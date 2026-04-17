const getDT = (prm) => {
    const now = new Date();
    if (prm == 'dt') {
        return {
            "date": now.toLocaleDateString(),
            "time": now.toLocaleTimeString()
        } 
    } else {
        return { "date": "", "time": "" }
    }
}

module.exports = {
    getDT
}