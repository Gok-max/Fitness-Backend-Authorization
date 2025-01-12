import transporter from "../utils/nodemailerConfig.js";

export const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: 'gokulven01@gmail.com',
      to,
      subject,
      text,
    });
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
    console.log(to,subject,text,'to');
  }
};
