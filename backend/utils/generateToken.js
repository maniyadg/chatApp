import jwt from "jsonwebtoken";
import ls  from 'localstorage-slim'

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

    ls.set("token", token)

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000,
	});
};

export default generateTokenAndSetCookie;


