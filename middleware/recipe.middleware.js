const checkNumber = (req, res, next) => {
    try {
        const { number } = req.query;
        if (number < 5) res.send("number is too small");
        next()
    } catch (error) {
        console.log(error)
    }
};
module.exports = checkNumber;