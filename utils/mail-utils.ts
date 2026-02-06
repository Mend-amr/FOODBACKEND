import nodemailer, { createTransport } from "nodemailer";

export const sendVerificationEmail = async (
  email: string,
  verificationUrl: string,
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    html: `
      <p>Please click the link below to verify your email:</p>
      <a href="${verificationUrl}">Verify Email</a>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};
