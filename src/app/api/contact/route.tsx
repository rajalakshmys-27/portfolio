import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        // Configure your email transport
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "rajalakshmys27@gmail.com", // Replace with your Gmail
                pass: "zxoj ypyn wwne hvzz", // Replace with your Gmail app password
            },
        });

        // Configure the email content
        const mailOptions = {
            from: email,
            to: "rajalakshmys27@gmail.com", // Your email address
            subject: `${name} has sent a Message`,
            html: `
                <html>
                    <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f9f9f9; color: #333;">
                    <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);">
                        <tr>
                        <td style="text-align: center; padding-bottom: 20px;">
                            <h2 style="color: #333; font-size: 24px; font-weight: bold;">New Message from Your Portfolio</h2>
                            <p style="font-size: 16px; color: #555;">Below are the details:</p>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <table style="width: 100%; border: 1px solid #ddd; border-radius: 4px; padding: 10px;">
                            <tr>
                                <td style="font-weight: bold; padding: 8px; background-color: #f4f4f4;">Name</td>
                                <td style="padding: 8px; background-color: #fafafa;">${name}</td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold; padding: 8px; background-color: #f4f4f4;">Email</td>
                                <td style="padding: 8px; background-color: #fafafa;">${email}</td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold; padding: 8px; background-color: #f4f4f4;">Message</td>
                                <td style="padding: 8px; background-color: #fafafa;">
                                ${message.replace(/\n/g, '<br>')}
                                </td>
                            </tr>
                            </table>
                        </td>
                        </tr>
                        <tr>
                        <td style="padding-top: 20px; text-align: center;">
                            <p style="font-size: 14px; color: #777;">This email was sent from your portfolio contact form.</p>
                        </td>
                        </tr>
                    </table>
                    </body>
                </html>
    `,
        };


        // Send the email
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
    }
}
