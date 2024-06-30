import nodemailer from "nodemailer";

export const mailSender = async (email:string, title:string, body:string) => {
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })


            let info = await transporter.sendMail({
                from: 'PETME',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error:any) {
        console.log(error.message);
    }
}


export async function sendVerificationEmail(email:string, otp:string) {
	try {
		const mailResponse = await mailSender(
			email,
			"Verification Email",
			 otp
		);
		console.log("Email sent successfully: ", mailResponse);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}